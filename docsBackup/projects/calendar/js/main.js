/*
 * Possible - Costa Rica
 * THREE.js Calendar
 * 
 */
 var calendar = window.calendar || {};

 (function (context) {

    'use strict';

    var geometry, material, otherMaterial, scene, camera, renderer, light;
    var controls, cube, text, loader, currentMonthDayGroup, cubesGroup;
    var currentDayGroup, monthText;
    var currentMonth, currentYear, currentDay, rowsQuant, dayAnimationGroup;


    var particleSystem, uniforms, particles = 1000;

    loader = new THREE.FontLoader();
        loader.load('../../fonts/gotham_black_regular.json', function(font){
        init(font);
        animate();

        /*
         * The next code exposes variables as public (for testing purposes)
         */
        context.publicCalendar = {
            scene : scene,
            currentDayGroup : currentDayGroup
        };

    });

    /*
     * Inits all elements and functions
     */
    function init(font) {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        controls = new THREE.OrbitControls( camera, renderer.domElement );

        var ambientLight = new THREE.AmbientLight( 0x000000 );
        scene.add( ambientLight );

        light= new THREE.PointLight( 0xffffff, 1, 0 );
        light.position.set( 0, 0, 10 );
        scene.add( light );

        
        renderCubes(font);

        renderHeaderFooter(font);

        camera.position.z = 6;

        renderParticles();

        // grid helper
        var gridXZ = new THREE.GridHelper(60, 33);
        scene.add(gridXZ);

        // axis helper (x y z color lines)
        var axisHelper = new THREE.AxesHelper( 25 );
        scene.add( axisHelper );

        window.addEventListener( 'resize', onWindowResize, false );
    }

    /*
     * Resizes the scene when the window is resized
     */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /*
    * Render all text in Header an Footer
    */
    function renderHeaderFooter(font){
        var monthTitle, weekDays = new THREE.Object3D(), wDay;
        var arrWeekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        var box, xTitlePos;

        rowsQuant = createDaysArray().length;

        //---Month----

        switch (getCurrentMonth()){
            case 0:
            monthTitle = "January"
            break;
            case 1:
            monthTitle = "February"
            break;
            case 2:
            monthTitle = "March"
            break;
            case 3:
            monthTitle = "April"
            break;
            case 4:
            monthTitle = "May"
            break;
            case 5:
            monthTitle = "June"
            break;
            case 6:
            monthTitle = "July"
            break;
            case 7:
            monthTitle = "August"
            break;
            case 8:
            monthTitle = "September"
            break;
            case 9:
            monthTitle = "October"
            break;
            case 10:
            monthTitle = "November"
            break;
            case 11:
            monthTitle = "December"
        };

        monthText = renderMonthText(font, monthTitle, 0xa2d4ab, 0.6);

        box = new THREE.Box3().setFromObject( monthText );
        
        xTitlePos = box.max.x;

        xTitlePos = xTitlePos/2;

        xTitlePos = -xTitlePos;


        


        //----Week Days----

        for(var i = 0; i<7; i++){
            wDay = renderText(font, arrWeekDays[i], 0x4f4232, 0.3);
            wDay.position.set(i+1, 0, 0);
            weekDays.add(wDay);
        }




        //Positions for both

        if(rowsQuant == 4){
            monthText.position.set(xTitlePos, 3, 0);
            weekDays.position.set(-4, 2.25, 0);
        }else if(rowsQuant == 5){
            monthText.position.set(xTitlePos, 3.5, 0);
            weekDays.position.set(-4, 2.75, 0);
        }else{
            monthText.position.set(xTitlePos, 4, 0);
            weekDays.position.set(-4, 3.25, 0);
        }
        scene.add(monthText);
        scene.add(weekDays);
    }

    /*
     * Render all the calendar Cubes - 3D Object Group
     */
    function renderCubes(font){
        var rowPos, arrDays = createDaysArray();
        dayAnimationGroup = new THREE.Object3D();
        cubesGroup = new THREE.Object3D();
        currentDayGroup = new THREE.Object3D();

        geometry = new THREE.BoxGeometry( 0.9, 0.5, 0.5 );
        material = new THREE.MeshPhongMaterial( { color: 0x3eaca9} );
        otherMaterial = new THREE.MeshPhongMaterial( { color: 0x547a82} );


        rowsQuant = arrDays.length;

        for(var i=0; i<rowsQuant; i++){
            if(i==0){
                rowPos = rowsQuant-1;
            }

            for(var x=0; x<7; x++){

                currentMonthDayGroup = new THREE.Object3D();
                
                //other month days color change
                if((rowPos==0 && arrDays[rowPos][x]>22) || (rowPos == rowsQuant-1 && arrDays[rowPos][x]<7)){
                    cube = new THREE.Mesh( geometry, otherMaterial );
                    text = renderText(font, arrDays[rowPos][x], 0x4f4232, 0.3);
                }else{
                    //current Month colors
                    cube = new THREE.Mesh( geometry, material );
                    text = renderText(font, arrDays[rowPos][x], 0xe5eec1, 0.3);
                }

                text.position.set(0, 0, 0.25);

                if(arrDays[rowPos][x]==getCurrentDay()){
                    currentDayGroup.add(text);
                    currentDayGroup.add(cube);
                    

                    currentDayGroup.position.set(x, i,  0);

                    currentDayGroup.name= "r"+i+"_c"+x;

                    cubesGroup.add(currentDayGroup);
                }else{

                    currentMonthDayGroup.add(text);
                    currentMonthDayGroup.add(cube);

                    currentMonthDayGroup.position.set(x, i,  0);

                    currentMonthDayGroup.name= "r"+i+"_c"+x;
                    cubesGroup.add( currentMonthDayGroup );
                }
            }

            rowPos--;
        }

        scene.add(cubesGroup);

        if(rowsQuant ==4){
            cubesGroup.position.set(-3, -1.5,  0);
        }else if(rowsQuant==5){
            cubesGroup.position.set(-3, -2,  0);
        }else{
            cubesGroup.position.set(-3, -2.5,  0);
        }
    }

    /*
    * Render background particles
    */
    function renderParticles(){
        uniforms = {
            color:     { value: new THREE.Color( 0xffffff ) },
            texture:   { value: new THREE.TextureLoader().load( "images/spark1.png" ) }
        };
        var shaderMaterial = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:   document.getElementById( 'vertexshader' ).textContent,
            fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
            blending:       THREE.AdditiveBlending,
            depthTest:      false,
            transparent:    true
        });
        var radius = 200;
        geometry = new THREE.BufferGeometry();
        var positions = new Float32Array( particles * 2 );
        var colors = new Float32Array( particles * 3 );
        var sizes = new Float32Array( particles );
        var color = new THREE.Color();
        for ( var i = 0, i3 = 0; i < particles; i ++, i3 += 3 ) {
            positions[ i3 + 0 ] = ( Math.random() * 3 - 1 ) * radius;
            positions[ i3 + 1 ] = ( Math.random() * 3 - 1 ) * radius;
            positions[ i3 + 2 ] = ( Math.random() * 3 - 1 ) * radius;
            color.setHSL( 1, 1, 1 );
            colors[ i3 + 0 ] = color.r;
            colors[ i3 + 1 ] = color.g;
            colors[ i3 + 2 ] = color.b;
            sizes[ i ] = 20;
        }
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
        geometry.addAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
        geometry.addAttribute( 'size', new THREE.BufferAttribute( sizes, 1 ) );
        particleSystem = new THREE.Points( geometry, shaderMaterial );

        particleSystem.position.z=-600;

        scene.add( particleSystem );
    }

    /*
    *Creates multidimesional array with the Days for the current month
    */

    function createDaysArray(){
        var arrWeek = [], arrMonth = [], i, r, lastDay, z, e, isNextMonth=false;
        //Saves in "d" the week day for the first day of the month
        var  d = new Date(getCurrentYear(), getCurrentMonth(), 1).getDay();

        //Saves in "prevMonthDays" the quantity of days for the previous month, for daysInMonth function January starts on 1
        //but getCurrentMonth is based as January at 0, that's why the previous month for this is only getCurrentMonth
        var prevMonthDays = daysInMonth(getCurrentMonth(), getCurrentYear());

        var currentMonthDays = daysInMonth(getCurrentMonth()+1, getCurrentYear());

        //Saves in "a" the quantity of days of the previous month will be shown
        var a = d - 1;

        //Saves in "b" the rest of days for the prev month that WONT be shown
        var b = prevMonthDays - a;

        weeksPerMonth(d, currentMonthDays);


        //creates rows for matrix
        for( i=0; i<rowsQuant; i++ ) {
            arrMonth.push( [] );
        }

        e = currentMonthDays+1;

        for(r = 0; r<rowsQuant; r++){

            if(arrMonth[0].length<1){
                for (i = b+1; i <= prevMonthDays; i ++){
                    arrWeek.push(i);
                }

                for (i = 1; arrWeek.length < 7; i++){
                    arrWeek.push(i);
                }

            }else{
                for(i = lastDay + 1; arrWeek.length < 7; i++){

                    if(i==e){
                        isNextMonth=true;
                        z = 1;
                    }
                    if(!isNextMonth){
                        z = i;
                    }
                    arrWeek.push(z);

                    z++
                }
            }

            for( i = 0; i<arrWeek.length; i++){
                arrMonth[r].push(arrWeek[i]);
            }

            lastDay = arrWeek[6];

            arrWeek = [];

        }

        return arrMonth;
    }

    /*
    *Changes the var sixWeekMonth to true if the month has 6 weeks
    *Params: the week Day that the month starts with
    * and the quantity of days in the month that it has
    */
    function weeksPerMonth(weekDay, monthDays){
        if (monthDays == 28 && weekDay == 1){
            rowsQuant = 4;
        }else if (monthDays == 28 && weekDay !== 1){
            rowsQuant = 5;
        }else if (monthDays == 29){
            rowsQuant = 5;
        }else if (monthDays == 30 && weekDay == 0){
            rowsQuant = 6;
        }else if (monthDays == 30 && weekDay !== 0){
            rowsQuant = 5;
        }else if (monthDays == 31 && (weekDay == 0 || weekDay == 6)){
            rowsQuant = 6;
        }else if (monthDays == 31 && weekDay !== 0 && weekDay !== 6){
            rowsQuant = 5;
        }
    }

    /*
    *Sets current month by number
    *example: 0 for january
    */
    function setCurrentMonthByNumber(number){
        currentMonth = number;
    }

    /*
    *Returns current Month
    */
    function getCurrentMonth(){
        currentMonth = 8; //January starts in 0
        return currentMonth;
    }

    /*
    *Returns current Year
    */
    function getCurrentYear(){
        currentYear = 2017;
        return currentYear;
    }

    /*
    *Returns current Day
    */
    function getCurrentDay(){
        currentDay = 14;
        return currentDay
    }

    /*
    *Returns days in month
    */
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    /*
     * Renders Text - 3D Object Group
     * The text will be added to a cube element (anothe 3D Object Group)
     */
    function renderText(font, theText, textColor, textSize){

        var textMesh,textGeometry,textMaterial;

        textGeometry = new THREE.TextGeometry( theText, {
            font: font,
            size: textSize,
            height: 0.05,
            curveSegments: 10
        });

        textGeometry.center();

        textMaterial = new THREE.MeshPhongMaterial( { color: textColor} );

        textMesh = new THREE.Mesh( textGeometry, textMaterial );

        var textGroup = new THREE.Group();
        textGroup.add( textMesh );

        return textGroup;
    }


    /*
     * Renders Text for the month Title - 3D Object Group
     * The text will be added to a cube element (anothe 3D Object Group)
     */
    function renderMonthText(font, theText, textColor, textSize){
        var textMesh,textGeometry,textMaterial, letterMesh, y = 0, box, lastPos = 0;

        textMesh = new THREE.Group();
        textMaterial = new THREE.MeshPhongMaterial( { color: textColor} );


        for(var i=0;i<theText.length;i++){
            textGeometry = new THREE.TextGeometry( theText[i], {
                font: font,
                size: textSize,
                height: 0.05,
                curveSegments: 10
            });


            letterMesh = new THREE.Mesh( textGeometry, textMaterial );

            textGeometry.computeBoundingBox();
            box = textGeometry.boundingBox;


            letterMesh.position.x = lastPos + y;
            y+= lastPos;

            lastPos = box.max.x;
            lastPos += 0.1;

            
            textMesh.add( letterMesh );

        }


        return textMesh;
    }

    /*
     * Animation Loop
     */
    function animate() {
        requestAnimationFrame( animate );

        currentDayGroup.rotation.x+=0.02;


        var time = Date.now() * 0.005;
        particleSystem.rotation.z = 0.01 * time;

        var sizes = geometry.attributes.size.array;
        for ( var i = 0; i < particles; i++ ) {
            sizes[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );
        }
        geometry.attributes.size.needsUpdate = true;



        renderer.render( scene, camera );

    }

}(calendar));
