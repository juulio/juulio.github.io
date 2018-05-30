/*
 * Julio Del Valle
 * Costa Rica
 * 2017
 */

generative_graphics.nav = (function (gg) {

    let buttons = document.getElementsByTagName("li");

    /*  
     * Load Home Experiment 
     */    
    function loadHome(){
        gg.main.clearScene();
        gg.main.renderCube();
    }


    /**
     * Add click Events
     * Provide SceneName to loadScene function
     */
    function addClickEvents() {
        let i, sceneName;

        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", loadScene );
        }
    }
    /**
     * Init the Scene
     */
    function loadScene(e) {
        let sceneName = e.target.attributes[0].nodeValue;

        gg.main.clearScene();
        // gg.main.renderHelpers();

        switch(sceneName) {
            case 'home':
                gg.main.renderCube();
                gg.main.renderPlaneGeometryShaderFloor();
                break;
            case 'scene01':
                gg.main.scene.add(gg.scene01.init());
                gg.main.activeScene = 1;
                break;
            case 'scene02':
                gg.main.scene.add(gg.scene02.init());
                gg.main.activeScene = 2;
                break;
            case 'scene03':
                gg.main.scene.add(gg.scene03.init());
                gg.main.activeScene = 3;
                break;
            case 'scene04':
                gg.main.activeScene = 4;
                gg.main.scene.add(gg.scene04.init());
                break;
            default:
                break;
        }
    }

    /**
     * Add Click Event to all buttons
     */
    addClickEvents();

    // To see all Scenes at once
    // gg.main.renderCube();
    // gg.main.renderPlaneGeometryShaderFloor();

    // gg.main.scene.add(gg.scene01.init());
    // gg.main.scene.add(gg.scene02.init());
    // gg.main.scene.add(gg.scene03.init());
    // gg.main.scene.add(gg.scene04.init());
 
}(generative_graphics));
