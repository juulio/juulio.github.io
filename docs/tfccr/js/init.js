var tpj = jQuery
var revapi1, revapi3

if (window.RS_MODULES === undefined) window.RS_MODULES = {}
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {}

console.log({ RS_MODULES })

RS_MODULES.modules['revslider11'] = {
  once:
    RS_MODULES.modules['revslider11'] !== undefined
      ? RS_MODULES.modules['revslider11'].once
      : undefined,
  init: function () {
    window.revapi1 =
      window.revapi1 === undefined ||
      window.revapi1 === null ||
      window.revapi1.length === 0
        ? document.getElementById('rev_slider_1_1')
        : window.revapi1
    if (
      window.revapi1 === null ||
      window.revapi1 === undefined ||
      window.revapi1.length == 0
    ) {
      window.revapi1initTry =
        window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1
      if (window.revapi1initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules['revslider11'].init()
        })
      return
    }
    window.revapi1 = jQuery(window.revapi1)
    if (window.revapi1.revolution == undefined) {
      revslider_showDoubleJqueryError('rev_slider_1_1')
      return
    }
    revapi1.revolutionInit({
      revapi: 'revapi1',
      sliderType: 'carousel',
      DPR: 'dpr',
      sliderLayout: 'fullwidth',
      visibilityLevels: '1240,1240,778,480',
      gridwidth: '1920,1920,778,480',
      gridheight: '821,821,500,514',
      lazyType: 'smart',
      perspective: 600,
      perspectiveType: 'global',
      editorheight: '821,439,500,514',
      responsiveLevels: '1240,1240,778,480',
      progressBar: { disableProgressBar: true },
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false,
        bullets: {
          enable: true,
          tmp: '',
          style: 'hesperiden',
        },
      },
      viewPort: {
        global: true,
        globalDist: '-200px',
        enable: false,
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    })
  },
} // End of RevInitScript

if (window.RS_MODULES === undefined) window.RS_MODULES = {}
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {}
RS_MODULES.modules['revslider32'] = {
  once:
    RS_MODULES.modules['revslider32'] !== undefined
      ? RS_MODULES.modules['revslider32'].once
      : undefined,
  init: function () {
    window.revapi3 =
      window.revapi3 === undefined ||
      window.revapi3 === null ||
      window.revapi3.length === 0
        ? document.getElementById('rev_slider_3_2')
        : window.revapi3
    if (
      window.revapi3 === null ||
      window.revapi3 === undefined ||
      window.revapi3.length == 0
    ) {
      window.revapi3initTry =
        window.revapi3initTry === undefined ? 0 : window.revapi3initTry + 1
      if (window.revapi3initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules['revslider32'].init()
        })
      return
    }
    window.revapi3 = jQuery(window.revapi3)
    if (window.revapi3.revolution == undefined) {
      revslider_showDoubleJqueryError('rev_slider_3_2')
      return
    }
    revapi3.revolutionInit({
      revapi: 'revapi3',
      sliderType: 'carousel',
      DPR: 'dpr',
      visibilityLevels: '1240,1240,1240,480',
      gridwidth: '1240,1240,1240,480',
      gridheight: '500,500,500,395',
      lazyType: 'smart',
      perspective: 600,
      perspectiveType: 'global',
      editorheight: '500,768,960,395',
      responsiveLevels: '1240,1240,1240,480',
      carousel: {
        infinity: true,
        maxVisibleItems: 1,
      },
      progressBar: { disableProgressBar: true },
      navigation: {
        wheelCallDelay: 1000,
        onHoverStop: false,
        arrows: {
          enable: true,
          tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
          style: 'zeus',
          left: {
            h_offset: 30,
          },
          right: {
            h_offset: 30,
          },
        },
      },
      viewPort: {
        global: true,
        globalDist: '-200px',
        enable: false,
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    })
  },
} // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal()
}
