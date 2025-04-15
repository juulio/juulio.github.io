;(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) s(h)
  new MutationObserver((h) => {
    for (const g of h)
      if (g.type === 'childList')
        for (const b of g.addedNodes)
          b.tagName === 'LINK' && b.rel === 'modulepreload' && s(b)
  }).observe(document, { childList: !0, subtree: !0 })
  function u(h) {
    const g = {}
    return (
      h.integrity && (g.integrity = h.integrity),
      h.referrerPolicy && (g.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === 'use-credentials'
        ? (g.credentials = 'include')
        : h.crossOrigin === 'anonymous'
        ? (g.credentials = 'omit')
        : (g.credentials = 'same-origin'),
      g
    )
  }
  function s(h) {
    if (h.ep) return
    h.ep = !0
    const g = u(h)
    fetch(h.href, g)
  }
})()
var fr =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function mm(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default')
    ? c.default
    : c
}
function vm(c) {
  if (Object.prototype.hasOwnProperty.call(c, '__esModule')) return c
  var r = c.default
  if (typeof r == 'function') {
    var u = function s() {
      return this instanceof s
        ? Reflect.construct(r, arguments, this.constructor)
        : r.apply(this, arguments)
    }
    u.prototype = r.prototype
  } else u = {}
  return (
    Object.defineProperty(u, '__esModule', { value: !0 }),
    Object.keys(c).forEach(function (s) {
      var h = Object.getOwnPropertyDescriptor(c, s)
      Object.defineProperty(
        u,
        s,
        h.get
          ? h
          : {
              enumerable: !0,
              get: function () {
                return c[s]
              },
            }
      )
    }),
    u
  )
}
var Cs = { exports: {} },
  Xi = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd
function ym() {
  if (Pd) return Xi
  Pd = 1
  var c = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment')
  function u(s, h, g) {
    var b = null
    if (
      (g !== void 0 && (b = '' + g),
      h.key !== void 0 && (b = '' + h.key),
      'key' in h)
    ) {
      g = {}
      for (var x in h) x !== 'key' && (g[x] = h[x])
    } else g = h
    return (
      (h = g.ref),
      { $$typeof: c, type: s, key: b, ref: h !== void 0 ? h : null, props: g }
    )
  }
  return (Xi.Fragment = r), (Xi.jsx = u), (Xi.jsxs = u), Xi
}
var $d
function bm() {
  return $d || (($d = 1), (Cs.exports = ym())), Cs.exports
}
var $ = bm(),
  Ns = { exports: {} },
  be = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wd
function Sm() {
  if (Wd) return be
  Wd = 1
  var c = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    h = Symbol.for('react.profiler'),
    g = Symbol.for('react.consumer'),
    b = Symbol.for('react.context'),
    x = Symbol.for('react.forward_ref'),
    O = Symbol.for('react.suspense'),
    y = Symbol.for('react.memo'),
    M = Symbol.for('react.lazy'),
    Q = Symbol.iterator
  function X(o) {
    return o === null || typeof o != 'object'
      ? null
      : ((o = (Q && o[Q]) || o['@@iterator']),
        typeof o == 'function' ? o : null)
  }
  var ae = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ee = Object.assign,
    k = {}
  function le(o, m, R) {
    ;(this.props = o),
      (this.context = m),
      (this.refs = k),
      (this.updater = R || ae)
  }
  ;(le.prototype.isReactComponent = {}),
    (le.prototype.setState = function (o, m) {
      if (typeof o != 'object' && typeof o != 'function' && o != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        )
      this.updater.enqueueSetState(this, o, m, 'setState')
    }),
    (le.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, 'forceUpdate')
    })
  function ce() {}
  ce.prototype = le.prototype
  function oe(o, m, R) {
    ;(this.props = o),
      (this.context = m),
      (this.refs = k),
      (this.updater = R || ae)
  }
  var fe = (oe.prototype = new ce())
  ;(fe.constructor = oe), ee(fe, le.prototype), (fe.isPureReactComponent = !0)
  var ge = Array.isArray,
    E = { H: null, A: null, T: null, S: null, V: null },
    D = Object.prototype.hasOwnProperty
  function j(o, m, R, N, G, W) {
    return (
      (R = W.ref),
      { $$typeof: c, type: o, key: m, ref: R !== void 0 ? R : null, props: W }
    )
  }
  function K(o, m) {
    return j(o.type, m, void 0, void 0, void 0, o.props)
  }
  function A(o) {
    return typeof o == 'object' && o !== null && o.$$typeof === c
  }
  function v(o) {
    var m = { '=': '=0', ':': '=2' }
    return (
      '$' +
      o.replace(/[=:]/g, function (R) {
        return m[R]
      })
    )
  }
  var q = /\/+/g
  function V(o, m) {
    return typeof o == 'object' && o !== null && o.key != null
      ? v('' + o.key)
      : m.toString(36)
  }
  function L() {}
  function U(o) {
    switch (o.status) {
      case 'fulfilled':
        return o.value
      case 'rejected':
        throw o.reason
      default:
        switch (
          (typeof o.status == 'string'
            ? o.then(L, L)
            : ((o.status = 'pending'),
              o.then(
                function (m) {
                  o.status === 'pending' &&
                    ((o.status = 'fulfilled'), (o.value = m))
                },
                function (m) {
                  o.status === 'pending' &&
                    ((o.status = 'rejected'), (o.reason = m))
                }
              )),
          o.status)
        ) {
          case 'fulfilled':
            return o.value
          case 'rejected':
            throw o.reason
        }
    }
    throw o
  }
  function I(o, m, R, N, G) {
    var W = typeof o
    ;(W === 'undefined' || W === 'boolean') && (o = null)
    var Z = !1
    if (o === null) Z = !0
    else
      switch (W) {
        case 'bigint':
        case 'string':
        case 'number':
          Z = !0
          break
        case 'object':
          switch (o.$$typeof) {
            case c:
            case r:
              Z = !0
              break
            case M:
              return (Z = o._init), I(Z(o._payload), m, R, N, G)
          }
      }
    if (Z)
      return (
        (G = G(o)),
        (Z = N === '' ? '.' + V(o, 0) : N),
        ge(G)
          ? ((R = ''),
            Z != null && (R = Z.replace(q, '$&/') + '/'),
            I(G, m, R, '', function (ye) {
              return ye
            }))
          : G != null &&
            (A(G) &&
              (G = K(
                G,
                R +
                  (G.key == null || (o && o.key === G.key)
                    ? ''
                    : ('' + G.key).replace(q, '$&/') + '/') +
                  Z
              )),
            m.push(G)),
        1
      )
    Z = 0
    var ne = N === '' ? '.' : N + ':'
    if (ge(o))
      for (var ue = 0; ue < o.length; ue++)
        (N = o[ue]), (W = ne + V(N, ue)), (Z += I(N, m, R, W, G))
    else if (((ue = X(o)), typeof ue == 'function'))
      for (o = ue.call(o), ue = 0; !(N = o.next()).done; )
        (N = N.value), (W = ne + V(N, ue++)), (Z += I(N, m, R, W, G))
    else if (W === 'object') {
      if (typeof o.then == 'function') return I(U(o), m, R, N, G)
      throw (
        ((m = String(o)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (m === '[object Object]'
              ? 'object with keys {' + Object.keys(o).join(', ') + '}'
              : m) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    }
    return Z
  }
  function _(o, m, R) {
    if (o == null) return o
    var N = [],
      G = 0
    return (
      I(o, N, '', '', function (W) {
        return m.call(R, W, G++)
      }),
      N
    )
  }
  function f(o) {
    if (o._status === -1) {
      var m = o._result
      ;(m = m()),
        m.then(
          function (R) {
            ;(o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = R))
          },
          function (R) {
            ;(o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = R))
          }
        ),
        o._status === -1 && ((o._status = 0), (o._result = m))
    }
    if (o._status === 1) return o._result.default
    throw o._result
  }
  var te =
    typeof reportError == 'function'
      ? reportError
      : function (o) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var m = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof o == 'object' &&
                o !== null &&
                typeof o.message == 'string'
                  ? String(o.message)
                  : String(o),
              error: o,
            })
            if (!window.dispatchEvent(m)) return
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', o)
            return
          }
          console.error(o)
        }
  function T() {}
  return (
    (be.Children = {
      map: _,
      forEach: function (o, m, R) {
        _(
          o,
          function () {
            m.apply(this, arguments)
          },
          R
        )
      },
      count: function (o) {
        var m = 0
        return (
          _(o, function () {
            m++
          }),
          m
        )
      },
      toArray: function (o) {
        return (
          _(o, function (m) {
            return m
          }) || []
        )
      },
      only: function (o) {
        if (!A(o))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return o
      },
    }),
    (be.Component = le),
    (be.Fragment = u),
    (be.Profiler = h),
    (be.PureComponent = oe),
    (be.StrictMode = s),
    (be.Suspense = O),
    (be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
    (be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return E.H.useMemoCache(o)
      },
    }),
    (be.cache = function (o) {
      return function () {
        return o.apply(null, arguments)
      }
    }),
    (be.cloneElement = function (o, m, R) {
      if (o == null)
        throw Error(
          'The argument must be a React element, but you passed ' + o + '.'
        )
      var N = ee({}, o.props),
        G = o.key,
        W = void 0
      if (m != null)
        for (Z in (m.ref !== void 0 && (W = void 0),
        m.key !== void 0 && (G = '' + m.key),
        m))
          !D.call(m, Z) ||
            Z === 'key' ||
            Z === '__self' ||
            Z === '__source' ||
            (Z === 'ref' && m.ref === void 0) ||
            (N[Z] = m[Z])
      var Z = arguments.length - 2
      if (Z === 1) N.children = R
      else if (1 < Z) {
        for (var ne = Array(Z), ue = 0; ue < Z; ue++) ne[ue] = arguments[ue + 2]
        N.children = ne
      }
      return j(o.type, G, void 0, void 0, W, N)
    }),
    (be.createContext = function (o) {
      return (
        (o = {
          $$typeof: b,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: g, _context: o }),
        o
      )
    }),
    (be.createElement = function (o, m, R) {
      var N,
        G = {},
        W = null
      if (m != null)
        for (N in (m.key !== void 0 && (W = '' + m.key), m))
          D.call(m, N) &&
            N !== 'key' &&
            N !== '__self' &&
            N !== '__source' &&
            (G[N] = m[N])
      var Z = arguments.length - 2
      if (Z === 1) G.children = R
      else if (1 < Z) {
        for (var ne = Array(Z), ue = 0; ue < Z; ue++) ne[ue] = arguments[ue + 2]
        G.children = ne
      }
      if (o && o.defaultProps)
        for (N in ((Z = o.defaultProps), Z)) G[N] === void 0 && (G[N] = Z[N])
      return j(o, W, void 0, void 0, null, G)
    }),
    (be.createRef = function () {
      return { current: null }
    }),
    (be.forwardRef = function (o) {
      return { $$typeof: x, render: o }
    }),
    (be.isValidElement = A),
    (be.lazy = function (o) {
      return { $$typeof: M, _payload: { _status: -1, _result: o }, _init: f }
    }),
    (be.memo = function (o, m) {
      return { $$typeof: y, type: o, compare: m === void 0 ? null : m }
    }),
    (be.startTransition = function (o) {
      var m = E.T,
        R = {}
      E.T = R
      try {
        var N = o(),
          G = E.S
        G !== null && G(R, N),
          typeof N == 'object' &&
            N !== null &&
            typeof N.then == 'function' &&
            N.then(T, te)
      } catch (W) {
        te(W)
      } finally {
        E.T = m
      }
    }),
    (be.unstable_useCacheRefresh = function () {
      return E.H.useCacheRefresh()
    }),
    (be.use = function (o) {
      return E.H.use(o)
    }),
    (be.useActionState = function (o, m, R) {
      return E.H.useActionState(o, m, R)
    }),
    (be.useCallback = function (o, m) {
      return E.H.useCallback(o, m)
    }),
    (be.useContext = function (o) {
      return E.H.useContext(o)
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (o, m) {
      return E.H.useDeferredValue(o, m)
    }),
    (be.useEffect = function (o, m, R) {
      var N = E.H
      if (typeof R == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        )
      return N.useEffect(o, m)
    }),
    (be.useId = function () {
      return E.H.useId()
    }),
    (be.useImperativeHandle = function (o, m, R) {
      return E.H.useImperativeHandle(o, m, R)
    }),
    (be.useInsertionEffect = function (o, m) {
      return E.H.useInsertionEffect(o, m)
    }),
    (be.useLayoutEffect = function (o, m) {
      return E.H.useLayoutEffect(o, m)
    }),
    (be.useMemo = function (o, m) {
      return E.H.useMemo(o, m)
    }),
    (be.useOptimistic = function (o, m) {
      return E.H.useOptimistic(o, m)
    }),
    (be.useReducer = function (o, m, R) {
      return E.H.useReducer(o, m, R)
    }),
    (be.useRef = function (o) {
      return E.H.useRef(o)
    }),
    (be.useState = function (o) {
      return E.H.useState(o)
    }),
    (be.useSyncExternalStore = function (o, m, R) {
      return E.H.useSyncExternalStore(o, m, R)
    }),
    (be.useTransition = function () {
      return E.H.useTransition()
    }),
    (be.version = '19.1.0'),
    be
  )
}
var Fd
function Kt() {
  return Fd || ((Fd = 1), (Ns.exports = Sm())), Ns.exports
}
var tt = Kt(),
  Ls = { exports: {} },
  Vi = {},
  Hs = { exports: {} },
  Us = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Id
function Om() {
  return (
    Id ||
      ((Id = 1),
      (function (c) {
        function r(_, f) {
          var te = _.length
          _.push(f)
          e: for (; 0 < te; ) {
            var T = (te - 1) >>> 1,
              o = _[T]
            if (0 < h(o, f)) (_[T] = f), (_[te] = o), (te = T)
            else break e
          }
        }
        function u(_) {
          return _.length === 0 ? null : _[0]
        }
        function s(_) {
          if (_.length === 0) return null
          var f = _[0],
            te = _.pop()
          if (te !== f) {
            _[0] = te
            e: for (var T = 0, o = _.length, m = o >>> 1; T < m; ) {
              var R = 2 * (T + 1) - 1,
                N = _[R],
                G = R + 1,
                W = _[G]
              if (0 > h(N, te))
                G < o && 0 > h(W, N)
                  ? ((_[T] = W), (_[G] = te), (T = G))
                  : ((_[T] = N), (_[R] = te), (T = R))
              else if (G < o && 0 > h(W, te)) (_[T] = W), (_[G] = te), (T = G)
              else break e
            }
          }
          return f
        }
        function h(_, f) {
          var te = _.sortIndex - f.sortIndex
          return te !== 0 ? te : _.id - f.id
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var g = performance
          c.unstable_now = function () {
            return g.now()
          }
        } else {
          var b = Date,
            x = b.now()
          c.unstable_now = function () {
            return b.now() - x
          }
        }
        var O = [],
          y = [],
          M = 1,
          Q = null,
          X = 3,
          ae = !1,
          ee = !1,
          k = !1,
          le = !1,
          ce = typeof setTimeout == 'function' ? setTimeout : null,
          oe = typeof clearTimeout == 'function' ? clearTimeout : null,
          fe = typeof setImmediate < 'u' ? setImmediate : null
        function ge(_) {
          for (var f = u(y); f !== null; ) {
            if (f.callback === null) s(y)
            else if (f.startTime <= _)
              s(y), (f.sortIndex = f.expirationTime), r(O, f)
            else break
            f = u(y)
          }
        }
        function E(_) {
          if (((k = !1), ge(_), !ee))
            if (u(O) !== null) (ee = !0), D || ((D = !0), V())
            else {
              var f = u(y)
              f !== null && I(E, f.startTime - _)
            }
        }
        var D = !1,
          j = -1,
          K = 5,
          A = -1
        function v() {
          return le ? !0 : !(c.unstable_now() - A < K)
        }
        function q() {
          if (((le = !1), D)) {
            var _ = c.unstable_now()
            A = _
            var f = !0
            try {
              e: {
                ;(ee = !1), k && ((k = !1), oe(j), (j = -1)), (ae = !0)
                var te = X
                try {
                  t: {
                    for (
                      ge(_), Q = u(O);
                      Q !== null && !(Q.expirationTime > _ && v());

                    ) {
                      var T = Q.callback
                      if (typeof T == 'function') {
                        ;(Q.callback = null), (X = Q.priorityLevel)
                        var o = T(Q.expirationTime <= _)
                        if (((_ = c.unstable_now()), typeof o == 'function')) {
                          ;(Q.callback = o), ge(_), (f = !0)
                          break t
                        }
                        Q === u(O) && s(O), ge(_)
                      } else s(O)
                      Q = u(O)
                    }
                    if (Q !== null) f = !0
                    else {
                      var m = u(y)
                      m !== null && I(E, m.startTime - _), (f = !1)
                    }
                  }
                  break e
                } finally {
                  ;(Q = null), (X = te), (ae = !1)
                }
                f = void 0
              }
            } finally {
              f ? V() : (D = !1)
            }
          }
        }
        var V
        if (typeof fe == 'function')
          V = function () {
            fe(q)
          }
        else if (typeof MessageChannel < 'u') {
          var L = new MessageChannel(),
            U = L.port2
          ;(L.port1.onmessage = q),
            (V = function () {
              U.postMessage(null)
            })
        } else
          V = function () {
            ce(q, 0)
          }
        function I(_, f) {
          j = ce(function () {
            _(c.unstable_now())
          }, f)
        }
        ;(c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (_) {
            _.callback = null
          }),
          (c.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (K = 0 < _ ? Math.floor(1e3 / _) : 5)
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return X
          }),
          (c.unstable_next = function (_) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var f = 3
                break
              default:
                f = X
            }
            var te = X
            X = f
            try {
              return _()
            } finally {
              X = te
            }
          }),
          (c.unstable_requestPaint = function () {
            le = !0
          }),
          (c.unstable_runWithPriority = function (_, f) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                _ = 3
            }
            var te = X
            X = _
            try {
              return f()
            } finally {
              X = te
            }
          }),
          (c.unstable_scheduleCallback = function (_, f, te) {
            var T = c.unstable_now()
            switch (
              (typeof te == 'object' && te !== null
                ? ((te = te.delay),
                  (te = typeof te == 'number' && 0 < te ? T + te : T))
                : (te = T),
              _)
            ) {
              case 1:
                var o = -1
                break
              case 2:
                o = 250
                break
              case 5:
                o = 1073741823
                break
              case 4:
                o = 1e4
                break
              default:
                o = 5e3
            }
            return (
              (o = te + o),
              (_ = {
                id: M++,
                callback: f,
                priorityLevel: _,
                startTime: te,
                expirationTime: o,
                sortIndex: -1,
              }),
              te > T
                ? ((_.sortIndex = te),
                  r(y, _),
                  u(O) === null &&
                    _ === u(y) &&
                    (k ? (oe(j), (j = -1)) : (k = !0), I(E, te - T)))
                : ((_.sortIndex = o),
                  r(O, _),
                  ee || ae || ((ee = !0), D || ((D = !0), V()))),
              _
            )
          }),
          (c.unstable_shouldYield = v),
          (c.unstable_wrapCallback = function (_) {
            var f = X
            return function () {
              var te = X
              X = f
              try {
                return _.apply(this, arguments)
              } finally {
                X = te
              }
            }
          })
      })(Us)),
    Us
  )
}
var eh
function Tm() {
  return eh || ((eh = 1), (Hs.exports = Om())), Hs.exports
}
var qs = { exports: {} },
  ht = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var th
function xm() {
  if (th) return ht
  th = 1
  var c = Kt()
  function r(O) {
    var y = 'https://react.dev/errors/' + O
    if (1 < arguments.length) {
      y += '?args[]=' + encodeURIComponent(arguments[1])
      for (var M = 2; M < arguments.length; M++)
        y += '&args[]=' + encodeURIComponent(arguments[M])
    }
    return (
      'Minified React error #' +
      O +
      '; visit ' +
      y +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function u() {}
  var s = {
      d: {
        f: u,
        r: function () {
          throw Error(r(522))
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for('react.portal')
  function g(O, y, M) {
    var Q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: h,
      key: Q == null ? null : '' + Q,
      children: O,
      containerInfo: y,
      implementation: M,
    }
  }
  var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function x(O, y) {
    if (O === 'font') return ''
    if (typeof y == 'string') return y === 'use-credentials' ? y : ''
  }
  return (
    (ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ht.createPortal = function (O, y) {
      var M =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(r(299))
      return g(O, y, null, M)
    }),
    (ht.flushSync = function (O) {
      var y = b.T,
        M = s.p
      try {
        if (((b.T = null), (s.p = 2), O)) return O()
      } finally {
        ;(b.T = y), (s.p = M), s.d.f()
      }
    }),
    (ht.preconnect = function (O, y) {
      typeof O == 'string' &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == 'string'
                ? y === 'use-credentials'
                  ? y
                  : ''
                : void 0))
          : (y = null),
        s.d.C(O, y))
    }),
    (ht.prefetchDNS = function (O) {
      typeof O == 'string' && s.d.D(O)
    }),
    (ht.preinit = function (O, y) {
      if (typeof O == 'string' && y && typeof y.as == 'string') {
        var M = y.as,
          Q = x(M, y.crossOrigin),
          X = typeof y.integrity == 'string' ? y.integrity : void 0,
          ae = typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0
        M === 'style'
          ? s.d.S(O, typeof y.precedence == 'string' ? y.precedence : void 0, {
              crossOrigin: Q,
              integrity: X,
              fetchPriority: ae,
            })
          : M === 'script' &&
            s.d.X(O, {
              crossOrigin: Q,
              integrity: X,
              fetchPriority: ae,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
            })
      }
    }),
    (ht.preinitModule = function (O, y) {
      if (typeof O == 'string')
        if (typeof y == 'object' && y !== null) {
          if (y.as == null || y.as === 'script') {
            var M = x(y.as, y.crossOrigin)
            s.d.M(O, {
              crossOrigin: M,
              integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
              nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
            })
          }
        } else y == null && s.d.M(O)
    }),
    (ht.preload = function (O, y) {
      if (
        typeof O == 'string' &&
        typeof y == 'object' &&
        y !== null &&
        typeof y.as == 'string'
      ) {
        var M = y.as,
          Q = x(M, y.crossOrigin)
        s.d.L(O, M, {
          crossOrigin: Q,
          integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
          nonce: typeof y.nonce == 'string' ? y.nonce : void 0,
          type: typeof y.type == 'string' ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == 'string' ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == 'string' ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == 'string' ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == 'string' ? y.imageSizes : void 0,
          media: typeof y.media == 'string' ? y.media : void 0,
        })
      }
    }),
    (ht.preloadModule = function (O, y) {
      if (typeof O == 'string')
        if (y) {
          var M = x(y.as, y.crossOrigin)
          s.d.m(O, {
            as: typeof y.as == 'string' && y.as !== 'script' ? y.as : void 0,
            crossOrigin: M,
            integrity: typeof y.integrity == 'string' ? y.integrity : void 0,
          })
        } else s.d.m(O)
    }),
    (ht.requestFormReset = function (O) {
      s.d.r(O)
    }),
    (ht.unstable_batchedUpdates = function (O, y) {
      return O(y)
    }),
    (ht.useFormState = function (O, y, M) {
      return b.H.useFormState(O, y, M)
    }),
    (ht.useFormStatus = function () {
      return b.H.useHostTransitionStatus()
    }),
    (ht.version = '19.1.0'),
    ht
  )
}
var nh
function Em() {
  if (nh) return qs.exports
  nh = 1
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
      } catch (r) {
        console.error(r)
      }
  }
  return c(), (qs.exports = xm()), qs.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ah
function _m() {
  if (ah) return Vi
  ah = 1
  var c = Tm(),
    r = Kt(),
    u = Em()
  function s(e) {
    var t = 'https://react.dev/errors/' + e
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1])
      for (var n = 2; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n])
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  function h(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function g(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? n : null
  }
  function b(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated
    }
    return null
  }
  function x(e) {
    if (g(e) !== e) throw Error(s(188))
  }
  function O(e) {
    var t = e.alternate
    if (!t) {
      if (((t = g(e)), t === null)) throw Error(s(188))
      return t !== e ? null : e
    }
    for (var n = e, a = t; ; ) {
      var i = n.return
      if (i === null) break
      var l = i.alternate
      if (l === null) {
        if (((a = i.return), a !== null)) {
          n = a
          continue
        }
        break
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === n) return x(i), e
          if (l === a) return x(i), t
          l = l.sibling
        }
        throw Error(s(188))
      }
      if (n.return !== a.return) (n = i), (a = l)
      else {
        for (var d = !1, p = i.child; p; ) {
          if (p === n) {
            ;(d = !0), (n = i), (a = l)
            break
          }
          if (p === a) {
            ;(d = !0), (a = i), (n = l)
            break
          }
          p = p.sibling
        }
        if (!d) {
          for (p = l.child; p; ) {
            if (p === n) {
              ;(d = !0), (n = l), (a = i)
              break
            }
            if (p === a) {
              ;(d = !0), (a = l), (n = i)
              break
            }
            p = p.sibling
          }
          if (!d) throw Error(s(189))
        }
      }
      if (n.alternate !== a) throw Error(s(190))
    }
    if (n.tag !== 3) throw Error(s(188))
    return n.stateNode.current === n ? e : t
  }
  function y(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t
      e = e.sibling
    }
    return null
  }
  var M = Object.assign,
    Q = Symbol.for('react.element'),
    X = Symbol.for('react.transitional.element'),
    ae = Symbol.for('react.portal'),
    ee = Symbol.for('react.fragment'),
    k = Symbol.for('react.strict_mode'),
    le = Symbol.for('react.profiler'),
    ce = Symbol.for('react.provider'),
    oe = Symbol.for('react.consumer'),
    fe = Symbol.for('react.context'),
    ge = Symbol.for('react.forward_ref'),
    E = Symbol.for('react.suspense'),
    D = Symbol.for('react.suspense_list'),
    j = Symbol.for('react.memo'),
    K = Symbol.for('react.lazy'),
    A = Symbol.for('react.activity'),
    v = Symbol.for('react.memo_cache_sentinel'),
    q = Symbol.iterator
  function V(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (q && e[q]) || e['@@iterator']),
        typeof e == 'function' ? e : null)
  }
  var L = Symbol.for('react.client.reference')
  function U(e) {
    if (e == null) return null
    if (typeof e == 'function')
      return e.$$typeof === L ? null : e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case ee:
        return 'Fragment'
      case le:
        return 'Profiler'
      case k:
        return 'StrictMode'
      case E:
        return 'Suspense'
      case D:
        return 'SuspenseList'
      case A:
        return 'Activity'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case ae:
          return 'Portal'
        case fe:
          return (e.displayName || 'Context') + '.Provider'
        case oe:
          return (e._context.displayName || 'Context') + '.Consumer'
        case ge:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case j:
          return (
            (t = e.displayName || null), t !== null ? t : U(e.type) || 'Memo'
          )
        case K:
          ;(t = e._payload), (e = e._init)
          try {
            return U(e(t))
          } catch {}
      }
    return null
  }
  var I = Array.isArray,
    _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    f = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    te = { pending: !1, data: null, method: null, action: null },
    T = [],
    o = -1
  function m(e) {
    return { current: e }
  }
  function R(e) {
    0 > o || ((e.current = T[o]), (T[o] = null), o--)
  }
  function N(e, t) {
    o++, (T[o] = e.current), (e.current = t)
  }
  var G = m(null),
    W = m(null),
    Z = m(null),
    ne = m(null)
  function ue(e, t) {
    switch ((N(Z, t), N(W, e), N(G, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? xd(e) : 0
        break
      default:
        if (((e = t.tagName), (t = t.namespaceURI))) (t = xd(t)), (e = Ed(t, e))
        else
          switch (e) {
            case 'svg':
              e = 1
              break
            case 'math':
              e = 2
              break
            default:
              e = 0
          }
    }
    R(G), N(G, e)
  }
  function ye() {
    R(G), R(W), R(Z)
  }
  function Te(e) {
    e.memoizedState !== null && N(ne, e)
    var t = G.current,
      n = Ed(t, e.type)
    t !== n && (N(W, e), N(G, n))
  }
  function Re(e) {
    W.current === e && (R(G), R(W)),
      ne.current === e && (R(ne), (Ui._currentValue = te))
  }
  var Me = Object.prototype.hasOwnProperty,
    Ae = c.unstable_scheduleCallback,
    Se = c.unstable_cancelCallback,
    ze = c.unstable_shouldYield,
    Ze = c.unstable_requestPaint,
    pe = c.unstable_now,
    Xe = c.unstable_getCurrentPriorityLevel,
    Ke = c.unstable_ImmediatePriority,
    $e = c.unstable_UserBlockingPriority,
    nt = c.unstable_NormalPriority,
    Jt = c.unstable_LowPriority,
    Nn = c.unstable_IdlePriority,
    Wi = c.log,
    Ln = c.unstable_setDisableYieldValue,
    Hn = null,
    Ve = null
  function pt(e) {
    if (
      (typeof Wi == 'function' && Ln(e),
      Ve && typeof Ve.setStrictMode == 'function')
    )
      try {
        Ve.setStrictMode(Hn, e)
      } catch {}
  }
  var Ot = Math.clz32 ? Math.clz32 : ng,
    eg = Math.log,
    tg = Math.LN2
  function ng(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((eg(e) / tg) | 0)) | 0
  }
  var Fi = 256,
    Ii = 4194304
  function Un(e) {
    var t = e & 42
    if (t !== 0) return t
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
        return 128
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return e
    }
  }
  function el(e, t, n) {
    var a = e.pendingLanes
    if (a === 0) return 0
    var i = 0,
      l = e.suspendedLanes,
      d = e.pingedLanes
    e = e.warmLanes
    var p = a & 134217727
    return (
      p !== 0
        ? ((a = p & ~l),
          a !== 0
            ? (i = Un(a))
            : ((d &= p),
              d !== 0
                ? (i = Un(d))
                : n || ((n = p & ~e), n !== 0 && (i = Un(n)))))
        : ((p = a & ~l),
          p !== 0
            ? (i = Un(p))
            : d !== 0
            ? (i = Un(d))
            : n || ((n = a & ~e), n !== 0 && (i = Un(n)))),
      i === 0
        ? 0
        : t !== 0 &&
          t !== i &&
          (t & l) === 0 &&
          ((l = i & -i),
          (n = t & -t),
          l >= n || (l === 32 && (n & 4194048) !== 0))
        ? t
        : i
    )
  }
  function Za(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }
  function ag(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function io() {
    var e = Fi
    return (Fi <<= 1), (Fi & 4194048) === 0 && (Fi = 256), e
  }
  function lo() {
    var e = Ii
    return (Ii <<= 1), (Ii & 62914560) === 0 && (Ii = 4194304), e
  }
  function Tr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function Ka(e, t) {
    ;(e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0))
  }
  function ig(e, t, n, a, i, l) {
    var d = e.pendingLanes
    ;(e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0)
    var p = e.entanglements,
      S = e.expirationTimes,
      H = e.hiddenUpdates
    for (n = d & ~n; 0 < n; ) {
      var J = 31 - Ot(n),
        F = 1 << J
      ;(p[J] = 0), (S[J] = -1)
      var B = H[J]
      if (B !== null)
        for (H[J] = null, J = 0; J < B.length; J++) {
          var Y = B[J]
          Y !== null && (Y.lane &= -536870913)
        }
      n &= ~F
    }
    a !== 0 && ro(e, a, 0),
      l !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= l & ~(d & ~t))
  }
  function ro(e, t, n) {
    ;(e.pendingLanes |= t), (e.suspendedLanes &= ~t)
    var a = 31 - Ot(t)
    ;(e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194090))
  }
  function uo(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
      var a = 31 - Ot(n),
        i = 1 << a
      ;(i & t) | (e[a] & t) && (e[a] |= t), (n &= ~i)
    }
  }
  function xr(e) {
    switch (e) {
      case 2:
        e = 1
        break
      case 8:
        e = 4
        break
      case 32:
        e = 16
        break
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128
        break
      case 268435456:
        e = 134217728
        break
      default:
        e = 0
    }
    return e
  }
  function Er(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    )
  }
  function so() {
    var e = f.p
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Vd(e.type))
  }
  function lg(e, t) {
    var n = f.p
    try {
      return (f.p = e), t()
    } finally {
      f.p = n
    }
  }
  var fn = Math.random().toString(36).slice(2),
    ft = '__reactFiber$' + fn,
    mt = '__reactProps$' + fn,
    ia = '__reactContainer$' + fn,
    _r = '__reactEvents$' + fn,
    rg = '__reactListeners$' + fn,
    ug = '__reactHandles$' + fn,
    oo = '__reactResources$' + fn,
    Ja = '__reactMarker$' + fn
  function Ar(e) {
    delete e[ft], delete e[mt], delete e[_r], delete e[rg], delete e[ug]
  }
  function la(e) {
    var t = e[ft]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[ia] || n[ft])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Rd(e); e !== null; ) {
            if ((n = e[ft])) return n
            e = Rd(e)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function ra(e) {
    if ((e = e[ft] || e[ia])) {
      var t = e.tag
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e
    }
    return null
  }
  function Pa(e) {
    var t = e.tag
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
    throw Error(s(33))
  }
  function ua(e) {
    var t = e[oo]
    return (
      t ||
        (t = e[oo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    )
  }
  function at(e) {
    e[Ja] = !0
  }
  var co = new Set(),
    fo = {}
  function qn(e, t) {
    sa(e, t), sa(e + 'Capture', t)
  }
  function sa(e, t) {
    for (fo[e] = t, e = 0; e < t.length; e++) co.add(t[e])
  }
  var sg = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    ho = {},
    go = {}
  function og(e) {
    return Me.call(go, e)
      ? !0
      : Me.call(ho, e)
      ? !1
      : sg.test(e)
      ? (go[e] = !0)
      : ((ho[e] = !0), !1)
  }
  function tl(e, t, n) {
    if (og(t))
      if (n === null) e.removeAttribute(t)
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t)
            return
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5)
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t)
              return
            }
        }
        e.setAttribute(t, '' + n)
      }
  }
  function nl(e, t, n) {
    if (n === null) e.removeAttribute(t)
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t)
          return
      }
      e.setAttribute(t, '' + n)
    }
  }
  function Pt(e, t, n, a) {
    if (a === null) e.removeAttribute(n)
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n)
          return
      }
      e.setAttributeNS(t, n, '' + a)
    }
  }
  var wr, po
  function oa(e) {
    if (wr === void 0)
      try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/)
        ;(wr = (t && t[1]) || ''),
          (po =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
              ? '@unknown:0:0'
              : '')
      }
    return (
      `
` +
      wr +
      e +
      po
    )
  }
  var Rr = !1
  function Mr(e, t) {
    if (!e || Rr) return ''
    Rr = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var F = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(F.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(F, [])
                } catch (Y) {
                  var B = Y
                }
                Reflect.construct(e, [], F)
              } else {
                try {
                  F.call()
                } catch (Y) {
                  B = Y
                }
                e.call(F.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (Y) {
                B = Y
              }
              ;(F = e()) &&
                typeof F.catch == 'function' &&
                F.catch(function () {})
            }
          } catch (Y) {
            if (Y && B && typeof Y.stack == 'string') return [Y.stack, B.stack]
          }
          return [null, null]
        },
      }
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name'
      )
      i &&
        i.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        })
      var l = a.DetermineComponentFrameRoot(),
        d = l[0],
        p = l[1]
      if (d && p) {
        var S = d.split(`
`),
          H = p.split(`
`)
        for (
          i = a = 0;
          a < S.length && !S[a].includes('DetermineComponentFrameRoot');

        )
          a++
        for (; i < H.length && !H[i].includes('DetermineComponentFrameRoot'); )
          i++
        if (a === S.length || i === H.length)
          for (
            a = S.length - 1, i = H.length - 1;
            1 <= a && 0 <= i && S[a] !== H[i];

          )
            i--
        for (; 1 <= a && 0 <= i; a--, i--)
          if (S[a] !== H[i]) {
            if (a !== 1 || i !== 1)
              do
                if ((a--, i--, 0 > i || S[a] !== H[i])) {
                  var J =
                    `
` + S[a].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      J.includes('<anonymous>') &&
                      (J = J.replace('<anonymous>', e.displayName)),
                    J
                  )
                }
              while (1 <= a && 0 <= i)
            break
          }
      }
    } finally {
      ;(Rr = !1), (Error.prepareStackTrace = n)
    }
    return (n = e ? e.displayName || e.name : '') ? oa(n) : ''
  }
  function cg(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return oa(e.type)
      case 16:
        return oa('Lazy')
      case 13:
        return oa('Suspense')
      case 19:
        return oa('SuspenseList')
      case 0:
      case 15:
        return Mr(e.type, !1)
      case 11:
        return Mr(e.type.render, !1)
      case 1:
        return Mr(e.type, !0)
      case 31:
        return oa('Activity')
      default:
        return ''
    }
  }
  function mo(e) {
    try {
      var t = ''
      do (t += cg(e)), (e = e.return)
      while (e)
      return t
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      )
    }
  }
  function Mt(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function vo(e) {
    var t = e.type
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    )
  }
  function fg(e) {
    var t = vo(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var i = n.get,
        l = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this)
          },
          set: function (d) {
            ;(a = '' + d), l.call(this, d)
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (d) {
            a = '' + d
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function al(e) {
    e._valueTracker || (e._valueTracker = fg(e))
  }
  function yo(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      a = ''
    return (
      e && (a = vo(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    )
  }
  function il(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var dg = /[\n"\\]/g
  function zt(e) {
    return e.replace(dg, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' '
    })
  }
  function zr(e, t, n, a, i, l, d, p) {
    ;(e.name = ''),
      d != null &&
      typeof d != 'function' &&
      typeof d != 'symbol' &&
      typeof d != 'boolean'
        ? (e.type = d)
        : e.removeAttribute('type'),
      t != null
        ? d === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + Mt(t))
          : e.value !== '' + Mt(t) && (e.value = '' + Mt(t))
        : (d !== 'submit' && d !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Dr(e, d, Mt(t))
        : n != null
        ? Dr(e, d, Mt(n))
        : a != null && e.removeAttribute('value'),
      i == null && l != null && (e.defaultChecked = !!l),
      i != null &&
        (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      p != null &&
      typeof p != 'function' &&
      typeof p != 'symbol' &&
      typeof p != 'boolean'
        ? (e.name = '' + Mt(p))
        : e.removeAttribute('name')
  }
  function bo(e, t, n, a, i, l, d, p) {
    if (
      (l != null &&
        typeof l != 'function' &&
        typeof l != 'symbol' &&
        typeof l != 'boolean' &&
        (e.type = l),
      t != null || n != null)
    ) {
      if (!((l !== 'submit' && l !== 'reset') || t != null)) return
      ;(n = n != null ? '' + Mt(n) : ''),
        (t = t != null ? '' + Mt(t) : n),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(a = a ?? i),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = p ? e.checked : !!a),
      (e.defaultChecked = !!a),
      d != null &&
        typeof d != 'function' &&
        typeof d != 'symbol' &&
        typeof d != 'boolean' &&
        (e.name = d)
  }
  function Dr(e, t, n) {
    ;(t === 'number' && il(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n)
  }
  function ca(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {}
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && a && (e[n].defaultSelected = !0)
    } else {
      for (n = '' + Mt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ;(e[i].selected = !0), a && (e[i].defaultSelected = !0)
          return
        }
        t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
    }
  }
  function So(e, t, n) {
    if (
      t != null &&
      ((t = '' + Mt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t)
      return
    }
    e.defaultValue = n != null ? '' + Mt(n) : ''
  }
  function Oo(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92))
        if (I(a)) {
          if (1 < a.length) throw Error(s(93))
          a = a[0]
        }
        n = a
      }
      n == null && (n = ''), (t = n)
    }
    ;(n = Mt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== '' && a !== null && (e.value = a)
  }
  function fa(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var hg = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  )
  function To(e, t, n) {
    var a = t.indexOf('--') === 0
    n == null || typeof n == 'boolean' || n === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
        ? (e.cssFloat = '')
        : (e[t] = '')
      : a
      ? e.setProperty(t, n)
      : typeof n != 'number' || n === 0 || hg.has(t)
      ? t === 'float'
        ? (e.cssFloat = n)
        : (e[t] = ('' + n).trim())
      : (e[t] = n + 'px')
  }
  function xo(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(s(62))
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
            ? (e.cssFloat = '')
            : (e[a] = ''))
      for (var i in t)
        (a = t[i]), t.hasOwnProperty(i) && n[i] !== a && To(e, i, a)
    } else for (var l in t) t.hasOwnProperty(l) && To(e, l, t[l])
  }
  function jr(e) {
    if (e.indexOf('-') === -1) return !1
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var gg = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    pg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function ll(e) {
    return pg.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e
  }
  var Cr = null
  function Nr(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var da = null,
    ha = null
  function Eo(e) {
    var t = ra(e)
    if (t && (e = t.stateNode)) {
      var n = e[mt] || null
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (zr(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode
            for (
              n = n.querySelectorAll(
                'input[name="' + zt('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t]
              if (a !== e && a.form === e.form) {
                var i = a[mt] || null
                if (!i) throw Error(s(90))
                zr(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                )
              }
            }
            for (t = 0; t < n.length; t++)
              (a = n[t]), a.form === e.form && yo(a)
          }
          break e
        case 'textarea':
          So(e, n.value, n.defaultValue)
          break e
        case 'select':
          ;(t = n.value), t != null && ca(e, !!n.multiple, t, !1)
      }
    }
  }
  var Lr = !1
  function _o(e, t, n) {
    if (Lr) return e(t, n)
    Lr = !0
    try {
      var a = e(t)
      return a
    } finally {
      if (
        ((Lr = !1),
        (da !== null || ha !== null) &&
          (Ql(), da && ((t = da), (e = ha), (ha = da = null), Eo(t), e)))
      )
        for (t = 0; t < e.length; t++) Eo(e[t])
    }
  }
  function $a(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var a = n[mt] || null
    if (a === null) return null
    n = a[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !a)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && typeof n != 'function') throw Error(s(231, t, typeof n))
    return n
  }
  var $t = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Hr = !1
  if ($t)
    try {
      var Wa = {}
      Object.defineProperty(Wa, 'passive', {
        get: function () {
          Hr = !0
        },
      }),
        window.addEventListener('test', Wa, Wa),
        window.removeEventListener('test', Wa, Wa)
    } catch {
      Hr = !1
    }
  var dn = null,
    Ur = null,
    rl = null
  function Ao() {
    if (rl) return rl
    var e,
      t = Ur,
      n = t.length,
      a,
      i = 'value' in dn ? dn.value : dn.textContent,
      l = i.length
    for (e = 0; e < n && t[e] === i[e]; e++);
    var d = n - e
    for (a = 1; a <= d && t[n - a] === i[l - a]; a++);
    return (rl = i.slice(e, 1 < a ? 1 - a : void 0))
  }
  function ul(e) {
    var t = e.keyCode
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function sl() {
    return !0
  }
  function wo() {
    return !1
  }
  function vt(e) {
    function t(n, a, i, l, d) {
      ;(this._reactName = n),
        (this._targetInst = i),
        (this.type = a),
        (this.nativeEvent = l),
        (this.target = d),
        (this.currentTarget = null)
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(l) : l[p]))
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? sl
          : wo),
        (this.isPropagationStopped = wo),
        this
      )
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = sl))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = sl))
        },
        persist: function () {},
        isPersistent: sl,
      }),
      t
    )
  }
  var Bn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ol = vt(Bn),
    Fa = M({}, Bn, { view: 0, detail: 0 }),
    mg = vt(Fa),
    qr,
    Br,
    Ia,
    cl = M({}, Fa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Gr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Ia &&
              (Ia && e.type === 'mousemove'
                ? ((qr = e.screenX - Ia.screenX), (Br = e.screenY - Ia.screenY))
                : (Br = qr = 0),
              (Ia = e)),
            qr)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Br
      },
    }),
    Ro = vt(cl),
    vg = M({}, cl, { dataTransfer: 0 }),
    yg = vt(vg),
    bg = M({}, Fa, { relatedTarget: 0 }),
    Yr = vt(bg),
    Sg = M({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Og = vt(Sg),
    Tg = M({}, Bn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    xg = vt(Tg),
    Eg = M({}, Bn, { data: 0 }),
    Mo = vt(Eg),
    _g = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Ag = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    wg = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    }
  function Rg(e) {
    var t = this.nativeEvent
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = wg[e])
      ? !!t[e]
      : !1
  }
  function Gr() {
    return Rg
  }
  var Mg = M({}, Fa, {
      key: function (e) {
        if (e.key) {
          var t = _g[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = ul(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? Ag[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gr,
      charCode: function (e) {
        return e.type === 'keypress' ? ul(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ul(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    zg = vt(Mg),
    Dg = M({}, cl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    zo = vt(Dg),
    jg = M({}, Fa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gr,
    }),
    Cg = vt(jg),
    Ng = M({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lg = vt(Ng),
    Hg = M({}, cl, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ug = vt(Hg),
    qg = M({}, Bn, { newState: 0, oldState: 0 }),
    Bg = vt(qg),
    Yg = [9, 13, 27, 32],
    Xr = $t && 'CompositionEvent' in window,
    ei = null
  $t && 'documentMode' in document && (ei = document.documentMode)
  var Gg = $t && 'TextEvent' in window && !ei,
    Do = $t && (!Xr || (ei && 8 < ei && 11 >= ei)),
    jo = ' ',
    Co = !1
  function No(e, t) {
    switch (e) {
      case 'keyup':
        return Yg.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Lo(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var ga = !1
  function Xg(e, t) {
    switch (e) {
      case 'compositionend':
        return Lo(t)
      case 'keypress':
        return t.which !== 32 ? null : ((Co = !0), jo)
      case 'textInput':
        return (e = t.data), e === jo && Co ? null : e
      default:
        return null
    }
  }
  function Vg(e, t) {
    if (ga)
      return e === 'compositionend' || (!Xr && No(e, t))
        ? ((e = Ao()), (rl = Ur = dn = null), (ga = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return Do && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var Qg = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function Ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!Qg[e.type] : t === 'textarea'
  }
  function Uo(e, t, n, a) {
    da ? (ha ? ha.push(a) : (ha = [a])) : (da = a),
      (t = $l(t, 'onChange')),
      0 < t.length &&
        ((n = new ol('onChange', 'change', null, n, a)),
        e.push({ event: n, listeners: t }))
  }
  var ti = null,
    ni = null
  function kg(e) {
    yd(e, 0)
  }
  function fl(e) {
    var t = Pa(e)
    if (yo(t)) return e
  }
  function qo(e, t) {
    if (e === 'change') return t
  }
  var Bo = !1
  if ($t) {
    var Vr
    if ($t) {
      var Qr = 'oninput' in document
      if (!Qr) {
        var Yo = document.createElement('div')
        Yo.setAttribute('oninput', 'return;'),
          (Qr = typeof Yo.oninput == 'function')
      }
      Vr = Qr
    } else Vr = !1
    Bo = Vr && (!document.documentMode || 9 < document.documentMode)
  }
  function Go() {
    ti && (ti.detachEvent('onpropertychange', Xo), (ni = ti = null))
  }
  function Xo(e) {
    if (e.propertyName === 'value' && fl(ni)) {
      var t = []
      Uo(t, ni, e, Nr(e)), _o(kg, t)
    }
  }
  function Zg(e, t, n) {
    e === 'focusin'
      ? (Go(), (ti = t), (ni = n), ti.attachEvent('onpropertychange', Xo))
      : e === 'focusout' && Go()
  }
  function Kg(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return fl(ni)
  }
  function Jg(e, t) {
    if (e === 'click') return fl(t)
  }
  function Pg(e, t) {
    if (e === 'input' || e === 'change') return fl(t)
  }
  function $g(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var Tt = typeof Object.is == 'function' ? Object.is : $g
  function ai(e, t) {
    if (Tt(e, t)) return !0
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1
    var n = Object.keys(e),
      a = Object.keys(t)
    if (n.length !== a.length) return !1
    for (a = 0; a < n.length; a++) {
      var i = n[a]
      if (!Me.call(t, i) || !Tt(e[i], t[i])) return !1
    }
    return !0
  }
  function Vo(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function Qo(e, t) {
    var n = Vo(e)
    e = 0
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e }
        e = a
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = Vo(n)
    }
  }
  function ko(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ko(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function Zo(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window
    for (var t = il(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string'
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow
      else break
      t = il(e.document)
    }
    return t
  }
  function kr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  var Wg = $t && 'documentMode' in document && 11 >= document.documentMode,
    pa = null,
    Zr = null,
    ii = null,
    Kr = !1
  function Ko(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    Kr ||
      pa == null ||
      pa !== il(a) ||
      ((a = pa),
      'selectionStart' in a && kr(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ii && ai(ii, a)) ||
        ((ii = a),
        (a = $l(Zr, 'onSelect')),
        0 < a.length &&
          ((t = new ol('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = pa))))
  }
  function Yn(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    )
  }
  var ma = {
      animationend: Yn('Animation', 'AnimationEnd'),
      animationiteration: Yn('Animation', 'AnimationIteration'),
      animationstart: Yn('Animation', 'AnimationStart'),
      transitionrun: Yn('Transition', 'TransitionRun'),
      transitionstart: Yn('Transition', 'TransitionStart'),
      transitioncancel: Yn('Transition', 'TransitionCancel'),
      transitionend: Yn('Transition', 'TransitionEnd'),
    },
    Jr = {},
    Jo = {}
  $t &&
    ((Jo = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete ma.animationend.animation,
      delete ma.animationiteration.animation,
      delete ma.animationstart.animation),
    'TransitionEvent' in window || delete ma.transitionend.transition)
  function Gn(e) {
    if (Jr[e]) return Jr[e]
    if (!ma[e]) return e
    var t = ma[e],
      n
    for (n in t) if (t.hasOwnProperty(n) && n in Jo) return (Jr[e] = t[n])
    return e
  }
  var Po = Gn('animationend'),
    $o = Gn('animationiteration'),
    Wo = Gn('animationstart'),
    Fg = Gn('transitionrun'),
    Ig = Gn('transitionstart'),
    ep = Gn('transitioncancel'),
    Fo = Gn('transitionend'),
    Io = new Map(),
    Pr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  Pr.push('scrollEnd')
  function qt(e, t) {
    Io.set(e, t), qn(t, [e])
  }
  var ec = new WeakMap()
  function Dt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = ec.get(e)
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: mo(t) }), ec.set(e, t), t)
    }
    return { value: e, source: t, stack: mo(t) }
  }
  var jt = [],
    va = 0,
    $r = 0
  function dl() {
    for (var e = va, t = ($r = va = 0); t < e; ) {
      var n = jt[t]
      jt[t++] = null
      var a = jt[t]
      jt[t++] = null
      var i = jt[t]
      jt[t++] = null
      var l = jt[t]
      if (((jt[t++] = null), a !== null && i !== null)) {
        var d = a.pending
        d === null ? (i.next = i) : ((i.next = d.next), (d.next = i)),
          (a.pending = i)
      }
      l !== 0 && tc(n, i, l)
    }
  }
  function hl(e, t, n, a) {
    ;(jt[va++] = e),
      (jt[va++] = t),
      (jt[va++] = n),
      (jt[va++] = a),
      ($r |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a)
  }
  function Wr(e, t, n, a) {
    return hl(e, t, n, a), gl(e)
  }
  function ya(e, t) {
    return hl(e, null, null, t), gl(e)
  }
  function tc(e, t, n) {
    e.lanes |= n
    var a = e.alternate
    a !== null && (a.lanes |= n)
    for (var i = !1, l = e.return; l !== null; )
      (l.childLanes |= n),
        (a = l.alternate),
        a !== null && (a.childLanes |= n),
        l.tag === 22 &&
          ((e = l.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = l),
        (l = l.return)
    return e.tag === 3
      ? ((l = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - Ot(n)),
          (e = l.hiddenUpdates),
          (a = e[i]),
          a === null ? (e[i] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        l)
      : null
  }
  function gl(e) {
    if (50 < Mi) throw ((Mi = 0), (as = null), Error(s(185)))
    for (var t = e.return; t !== null; ) (e = t), (t = e.return)
    return e.tag === 3 ? e.stateNode : null
  }
  var ba = {}
  function tp(e, t, n, a) {
    ;(this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function xt(e, t, n, a) {
    return new tp(e, t, n, a)
  }
  function Fr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Wt(e, t) {
    var n = e.alternate
    return (
      n === null
        ? ((n = xt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    )
  }
  function nc(e, t) {
    e.flags &= 65011714
    var n = e.alternate
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    )
  }
  function pl(e, t, n, a, i, l) {
    var d = 0
    if (((a = e), typeof e == 'function')) Fr(e) && (d = 1)
    else if (typeof e == 'string')
      d = am(e, n, G.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
        ? 27
        : 5
    else
      e: switch (e) {
        case A:
          return (e = xt(31, n, t, i)), (e.elementType = A), (e.lanes = l), e
        case ee:
          return Xn(n.children, i, l, t)
        case k:
          ;(d = 8), (i |= 24)
          break
        case le:
          return (
            (e = xt(12, n, t, i | 2)), (e.elementType = le), (e.lanes = l), e
          )
        case E:
          return (e = xt(13, n, t, i)), (e.elementType = E), (e.lanes = l), e
        case D:
          return (e = xt(19, n, t, i)), (e.elementType = D), (e.lanes = l), e
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ce:
              case fe:
                d = 10
                break e
              case oe:
                d = 9
                break e
              case ge:
                d = 11
                break e
              case j:
                d = 14
                break e
              case K:
                ;(d = 16), (a = null)
                break e
            }
          ;(d = 29),
            (n = Error(s(130, e === null ? 'null' : typeof e, ''))),
            (a = null)
      }
    return (
      (t = xt(d, n, t, i)), (t.elementType = e), (t.type = a), (t.lanes = l), t
    )
  }
  function Xn(e, t, n, a) {
    return (e = xt(7, e, a, t)), (e.lanes = n), e
  }
  function Ir(e, t, n) {
    return (e = xt(6, e, null, t)), (e.lanes = n), e
  }
  function eu(e, t, n) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  var Sa = [],
    Oa = 0,
    ml = null,
    vl = 0,
    Ct = [],
    Nt = 0,
    Vn = null,
    Ft = 1,
    It = ''
  function Qn(e, t) {
    ;(Sa[Oa++] = vl), (Sa[Oa++] = ml), (ml = e), (vl = t)
  }
  function ac(e, t, n) {
    ;(Ct[Nt++] = Ft), (Ct[Nt++] = It), (Ct[Nt++] = Vn), (Vn = e)
    var a = Ft
    e = It
    var i = 32 - Ot(a) - 1
    ;(a &= ~(1 << i)), (n += 1)
    var l = 32 - Ot(t) + i
    if (30 < l) {
      var d = i - (i % 5)
      ;(l = (a & ((1 << d) - 1)).toString(32)),
        (a >>= d),
        (i -= d),
        (Ft = (1 << (32 - Ot(t) + i)) | (n << i) | a),
        (It = l + e)
    } else (Ft = (1 << l) | (n << i) | a), (It = e)
  }
  function tu(e) {
    e.return !== null && (Qn(e, 1), ac(e, 1, 0))
  }
  function nu(e) {
    for (; e === ml; )
      (ml = Sa[--Oa]), (Sa[Oa] = null), (vl = Sa[--Oa]), (Sa[Oa] = null)
    for (; e === Vn; )
      (Vn = Ct[--Nt]),
        (Ct[Nt] = null),
        (It = Ct[--Nt]),
        (Ct[Nt] = null),
        (Ft = Ct[--Nt]),
        (Ct[Nt] = null)
  }
  var gt = null,
    Qe = null,
    je = !1,
    kn = null,
    Gt = !1,
    au = Error(s(519))
  function Zn(e) {
    var t = Error(s(418, ''))
    throw (ui(Dt(t, e)), au)
  }
  function ic(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps
    switch (((t[ft] = e), (t[mt] = a), n)) {
      case 'dialog':
        _e('cancel', t), _e('close', t)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        _e('load', t)
        break
      case 'video':
      case 'audio':
        for (n = 0; n < Di.length; n++) _e(Di[n], t)
        break
      case 'source':
        _e('error', t)
        break
      case 'img':
      case 'image':
      case 'link':
        _e('error', t), _e('load', t)
        break
      case 'details':
        _e('toggle', t)
        break
      case 'input':
        _e('invalid', t),
          bo(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          al(t)
        break
      case 'select':
        _e('invalid', t)
        break
      case 'textarea':
        _e('invalid', t), Oo(t, a.value, a.defaultValue, a.children), al(t)
    }
    ;(n = a.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      a.suppressHydrationWarning === !0 ||
      Td(t.textContent, n)
        ? (a.popover != null && (_e('beforetoggle', t), _e('toggle', t)),
          a.onScroll != null && _e('scroll', t),
          a.onScrollEnd != null && _e('scrollend', t),
          a.onClick != null && (t.onclick = Wl),
          (t = !0))
        : (t = !1),
      t || Zn(e)
  }
  function lc(e) {
    for (gt = e.return; gt; )
      switch (gt.tag) {
        case 5:
        case 13:
          Gt = !1
          return
        case 27:
        case 3:
          Gt = !0
          return
        default:
          gt = gt.return
      }
  }
  function li(e) {
    if (e !== gt) return !1
    if (!je) return lc(e), (je = !0), !1
    var t = e.tag,
      n
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== 'form' && n !== 'button') || bs(e.type, e.memoizedProps))),
        (n = !n)),
      n && Qe && Zn(e),
      lc(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((n = e.data), n === '/$')) {
              if (t === 0) {
                Qe = Yt(e.nextSibling)
                break e
              }
              t--
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++
          e = e.nextSibling
        }
        Qe = null
      }
    } else
      t === 27
        ? ((t = Qe), Rn(e.type) ? ((e = xs), (xs = null), (Qe = e)) : (Qe = t))
        : (Qe = gt ? Yt(e.stateNode.nextSibling) : null)
    return !0
  }
  function ri() {
    ;(Qe = gt = null), (je = !1)
  }
  function rc() {
    var e = kn
    return (
      e !== null &&
        (St === null ? (St = e) : St.push.apply(St, e), (kn = null)),
      e
    )
  }
  function ui(e) {
    kn === null ? (kn = [e]) : kn.push(e)
  }
  var iu = m(null),
    Kn = null,
    en = null
  function hn(e, t, n) {
    N(iu, t._currentValue), (t._currentValue = n)
  }
  function tn(e) {
    ;(e._currentValue = iu.current), R(iu)
  }
  function lu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break
      e = e.return
    }
  }
  function ru(e, t, n, a) {
    var i = e.child
    for (i !== null && (i.return = e); i !== null; ) {
      var l = i.dependencies
      if (l !== null) {
        var d = i.child
        l = l.firstContext
        e: for (; l !== null; ) {
          var p = l
          l = i
          for (var S = 0; S < t.length; S++)
            if (p.context === t[S]) {
              ;(l.lanes |= n),
                (p = l.alternate),
                p !== null && (p.lanes |= n),
                lu(l.return, n, e),
                a || (d = null)
              break e
            }
          l = p.next
        }
      } else if (i.tag === 18) {
        if (((d = i.return), d === null)) throw Error(s(341))
        ;(d.lanes |= n),
          (l = d.alternate),
          l !== null && (l.lanes |= n),
          lu(d, n, e),
          (d = null)
      } else d = i.child
      if (d !== null) d.return = i
      else
        for (d = i; d !== null; ) {
          if (d === e) {
            d = null
            break
          }
          if (((i = d.sibling), i !== null)) {
            ;(i.return = d.return), (d = i)
            break
          }
          d = d.return
        }
      i = d
    }
  }
  function si(e, t, n, a) {
    e = null
    for (var i = t, l = !1; i !== null; ) {
      if (!l) {
        if ((i.flags & 524288) !== 0) l = !0
        else if ((i.flags & 262144) !== 0) break
      }
      if (i.tag === 10) {
        var d = i.alternate
        if (d === null) throw Error(s(387))
        if (((d = d.memoizedProps), d !== null)) {
          var p = i.type
          Tt(i.pendingProps.value, d.value) ||
            (e !== null ? e.push(p) : (e = [p]))
        }
      } else if (i === ne.current) {
        if (((d = i.alternate), d === null)) throw Error(s(387))
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(Ui) : (e = [Ui]))
      }
      i = i.return
    }
    e !== null && ru(t, e, n, a), (t.flags |= 262144)
  }
  function yl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tt(e.context._currentValue, e.memoizedValue)) return !0
      e = e.next
    }
    return !1
  }
  function Jn(e) {
    ;(Kn = e),
      (en = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null)
  }
  function dt(e) {
    return uc(Kn, e)
  }
  function bl(e, t) {
    return Kn === null && Jn(e), uc(e, t)
  }
  function uc(e, t) {
    var n = t._currentValue
    if (((t = { context: t, memoizedValue: n, next: null }), en === null)) {
      if (e === null) throw Error(s(308))
      ;(en = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288)
    } else en = en.next = t
    return n
  }
  var np =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a)
                },
              })
            this.abort = function () {
              ;(t.aborted = !0),
                e.forEach(function (n) {
                  return n()
                })
            }
          },
    ap = c.unstable_scheduleCallback,
    ip = c.unstable_NormalPriority,
    Ie = {
      $$typeof: fe,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    }
  function uu() {
    return { controller: new np(), data: new Map(), refCount: 0 }
  }
  function oi(e) {
    e.refCount--,
      e.refCount === 0 &&
        ap(ip, function () {
          e.controller.abort()
        })
  }
  var ci = null,
    su = 0,
    Ta = 0,
    xa = null
  function lp(e, t) {
    if (ci === null) {
      var n = (ci = [])
      ;(su = 0),
        (Ta = cs()),
        (xa = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            n.push(a)
          },
        })
    }
    return su++, t.then(sc, sc), t
  }
  function sc() {
    if (--su === 0 && ci !== null) {
      xa !== null && (xa.status = 'fulfilled')
      var e = ci
      ;(ci = null), (Ta = 0), (xa = null)
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
  }
  function rp(e, t) {
    var n = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (i) {
          n.push(i)
        },
      }
    return (
      e.then(
        function () {
          ;(a.status = 'fulfilled'), (a.value = t)
          for (var i = 0; i < n.length; i++) (0, n[i])(t)
        },
        function (i) {
          for (a.status = 'rejected', a.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0)
        }
      ),
      a
    )
  }
  var oc = _.S
  _.S = function (e, t) {
    typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      lp(e, t),
      oc !== null && oc(e, t)
  }
  var Pn = m(null)
  function ou() {
    var e = Pn.current
    return e !== null ? e : Be.pooledCache
  }
  function Sl(e, t) {
    t === null ? N(Pn, Pn.current) : N(Pn, t.pool)
  }
  function cc() {
    var e = ou()
    return e === null ? null : { parent: Ie._currentValue, pool: e }
  }
  var fi = Error(s(460)),
    fc = Error(s(474)),
    Ol = Error(s(542)),
    cu = { then: function () {} }
  function dc(e) {
    return (e = e.status), e === 'fulfilled' || e === 'rejected'
  }
  function Tl() {}
  function hc(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Tl, Tl), (t = n)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value
      case 'rejected':
        throw ((e = t.reason), pc(e), e)
      default:
        if (typeof t.status == 'string') t.then(Tl, Tl)
        else {
          if (((e = Be), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482))
          ;(e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var i = t
                  ;(i.status = 'fulfilled'), (i.value = a)
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var i = t
                  ;(i.status = 'rejected'), (i.reason = a)
                }
              }
            )
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value
          case 'rejected':
            throw ((e = t.reason), pc(e), e)
        }
        throw ((di = t), fi)
    }
  }
  var di = null
  function gc() {
    if (di === null) throw Error(s(459))
    var e = di
    return (di = null), e
  }
  function pc(e) {
    if (e === fi || e === Ol) throw Error(s(483))
  }
  var gn = !1
  function fu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    }
  }
  function du(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        })
  }
  function pn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null }
  }
  function mn(e, t, n) {
    var a = e.updateQueue
    if (a === null) return null
    if (((a = a.shared), (Ce & 2) !== 0)) {
      var i = a.pending
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (a.pending = t),
        (t = gl(e)),
        tc(e, null, n),
        t
      )
    }
    return hl(e, a, t, n), gl(e)
  }
  function hi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes
      ;(a &= e.pendingLanes), (n |= a), (t.lanes = n), uo(e, n)
    }
  }
  function hu(e, t) {
    var n = e.updateQueue,
      a = e.alternate
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var i = null,
        l = null
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          }
          l === null ? (i = l = d) : (l = l.next = d), (n = n.next)
        } while (n !== null)
        l === null ? (i = l = t) : (l = l.next = t)
      } else i = l = t
      ;(n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: l,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n)
      return
    }
    ;(e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t)
  }
  var gu = !1
  function gi() {
    if (gu) {
      var e = xa
      if (e !== null) throw e
    }
  }
  function pi(e, t, n, a) {
    gu = !1
    var i = e.updateQueue
    gn = !1
    var l = i.firstBaseUpdate,
      d = i.lastBaseUpdate,
      p = i.shared.pending
    if (p !== null) {
      i.shared.pending = null
      var S = p,
        H = S.next
      ;(S.next = null), d === null ? (l = H) : (d.next = H), (d = S)
      var J = e.alternate
      J !== null &&
        ((J = J.updateQueue),
        (p = J.lastBaseUpdate),
        p !== d &&
          (p === null ? (J.firstBaseUpdate = H) : (p.next = H),
          (J.lastBaseUpdate = S)))
    }
    if (l !== null) {
      var F = i.baseState
      ;(d = 0), (J = H = S = null), (p = l)
      do {
        var B = p.lane & -536870913,
          Y = B !== p.lane
        if (Y ? (we & B) === B : (a & B) === B) {
          B !== 0 && B === Ta && (gu = !0),
            J !== null &&
              (J = J.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                })
          e: {
            var me = e,
              de = p
            B = t
            var Ue = n
            switch (de.tag) {
              case 1:
                if (((me = de.payload), typeof me == 'function')) {
                  F = me.call(Ue, F, B)
                  break e
                }
                F = me
                break e
              case 3:
                me.flags = (me.flags & -65537) | 128
              case 0:
                if (
                  ((me = de.payload),
                  (B = typeof me == 'function' ? me.call(Ue, F, B) : me),
                  B == null)
                )
                  break e
                F = M({}, F, B)
                break e
              case 2:
                gn = !0
            }
          }
          ;(B = p.callback),
            B !== null &&
              ((e.flags |= 64),
              Y && (e.flags |= 8192),
              (Y = i.callbacks),
              Y === null ? (i.callbacks = [B]) : Y.push(B))
        } else
          (Y = {
            lane: B,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            J === null ? ((H = J = Y), (S = F)) : (J = J.next = Y),
            (d |= B)
        if (((p = p.next), p === null)) {
          if (((p = i.shared.pending), p === null)) break
          ;(Y = p),
            (p = Y.next),
            (Y.next = null),
            (i.lastBaseUpdate = Y),
            (i.shared.pending = null)
        }
      } while (!0)
      J === null && (S = F),
        (i.baseState = S),
        (i.firstBaseUpdate = H),
        (i.lastBaseUpdate = J),
        l === null && (i.shared.lanes = 0),
        (En |= d),
        (e.lanes = d),
        (e.memoizedState = F)
    }
  }
  function mc(e, t) {
    if (typeof e != 'function') throw Error(s(191, e))
    e.call(t)
  }
  function vc(e, t) {
    var n = e.callbacks
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) mc(n[e], t)
  }
  var Ea = m(null),
    xl = m(0)
  function yc(e, t) {
    ;(e = on), N(xl, e), N(Ea, t), (on = e | t.baseLanes)
  }
  function pu() {
    N(xl, on), N(Ea, Ea.current)
  }
  function mu() {
    ;(on = xl.current), R(Ea), R(xl)
  }
  var vn = 0,
    Oe = null,
    Le = null,
    We = null,
    El = !1,
    _a = !1,
    $n = !1,
    _l = 0,
    mi = 0,
    Aa = null,
    up = 0
  function Je() {
    throw Error(s(321))
  }
  function vu(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tt(e[n], t[n])) return !1
    return !0
  }
  function yu(e, t, n, a, i, l) {
    return (
      (vn = l),
      (Oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_.H = e === null || e.memoizedState === null ? tf : nf),
      ($n = !1),
      (l = n(a, i)),
      ($n = !1),
      _a && (l = Sc(t, n, a, i)),
      bc(e),
      l
    )
  }
  function bc(e) {
    _.H = Dl
    var t = Le !== null && Le.next !== null
    if (((vn = 0), (We = Le = Oe = null), (El = !1), (mi = 0), (Aa = null), t))
      throw Error(s(300))
    e === null || it || ((e = e.dependencies), e !== null && yl(e) && (it = !0))
  }
  function Sc(e, t, n, a) {
    Oe = e
    var i = 0
    do {
      if ((_a && (Aa = null), (mi = 0), (_a = !1), 25 <= i)) throw Error(s(301))
      if (((i += 1), (We = Le = null), e.updateQueue != null)) {
        var l = e.updateQueue
        ;(l.lastEffect = null),
          (l.events = null),
          (l.stores = null),
          l.memoCache != null && (l.memoCache.index = 0)
      }
      ;(_.H = gp), (l = t(n, a))
    } while (_a)
    return l
  }
  function sp() {
    var e = _.H,
      t = e.useState()[0]
    return (
      (t = typeof t.then == 'function' ? vi(t) : t),
      (e = e.useState()[0]),
      (Le !== null ? Le.memoizedState : null) !== e && (Oe.flags |= 1024),
      t
    )
  }
  function bu() {
    var e = _l !== 0
    return (_l = 0), e
  }
  function Su(e, t, n) {
    ;(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n)
  }
  function Ou(e) {
    if (El) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue
        t !== null && (t.pending = null), (e = e.next)
      }
      El = !1
    }
    ;(vn = 0), (We = Le = Oe = null), (_a = !1), (mi = _l = 0), (Aa = null)
  }
  function yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    }
    return We === null ? (Oe.memoizedState = We = e) : (We = We.next = e), We
  }
  function Fe() {
    if (Le === null) {
      var e = Oe.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Le.next
    var t = We === null ? Oe.memoizedState : We.next
    if (t !== null) (We = t), (Le = e)
    else {
      if (e === null)
        throw Oe.alternate === null ? Error(s(467)) : Error(s(310))
      ;(Le = e),
        (e = {
          memoizedState: Le.memoizedState,
          baseState: Le.baseState,
          baseQueue: Le.baseQueue,
          queue: Le.queue,
          next: null,
        }),
        We === null ? (Oe.memoizedState = We = e) : (We = We.next = e)
    }
    return We
  }
  function Tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function vi(e) {
    var t = mi
    return (
      (mi += 1),
      Aa === null && (Aa = []),
      (e = hc(Aa, e, t)),
      (t = Oe),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate),
        (_.H = t === null || t.memoizedState === null ? tf : nf)),
      e
    )
  }
  function Al(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return vi(e)
      if (e.$$typeof === fe) return dt(e)
    }
    throw Error(s(438, String(e)))
  }
  function xu(e) {
    var t = null,
      n = Oe.updateQueue
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = Oe.alternate
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (i) {
                return i.slice()
              }),
              index: 0,
            })))
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Tu()), (Oe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = v
    return t.index++, n
  }
  function nn(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function wl(e) {
    var t = Fe()
    return Eu(t, Le, e)
  }
  function Eu(e, t, n) {
    var a = e.queue
    if (a === null) throw Error(s(311))
    a.lastRenderedReducer = n
    var i = e.baseQueue,
      l = a.pending
    if (l !== null) {
      if (i !== null) {
        var d = i.next
        ;(i.next = l.next), (l.next = d)
      }
      ;(t.baseQueue = i = l), (a.pending = null)
    }
    if (((l = e.baseState), i === null)) e.memoizedState = l
    else {
      t = i.next
      var p = (d = null),
        S = null,
        H = t,
        J = !1
      do {
        var F = H.lane & -536870913
        if (F !== H.lane ? (we & F) === F : (vn & F) === F) {
          var B = H.revertLane
          if (B === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: H.action,
                  hasEagerState: H.hasEagerState,
                  eagerState: H.eagerState,
                  next: null,
                }),
              F === Ta && (J = !0)
          else if ((vn & B) === B) {
            ;(H = H.next), B === Ta && (J = !0)
            continue
          } else
            (F = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null,
            }),
              S === null ? ((p = S = F), (d = l)) : (S = S.next = F),
              (Oe.lanes |= B),
              (En |= B)
          ;(F = H.action),
            $n && n(l, F),
            (l = H.hasEagerState ? H.eagerState : n(l, F))
        } else
          (B = {
            lane: F,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null,
          }),
            S === null ? ((p = S = B), (d = l)) : (S = S.next = B),
            (Oe.lanes |= F),
            (En |= F)
        H = H.next
      } while (H !== null && H !== t)
      if (
        (S === null ? (d = l) : (S.next = p),
        !Tt(l, e.memoizedState) && ((it = !0), J && ((n = xa), n !== null)))
      )
        throw n
      ;(e.memoizedState = l),
        (e.baseState = d),
        (e.baseQueue = S),
        (a.lastRenderedState = l)
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
  }
  function _u(e) {
    var t = Fe(),
      n = t.queue
    if (n === null) throw Error(s(311))
    n.lastRenderedReducer = e
    var a = n.dispatch,
      i = n.pending,
      l = t.memoizedState
    if (i !== null) {
      n.pending = null
      var d = (i = i.next)
      do (l = e(l, d.action)), (d = d.next)
      while (d !== i)
      Tt(l, t.memoizedState) || (it = !0),
        (t.memoizedState = l),
        t.baseQueue === null && (t.baseState = l),
        (n.lastRenderedState = l)
    }
    return [l, a]
  }
  function Oc(e, t, n) {
    var a = Oe,
      i = Fe(),
      l = je
    if (l) {
      if (n === void 0) throw Error(s(407))
      n = n()
    } else n = t()
    var d = !Tt((Le || i).memoizedState, n)
    d && ((i.memoizedState = n), (it = !0)), (i = i.queue)
    var p = Ec.bind(null, a, i, e)
    if (
      (yi(2048, 8, p, [e]),
      i.getSnapshot !== t || d || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        wa(9, Rl(), xc.bind(null, a, i, n, t), null),
        Be === null)
      )
        throw Error(s(349))
      l || (vn & 124) !== 0 || Tc(a, t, n)
    }
    return n
  }
  function Tc(e, t, n) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = Tu()), (Oe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
  }
  function xc(e, t, n, a) {
    ;(t.value = n), (t.getSnapshot = a), _c(t) && Ac(e)
  }
  function Ec(e, t, n) {
    return n(function () {
      _c(t) && Ac(e)
    })
  }
  function _c(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var n = t()
      return !Tt(e, n)
    } catch {
      return !0
    }
  }
  function Ac(e) {
    var t = ya(e, 2)
    t !== null && Rt(t, e, 2)
  }
  function Au(e) {
    var t = yt()
    if (typeof e == 'function') {
      var n = e
      if (((e = n()), $n)) {
        pt(!0)
        try {
          n()
        } finally {
          pt(!1)
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nn,
        lastRenderedState: e,
      }),
      t
    )
  }
  function wc(e, t, n, a) {
    return (e.baseState = n), Eu(e, Le, typeof a == 'function' ? a : nn)
  }
  function op(e, t, n, a, i) {
    if (zl(e)) throw Error(s(485))
    if (((e = t.action), e !== null)) {
      var l = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          l.listeners.push(d)
        },
      }
      _.T !== null ? n(!0) : (l.isTransition = !1),
        a(l),
        (n = t.pending),
        n === null
          ? ((l.next = t.pending = l), Rc(t, l))
          : ((l.next = n.next), (t.pending = n.next = l))
    }
  }
  function Rc(e, t) {
    var n = t.action,
      a = t.payload,
      i = e.state
    if (t.isTransition) {
      var l = _.T,
        d = {}
      _.T = d
      try {
        var p = n(i, a),
          S = _.S
        S !== null && S(d, p), Mc(e, t, p)
      } catch (H) {
        wu(e, t, H)
      } finally {
        _.T = l
      }
    } else
      try {
        ;(l = n(i, a)), Mc(e, t, l)
      } catch (H) {
        wu(e, t, H)
      }
  }
  function Mc(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (a) {
            zc(e, t, a)
          },
          function (a) {
            return wu(e, t, a)
          }
        )
      : zc(e, t, n)
  }
  function zc(e, t, n) {
    ;(t.status = 'fulfilled'),
      (t.value = n),
      Dc(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Rc(e, n)))
  }
  function wu(e, t, n) {
    var a = e.pending
    if (((e.pending = null), a !== null)) {
      a = a.next
      do (t.status = 'rejected'), (t.reason = n), Dc(t), (t = t.next)
      while (t !== a)
    }
    e.action = null
  }
  function Dc(e) {
    e = e.listeners
    for (var t = 0; t < e.length; t++) (0, e[t])()
  }
  function jc(e, t) {
    return t
  }
  function Cc(e, t) {
    if (je) {
      var n = Be.formState
      if (n !== null) {
        e: {
          var a = Oe
          if (je) {
            if (Qe) {
              t: {
                for (var i = Qe, l = Gt; i.nodeType !== 8; ) {
                  if (!l) {
                    i = null
                    break t
                  }
                  if (((i = Yt(i.nextSibling)), i === null)) {
                    i = null
                    break t
                  }
                }
                ;(l = i.data), (i = l === 'F!' || l === 'F' ? i : null)
              }
              if (i) {
                ;(Qe = Yt(i.nextSibling)), (a = i.data === 'F!')
                break e
              }
            }
            Zn(a)
          }
          a = !1
        }
        a && (t = n[0])
      }
    }
    return (
      (n = yt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jc,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Fc.bind(null, Oe, a)),
      (a.dispatch = n),
      (a = Au(!1)),
      (l = ju.bind(null, Oe, !1, a.queue)),
      (a = yt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = i),
      (n = op.bind(null, Oe, i, l, n)),
      (i.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    )
  }
  function Nc(e) {
    var t = Fe()
    return Lc(t, Le, e)
  }
  function Lc(e, t, n) {
    if (
      ((t = Eu(e, t, jc)[0]),
      (e = wl(nn)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = vi(t)
      } catch (d) {
        throw d === fi ? Ol : d
      }
    else a = t
    t = Fe()
    var i = t.queue,
      l = i.dispatch
    return (
      n !== t.memoizedState &&
        ((Oe.flags |= 2048), wa(9, Rl(), cp.bind(null, i, n), null)),
      [a, l, e]
    )
  }
  function cp(e, t) {
    e.action = t
  }
  function Hc(e) {
    var t = Fe(),
      n = Le
    if (n !== null) return Lc(t, n, e)
    Fe(), (t = t.memoizedState), (n = Fe())
    var a = n.queue.dispatch
    return (n.memoizedState = e), [t, a, !1]
  }
  function wa(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = Oe.updateQueue),
      t === null && ((t = Tu()), (Oe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    )
  }
  function Rl() {
    return { destroy: void 0, resource: void 0 }
  }
  function Uc() {
    return Fe().memoizedState
  }
  function Ml(e, t, n, a) {
    var i = yt()
    ;(a = a === void 0 ? null : a),
      (Oe.flags |= e),
      (i.memoizedState = wa(1 | t, Rl(), n, a))
  }
  function yi(e, t, n, a) {
    var i = Fe()
    a = a === void 0 ? null : a
    var l = i.memoizedState.inst
    Le !== null && a !== null && vu(a, Le.memoizedState.deps)
      ? (i.memoizedState = wa(t, l, n, a))
      : ((Oe.flags |= e), (i.memoizedState = wa(1 | t, l, n, a)))
  }
  function qc(e, t) {
    Ml(8390656, 8, e, t)
  }
  function Bc(e, t) {
    yi(2048, 8, e, t)
  }
  function Yc(e, t) {
    return yi(4, 2, e, t)
  }
  function Gc(e, t) {
    return yi(4, 4, e, t)
  }
  function Xc(e, t) {
    if (typeof t == 'function') {
      e = e()
      var n = t(e)
      return function () {
        typeof n == 'function' ? n() : t(null)
      }
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function Vc(e, t, n) {
    ;(n = n != null ? n.concat([e]) : null), yi(4, 4, Xc.bind(null, t, e), n)
  }
  function Ru() {}
  function Qc(e, t) {
    var n = Fe()
    t = t === void 0 ? null : t
    var a = n.memoizedState
    return t !== null && vu(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e)
  }
  function kc(e, t) {
    var n = Fe()
    t = t === void 0 ? null : t
    var a = n.memoizedState
    if (t !== null && vu(t, a[1])) return a[0]
    if (((a = e()), $n)) {
      pt(!0)
      try {
        e()
      } finally {
        pt(!1)
      }
    }
    return (n.memoizedState = [a, t]), a
  }
  function Mu(e, t, n) {
    return n === void 0 || (vn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Pf()), (Oe.lanes |= e), (En |= e), n)
  }
  function Zc(e, t, n, a) {
    return Tt(n, t)
      ? n
      : Ea.current !== null
      ? ((e = Mu(e, n, a)), Tt(e, t) || (it = !0), e)
      : (vn & 42) === 0
      ? ((it = !0), (e.memoizedState = n))
      : ((e = Pf()), (Oe.lanes |= e), (En |= e), t)
  }
  function Kc(e, t, n, a, i) {
    var l = f.p
    f.p = l !== 0 && 8 > l ? l : 8
    var d = _.T,
      p = {}
    ;(_.T = p), ju(e, !1, t, n)
    try {
      var S = i(),
        H = _.S
      if (
        (H !== null && H(p, S),
        S !== null && typeof S == 'object' && typeof S.then == 'function')
      ) {
        var J = rp(S, a)
        bi(e, t, J, wt(e))
      } else bi(e, t, a, wt(e))
    } catch (F) {
      bi(e, t, { then: function () {}, status: 'rejected', reason: F }, wt())
    } finally {
      ;(f.p = l), (_.T = d)
    }
  }
  function fp() {}
  function zu(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476))
    var i = Jc(e).queue
    Kc(
      e,
      i,
      t,
      te,
      n === null
        ? fp
        : function () {
            return Pc(e), n(a)
          }
    )
  }
  function Jc(e) {
    var t = e.memoizedState
    if (t !== null) return t
    t = {
      memoizedState: te,
      baseState: te,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nn,
        lastRenderedState: te,
      },
      next: null,
    }
    var n = {}
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: nn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    )
  }
  function Pc(e) {
    var t = Jc(e).next.queue
    bi(e, t, {}, wt())
  }
  function Du() {
    return dt(Ui)
  }
  function $c() {
    return Fe().memoizedState
  }
  function Wc() {
    return Fe().memoizedState
  }
  function dp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = wt()
          e = pn(n)
          var a = mn(t, e, n)
          a !== null && (Rt(a, t, n), hi(a, t, n)),
            (t = { cache: uu() }),
            (e.payload = t)
          return
      }
      t = t.return
    }
  }
  function hp(e, t, n) {
    var a = wt()
    ;(n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zl(e)
        ? Ic(t, n)
        : ((n = Wr(e, t, n, a)), n !== null && (Rt(n, e, a), ef(n, t, a)))
  }
  function Fc(e, t, n) {
    var a = wt()
    bi(e, t, n, a)
  }
  function bi(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
    if (zl(e)) Ic(t, i)
    else {
      var l = e.alternate
      if (
        e.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = t.lastRenderedReducer), l !== null)
      )
        try {
          var d = t.lastRenderedState,
            p = l(d, n)
          if (((i.hasEagerState = !0), (i.eagerState = p), Tt(p, d)))
            return hl(e, t, i, 0), Be === null && dl(), !1
        } catch {
        } finally {
        }
      if (((n = Wr(e, t, i, a)), n !== null))
        return Rt(n, e, a), ef(n, t, a), !0
    }
    return !1
  }
  function ju(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: cs(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zl(e))
    ) {
      if (t) throw Error(s(479))
    } else (t = Wr(e, n, a, 2)), t !== null && Rt(t, e, 2)
  }
  function zl(e) {
    var t = e.alternate
    return e === Oe || (t !== null && t === Oe)
  }
  function Ic(e, t) {
    _a = El = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t)
  }
  function ef(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes
      ;(a &= e.pendingLanes), (n |= a), (t.lanes = n), uo(e, n)
    }
  }
  var Dl = {
      readContext: dt,
      use: Al,
      useCallback: Je,
      useContext: Je,
      useEffect: Je,
      useImperativeHandle: Je,
      useLayoutEffect: Je,
      useInsertionEffect: Je,
      useMemo: Je,
      useReducer: Je,
      useRef: Je,
      useState: Je,
      useDebugValue: Je,
      useDeferredValue: Je,
      useTransition: Je,
      useSyncExternalStore: Je,
      useId: Je,
      useHostTransitionStatus: Je,
      useFormState: Je,
      useActionState: Je,
      useOptimistic: Je,
      useMemoCache: Je,
      useCacheRefresh: Je,
    },
    tf = {
      readContext: dt,
      use: Al,
      useCallback: function (e, t) {
        return (yt().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: dt,
      useEffect: qc,
      useImperativeHandle: function (e, t, n) {
        ;(n = n != null ? n.concat([e]) : null),
          Ml(4194308, 4, Xc.bind(null, t, e), n)
      },
      useLayoutEffect: function (e, t) {
        return Ml(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        Ml(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var n = yt()
        t = t === void 0 ? null : t
        var a = e()
        if ($n) {
          pt(!0)
          try {
            e()
          } finally {
            pt(!1)
          }
        }
        return (n.memoizedState = [a, t]), a
      },
      useReducer: function (e, t, n) {
        var a = yt()
        if (n !== void 0) {
          var i = n(t)
          if ($n) {
            pt(!0)
            try {
              n(t)
            } finally {
              pt(!1)
            }
          }
        } else i = t
        return (
          (a.memoizedState = a.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (a.queue = e),
          (e = e.dispatch = hp.bind(null, Oe, e)),
          [a.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = yt()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: function (e) {
        e = Au(e)
        var t = e.queue,
          n = Fc.bind(null, Oe, t)
        return (t.dispatch = n), [e.memoizedState, n]
      },
      useDebugValue: Ru,
      useDeferredValue: function (e, t) {
        var n = yt()
        return Mu(n, e, t)
      },
      useTransition: function () {
        var e = Au(!1)
        return (
          (e = Kc.bind(null, Oe, e.queue, !0, !1)),
          (yt().memoizedState = e),
          [!1, e]
        )
      },
      useSyncExternalStore: function (e, t, n) {
        var a = Oe,
          i = yt()
        if (je) {
          if (n === void 0) throw Error(s(407))
          n = n()
        } else {
          if (((n = t()), Be === null)) throw Error(s(349))
          ;(we & 124) !== 0 || Tc(a, t, n)
        }
        i.memoizedState = n
        var l = { value: n, getSnapshot: t }
        return (
          (i.queue = l),
          qc(Ec.bind(null, a, l, e), [e]),
          (a.flags |= 2048),
          wa(9, Rl(), xc.bind(null, a, l, n, t), null),
          n
        )
      },
      useId: function () {
        var e = yt(),
          t = Be.identifierPrefix
        if (je) {
          var n = It,
            a = Ft
          ;(n = (a & ~(1 << (32 - Ot(a) - 1))).toString(32) + n),
            (t = '«' + t + 'R' + n),
            (n = _l++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '»')
        } else (n = up++), (t = '«' + t + 'r' + n.toString(32) + '»')
        return (e.memoizedState = t)
      },
      useHostTransitionStatus: Du,
      useFormState: Cc,
      useActionState: Cc,
      useOptimistic: function (e) {
        var t = yt()
        t.memoizedState = t.baseState = e
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        }
        return (
          (t.queue = n),
          (t = ju.bind(null, Oe, !0, n)),
          (n.dispatch = t),
          [e, t]
        )
      },
      useMemoCache: xu,
      useCacheRefresh: function () {
        return (yt().memoizedState = dp.bind(null, Oe))
      },
    },
    nf = {
      readContext: dt,
      use: Al,
      useCallback: Qc,
      useContext: dt,
      useEffect: Bc,
      useImperativeHandle: Vc,
      useInsertionEffect: Yc,
      useLayoutEffect: Gc,
      useMemo: kc,
      useReducer: wl,
      useRef: Uc,
      useState: function () {
        return wl(nn)
      },
      useDebugValue: Ru,
      useDeferredValue: function (e, t) {
        var n = Fe()
        return Zc(n, Le.memoizedState, e, t)
      },
      useTransition: function () {
        var e = wl(nn)[0],
          t = Fe().memoizedState
        return [typeof e == 'boolean' ? e : vi(e), t]
      },
      useSyncExternalStore: Oc,
      useId: $c,
      useHostTransitionStatus: Du,
      useFormState: Nc,
      useActionState: Nc,
      useOptimistic: function (e, t) {
        var n = Fe()
        return wc(n, Le, e, t)
      },
      useMemoCache: xu,
      useCacheRefresh: Wc,
    },
    gp = {
      readContext: dt,
      use: Al,
      useCallback: Qc,
      useContext: dt,
      useEffect: Bc,
      useImperativeHandle: Vc,
      useInsertionEffect: Yc,
      useLayoutEffect: Gc,
      useMemo: kc,
      useReducer: _u,
      useRef: Uc,
      useState: function () {
        return _u(nn)
      },
      useDebugValue: Ru,
      useDeferredValue: function (e, t) {
        var n = Fe()
        return Le === null ? Mu(n, e, t) : Zc(n, Le.memoizedState, e, t)
      },
      useTransition: function () {
        var e = _u(nn)[0],
          t = Fe().memoizedState
        return [typeof e == 'boolean' ? e : vi(e), t]
      },
      useSyncExternalStore: Oc,
      useId: $c,
      useHostTransitionStatus: Du,
      useFormState: Hc,
      useActionState: Hc,
      useOptimistic: function (e, t) {
        var n = Fe()
        return Le !== null
          ? wc(n, Le, e, t)
          : ((n.baseState = e), [e, n.queue.dispatch])
      },
      useMemoCache: xu,
      useCacheRefresh: Wc,
    },
    Ra = null,
    Si = 0
  function jl(e) {
    var t = Si
    return (Si += 1), Ra === null && (Ra = []), hc(Ra, e, t)
  }
  function Oi(e, t) {
    ;(t = t.props.ref), (e.ref = t !== void 0 ? t : null)
  }
  function Cl(e, t) {
    throw t.$$typeof === Q
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ))
  }
  function af(e) {
    var t = e._init
    return t(e._payload)
  }
  function lf(e) {
    function t(z, w) {
      if (e) {
        var C = z.deletions
        C === null ? ((z.deletions = [w]), (z.flags |= 16)) : C.push(w)
      }
    }
    function n(z, w) {
      if (!e) return null
      for (; w !== null; ) t(z, w), (w = w.sibling)
      return null
    }
    function a(z) {
      for (var w = new Map(); z !== null; )
        z.key !== null ? w.set(z.key, z) : w.set(z.index, z), (z = z.sibling)
      return w
    }
    function i(z, w) {
      return (z = Wt(z, w)), (z.index = 0), (z.sibling = null), z
    }
    function l(z, w, C) {
      return (
        (z.index = C),
        e
          ? ((C = z.alternate),
            C !== null
              ? ((C = C.index), C < w ? ((z.flags |= 67108866), w) : C)
              : ((z.flags |= 67108866), w))
          : ((z.flags |= 1048576), w)
      )
    }
    function d(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z
    }
    function p(z, w, C, P) {
      return w === null || w.tag !== 6
        ? ((w = Ir(C, z.mode, P)), (w.return = z), w)
        : ((w = i(w, C)), (w.return = z), w)
    }
    function S(z, w, C, P) {
      var re = C.type
      return re === ee
        ? J(z, w, C.props.children, P, C.key)
        : w !== null &&
          (w.elementType === re ||
            (typeof re == 'object' &&
              re !== null &&
              re.$$typeof === K &&
              af(re) === w.type))
        ? ((w = i(w, C.props)), Oi(w, C), (w.return = z), w)
        : ((w = pl(C.type, C.key, C.props, null, z.mode, P)),
          Oi(w, C),
          (w.return = z),
          w)
    }
    function H(z, w, C, P) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== C.containerInfo ||
        w.stateNode.implementation !== C.implementation
        ? ((w = eu(C, z.mode, P)), (w.return = z), w)
        : ((w = i(w, C.children || [])), (w.return = z), w)
    }
    function J(z, w, C, P, re) {
      return w === null || w.tag !== 7
        ? ((w = Xn(C, z.mode, P, re)), (w.return = z), w)
        : ((w = i(w, C)), (w.return = z), w)
    }
    function F(z, w, C) {
      if (
        (typeof w == 'string' && w !== '') ||
        typeof w == 'number' ||
        typeof w == 'bigint'
      )
        return (w = Ir('' + w, z.mode, C)), (w.return = z), w
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case X:
            return (
              (C = pl(w.type, w.key, w.props, null, z.mode, C)),
              Oi(C, w),
              (C.return = z),
              C
            )
          case ae:
            return (w = eu(w, z.mode, C)), (w.return = z), w
          case K:
            var P = w._init
            return (w = P(w._payload)), F(z, w, C)
        }
        if (I(w) || V(w)) return (w = Xn(w, z.mode, C, null)), (w.return = z), w
        if (typeof w.then == 'function') return F(z, jl(w), C)
        if (w.$$typeof === fe) return F(z, bl(z, w), C)
        Cl(z, w)
      }
      return null
    }
    function B(z, w, C, P) {
      var re = w !== null ? w.key : null
      if (
        (typeof C == 'string' && C !== '') ||
        typeof C == 'number' ||
        typeof C == 'bigint'
      )
        return re !== null ? null : p(z, w, '' + C, P)
      if (typeof C == 'object' && C !== null) {
        switch (C.$$typeof) {
          case X:
            return C.key === re ? S(z, w, C, P) : null
          case ae:
            return C.key === re ? H(z, w, C, P) : null
          case K:
            return (re = C._init), (C = re(C._payload)), B(z, w, C, P)
        }
        if (I(C) || V(C)) return re !== null ? null : J(z, w, C, P, null)
        if (typeof C.then == 'function') return B(z, w, jl(C), P)
        if (C.$$typeof === fe) return B(z, w, bl(z, C), P)
        Cl(z, C)
      }
      return null
    }
    function Y(z, w, C, P, re) {
      if (
        (typeof P == 'string' && P !== '') ||
        typeof P == 'number' ||
        typeof P == 'bigint'
      )
        return (z = z.get(C) || null), p(w, z, '' + P, re)
      if (typeof P == 'object' && P !== null) {
        switch (P.$$typeof) {
          case X:
            return (
              (z = z.get(P.key === null ? C : P.key) || null), S(w, z, P, re)
            )
          case ae:
            return (
              (z = z.get(P.key === null ? C : P.key) || null), H(w, z, P, re)
            )
          case K:
            var xe = P._init
            return (P = xe(P._payload)), Y(z, w, C, P, re)
        }
        if (I(P) || V(P)) return (z = z.get(C) || null), J(w, z, P, re, null)
        if (typeof P.then == 'function') return Y(z, w, C, jl(P), re)
        if (P.$$typeof === fe) return Y(z, w, C, bl(w, P), re)
        Cl(w, P)
      }
      return null
    }
    function me(z, w, C, P) {
      for (
        var re = null, xe = null, se = w, he = (w = 0), rt = null;
        se !== null && he < C.length;
        he++
      ) {
        se.index > he ? ((rt = se), (se = null)) : (rt = se.sibling)
        var De = B(z, se, C[he], P)
        if (De === null) {
          se === null && (se = rt)
          break
        }
        e && se && De.alternate === null && t(z, se),
          (w = l(De, w, he)),
          xe === null ? (re = De) : (xe.sibling = De),
          (xe = De),
          (se = rt)
      }
      if (he === C.length) return n(z, se), je && Qn(z, he), re
      if (se === null) {
        for (; he < C.length; he++)
          (se = F(z, C[he], P)),
            se !== null &&
              ((w = l(se, w, he)),
              xe === null ? (re = se) : (xe.sibling = se),
              (xe = se))
        return je && Qn(z, he), re
      }
      for (se = a(se); he < C.length; he++)
        (rt = Y(se, z, he, C[he], P)),
          rt !== null &&
            (e &&
              rt.alternate !== null &&
              se.delete(rt.key === null ? he : rt.key),
            (w = l(rt, w, he)),
            xe === null ? (re = rt) : (xe.sibling = rt),
            (xe = rt))
      return (
        e &&
          se.forEach(function (Cn) {
            return t(z, Cn)
          }),
        je && Qn(z, he),
        re
      )
    }
    function de(z, w, C, P) {
      if (C == null) throw Error(s(151))
      for (
        var re = null,
          xe = null,
          se = w,
          he = (w = 0),
          rt = null,
          De = C.next();
        se !== null && !De.done;
        he++, De = C.next()
      ) {
        se.index > he ? ((rt = se), (se = null)) : (rt = se.sibling)
        var Cn = B(z, se, De.value, P)
        if (Cn === null) {
          se === null && (se = rt)
          break
        }
        e && se && Cn.alternate === null && t(z, se),
          (w = l(Cn, w, he)),
          xe === null ? (re = Cn) : (xe.sibling = Cn),
          (xe = Cn),
          (se = rt)
      }
      if (De.done) return n(z, se), je && Qn(z, he), re
      if (se === null) {
        for (; !De.done; he++, De = C.next())
          (De = F(z, De.value, P)),
            De !== null &&
              ((w = l(De, w, he)),
              xe === null ? (re = De) : (xe.sibling = De),
              (xe = De))
        return je && Qn(z, he), re
      }
      for (se = a(se); !De.done; he++, De = C.next())
        (De = Y(se, z, he, De.value, P)),
          De !== null &&
            (e &&
              De.alternate !== null &&
              se.delete(De.key === null ? he : De.key),
            (w = l(De, w, he)),
            xe === null ? (re = De) : (xe.sibling = De),
            (xe = De))
      return (
        e &&
          se.forEach(function (pm) {
            return t(z, pm)
          }),
        je && Qn(z, he),
        re
      )
    }
    function Ue(z, w, C, P) {
      if (
        (typeof C == 'object' &&
          C !== null &&
          C.type === ee &&
          C.key === null &&
          (C = C.props.children),
        typeof C == 'object' && C !== null)
      ) {
        switch (C.$$typeof) {
          case X:
            e: {
              for (var re = C.key; w !== null; ) {
                if (w.key === re) {
                  if (((re = C.type), re === ee)) {
                    if (w.tag === 7) {
                      n(z, w.sibling),
                        (P = i(w, C.props.children)),
                        (P.return = z),
                        (z = P)
                      break e
                    }
                  } else if (
                    w.elementType === re ||
                    (typeof re == 'object' &&
                      re !== null &&
                      re.$$typeof === K &&
                      af(re) === w.type)
                  ) {
                    n(z, w.sibling),
                      (P = i(w, C.props)),
                      Oi(P, C),
                      (P.return = z),
                      (z = P)
                    break e
                  }
                  n(z, w)
                  break
                } else t(z, w)
                w = w.sibling
              }
              C.type === ee
                ? ((P = Xn(C.props.children, z.mode, P, C.key)),
                  (P.return = z),
                  (z = P))
                : ((P = pl(C.type, C.key, C.props, null, z.mode, P)),
                  Oi(P, C),
                  (P.return = z),
                  (z = P))
            }
            return d(z)
          case ae:
            e: {
              for (re = C.key; w !== null; ) {
                if (w.key === re)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === C.containerInfo &&
                    w.stateNode.implementation === C.implementation
                  ) {
                    n(z, w.sibling),
                      (P = i(w, C.children || [])),
                      (P.return = z),
                      (z = P)
                    break e
                  } else {
                    n(z, w)
                    break
                  }
                else t(z, w)
                w = w.sibling
              }
              ;(P = eu(C, z.mode, P)), (P.return = z), (z = P)
            }
            return d(z)
          case K:
            return (re = C._init), (C = re(C._payload)), Ue(z, w, C, P)
        }
        if (I(C)) return me(z, w, C, P)
        if (V(C)) {
          if (((re = V(C)), typeof re != 'function')) throw Error(s(150))
          return (C = re.call(C)), de(z, w, C, P)
        }
        if (typeof C.then == 'function') return Ue(z, w, jl(C), P)
        if (C.$$typeof === fe) return Ue(z, w, bl(z, C), P)
        Cl(z, C)
      }
      return (typeof C == 'string' && C !== '') ||
        typeof C == 'number' ||
        typeof C == 'bigint'
        ? ((C = '' + C),
          w !== null && w.tag === 6
            ? (n(z, w.sibling), (P = i(w, C)), (P.return = z), (z = P))
            : (n(z, w), (P = Ir(C, z.mode, P)), (P.return = z), (z = P)),
          d(z))
        : n(z, w)
    }
    return function (z, w, C, P) {
      try {
        Si = 0
        var re = Ue(z, w, C, P)
        return (Ra = null), re
      } catch (se) {
        if (se === fi || se === Ol) throw se
        var xe = xt(29, se, null, z.mode)
        return (xe.lanes = P), (xe.return = z), xe
      } finally {
      }
    }
  }
  var Ma = lf(!0),
    rf = lf(!1),
    Lt = m(null),
    Xt = null
  function yn(e) {
    var t = e.alternate
    N(et, et.current & 1),
      N(Lt, e),
      Xt === null &&
        (t === null || Ea.current !== null || t.memoizedState !== null) &&
        (Xt = e)
  }
  function uf(e) {
    if (e.tag === 22) {
      if ((N(et, et.current), N(Lt, e), Xt === null)) {
        var t = e.alternate
        t !== null && t.memoizedState !== null && (Xt = e)
      }
    } else bn()
  }
  function bn() {
    N(et, et.current), N(Lt, Lt.current)
  }
  function an(e) {
    R(Lt), Xt === e && (Xt = null), R(et)
  }
  var et = m(0)
  function Nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || Ts(n))
        )
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  function Cu(e, t, n, a) {
    ;(t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var Nu = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals
      var a = wt(),
        i = pn(a)
      ;(i.payload = t),
        n != null && (i.callback = n),
        (t = mn(e, i, a)),
        t !== null && (Rt(t, e, a), hi(t, e, a))
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals
      var a = wt(),
        i = pn(a)
      ;(i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = mn(e, i, a)),
        t !== null && (Rt(t, e, a), hi(t, e, a))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var n = wt(),
        a = pn(n)
      ;(a.tag = 2),
        t != null && (a.callback = t),
        (t = mn(e, a, n)),
        t !== null && (Rt(t, e, n), hi(t, e, n))
    },
  }
  function sf(e, t, n, a, i, l, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, l, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ai(n, a) || !ai(i, l)
        : !0
    )
  }
  function of(e, t, n, a) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Nu.enqueueReplaceState(t, t.state, null)
  }
  function Wn(e, t) {
    var n = t
    if ('ref' in t) {
      n = {}
      for (var a in t) a !== 'ref' && (n[a] = t[a])
    }
    if ((e = e.defaultProps)) {
      n === t && (n = M({}, n))
      for (var i in e) n[i] === void 0 && (n[i] = e[i])
    }
    return n
  }
  var Ll =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            })
            if (!window.dispatchEvent(t)) return
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e)
            return
          }
          console.error(e)
        }
  function cf(e) {
    Ll(e)
  }
  function ff(e) {
    console.error(e)
  }
  function df(e) {
    Ll(e)
  }
  function Hl(e, t) {
    try {
      var n = e.onUncaughtError
      n(t.value, { componentStack: t.stack })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function hf(e, t, n) {
    try {
      var a = e.onCaughtError
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      })
    } catch (i) {
      setTimeout(function () {
        throw i
      })
    }
  }
  function Lu(e, t, n) {
    return (
      (n = pn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Hl(e, t)
      }),
      n
    )
  }
  function gf(e) {
    return (e = pn(e)), (e.tag = 3), e
  }
  function pf(e, t, n, a) {
    var i = n.type.getDerivedStateFromError
    if (typeof i == 'function') {
      var l = a.value
      ;(e.payload = function () {
        return i(l)
      }),
        (e.callback = function () {
          hf(t, n, a)
        })
    }
    var d = n.stateNode
    d !== null &&
      typeof d.componentDidCatch == 'function' &&
      (e.callback = function () {
        hf(t, n, a),
          typeof i != 'function' &&
            (_n === null ? (_n = new Set([this])) : _n.add(this))
        var p = a.stack
        this.componentDidCatch(a.value, { componentStack: p !== null ? p : '' })
      })
  }
  function pp(e, t, n, a, i) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = n.alternate),
        t !== null && si(t, n, i, !0),
        (n = Lt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              Xt === null ? ls() : n.alternate === null && ke === 0 && (ke = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              a === cu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  us(e, a, i)),
              !1
            )
          case 22:
            return (
              (n.flags |= 65536),
              a === cu
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  us(e, a, i)),
              !1
            )
        }
        throw Error(s(435, n.tag))
      }
      return us(e, a, i), ls(), !1
    }
    if (je)
      return (
        (t = Lt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            a !== au && ((e = Error(s(422), { cause: a })), ui(Dt(e, n))))
          : (a !== au && ((t = Error(s(423), { cause: a })), ui(Dt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (a = Dt(a, n)),
            (i = Lu(e.stateNode, a, i)),
            hu(e, i),
            ke !== 4 && (ke = 2)),
        !1
      )
    var l = Error(s(520), { cause: a })
    if (
      ((l = Dt(l, n)),
      Ri === null ? (Ri = [l]) : Ri.push(l),
      ke !== 4 && (ke = 2),
      t === null)
    )
      return !0
    ;(a = Dt(a, n)), (n = t)
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = Lu(n.stateNode, a, e)),
            hu(n, e),
            !1
          )
        case 1:
          if (
            ((t = n.type),
            (l = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (l !== null &&
                  typeof l.componentDidCatch == 'function' &&
                  (_n === null || !_n.has(l)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = gf(i)),
              pf(i, e, n, a),
              hu(n, i),
              !1
            )
      }
      n = n.return
    } while (n !== null)
    return !1
  }
  var mf = Error(s(461)),
    it = !1
  function ut(e, t, n, a) {
    t.child = e === null ? rf(t, null, n, a) : Ma(t, e.child, n, a)
  }
  function vf(e, t, n, a, i) {
    n = n.render
    var l = t.ref
    if ('ref' in a) {
      var d = {}
      for (var p in a) p !== 'ref' && (d[p] = a[p])
    } else d = a
    return (
      Jn(t),
      (a = yu(e, t, n, d, l, i)),
      (p = bu()),
      e !== null && !it
        ? (Su(e, t, i), ln(e, t, i))
        : (je && p && tu(t), (t.flags |= 1), ut(e, t, a, i), t.child)
    )
  }
  function yf(e, t, n, a, i) {
    if (e === null) {
      var l = n.type
      return typeof l == 'function' &&
        !Fr(l) &&
        l.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = l), bf(e, t, l, a, i))
        : ((e = pl(n.type, null, a, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    }
    if (((l = e.child), !Vu(e, i))) {
      var d = l.memoizedProps
      if (
        ((n = n.compare), (n = n !== null ? n : ai), n(d, a) && e.ref === t.ref)
      )
        return ln(e, t, i)
    }
    return (
      (t.flags |= 1),
      (e = Wt(l, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    )
  }
  function bf(e, t, n, a, i) {
    if (e !== null) {
      var l = e.memoizedProps
      if (ai(l, a) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = a = l), Vu(e, i)))
          (e.flags & 131072) !== 0 && (it = !0)
        else return (t.lanes = e.lanes), ln(e, t, i)
    }
    return Hu(e, t, n, a, i)
  }
  function Sf(e, t, n) {
    var a = t.pendingProps,
      i = a.children,
      l = e !== null ? e.memoizedState : null
    if (a.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((a = l !== null ? l.baseLanes | n : n), e !== null)) {
          for (i = t.child = e.child, l = 0; i !== null; )
            (l = l | i.lanes | i.childLanes), (i = i.sibling)
          t.childLanes = l & ~a
        } else (t.childLanes = 0), (t.child = null)
        return Of(e, t, a, n)
      }
      if ((n & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Sl(t, l !== null ? l.cachePool : null),
          l !== null ? yc(t, l) : pu(),
          uf(t)
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Of(e, t, l !== null ? l.baseLanes | n : n, n)
        )
    } else
      l !== null
        ? (Sl(t, l.cachePool), yc(t, l), bn(), (t.memoizedState = null))
        : (e !== null && Sl(t, null), pu(), bn())
    return ut(e, t, i, n), t.child
  }
  function Of(e, t, n, a) {
    var i = ou()
    return (
      (i = i === null ? null : { parent: Ie._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && Sl(t, null),
      pu(),
      uf(t),
      e !== null && si(e, t, a, !0),
      null
    )
  }
  function Ul(e, t) {
    var n = t.ref
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816)
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(s(284))
      ;(e === null || e.ref !== n) && (t.flags |= 4194816)
    }
  }
  function Hu(e, t, n, a, i) {
    return (
      Jn(t),
      (n = yu(e, t, n, a, void 0, i)),
      (a = bu()),
      e !== null && !it
        ? (Su(e, t, i), ln(e, t, i))
        : (je && a && tu(t), (t.flags |= 1), ut(e, t, n, i), t.child)
    )
  }
  function Tf(e, t, n, a, i, l) {
    return (
      Jn(t),
      (t.updateQueue = null),
      (n = Sc(t, a, n, i)),
      bc(e),
      (a = bu()),
      e !== null && !it
        ? (Su(e, t, l), ln(e, t, l))
        : (je && a && tu(t), (t.flags |= 1), ut(e, t, n, l), t.child)
    )
  }
  function xf(e, t, n, a, i) {
    if ((Jn(t), t.stateNode === null)) {
      var l = ba,
        d = n.contextType
      typeof d == 'object' && d !== null && (l = dt(d)),
        (l = new n(a, l)),
        (t.memoizedState =
          l.state !== null && l.state !== void 0 ? l.state : null),
        (l.updater = Nu),
        (t.stateNode = l),
        (l._reactInternals = t),
        (l = t.stateNode),
        (l.props = a),
        (l.state = t.memoizedState),
        (l.refs = {}),
        fu(t),
        (d = n.contextType),
        (l.context = typeof d == 'object' && d !== null ? dt(d) : ba),
        (l.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == 'function' && (Cu(t, n, d, a), (l.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof l.getSnapshotBeforeUpdate == 'function' ||
          (typeof l.UNSAFE_componentWillMount != 'function' &&
            typeof l.componentWillMount != 'function') ||
          ((d = l.state),
          typeof l.componentWillMount == 'function' && l.componentWillMount(),
          typeof l.UNSAFE_componentWillMount == 'function' &&
            l.UNSAFE_componentWillMount(),
          d !== l.state && Nu.enqueueReplaceState(l, l.state, null),
          pi(t, a, l, i),
          gi(),
          (l.state = t.memoizedState)),
        typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0)
    } else if (e === null) {
      l = t.stateNode
      var p = t.memoizedProps,
        S = Wn(n, p)
      l.props = S
      var H = l.context,
        J = n.contextType
      ;(d = ba), typeof J == 'object' && J !== null && (d = dt(J))
      var F = n.getDerivedStateFromProps
      ;(J =
        typeof F == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function'),
        (p = t.pendingProps !== p),
        J ||
          (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof l.componentWillReceiveProps != 'function') ||
          ((p || H !== d) && of(t, l, a, d)),
        (gn = !1)
      var B = t.memoizedState
      ;(l.state = B),
        pi(t, a, l, i),
        gi(),
        (H = t.memoizedState),
        p || B !== H || gn
          ? (typeof F == 'function' && (Cu(t, n, F, a), (H = t.memoizedState)),
            (S = gn || sf(t, n, S, a, B, H, d))
              ? (J ||
                  (typeof l.UNSAFE_componentWillMount != 'function' &&
                    typeof l.componentWillMount != 'function') ||
                  (typeof l.componentWillMount == 'function' &&
                    l.componentWillMount(),
                  typeof l.UNSAFE_componentWillMount == 'function' &&
                    l.UNSAFE_componentWillMount()),
                typeof l.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof l.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = H)),
            (l.props = a),
            (l.state = H),
            (l.context = d),
            (a = S))
          : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
            (a = !1))
    } else {
      ;(l = t.stateNode),
        du(e, t),
        (d = t.memoizedProps),
        (J = Wn(n, d)),
        (l.props = J),
        (F = t.pendingProps),
        (B = l.context),
        (H = n.contextType),
        (S = ba),
        typeof H == 'object' && H !== null && (S = dt(H)),
        (p = n.getDerivedStateFromProps),
        (H =
          typeof p == 'function' ||
          typeof l.getSnapshotBeforeUpdate == 'function') ||
          (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof l.componentWillReceiveProps != 'function') ||
          ((d !== F || B !== S) && of(t, l, a, S)),
        (gn = !1),
        (B = t.memoizedState),
        (l.state = B),
        pi(t, a, l, i),
        gi()
      var Y = t.memoizedState
      d !== F ||
      B !== Y ||
      gn ||
      (e !== null && e.dependencies !== null && yl(e.dependencies))
        ? (typeof p == 'function' && (Cu(t, n, p, a), (Y = t.memoizedState)),
          (J =
            gn ||
            sf(t, n, J, a, B, Y, S) ||
            (e !== null && e.dependencies !== null && yl(e.dependencies)))
            ? (H ||
                (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                  typeof l.componentWillUpdate != 'function') ||
                (typeof l.componentWillUpdate == 'function' &&
                  l.componentWillUpdate(a, Y, S),
                typeof l.UNSAFE_componentWillUpdate == 'function' &&
                  l.UNSAFE_componentWillUpdate(a, Y, S)),
              typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof l.componentDidUpdate != 'function' ||
                (d === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != 'function' ||
                (d === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = Y)),
          (l.props = a),
          (l.state = Y),
          (l.context = S),
          (a = J))
        : (typeof l.componentDidUpdate != 'function' ||
            (d === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != 'function' ||
            (d === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1))
    }
    return (
      (l = a),
      Ul(e, t),
      (a = (t.flags & 128) !== 0),
      l || a
        ? ((l = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != 'function'
              ? null
              : l.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ma(t, e.child, null, i)),
              (t.child = Ma(t, null, n, i)))
            : ut(e, t, n, i),
          (t.memoizedState = l.state),
          (e = t.child))
        : (e = ln(e, t, i)),
      e
    )
  }
  function Ef(e, t, n, a) {
    return ri(), (t.flags |= 256), ut(e, t, n, a), t.child
  }
  var Uu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  }
  function qu(e) {
    return { baseLanes: e, cachePool: cc() }
  }
  function Bu(e, t, n) {
    return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= Ht), e
  }
  function _f(e, t, n) {
    var a = t.pendingProps,
      i = !1,
      l = (t.flags & 128) !== 0,
      d
    if (
      ((d = l) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0),
      d && ((i = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (je) {
        if ((i ? yn(t) : bn(), je)) {
          var p = Qe,
            S
          if ((S = p)) {
            e: {
              for (S = p, p = Gt; S.nodeType !== 8; ) {
                if (!p) {
                  p = null
                  break e
                }
                if (((S = Yt(S.nextSibling)), S === null)) {
                  p = null
                  break e
                }
              }
              p = S
            }
            p !== null
              ? ((t.memoizedState = {
                  dehydrated: p,
                  treeContext: Vn !== null ? { id: Ft, overflow: It } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (S = xt(18, null, null, 0)),
                (S.stateNode = p),
                (S.return = t),
                (t.child = S),
                (gt = t),
                (Qe = null),
                (S = !0))
              : (S = !1)
          }
          S || Zn(t)
        }
        if (
          ((p = t.memoizedState),
          p !== null && ((p = p.dehydrated), p !== null))
        )
          return Ts(p) ? (t.lanes = 32) : (t.lanes = 536870912), null
        an(t)
      }
      return (
        (p = a.children),
        (a = a.fallback),
        i
          ? (bn(),
            (i = t.mode),
            (p = ql({ mode: 'hidden', children: p }, i)),
            (a = Xn(a, i, n, null)),
            (p.return = t),
            (a.return = t),
            (p.sibling = a),
            (t.child = p),
            (i = t.child),
            (i.memoizedState = qu(n)),
            (i.childLanes = Bu(e, d, n)),
            (t.memoizedState = Uu),
            a)
          : (yn(t), Yu(t, p))
      )
    }
    if (
      ((S = e.memoizedState), S !== null && ((p = S.dehydrated), p !== null))
    ) {
      if (l)
        t.flags & 256
          ? (yn(t), (t.flags &= -257), (t = Gu(e, t, n)))
          : t.memoizedState !== null
          ? (bn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (bn(),
            (i = a.fallback),
            (p = t.mode),
            (a = ql({ mode: 'visible', children: a.children }, p)),
            (i = Xn(i, p, n, null)),
            (i.flags |= 2),
            (a.return = t),
            (i.return = t),
            (a.sibling = i),
            (t.child = a),
            Ma(t, e.child, null, n),
            (a = t.child),
            (a.memoizedState = qu(n)),
            (a.childLanes = Bu(e, d, n)),
            (t.memoizedState = Uu),
            (t = i))
      else if ((yn(t), Ts(p))) {
        if (((d = p.nextSibling && p.nextSibling.dataset), d)) var H = d.dgst
        ;(d = H),
          (a = Error(s(419))),
          (a.stack = ''),
          (a.digest = d),
          ui({ value: a, source: null, stack: null }),
          (t = Gu(e, t, n))
      } else if (
        (it || si(e, t, n, !1), (d = (n & e.childLanes) !== 0), it || d)
      ) {
        if (
          ((d = Be),
          d !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : xr(a)),
            (a = (a & (d.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), ya(e, a), Rt(d, e, a), mf)
        p.data === '$?' || ls(), (t = Gu(e, t, n))
      } else
        p.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Qe = Yt(p.nextSibling)),
            (gt = t),
            (je = !0),
            (kn = null),
            (Gt = !1),
            e !== null &&
              ((Ct[Nt++] = Ft),
              (Ct[Nt++] = It),
              (Ct[Nt++] = Vn),
              (Ft = e.id),
              (It = e.overflow),
              (Vn = t)),
            (t = Yu(t, a.children)),
            (t.flags |= 4096))
      return t
    }
    return i
      ? (bn(),
        (i = a.fallback),
        (p = t.mode),
        (S = e.child),
        (H = S.sibling),
        (a = Wt(S, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        H !== null ? (i = Wt(H, i)) : ((i = Xn(i, p, n, null)), (i.flags |= 2)),
        (i.return = t),
        (a.return = t),
        (a.sibling = i),
        (t.child = a),
        (a = i),
        (i = t.child),
        (p = e.child.memoizedState),
        p === null
          ? (p = qu(n))
          : ((S = p.cachePool),
            S !== null
              ? ((H = Ie._currentValue),
                (S = S.parent !== H ? { parent: H, pool: H } : S))
              : (S = cc()),
            (p = { baseLanes: p.baseLanes | n, cachePool: S })),
        (i.memoizedState = p),
        (i.childLanes = Bu(e, d, n)),
        (t.memoizedState = Uu),
        a)
      : (yn(t),
        (n = e.child),
        (e = n.sibling),
        (n = Wt(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n)
  }
  function Yu(e, t) {
    return (
      (t = ql({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    )
  }
  function ql(e, t) {
    return (
      (e = xt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    )
  }
  function Gu(e, t, n) {
    return (
      Ma(t, e.child, null, n),
      (e = Yu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function Af(e, t, n) {
    e.lanes |= t
    var a = e.alternate
    a !== null && (a.lanes |= t), lu(e.return, t, n)
  }
  function Xu(e, t, n, a, i) {
    var l = e.memoizedState
    l === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: i,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = a),
        (l.tail = n),
        (l.tailMode = i))
  }
  function wf(e, t, n) {
    var a = t.pendingProps,
      i = a.revealOrder,
      l = a.tail
    if ((ut(e, t, a.children, n), (a = et.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Af(e, n, t)
          else if (e.tag === 19) Af(e, n, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      a &= 1
    }
    switch ((N(et, a), i)) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Nl(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Xu(t, !1, i, n, l)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Nl(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Xu(t, !0, n, null, l)
        break
      case 'together':
        Xu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
    return t.child
  }
  function ln(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (En |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((si(e, t, n, !1), (n & t.childLanes) === 0)) return null
      } else return null
    if (e !== null && t.child !== e.child) throw Error(s(153))
    if (t.child !== null) {
      for (
        e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t)
      n.sibling = null
    }
    return t.child
  }
  function Vu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && yl(e)))
  }
  function mp(e, t, n) {
    switch (t.tag) {
      case 3:
        ue(t, t.stateNode.containerInfo), hn(t, Ie, e.memoizedState.cache), ri()
        break
      case 27:
      case 5:
        Te(t)
        break
      case 4:
        ue(t, t.stateNode.containerInfo)
        break
      case 10:
        hn(t, t.type, t.memoizedProps.value)
        break
      case 13:
        var a = t.memoizedState
        if (a !== null)
          return a.dehydrated !== null
            ? (yn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? _f(e, t, n)
            : (yn(t), (e = ln(e, t, n)), e !== null ? e.sibling : null)
        yn(t)
        break
      case 19:
        var i = (e.flags & 128) !== 0
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (si(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (a) return wf(e, t, n)
          t.flags |= 128
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          N(et, et.current),
          a)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), Sf(e, t, n)
      case 24:
        hn(t, Ie, e.memoizedState.cache)
    }
    return ln(e, t, n)
  }
  function Rf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) it = !0
      else {
        if (!Vu(e, n) && (t.flags & 128) === 0) return (it = !1), mp(e, t, n)
        it = (e.flags & 131072) !== 0
      }
    else (it = !1), je && (t.flags & 1048576) !== 0 && ac(t, vl, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps
          var a = t.elementType,
            i = a._init
          if (((a = i(a._payload)), (t.type = a), typeof a == 'function'))
            Fr(a)
              ? ((e = Wn(a, e)), (t.tag = 1), (t = xf(null, t, a, e, n)))
              : ((t.tag = 0), (t = Hu(null, t, a, e, n)))
          else {
            if (a != null) {
              if (((i = a.$$typeof), i === ge)) {
                ;(t.tag = 11), (t = vf(null, t, a, e, n))
                break e
              } else if (i === j) {
                ;(t.tag = 14), (t = yf(null, t, a, e, n))
                break e
              }
            }
            throw ((t = U(a) || a), Error(s(306, t, '')))
          }
        }
        return t
      case 0:
        return Hu(e, t, t.type, t.pendingProps, n)
      case 1:
        return (a = t.type), (i = Wn(a, t.pendingProps)), xf(e, t, a, i, n)
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387))
          a = t.pendingProps
          var l = t.memoizedState
          ;(i = l.element), du(e, t), pi(t, a, null, n)
          var d = t.memoizedState
          if (
            ((a = d.cache),
            hn(t, Ie, a),
            a !== l.cache && ru(t, [Ie], n, !0),
            gi(),
            (a = d.element),
            l.isDehydrated)
          )
            if (
              ((l = { element: a, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              t = Ef(e, t, a, n)
              break e
            } else if (a !== i) {
              ;(i = Dt(Error(s(424)), t)), ui(i), (t = Ef(e, t, a, n))
              break e
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body
                  break
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e
              }
              for (
                Qe = Yt(e.firstChild),
                  gt = t,
                  je = !0,
                  kn = null,
                  Gt = !0,
                  n = rf(t, null, a, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
            }
          else {
            if ((ri(), a === i)) {
              t = ln(e, t, n)
              break e
            }
            ut(e, t, a, n)
          }
          t = t.child
        }
        return t
      case 26:
        return (
          Ul(e, t),
          e === null
            ? (n = jd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : je ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Fl(Z.current).createElement(n)),
                (a[ft] = t),
                (a[mt] = e),
                ot(a, n, e),
                at(a),
                (t.stateNode = a))
            : (t.memoizedState = jd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        )
      case 27:
        return (
          Te(t),
          e === null &&
            je &&
            ((a = t.stateNode = Md(t.type, t.pendingProps, Z.current)),
            (gt = t),
            (Gt = !0),
            (i = Qe),
            Rn(t.type) ? ((xs = i), (Qe = Yt(a.firstChild))) : (Qe = i)),
          ut(e, t, t.pendingProps.children, n),
          Ul(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
      case 5:
        return (
          e === null &&
            je &&
            ((i = a = Qe) &&
              ((a = Qp(a, t.type, t.pendingProps, Gt)),
              a !== null
                ? ((t.stateNode = a),
                  (gt = t),
                  (Qe = Yt(a.firstChild)),
                  (Gt = !1),
                  (i = !0))
                : (i = !1)),
            i || Zn(t)),
          Te(t),
          (i = t.type),
          (l = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (a = l.children),
          bs(i, l) ? (a = null) : d !== null && bs(i, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = yu(e, t, sp, null, null, n)), (Ui._currentValue = i)),
          Ul(e, t),
          ut(e, t, a, n),
          t.child
        )
      case 6:
        return (
          e === null &&
            je &&
            ((e = n = Qe) &&
              ((n = kp(n, t.pendingProps, Gt)),
              n !== null
                ? ((t.stateNode = n), (gt = t), (Qe = null), (e = !0))
                : (e = !1)),
            e || Zn(t)),
          null
        )
      case 13:
        return _f(e, t, n)
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ma(t, null, a, n)) : ut(e, t, a, n),
          t.child
        )
      case 11:
        return vf(e, t, t.type, t.pendingProps, n)
      case 7:
        return ut(e, t, t.pendingProps, n), t.child
      case 8:
        return ut(e, t, t.pendingProps.children, n), t.child
      case 12:
        return ut(e, t, t.pendingProps.children, n), t.child
      case 10:
        return (
          (a = t.pendingProps),
          hn(t, t.type, a.value),
          ut(e, t, a.children, n),
          t.child
        )
      case 9:
        return (
          (i = t.type._context),
          (a = t.pendingProps.children),
          Jn(t),
          (i = dt(i)),
          (a = a(i)),
          (t.flags |= 1),
          ut(e, t, a, n),
          t.child
        )
      case 14:
        return yf(e, t, t.type, t.pendingProps, n)
      case 15:
        return bf(e, t, t.type, t.pendingProps, n)
      case 19:
        return wf(e, t, n)
      case 31:
        return (
          (a = t.pendingProps),
          (n = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((n = ql(a, n)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n))
            : ((n = Wt(e.child, a)),
              (n.ref = t.ref),
              (t.child = n),
              (n.return = t),
              (t = n)),
          t
        )
      case 22:
        return Sf(e, t, n)
      case 24:
        return (
          Jn(t),
          (a = dt(Ie)),
          e === null
            ? ((i = ou()),
              i === null &&
                ((i = Be),
                (l = uu()),
                (i.pooledCache = l),
                l.refCount++,
                l !== null && (i.pooledCacheLanes |= n),
                (i = l)),
              (t.memoizedState = { parent: a, cache: i }),
              fu(t),
              hn(t, Ie, i))
            : ((e.lanes & n) !== 0 && (du(e, t), pi(t, null, null, n), gi()),
              (i = e.memoizedState),
              (l = t.memoizedState),
              i.parent !== a
                ? ((i = { parent: a, cache: a }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  hn(t, Ie, a))
                : ((a = l.cache),
                  hn(t, Ie, a),
                  a !== i.cache && ru(t, [Ie], n, !0))),
          ut(e, t, t.pendingProps.children, n),
          t.child
        )
      case 29:
        throw t.pendingProps
    }
    throw Error(s(156, t.tag))
  }
  function rn(e) {
    e.flags |= 4
  }
  function Mf(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217
    else if (((e.flags |= 16777216), !Ud(t))) {
      if (
        ((t = Lt.current),
        t !== null &&
          ((we & 4194048) === we
            ? Xt !== null
            : ((we & 62914560) !== we && (we & 536870912) === 0) || t !== Xt))
      )
        throw ((di = cu), fc)
      e.flags |= 8192
    }
  }
  function Bl(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? lo() : 536870912), (e.lanes |= t), (Ca |= t))
  }
  function Ti(e, t) {
    if (!je)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling)
          n === null ? (e.tail = null) : (n.sibling = null)
          break
        case 'collapsed':
          n = e.tail
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling)
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null)
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags & 65011712),
          (a |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling)
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (a |= i.subtreeFlags),
          (a |= i.flags),
          (i.return = e),
          (i = i.sibling)
    return (e.subtreeFlags |= a), (e.childLanes = n), t
  }
  function vp(e, t, n) {
    var a = t.pendingProps
    switch ((nu(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null
      case 1:
        return Ge(t), null
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          tn(Ie),
          ye(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (li(t)
              ? rn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rc())),
          Ge(t),
          null
        )
      case 26:
        return (
          (n = t.memoizedState),
          e === null
            ? (rn(t),
              n !== null ? (Ge(t), Mf(t, n)) : (Ge(t), (t.flags &= -16777217)))
            : n
            ? n !== e.memoizedState
              ? (rn(t), Ge(t), Mf(t, n))
              : (Ge(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && rn(t), Ge(t), (t.flags &= -16777217)),
          null
        )
      case 27:
        Re(t), (n = Z.current)
        var i = t.type
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && rn(t)
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166))
            return Ge(t), null
          }
          ;(e = G.current),
            li(t) ? ic(t) : ((e = Md(i, a, n)), (t.stateNode = e), rn(t))
        }
        return Ge(t), null
      case 5:
        if ((Re(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && rn(t)
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166))
            return Ge(t), null
          }
          if (((e = G.current), li(t))) ic(t)
          else {
            switch (((i = Fl(Z.current)), e)) {
              case 1:
                e = i.createElementNS('http://www.w3.org/2000/svg', n)
                break
              case 2:
                e = i.createElementNS('http://www.w3.org/1998/Math/MathML', n)
                break
              default:
                switch (n) {
                  case 'svg':
                    e = i.createElementNS('http://www.w3.org/2000/svg', n)
                    break
                  case 'math':
                    e = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      n
                    )
                    break
                  case 'script':
                    ;(e = i.createElement('div')),
                      (e.innerHTML = '<script></script>'),
                      (e = e.removeChild(e.firstChild))
                    break
                  case 'select':
                    ;(e =
                      typeof a.is == 'string'
                        ? i.createElement('select', { is: a.is })
                        : i.createElement('select')),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size)
                    break
                  default:
                    e =
                      typeof a.is == 'string'
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n)
                }
            }
            ;(e[ft] = t), (e[mt] = a)
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode)
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ;(i.child.return = i), (i = i.child)
                continue
              }
              if (i === t) break e
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e
                i = i.return
              }
              ;(i.sibling.return = i.return), (i = i.sibling)
            }
            t.stateNode = e
            e: switch ((ot(e, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!a.autoFocus
                break e
              case 'img':
                e = !0
                break e
              default:
                e = !1
            }
            e && rn(t)
          }
        }
        return Ge(t), (t.flags &= -16777217), null
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && rn(t)
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(s(166))
          if (((e = Z.current), li(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (i = gt),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps
              }
            ;(e[ft] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Td(e.nodeValue, n)
              )),
              e || Zn(t)
          } else (e = Fl(e).createTextNode(a)), (e[ft] = t), (t.stateNode = e)
        }
        return Ge(t), null
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = li(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318))
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(s(317))
              i[ft] = t
            } else
              ri(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4)
            Ge(t), (i = !1)
          } else
            (i = rc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0)
          if (!i) return t.flags & 256 ? (an(t), t) : (an(t), null)
        }
        if ((an(t), (t.flags & 128) !== 0)) return (t.lanes = n), t
        if (
          ((n = a !== null), (e = e !== null && e.memoizedState !== null), n)
        ) {
          ;(a = t.child),
            (i = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (i = a.alternate.memoizedState.cachePool.pool)
          var l = null
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (l = a.memoizedState.cachePool.pool),
            l !== i && (a.flags |= 2048)
        }
        return (
          n !== e && n && (t.child.flags |= 8192),
          Bl(t, t.updateQueue),
          Ge(t),
          null
        )
      case 4:
        return ye(), e === null && gs(t.stateNode.containerInfo), Ge(t), null
      case 10:
        return tn(t.type), Ge(t), null
      case 19:
        if ((R(et), (i = t.memoizedState), i === null)) return Ge(t), null
        if (((a = (t.flags & 128) !== 0), (l = i.rendering), l === null))
          if (a) Ti(i, !1)
          else {
            if (ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((l = Nl(e)), l !== null)) {
                  for (
                    t.flags |= 128,
                      Ti(i, !1),
                      e = l.updateQueue,
                      t.updateQueue = e,
                      Bl(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    nc(n, e), (n = n.sibling)
                  return N(et, (et.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            i.tail !== null &&
              pe() > Xl &&
              ((t.flags |= 128), (a = !0), Ti(i, !1), (t.lanes = 4194304))
          }
        else {
          if (!a)
            if (((e = Nl(l)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Bl(t, e),
                Ti(i, !0),
                i.tail === null &&
                  i.tailMode === 'hidden' &&
                  !l.alternate &&
                  !je)
              )
                return Ge(t), null
            } else
              2 * pe() - i.renderingStartTime > Xl &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), Ti(i, !1), (t.lanes = 4194304))
          i.isBackwards
            ? ((l.sibling = t.child), (t.child = l))
            : ((e = i.last),
              e !== null ? (e.sibling = l) : (t.child = l),
              (i.last = l))
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = pe()),
            (t.sibling = null),
            (e = et.current),
            N(et, a ? (e & 1) | 2 : e & 1),
            t)
          : (Ge(t), null)
      case 22:
      case 23:
        return (
          an(t),
          mu(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ge(t),
          (n = t.updateQueue),
          n !== null && Bl(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && R(Pn),
          null
        )
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          tn(Ie),
          Ge(t),
          null
        )
      case 25:
        return null
      case 30:
        return null
    }
    throw Error(s(156, t.tag))
  }
  function yp(e, t) {
    switch ((nu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          tn(Ie),
          ye(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        )
      case 26:
      case 27:
      case 5:
        return Re(t), null
      case 13:
        if (
          (an(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340))
          ri()
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 19:
        return R(et), null
      case 4:
        return ye(), null
      case 10:
        return tn(t.type), null
      case 22:
      case 23:
        return (
          an(t),
          mu(),
          e !== null && R(Pn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 24:
        return tn(Ie), null
      case 25:
        return null
      default:
        return null
    }
  }
  function zf(e, t) {
    switch ((nu(t), t.tag)) {
      case 3:
        tn(Ie), ye()
        break
      case 26:
      case 27:
      case 5:
        Re(t)
        break
      case 4:
        ye()
        break
      case 13:
        an(t)
        break
      case 19:
        R(et)
        break
      case 10:
        tn(t.type)
        break
      case 22:
      case 23:
        an(t), mu(), e !== null && R(Pn)
        break
      case 24:
        tn(Ie)
    }
  }
  function xi(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null
      if (a !== null) {
        var i = a.next
        n = i
        do {
          if ((n.tag & e) === e) {
            a = void 0
            var l = n.create,
              d = n.inst
            ;(a = l()), (d.destroy = a)
          }
          n = n.next
        } while (n !== i)
      }
    } catch (p) {
      qe(t, t.return, p)
    }
  }
  function Sn(e, t, n) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null
      if (i !== null) {
        var l = i.next
        a = l
        do {
          if ((a.tag & e) === e) {
            var d = a.inst,
              p = d.destroy
            if (p !== void 0) {
              ;(d.destroy = void 0), (i = t)
              var S = n,
                H = p
              try {
                H()
              } catch (J) {
                qe(i, S, J)
              }
            }
          }
          a = a.next
        } while (a !== l)
      }
    } catch (J) {
      qe(t, t.return, J)
    }
  }
  function Df(e) {
    var t = e.updateQueue
    if (t !== null) {
      var n = e.stateNode
      try {
        vc(t, n)
      } catch (a) {
        qe(e, e.return, a)
      }
    }
  }
  function jf(e, t, n) {
    ;(n.props = Wn(e.type, e.memoizedProps)), (n.state = e.memoizedState)
    try {
      n.componentWillUnmount()
    } catch (a) {
      qe(e, t, a)
    }
  }
  function Ei(e, t) {
    try {
      var n = e.ref
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode
            break
          case 30:
            a = e.stateNode
            break
          default:
            a = e.stateNode
        }
        typeof n == 'function' ? (e.refCleanup = n(a)) : (n.current = a)
      }
    } catch (i) {
      qe(e, t, i)
    }
  }
  function Vt(e, t) {
    var n = e.ref,
      a = e.refCleanup
    if (n !== null)
      if (typeof a == 'function')
        try {
          a()
        } catch (i) {
          qe(e, t, i)
        } finally {
          ;(e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null)
        }
      else if (typeof n == 'function')
        try {
          n(null)
        } catch (i) {
          qe(e, t, i)
        }
      else n.current = null
  }
  function Cf(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && a.focus()
          break e
        case 'img':
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet)
      }
    } catch (i) {
      qe(e, e.return, i)
    }
  }
  function Qu(e, t, n) {
    try {
      var a = e.stateNode
      Bp(a, e.type, n, t), (a[mt] = t)
    } catch (i) {
      qe(e, e.return, i)
    }
  }
  function Nf(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Rn(e.type)) ||
      e.tag === 4
    )
  }
  function ku(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nf(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Rn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Zu(e, t, n) {
    var a = e.tag
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
              ? n.ownerDocument.body
              : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Wl))
    else if (
      a !== 4 &&
      (a === 27 && Rn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Zu(e, t, n), e = e.sibling; e !== null; )
        Zu(e, t, n), (e = e.sibling)
  }
  function Yl(e, t, n) {
    var a = e.tag
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (
      a !== 4 &&
      (a === 27 && Rn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Yl(e, t, n), e = e.sibling; e !== null; )
        Yl(e, t, n), (e = e.sibling)
  }
  function Lf(e) {
    var t = e.stateNode,
      n = e.memoizedProps
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0])
      ot(t, a, n), (t[ft] = e), (t[mt] = n)
    } catch (l) {
      qe(e, e.return, l)
    }
  }
  var un = !1,
    Pe = !1,
    Ku = !1,
    Hf = typeof WeakSet == 'function' ? WeakSet : Set,
    lt = null
  function bp(e, t) {
    if (((e = e.containerInfo), (vs = ir), (e = Zo(e)), kr(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window
          var a = n.getSelection && n.getSelection()
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode
            var i = a.anchorOffset,
              l = a.focusNode
            a = a.focusOffset
            try {
              n.nodeType, l.nodeType
            } catch {
              n = null
              break e
            }
            var d = 0,
              p = -1,
              S = -1,
              H = 0,
              J = 0,
              F = e,
              B = null
            t: for (;;) {
              for (
                var Y;
                F !== n || (i !== 0 && F.nodeType !== 3) || (p = d + i),
                  F !== l || (a !== 0 && F.nodeType !== 3) || (S = d + a),
                  F.nodeType === 3 && (d += F.nodeValue.length),
                  (Y = F.firstChild) !== null;

              )
                (B = F), (F = Y)
              for (;;) {
                if (F === e) break t
                if (
                  (B === n && ++H === i && (p = d),
                  B === l && ++J === a && (S = d),
                  (Y = F.nextSibling) !== null)
                )
                  break
                ;(F = B), (B = F.parentNode)
              }
              F = Y
            }
            n = p === -1 || S === -1 ? null : { start: p, end: S }
          } else n = null
        }
      n = n || { start: 0, end: 0 }
    } else n = null
    for (
      ys = { focusedElem: e, selectionRange: n }, ir = !1, lt = t;
      lt !== null;

    )
      if (
        ((t = lt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (lt = e)
      else
        for (; lt !== null; ) {
          switch (((t = lt), (l = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if ((e & 1024) !== 0 && l !== null) {
                ;(e = void 0),
                  (n = t),
                  (i = l.memoizedProps),
                  (l = l.memoizedState),
                  (a = n.stateNode)
                try {
                  var me = Wn(n.type, i, n.elementType === n.type)
                  ;(e = a.getSnapshotBeforeUpdate(me, l)),
                    (a.__reactInternalSnapshotBeforeUpdate = e)
                } catch (de) {
                  qe(n, n.return, de)
                }
              }
              break
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Os(e)
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Os(e)
                      break
                    default:
                      e.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if ((e & 1024) !== 0) throw Error(s(163))
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (lt = e)
            break
          }
          lt = t.return
        }
  }
  function Uf(e, t, n) {
    var a = n.flags
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        On(e, n), a & 4 && xi(5, n)
        break
      case 1:
        if ((On(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount()
            } catch (d) {
              qe(n, n.return, d)
            }
          else {
            var i = Wn(n.type, t.memoizedProps)
            t = t.memoizedState
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (d) {
              qe(n, n.return, d)
            }
          }
        a & 64 && Df(n), a & 512 && Ei(n, n.return)
        break
      case 3:
        if ((On(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode
                break
              case 1:
                t = n.child.stateNode
            }
          try {
            vc(e, t)
          } catch (d) {
            qe(n, n.return, d)
          }
        }
        break
      case 27:
        t === null && a & 4 && Lf(n)
      case 26:
      case 5:
        On(e, n), t === null && a & 4 && Cf(n), a & 512 && Ei(n, n.return)
        break
      case 12:
        On(e, n)
        break
      case 13:
        On(e, n),
          a & 4 && Yf(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Rp.bind(null, n)), Zp(e, n))))
        break
      case 22:
        if (((a = n.memoizedState !== null || un), !a)) {
          ;(t = (t !== null && t.memoizedState !== null) || Pe), (i = un)
          var l = Pe
          ;(un = a),
            (Pe = t) && !l ? Tn(e, n, (n.subtreeFlags & 8772) !== 0) : On(e, n),
            (un = i),
            (Pe = l)
        }
        break
      case 30:
        break
      default:
        On(e, n)
    }
  }
  function qf(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), qf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ar(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  var Ye = null,
    bt = !1
  function sn(e, t, n) {
    for (n = n.child; n !== null; ) Bf(e, t, n), (n = n.sibling)
  }
  function Bf(e, t, n) {
    if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
      try {
        Ve.onCommitFiberUnmount(Hn, n)
      } catch {}
    switch (n.tag) {
      case 26:
        Pe || Vt(n, t),
          sn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n))
        break
      case 27:
        Pe || Vt(n, t)
        var a = Ye,
          i = bt
        Rn(n.type) && ((Ye = n.stateNode), (bt = !1)),
          sn(e, t, n),
          Ci(n.stateNode),
          (Ye = a),
          (bt = i)
        break
      case 5:
        Pe || Vt(n, t)
      case 6:
        if (
          ((a = Ye),
          (i = bt),
          (Ye = null),
          sn(e, t, n),
          (Ye = a),
          (bt = i),
          Ye !== null)
        )
          if (bt)
            try {
              ;(Ye.nodeType === 9
                ? Ye.body
                : Ye.nodeName === 'HTML'
                ? Ye.ownerDocument.body
                : Ye
              ).removeChild(n.stateNode)
            } catch (l) {
              qe(n, t, l)
            }
          else
            try {
              Ye.removeChild(n.stateNode)
            } catch (l) {
              qe(n, t, l)
            }
        break
      case 18:
        Ye !== null &&
          (bt
            ? ((e = Ye),
              wd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                  ? e.ownerDocument.body
                  : e,
                n.stateNode
              ),
              Gi(e))
            : wd(Ye, n.stateNode))
        break
      case 4:
        ;(a = Ye),
          (i = bt),
          (Ye = n.stateNode.containerInfo),
          (bt = !0),
          sn(e, t, n),
          (Ye = a),
          (bt = i)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        Pe || Sn(2, n, t), Pe || Sn(4, n, t), sn(e, t, n)
        break
      case 1:
        Pe ||
          (Vt(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == 'function' && jf(n, t, a)),
          sn(e, t, n)
        break
      case 21:
        sn(e, t, n)
        break
      case 22:
        ;(Pe = (a = Pe) || n.memoizedState !== null), sn(e, t, n), (Pe = a)
        break
      default:
        sn(e, t, n)
    }
  }
  function Yf(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Gi(e)
      } catch (n) {
        qe(t, t.return, n)
      }
  }
  function Sp(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode
        return t === null && (t = e.stateNode = new Hf()), t
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Hf()),
          t
        )
      default:
        throw Error(s(435, e.tag))
    }
  }
  function Ju(e, t) {
    var n = Sp(e)
    t.forEach(function (a) {
      var i = Mp.bind(null, e, a)
      n.has(a) || (n.add(a), a.then(i, i))
    })
  }
  function Et(e, t) {
    var n = t.deletions
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a],
          l = e,
          d = t,
          p = d
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Rn(p.type)) {
                ;(Ye = p.stateNode), (bt = !1)
                break e
              }
              break
            case 5:
              ;(Ye = p.stateNode), (bt = !1)
              break e
            case 3:
            case 4:
              ;(Ye = p.stateNode.containerInfo), (bt = !0)
              break e
          }
          p = p.return
        }
        if (Ye === null) throw Error(s(160))
        Bf(l, d, i),
          (Ye = null),
          (bt = !1),
          (l = i.alternate),
          l !== null && (l.return = null),
          (i.return = null)
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Gf(t, e), (t = t.sibling)
  }
  var Bt = null
  function Gf(e, t) {
    var n = e.alternate,
      a = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Et(t, e),
          _t(e),
          a & 4 && (Sn(3, e, e.return), xi(3, e), Sn(5, e, e.return))
        break
      case 1:
        Et(t, e),
          _t(e),
          a & 512 && (Pe || n === null || Vt(n, n.return)),
          a & 64 &&
            un &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a)))))
        break
      case 26:
        var i = Bt
        if (
          (Et(t, e),
          _t(e),
          a & 512 && (Pe || n === null || Vt(n, n.return)),
          a & 4)
        ) {
          var l = n !== null ? n.memoizedState : null
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ;(a = e.type),
                    (n = e.memoizedProps),
                    (i = i.ownerDocument || i)
                  t: switch (a) {
                    case 'title':
                      ;(l = i.getElementsByTagName('title')[0]),
                        (!l ||
                          l[Ja] ||
                          l[ft] ||
                          l.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          l.hasAttribute('itemprop')) &&
                          ((l = i.createElement(a)),
                          i.head.insertBefore(
                            l,
                            i.querySelector('head > title')
                          )),
                        ot(l, a, n),
                        (l[ft] = e),
                        at(l),
                        (a = l)
                      break e
                    case 'link':
                      var d = Ld('link', 'href', i).get(a + (n.href || ''))
                      if (d) {
                        for (var p = 0; p < d.length; p++)
                          if (
                            ((l = d[p]),
                            l.getAttribute('href') ===
                              (n.href == null || n.href === ''
                                ? null
                                : n.href) &&
                              l.getAttribute('rel') ===
                                (n.rel == null ? null : n.rel) &&
                              l.getAttribute('title') ===
                                (n.title == null ? null : n.title) &&
                              l.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(p, 1)
                            break t
                          }
                      }
                      ;(l = i.createElement(a)),
                        ot(l, a, n),
                        i.head.appendChild(l)
                      break
                    case 'meta':
                      if (
                        (d = Ld('meta', 'content', i).get(
                          a + (n.content || '')
                        ))
                      ) {
                        for (p = 0; p < d.length; p++)
                          if (
                            ((l = d[p]),
                            l.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              l.getAttribute('name') ===
                                (n.name == null ? null : n.name) &&
                              l.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              l.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              l.getAttribute('charset') ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(p, 1)
                            break t
                          }
                      }
                      ;(l = i.createElement(a)),
                        ot(l, a, n),
                        i.head.appendChild(l)
                      break
                    default:
                      throw Error(s(468, a))
                  }
                  ;(l[ft] = e), at(l), (a = l)
                }
                e.stateNode = a
              } else Hd(i, e.type, e.stateNode)
            else e.stateNode = Nd(i, a, e.memoizedProps)
          else
            l !== a
              ? (l === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : l.count--,
                a === null
                  ? Hd(i, e.type, e.stateNode)
                  : Nd(i, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Qu(e, e.memoizedProps, n.memoizedProps)
        }
        break
      case 27:
        Et(t, e),
          _t(e),
          a & 512 && (Pe || n === null || Vt(n, n.return)),
          n !== null && a & 4 && Qu(e, e.memoizedProps, n.memoizedProps)
        break
      case 5:
        if (
          (Et(t, e),
          _t(e),
          a & 512 && (Pe || n === null || Vt(n, n.return)),
          e.flags & 32)
        ) {
          i = e.stateNode
          try {
            fa(i, '')
          } catch (Y) {
            qe(e, e.return, Y)
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Qu(e, i, n !== null ? n.memoizedProps : i)),
          a & 1024 && (Ku = !0)
        break
      case 6:
        if ((Et(t, e), _t(e), a & 4)) {
          if (e.stateNode === null) throw Error(s(162))
          ;(a = e.memoizedProps), (n = e.stateNode)
          try {
            n.nodeValue = a
          } catch (Y) {
            qe(e, e.return, Y)
          }
        }
        break
      case 3:
        if (
          ((tr = null),
          (i = Bt),
          (Bt = Il(t.containerInfo)),
          Et(t, e),
          (Bt = i),
          _t(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Gi(t.containerInfo)
          } catch (Y) {
            qe(e, e.return, Y)
          }
        Ku && ((Ku = !1), Xf(e))
        break
      case 4:
        ;(a = Bt),
          (Bt = Il(e.stateNode.containerInfo)),
          Et(t, e),
          _t(e),
          (Bt = a)
        break
      case 12:
        Et(t, e), _t(e)
        break
      case 13:
        Et(t, e),
          _t(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (es = pe()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ju(e, a)))
        break
      case 22:
        i = e.memoizedState !== null
        var S = n !== null && n.memoizedState !== null,
          H = un,
          J = Pe
        if (
          ((un = H || i),
          (Pe = J || S),
          Et(t, e),
          (Pe = J),
          (un = H),
          _t(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || S || un || Pe || Fn(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t
                try {
                  if (((l = S.stateNode), i))
                    (d = l.style),
                      typeof d.setProperty == 'function'
                        ? d.setProperty('display', 'none', 'important')
                        : (d.display = 'none')
                  else {
                    p = S.stateNode
                    var F = S.memoizedProps.style,
                      B =
                        F != null && F.hasOwnProperty('display')
                          ? F.display
                          : null
                    p.style.display =
                      B == null || typeof B == 'boolean' ? '' : ('' + B).trim()
                  }
                } catch (Y) {
                  qe(S, S.return, Y)
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t
                try {
                  S.stateNode.nodeValue = i ? '' : S.memoizedProps
                } catch (Y) {
                  qe(S, S.return, Y)
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break e
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e
              n === t && (n = null), (t = t.return)
            }
            n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling)
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Ju(e, n))))
        break
      case 19:
        Et(t, e),
          _t(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ju(e, a)))
        break
      case 30:
        break
      case 21:
        break
      default:
        Et(t, e), _t(e)
    }
  }
  function _t(e) {
    var t = e.flags
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Nf(a)) {
            n = a
            break
          }
          a = a.return
        }
        if (n == null) throw Error(s(160))
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              l = ku(e)
            Yl(e, l, i)
            break
          case 5:
            var d = n.stateNode
            n.flags & 32 && (fa(d, ''), (n.flags &= -33))
            var p = ku(e)
            Yl(e, p, d)
            break
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              H = ku(e)
            Zu(e, H, S)
            break
          default:
            throw Error(s(161))
        }
      } catch (J) {
        qe(e, e.return, J)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function Xf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e
        Xf(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling)
      }
  }
  function On(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Uf(e, t.alternate, t), (t = t.sibling)
  }
  function Fn(e) {
    for (e = e.child; e !== null; ) {
      var t = e
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sn(4, t, t.return), Fn(t)
          break
        case 1:
          Vt(t, t.return)
          var n = t.stateNode
          typeof n.componentWillUnmount == 'function' && jf(t, t.return, n),
            Fn(t)
          break
        case 27:
          Ci(t.stateNode)
        case 26:
        case 5:
          Vt(t, t.return), Fn(t)
          break
        case 22:
          t.memoizedState === null && Fn(t)
          break
        case 30:
          Fn(t)
          break
        default:
          Fn(t)
      }
      e = e.sibling
    }
  }
  function Tn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        i = e,
        l = t,
        d = l.flags
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Tn(i, l, n), xi(4, l)
          break
        case 1:
          if (
            (Tn(i, l, n),
            (a = l),
            (i = a.stateNode),
            typeof i.componentDidMount == 'function')
          )
            try {
              i.componentDidMount()
            } catch (H) {
              qe(a, a.return, H)
            }
          if (((a = l), (i = a.updateQueue), i !== null)) {
            var p = a.stateNode
            try {
              var S = i.shared.hiddenCallbacks
              if (S !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < S.length; i++)
                  mc(S[i], p)
            } catch (H) {
              qe(a, a.return, H)
            }
          }
          n && d & 64 && Df(l), Ei(l, l.return)
          break
        case 27:
          Lf(l)
        case 26:
        case 5:
          Tn(i, l, n), n && a === null && d & 4 && Cf(l), Ei(l, l.return)
          break
        case 12:
          Tn(i, l, n)
          break
        case 13:
          Tn(i, l, n), n && d & 4 && Yf(i, l)
          break
        case 22:
          l.memoizedState === null && Tn(i, l, n), Ei(l, l.return)
          break
        case 30:
          break
        default:
          Tn(i, l, n)
      }
      t = t.sibling
    }
  }
  function Pu(e, t) {
    var n = null
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && oi(n))
  }
  function $u(e, t) {
    ;(e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && oi(e))
  }
  function Qt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Vf(e, t, n, a), (t = t.sibling)
  }
  function Vf(e, t, n, a) {
    var i = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Qt(e, t, n, a), i & 2048 && xi(9, t)
        break
      case 1:
        Qt(e, t, n, a)
        break
      case 3:
        Qt(e, t, n, a),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && oi(e)))
        break
      case 12:
        if (i & 2048) {
          Qt(e, t, n, a), (e = t.stateNode)
          try {
            var l = t.memoizedProps,
              d = l.id,
              p = l.onPostCommit
            typeof p == 'function' &&
              p(
                d,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              )
          } catch (S) {
            qe(t, t.return, S)
          }
        } else Qt(e, t, n, a)
        break
      case 13:
        Qt(e, t, n, a)
        break
      case 23:
        break
      case 22:
        ;(l = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? l._visibility & 2
              ? Qt(e, t, n, a)
              : _i(e, t)
            : l._visibility & 2
            ? Qt(e, t, n, a)
            : ((l._visibility |= 2),
              za(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && Pu(d, t)
        break
      case 24:
        Qt(e, t, n, a), i & 2048 && $u(t.alternate, t)
        break
      default:
        Qt(e, t, n, a)
    }
  }
  function za(e, t, n, a, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var l = e,
        d = t,
        p = n,
        S = a,
        H = d.flags
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          za(l, d, p, S, i), xi(8, d)
          break
        case 23:
          break
        case 22:
          var J = d.stateNode
          d.memoizedState !== null
            ? J._visibility & 2
              ? za(l, d, p, S, i)
              : _i(l, d)
            : ((J._visibility |= 2), za(l, d, p, S, i)),
            i && H & 2048 && Pu(d.alternate, d)
          break
        case 24:
          za(l, d, p, S, i), i && H & 2048 && $u(d.alternate, d)
          break
        default:
          za(l, d, p, S, i)
      }
      t = t.sibling
    }
  }
  function _i(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          i = a.flags
        switch (a.tag) {
          case 22:
            _i(n, a), i & 2048 && Pu(a.alternate, a)
            break
          case 24:
            _i(n, a), i & 2048 && $u(a.alternate, a)
            break
          default:
            _i(n, a)
        }
        t = t.sibling
      }
  }
  var Ai = 8192
  function Da(e) {
    if (e.subtreeFlags & Ai)
      for (e = e.child; e !== null; ) Qf(e), (e = e.sibling)
  }
  function Qf(e) {
    switch (e.tag) {
      case 26:
        Da(e),
          e.flags & Ai &&
            e.memoizedState !== null &&
            lm(Bt, e.memoizedState, e.memoizedProps)
        break
      case 5:
        Da(e)
        break
      case 3:
      case 4:
        var t = Bt
        ;(Bt = Il(e.stateNode.containerInfo)), Da(e), (Bt = t)
        break
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ai), (Ai = 16777216), Da(e), (Ai = t))
            : Da(e))
        break
      default:
        Da(e)
    }
  }
  function kf(e) {
    var t = e.alternate
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null
      do (t = e.sibling), (e.sibling = null), (e = t)
      while (e !== null)
    }
  }
  function wi(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(lt = a), Kf(a, e)
        }
      kf(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Zf(e), (e = e.sibling)
  }
  function Zf(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wi(e), e.flags & 2048 && Sn(9, e, e.return)
        break
      case 3:
        wi(e)
        break
      case 12:
        wi(e)
        break
      case 22:
        var t = e.stateNode
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Gl(e))
          : wi(e)
        break
      default:
        wi(e)
    }
  }
  function Gl(e) {
    var t = e.deletions
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(lt = a), Kf(a, e)
        }
      kf(e)
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Sn(8, t, t.return), Gl(t)
          break
        case 22:
          ;(n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Gl(t))
          break
        default:
          Gl(t)
      }
      e = e.sibling
    }
  }
  function Kf(e, t) {
    for (; lt !== null; ) {
      var n = lt
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Sn(8, n, t)
          break
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool
            a != null && a.refCount++
          }
          break
        case 24:
          oi(n.memoizedState.cache)
      }
      if (((a = n.child), a !== null)) (a.return = n), (lt = a)
      else
        e: for (n = e; lt !== null; ) {
          a = lt
          var i = a.sibling,
            l = a.return
          if ((qf(a), a === n)) {
            lt = null
            break e
          }
          if (i !== null) {
            ;(i.return = l), (lt = i)
            break e
          }
          lt = l
        }
    }
  }
  var Op = {
      getCacheForType: function (e) {
        var t = dt(Ie),
          n = t.data.get(e)
        return n === void 0 && ((n = e()), t.data.set(e, n)), n
      },
    },
    Tp = typeof WeakMap == 'function' ? WeakMap : Map,
    Ce = 0,
    Be = null,
    Ee = null,
    we = 0,
    Ne = 0,
    At = null,
    xn = !1,
    ja = !1,
    Wu = !1,
    on = 0,
    ke = 0,
    En = 0,
    In = 0,
    Fu = 0,
    Ht = 0,
    Ca = 0,
    Ri = null,
    St = null,
    Iu = !1,
    es = 0,
    Xl = 1 / 0,
    Vl = null,
    _n = null,
    st = 0,
    An = null,
    Na = null,
    La = 0,
    ts = 0,
    ns = null,
    Jf = null,
    Mi = 0,
    as = null
  function wt() {
    if ((Ce & 2) !== 0 && we !== 0) return we & -we
    if (_.T !== null) {
      var e = Ta
      return e !== 0 ? e : cs()
    }
    return so()
  }
  function Pf() {
    Ht === 0 && (Ht = (we & 536870912) === 0 || je ? io() : 536870912)
    var e = Lt.current
    return e !== null && (e.flags |= 32), Ht
  }
  function Rt(e, t, n) {
    ;((e === Be && (Ne === 2 || Ne === 9)) || e.cancelPendingCommit !== null) &&
      (Ha(e, 0), wn(e, we, Ht, !1)),
      Ka(e, n),
      ((Ce & 2) === 0 || e !== Be) &&
        (e === Be &&
          ((Ce & 2) === 0 && (In |= n), ke === 4 && wn(e, we, Ht, !1)),
        kt(e))
  }
  function $f(e, t, n) {
    if ((Ce & 6) !== 0) throw Error(s(327))
    var a = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Za(e, t),
      i = a ? _p(e, t) : rs(e, t, !0),
      l = a
    do {
      if (i === 0) {
        ja && !a && wn(e, t, 0, !1)
        break
      } else {
        if (((n = e.current.alternate), l && !xp(n))) {
          ;(i = rs(e, t, !1)), (l = !1)
          continue
        }
        if (i === 2) {
          if (((l = t), e.errorRecoveryDisabledLanes & l)) var d = 0
          else
            (d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0)
          if (d !== 0) {
            t = d
            e: {
              var p = e
              i = Ri
              var S = p.current.memoizedState.isDehydrated
              if ((S && (Ha(p, d).flags |= 256), (d = rs(p, d, !1)), d !== 2)) {
                if (Wu && !S) {
                  ;(p.errorRecoveryDisabledLanes |= l), (In |= l), (i = 4)
                  break e
                }
                ;(l = St),
                  (St = i),
                  l !== null && (St === null ? (St = l) : St.push.apply(St, l))
              }
              i = d
            }
            if (((l = !1), i !== 2)) continue
          }
        }
        if (i === 1) {
          Ha(e, 0), wn(e, t, 0, !0)
          break
        }
        e: {
          switch (((a = e), (l = i), l)) {
            case 0:
            case 1:
              throw Error(s(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              wn(a, t, Ht, !xn)
              break e
            case 2:
              St = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(s(329))
          }
          if ((t & 62914560) === t && ((i = es + 300 - pe()), 10 < i)) {
            if ((wn(a, t, Ht, !xn), el(a, 0, !0) !== 0)) break e
            a.timeoutHandle = _d(
              Wf.bind(null, a, n, St, Vl, Iu, t, Ht, In, Ca, xn, l, 2, -0, 0),
              i
            )
            break e
          }
          Wf(a, n, St, Vl, Iu, t, Ht, In, Ca, xn, l, 0, -0, 0)
        }
      }
      break
    } while (!0)
    kt(e)
  }
  function Wf(e, t, n, a, i, l, d, p, S, H, J, F, B, Y) {
    if (
      ((e.timeoutHandle = -1),
      (F = t.subtreeFlags),
      (F & 8192 || (F & 16785408) === 16785408) &&
        ((Hi = { stylesheets: null, count: 0, unsuspend: im }),
        Qf(t),
        (F = rm()),
        F !== null))
    ) {
      ;(e.cancelPendingCommit = F(
        id.bind(null, e, t, l, n, a, i, d, p, S, J, 1, B, Y)
      )),
        wn(e, l, d, !H)
      return
    }
    id(e, t, l, n, a, i, d, p, S)
  }
  function xp(e) {
    for (var t = e; ; ) {
      var n = t.tag
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var i = n[a],
            l = i.getSnapshot
          i = i.value
          try {
            if (!Tt(l(), i)) return !1
          } catch {
            return !1
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function wn(e, t, n, a) {
    ;(t &= ~Fu),
      (t &= ~In),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes)
    for (var i = t; 0 < i; ) {
      var l = 31 - Ot(i),
        d = 1 << l
      ;(a[l] = -1), (i &= ~d)
    }
    n !== 0 && ro(e, n, t)
  }
  function Ql() {
    return (Ce & 6) === 0 ? (zi(0), !1) : !0
  }
  function is() {
    if (Ee !== null) {
      if (Ne === 0) var e = Ee.return
      else (e = Ee), (en = Kn = null), Ou(e), (Ra = null), (Si = 0), (e = Ee)
      for (; e !== null; ) zf(e.alternate, e), (e = e.return)
      Ee = null
    }
  }
  function Ha(e, t) {
    var n = e.timeoutHandle
    n !== -1 && ((e.timeoutHandle = -1), Gp(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      is(),
      (Be = e),
      (Ee = n = Wt(e.current, null)),
      (we = t),
      (Ne = 0),
      (At = null),
      (xn = !1),
      (ja = Za(e, t)),
      (Wu = !1),
      (Ca = Ht = Fu = In = En = ke = 0),
      (St = Ri = null),
      (Iu = !1),
      (t & 8) !== 0 && (t |= t & 32)
    var a = e.entangledLanes
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ot(a),
          l = 1 << i
        ;(t |= e[i]), (a &= ~l)
      }
    return (on = t), dl(), n
  }
  function Ff(e, t) {
    ;(Oe = null),
      (_.H = Dl),
      t === fi || t === Ol
        ? ((t = gc()), (Ne = 3))
        : t === fc
        ? ((t = gc()), (Ne = 4))
        : (Ne =
            t === mf
              ? 8
              : t !== null &&
                typeof t == 'object' &&
                typeof t.then == 'function'
              ? 6
              : 1),
      (At = t),
      Ee === null && ((ke = 1), Hl(e, Dt(t, e.current)))
  }
  function If() {
    var e = _.H
    return (_.H = Dl), e === null ? Dl : e
  }
  function ed() {
    var e = _.A
    return (_.A = Op), e
  }
  function ls() {
    ;(ke = 4),
      xn || ((we & 4194048) !== we && Lt.current !== null) || (ja = !0),
      ((En & 134217727) === 0 && (In & 134217727) === 0) ||
        Be === null ||
        wn(Be, we, Ht, !1)
  }
  function rs(e, t, n) {
    var a = Ce
    Ce |= 2
    var i = If(),
      l = ed()
    ;(Be !== e || we !== t) && ((Vl = null), Ha(e, t)), (t = !1)
    var d = ke
    e: do
      try {
        if (Ne !== 0 && Ee !== null) {
          var p = Ee,
            S = At
          switch (Ne) {
            case 8:
              is(), (d = 6)
              break e
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (t = !0)
              var H = Ne
              if (((Ne = 0), (At = null), Ua(e, p, S, H), n && ja)) {
                d = 0
                break e
              }
              break
            default:
              ;(H = Ne), (Ne = 0), (At = null), Ua(e, p, S, H)
          }
        }
        Ep(), (d = ke)
        break
      } catch (J) {
        Ff(e, J)
      }
    while (!0)
    return (
      t && e.shellSuspendCounter++,
      (en = Kn = null),
      (Ce = a),
      (_.H = i),
      (_.A = l),
      Ee === null && ((Be = null), (we = 0), dl()),
      d
    )
  }
  function Ep() {
    for (; Ee !== null; ) td(Ee)
  }
  function _p(e, t) {
    var n = Ce
    Ce |= 2
    var a = If(),
      i = ed()
    Be !== e || we !== t
      ? ((Vl = null), (Xl = pe() + 500), Ha(e, t))
      : (ja = Za(e, t))
    e: do
      try {
        if (Ne !== 0 && Ee !== null) {
          t = Ee
          var l = At
          t: switch (Ne) {
            case 1:
              ;(Ne = 0), (At = null), Ua(e, t, l, 1)
              break
            case 2:
            case 9:
              if (dc(l)) {
                ;(Ne = 0), (At = null), nd(t)
                break
              }
              ;(t = function () {
                ;(Ne !== 2 && Ne !== 9) || Be !== e || (Ne = 7), kt(e)
              }),
                l.then(t, t)
              break e
            case 3:
              Ne = 7
              break e
            case 4:
              Ne = 5
              break e
            case 7:
              dc(l)
                ? ((Ne = 0), (At = null), nd(t))
                : ((Ne = 0), (At = null), Ua(e, t, l, 7))
              break
            case 5:
              var d = null
              switch (Ee.tag) {
                case 26:
                  d = Ee.memoizedState
                case 5:
                case 27:
                  var p = Ee
                  if (!d || Ud(d)) {
                    ;(Ne = 0), (At = null)
                    var S = p.sibling
                    if (S !== null) Ee = S
                    else {
                      var H = p.return
                      H !== null ? ((Ee = H), kl(H)) : (Ee = null)
                    }
                    break t
                  }
              }
              ;(Ne = 0), (At = null), Ua(e, t, l, 5)
              break
            case 6:
              ;(Ne = 0), (At = null), Ua(e, t, l, 6)
              break
            case 8:
              is(), (ke = 6)
              break e
            default:
              throw Error(s(462))
          }
        }
        Ap()
        break
      } catch (J) {
        Ff(e, J)
      }
    while (!0)
    return (
      (en = Kn = null),
      (_.H = a),
      (_.A = i),
      (Ce = n),
      Ee !== null ? 0 : ((Be = null), (we = 0), dl(), ke)
    )
  }
  function Ap() {
    for (; Ee !== null && !ze(); ) td(Ee)
  }
  function td(e) {
    var t = Rf(e.alternate, e, on)
    ;(e.memoizedProps = e.pendingProps), t === null ? kl(e) : (Ee = t)
  }
  function nd(e) {
    var t = e,
      n = t.alternate
    switch (t.tag) {
      case 15:
      case 0:
        t = Tf(n, t, t.pendingProps, t.type, void 0, we)
        break
      case 11:
        t = Tf(n, t, t.pendingProps, t.type.render, t.ref, we)
        break
      case 5:
        Ou(t)
      default:
        zf(n, t), (t = Ee = nc(t, on)), (t = Rf(n, t, on))
    }
    ;(e.memoizedProps = e.pendingProps), t === null ? kl(e) : (Ee = t)
  }
  function Ua(e, t, n, a) {
    ;(en = Kn = null), Ou(t), (Ra = null), (Si = 0)
    var i = t.return
    try {
      if (pp(e, i, t, n, we)) {
        ;(ke = 1), Hl(e, Dt(n, e.current)), (Ee = null)
        return
      }
    } catch (l) {
      if (i !== null) throw ((Ee = i), l)
      ;(ke = 1), Hl(e, Dt(n, e.current)), (Ee = null)
      return
    }
    t.flags & 32768
      ? (je || a === 1
          ? (e = !0)
          : ja || (we & 536870912) !== 0
          ? (e = !1)
          : ((xn = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Lt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        ad(t, e))
      : kl(t)
  }
  function kl(e) {
    var t = e
    do {
      if ((t.flags & 32768) !== 0) {
        ad(t, xn)
        return
      }
      e = t.return
      var n = vp(t.alternate, t, on)
      if (n !== null) {
        Ee = n
        return
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t
        return
      }
      Ee = t = e
    } while (t !== null)
    ke === 0 && (ke = 5)
  }
  function ad(e, t) {
    do {
      var n = yp(e.alternate, e)
      if (n !== null) {
        ;(n.flags &= 32767), (Ee = n)
        return
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ee = e
        return
      }
      Ee = e = n
    } while (e !== null)
    ;(ke = 6), (Ee = null)
  }
  function id(e, t, n, a, i, l, d, p, S) {
    e.cancelPendingCommit = null
    do Zl()
    while (st !== 0)
    if ((Ce & 6) !== 0) throw Error(s(327))
    if (t !== null) {
      if (t === e.current) throw Error(s(177))
      if (
        ((l = t.lanes | t.childLanes),
        (l |= $r),
        ig(e, n, l, d, p, S),
        e === Be && ((Ee = Be = null), (we = 0)),
        (Na = t),
        (An = e),
        (La = n),
        (ts = l),
        (ns = i),
        (Jf = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            zp(nt, function () {
              return od(), null
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ;(a = _.T), (_.T = null), (i = f.p), (f.p = 2), (d = Ce), (Ce |= 4)
        try {
          bp(e, t, n)
        } finally {
          ;(Ce = d), (f.p = i), (_.T = a)
        }
      }
      ;(st = 1), ld(), rd(), ud()
    }
  }
  function ld() {
    if (st === 1) {
      st = 0
      var e = An,
        t = Na,
        n = (t.flags & 13878) !== 0
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ;(n = _.T), (_.T = null)
        var a = f.p
        f.p = 2
        var i = Ce
        Ce |= 4
        try {
          Gf(t, e)
          var l = ys,
            d = Zo(e.containerInfo),
            p = l.focusedElem,
            S = l.selectionRange
          if (
            d !== p &&
            p &&
            p.ownerDocument &&
            ko(p.ownerDocument.documentElement, p)
          ) {
            if (S !== null && kr(p)) {
              var H = S.start,
                J = S.end
              if ((J === void 0 && (J = H), 'selectionStart' in p))
                (p.selectionStart = H),
                  (p.selectionEnd = Math.min(J, p.value.length))
              else {
                var F = p.ownerDocument || document,
                  B = (F && F.defaultView) || window
                if (B.getSelection) {
                  var Y = B.getSelection(),
                    me = p.textContent.length,
                    de = Math.min(S.start, me),
                    Ue = S.end === void 0 ? de : Math.min(S.end, me)
                  !Y.extend && de > Ue && ((d = Ue), (Ue = de), (de = d))
                  var z = Qo(p, de),
                    w = Qo(p, Ue)
                  if (
                    z &&
                    w &&
                    (Y.rangeCount !== 1 ||
                      Y.anchorNode !== z.node ||
                      Y.anchorOffset !== z.offset ||
                      Y.focusNode !== w.node ||
                      Y.focusOffset !== w.offset)
                  ) {
                    var C = F.createRange()
                    C.setStart(z.node, z.offset),
                      Y.removeAllRanges(),
                      de > Ue
                        ? (Y.addRange(C), Y.extend(w.node, w.offset))
                        : (C.setEnd(w.node, w.offset), Y.addRange(C))
                  }
                }
              }
            }
            for (F = [], Y = p; (Y = Y.parentNode); )
              Y.nodeType === 1 &&
                F.push({ element: Y, left: Y.scrollLeft, top: Y.scrollTop })
            for (
              typeof p.focus == 'function' && p.focus(), p = 0;
              p < F.length;
              p++
            ) {
              var P = F[p]
              ;(P.element.scrollLeft = P.left), (P.element.scrollTop = P.top)
            }
          }
          ;(ir = !!vs), (ys = vs = null)
        } finally {
          ;(Ce = i), (f.p = a), (_.T = n)
        }
      }
      ;(e.current = t), (st = 2)
    }
  }
  function rd() {
    if (st === 2) {
      st = 0
      var e = An,
        t = Na,
        n = (t.flags & 8772) !== 0
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ;(n = _.T), (_.T = null)
        var a = f.p
        f.p = 2
        var i = Ce
        Ce |= 4
        try {
          Uf(e, t.alternate, t)
        } finally {
          ;(Ce = i), (f.p = a), (_.T = n)
        }
      }
      st = 3
    }
  }
  function ud() {
    if (st === 4 || st === 3) {
      ;(st = 0), Ze()
      var e = An,
        t = Na,
        n = La,
        a = Jf
      ;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (st = 5)
        : ((st = 0), (Na = An = null), sd(e, e.pendingLanes))
      var i = e.pendingLanes
      if (
        (i === 0 && (_n = null),
        Er(n),
        (t = t.stateNode),
        Ve && typeof Ve.onCommitFiberRoot == 'function')
      )
        try {
          Ve.onCommitFiberRoot(Hn, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
      if (a !== null) {
        ;(t = _.T), (i = f.p), (f.p = 2), (_.T = null)
        try {
          for (var l = e.onRecoverableError, d = 0; d < a.length; d++) {
            var p = a[d]
            l(p.value, { componentStack: p.stack })
          }
        } finally {
          ;(_.T = t), (f.p = i)
        }
      }
      ;(La & 3) !== 0 && Zl(),
        kt(e),
        (i = e.pendingLanes),
        (n & 4194090) !== 0 && (i & 42) !== 0
          ? e === as
            ? Mi++
            : ((Mi = 0), (as = e))
          : (Mi = 0),
        zi(0)
    }
  }
  function sd(e, t) {
    ;(e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), oi(t)))
  }
  function Zl(e) {
    return ld(), rd(), ud(), od()
  }
  function od() {
    if (st !== 5) return !1
    var e = An,
      t = ts
    ts = 0
    var n = Er(La),
      a = _.T,
      i = f.p
    try {
      ;(f.p = 32 > n ? 32 : n), (_.T = null), (n = ns), (ns = null)
      var l = An,
        d = La
      if (((st = 0), (Na = An = null), (La = 0), (Ce & 6) !== 0))
        throw Error(s(331))
      var p = Ce
      if (
        ((Ce |= 4),
        Zf(l.current),
        Vf(l, l.current, d, n),
        (Ce = p),
        zi(0, !1),
        Ve && typeof Ve.onPostCommitFiberRoot == 'function')
      )
        try {
          Ve.onPostCommitFiberRoot(Hn, l)
        } catch {}
      return !0
    } finally {
      ;(f.p = i), (_.T = a), sd(e, t)
    }
  }
  function cd(e, t, n) {
    ;(t = Dt(n, t)),
      (t = Lu(e.stateNode, t, 2)),
      (e = mn(e, t, 2)),
      e !== null && (Ka(e, 2), kt(e))
  }
  function qe(e, t, n) {
    if (e.tag === 3) cd(e, e, n)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cd(t, e, n)
          break
        } else if (t.tag === 1) {
          var a = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (_n === null || !_n.has(a)))
          ) {
            ;(e = Dt(n, e)),
              (n = gf(2)),
              (a = mn(t, n, 2)),
              a !== null && (pf(n, a, t, e), Ka(a, 2), kt(a))
            break
          }
        }
        t = t.return
      }
  }
  function us(e, t, n) {
    var a = e.pingCache
    if (a === null) {
      a = e.pingCache = new Tp()
      var i = new Set()
      a.set(t, i)
    } else (i = a.get(t)), i === void 0 && ((i = new Set()), a.set(t, i))
    i.has(n) ||
      ((Wu = !0), i.add(n), (e = wp.bind(null, e, t, n)), t.then(e, e))
  }
  function wp(e, t, n) {
    var a = e.pingCache
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Be === e &&
        (we & n) === n &&
        (ke === 4 || (ke === 3 && (we & 62914560) === we && 300 > pe() - es)
          ? (Ce & 2) === 0 && Ha(e, 0)
          : (Fu |= n),
        Ca === we && (Ca = 0)),
      kt(e)
  }
  function fd(e, t) {
    t === 0 && (t = lo()), (e = ya(e, t)), e !== null && (Ka(e, t), kt(e))
  }
  function Rp(e) {
    var t = e.memoizedState,
      n = 0
    t !== null && (n = t.retryLane), fd(e, n)
  }
  function Mp(e, t) {
    var n = 0
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          i = e.memoizedState
        i !== null && (n = i.retryLane)
        break
      case 19:
        a = e.stateNode
        break
      case 22:
        a = e.stateNode._retryCache
        break
      default:
        throw Error(s(314))
    }
    a !== null && a.delete(t), fd(e, n)
  }
  function zp(e, t) {
    return Ae(e, t)
  }
  var Kl = null,
    qa = null,
    ss = !1,
    Jl = !1,
    os = !1,
    ea = 0
  function kt(e) {
    e !== qa &&
      e.next === null &&
      (qa === null ? (Kl = qa = e) : (qa = qa.next = e)),
      (Jl = !0),
      ss || ((ss = !0), jp())
  }
  function zi(e, t) {
    if (!os && Jl) {
      os = !0
      do
        for (var n = !1, a = Kl; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes
            if (i === 0) var l = 0
            else {
              var d = a.suspendedLanes,
                p = a.pingedLanes
              ;(l = (1 << (31 - Ot(42 | e) + 1)) - 1),
                (l &= i & ~(d & ~p)),
                (l = l & 201326741 ? (l & 201326741) | 1 : l ? l | 2 : 0)
            }
            l !== 0 && ((n = !0), pd(a, l))
          } else
            (l = we),
              (l = el(
                a,
                a === Be ? l : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (l & 3) === 0 || Za(a, l) || ((n = !0), pd(a, l))
          a = a.next
        }
      while (n)
      os = !1
    }
  }
  function Dp() {
    dd()
  }
  function dd() {
    Jl = ss = !1
    var e = 0
    ea !== 0 && (Yp() && (e = ea), (ea = 0))
    for (var t = pe(), n = null, a = Kl; a !== null; ) {
      var i = a.next,
        l = hd(a, t)
      l === 0
        ? ((a.next = null),
          n === null ? (Kl = i) : (n.next = i),
          i === null && (qa = n))
        : ((n = a), (e !== 0 || (l & 3) !== 0) && (Jl = !0)),
        (a = i)
    }
    zi(e)
  }
  function hd(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        i = e.expirationTimes,
        l = e.pendingLanes & -62914561;
      0 < l;

    ) {
      var d = 31 - Ot(l),
        p = 1 << d,
        S = i[d]
      S === -1
        ? ((p & n) === 0 || (p & a) !== 0) && (i[d] = ag(p, t))
        : S <= t && (e.expiredLanes |= p),
        (l &= ~p)
    }
    if (
      ((t = Be),
      (n = we),
      (n = el(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (Ne === 2 || Ne === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Se(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      )
    if ((n & 3) === 0 || Za(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t
      switch ((a !== null && Se(a), Er(n))) {
        case 2:
        case 8:
          n = $e
          break
        case 32:
          n = nt
          break
        case 268435456:
          n = Nn
          break
        default:
          n = nt
      }
      return (
        (a = gd.bind(null, e)),
        (n = Ae(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      )
    }
    return (
      a !== null && a !== null && Se(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    )
  }
  function gd(e, t) {
    if (st !== 0 && st !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null
    var n = e.callbackNode
    if (Zl() && e.callbackNode !== n) return null
    var a = we
    return (
      (a = el(
        e,
        e === Be ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : ($f(e, a, t),
          hd(e, pe()),
          e.callbackNode != null && e.callbackNode === n
            ? gd.bind(null, e)
            : null)
    )
  }
  function pd(e, t) {
    if (Zl()) return null
    $f(e, t, !0)
  }
  function jp() {
    Xp(function () {
      ;(Ce & 6) !== 0 ? Ae(Ke, Dp) : dd()
    })
  }
  function cs() {
    return ea === 0 && (ea = io()), ea
  }
  function md(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
      ? e
      : ll('' + e)
  }
  function vd(e, t) {
    var n = t.ownerDocument.createElement('input')
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    )
  }
  function Cp(e, t, n, a, i) {
    if (t === 'submit' && n && n.stateNode === i) {
      var l = md((i[mt] || null).action),
        d = a.submitter
      d &&
        ((t = (t = d[mt] || null)
          ? md(t.formAction)
          : d.getAttribute('formAction')),
        t !== null && ((l = t), (d = null)))
      var p = new ol('action', 'action', null, a, i)
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ea !== 0) {
                  var S = d ? vd(i, d) : new FormData(i)
                  zu(
                    n,
                    { pending: !0, data: S, method: i.method, action: l },
                    null,
                    S
                  )
                }
              } else
                typeof l == 'function' &&
                  (p.preventDefault(),
                  (S = d ? vd(i, d) : new FormData(i)),
                  zu(
                    n,
                    { pending: !0, data: S, method: i.method, action: l },
                    l,
                    S
                  ))
            },
            currentTarget: i,
          },
        ],
      })
    }
  }
  for (var fs = 0; fs < Pr.length; fs++) {
    var ds = Pr[fs],
      Np = ds.toLowerCase(),
      Lp = ds[0].toUpperCase() + ds.slice(1)
    qt(Np, 'on' + Lp)
  }
  qt(Po, 'onAnimationEnd'),
    qt($o, 'onAnimationIteration'),
    qt(Wo, 'onAnimationStart'),
    qt('dblclick', 'onDoubleClick'),
    qt('focusin', 'onFocus'),
    qt('focusout', 'onBlur'),
    qt(Fg, 'onTransitionRun'),
    qt(Ig, 'onTransitionStart'),
    qt(ep, 'onTransitionCancel'),
    qt(Fo, 'onTransitionEnd'),
    sa('onMouseEnter', ['mouseout', 'mouseover']),
    sa('onMouseLeave', ['mouseout', 'mouseover']),
    sa('onPointerEnter', ['pointerout', 'pointerover']),
    sa('onPointerLeave', ['pointerout', 'pointerover']),
    qn(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    qn(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    qn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    qn(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    qn(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    qn(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    )
  var Di =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Hp = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Di)
    )
  function yd(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        i = a.event
      a = a.listeners
      e: {
        var l = void 0
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var p = a[d],
              S = p.instance,
              H = p.currentTarget
            if (((p = p.listener), S !== l && i.isPropagationStopped())) break e
            ;(l = p), (i.currentTarget = H)
            try {
              l(i)
            } catch (J) {
              Ll(J)
            }
            ;(i.currentTarget = null), (l = S)
          }
        else
          for (d = 0; d < a.length; d++) {
            if (
              ((p = a[d]),
              (S = p.instance),
              (H = p.currentTarget),
              (p = p.listener),
              S !== l && i.isPropagationStopped())
            )
              break e
            ;(l = p), (i.currentTarget = H)
            try {
              l(i)
            } catch (J) {
              Ll(J)
            }
            ;(i.currentTarget = null), (l = S)
          }
      }
    }
  }
  function _e(e, t) {
    var n = t[_r]
    n === void 0 && (n = t[_r] = new Set())
    var a = e + '__bubble'
    n.has(a) || (bd(t, e, 2, !1), n.add(a))
  }
  function hs(e, t, n) {
    var a = 0
    t && (a |= 4), bd(n, e, a, t)
  }
  var Pl = '_reactListening' + Math.random().toString(36).slice(2)
  function gs(e) {
    if (!e[Pl]) {
      ;(e[Pl] = !0),
        co.forEach(function (n) {
          n !== 'selectionchange' && (Hp.has(n) || hs(n, !1, e), hs(n, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Pl] || ((t[Pl] = !0), hs('selectionchange', !1, t))
    }
  }
  function bd(e, t, n, a) {
    switch (Vd(t)) {
      case 2:
        var i = om
        break
      case 8:
        i = cm
        break
      default:
        i = Rs
    }
    ;(n = i.bind(null, t, n, e)),
      (i = void 0),
      !Hr ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (i = !0),
      a
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1)
  }
  function ps(e, t, n, a, i) {
    var l = a
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return
        var d = a.tag
        if (d === 3 || d === 4) {
          var p = a.stateNode.containerInfo
          if (p === i) break
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var S = d.tag
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === i)
                return
              d = d.return
            }
          for (; p !== null; ) {
            if (((d = la(p)), d === null)) return
            if (((S = d.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = l = d
              continue e
            }
            p = p.parentNode
          }
        }
        a = a.return
      }
    _o(function () {
      var H = l,
        J = Nr(n),
        F = []
      e: {
        var B = Io.get(e)
        if (B !== void 0) {
          var Y = ol,
            me = e
          switch (e) {
            case 'keypress':
              if (ul(n) === 0) break e
            case 'keydown':
            case 'keyup':
              Y = zg
              break
            case 'focusin':
              ;(me = 'focus'), (Y = Yr)
              break
            case 'focusout':
              ;(me = 'blur'), (Y = Yr)
              break
            case 'beforeblur':
            case 'afterblur':
              Y = Yr
              break
            case 'click':
              if (n.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Y = Ro
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Y = yg
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Y = Cg
              break
            case Po:
            case $o:
            case Wo:
              Y = Og
              break
            case Fo:
              Y = Lg
              break
            case 'scroll':
            case 'scrollend':
              Y = mg
              break
            case 'wheel':
              Y = Ug
              break
            case 'copy':
            case 'cut':
            case 'paste':
              Y = xg
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Y = zo
              break
            case 'toggle':
            case 'beforetoggle':
              Y = Bg
          }
          var de = (t & 4) !== 0,
            Ue = !de && (e === 'scroll' || e === 'scrollend'),
            z = de ? (B !== null ? B + 'Capture' : null) : B
          de = []
          for (var w = H, C; w !== null; ) {
            var P = w
            if (
              ((C = P.stateNode),
              (P = P.tag),
              (P !== 5 && P !== 26 && P !== 27) ||
                C === null ||
                z === null ||
                ((P = $a(w, z)), P != null && de.push(ji(w, P, C))),
              Ue)
            )
              break
            w = w.return
          }
          0 < de.length &&
            ((B = new Y(B, me, null, n, J)),
            F.push({ event: B, listeners: de }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === 'mouseover' || e === 'pointerover'),
            (Y = e === 'mouseout' || e === 'pointerout'),
            B &&
              n !== Cr &&
              (me = n.relatedTarget || n.fromElement) &&
              (la(me) || me[ia]))
          )
            break e
          if (
            (Y || B) &&
            ((B =
              J.window === J
                ? J
                : (B = J.ownerDocument)
                ? B.defaultView || B.parentWindow
                : window),
            Y
              ? ((me = n.relatedTarget || n.toElement),
                (Y = H),
                (me = me ? la(me) : null),
                me !== null &&
                  ((Ue = g(me)),
                  (de = me.tag),
                  me !== Ue || (de !== 5 && de !== 27 && de !== 6)) &&
                  (me = null))
              : ((Y = null), (me = H)),
            Y !== me)
          ) {
            if (
              ((de = Ro),
              (P = 'onMouseLeave'),
              (z = 'onMouseEnter'),
              (w = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((de = zo),
                (P = 'onPointerLeave'),
                (z = 'onPointerEnter'),
                (w = 'pointer')),
              (Ue = Y == null ? B : Pa(Y)),
              (C = me == null ? B : Pa(me)),
              (B = new de(P, w + 'leave', Y, n, J)),
              (B.target = Ue),
              (B.relatedTarget = C),
              (P = null),
              la(J) === H &&
                ((de = new de(z, w + 'enter', me, n, J)),
                (de.target = C),
                (de.relatedTarget = Ue),
                (P = de)),
              (Ue = P),
              Y && me)
            )
              t: {
                for (de = Y, z = me, w = 0, C = de; C; C = Ba(C)) w++
                for (C = 0, P = z; P; P = Ba(P)) C++
                for (; 0 < w - C; ) (de = Ba(de)), w--
                for (; 0 < C - w; ) (z = Ba(z)), C--
                for (; w--; ) {
                  if (de === z || (z !== null && de === z.alternate)) break t
                  ;(de = Ba(de)), (z = Ba(z))
                }
                de = null
              }
            else de = null
            Y !== null && Sd(F, B, Y, de, !1),
              me !== null && Ue !== null && Sd(F, Ue, me, de, !0)
          }
        }
        e: {
          if (
            ((B = H ? Pa(H) : window),
            (Y = B.nodeName && B.nodeName.toLowerCase()),
            Y === 'select' || (Y === 'input' && B.type === 'file'))
          )
            var re = qo
          else if (Ho(B))
            if (Bo) re = Pg
            else {
              re = Kg
              var xe = Zg
            }
          else
            (Y = B.nodeName),
              !Y ||
              Y.toLowerCase() !== 'input' ||
              (B.type !== 'checkbox' && B.type !== 'radio')
                ? H && jr(H.elementType) && (re = qo)
                : (re = Jg)
          if (re && (re = re(e, H))) {
            Uo(F, re, n, J)
            break e
          }
          xe && xe(e, B, H),
            e === 'focusout' &&
              H &&
              B.type === 'number' &&
              H.memoizedProps.value != null &&
              Dr(B, 'number', B.value)
        }
        switch (((xe = H ? Pa(H) : window), e)) {
          case 'focusin':
            ;(Ho(xe) || xe.contentEditable === 'true') &&
              ((pa = xe), (Zr = H), (ii = null))
            break
          case 'focusout':
            ii = Zr = pa = null
            break
          case 'mousedown':
            Kr = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(Kr = !1), Ko(F, n, J)
            break
          case 'selectionchange':
            if (Wg) break
          case 'keydown':
          case 'keyup':
            Ko(F, n, J)
        }
        var se
        if (Xr)
          e: {
            switch (e) {
              case 'compositionstart':
                var he = 'onCompositionStart'
                break e
              case 'compositionend':
                he = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                he = 'onCompositionUpdate'
                break e
            }
            he = void 0
          }
        else
          ga
            ? No(e, n) && (he = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (he = 'onCompositionStart')
        he &&
          (Do &&
            n.locale !== 'ko' &&
            (ga || he !== 'onCompositionStart'
              ? he === 'onCompositionEnd' && ga && (se = Ao())
              : ((dn = J),
                (Ur = 'value' in dn ? dn.value : dn.textContent),
                (ga = !0))),
          (xe = $l(H, he)),
          0 < xe.length &&
            ((he = new Mo(he, e, null, n, J)),
            F.push({ event: he, listeners: xe }),
            se
              ? (he.data = se)
              : ((se = Lo(n)), se !== null && (he.data = se)))),
          (se = Gg ? Xg(e, n) : Vg(e, n)) &&
            ((he = $l(H, 'onBeforeInput')),
            0 < he.length &&
              ((xe = new Mo('onBeforeInput', 'beforeinput', null, n, J)),
              F.push({ event: xe, listeners: he }),
              (xe.data = se))),
          Cp(F, e, H, n, J)
      }
      yd(F, t)
    })
  }
  function ji(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function $l(e, t) {
    for (var n = t + 'Capture', a = []; e !== null; ) {
      var i = e,
        l = i.stateNode
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          l === null ||
          ((i = $a(e, n)),
          i != null && a.unshift(ji(e, i, l)),
          (i = $a(e, t)),
          i != null && a.push(ji(e, i, l))),
        e.tag === 3)
      )
        return a
      e = e.return
    }
    return []
  }
  function Ba(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5 && e.tag !== 27)
    return e || null
  }
  function Sd(e, t, n, a, i) {
    for (var l = t._reactName, d = []; n !== null && n !== a; ) {
      var p = n,
        S = p.alternate,
        H = p.stateNode
      if (((p = p.tag), S !== null && S === a)) break
      ;(p !== 5 && p !== 26 && p !== 27) ||
        H === null ||
        ((S = H),
        i
          ? ((H = $a(n, l)), H != null && d.unshift(ji(n, H, S)))
          : i || ((H = $a(n, l)), H != null && d.push(ji(n, H, S)))),
        (n = n.return)
    }
    d.length !== 0 && e.push({ event: t, listeners: d })
  }
  var Up = /\r\n?/g,
    qp = /\u0000|\uFFFD/g
  function Od(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Up,
        `
`
      )
      .replace(qp, '')
  }
  function Td(e, t) {
    return (t = Od(t)), Od(e) === t
  }
  function Wl() {}
  function He(e, t, n, a, i, l) {
    switch (n) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || fa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') &&
            t !== 'body' &&
            fa(e, '' + a)
        break
      case 'className':
        nl(e, 'class', a)
        break
      case 'tabIndex':
        nl(e, 'tabindex', a)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        nl(e, n, a)
        break
      case 'style':
        xo(e, a, l)
        break
      case 'data':
        if (t !== 'object') {
          nl(e, 'data', a)
          break
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n)
          break
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          e.removeAttribute(n)
          break
        }
        ;(a = ll('' + a)), e.setAttribute(n, a)
        break
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          )
          break
        } else
          typeof l == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && He(e, t, 'name', i.name, i, null),
                He(e, t, 'formEncType', i.formEncType, i, null),
                He(e, t, 'formMethod', i.formMethod, i, null),
                He(e, t, 'formTarget', i.formTarget, i, null))
              : (He(e, t, 'encType', i.encType, i, null),
                He(e, t, 'method', i.method, i, null),
                He(e, t, 'target', i.target, i, null)))
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(n)
          break
        }
        ;(a = ll('' + a)), e.setAttribute(n, a)
        break
      case 'onClick':
        a != null && (e.onclick = Wl)
        break
      case 'onScroll':
        a != null && _e('scroll', e)
        break
      case 'onScrollEnd':
        a != null && _e('scrollend', e)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61))
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(s(60))
            e.innerHTML = n
          }
        }
        break
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          e.removeAttribute('xlink:href')
          break
        }
        ;(n = ll('' + a)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n)
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(n, '' + a)
          : e.removeAttribute(n)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n)
        break
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(n, '')
          : a !== !1 &&
            a != null &&
            typeof a != 'function' &&
            typeof a != 'symbol'
          ? e.setAttribute(n, a)
          : e.removeAttribute(n)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n)
        break
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a)
        break
      case 'popover':
        _e('beforetoggle', e), _e('toggle', e), tl(e, 'popover', a)
        break
      case 'xlinkActuate':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
        break
      case 'xlinkArcrole':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
        break
      case 'xlinkRole':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
        break
      case 'xlinkShow':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
        break
      case 'xlinkTitle':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
        break
      case 'xlinkType':
        Pt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
        break
      case 'xmlBase':
        Pt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
        break
      case 'xmlLang':
        Pt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
        break
      case 'xmlSpace':
        Pt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
        break
      case 'is':
        tl(e, 'is', a)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < n.length) ||
          (n[0] !== 'o' && n[0] !== 'O') ||
          (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = gg.get(n) || n), tl(e, n, a))
    }
  }
  function ms(e, t, n, a, i, l) {
    switch (n) {
      case 'style':
        xo(e, a, l)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(s(61))
          if (((n = a.__html), n != null)) {
            if (i.children != null) throw Error(s(60))
            e.innerHTML = n
          }
        }
        break
      case 'children':
        typeof a == 'string'
          ? fa(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && fa(e, '' + a)
        break
      case 'onScroll':
        a != null && _e('scroll', e)
        break
      case 'onScrollEnd':
        a != null && _e('scrollend', e)
        break
      case 'onClick':
        a != null && (e.onclick = Wl)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!fo.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((i = n.endsWith('Capture')),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (l = e[mt] || null),
              (l = l != null ? l[n] : null),
              typeof l == 'function' && e.removeEventListener(t, l, i),
              typeof a == 'function')
            ) {
              typeof l != 'function' &&
                l !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, i)
              break e
            }
            n in e ? (e[n] = a) : a === !0 ? e.setAttribute(n, '') : tl(e, n, a)
          }
    }
  }
  function ot(e, t, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        _e('error', e), _e('load', e)
        var a = !1,
          i = !1,
          l
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var d = n[l]
            if (d != null)
              switch (l) {
                case 'src':
                  a = !0
                  break
                case 'srcSet':
                  i = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, t))
                default:
                  He(e, t, l, d, n, null)
              }
          }
        i && He(e, t, 'srcSet', n.srcSet, n, null),
          a && He(e, t, 'src', n.src, n, null)
        return
      case 'input':
        _e('invalid', e)
        var p = (l = d = i = null),
          S = null,
          H = null
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var J = n[a]
            if (J != null)
              switch (a) {
                case 'name':
                  i = J
                  break
                case 'type':
                  d = J
                  break
                case 'checked':
                  S = J
                  break
                case 'defaultChecked':
                  H = J
                  break
                case 'value':
                  l = J
                  break
                case 'defaultValue':
                  p = J
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (J != null) throw Error(s(137, t))
                  break
                default:
                  He(e, t, a, J, n, null)
              }
          }
        bo(e, l, p, S, H, d, i, !1), al(e)
        return
      case 'select':
        _e('invalid', e), (a = d = l = null)
        for (i in n)
          if (n.hasOwnProperty(i) && ((p = n[i]), p != null))
            switch (i) {
              case 'value':
                l = p
                break
              case 'defaultValue':
                d = p
                break
              case 'multiple':
                a = p
              default:
                He(e, t, i, p, n, null)
            }
        ;(t = l),
          (n = d),
          (e.multiple = !!a),
          t != null ? ca(e, !!a, t, !1) : n != null && ca(e, !!a, n, !0)
        return
      case 'textarea':
        _e('invalid', e), (l = i = a = null)
        for (d in n)
          if (n.hasOwnProperty(d) && ((p = n[d]), p != null))
            switch (d) {
              case 'value':
                a = p
                break
              case 'defaultValue':
                i = p
                break
              case 'children':
                l = p
                break
              case 'dangerouslySetInnerHTML':
                if (p != null) throw Error(s(91))
                break
              default:
                He(e, t, d, p, n, null)
            }
        Oo(e, a, i, l), al(e)
        return
      case 'option':
        for (S in n)
          if (n.hasOwnProperty(S) && ((a = n[S]), a != null))
            switch (S) {
              case 'selected':
                e.selected = a && typeof a != 'function' && typeof a != 'symbol'
                break
              default:
                He(e, t, S, a, n, null)
            }
        return
      case 'dialog':
        _e('beforetoggle', e), _e('toggle', e), _e('cancel', e), _e('close', e)
        break
      case 'iframe':
      case 'object':
        _e('load', e)
        break
      case 'video':
      case 'audio':
        for (a = 0; a < Di.length; a++) _e(Di[a], e)
        break
      case 'image':
        _e('error', e), _e('load', e)
        break
      case 'details':
        _e('toggle', e)
        break
      case 'embed':
      case 'source':
      case 'link':
        _e('error', e), _e('load', e)
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (H in n)
          if (n.hasOwnProperty(H) && ((a = n[H]), a != null))
            switch (H) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, t))
              default:
                He(e, t, H, a, n, null)
            }
        return
      default:
        if (jr(t)) {
          for (J in n)
            n.hasOwnProperty(J) &&
              ((a = n[J]), a !== void 0 && ms(e, t, J, a, n, void 0))
          return
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && ((a = n[p]), a != null && He(e, t, p, a, n, null))
  }
  function Bp(e, t, n, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var i = null,
          l = null,
          d = null,
          p = null,
          S = null,
          H = null,
          J = null
        for (Y in n) {
          var F = n[Y]
          if (n.hasOwnProperty(Y) && F != null)
            switch (Y) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                S = F
              default:
                a.hasOwnProperty(Y) || He(e, t, Y, null, a, F)
            }
        }
        for (var B in a) {
          var Y = a[B]
          if (((F = n[B]), a.hasOwnProperty(B) && (Y != null || F != null)))
            switch (B) {
              case 'type':
                l = Y
                break
              case 'name':
                i = Y
                break
              case 'checked':
                H = Y
                break
              case 'defaultChecked':
                J = Y
                break
              case 'value':
                d = Y
                break
              case 'defaultValue':
                p = Y
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Y != null) throw Error(s(137, t))
                break
              default:
                Y !== F && He(e, t, B, Y, a, F)
            }
        }
        zr(e, d, p, S, H, J, l, i)
        return
      case 'select':
        Y = d = p = B = null
        for (l in n)
          if (((S = n[l]), n.hasOwnProperty(l) && S != null))
            switch (l) {
              case 'value':
                break
              case 'multiple':
                Y = S
              default:
                a.hasOwnProperty(l) || He(e, t, l, null, a, S)
            }
        for (i in a)
          if (
            ((l = a[i]),
            (S = n[i]),
            a.hasOwnProperty(i) && (l != null || S != null))
          )
            switch (i) {
              case 'value':
                B = l
                break
              case 'defaultValue':
                p = l
                break
              case 'multiple':
                d = l
              default:
                l !== S && He(e, t, i, l, a, S)
            }
        ;(t = p),
          (n = d),
          (a = Y),
          B != null
            ? ca(e, !!n, B, !1)
            : !!a != !!n &&
              (t != null ? ca(e, !!n, t, !0) : ca(e, !!n, n ? [] : '', !1))
        return
      case 'textarea':
        Y = B = null
        for (p in n)
          if (
            ((i = n[p]),
            n.hasOwnProperty(p) && i != null && !a.hasOwnProperty(p))
          )
            switch (p) {
              case 'value':
                break
              case 'children':
                break
              default:
                He(e, t, p, null, a, i)
            }
        for (d in a)
          if (
            ((i = a[d]),
            (l = n[d]),
            a.hasOwnProperty(d) && (i != null || l != null))
          )
            switch (d) {
              case 'value':
                B = i
                break
              case 'defaultValue':
                Y = i
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(s(91))
                break
              default:
                i !== l && He(e, t, d, i, a, l)
            }
        So(e, B, Y)
        return
      case 'option':
        for (var me in n)
          if (
            ((B = n[me]),
            n.hasOwnProperty(me) && B != null && !a.hasOwnProperty(me))
          )
            switch (me) {
              case 'selected':
                e.selected = !1
                break
              default:
                He(e, t, me, null, a, B)
            }
        for (S in a)
          if (
            ((B = a[S]),
            (Y = n[S]),
            a.hasOwnProperty(S) && B !== Y && (B != null || Y != null))
          )
            switch (S) {
              case 'selected':
                e.selected = B && typeof B != 'function' && typeof B != 'symbol'
                break
              default:
                He(e, t, S, B, a, Y)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var de in n)
          (B = n[de]),
            n.hasOwnProperty(de) &&
              B != null &&
              !a.hasOwnProperty(de) &&
              He(e, t, de, null, a, B)
        for (H in a)
          if (
            ((B = a[H]),
            (Y = n[H]),
            a.hasOwnProperty(H) && B !== Y && (B != null || Y != null))
          )
            switch (H) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (B != null) throw Error(s(137, t))
                break
              default:
                He(e, t, H, B, a, Y)
            }
        return
      default:
        if (jr(t)) {
          for (var Ue in n)
            (B = n[Ue]),
              n.hasOwnProperty(Ue) &&
                B !== void 0 &&
                !a.hasOwnProperty(Ue) &&
                ms(e, t, Ue, void 0, a, B)
          for (J in a)
            (B = a[J]),
              (Y = n[J]),
              !a.hasOwnProperty(J) ||
                B === Y ||
                (B === void 0 && Y === void 0) ||
                ms(e, t, J, B, a, Y)
          return
        }
    }
    for (var z in n)
      (B = n[z]),
        n.hasOwnProperty(z) &&
          B != null &&
          !a.hasOwnProperty(z) &&
          He(e, t, z, null, a, B)
    for (F in a)
      (B = a[F]),
        (Y = n[F]),
        !a.hasOwnProperty(F) ||
          B === Y ||
          (B == null && Y == null) ||
          He(e, t, F, B, a, Y)
  }
  var vs = null,
    ys = null
  function Fl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }
  function xd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function Ed(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return e === 1 && t === 'foreignObject' ? 0 : e
  }
  function bs(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var Ss = null
  function Yp() {
    var e = window.event
    return e && e.type === 'popstate'
      ? e === Ss
        ? !1
        : ((Ss = e), !0)
      : ((Ss = null), !1)
  }
  var _d = typeof setTimeout == 'function' ? setTimeout : void 0,
    Gp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ad = typeof Promise == 'function' ? Promise : void 0,
    Xp =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ad < 'u'
        ? function (e) {
            return Ad.resolve(null).then(e).catch(Vp)
          }
        : _d
  function Vp(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Rn(e) {
    return e === 'head'
  }
  function wd(e, t) {
    var n = t,
      a = 0,
      i = 0
    do {
      var l = n.nextSibling
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === '/$')) {
          if (0 < a && 8 > a) {
            n = a
            var d = e.ownerDocument
            if ((n & 1 && Ci(d.documentElement), n & 2 && Ci(d.body), n & 4))
              for (n = d.head, Ci(n), d = n.firstChild; d; ) {
                var p = d.nextSibling,
                  S = d.nodeName
                d[Ja] ||
                  S === 'SCRIPT' ||
                  S === 'STYLE' ||
                  (S === 'LINK' && d.rel.toLowerCase() === 'stylesheet') ||
                  n.removeChild(d),
                  (d = p)
              }
          }
          if (i === 0) {
            e.removeChild(l), Gi(t)
            return
          }
          i--
        } else
          n === '$' || n === '$?' || n === '$!'
            ? i++
            : (a = n.charCodeAt(0) - 48)
      else a = 0
      n = l
    } while (n)
    Gi(t)
  }
  function Os(e) {
    var t = e.firstChild
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          Os(n), Ar(n)
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue
      }
      e.removeChild(n)
    }
  }
  function Qp(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
      } else if (a) {
        if (!e[Ja])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break
              return e
            case 'link':
              if (
                ((l = e.getAttribute('rel')),
                l === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break
              if (
                l !== i.rel ||
                e.getAttribute('href') !==
                  (i.href == null || i.href === '' ? null : i.href) ||
                e.getAttribute('crossorigin') !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute('title') !== (i.title == null ? null : i.title)
              )
                break
              return e
            case 'style':
              if (e.hasAttribute('data-precedence')) break
              return e
            case 'script':
              if (
                ((l = e.getAttribute('src')),
                (l !== (i.src == null ? null : i.src) ||
                  e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                  e.getAttribute('crossorigin') !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  l &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break
              return e
            default:
              return e
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var l = i.name == null ? null : '' + i.name
        if (i.type === 'hidden' && e.getAttribute('name') === l) return e
      } else return e
      if (((e = Yt(e.nextSibling)), e === null)) break
    }
    return null
  }
  function kp(e, t, n) {
    if (t === '') return null
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = Yt(e.nextSibling)), e === null)
      )
        return null
    return e
  }
  function Ts(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    )
  }
  function Zp(e, t) {
    var n = e.ownerDocument
    if (e.data !== '$?' || n.readyState === 'complete') t()
    else {
      var a = function () {
        t(), n.removeEventListener('DOMContentLoaded', a)
      }
      n.addEventListener('DOMContentLoaded', a), (e._reactRetry = a)
    }
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break
        if (t === '/$') return null
      }
    }
    return e
  }
  var xs = null
  function Rd(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e
          t--
        } else n === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  function Md(e, t, n) {
    switch (((t = Fl(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(s(452))
        return e
      case 'head':
        if (((e = t.head), !e)) throw Error(s(453))
        return e
      case 'body':
        if (((e = t.body), !e)) throw Error(s(454))
        return e
      default:
        throw Error(s(451))
    }
  }
  function Ci(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
    Ar(e)
  }
  var Ut = new Map(),
    zd = new Set()
  function Il(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument
  }
  var cn = f.d
  f.d = { f: Kp, r: Jp, D: Pp, C: $p, L: Wp, m: Fp, X: em, S: Ip, M: tm }
  function Kp() {
    var e = cn.f(),
      t = Ql()
    return e || t
  }
  function Jp(e) {
    var t = ra(e)
    t !== null && t.tag === 5 && t.type === 'form' ? Pc(t) : cn.r(e)
  }
  var Ya = typeof document > 'u' ? null : document
  function Dd(e, t, n) {
    var a = Ya
    if (a && typeof t == 'string' && t) {
      var i = zt(t)
      ;(i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == 'string' && (i += '[crossorigin="' + n + '"]'),
        zd.has(i) ||
          (zd.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(i) === null &&
            ((t = a.createElement('link')),
            ot(t, 'link', e),
            at(t),
            a.head.appendChild(t)))
    }
  }
  function Pp(e) {
    cn.D(e), Dd('dns-prefetch', e, null)
  }
  function $p(e, t) {
    cn.C(e, t), Dd('preconnect', e, t)
  }
  function Wp(e, t, n) {
    cn.L(e, t, n)
    var a = Ya
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + zt(t) + '"]'
      t === 'image' && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + zt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' &&
            (i += '[imagesizes="' + zt(n.imageSizes) + '"]'))
        : (i += '[href="' + zt(e) + '"]')
      var l = i
      switch (t) {
        case 'style':
          l = Ga(e)
          break
        case 'script':
          l = Xa(e)
      }
      Ut.has(l) ||
        ((e = M(
          {
            rel: 'preload',
            href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Ut.set(l, e),
        a.querySelector(i) !== null ||
          (t === 'style' && a.querySelector(Ni(l))) ||
          (t === 'script' && a.querySelector(Li(l))) ||
          ((t = a.createElement('link')),
          ot(t, 'link', e),
          at(t),
          a.head.appendChild(t)))
    }
  }
  function Fp(e, t) {
    cn.m(e, t)
    var n = Ya
    if (n && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        i =
          'link[rel="modulepreload"][as="' + zt(a) + '"][href="' + zt(e) + '"]',
        l = i
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          l = Xa(e)
      }
      if (
        !Ut.has(l) &&
        ((e = M({ rel: 'modulepreload', href: e }, t)),
        Ut.set(l, e),
        n.querySelector(i) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Li(l))) return
        }
        ;(a = n.createElement('link')),
          ot(a, 'link', e),
          at(a),
          n.head.appendChild(a)
      }
    }
  }
  function Ip(e, t, n) {
    cn.S(e, t, n)
    var a = Ya
    if (a && e) {
      var i = ua(a).hoistableStyles,
        l = Ga(e)
      t = t || 'default'
      var d = i.get(l)
      if (!d) {
        var p = { loading: 0, preload: null }
        if ((d = a.querySelector(Ni(l)))) p.loading = 5
        else {
          ;(e = M({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = Ut.get(l)) && Es(e, n)
          var S = (d = a.createElement('link'))
          at(S),
            ot(S, 'link', e),
            (S._p = new Promise(function (H, J) {
              ;(S.onload = H), (S.onerror = J)
            })),
            S.addEventListener('load', function () {
              p.loading |= 1
            }),
            S.addEventListener('error', function () {
              p.loading |= 2
            }),
            (p.loading |= 4),
            er(d, t, a)
        }
        ;(d = { type: 'stylesheet', instance: d, count: 1, state: p }),
          i.set(l, d)
      }
    }
  }
  function em(e, t) {
    cn.X(e, t)
    var n = Ya
    if (n && e) {
      var a = ua(n).hoistableScripts,
        i = Xa(e),
        l = a.get(i)
      l ||
        ((l = n.querySelector(Li(i))),
        l ||
          ((e = M({ src: e, async: !0 }, t)),
          (t = Ut.get(i)) && _s(e, t),
          (l = n.createElement('script')),
          at(l),
          ot(l, 'link', e),
          n.head.appendChild(l)),
        (l = { type: 'script', instance: l, count: 1, state: null }),
        a.set(i, l))
    }
  }
  function tm(e, t) {
    cn.M(e, t)
    var n = Ya
    if (n && e) {
      var a = ua(n).hoistableScripts,
        i = Xa(e),
        l = a.get(i)
      l ||
        ((l = n.querySelector(Li(i))),
        l ||
          ((e = M({ src: e, async: !0, type: 'module' }, t)),
          (t = Ut.get(i)) && _s(e, t),
          (l = n.createElement('script')),
          at(l),
          ot(l, 'link', e),
          n.head.appendChild(l)),
        (l = { type: 'script', instance: l, count: 1, state: null }),
        a.set(i, l))
    }
  }
  function jd(e, t, n, a) {
    var i = (i = Z.current) ? Il(i) : null
    if (!i) throw Error(s(446))
    switch (e) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ga(n.href)),
            (n = ua(i).hoistableStyles),
            (a = n.get(t)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = Ga(n.href)
          var l = ua(i).hoistableStyles,
            d = l.get(e)
          if (
            (d ||
              ((i = i.ownerDocument || i),
              (d = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              l.set(e, d),
              (l = i.querySelector(Ni(e))) &&
                !l._p &&
                ((d.instance = l), (d.state.loading = 5)),
              Ut.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ut.set(e, n),
                l || nm(i, e, n, d.state))),
            t && a === null)
          )
            throw Error(s(528, ''))
          return d
        }
        if (t && a !== null) throw Error(s(529, ''))
        return null
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = Xa(n)),
              (n = ua(i).hoistableScripts),
              (a = n.get(t)),
              a ||
                ((a = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        )
      default:
        throw Error(s(444, e))
    }
  }
  function Ga(e) {
    return 'href="' + zt(e) + '"'
  }
  function Ni(e) {
    return 'link[rel="stylesheet"][' + e + ']'
  }
  function Cd(e) {
    return M({}, e, { 'data-precedence': e.precedence, precedence: null })
  }
  function nm(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1)
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2)
        }),
        ot(t, 'link', n),
        at(t),
        e.head.appendChild(t))
  }
  function Xa(e) {
    return '[src="' + zt(e) + '"]'
  }
  function Li(e) {
    return 'script[async]' + e
  }
  function Nd(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + zt(n.href) + '"]')
          if (a) return (t.instance = a), at(a), a
          var i = M({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          })
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            at(a),
            ot(a, 'style', i),
            er(a, n.precedence, e),
            (t.instance = a)
          )
        case 'stylesheet':
          i = Ga(n.href)
          var l = e.querySelector(Ni(i))
          if (l) return (t.state.loading |= 4), (t.instance = l), at(l), l
          ;(a = Cd(n)),
            (i = Ut.get(i)) && Es(a, i),
            (l = (e.ownerDocument || e).createElement('link')),
            at(l)
          var d = l
          return (
            (d._p = new Promise(function (p, S) {
              ;(d.onload = p), (d.onerror = S)
            })),
            ot(l, 'link', a),
            (t.state.loading |= 4),
            er(l, n.precedence, e),
            (t.instance = l)
          )
        case 'script':
          return (
            (l = Xa(n.src)),
            (i = e.querySelector(Li(l)))
              ? ((t.instance = i), at(i), i)
              : ((a = n),
                (i = Ut.get(l)) && ((a = M({}, n)), _s(a, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                at(i),
                ot(i, 'link', a),
                e.head.appendChild(i),
                (t.instance = i))
          )
        case 'void':
          return null
        default:
          throw Error(s(443, t.type))
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), er(a, n.precedence, e))
    return t.instance
  }
  function er(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        i = a.length ? a[a.length - 1] : null,
        l = i,
        d = 0;
      d < a.length;
      d++
    ) {
      var p = a[d]
      if (p.dataset.precedence === t) l = p
      else if (l !== i) break
    }
    l
      ? l.parentNode.insertBefore(e, l.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild))
  }
  function Es(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title)
  }
  function _s(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity)
  }
  var tr = null
  function Ld(e, t, n) {
    if (tr === null) {
      var a = new Map(),
        i = (tr = new Map())
      i.set(n, a)
    } else (i = tr), (a = i.get(n)), a || ((a = new Map()), i.set(n, a))
    if (a.has(e)) return a
    for (
      a.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var l = n[i]
      if (
        !(
          l[Ja] ||
          l[ft] ||
          (e === 'link' && l.getAttribute('rel') === 'stylesheet')
        ) &&
        l.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var d = l.getAttribute(t) || ''
        d = e + d
        var p = a.get(d)
        p ? p.push(l) : a.set(d, [l])
      }
    }
    return a
  }
  function Hd(e, t, n) {
    ;(e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === 'title' ? e.querySelector('head > title') : null
      )
  }
  function am(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1
    switch (e) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break
        return !0
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled), typeof t.precedence == 'string' && e == null
            )
          default:
            return !0
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0
    }
    return !1
  }
  function Ud(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
  }
  var Hi = null
  function im() {}
  function lm(e, t, n) {
    if (Hi === null) throw Error(s(475))
    var a = Hi
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = Ga(n.href),
          l = e.querySelector(Ni(i))
        if (l) {
          ;(e = l._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (a.count++, (a = nr.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = l),
            at(l)
          return
        }
        ;(l = e.ownerDocument || e),
          (n = Cd(n)),
          (i = Ut.get(i)) && Es(n, i),
          (l = l.createElement('link')),
          at(l)
        var d = l
        ;(d._p = new Promise(function (p, S) {
          ;(d.onload = p), (d.onerror = S)
        })),
          ot(l, 'link', n),
          (t.instance = l)
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = nr.bind(a)),
          e.addEventListener('load', t),
          e.addEventListener('error', t))
    }
  }
  function rm() {
    if (Hi === null) throw Error(s(475))
    var e = Hi
    return (
      e.stylesheets && e.count === 0 && As(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && As(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend
                ;(e.unsuspend = null), a()
              }
            }, 6e4)
            return (
              (e.unsuspend = t),
              function () {
                ;(e.unsuspend = null), clearTimeout(n)
              }
            )
          }
        : null
    )
  }
  function nr() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) As(this, this.stylesheets)
      else if (this.unsuspend) {
        var e = this.unsuspend
        ;(this.unsuspend = null), e()
      }
    }
  }
  var ar = null
  function As(e, t) {
    ;(e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (ar = new Map()), t.forEach(um, e), (ar = null), nr.call(e))
  }
  function um(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ar.get(e)
      if (n) var a = n.get(null)
      else {
        ;(n = new Map()), ar.set(e, n)
        for (
          var i = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            l = 0;
          l < i.length;
          l++
        ) {
          var d = i[l]
          ;(d.nodeName === 'LINK' || d.getAttribute('media') !== 'not all') &&
            (n.set(d.dataset.precedence, d), (a = d))
        }
        a && n.set(null, a)
      }
      ;(i = t.instance),
        (d = i.getAttribute('data-precedence')),
        (l = n.get(d) || a),
        l === a && n.set(null, i),
        n.set(d, i),
        this.count++,
        (a = nr.bind(this)),
        i.addEventListener('load', a),
        i.addEventListener('error', a),
        l
          ? l.parentNode.insertBefore(i, l.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4)
    }
  }
  var Ui = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: te,
    _currentValue2: te,
    _threadCount: 0,
  }
  function sm(e, t, n, a, i, l, d, p) {
    ;(this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Tr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Tr(0)),
      (this.hiddenUpdates = Tr(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = i),
      (this.onCaughtError = l),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = p),
      (this.incompleteTransitions = new Map())
  }
  function qd(e, t, n, a, i, l, d, p, S, H, J, F) {
    return (
      (e = new sm(e, t, n, d, p, S, H, F)),
      (t = 1),
      l === !0 && (t |= 24),
      (l = xt(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (t = uu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (l.memoizedState = { element: a, isDehydrated: n, cache: t }),
      fu(l),
      e
    )
  }
  function Bd(e) {
    return e ? ((e = ba), e) : ba
  }
  function Yd(e, t, n, a, i, l) {
    ;(i = Bd(i)),
      a.context === null ? (a.context = i) : (a.pendingContext = i),
      (a = pn(t)),
      (a.payload = { element: n }),
      (l = l === void 0 ? null : l),
      l !== null && (a.callback = l),
      (n = mn(e, a, t)),
      n !== null && (Rt(n, e, t), hi(n, e, t))
  }
  function Gd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }
  function ws(e, t) {
    Gd(e, t), (e = e.alternate) && Gd(e, t)
  }
  function Xd(e) {
    if (e.tag === 13) {
      var t = ya(e, 67108864)
      t !== null && Rt(t, e, 67108864), ws(e, 67108864)
    }
  }
  var ir = !0
  function om(e, t, n, a) {
    var i = _.T
    _.T = null
    var l = f.p
    try {
      ;(f.p = 2), Rs(e, t, n, a)
    } finally {
      ;(f.p = l), (_.T = i)
    }
  }
  function cm(e, t, n, a) {
    var i = _.T
    _.T = null
    var l = f.p
    try {
      ;(f.p = 8), Rs(e, t, n, a)
    } finally {
      ;(f.p = l), (_.T = i)
    }
  }
  function Rs(e, t, n, a) {
    if (ir) {
      var i = Ms(a)
      if (i === null) ps(e, t, a, lr, n), Qd(e, a)
      else if (dm(i, e, t, n, a)) a.stopPropagation()
      else if ((Qd(e, a), t & 4 && -1 < fm.indexOf(e))) {
        for (; i !== null; ) {
          var l = ra(i)
          if (l !== null)
            switch (l.tag) {
              case 3:
                if (((l = l.stateNode), l.current.memoizedState.isDehydrated)) {
                  var d = Un(l.pendingLanes)
                  if (d !== 0) {
                    var p = l
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; d; ) {
                      var S = 1 << (31 - Ot(d))
                      ;(p.entanglements[1] |= S), (d &= ~S)
                    }
                    kt(l), (Ce & 6) === 0 && ((Xl = pe() + 500), zi(0))
                  }
                }
                break
              case 13:
                ;(p = ya(l, 2)), p !== null && Rt(p, l, 2), Ql(), ws(l, 2)
            }
          if (((l = Ms(a)), l === null && ps(e, t, a, lr, n), l === i)) break
          i = l
        }
        i !== null && a.stopPropagation()
      } else ps(e, t, a, null, n)
    }
  }
  function Ms(e) {
    return (e = Nr(e)), zs(e)
  }
  var lr = null
  function zs(e) {
    if (((lr = null), (e = la(e)), e !== null)) {
      var t = g(e)
      if (t === null) e = null
      else {
        var n = t.tag
        if (n === 13) {
          if (((e = b(t)), e !== null)) return e
          e = null
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      }
    }
    return (lr = e), null
  }
  function Vd(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (Xe()) {
          case Ke:
            return 2
          case $e:
            return 8
          case nt:
          case Jt:
            return 32
          case Nn:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Ds = !1,
    Mn = null,
    zn = null,
    Dn = null,
    qi = new Map(),
    Bi = new Map(),
    jn = [],
    fm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      )
  function Qd(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Mn = null
        break
      case 'dragenter':
      case 'dragleave':
        zn = null
        break
      case 'mouseover':
      case 'mouseout':
        Dn = null
        break
      case 'pointerover':
      case 'pointerout':
        qi.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        Bi.delete(t.pointerId)
    }
  }
  function Yi(e, t, n, a, i, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: l,
          targetContainers: [i],
        }),
        t !== null && ((t = ra(t)), t !== null && Xd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
  }
  function dm(e, t, n, a, i) {
    switch (t) {
      case 'focusin':
        return (Mn = Yi(Mn, e, t, n, a, i)), !0
      case 'dragenter':
        return (zn = Yi(zn, e, t, n, a, i)), !0
      case 'mouseover':
        return (Dn = Yi(Dn, e, t, n, a, i)), !0
      case 'pointerover':
        var l = i.pointerId
        return qi.set(l, Yi(qi.get(l) || null, e, t, n, a, i)), !0
      case 'gotpointercapture':
        return (
          (l = i.pointerId), Bi.set(l, Yi(Bi.get(l) || null, e, t, n, a, i)), !0
        )
    }
    return !1
  }
  function kd(e) {
    var t = la(e.target)
    if (t !== null) {
      var n = g(t)
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = b(n)), t !== null)) {
            ;(e.blockedOn = t),
              lg(e.priority, function () {
                if (n.tag === 13) {
                  var a = wt()
                  a = xr(a)
                  var i = ya(n, a)
                  i !== null && Rt(i, n, a), ws(n, a)
                }
              })
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function rr(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ms(e.nativeEvent)
      if (n === null) {
        n = e.nativeEvent
        var a = new n.constructor(n.type, n)
        ;(Cr = a), n.target.dispatchEvent(a), (Cr = null)
      } else return (t = ra(n)), t !== null && Xd(t), (e.blockedOn = n), !1
      t.shift()
    }
    return !0
  }
  function Zd(e, t, n) {
    rr(e) && n.delete(t)
  }
  function hm() {
    ;(Ds = !1),
      Mn !== null && rr(Mn) && (Mn = null),
      zn !== null && rr(zn) && (zn = null),
      Dn !== null && rr(Dn) && (Dn = null),
      qi.forEach(Zd),
      Bi.forEach(Zd)
  }
  function ur(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ds ||
        ((Ds = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, hm)))
  }
  var sr = null
  function Kd(e) {
    sr !== e &&
      ((sr = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        sr === e && (sr = null)
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            i = e[t + 2]
          if (typeof a != 'function') {
            if (zs(a || n) === null) continue
            break
          }
          var l = ra(n)
          l !== null &&
            (e.splice(t, 3),
            (t -= 3),
            zu(l, { pending: !0, data: i, method: n.method, action: a }, a, i))
        }
      }))
  }
  function Gi(e) {
    function t(S) {
      return ur(S, e)
    }
    Mn !== null && ur(Mn, e),
      zn !== null && ur(zn, e),
      Dn !== null && ur(Dn, e),
      qi.forEach(t),
      Bi.forEach(t)
    for (var n = 0; n < jn.length; n++) {
      var a = jn[n]
      a.blockedOn === e && (a.blockedOn = null)
    }
    for (; 0 < jn.length && ((n = jn[0]), n.blockedOn === null); )
      kd(n), n.blockedOn === null && jn.shift()
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var i = n[a],
          l = n[a + 1],
          d = i[mt] || null
        if (typeof l == 'function') d || Kd(n)
        else if (d) {
          var p = null
          if (l && l.hasAttribute('formAction')) {
            if (((i = l), (d = l[mt] || null))) p = d.formAction
            else if (zs(i) !== null) continue
          } else p = d.action
          typeof p == 'function' ? (n[a + 1] = p) : (n.splice(a, 3), (a -= 3)),
            Kd(n)
        }
      }
  }
  function js(e) {
    this._internalRoot = e
  }
  ;(or.prototype.render = js.prototype.render =
    function (e) {
      var t = this._internalRoot
      if (t === null) throw Error(s(409))
      var n = t.current,
        a = wt()
      Yd(n, a, e, t, null, null)
    }),
    (or.prototype.unmount = js.prototype.unmount =
      function () {
        var e = this._internalRoot
        if (e !== null) {
          this._internalRoot = null
          var t = e.containerInfo
          Yd(e.current, 2, null, e, null, null), Ql(), (t[ia] = null)
        }
      })
  function or(e) {
    this._internalRoot = e
  }
  or.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = so()
      e = { blockedOn: null, target: e, priority: t }
      for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++);
      jn.splice(n, 0, e), n === 0 && kd(e)
    }
  }
  var Jd = r.version
  if (Jd !== '19.1.0') throw Error(s(527, Jd, '19.1.0'))
  f.findDOMNode = function (e) {
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(s(188))
        : ((e = Object.keys(e).join(',')), Error(s(268, e)))
    return (
      (e = O(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    )
  }
  var gm = {
    bundleType: 0,
    version: '19.1.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: _,
    reconcilerVersion: '19.1.0',
  }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var cr = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!cr.isDisabled && cr.supportsFiber)
      try {
        ;(Hn = cr.inject(gm)), (Ve = cr)
      } catch {}
  }
  return (
    (Vi.createRoot = function (e, t) {
      if (!h(e)) throw Error(s(299))
      var n = !1,
        a = '',
        i = cf,
        l = ff,
        d = df,
        p = null
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (l = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (p = t.unstable_transitionCallbacks)),
        (t = qd(e, 1, !1, null, null, n, a, i, l, d, p, null)),
        (e[ia] = t.current),
        gs(e),
        new js(t)
      )
    }),
    (Vi.hydrateRoot = function (e, t, n) {
      if (!h(e)) throw Error(s(299))
      var a = !1,
        i = '',
        l = cf,
        d = ff,
        p = df,
        S = null,
        H = null
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (l = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (H = n.formState)),
        (t = qd(e, 1, !0, t, n ?? null, a, i, l, d, p, S, H)),
        (t.context = Bd(null)),
        (n = t.current),
        (a = wt()),
        (a = xr(a)),
        (i = pn(a)),
        (i.callback = null),
        mn(n, i, a),
        (n = a),
        (t.current.lanes = n),
        Ka(t, n),
        kt(t),
        (e[ia] = t.current),
        gs(e),
        new or(t)
      )
    }),
    (Vi.version = '19.1.0'),
    Vi
  )
}
var ih
function Am() {
  if (ih) return Ls.exports
  ih = 1
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
      } catch (r) {
        console.error(r)
      }
  }
  return c(), (Ls.exports = _m()), Ls.exports
}
var wm = Am()
const Rm = (c, r, u, s) => {
    var g, b, x, O
    const h = [u, { code: r, ...(s || {}) }]
    if (
      (b = (g = c == null ? void 0 : c.services) == null ? void 0 : g.logger) !=
        null &&
      b.forward
    )
      return c.services.logger.forward(h, 'warn', 'react-i18next::', !0)
    na(h[0]) && (h[0] = `react-i18next:: ${h[0]}`),
      (O = (x = c == null ? void 0 : c.services) == null ? void 0 : x.logger) !=
        null && O.warn
        ? c.services.logger.warn(...h)
        : console != null && console.warn && console.warn(...h)
  },
  lh = {},
  Is = (c, r, u, s) => {
    ;(na(u) && lh[u]) || (na(u) && (lh[u] = new Date()), Rm(c, r, u, s))
  },
  Bh = (c, r) => () => {
    if (c.isInitialized) r()
    else {
      const u = () => {
        setTimeout(() => {
          c.off('initialized', u)
        }, 0),
          r()
      }
      c.on('initialized', u)
    }
  },
  eo = (c, r, u) => {
    c.loadNamespaces(r, Bh(c, u))
  },
  rh = (c, r, u, s) => {
    if (
      (na(u) && (u = [u]),
      c.options.preload && c.options.preload.indexOf(r) > -1)
    )
      return eo(c, u, s)
    u.forEach((h) => {
      c.options.ns.indexOf(h) < 0 && c.options.ns.push(h)
    }),
      c.loadLanguages(r, Bh(c, s))
  },
  Mm = (c, r, u = {}) =>
    !r.languages || !r.languages.length
      ? (Is(r, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
          languages: r.languages,
        }),
        !0)
      : r.hasLoadedNamespace(c, {
          lng: u.lng,
          precheck: (s, h) => {
            var g
            if (
              ((g = u.bindI18n) == null
                ? void 0
                : g.indexOf('languageChanging')) > -1 &&
              s.services.backendConnector.backend &&
              s.isLanguageChangingTo &&
              !h(s.isLanguageChangingTo, c)
            )
              return !1
          },
        }),
  na = (c) => typeof c == 'string',
  zm = (c) => typeof c == 'object' && c !== null,
  Dm =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  jm = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  Cm = (c) => jm[c],
  Nm = (c) => c.replace(Dm, Cm)
let to = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: Nm,
}
const Lm = (c = {}) => {
    to = { ...to, ...c }
  },
  Hm = () => to
let Yh
const Um = (c) => {
    Yh = c
  },
  qm = () => Yh,
  Bm = {
    type: '3rdParty',
    init(c) {
      Lm(c.options.react), Um(c)
    },
  },
  Gh = tt.createContext()
class Ym {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(r) {
    r.forEach((u) => {
      this.usedNamespaces[u] || (this.usedNamespaces[u] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}
const Gm = (c, r) => {
    const u = tt.useRef()
    return (
      tt.useEffect(() => {
        u.current = c
      }, [c, r]),
      u.current
    )
  },
  Xh = (c, r, u, s) => c.getFixedT(r, u, s),
  Xm = (c, r, u, s) => tt.useCallback(Xh(c, r, u, s), [c, r, u, s]),
  aa = (c, r = {}) => {
    var ge, E, D, j
    const { i18n: u } = r,
      { i18n: s, defaultNS: h } = tt.useContext(Gh) || {},
      g = u || s || qm()
    if ((g && !g.reportNamespaces && (g.reportNamespaces = new Ym()), !g)) {
      Is(
        g,
        'NO_I18NEXT_INSTANCE',
        'useTranslation: You will need to pass in an i18next instance by using initReactI18next'
      )
      const K = (v, q) =>
          na(q)
            ? q
            : zm(q) && na(q.defaultValue)
            ? q.defaultValue
            : Array.isArray(v)
            ? v[v.length - 1]
            : v,
        A = [K, {}, !1]
      return (A.t = K), (A.i18n = {}), (A.ready = !1), A
    }
    ;(ge = g.options.react) != null &&
      ge.wait &&
      Is(
        g,
        'DEPRECATED_OPTION',
        'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      )
    const b = { ...Hm(), ...g.options.react, ...r },
      { useSuspense: x, keyPrefix: O } = b
    let y = h || ((E = g.options) == null ? void 0 : E.defaultNS)
    ;(y = na(y) ? [y] : y || ['translation']),
      (j = (D = g.reportNamespaces).addUsedNamespaces) == null || j.call(D, y)
    const M =
        (g.isInitialized || g.initializedStoreOnce) &&
        y.every((K) => Mm(K, g, b)),
      Q = Xm(g, r.lng || null, b.nsMode === 'fallback' ? y : y[0], O),
      X = () => Q,
      ae = () => Xh(g, r.lng || null, b.nsMode === 'fallback' ? y : y[0], O),
      [ee, k] = tt.useState(X)
    let le = y.join()
    r.lng && (le = `${r.lng}${le}`)
    const ce = Gm(le),
      oe = tt.useRef(!0)
    tt.useEffect(() => {
      const { bindI18n: K, bindI18nStore: A } = b
      ;(oe.current = !0),
        !M &&
          !x &&
          (r.lng
            ? rh(g, r.lng, y, () => {
                oe.current && k(ae)
              })
            : eo(g, y, () => {
                oe.current && k(ae)
              })),
        M && ce && ce !== le && oe.current && k(ae)
      const v = () => {
        oe.current && k(ae)
      }
      return (
        K && (g == null || g.on(K, v)),
        A && (g == null || g.store.on(A, v)),
        () => {
          ;(oe.current = !1),
            g && (K == null || K.split(' ').forEach((q) => g.off(q, v))),
            A && g && A.split(' ').forEach((q) => g.store.off(q, v))
        }
      )
    }, [g, le]),
      tt.useEffect(() => {
        oe.current && M && k(X)
      }, [g, O, M])
    const fe = [ee, g, M]
    if (((fe.t = ee), (fe.i18n = g), (fe.ready = M), M || (!M && !x))) return fe
    throw new Promise((K) => {
      r.lng ? rh(g, r.lng, y, () => K()) : eo(g, y, () => K())
    })
  }
function Vm({ i18n: c, defaultNS: r, children: u }) {
  const s = tt.useMemo(() => ({ i18n: c, defaultNS: r }), [c, r])
  return tt.createElement(Gh.Provider, { value: s }, u)
}
const ve = (c) => typeof c == 'string',
  Qi = () => {
    let c, r
    const u = new Promise((s, h) => {
      ;(c = s), (r = h)
    })
    return (u.resolve = c), (u.reject = r), u
  },
  uh = (c) => (c == null ? '' : '' + c),
  Qm = (c, r, u) => {
    c.forEach((s) => {
      r[s] && (u[s] = r[s])
    })
  },
  km = /###/g,
  sh = (c) => (c && c.indexOf('###') > -1 ? c.replace(km, '.') : c),
  oh = (c) => !c || ve(c),
  Ji = (c, r, u) => {
    const s = ve(r) ? r.split('.') : r
    let h = 0
    for (; h < s.length - 1; ) {
      if (oh(c)) return {}
      const g = sh(s[h])
      !c[g] && u && (c[g] = new u()),
        Object.prototype.hasOwnProperty.call(c, g) ? (c = c[g]) : (c = {}),
        ++h
    }
    return oh(c) ? {} : { obj: c, k: sh(s[h]) }
  },
  ch = (c, r, u) => {
    const { obj: s, k: h } = Ji(c, r, Object)
    if (s !== void 0 || r.length === 1) {
      s[h] = u
      return
    }
    let g = r[r.length - 1],
      b = r.slice(0, r.length - 1),
      x = Ji(c, b, Object)
    for (; x.obj === void 0 && b.length; )
      (g = `${b[b.length - 1]}.${g}`),
        (b = b.slice(0, b.length - 1)),
        (x = Ji(c, b, Object)),
        x != null &&
          x.obj &&
          typeof x.obj[`${x.k}.${g}`] < 'u' &&
          (x.obj = void 0)
    x.obj[`${x.k}.${g}`] = u
  },
  Zm = (c, r, u, s) => {
    const { obj: h, k: g } = Ji(c, r, Object)
    ;(h[g] = h[g] || []), h[g].push(u)
  },
  hr = (c, r) => {
    const { obj: u, k: s } = Ji(c, r)
    if (u && Object.prototype.hasOwnProperty.call(u, s)) return u[s]
  },
  Km = (c, r, u) => {
    const s = hr(c, u)
    return s !== void 0 ? s : hr(r, u)
  },
  Vh = (c, r, u) => {
    for (const s in r)
      s !== '__proto__' &&
        s !== 'constructor' &&
        (s in c
          ? ve(c[s]) ||
            c[s] instanceof String ||
            ve(r[s]) ||
            r[s] instanceof String
            ? u && (c[s] = r[s])
            : Vh(c[s], r[s], u)
          : (c[s] = r[s]))
    return c
  },
  Va = (c) => c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var Jm = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const Pm = (c) => (ve(c) ? c.replace(/[&<>"'\/]/g, (r) => Jm[r]) : c)
class $m {
  constructor(r) {
    ;(this.capacity = r), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(r) {
    const u = this.regExpMap.get(r)
    if (u !== void 0) return u
    const s = new RegExp(r)
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(r, s),
      this.regExpQueue.push(r),
      s
    )
  }
}
const Wm = [' ', ',', '?', '!', ';'],
  Fm = new $m(20),
  Im = (c, r, u) => {
    ;(r = r || ''), (u = u || '')
    const s = Wm.filter((b) => r.indexOf(b) < 0 && u.indexOf(b) < 0)
    if (s.length === 0) return !0
    const h = Fm.getRegExp(
      `(${s.map((b) => (b === '?' ? '\\?' : b)).join('|')})`
    )
    let g = !h.test(c)
    if (!g) {
      const b = c.indexOf(u)
      b > 0 && !h.test(c.substring(0, b)) && (g = !0)
    }
    return g
  },
  no = function (c, r) {
    let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!c) return
    if (c[r]) return Object.prototype.hasOwnProperty.call(c, r) ? c[r] : void 0
    const s = r.split(u)
    let h = c
    for (let g = 0; g < s.length; ) {
      if (!h || typeof h != 'object') return
      let b,
        x = ''
      for (let O = g; O < s.length; ++O)
        if ((O !== g && (x += u), (x += s[O]), (b = h[x]), b !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof b) > -1 &&
            O < s.length - 1
          )
            continue
          g += O - g + 1
          break
        }
      h = b
    }
    return h
  },
  gr = (c) => (c == null ? void 0 : c.replace('_', '-')),
  ev = {
    type: 'logger',
    log(c) {
      this.output('log', c)
    },
    warn(c) {
      this.output('warn', c)
    },
    error(c) {
      this.output('error', c)
    },
    output(c, r) {
      var u, s
      ;(s =
        (u = console == null ? void 0 : console[c]) == null
          ? void 0
          : u.apply) == null || s.call(u, console, r)
    },
  }
class pr {
  constructor(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(r, u)
  }
  init(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = u.prefix || 'i18next:'),
      (this.logger = r || ev),
      (this.options = u),
      (this.debug = u.debug)
  }
  log() {
    for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++)
      u[s] = arguments[s]
    return this.forward(u, 'log', '', !0)
  }
  warn() {
    for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++)
      u[s] = arguments[s]
    return this.forward(u, 'warn', '', !0)
  }
  error() {
    for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++)
      u[s] = arguments[s]
    return this.forward(u, 'error', '')
  }
  deprecate() {
    for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++)
      u[s] = arguments[s]
    return this.forward(u, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(r, u, s, h) {
    return h && !this.debug
      ? null
      : (ve(r[0]) && (r[0] = `${s}${this.prefix} ${r[0]}`), this.logger[u](r))
  }
  create(r) {
    return new pr(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options,
    })
  }
  clone(r) {
    return (
      (r = r || this.options),
      (r.prefix = r.prefix || this.prefix),
      new pr(this.logger, r)
    )
  }
}
var Zt = new pr()
class br {
  constructor() {
    this.observers = {}
  }
  on(r, u) {
    return (
      r.split(' ').forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map())
        const h = this.observers[s].get(u) || 0
        this.observers[s].set(u, h + 1)
      }),
      this
    )
  }
  off(r, u) {
    if (this.observers[r]) {
      if (!u) {
        delete this.observers[r]
        return
      }
      this.observers[r].delete(u)
    }
  }
  emit(r) {
    for (
      var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), h = 1;
      h < u;
      h++
    )
      s[h - 1] = arguments[h]
    this.observers[r] &&
      Array.from(this.observers[r].entries()).forEach((b) => {
        let [x, O] = b
        for (let y = 0; y < O; y++) x(...s)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((b) => {
          let [x, O] = b
          for (let y = 0; y < O; y++) x.apply(x, [r, ...s])
        })
  }
}
class fh extends br {
  constructor(r) {
    let u =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' }
    super(),
      (this.data = r || {}),
      (this.options = u),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r)
  }
  removeNamespaces(r) {
    const u = this.options.ns.indexOf(r)
    u > -1 && this.options.ns.splice(u, 1)
  }
  getResource(r, u, s) {
    var y, M
    let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const g =
        h.keySeparator !== void 0 ? h.keySeparator : this.options.keySeparator,
      b =
        h.ignoreJSONStructure !== void 0
          ? h.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let x
    r.indexOf('.') > -1
      ? (x = r.split('.'))
      : ((x = [r, u]),
        s &&
          (Array.isArray(s)
            ? x.push(...s)
            : ve(s) && g
            ? x.push(...s.split(g))
            : x.push(s)))
    const O = hr(this.data, x)
    return (
      !O &&
        !u &&
        !s &&
        r.indexOf('.') > -1 &&
        ((r = x[0]), (u = x[1]), (s = x.slice(2).join('.'))),
      O || !b || !ve(s)
        ? O
        : no(
            (M = (y = this.data) == null ? void 0 : y[r]) == null
              ? void 0
              : M[u],
            s,
            g
          )
    )
  }
  addResource(r, u, s, h) {
    let g =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const b =
      g.keySeparator !== void 0 ? g.keySeparator : this.options.keySeparator
    let x = [r, u]
    s && (x = x.concat(b ? s.split(b) : s)),
      r.indexOf('.') > -1 && ((x = r.split('.')), (h = u), (u = x[1])),
      this.addNamespaces(u),
      ch(this.data, x, h),
      g.silent || this.emit('added', r, u, s, h)
  }
  addResources(r, u, s) {
    let h =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const g in s)
      (ve(s[g]) || Array.isArray(s[g])) &&
        this.addResource(r, u, g, s[g], { silent: !0 })
    h.silent || this.emit('added', r, u, s)
  }
  addResourceBundle(r, u, s, h, g) {
    let b =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      x = [r, u]
    r.indexOf('.') > -1 && ((x = r.split('.')), (h = s), (s = u), (u = x[1])),
      this.addNamespaces(u)
    let O = hr(this.data, x) || {}
    b.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      h ? Vh(O, s, g) : (O = { ...O, ...s }),
      ch(this.data, x, O),
      b.silent || this.emit('added', r, u, s)
  }
  removeResourceBundle(r, u) {
    this.hasResourceBundle(r, u) && delete this.data[r][u],
      this.removeNamespaces(u),
      this.emit('removed', r, u)
  }
  hasResourceBundle(r, u) {
    return this.getResource(r, u) !== void 0
  }
  getResourceBundle(r, u) {
    return u || (u = this.options.defaultNS), this.getResource(r, u)
  }
  getDataByLanguage(r) {
    return this.data[r]
  }
  hasLanguageSomeTranslations(r) {
    const u = this.getDataByLanguage(r)
    return !!((u && Object.keys(u)) || []).find(
      (h) => u[h] && Object.keys(u[h]).length > 0
    )
  }
  toJSON() {
    return this.data
  }
}
var Qh = {
  processors: {},
  addPostProcessor(c) {
    this.processors[c.name] = c
  },
  handle(c, r, u, s, h) {
    return (
      c.forEach((g) => {
        var b
        r =
          ((b = this.processors[g]) == null ? void 0 : b.process(r, u, s, h)) ??
          r
      }),
      r
    )
  },
}
const dh = {},
  hh = (c) => !ve(c) && typeof c != 'boolean' && typeof c != 'number'
class mr extends br {
  constructor(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      Qm(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        r,
        this
      ),
      (this.options = u),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Zt.create('translator'))
  }
  changeLanguage(r) {
    r && (this.language = r)
  }
  exists(r) {
    let u =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    if (r == null) return !1
    const s = this.resolve(r, u)
    return (s == null ? void 0 : s.res) !== void 0
  }
  extractFromKey(r, u) {
    let s = u.nsSeparator !== void 0 ? u.nsSeparator : this.options.nsSeparator
    s === void 0 && (s = ':')
    const h =
      u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator
    let g = u.ns || this.options.defaultNS || []
    const b = s && r.indexOf(s) > -1,
      x =
        !this.options.userDefinedKeySeparator &&
        !u.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !u.nsSeparator &&
        !Im(r, s, h)
    if (b && !x) {
      const O = r.match(this.interpolator.nestingRegexp)
      if (O && O.length > 0) return { key: r, namespaces: ve(g) ? [g] : g }
      const y = r.split(s)
      ;(s !== h || (s === h && this.options.ns.indexOf(y[0]) > -1)) &&
        (g = y.shift()),
        (r = y.join(h))
    }
    return { key: r, namespaces: ve(g) ? [g] : g }
  }
  translate(r, u, s) {
    if (
      (typeof u != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (u = this.options.overloadTranslationOptionHandler(arguments)),
      typeof u == 'object' && (u = { ...u }),
      u || (u = {}),
      r == null)
    )
      return ''
    Array.isArray(r) || (r = [String(r)])
    const h =
        u.returnDetails !== void 0
          ? u.returnDetails
          : this.options.returnDetails,
      g =
        u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator,
      { key: b, namespaces: x } = this.extractFromKey(r[r.length - 1], u),
      O = x[x.length - 1],
      y = u.lng || this.language,
      M = u.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if ((y == null ? void 0 : y.toLowerCase()) === 'cimode') {
      if (M) {
        const q = u.nsSeparator || this.options.nsSeparator
        return h
          ? {
              res: `${O}${q}${b}`,
              usedKey: b,
              exactUsedKey: b,
              usedLng: y,
              usedNS: O,
              usedParams: this.getUsedParamsDetails(u),
            }
          : `${O}${q}${b}`
      }
      return h
        ? {
            res: b,
            usedKey: b,
            exactUsedKey: b,
            usedLng: y,
            usedNS: O,
            usedParams: this.getUsedParamsDetails(u),
          }
        : b
    }
    const Q = this.resolve(r, u)
    let X = Q == null ? void 0 : Q.res
    const ae = (Q == null ? void 0 : Q.usedKey) || b,
      ee = (Q == null ? void 0 : Q.exactUsedKey) || b,
      k = ['[object Number]', '[object Function]', '[object RegExp]'],
      le = u.joinArrays !== void 0 ? u.joinArrays : this.options.joinArrays,
      ce = !this.i18nFormat || this.i18nFormat.handleAsObject,
      oe = u.count !== void 0 && !ve(u.count),
      fe = mr.hasDefaultValue(u),
      ge = oe ? this.pluralResolver.getSuffix(y, u.count, u) : '',
      E =
        u.ordinal && oe
          ? this.pluralResolver.getSuffix(y, u.count, { ordinal: !1 })
          : '',
      D = oe && !u.ordinal && u.count === 0,
      j =
        (D && u[`defaultValue${this.options.pluralSeparator}zero`]) ||
        u[`defaultValue${ge}`] ||
        u[`defaultValue${E}`] ||
        u.defaultValue
    let K = X
    ce && !X && fe && (K = j)
    const A = hh(K),
      v = Object.prototype.toString.apply(K)
    if (ce && K && A && k.indexOf(v) < 0 && !(ve(le) && Array.isArray(K))) {
      if (!u.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          )
        const q = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(ae, K, { ...u, ns: x })
          : `key '${b} (${this.language})' returned an object instead of string.`
        return h
          ? ((Q.res = q), (Q.usedParams = this.getUsedParamsDetails(u)), Q)
          : q
      }
      if (g) {
        const q = Array.isArray(K),
          V = q ? [] : {},
          L = q ? ee : ae
        for (const U in K)
          if (Object.prototype.hasOwnProperty.call(K, U)) {
            const I = `${L}${g}${U}`
            fe && !X
              ? (V[U] = this.translate(I, {
                  ...u,
                  defaultValue: hh(j) ? j[U] : void 0,
                  joinArrays: !1,
                  ns: x,
                }))
              : (V[U] = this.translate(I, { ...u, joinArrays: !1, ns: x })),
              V[U] === I && (V[U] = K[U])
          }
        X = V
      }
    } else if (ce && ve(le) && Array.isArray(X))
      (X = X.join(le)), X && (X = this.extendTranslation(X, r, u, s))
    else {
      let q = !1,
        V = !1
      !this.isValidLookup(X) && fe && ((q = !0), (X = j)),
        this.isValidLookup(X) || ((V = !0), (X = b))
      const U =
          (u.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          V
            ? void 0
            : X,
        I = fe && j !== X && this.options.updateMissing
      if (V || q || I) {
        if (
          (this.logger.log(I ? 'updateKey' : 'missingKey', y, O, b, I ? j : X),
          g)
        ) {
          const T = this.resolve(b, { ...u, keySeparator: !1 })
          T &&
            T.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            )
        }
        let _ = []
        const f = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          u.lng || this.language
        )
        if (this.options.saveMissingTo === 'fallback' && f && f[0])
          for (let T = 0; T < f.length; T++) _.push(f[T])
        else
          this.options.saveMissingTo === 'all'
            ? (_ = this.languageUtils.toResolveHierarchy(
                u.lng || this.language
              ))
            : _.push(u.lng || this.language)
        const te = (T, o, m) => {
          var N
          const R = fe && m !== X ? m : U
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(T, O, o, R, I, u)
            : (N = this.backendConnector) != null &&
              N.saveMissing &&
              this.backendConnector.saveMissing(T, O, o, R, I, u),
            this.emit('missingKey', T, O, o, X)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && oe
            ? _.forEach((T) => {
                const o = this.pluralResolver.getSuffixes(T, u)
                D &&
                  u[`defaultValue${this.options.pluralSeparator}zero`] &&
                  o.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  o.push(`${this.options.pluralSeparator}zero`),
                  o.forEach((m) => {
                    te([T], b + m, u[`defaultValue${m}`] || j)
                  })
              })
            : te(_, b, j))
      }
      ;(X = this.extendTranslation(X, r, u, Q, s)),
        V &&
          X === b &&
          this.options.appendNamespaceToMissingKey &&
          (X = `${O}:${b}`),
        (V || q) &&
          this.options.parseMissingKeyHandler &&
          (X = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${O}:${b}` : b,
            q ? X : void 0
          ))
    }
    return h
      ? ((Q.res = X), (Q.usedParams = this.getUsedParamsDetails(u)), Q)
      : X
  }
  extendTranslation(r, u, s, h, g) {
    var y, M
    var b = this
    if ((y = this.i18nFormat) != null && y.parse)
      r = this.i18nFormat.parse(
        r,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || h.usedLng,
        h.usedNS,
        h.usedKey,
        { resolved: h }
      )
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        })
      const Q =
        ve(r) &&
        (((M = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : M.skipOnVariables) !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let X
      if (Q) {
        const ee = r.match(this.interpolator.nestingRegexp)
        X = ee && ee.length
      }
      let ae = s.replace && !ve(s.replace) ? s.replace : s
      if (
        (this.options.interpolation.defaultVariables &&
          (ae = { ...this.options.interpolation.defaultVariables, ...ae }),
        (r = this.interpolator.interpolate(
          r,
          ae,
          s.lng || this.language || h.usedLng,
          s
        )),
        Q)
      ) {
        const ee = r.match(this.interpolator.nestingRegexp),
          k = ee && ee.length
        X < k && (s.nest = !1)
      }
      !s.lng && h && h.res && (s.lng = this.language || h.usedLng),
        s.nest !== !1 &&
          (r = this.interpolator.nest(
            r,
            function () {
              for (
                var ee = arguments.length, k = new Array(ee), le = 0;
                le < ee;
                le++
              )
                k[le] = arguments[le]
              return (g == null ? void 0 : g[0]) === k[0] && !s.context
                ? (b.logger.warn(
                    `It seems you are nesting recursively key: ${k[0]} in key: ${u[0]}`
                  ),
                  null)
                : b.translate(...k, u)
            },
            s
          )),
        s.interpolation && this.interpolator.reset()
    }
    const x = s.postProcess || this.options.postProcess,
      O = ve(x) ? [x] : x
    return (
      r != null &&
        O != null &&
        O.length &&
        s.applyPostProcessor !== !1 &&
        (r = Qh.handle(
          O,
          r,
          u,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...h,
                  usedParams: this.getUsedParamsDetails(s),
                },
                ...s,
              }
            : s,
          this
        )),
      r
    )
  }
  resolve(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      h,
      g,
      b,
      x
    return (
      ve(r) && (r = [r]),
      r.forEach((O) => {
        if (this.isValidLookup(s)) return
        const y = this.extractFromKey(O, u),
          M = y.key
        h = M
        let Q = y.namespaces
        this.options.fallbackNS && (Q = Q.concat(this.options.fallbackNS))
        const X = u.count !== void 0 && !ve(u.count),
          ae = X && !u.ordinal && u.count === 0,
          ee =
            u.context !== void 0 &&
            (ve(u.context) || typeof u.context == 'number') &&
            u.context !== '',
          k = u.lngs
            ? u.lngs
            : this.languageUtils.toResolveHierarchy(
                u.lng || this.language,
                u.fallbackLng
              )
        Q.forEach((le) => {
          var ce, oe
          this.isValidLookup(s) ||
            ((x = le),
            !dh[`${k[0]}-${le}`] &&
              (ce = this.utils) != null &&
              ce.hasLoadedNamespace &&
              !((oe = this.utils) != null && oe.hasLoadedNamespace(x)) &&
              ((dh[`${k[0]}-${le}`] = !0),
              this.logger.warn(
                `key "${h}" for languages "${k.join(
                  ', '
                )}" won't get resolved as namespace "${x}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            k.forEach((fe) => {
              var D
              if (this.isValidLookup(s)) return
              b = fe
              const ge = [M]
              if ((D = this.i18nFormat) != null && D.addLookupKeys)
                this.i18nFormat.addLookupKeys(ge, M, fe, le, u)
              else {
                let j
                X && (j = this.pluralResolver.getSuffix(fe, u.count, u))
                const K = `${this.options.pluralSeparator}zero`,
                  A = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (X &&
                    (ge.push(M + j),
                    u.ordinal &&
                      j.indexOf(A) === 0 &&
                      ge.push(M + j.replace(A, this.options.pluralSeparator)),
                    ae && ge.push(M + K)),
                  ee)
                ) {
                  const v = `${M}${this.options.contextSeparator}${u.context}`
                  ge.push(v),
                    X &&
                      (ge.push(v + j),
                      u.ordinal &&
                        j.indexOf(A) === 0 &&
                        ge.push(v + j.replace(A, this.options.pluralSeparator)),
                      ae && ge.push(v + K))
                }
              }
              let E
              for (; (E = ge.pop()); )
                this.isValidLookup(s) ||
                  ((g = E), (s = this.getResource(fe, le, E, u)))
            }))
        })
      }),
      { res: s, usedKey: h, exactUsedKey: g, usedLng: b, usedNS: x }
    )
  }
  isValidLookup(r) {
    return (
      r !== void 0 &&
      !(!this.options.returnNull && r === null) &&
      !(!this.options.returnEmptyString && r === '')
    )
  }
  getResource(r, u, s) {
    var g
    let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return (g = this.i18nFormat) != null && g.getResource
      ? this.i18nFormat.getResource(r, u, s, h)
      : this.resourceStore.getResource(r, u, s, h)
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const u = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      s = r.replace && !ve(r.replace)
    let h = s ? r.replace : r
    if (
      (s && typeof r.count < 'u' && (h.count = r.count),
      this.options.interpolation.defaultVariables &&
        (h = { ...this.options.interpolation.defaultVariables, ...h }),
      !s)
    ) {
      h = { ...h }
      for (const g of u) delete h[g]
    }
    return h
  }
  static hasDefaultValue(r) {
    const u = 'defaultValue'
    for (const s in r)
      if (
        Object.prototype.hasOwnProperty.call(r, s) &&
        u === s.substring(0, u.length) &&
        r[s] !== void 0
      )
        return !0
    return !1
  }
}
class gh {
  constructor(r) {
    ;(this.options = r),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Zt.create('languageUtils'))
  }
  getScriptPartFromCode(r) {
    if (((r = gr(r)), !r || r.indexOf('-') < 0)) return null
    const u = r.split('-')
    return u.length === 2 || (u.pop(), u[u.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(u.join('-'))
  }
  getLanguagePartFromCode(r) {
    if (((r = gr(r)), !r || r.indexOf('-') < 0)) return r
    const u = r.split('-')
    return this.formatLanguageCode(u[0])
  }
  formatLanguageCode(r) {
    if (ve(r) && r.indexOf('-') > -1) {
      let u
      try {
        u = Intl.getCanonicalLocales(r)[0]
      } catch {}
      return (
        u && this.options.lowerCaseLng && (u = u.toLowerCase()),
        u || (this.options.lowerCaseLng ? r.toLowerCase() : r)
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? r.toLowerCase()
      : r
  }
  isSupportedCode(r) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (r = this.getLanguagePartFromCode(r)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(r) > -1
    )
  }
  getBestMatchFromCodes(r) {
    if (!r) return null
    let u
    return (
      r.forEach((s) => {
        if (u) return
        const h = this.formatLanguageCode(s)
        ;(!this.options.supportedLngs || this.isSupportedCode(h)) && (u = h)
      }),
      !u &&
        this.options.supportedLngs &&
        r.forEach((s) => {
          if (u) return
          const h = this.getLanguagePartFromCode(s)
          if (this.isSupportedCode(h)) return (u = h)
          u = this.options.supportedLngs.find((g) => {
            if (g === h) return g
            if (
              !(g.indexOf('-') < 0 && h.indexOf('-') < 0) &&
              ((g.indexOf('-') > 0 &&
                h.indexOf('-') < 0 &&
                g.substring(0, g.indexOf('-')) === h) ||
                (g.indexOf(h) === 0 && h.length > 1))
            )
              return g
          })
        }),
      u || (u = this.getFallbackCodes(this.options.fallbackLng)[0]),
      u
    )
  }
  getFallbackCodes(r, u) {
    if (!r) return []
    if (
      (typeof r == 'function' && (r = r(u)),
      ve(r) && (r = [r]),
      Array.isArray(r))
    )
      return r
    if (!u) return r.default || []
    let s = r[u]
    return (
      s || (s = r[this.getScriptPartFromCode(u)]),
      s || (s = r[this.formatLanguageCode(u)]),
      s || (s = r[this.getLanguagePartFromCode(u)]),
      s || (s = r.default),
      s || []
    )
  }
  toResolveHierarchy(r, u) {
    const s = this.getFallbackCodes(u || this.options.fallbackLng || [], r),
      h = [],
      g = (b) => {
        b &&
          (this.isSupportedCode(b)
            ? h.push(b)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${b}`
              ))
      }
    return (
      ve(r) && (r.indexOf('-') > -1 || r.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            g(this.formatLanguageCode(r)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            g(this.getScriptPartFromCode(r)),
          this.options.load !== 'currentOnly' &&
            g(this.getLanguagePartFromCode(r)))
        : ve(r) && g(this.formatLanguageCode(r)),
      s.forEach((b) => {
        h.indexOf(b) < 0 && g(this.formatLanguageCode(b))
      }),
      h
    )
  }
}
const ph = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  mh = {
    select: (c) => (c === 1 ? 'one' : 'other'),
    resolvedOptions: () => ({ pluralCategories: ['one', 'other'] }),
  }
class tv {
  constructor(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = r),
      (this.options = u),
      (this.logger = Zt.create('pluralResolver')),
      (this.pluralRulesCache = {})
  }
  addRule(r, u) {
    this.rules[r] = u
  }
  clearCache() {
    this.pluralRulesCache = {}
  }
  getRule(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const s = gr(r === 'dev' ? 'en' : r),
      h = u.ordinal ? 'ordinal' : 'cardinal',
      g = JSON.stringify({ cleanedCode: s, type: h })
    if (g in this.pluralRulesCache) return this.pluralRulesCache[g]
    let b
    try {
      b = new Intl.PluralRules(s, { type: h })
    } catch {
      if (!Intl)
        return (
          this.logger.error('No Intl support, please use an Intl polyfill!'), mh
        )
      if (!r.match(/-|_/)) return mh
      const O = this.languageUtils.getLanguagePartFromCode(r)
      b = this.getRule(O, u)
    }
    return (this.pluralRulesCache[g] = b), b
  }
  needsPlural(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = this.getRule(r, u)
    return (
      s || (s = this.getRule('dev', u)),
      (s == null ? void 0 : s.resolvedOptions().pluralCategories.length) > 1
    )
  }
  getPluralFormsOfKey(r, u) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(r, s).map((h) => `${u}${h}`)
  }
  getSuffixes(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = this.getRule(r, u)
    return (
      s || (s = this.getRule('dev', u)),
      s
        ? s
            .resolvedOptions()
            .pluralCategories.sort((h, g) => ph[h] - ph[g])
            .map(
              (h) =>
                `${this.options.prepend}${
                  u.ordinal ? `ordinal${this.options.prepend}` : ''
                }${h}`
            )
        : []
    )
  }
  getSuffix(r, u) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const h = this.getRule(r, s)
    return h
      ? `${this.options.prepend}${
          s.ordinal ? `ordinal${this.options.prepend}` : ''
        }${h.select(u)}`
      : (this.logger.warn(`no plural rule found for: ${r}`),
        this.getSuffix('dev', u, s))
  }
}
const vh = function (c, r, u) {
    let s =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      h = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      g = Km(c, r, u)
    return (
      !g &&
        h &&
        ve(u) &&
        ((g = no(c, u, s)), g === void 0 && (g = no(r, u, s))),
      g
    )
  },
  Bs = (c) => c.replace(/\$/g, '$$$$')
class nv {
  constructor() {
    var u
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Zt.create('interpolator')),
      (this.options = r),
      (this.format =
        ((u = r == null ? void 0 : r.interpolation) == null
          ? void 0
          : u.format) || ((s) => s)),
      this.init(r)
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    r.interpolation || (r.interpolation = { escapeValue: !0 })
    const {
      escape: u,
      escapeValue: s,
      useRawValueToEscape: h,
      prefix: g,
      prefixEscaped: b,
      suffix: x,
      suffixEscaped: O,
      formatSeparator: y,
      unescapeSuffix: M,
      unescapePrefix: Q,
      nestingPrefix: X,
      nestingPrefixEscaped: ae,
      nestingSuffix: ee,
      nestingSuffixEscaped: k,
      nestingOptionsSeparator: le,
      maxReplaces: ce,
      alwaysFormat: oe,
    } = r.interpolation
    ;(this.escape = u !== void 0 ? u : Pm),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = h !== void 0 ? h : !1),
      (this.prefix = g ? Va(g) : b || '{{'),
      (this.suffix = x ? Va(x) : O || '}}'),
      (this.formatSeparator = y || ','),
      (this.unescapePrefix = M ? '' : Q || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : M || ''),
      (this.nestingPrefix = X ? Va(X) : ae || Va('$t(')),
      (this.nestingSuffix = ee ? Va(ee) : k || Va(')')),
      (this.nestingOptionsSeparator = le || ','),
      (this.maxReplaces = ce || 1e3),
      (this.alwaysFormat = oe !== void 0 ? oe : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const r = (u, s) =>
      (u == null ? void 0 : u.source) === s
        ? ((u.lastIndex = 0), u)
        : new RegExp(s, 'g')
    ;(this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = r(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = r(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ))
  }
  interpolate(r, u, s, h) {
    var ae
    let g, b, x
    const O =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      y = (ee) => {
        if (ee.indexOf(this.formatSeparator) < 0) {
          const oe = vh(
            u,
            O,
            ee,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          )
          return this.alwaysFormat
            ? this.format(oe, void 0, s, { ...h, ...u, interpolationkey: ee })
            : oe
        }
        const k = ee.split(this.formatSeparator),
          le = k.shift().trim(),
          ce = k.join(this.formatSeparator).trim()
        return this.format(
          vh(
            u,
            O,
            le,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          ce,
          s,
          { ...h, ...u, interpolationkey: le }
        )
      }
    this.resetRegExp()
    const M =
        (h == null ? void 0 : h.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      Q =
        ((ae = h == null ? void 0 : h.interpolation) == null
          ? void 0
          : ae.skipOnVariables) !== void 0
          ? h.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (ee) => Bs(ee) },
        {
          regex: this.regexp,
          safeValue: (ee) => (this.escapeValue ? Bs(this.escape(ee)) : Bs(ee)),
        },
      ].forEach((ee) => {
        for (x = 0; (g = ee.regex.exec(r)); ) {
          const k = g[1].trim()
          if (((b = y(k)), b === void 0))
            if (typeof M == 'function') {
              const ce = M(r, g, h)
              b = ve(ce) ? ce : ''
            } else if (h && Object.prototype.hasOwnProperty.call(h, k)) b = ''
            else if (Q) {
              b = g[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${k} for interpolating ${r}`
              ),
                (b = '')
          else !ve(b) && !this.useRawValueToEscape && (b = uh(b))
          const le = ee.safeValue(b)
          if (
            ((r = r.replace(g[0], le)),
            Q
              ? ((ee.regex.lastIndex += b.length),
                (ee.regex.lastIndex -= g[0].length))
              : (ee.regex.lastIndex = 0),
            x++,
            x >= this.maxReplaces)
          )
            break
        }
      }),
      r
    )
  }
  nest(r, u) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      h,
      g,
      b
    const x = (O, y) => {
      const M = this.nestingOptionsSeparator
      if (O.indexOf(M) < 0) return O
      const Q = O.split(new RegExp(`${M}[ ]*{`))
      let X = `{${Q[1]}`
      ;(O = Q[0]), (X = this.interpolate(X, b))
      const ae = X.match(/'/g),
        ee = X.match(/"/g)
      ;((((ae == null ? void 0 : ae.length) ?? 0) % 2 === 0 && !ee) ||
        ee.length % 2 !== 0) &&
        (X = X.replace(/'/g, '"'))
      try {
        ;(b = JSON.parse(X)), y && (b = { ...y, ...b })
      } catch (k) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${O}`,
            k
          ),
          `${O}${M}${X}`
        )
      }
      return (
        b.defaultValue &&
          b.defaultValue.indexOf(this.prefix) > -1 &&
          delete b.defaultValue,
        O
      )
    }
    for (; (h = this.nestingRegexp.exec(r)); ) {
      let O = []
      ;(b = { ...s }),
        (b = b.replace && !ve(b.replace) ? b.replace : b),
        (b.applyPostProcessor = !1),
        delete b.defaultValue
      let y = !1
      if (h[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(h[1])) {
        const M = h[1].split(this.formatSeparator).map((Q) => Q.trim())
        ;(h[1] = M.shift()), (O = M), (y = !0)
      }
      if (((g = u(x.call(this, h[1].trim(), b), b)), g && h[0] === r && !ve(g)))
        return g
      ve(g) || (g = uh(g)),
        g ||
          (this.logger.warn(`missed to resolve ${h[1]} for nesting ${r}`),
          (g = '')),
        y &&
          (g = O.reduce(
            (M, Q) =>
              this.format(M, Q, s.lng, { ...s, interpolationkey: h[1].trim() }),
            g.trim()
          )),
        (r = r.replace(h[0], g)),
        (this.regexp.lastIndex = 0)
    }
    return r
  }
}
const av = (c) => {
    let r = c.toLowerCase().trim()
    const u = {}
    if (c.indexOf('(') > -1) {
      const s = c.split('(')
      r = s[0].toLowerCase().trim()
      const h = s[1].substring(0, s[1].length - 1)
      r === 'currency' && h.indexOf(':') < 0
        ? u.currency || (u.currency = h.trim())
        : r === 'relativetime' && h.indexOf(':') < 0
        ? u.range || (u.range = h.trim())
        : h.split(';').forEach((b) => {
            if (b) {
              const [x, ...O] = b.split(':'),
                y = O.join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                M = x.trim()
              u[M] || (u[M] = y),
                y === 'false' && (u[M] = !1),
                y === 'true' && (u[M] = !0),
                isNaN(y) || (u[M] = parseInt(y, 10))
            }
          })
    }
    return { formatName: r, formatOptions: u }
  },
  Qa = (c) => {
    const r = {}
    return (u, s, h) => {
      let g = h
      h &&
        h.interpolationkey &&
        h.formatParams &&
        h.formatParams[h.interpolationkey] &&
        h[h.interpolationkey] &&
        (g = { ...g, [h.interpolationkey]: void 0 })
      const b = s + JSON.stringify(g)
      let x = r[b]
      return x || ((x = c(gr(s), h)), (r[b] = x)), x(u)
    }
  }
class iv {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Zt.create('formatter')),
      (this.options = r),
      (this.formats = {
        number: Qa((u, s) => {
          const h = new Intl.NumberFormat(u, { ...s })
          return (g) => h.format(g)
        }),
        currency: Qa((u, s) => {
          const h = new Intl.NumberFormat(u, { ...s, style: 'currency' })
          return (g) => h.format(g)
        }),
        datetime: Qa((u, s) => {
          const h = new Intl.DateTimeFormat(u, { ...s })
          return (g) => h.format(g)
        }),
        relativetime: Qa((u, s) => {
          const h = new Intl.RelativeTimeFormat(u, { ...s })
          return (g) => h.format(g, s.range || 'day')
        }),
        list: Qa((u, s) => {
          const h = new Intl.ListFormat(u, { ...s })
          return (g) => h.format(g)
        }),
      }),
      this.init(r)
  }
  init(r) {
    let u =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    this.formatSeparator = u.interpolation.formatSeparator || ','
  }
  add(r, u) {
    this.formats[r.toLowerCase().trim()] = u
  }
  addCached(r, u) {
    this.formats[r.toLowerCase().trim()] = Qa(u)
  }
  format(r, u, s) {
    let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const g = u.split(this.formatSeparator)
    if (
      g.length > 1 &&
      g[0].indexOf('(') > 1 &&
      g[0].indexOf(')') < 0 &&
      g.find((x) => x.indexOf(')') > -1)
    ) {
      const x = g.findIndex((O) => O.indexOf(')') > -1)
      g[0] = [g[0], ...g.splice(1, x)].join(this.formatSeparator)
    }
    return g.reduce((x, O) => {
      var Q
      const { formatName: y, formatOptions: M } = av(O)
      if (this.formats[y]) {
        let X = x
        try {
          const ae =
              ((Q = h == null ? void 0 : h.formatParams) == null
                ? void 0
                : Q[h.interpolationkey]) || {},
            ee = ae.locale || ae.lng || h.locale || h.lng || s
          X = this.formats[y](x, ee, { ...M, ...h, ...ae })
        } catch (ae) {
          this.logger.warn(ae)
        }
        return X
      } else this.logger.warn(`there was no format function for ${y}`)
      return x
    }, r)
  }
}
const lv = (c, r) => {
  c.pending[r] !== void 0 && (delete c.pending[r], c.pendingCount--)
}
class rv extends br {
  constructor(r, u, s) {
    var g, b
    let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = r),
      (this.store = u),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = h),
      (this.logger = Zt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = h.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = h.maxRetries >= 0 ? h.maxRetries : 5),
      (this.retryTimeout = h.retryTimeout >= 1 ? h.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (b = (g = this.backend) == null ? void 0 : g.init) == null ||
        b.call(g, s, h.backend, h)
  }
  queueLoad(r, u, s, h) {
    const g = {},
      b = {},
      x = {},
      O = {}
    return (
      r.forEach((y) => {
        let M = !0
        u.forEach((Q) => {
          const X = `${y}|${Q}`
          !s.reload && this.store.hasResourceBundle(y, Q)
            ? (this.state[X] = 2)
            : this.state[X] < 0 ||
              (this.state[X] === 1
                ? b[X] === void 0 && (b[X] = !0)
                : ((this.state[X] = 1),
                  (M = !1),
                  b[X] === void 0 && (b[X] = !0),
                  g[X] === void 0 && (g[X] = !0),
                  O[Q] === void 0 && (O[Q] = !0)))
        }),
          M || (x[y] = !0)
      }),
      (Object.keys(g).length || Object.keys(b).length) &&
        this.queue.push({
          pending: b,
          pendingCount: Object.keys(b).length,
          loaded: {},
          errors: [],
          callback: h,
        }),
      {
        toLoad: Object.keys(g),
        pending: Object.keys(b),
        toLoadLanguages: Object.keys(x),
        toLoadNamespaces: Object.keys(O),
      }
    )
  }
  loaded(r, u, s) {
    const h = r.split('|'),
      g = h[0],
      b = h[1]
    u && this.emit('failedLoading', g, b, u),
      !u &&
        s &&
        this.store.addResourceBundle(g, b, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[r] = u ? -1 : 2),
      u && s && (this.state[r] = 0)
    const x = {}
    this.queue.forEach((O) => {
      Zm(O.loaded, [g], b),
        lv(O, r),
        u && O.errors.push(u),
        O.pendingCount === 0 &&
          !O.done &&
          (Object.keys(O.loaded).forEach((y) => {
            x[y] || (x[y] = {})
            const M = O.loaded[y]
            M.length &&
              M.forEach((Q) => {
                x[y][Q] === void 0 && (x[y][Q] = !0)
              })
          }),
          (O.done = !0),
          O.errors.length ? O.callback(O.errors) : O.callback())
    }),
      this.emit('loaded', x),
      (this.queue = this.queue.filter((O) => !O.done))
  }
  read(r, u, s) {
    let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      g =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      b = arguments.length > 5 ? arguments[5] : void 0
    if (!r.length) return b(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: r,
        ns: u,
        fcName: s,
        tried: h,
        wait: g,
        callback: b,
      })
      return
    }
    this.readingCalls++
    const x = (y, M) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const Q = this.waitingReads.shift()
          this.read(Q.lng, Q.ns, Q.fcName, Q.tried, Q.wait, Q.callback)
        }
        if (y && M && h < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, r, u, s, h + 1, g * 2, b)
          }, g)
          return
        }
        b(y, M)
      },
      O = this.backend[s].bind(this.backend)
    if (O.length === 2) {
      try {
        const y = O(r, u)
        y && typeof y.then == 'function'
          ? y.then((M) => x(null, M)).catch(x)
          : x(null, y)
      } catch (y) {
        x(y)
      }
      return
    }
    return O(r, u, x)
  }
  prepareLoading(r, u) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      h = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        h && h()
      )
    ve(r) && (r = this.languageUtils.toResolveHierarchy(r)), ve(u) && (u = [u])
    const g = this.queueLoad(r, u, s, h)
    if (!g.toLoad.length) return g.pending.length || h(), null
    g.toLoad.forEach((b) => {
      this.loadOne(b)
    })
  }
  load(r, u, s) {
    this.prepareLoading(r, u, {}, s)
  }
  reload(r, u, s) {
    this.prepareLoading(r, u, { reload: !0 }, s)
  }
  loadOne(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const s = r.split('|'),
      h = s[0],
      g = s[1]
    this.read(h, g, 'read', void 0, void 0, (b, x) => {
      b &&
        this.logger.warn(
          `${u}loading namespace ${g} for language ${h} failed`,
          b
        ),
        !b &&
          x &&
          this.logger.log(`${u}loaded namespace ${g} for language ${h}`, x),
        this.loaded(r, b, x)
    })
  }
  saveMissing(r, u, s, h, g) {
    var O, y, M, Q, X
    let b = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      x =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {}
    if (
      (y = (O = this.services) == null ? void 0 : O.utils) != null &&
      y.hasLoadedNamespace &&
      !(
        (Q = (M = this.services) == null ? void 0 : M.utils) != null &&
        Q.hasLoadedNamespace(u)
      )
    ) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${u}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      )
      return
    }
    if (!(s == null || s === '')) {
      if ((X = this.backend) != null && X.create) {
        const ae = { ...b, isUpdate: g },
          ee = this.backend.create.bind(this.backend)
        if (ee.length < 6)
          try {
            let k
            ee.length === 5 ? (k = ee(r, u, s, h, ae)) : (k = ee(r, u, s, h)),
              k && typeof k.then == 'function'
                ? k.then((le) => x(null, le)).catch(x)
                : x(null, k)
          } catch (k) {
            x(k)
          }
        else ee(r, u, s, h, x, ae)
      }
      !r || !r[0] || this.store.addResource(r[0], u, s, h)
    }
  }
}
const yh = () => ({
    debug: !1,
    initAsync: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (c) => {
      let r = {}
      if (
        (typeof c[1] == 'object' && (r = c[1]),
        ve(c[1]) && (r.defaultValue = c[1]),
        ve(c[2]) && (r.tDescription = c[2]),
        typeof c[2] == 'object' || typeof c[3] == 'object')
      ) {
        const u = c[3] || c[2]
        Object.keys(u).forEach((s) => {
          r[s] = u[s]
        })
      }
      return r
    },
    interpolation: {
      escapeValue: !0,
      format: (c) => c,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  bh = (c) => {
    var r, u
    return (
      ve(c.ns) && (c.ns = [c.ns]),
      ve(c.fallbackLng) && (c.fallbackLng = [c.fallbackLng]),
      ve(c.fallbackNS) && (c.fallbackNS = [c.fallbackNS]),
      ((u = (r = c.supportedLngs) == null ? void 0 : r.indexOf) == null
        ? void 0
        : u.call(r, 'cimode')) < 0 &&
        (c.supportedLngs = c.supportedLngs.concat(['cimode'])),
      typeof c.initImmediate == 'boolean' && (c.initAsync = c.initImmediate),
      c
    )
  },
  dr = () => {},
  uv = (c) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(c)).forEach((u) => {
      typeof c[u] == 'function' && (c[u] = c[u].bind(c))
    })
  }
class Pi extends br {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      u = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = bh(r)),
      (this.services = {}),
      (this.logger = Zt),
      (this.modules = { external: [] }),
      uv(this),
      u && !this.isInitialized && !r.isClone)
    ) {
      if (!this.options.initAsync) return this.init(r, u), this
      setTimeout(() => {
        this.init(r, u)
      }, 0)
    }
  }
  init() {
    var r = this
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof u == 'function' && ((s = u), (u = {})),
      u.defaultNS == null &&
        u.ns &&
        (ve(u.ns)
          ? (u.defaultNS = u.ns)
          : u.ns.indexOf('translation') < 0 && (u.defaultNS = u.ns[0]))
    const h = yh()
    ;(this.options = { ...h, ...this.options, ...bh(u) }),
      (this.options.interpolation = {
        ...h.interpolation,
        ...this.options.interpolation,
      }),
      u.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = u.keySeparator),
      u.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = u.nsSeparator)
    const g = (M) => (M ? (typeof M == 'function' ? new M() : M) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? Zt.init(g(this.modules.logger), this.options)
        : Zt.init(null, this.options)
      let M
      this.modules.formatter ? (M = this.modules.formatter) : (M = iv)
      const Q = new gh(this.options)
      this.store = new fh(this.options.resources, this.options)
      const X = this.services
      ;(X.logger = Zt),
        (X.resourceStore = this.store),
        (X.languageUtils = Q),
        (X.pluralResolver = new tv(Q, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        M &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === h.interpolation.format) &&
          ((X.formatter = g(M)),
          X.formatter.init(X, this.options),
          (this.options.interpolation.format = X.formatter.format.bind(
            X.formatter
          ))),
        (X.interpolator = new nv(this.options)),
        (X.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (X.backendConnector = new rv(
          g(this.modules.backend),
          X.resourceStore,
          X,
          this.options
        )),
        X.backendConnector.on('*', function (ae) {
          for (
            var ee = arguments.length,
              k = new Array(ee > 1 ? ee - 1 : 0),
              le = 1;
            le < ee;
            le++
          )
            k[le - 1] = arguments[le]
          r.emit(ae, ...k)
        }),
        this.modules.languageDetector &&
          ((X.languageDetector = g(this.modules.languageDetector)),
          X.languageDetector.init &&
            X.languageDetector.init(X, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((X.i18nFormat = g(this.modules.i18nFormat)),
          X.i18nFormat.init && X.i18nFormat.init(this)),
        (this.translator = new mr(this.services, this.options)),
        this.translator.on('*', function (ae) {
          for (
            var ee = arguments.length,
              k = new Array(ee > 1 ? ee - 1 : 0),
              le = 1;
            le < ee;
            le++
          )
            k[le - 1] = arguments[le]
          r.emit(ae, ...k)
        }),
        this.modules.external.forEach((ae) => {
          ae.init && ae.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = dr),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const M = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      )
      M.length > 0 && M[0] !== 'dev' && (this.options.lng = M[0])
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((M) => {
        this[M] = function () {
          return r.store[M](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((M) => {
        this[M] = function () {
          return r.store[M](...arguments), r
        }
      })
    const O = Qi(),
      y = () => {
        const M = (Q, X) => {
          ;(this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            O.resolve(X),
            s(Q, X)
        }
        if (this.languages && !this.isInitialized)
          return M(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, M)
      }
    return (
      this.options.resources || !this.options.initAsync
        ? y()
        : setTimeout(y, 0),
      O
    )
  }
  loadResources(r) {
    var g, b
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dr
    const h = ve(r) ? r : this.language
    if (
      (typeof r == 'function' && (s = r),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (h == null ? void 0 : h.toLowerCase()) === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s()
      const x = [],
        O = (y) => {
          if (!y || y === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(y).forEach((Q) => {
            Q !== 'cimode' && x.indexOf(Q) < 0 && x.push(Q)
          })
        }
      h
        ? O(h)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((M) => O(M)),
        (b = (g = this.options.preload) == null ? void 0 : g.forEach) == null ||
          b.call(g, (y) => O(y)),
        this.services.backendConnector.load(x, this.options.ns, (y) => {
          !y &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            s(y)
        })
    } else s(null)
  }
  reloadResources(r, u, s) {
    const h = Qi()
    return (
      typeof r == 'function' && ((s = r), (r = void 0)),
      typeof u == 'function' && ((s = u), (u = void 0)),
      r || (r = this.languages),
      u || (u = this.options.ns),
      s || (s = dr),
      this.services.backendConnector.reload(r, u, (g) => {
        h.resolve(), s(g)
      }),
      h
    )
  }
  use(r) {
    if (!r)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      )
    if (!r.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      )
    return (
      r.type === 'backend' && (this.modules.backend = r),
      (r.type === 'logger' || (r.log && r.warn && r.error)) &&
        (this.modules.logger = r),
      r.type === 'languageDetector' && (this.modules.languageDetector = r),
      r.type === 'i18nFormat' && (this.modules.i18nFormat = r),
      r.type === 'postProcessor' && Qh.addPostProcessor(r),
      r.type === 'formatter' && (this.modules.formatter = r),
      r.type === '3rdParty' && this.modules.external.push(r),
      this
    )
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(['cimode', 'dev'].indexOf(r) > -1))
      for (let u = 0; u < this.languages.length; u++) {
        const s = this.languages[u]
        if (
          !(['cimode', 'dev'].indexOf(s) > -1) &&
          this.store.hasLanguageSomeTranslations(s)
        ) {
          this.resolvedLanguage = s
          break
        }
      }
  }
  changeLanguage(r, u) {
    var s = this
    this.isLanguageChangingTo = r
    const h = Qi()
    this.emit('languageChanging', r)
    const g = (O) => {
        ;(this.language = O),
          (this.languages = this.services.languageUtils.toResolveHierarchy(O)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(O)
      },
      b = (O, y) => {
        y
          ? (g(y),
            this.translator.changeLanguage(y),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', y),
            this.logger.log('languageChanged', y))
          : (this.isLanguageChangingTo = void 0),
          h.resolve(function () {
            return s.t(...arguments)
          }),
          u &&
            u(O, function () {
              return s.t(...arguments)
            })
      },
      x = (O) => {
        var M, Q
        !r && !O && this.services.languageDetector && (O = [])
        const y = ve(O)
          ? O
          : this.services.languageUtils.getBestMatchFromCodes(O)
        y &&
          (this.language || g(y),
          this.translator.language || this.translator.changeLanguage(y),
          (Q =
            (M = this.services.languageDetector) == null
              ? void 0
              : M.cacheUserLanguage) == null || Q.call(M, y)),
          this.loadResources(y, (X) => {
            b(X, y)
          })
      }
    return (
      !r &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? x(this.services.languageDetector.detect())
        : !r &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(x)
          : this.services.languageDetector.detect(x)
        : x(r),
      h
    )
  }
  getFixedT(r, u, s) {
    var h = this
    const g = function (b, x) {
      let O
      if (typeof x != 'object') {
        for (
          var y = arguments.length, M = new Array(y > 2 ? y - 2 : 0), Q = 2;
          Q < y;
          Q++
        )
          M[Q - 2] = arguments[Q]
        O = h.options.overloadTranslationOptionHandler([b, x].concat(M))
      } else O = { ...x }
      ;(O.lng = O.lng || g.lng),
        (O.lngs = O.lngs || g.lngs),
        (O.ns = O.ns || g.ns),
        O.keyPrefix !== '' && (O.keyPrefix = O.keyPrefix || s || g.keyPrefix)
      const X = h.options.keySeparator || '.'
      let ae
      return (
        O.keyPrefix && Array.isArray(b)
          ? (ae = b.map((ee) => `${O.keyPrefix}${X}${ee}`))
          : (ae = O.keyPrefix ? `${O.keyPrefix}${X}${b}` : b),
        h.t(ae, O)
      )
    }
    return ve(r) ? (g.lng = r) : (g.lngs = r), (g.ns = u), (g.keyPrefix = s), g
  }
  t() {
    var h
    for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++)
      u[s] = arguments[s]
    return (h = this.translator) == null ? void 0 : h.translate(...u)
  }
  exists() {
    var h
    for (var r = arguments.length, u = new Array(r), s = 0; s < r; s++)
      u[s] = arguments[s]
    return (h = this.translator) == null ? void 0 : h.exists(...u)
  }
  setDefaultNamespace(r) {
    this.options.defaultNS = r
  }
  hasLoadedNamespace(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      )
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      )
    const s = u.lng || this.resolvedLanguage || this.languages[0],
      h = this.options ? this.options.fallbackLng : !1,
      g = this.languages[this.languages.length - 1]
    if (s.toLowerCase() === 'cimode') return !0
    const b = (x, O) => {
      const y = this.services.backendConnector.state[`${x}|${O}`]
      return y === -1 || y === 0 || y === 2
    }
    if (u.precheck) {
      const x = u.precheck(this, b)
      if (x !== void 0) return x
    }
    return !!(
      this.hasResourceBundle(s, r) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (b(s, r) && (!h || b(g, r)))
    )
  }
  loadNamespaces(r, u) {
    const s = Qi()
    return this.options.ns
      ? (ve(r) && (r = [r]),
        r.forEach((h) => {
          this.options.ns.indexOf(h) < 0 && this.options.ns.push(h)
        }),
        this.loadResources((h) => {
          s.resolve(), u && u(h)
        }),
        s)
      : (u && u(), Promise.resolve())
  }
  loadLanguages(r, u) {
    const s = Qi()
    ve(r) && (r = [r])
    const h = this.options.preload || [],
      g = r.filter(
        (b) =>
          h.indexOf(b) < 0 && this.services.languageUtils.isSupportedCode(b)
      )
    return g.length
      ? ((this.options.preload = h.concat(g)),
        this.loadResources((b) => {
          s.resolve(), u && u(b)
        }),
        s)
      : (u && u(), Promise.resolve())
  }
  dir(r) {
    var h, g
    if (
      (r ||
        (r =
          this.resolvedLanguage ||
          (((h = this.languages) == null ? void 0 : h.length) > 0
            ? this.languages[0]
            : this.language)),
      !r)
    )
      return 'rtl'
    const u = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      s =
        ((g = this.services) == null ? void 0 : g.languageUtils) || new gh(yh())
    return u.indexOf(s.getLanguagePartFromCode(r)) > -1 ||
      r.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      u = arguments.length > 1 ? arguments[1] : void 0
    return new Pi(r, u)
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dr
    const s = r.forkResourceStore
    s && delete r.forkResourceStore
    const h = { ...this.options, ...r, isClone: !0 },
      g = new Pi(h)
    if (
      ((r.debug !== void 0 || r.prefix !== void 0) &&
        (g.logger = g.logger.clone(r)),
      ['store', 'services', 'language'].forEach((x) => {
        g[x] = this[x]
      }),
      (g.services = { ...this.services }),
      (g.services.utils = { hasLoadedNamespace: g.hasLoadedNamespace.bind(g) }),
      s)
    ) {
      const x = Object.keys(this.store.data).reduce(
        (O, y) => (
          (O[y] = { ...this.store.data[y] }),
          Object.keys(O[y]).reduce((M, Q) => ((M[Q] = { ...O[y][Q] }), M), {})
        ),
        {}
      )
      ;(g.store = new fh(x, h)), (g.services.resourceStore = g.store)
    }
    return (
      (g.translator = new mr(g.services, h)),
      g.translator.on('*', function (x) {
        for (
          var O = arguments.length, y = new Array(O > 1 ? O - 1 : 0), M = 1;
          M < O;
          M++
        )
          y[M - 1] = arguments[M]
        g.emit(x, ...y)
      }),
      g.init(h, u),
      (g.translator.options = h),
      (g.translator.backendConnector.services.utils = {
        hasLoadedNamespace: g.hasLoadedNamespace.bind(g),
      }),
      g
    )
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    }
  }
}
const ct = Pi.createInstance()
ct.createInstance = Pi.createInstance
ct.createInstance
ct.dir
ct.init
ct.loadResources
ct.reloadResources
ct.use
ct.changeLanguage
ct.getFixedT
ct.t
ct.exists
ct.setDefaultNamespace
ct.hasLoadedNamespace
ct.loadNamespaces
ct.loadLanguages
const sv = {
  en: {
    translation: {
      about: 'About Us',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact Us',
      slide01:
        'Financial and strategic consulting for management teams and entrepreneurs',
      slide02:
        'Advice, planning and guidance on implementation of courses of action that add value to organizations',
      slide03: 'Our experience and expertise at your service',
      titleAbout: 'About Us',
      subtitleOurFirm: 'Our Firm',
      textOurFirmLeft01:
        'Transcending is a finance consulting firm that supports executive teams in the process of making key business decisions regarding management and strategy.',
      textOurFirmLeft02:
        'Through the development of models and financial data analysis, we draw conclusions, reach findings, outline opportunities, make recommendations and give answers that allow us to trace and appropriately support value creating paths that managers and shareholders can follow.',
      textOurFirmRight01:
        'We work with and along management teams to plan and coordinate the execution of crucial projects that will, as an outcome, bring profitable and sustainable growth to companies, in the short, medium, and long term.',
      textOurFirmRight02:
        'We put at the service of our clients our valuable expertise with financial planning and analysis, as well as in mergers and acquisitions, obtained throughout years of experience working for highly renowned local and regional companies.',
      textOurFirmRight03:
        'Since 2016, we have advised companies in different sectors, such as pharmaceutical, agroindustry, logistics, technology, real state, health & fitness and commodities, ranging from startups to large regional enterprises.',
      subtitleOurTeam: 'Our Team',
      textOurTeam:
        'Margarita Reina, founding partner of Transcending, initiated her professional career in 2003 as an investment banking analyst in Colombia. Later, she became part of the financial advisory team to the CEO, at the holding company of the largest financial group in that country. In 2009, she began her MBA studies at INCAE. After earning her master’s degree as valedictorian, she joined one of the most prestigious investment banking firms in Costa Rica as an associate, to then assume the financial planning manager position at a regional pharmaceutical company. Since 2016, she has built up her own consulting business.',
      titleServices: 'Services',
      subtitleValuation: 'Valuation',
      textValuation:
        'We develop financial valuation models that allow us to provide our clients with a market value range for the operation of their interest. Valuation can be used by shareholders to support strategic decisions, as well as in M&A transactions, to determine enterprise value ranges.',
      subtitleMergersAndAcquisitions: 'Mergers And Acquisitions',
      textMergersAndAcquisitions:
        'Partial or total acquisitions and mergers can be an inorganic source of profitable growth for companies, through fresh capital injections from investors, strategic partnerships that create synergies and add value, as well as access to complementary operations and product portfolios. We guide and accompany our clients through and at every stage of these transactions, from valuation of the target to the complete takeover of acquired operations.',
      subtitleFinancialAnalysis: 'Financial Analysis',
      textFinancialAnalysis:
        'We perform insightful financial diagnoses of ongoing operations, business units and variables, that lead to the revelation and meaningful understanding of challenges and struggles that companies may face. We recommend strategies and courses of action, intended to transcend them and follow a thriving path of growth, profitability, sustainability and value creation. We develop financial projection and analysis models that allow management teams to assess in advance and quantify the potential economic impact of restructuring initiatives, business alliances, as well as strategic, commercial, operating, administration and organizational investment projects.',
      subtitleBudgeting: 'Budgeting',
      textBudgeting:
        'We design and build annual budget models, based on business realities and requirements. These allow for a well anticipated and assertive planning of monthly operations within a fiscal term, and also give a clear and concise guide, for the management team to elaborate and execute plans, assess performance and take corrective action at the right time to unexpected scenarios that could arise, avoiding derailing from the initial objectives set in the annual budget.',
      subtitleBoardOfDirectorsConsulting: 'Board Of Directors Consulting',
      textBoardOfDirectorsConsulting:
        'We act as external advisors to the board of directors, board committee members and directors, contributing through feedback, recommendations, supervision, follow up and assessment, to business growth, profitability, liquidity, solvency, sustainability and value creation, as well as the ethics of business management, through and from a financial and strategic approach.',
      titleTestimonials: 'Testimonials',
      testimonialsSlider: [
        {
          text: 'I had the opportunity to work with Margarita for five years, during which she was part of the internal advisory team to the Presidency of Grupo Aval. During this time, I was able to appreciate her talent, the quality of her work, and the deep knowledge she acquired about the financial sector. She is a professional who brings great value to the organizations she collaborates with.',
          name: 'Mauricio Cárdenas Müller',
          role: 'Gerente General de la Organización Luis Carlos Sarmiento Angulo',
        },
        {
          text: 'I am grateful to Margarita for her valuable contributions as an External Advisor since 2020 and as a member of the Finance Committee of our Corporate Governance since 2021. Her guidance and support in planning, controlling, and optimizing expenses have been highly significant for our company. Her analysis and diagnostics of our operations, along with her recommendations on various strategic business variables, have helped us focus our efforts on making critical decisions for the sustainability of our organization.',
          name: 'Jaime Gurdián Moreno',
          role: 'Director General Agrosuperior',
        },
        {
          text: 'It has been a true pleasure to work alongside Margarita on various occasions and across different projects. Margarita is not only an exceptionally talented individual—her knowledge, work ethic, and dedication are truly remarkable. Beyond her unquestionable technical expertise, she consistently approaches her work with great commitment and care. Every client and colleague I’ve spoken with agrees in describing Margarita’s performance as extraordinary and exemplary.',
          name: 'Mauricio Jenkins Coronas, Ph.D.',
          role: 'Profesor Pleno INCAE Business School, Consultor empresarial',
        },
        {
          text: 'I worked with Margarita for six months on a consulting project. She demonstrated a strong analytical capacity combined with excellent management of the company’s financial information databases. The analysis she carried out was the primary input on which we based the action plan we presented to the client.',
          name: 'Oscar Rodríguez Ulloa',
          role: 'Gerente General de la Organización Luis Carlos Sarmiento Angulo',
        },
        {
          text: 'Margarita is one of the most serious and dedicated professionals I’ve encountered in my career. We worked together at the holding company of Colombia’s largest financial group, and every interaction with her was both an intellectual and personal privilege. It was also an opportunity to learn from her broad skill set. Her ability to transform numbers and data analysis into robust financial tools that support corporate decisions is as admirable as her discipline, clarity in communication, and fluency in designing and leading the implementation of effective business strategies.',
          name: 'Diego Jaramillo Echeverry',
          role: 'CFO NEORIS',
        },
        {
          text: 'Working with Margarita has been essential in structuring the operations of our Karate academy business and in building its expansion plan. Her financial strategy advisory has allowed us to evolve and transform, adopting a franchise model across Central America and positioning Tamashii’s market value in USD toward a seven-figure potential. Thanks to her support, we’ve become one of the most positively impactful SMEs in the region. I wholeheartedly recommend the consulting services of Transcending Financial Consultants to entrepreneurs seeking a deep understanding of their business needs to achieve sustainable growth, optimize profitability, and maximize value.',
          name: 'Mauricio Carranza Delgado',
          role: 'Director Tamashii Martial Arts',
        },
      ],
      titleContactUs: 'Contact Us',
      copyrightText: '© 2025 Transcending',
    },
  },
  es: {
    translation: {
      about: 'Acerca de',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contáctenos',
      slide01:
        'Asesoría financiera y estratégica para equipos gerenciales y empresarios',
      slide02:
        'Recomendación, planificación y coordinación de la ejecución de cursos de acción que crean valor para las organizaciones',
      slide03:
        'Toda nuestra experiencia puesta al servicio de nuestros clientes',
      titleAbout: 'Acerca de',
      subtitleOurFirm: 'Nuestra Firma',
      textOurFirmLeft01:
        'Transcending es una firma de consultoría financiera que apoya a los equipos directivos de las organizaciones en los procesos de toma de decisiones gerenciales y estratégicas.',
      textOurFirmLeft02:
        'A través del desarrollo de modelos y análisis financieros, llegamos a conclusiones, identificamos hallazgos, planteamos oportunidades, hacemos recomendaciones y damos respuestas, que permiten a los ejecutivos y empresarios seguir rutas generadoras de valor en sus negocios, adecuadamente soportadas.',
      textOurFirmRight01:
        'Brindamos guía y acompañamiento a los equipos gerenciales en la planificación y coordinación de la ejecución de proyectos críticos para el crecimiento rentable y la sostenibilidad de las operaciones en el corto, mediano y largo plazo.',
      textOurFirmRight02:
        'Ponemos al servicio de nuestros clientes, toda nuestra experiencia en planificación y análisis financiero, así como en fusiones y adquisiciones, en compañías locales y regionales de amplia trayectoria.',
      textOurFirmRight03:
        'Desde el año 2016, hemos asesorado a compañías pertenecientes a diferentes sectores económicos, entre ellos la industria farmacéutica, agropecuaria, logística, tecnológica, inmobiliaria, de health & fitness y de commodities, desde startups hasta grandes empresas regionales.',
      subtitleOurTeam: 'Equipo',
      textOurTeam:
        'Margarita Reina, socia fundadora de Transcending, inició su carrera profesional en el año 2003 como analista de banca de inversión en Colombia. Posteriormente hizo parte del equipo de asesores financieros internos de la dirección general, en la holding del grupo financiero más grande de ese país, hasta 2009, año en que inició su MBA en INCAE, Costa Rica. Después de terminar sus estudios como valedictorian, trabajó como asociada en una de las firmas de banca de inversión de mayor prestigio en la región, para luego asumir el cargo de gerente de planificación financiera en un laboratorio farmacéutico costarricense con presencia regional. A partir del año 2016, inició su propio negocio de consultoría.',
      titleServices: 'Servicios',
      subtitleValuation: 'Valoración Financiera',
      textValuation:
        'Desarrollamos modelos financieros de valoración, a través de los cuales proveemos al cliente con un rango de valor de mercado de la operación de su interés. Los estudios de valoración pueden ser utilizados para fines de análisis interno de decisiones estratégicas por parte de accionistas mayoritarios, así como para definir rangos de negociación de precios, en procesos de adquisición o venta parciales o totales de negocios.',
      subtitleMergersAndAcquisitions: 'Fusiones y adquisiciones',
      textMergersAndAcquisitions:
        'Las adquisiciones o ventas, parciales o totales, de compañías o unidades de negocio, permiten acelerar el crecimiento rentable de las organizaciones de forma inorgánica, a través de la inyección de capital fresco por parte de inversionistas, la incorporación de socios estratégicos que crean valor y aportan sinergias y el apalancamiento en operaciones y portafolios de productos complementarios. Apoyamos a nuestros clientes en todas las etapas de este tipo de transacciones, desde la valoración del target hasta el takeover de las operaciones adquiridas.',
      subtitleFinancialAnalysis: 'Análisis Financiero',
      textFinancialAnalysis:
        'Desarrollamos diagnósticos financieros profundos y esclarecedores, de compañías, operaciones en marcha, unidades y variables de negocio, que llevan a la revelación y el entendimiento de problemas y obstáculos que dificultan la situación financiera de las organizaciones. Recomendamos estrategias y acciones que permiten trascenderlos y seguir una ruta próspera de crecimiento, rentabilidad, sostenibilidad y creación de valor. Elaboramos modelos de proyecciones y análisis financiero, que permiten al equipo gerencial cuantificar y evaluar, de forma anticipada, el potencial impacto económico de reestructuraciones, alianzas, iniciativas y proyectos de inversión, estratégicos, comerciales, operativos, administrativos y organizacionales.',
      subtitleBudgeting: 'Presupuestación',
      textBudgeting:
        'Construimos modelos de presupuestación anual, basados en las realidades y las necesidades prácticas del negocio, que permiten llevar a cabo una planificación acertada y anticipada de las operaciones mensuales dentro de un periodo fiscal, dar una dirección clara al equipo gerencial para la elaboración y ejecución de planes de acción, dar un seguimiento detallado a los resultados que se van obteniendo y tomar medidas correctivas de forma oportuna, ante situaciones imprevistas, causantes de desviaciones de los objetivos inicialmente planteados.',
      subtitleBoardOfDirectorsConsulting: 'Asesoría en Juntas Directivas',
      textBoardOfDirectorsConsulting:
        'Participamos como asesores externos, miembros de comités de Junta Directiva ó Directores, contribuyendo a través de retroalimentación, recomendaciones, supervisión, seguimiento y evaluación, al crecimiento, la rentabilidad, la liquidez, la solvencia, la sostenibilidad y la creación de valor en las operaciones, así como a la ética de los negocios, desde una perspectiva financiera y estratégica.',
      titleTestimonials: 'Testimonios',
      testimonialsSlider: [
        {
          text: 'Tuve la oportunidad de trabajar con Margarita durante 5 años, en los que hizo parte del equipo de asesoría interna de la Presidencia de Grupo Aval. En este periodo pude apreciar su talento, la calidad de su trabajo y el profundo conocimiento que adquirió sobre el sector financiero. Es una profesional que aporta gran valor a las organizaciones con las cuales colabora.',
          name: 'Mauricio Cárdenas Müller',
          role: 'Gerente General de la Organización Luis Carlos Sarmiento Angulo',
        },
        {
          text: 'Agradezco a Margarita por su valiosa gestión en calidad de Asesora Externa desde 2020 y como miembro del Comité de Finanzas de nuestro Gobierno Corporativo desde 2021. Su guía y acompañamiento en la planificación, el control y la optimización del gasto, han sido de gran relevancia para nuestra compañía. Asimismo, su trabajo de análisis y diagnóstico de nuestras operaciones y sus recomendaciones sobre diferentes variables estratégicas del negocio, nos han permitido enfocar nuestros esfuerzos en la toma de decisiones críticas para la sostenibilidad de nuestra empresa.',
          name: 'Jaime Gurdián Moreno',
          role: 'Director General Agrosuperior',
        },
        {
          text: 'Haber podido trabajar al lado de Margarita en distintas oportunidades y en diferentes proyectos ha sido un verdadero placer. Margarita no es solamente una persona excepcionalmente talentosa, sino que su conocimiento, su capacidad de trabajo y su ética son ciertamente notables. Además de un conocimiento técnico profundo que no deja lugar a dudas, Margarita siempre hace su trabajo con un enorme compromiso y gran dedicación. Todos los clientes y colaboradores con los que he tenido la oportunidad de intercambiar opiniones, concuerdan en calificar el desempeño de Margarita como extraordinario y ejemplar.',
          name: 'Mauricio Jenkins Coronas, Ph.D.',
          role: 'Profesor Pleno INCAE Business School, Consultor empresarial',
        },
        {
          text: 'Trabajé con Margarita durante 6 meses en un proyecto de consultoría. Ella demostró contar con una capacidad analítica fuerte unida a un muy buen manejo de las bases de datos de la información financiera de la empresa. El análisis realizado, fue el principal insumo en el cual nos basamos para elaborar el plan de acción presentado al cliente.',
          name: 'Oscar Rodríguez Ulloa',
          role: 'Gerente General de la Organización Luis Carlos Sarmiento Angulo',
        },
        {
          text: 'Margarita es una de las profesionales más serias y comprometidas que he conocido a lo largo de mi carrera. Trabajamos juntos en la holding company del mayor grupo financiero de Colombia e interactuar con ella siempre fue un privilegio a nivel intelectual y personal, así como una oportunidad para aprender de sus amplias capacidades. Su habilidad para convertir cifras y análisis numéricos en robustas herramientas financieras para soportar decisiones corporativas es tan admirable como su disciplina, su claridad comunicativa y su fluidez para diseñar y liderar la implementación de acertadas estrategias empresariales',
          name: 'Diego Jaramillo Echeverry',
          role: 'CFO NEORIS',
        },
        {
          text: 'Trabajar con Margarita ha sido fundamental para ordenar la operación de nuestro negocio de academias de Karate y construir su plan de expansión. Su asesoría en estrategias financieras nos ha permitido trascender y transformarnos, siguiendo un modelo de franquicias en la región centroamericana y llevando el valor de mercado en dólares de Tamashii hacia un potencial de siete cifras. Gracias a su ayuda, nos hemos posicionado como una de las pymes de mayor impacto positivo en la región. Recomiendo sin reservas la asesoría de Transcending Financial Consultants, a aquellos empresarios que deseen comprender a fondo las necesidades de su negocio para lograr un crecimiento sostenible, la optimización de su rentabilidad y la maximización de su valor.',
          name: 'Mauricio Carranza Delgado',
          role: 'Director Tamashii Martial Arts',
        },
      ],
      titleContactUs: 'Contáctenos',
      copyrightText: '© 2025 Transcending',
    },
  },
}
ct.use(Bm).init({
  resources: sv,
  lng: 'en',
  interpolation: { escapeValue: !1 },
})
function kh(c, r) {
  if (c == null) return {}
  var u = {},
    s = Object.keys(c),
    h,
    g
  for (g = 0; g < s.length; g++)
    (h = s[g]), !(r.indexOf(h) >= 0) && (u[h] = c[h])
  return u
}
var ov = ['color'],
  cv = tt.forwardRef(function (c, r) {
    var u = c.color,
      s = u === void 0 ? 'currentColor' : u,
      h = kh(c, ov)
    return tt.createElement(
      'svg',
      Object.assign(
        {
          width: '15',
          height: '15',
          viewBox: '0 0 15 15',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        h,
        { ref: r }
      ),
      tt.createElement('path', {
        d: 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z',
        fill: s,
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      })
    )
  }),
  fv = ['color'],
  dv = tt.forwardRef(function (c, r) {
    var u = c.color,
      s = u === void 0 ? 'currentColor' : u,
      h = kh(c, fv)
    return tt.createElement(
      'svg',
      Object.assign(
        {
          width: '15',
          height: '15',
          viewBox: '0 0 15 15',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        h,
        { ref: r }
      ),
      tt.createElement('path', {
        d: 'M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z',
        fill: s,
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      })
    )
  })
const hv = '/tfccr/logo.svg',
  gv = '/tfccr/es-flag.svg',
  pv = '/tfccr/en-flag.svg',
  mv = () => {
    const { t: c, i18n: r } = aa(),
      [u, s] = tt.useState(!1),
      h = () => {
        const g = r.language === 'en' ? 'es' : 'en'
        r.changeLanguage(g)
      }
    return $.jsx('nav', {
      className: 'navbar max-width',
      children: $.jsxs('div', {
        className: 'nav-container',
        children: [
          $.jsx('a', {
            href: '/',
            className: 'logo',
            children: $.jsx('img', {
              src: hv,
              alt: 'Logo',
              className: 'logo-img',
            }),
          }),
          $.jsx('div', { id: 'body-overlay', className: `${u ? 'open' : ''}` }),
          $.jsxs('div', {
            className: `nav-links ${u ? 'open' : ''}`,
            children: [
              $.jsx('button', {
                className: 'hamburger',
                onClick: () => s(!u),
                children: u ? $.jsx(cv, {}) : $.jsx(dv, {}),
              }),
              $.jsxs('ul', {
                children: [
                  $.jsx('li', {
                    children: $.jsx('a', { href: '#', children: c('about') }),
                  }),
                  $.jsx('li', {
                    children: $.jsx('a', {
                      href: '#',
                      children: c('services'),
                    }),
                  }),
                  $.jsx('li', {
                    children: $.jsx('a', {
                      href: '#',
                      children: c('testimonials'),
                    }),
                  }),
                  $.jsx('li', {
                    children: $.jsx('a', { href: '#', children: c('contact') }),
                  }),
                  $.jsx('li', {
                    children: $.jsx('button', {
                      className: 'lang-btn',
                      onClick: h,
                      children: $.jsx('img', {
                        src: r.language === 'en' ? gv : pv,
                        alt: 'flag',
                        className: 'flag-icon',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  }
var Ys = {},
  Gs = {},
  ki = {},
  Xs = {},
  Sh
function vv() {
  return (
    Sh ||
      ((Sh = 1),
      (function (c) {
        Object.defineProperty(c, '__esModule', { value: !0 }),
          (c.default = void 0)
        var r = {
          animating: !1,
          autoplaying: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          dragging: !1,
          edgeDragged: !1,
          initialized: !1,
          lazyLoadedList: [],
          listHeight: null,
          listWidth: null,
          scrolling: !1,
          slideCount: null,
          slideHeight: null,
          slideWidth: null,
          swipeLeft: null,
          swiped: !1,
          swiping: !1,
          touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
          trackStyle: {},
          trackWidth: 0,
          targetSlide: 0,
        }
        c.default = r
      })(Xs)),
    Xs
  )
}
var Vs, Oh
function yv() {
  if (Oh) return Vs
  Oh = 1
  var c = 'Expected a function',
    r = NaN,
    u = '[object Symbol]',
    s = /^\s+|\s+$/g,
    h = /^[-+]0x[0-9a-f]+$/i,
    g = /^0b[01]+$/i,
    b = /^0o[0-7]+$/i,
    x = parseInt,
    O = typeof fr == 'object' && fr && fr.Object === Object && fr,
    y = typeof self == 'object' && self && self.Object === Object && self,
    M = O || y || Function('return this')(),
    Q = Object.prototype,
    X = Q.toString,
    ae = Math.max,
    ee = Math.min,
    k = function () {
      return M.Date.now()
    }
  function le(E, D, j) {
    var K,
      A,
      v,
      q,
      V,
      L,
      U = 0,
      I = !1,
      _ = !1,
      f = !0
    if (typeof E != 'function') throw new TypeError(c)
    ;(D = ge(D) || 0),
      ce(j) &&
        ((I = !!j.leading),
        (_ = 'maxWait' in j),
        (v = _ ? ae(ge(j.maxWait) || 0, D) : v),
        (f = 'trailing' in j ? !!j.trailing : f))
    function te(ne) {
      var ue = K,
        ye = A
      return (K = A = void 0), (U = ne), (q = E.apply(ye, ue)), q
    }
    function T(ne) {
      return (U = ne), (V = setTimeout(R, D)), I ? te(ne) : q
    }
    function o(ne) {
      var ue = ne - L,
        ye = ne - U,
        Te = D - ue
      return _ ? ee(Te, v - ye) : Te
    }
    function m(ne) {
      var ue = ne - L,
        ye = ne - U
      return L === void 0 || ue >= D || ue < 0 || (_ && ye >= v)
    }
    function R() {
      var ne = k()
      if (m(ne)) return N(ne)
      V = setTimeout(R, o(ne))
    }
    function N(ne) {
      return (V = void 0), f && K ? te(ne) : ((K = A = void 0), q)
    }
    function G() {
      V !== void 0 && clearTimeout(V), (U = 0), (K = L = A = V = void 0)
    }
    function W() {
      return V === void 0 ? q : N(k())
    }
    function Z() {
      var ne = k(),
        ue = m(ne)
      if (((K = arguments), (A = this), (L = ne), ue)) {
        if (V === void 0) return T(L)
        if (_) return (V = setTimeout(R, D)), te(L)
      }
      return V === void 0 && (V = setTimeout(R, D)), q
    }
    return (Z.cancel = G), (Z.flush = W), Z
  }
  function ce(E) {
    var D = typeof E
    return !!E && (D == 'object' || D == 'function')
  }
  function oe(E) {
    return !!E && typeof E == 'object'
  }
  function fe(E) {
    return typeof E == 'symbol' || (oe(E) && X.call(E) == u)
  }
  function ge(E) {
    if (typeof E == 'number') return E
    if (fe(E)) return r
    if (ce(E)) {
      var D = typeof E.valueOf == 'function' ? E.valueOf() : E
      E = ce(D) ? D + '' : D
    }
    if (typeof E != 'string') return E === 0 ? E : +E
    E = E.replace(s, '')
    var j = g.test(E)
    return j || b.test(E) ? x(E.slice(2), j ? 2 : 8) : h.test(E) ? r : +E
  }
  return (Vs = le), Vs
}
var Qs = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Th
function Sr() {
  return (
    Th ||
      ((Th = 1),
      (function (c) {
        ;(function () {
          var r = {}.hasOwnProperty
          function u() {
            for (var g = '', b = 0; b < arguments.length; b++) {
              var x = arguments[b]
              x && (g = h(g, s(x)))
            }
            return g
          }
          function s(g) {
            if (typeof g == 'string' || typeof g == 'number') return g
            if (typeof g != 'object') return ''
            if (Array.isArray(g)) return u.apply(null, g)
            if (
              g.toString !== Object.prototype.toString &&
              !g.toString.toString().includes('[native code]')
            )
              return g.toString()
            var b = ''
            for (var x in g) r.call(g, x) && g[x] && (b = h(b, x))
            return b
          }
          function h(g, b) {
            return b ? (g ? g + ' ' + b : g + b) : g
          }
          c.exports
            ? ((u.default = u), (c.exports = u))
            : (window.classNames = u)
        })()
      })(Qs)),
    Qs.exports
  )
}
var ie = {},
  ks = {},
  xh
function Zh() {
  return (
    xh ||
      ((xh = 1),
      (function (c) {
        Object.defineProperty(c, '__esModule', { value: !0 }),
          (c.default = void 0)
        var r = u(Kt())
        function u(h) {
          return h && h.__esModule ? h : { default: h }
        }
        var s = {
          accessibility: !0,
          adaptiveHeight: !1,
          afterChange: null,
          appendDots: function (g) {
            return r.default.createElement(
              'ul',
              { style: { display: 'block' } },
              g
            )
          },
          arrows: !0,
          autoplay: !1,
          autoplaySpeed: 3e3,
          beforeChange: null,
          centerMode: !1,
          centerPadding: '50px',
          className: '',
          cssEase: 'ease',
          customPaging: function (g) {
            return r.default.createElement('button', null, g + 1)
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: null,
          nextArrow: null,
          onEdge: null,
          onInit: null,
          onLazyLoadError: null,
          onReInit: null,
          pauseOnDotsHover: !1,
          pauseOnFocus: !1,
          pauseOnHover: !0,
          prevArrow: null,
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: 'div',
          slidesPerRow: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
          swipe: !0,
          swipeEvent: null,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          waitForAnimate: !0,
          asNavFor: null,
          unslick: !1,
        }
        c.default = s
      })(ks)),
    ks
  )
}
var Eh
function $i() {
  if (Eh) return ie
  ;(Eh = 1),
    Object.defineProperty(ie, '__esModule', { value: !0 }),
    (ie.checkSpecKeys =
      ie.checkNavigable =
      ie.changeSlide =
      ie.canUseDOM =
      ie.canGoNext =
        void 0),
    (ie.clamp = y),
    (ie.extractObject = void 0),
    (ie.filterSettings = te),
    (ie.validSettings =
      ie.swipeStart =
      ie.swipeMove =
      ie.swipeEnd =
      ie.slidesOnRight =
      ie.slidesOnLeft =
      ie.slideHandler =
      ie.siblingDirection =
      ie.safePreventDefault =
      ie.lazyStartIndex =
      ie.lazySlidesOnRight =
      ie.lazySlidesOnLeft =
      ie.lazyEndIndex =
      ie.keyHandler =
      ie.initializedState =
      ie.getWidth =
      ie.getTrackLeft =
      ie.getTrackCSS =
      ie.getTrackAnimateCSS =
      ie.getTotalSlides =
      ie.getSwipeDirection =
      ie.getSlideCount =
      ie.getRequiredLazySlides =
      ie.getPreClones =
      ie.getPostClones =
      ie.getOnDemandLazySlides =
      ie.getNavigableIndexes =
      ie.getHeight =
        void 0)
  var c = u(Kt()),
    r = u(Zh())
  function u(T) {
    return T && T.__esModule ? T : { default: T }
  }
  function s(T) {
    '@babel/helpers - typeof'
    return (
      (s =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (o) {
              return typeof o
            }
          : function (o) {
              return o &&
                typeof Symbol == 'function' &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? 'symbol'
                : typeof o
            }),
      s(T)
    )
  }
  function h(T, o) {
    var m = Object.keys(T)
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(T)
      o &&
        (R = R.filter(function (N) {
          return Object.getOwnPropertyDescriptor(T, N).enumerable
        })),
        m.push.apply(m, R)
    }
    return m
  }
  function g(T) {
    for (var o = 1; o < arguments.length; o++) {
      var m = arguments[o] != null ? arguments[o] : {}
      o % 2
        ? h(Object(m), !0).forEach(function (R) {
            b(T, R, m[R])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(m))
        : h(Object(m)).forEach(function (R) {
            Object.defineProperty(T, R, Object.getOwnPropertyDescriptor(m, R))
          })
    }
    return T
  }
  function b(T, o, m) {
    return (
      (o = x(o)),
      o in T
        ? Object.defineProperty(T, o, {
            value: m,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (T[o] = m),
      T
    )
  }
  function x(T) {
    var o = O(T, 'string')
    return s(o) == 'symbol' ? o : String(o)
  }
  function O(T, o) {
    if (s(T) != 'object' || !T) return T
    var m = T[Symbol.toPrimitive]
    if (m !== void 0) {
      var R = m.call(T, o)
      if (s(R) != 'object') return R
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (o === 'string' ? String : Number)(T)
  }
  function y(T, o, m) {
    return Math.max(o, Math.min(T, m))
  }
  var M = (ie.safePreventDefault = function (o) {
      var m = ['onTouchStart', 'onTouchMove', 'onWheel']
      m.includes(o._reactName) || o.preventDefault()
    }),
    Q = (ie.getOnDemandLazySlides = function (o) {
      for (var m = [], R = X(o), N = ae(o), G = R; G < N; G++)
        o.lazyLoadedList.indexOf(G) < 0 && m.push(G)
      return m
    })
  ie.getRequiredLazySlides = function (o) {
    for (var m = [], R = X(o), N = ae(o), G = R; G < N; G++) m.push(G)
    return m
  }
  var X = (ie.lazyStartIndex = function (o) {
      return o.currentSlide - ee(o)
    }),
    ae = (ie.lazyEndIndex = function (o) {
      return o.currentSlide + k(o)
    }),
    ee = (ie.lazySlidesOnLeft = function (o) {
      return o.centerMode
        ? Math.floor(o.slidesToShow / 2) +
            (parseInt(o.centerPadding) > 0 ? 1 : 0)
        : 0
    }),
    k = (ie.lazySlidesOnRight = function (o) {
      return o.centerMode
        ? Math.floor((o.slidesToShow - 1) / 2) +
            1 +
            (parseInt(o.centerPadding) > 0 ? 1 : 0)
        : o.slidesToShow
    }),
    le = (ie.getWidth = function (o) {
      return (o && o.offsetWidth) || 0
    }),
    ce = (ie.getHeight = function (o) {
      return (o && o.offsetHeight) || 0
    }),
    oe = (ie.getSwipeDirection = function (o) {
      var m =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        R,
        N,
        G,
        W
      return (
        (R = o.startX - o.curX),
        (N = o.startY - o.curY),
        (G = Math.atan2(N, R)),
        (W = Math.round((G * 180) / Math.PI)),
        W < 0 && (W = 360 - Math.abs(W)),
        (W <= 45 && W >= 0) || (W <= 360 && W >= 315)
          ? 'left'
          : W >= 135 && W <= 225
          ? 'right'
          : m === !0
          ? W >= 35 && W <= 135
            ? 'up'
            : 'down'
          : 'vertical'
      )
    }),
    fe = (ie.canGoNext = function (o) {
      var m = !0
      return (
        o.infinite ||
          (((o.centerMode && o.currentSlide >= o.slideCount - 1) ||
            o.slideCount <= o.slidesToShow ||
            o.currentSlide >= o.slideCount - o.slidesToShow) &&
            (m = !1)),
        m
      )
    })
  ;(ie.extractObject = function (o, m) {
    var R = {}
    return (
      m.forEach(function (N) {
        return (R[N] = o[N])
      }),
      R
    )
  }),
    (ie.initializedState = function (o) {
      var m = c.default.Children.count(o.children),
        R = o.listRef,
        N = Math.ceil(le(R)),
        G = o.trackRef && o.trackRef.node,
        W = Math.ceil(le(G)),
        Z
      if (o.vertical) Z = N
      else {
        var ne = o.centerMode && parseInt(o.centerPadding) * 2
        typeof o.centerPadding == 'string' &&
          o.centerPadding.slice(-1) === '%' &&
          (ne *= N / 100),
          (Z = Math.ceil((N - ne) / o.slidesToShow))
      }
      var ue = R && ce(R.querySelector('[data-index="0"]')),
        ye = ue * o.slidesToShow,
        Te = o.currentSlide === void 0 ? o.initialSlide : o.currentSlide
      o.rtl && o.currentSlide === void 0 && (Te = m - 1 - o.initialSlide)
      var Re = o.lazyLoadedList || [],
        Me = Q(g(g({}, o), {}, { currentSlide: Te, lazyLoadedList: Re }))
      Re = Re.concat(Me)
      var Ae = {
        slideCount: m,
        slideWidth: Z,
        listWidth: N,
        trackWidth: W,
        currentSlide: Te,
        slideHeight: ue,
        listHeight: ye,
        lazyLoadedList: Re,
      }
      return (
        o.autoplaying === null && o.autoplay && (Ae.autoplaying = 'playing'), Ae
      )
    }),
    (ie.slideHandler = function (o) {
      var m = o.waitForAnimate,
        R = o.animating,
        N = o.fade,
        G = o.infinite,
        W = o.index,
        Z = o.slideCount,
        ne = o.lazyLoad,
        ue = o.currentSlide,
        ye = o.centerMode,
        Te = o.slidesToScroll,
        Re = o.slidesToShow,
        Me = o.useCSS,
        Ae = o.lazyLoadedList
      if (m && R) return {}
      var Se = W,
        ze,
        Ze,
        pe,
        Xe = {},
        Ke = {},
        $e = G ? W : y(W, 0, Z - 1)
      if (N) {
        if (!G && (W < 0 || W >= Z)) return {}
        W < 0 ? (Se = W + Z) : W >= Z && (Se = W - Z),
          ne && Ae.indexOf(Se) < 0 && (Ae = Ae.concat(Se)),
          (Xe = {
            animating: !0,
            currentSlide: Se,
            lazyLoadedList: Ae,
            targetSlide: Se,
          }),
          (Ke = { animating: !1, targetSlide: Se })
      } else
        (ze = Se),
          Se < 0
            ? ((ze = Se + Z),
              G ? Z % Te !== 0 && (ze = Z - (Z % Te)) : (ze = 0))
            : !fe(o) && Se > ue
            ? (Se = ze = ue)
            : ye && Se >= Z
            ? ((Se = G ? Z : Z - 1), (ze = G ? 0 : Z - 1))
            : Se >= Z &&
              ((ze = Se - Z), G ? Z % Te !== 0 && (ze = 0) : (ze = Z - Re)),
          !G && Se + Re >= Z && (ze = Z - Re),
          (Ze = v(g(g({}, o), {}, { slideIndex: Se }))),
          (pe = v(g(g({}, o), {}, { slideIndex: ze }))),
          G || (Ze === pe && (Se = ze), (Ze = pe)),
          ne && (Ae = Ae.concat(Q(g(g({}, o), {}, { currentSlide: Se })))),
          Me
            ? ((Xe = {
                animating: !0,
                currentSlide: ze,
                trackStyle: A(g(g({}, o), {}, { left: Ze })),
                lazyLoadedList: Ae,
                targetSlide: $e,
              }),
              (Ke = {
                animating: !1,
                currentSlide: ze,
                trackStyle: K(g(g({}, o), {}, { left: pe })),
                swipeLeft: null,
                targetSlide: $e,
              }))
            : (Xe = {
                currentSlide: ze,
                trackStyle: K(g(g({}, o), {}, { left: pe })),
                lazyLoadedList: Ae,
                targetSlide: $e,
              })
      return { state: Xe, nextState: Ke }
    }),
    (ie.changeSlide = function (o, m) {
      var R,
        N,
        G,
        W,
        Z,
        ne = o.slidesToScroll,
        ue = o.slidesToShow,
        ye = o.slideCount,
        Te = o.currentSlide,
        Re = o.targetSlide,
        Me = o.lazyLoad,
        Ae = o.infinite
      if (
        ((W = ye % ne !== 0),
        (R = W ? 0 : (ye - Te) % ne),
        m.message === 'previous')
      )
        (G = R === 0 ? ne : ue - R),
          (Z = Te - G),
          Me && !Ae && ((N = Te - G), (Z = N === -1 ? ye - 1 : N)),
          Ae || (Z = Re - ne)
      else if (m.message === 'next')
        (G = R === 0 ? ne : R),
          (Z = Te + G),
          Me && !Ae && (Z = ((Te + ne) % ye) + R),
          Ae || (Z = Re + ne)
      else if (m.message === 'dots') Z = m.index * m.slidesToScroll
      else if (m.message === 'children') {
        if (((Z = m.index), Ae)) {
          var Se = U(g(g({}, o), {}, { targetSlide: Z }))
          Z > m.currentSlide && Se === 'left'
            ? (Z = Z - ye)
            : Z < m.currentSlide && Se === 'right' && (Z = Z + ye)
        }
      } else m.message === 'index' && (Z = Number(m.index))
      return Z
    }),
    (ie.keyHandler = function (o, m, R) {
      return o.target.tagName.match('TEXTAREA|INPUT|SELECT') || !m
        ? ''
        : o.keyCode === 37
        ? R
          ? 'next'
          : 'previous'
        : o.keyCode === 39
        ? R
          ? 'previous'
          : 'next'
        : ''
    }),
    (ie.swipeStart = function (o, m, R) {
      return (
        o.target.tagName === 'IMG' && M(o),
        !m || (!R && o.type.indexOf('mouse') !== -1)
          ? ''
          : {
              dragging: !0,
              touchObject: {
                startX: o.touches ? o.touches[0].pageX : o.clientX,
                startY: o.touches ? o.touches[0].pageY : o.clientY,
                curX: o.touches ? o.touches[0].pageX : o.clientX,
                curY: o.touches ? o.touches[0].pageY : o.clientY,
              },
            }
      )
    }),
    (ie.swipeMove = function (o, m) {
      var R = m.scrolling,
        N = m.animating,
        G = m.vertical,
        W = m.swipeToSlide,
        Z = m.verticalSwiping,
        ne = m.rtl,
        ue = m.currentSlide,
        ye = m.edgeFriction,
        Te = m.edgeDragged,
        Re = m.onEdge,
        Me = m.swiped,
        Ae = m.swiping,
        Se = m.slideCount,
        ze = m.slidesToScroll,
        Ze = m.infinite,
        pe = m.touchObject,
        Xe = m.swipeEvent,
        Ke = m.listHeight,
        $e = m.listWidth
      if (!R) {
        if (N) return M(o)
        G && W && Z && M(o)
        var nt,
          Jt = {},
          Nn = v(m)
        ;(pe.curX = o.touches ? o.touches[0].pageX : o.clientX),
          (pe.curY = o.touches ? o.touches[0].pageY : o.clientY),
          (pe.swipeLength = Math.round(
            Math.sqrt(Math.pow(pe.curX - pe.startX, 2))
          ))
        var Wi = Math.round(Math.sqrt(Math.pow(pe.curY - pe.startY, 2)))
        if (!Z && !Ae && Wi > 10) return { scrolling: !0 }
        Z && (pe.swipeLength = Wi)
        var Ln = (ne ? -1 : 1) * (pe.curX > pe.startX ? 1 : -1)
        Z && (Ln = pe.curY > pe.startY ? 1 : -1)
        var Hn = Math.ceil(Se / ze),
          Ve = oe(m.touchObject, Z),
          pt = pe.swipeLength
        return (
          Ze ||
            (((ue === 0 && (Ve === 'right' || Ve === 'down')) ||
              (ue + 1 >= Hn && (Ve === 'left' || Ve === 'up')) ||
              (!fe(m) && (Ve === 'left' || Ve === 'up'))) &&
              ((pt = pe.swipeLength * ye),
              Te === !1 && Re && (Re(Ve), (Jt.edgeDragged = !0)))),
          !Me && Xe && (Xe(Ve), (Jt.swiped = !0)),
          G
            ? (nt = Nn + pt * (Ke / $e) * Ln)
            : ne
            ? (nt = Nn - pt * Ln)
            : (nt = Nn + pt * Ln),
          Z && (nt = Nn + pt * Ln),
          (Jt = g(
            g({}, Jt),
            {},
            {
              touchObject: pe,
              swipeLeft: nt,
              trackStyle: K(g(g({}, m), {}, { left: nt })),
            }
          )),
          Math.abs(pe.curX - pe.startX) < Math.abs(pe.curY - pe.startY) * 0.8 ||
            (pe.swipeLength > 10 && ((Jt.swiping = !0), M(o))),
          Jt
        )
      }
    }),
    (ie.swipeEnd = function (o, m) {
      var R = m.dragging,
        N = m.swipe,
        G = m.touchObject,
        W = m.listWidth,
        Z = m.touchThreshold,
        ne = m.verticalSwiping,
        ue = m.listHeight,
        ye = m.swipeToSlide,
        Te = m.scrolling,
        Re = m.onSwipe,
        Me = m.targetSlide,
        Ae = m.currentSlide,
        Se = m.infinite
      if (!R) return N && M(o), {}
      var ze = ne ? ue / Z : W / Z,
        Ze = oe(G, ne),
        pe = {
          dragging: !1,
          edgeDragged: !1,
          scrolling: !1,
          swiping: !1,
          swiped: !1,
          swipeLeft: null,
          touchObject: {},
        }
      if (Te || !G.swipeLength) return pe
      if (G.swipeLength > ze) {
        M(o), Re && Re(Ze)
        var Xe,
          Ke,
          $e = Se ? Ae : Me
        switch (Ze) {
          case 'left':
          case 'up':
            ;(Ke = $e + D(m)),
              (Xe = ye ? E(m, Ke) : Ke),
              (pe.currentDirection = 0)
            break
          case 'right':
          case 'down':
            ;(Ke = $e - D(m)),
              (Xe = ye ? E(m, Ke) : Ke),
              (pe.currentDirection = 1)
            break
          default:
            Xe = $e
        }
        pe.triggerSlideHandler = Xe
      } else {
        var nt = v(m)
        pe.trackStyle = A(g(g({}, m), {}, { left: nt }))
      }
      return pe
    })
  var ge = (ie.getNavigableIndexes = function (o) {
      for (
        var m = o.infinite ? o.slideCount * 2 : o.slideCount,
          R = o.infinite ? o.slidesToShow * -1 : 0,
          N = o.infinite ? o.slidesToShow * -1 : 0,
          G = [];
        R < m;

      )
        G.push(R),
          (R = N + o.slidesToScroll),
          (N += Math.min(o.slidesToScroll, o.slidesToShow))
      return G
    }),
    E = (ie.checkNavigable = function (o, m) {
      var R = ge(o),
        N = 0
      if (m > R[R.length - 1]) m = R[R.length - 1]
      else
        for (var G in R) {
          if (m < R[G]) {
            m = N
            break
          }
          N = R[G]
        }
      return m
    }),
    D = (ie.getSlideCount = function (o) {
      var m = o.centerMode ? o.slideWidth * Math.floor(o.slidesToShow / 2) : 0
      if (o.swipeToSlide) {
        var R,
          N = o.listRef,
          G = (N.querySelectorAll && N.querySelectorAll('.slick-slide')) || []
        if (
          (Array.from(G).every(function (ne) {
            if (o.vertical) {
              if (ne.offsetTop + ce(ne) / 2 > o.swipeLeft * -1)
                return (R = ne), !1
            } else if (ne.offsetLeft - m + le(ne) / 2 > o.swipeLeft * -1) return (R = ne), !1
            return !0
          }),
          !R)
        )
          return 0
        var W = o.rtl === !0 ? o.slideCount - o.currentSlide : o.currentSlide,
          Z = Math.abs(R.dataset.index - W) || 1
        return Z
      } else return o.slidesToScroll
    }),
    j = (ie.checkSpecKeys = function (o, m) {
      return m.reduce(function (R, N) {
        return R && o.hasOwnProperty(N)
      }, !0)
        ? null
        : console.error('Keys Missing:', o)
    }),
    K = (ie.getTrackCSS = function (o) {
      j(o, [
        'left',
        'variableWidth',
        'slideCount',
        'slidesToShow',
        'slideWidth',
      ])
      var m,
        R,
        N = o.slideCount + 2 * o.slidesToShow
      o.vertical ? (R = N * o.slideHeight) : (m = L(o) * o.slideWidth)
      var G = { opacity: 1, transition: '', WebkitTransition: '' }
      if (o.useTransform) {
        var W = o.vertical
            ? 'translate3d(0px, ' + o.left + 'px, 0px)'
            : 'translate3d(' + o.left + 'px, 0px, 0px)',
          Z = o.vertical
            ? 'translate3d(0px, ' + o.left + 'px, 0px)'
            : 'translate3d(' + o.left + 'px, 0px, 0px)',
          ne = o.vertical
            ? 'translateY(' + o.left + 'px)'
            : 'translateX(' + o.left + 'px)'
        G = g(
          g({}, G),
          {},
          { WebkitTransform: W, transform: Z, msTransform: ne }
        )
      } else o.vertical ? (G.top = o.left) : (G.left = o.left)
      return (
        o.fade && (G = { opacity: 1 }),
        m && (G.width = m),
        R && (G.height = R),
        window &&
          !window.addEventListener &&
          window.attachEvent &&
          (o.vertical
            ? (G.marginTop = o.left + 'px')
            : (G.marginLeft = o.left + 'px')),
        G
      )
    }),
    A = (ie.getTrackAnimateCSS = function (o) {
      j(o, [
        'left',
        'variableWidth',
        'slideCount',
        'slidesToShow',
        'slideWidth',
        'speed',
        'cssEase',
      ])
      var m = K(o)
      return (
        o.useTransform
          ? ((m.WebkitTransition =
              '-webkit-transform ' + o.speed + 'ms ' + o.cssEase),
            (m.transition = 'transform ' + o.speed + 'ms ' + o.cssEase))
          : o.vertical
          ? (m.transition = 'top ' + o.speed + 'ms ' + o.cssEase)
          : (m.transition = 'left ' + o.speed + 'ms ' + o.cssEase),
        m
      )
    }),
    v = (ie.getTrackLeft = function (o) {
      if (o.unslick) return 0
      j(o, [
        'slideIndex',
        'trackRef',
        'infinite',
        'centerMode',
        'slideCount',
        'slidesToShow',
        'slidesToScroll',
        'slideWidth',
        'listWidth',
        'variableWidth',
        'slideHeight',
      ])
      var m = o.slideIndex,
        R = o.trackRef,
        N = o.infinite,
        G = o.centerMode,
        W = o.slideCount,
        Z = o.slidesToShow,
        ne = o.slidesToScroll,
        ue = o.slideWidth,
        ye = o.listWidth,
        Te = o.variableWidth,
        Re = o.slideHeight,
        Me = o.fade,
        Ae = o.vertical,
        Se = 0,
        ze,
        Ze,
        pe = 0
      if (Me || o.slideCount === 1) return 0
      var Xe = 0
      if (
        (N
          ? ((Xe = -q(o)),
            W % ne !== 0 &&
              m + ne > W &&
              (Xe = -(m > W ? Z - (m - W) : W % ne)),
            G && (Xe += parseInt(Z / 2)))
          : (W % ne !== 0 && m + ne > W && (Xe = Z - (W % ne)),
            G && (Xe = parseInt(Z / 2))),
        (Se = Xe * ue),
        (pe = Xe * Re),
        Ae ? (ze = m * Re * -1 + pe) : (ze = m * ue * -1 + Se),
        Te === !0)
      ) {
        var Ke,
          $e = R && R.node
        if (
          ((Ke = m + q(o)),
          (Ze = $e && $e.childNodes[Ke]),
          (ze = Ze ? Ze.offsetLeft * -1 : 0),
          G === !0)
        ) {
          ;(Ke = N ? m + q(o) : m), (Ze = $e && $e.children[Ke]), (ze = 0)
          for (var nt = 0; nt < Ke; nt++)
            ze -= $e && $e.children[nt] && $e.children[nt].offsetWidth
          ;(ze -= parseInt(o.centerPadding)),
            (ze += Ze && (ye - Ze.offsetWidth) / 2)
        }
      }
      return ze
    }),
    q = (ie.getPreClones = function (o) {
      return o.unslick || !o.infinite
        ? 0
        : o.variableWidth
        ? o.slideCount
        : o.slidesToShow + (o.centerMode ? 1 : 0)
    }),
    V = (ie.getPostClones = function (o) {
      return o.unslick || !o.infinite ? 0 : o.slideCount
    }),
    L = (ie.getTotalSlides = function (o) {
      return o.slideCount === 1 ? 1 : q(o) + o.slideCount + V(o)
    }),
    U = (ie.siblingDirection = function (o) {
      return o.targetSlide > o.currentSlide
        ? o.targetSlide > o.currentSlide + I(o)
          ? 'left'
          : 'right'
        : o.targetSlide < o.currentSlide - _(o)
        ? 'right'
        : 'left'
    }),
    I = (ie.slidesOnRight = function (o) {
      var m = o.slidesToShow,
        R = o.centerMode,
        N = o.rtl,
        G = o.centerPadding
      if (R) {
        var W = (m - 1) / 2 + 1
        return parseInt(G) > 0 && (W += 1), N && m % 2 === 0 && (W += 1), W
      }
      return N ? 0 : m - 1
    }),
    _ = (ie.slidesOnLeft = function (o) {
      var m = o.slidesToShow,
        R = o.centerMode,
        N = o.rtl,
        G = o.centerPadding
      if (R) {
        var W = (m - 1) / 2 + 1
        return parseInt(G) > 0 && (W += 1), !N && m % 2 === 0 && (W += 1), W
      }
      return N ? m - 1 : 0
    })
  ie.canUseDOM = function () {
    return !!(
      typeof window < 'u' &&
      window.document &&
      window.document.createElement
    )
  }
  var f = (ie.validSettings = Object.keys(r.default))
  function te(T) {
    return f.reduce(function (o, m) {
      return T.hasOwnProperty(m) && (o[m] = T[m]), o
    }, {})
  }
  return ie
}
var Zi = {},
  _h
function bv() {
  if (_h) return Zi
  ;(_h = 1),
    Object.defineProperty(Zi, '__esModule', { value: !0 }),
    (Zi.Track = void 0)
  var c = s(Kt()),
    r = s(Sr()),
    u = $i()
  function s(A) {
    return A && A.__esModule ? A : { default: A }
  }
  function h(A) {
    '@babel/helpers - typeof'
    return (
      (h =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (v) {
              return typeof v
            }
          : function (v) {
              return v &&
                typeof Symbol == 'function' &&
                v.constructor === Symbol &&
                v !== Symbol.prototype
                ? 'symbol'
                : typeof v
            }),
      h(A)
    )
  }
  function g() {
    return (
      (g = Object.assign
        ? Object.assign.bind()
        : function (A) {
            for (var v = 1; v < arguments.length; v++) {
              var q = arguments[v]
              for (var V in q)
                Object.prototype.hasOwnProperty.call(q, V) && (A[V] = q[V])
            }
            return A
          }),
      g.apply(this, arguments)
    )
  }
  function b(A, v) {
    if (!(A instanceof v))
      throw new TypeError('Cannot call a class as a function')
  }
  function x(A, v) {
    for (var q = 0; q < v.length; q++) {
      var V = v[q]
      ;(V.enumerable = V.enumerable || !1),
        (V.configurable = !0),
        'value' in V && (V.writable = !0),
        Object.defineProperty(A, fe(V.key), V)
    }
  }
  function O(A, v, q) {
    return (
      v && x(A.prototype, v),
      Object.defineProperty(A, 'prototype', { writable: !1 }),
      A
    )
  }
  function y(A, v) {
    if (typeof v != 'function' && v !== null)
      throw new TypeError('Super expression must either be null or a function')
    ;(A.prototype = Object.create(v && v.prototype, {
      constructor: { value: A, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(A, 'prototype', { writable: !1 }),
      v && M(A, v)
  }
  function M(A, v) {
    return (
      (M = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (V, L) {
            return (V.__proto__ = L), V
          }),
      M(A, v)
    )
  }
  function Q(A) {
    var v = ee()
    return function () {
      var V = k(A),
        L
      if (v) {
        var U = k(this).constructor
        L = Reflect.construct(V, arguments, U)
      } else L = V.apply(this, arguments)
      return X(this, L)
    }
  }
  function X(A, v) {
    if (v && (h(v) === 'object' || typeof v == 'function')) return v
    if (v !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    return ae(A)
  }
  function ae(A) {
    if (A === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return A
  }
  function ee() {
    try {
      var A = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
    } catch {}
    return (ee = function () {
      return !!A
    })()
  }
  function k(A) {
    return (
      (k = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (q) {
            return q.__proto__ || Object.getPrototypeOf(q)
          }),
      k(A)
    )
  }
  function le(A, v) {
    var q = Object.keys(A)
    if (Object.getOwnPropertySymbols) {
      var V = Object.getOwnPropertySymbols(A)
      v &&
        (V = V.filter(function (L) {
          return Object.getOwnPropertyDescriptor(A, L).enumerable
        })),
        q.push.apply(q, V)
    }
    return q
  }
  function ce(A) {
    for (var v = 1; v < arguments.length; v++) {
      var q = arguments[v] != null ? arguments[v] : {}
      v % 2
        ? le(Object(q), !0).forEach(function (V) {
            oe(A, V, q[V])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(q))
        : le(Object(q)).forEach(function (V) {
            Object.defineProperty(A, V, Object.getOwnPropertyDescriptor(q, V))
          })
    }
    return A
  }
  function oe(A, v, q) {
    return (
      (v = fe(v)),
      v in A
        ? Object.defineProperty(A, v, {
            value: q,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (A[v] = q),
      A
    )
  }
  function fe(A) {
    var v = ge(A, 'string')
    return h(v) == 'symbol' ? v : String(v)
  }
  function ge(A, v) {
    if (h(A) != 'object' || !A) return A
    var q = A[Symbol.toPrimitive]
    if (q !== void 0) {
      var V = q.call(A, v)
      if (h(V) != 'object') return V
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (v === 'string' ? String : Number)(A)
  }
  var E = function (v) {
      var q, V, L, U, I
      v.rtl ? (I = v.slideCount - 1 - v.index) : (I = v.index),
        (L = I < 0 || I >= v.slideCount),
        v.centerMode
          ? ((U = Math.floor(v.slidesToShow / 2)),
            (V = (I - v.currentSlide) % v.slideCount === 0),
            I > v.currentSlide - U - 1 && I <= v.currentSlide + U && (q = !0))
          : (q = v.currentSlide <= I && I < v.currentSlide + v.slidesToShow)
      var _
      v.targetSlide < 0
        ? (_ = v.targetSlide + v.slideCount)
        : v.targetSlide >= v.slideCount
        ? (_ = v.targetSlide - v.slideCount)
        : (_ = v.targetSlide)
      var f = I === _
      return {
        'slick-slide': !0,
        'slick-active': q,
        'slick-center': V,
        'slick-cloned': L,
        'slick-current': f,
      }
    },
    D = function (v) {
      var q = {}
      return (
        (v.variableWidth === void 0 || v.variableWidth === !1) &&
          (q.width = v.slideWidth),
        v.fade &&
          ((q.position = 'relative'),
          v.vertical
            ? (q.top = -v.index * parseInt(v.slideHeight))
            : (q.left = -v.index * parseInt(v.slideWidth)),
          (q.opacity = v.currentSlide === v.index ? 1 : 0),
          (q.zIndex = v.currentSlide === v.index ? 999 : 998),
          v.useCSS &&
            (q.transition =
              'opacity ' +
              v.speed +
              'ms ' +
              v.cssEase +
              ', visibility ' +
              v.speed +
              'ms ' +
              v.cssEase)),
        q
      )
    },
    j = function (v, q) {
      return v.key || q
    },
    K = function (v) {
      var q,
        V = [],
        L = [],
        U = [],
        I = c.default.Children.count(v.children),
        _ = (0, u.lazyStartIndex)(v),
        f = (0, u.lazyEndIndex)(v)
      return (
        c.default.Children.forEach(v.children, function (te, T) {
          var o,
            m = {
              message: 'children',
              index: T,
              slidesToScroll: v.slidesToScroll,
              currentSlide: v.currentSlide,
            }
          !v.lazyLoad || (v.lazyLoad && v.lazyLoadedList.indexOf(T) >= 0)
            ? (o = te)
            : (o = c.default.createElement('div', null))
          var R = D(ce(ce({}, v), {}, { index: T })),
            N = o.props.className || '',
            G = E(ce(ce({}, v), {}, { index: T }))
          if (
            (V.push(
              c.default.cloneElement(o, {
                key: 'original' + j(o, T),
                'data-index': T,
                className: (0, r.default)(G, N),
                tabIndex: '-1',
                'aria-hidden': !G['slick-active'],
                style: ce(ce({ outline: 'none' }, o.props.style || {}), R),
                onClick: function (ne) {
                  o.props && o.props.onClick && o.props.onClick(ne),
                    v.focusOnSelect && v.focusOnSelect(m)
                },
              })
            ),
            v.infinite && v.fade === !1)
          ) {
            var W = I - T
            W <= (0, u.getPreClones)(v) &&
              ((q = -W),
              q >= _ && (o = te),
              (G = E(ce(ce({}, v), {}, { index: q }))),
              L.push(
                c.default.cloneElement(o, {
                  key: 'precloned' + j(o, q),
                  'data-index': q,
                  tabIndex: '-1',
                  className: (0, r.default)(G, N),
                  'aria-hidden': !G['slick-active'],
                  style: ce(ce({}, o.props.style || {}), R),
                  onClick: function (ne) {
                    o.props && o.props.onClick && o.props.onClick(ne),
                      v.focusOnSelect && v.focusOnSelect(m)
                  },
                })
              )),
              (q = I + T),
              q < f && (o = te),
              (G = E(ce(ce({}, v), {}, { index: q }))),
              U.push(
                c.default.cloneElement(o, {
                  key: 'postcloned' + j(o, q),
                  'data-index': q,
                  tabIndex: '-1',
                  className: (0, r.default)(G, N),
                  'aria-hidden': !G['slick-active'],
                  style: ce(ce({}, o.props.style || {}), R),
                  onClick: function (ne) {
                    o.props && o.props.onClick && o.props.onClick(ne),
                      v.focusOnSelect && v.focusOnSelect(m)
                  },
                })
              )
          }
        }),
        v.rtl ? L.concat(V, U).reverse() : L.concat(V, U)
      )
    }
  return (
    (Zi.Track = (function (A) {
      y(q, A)
      var v = Q(q)
      function q() {
        var V
        b(this, q)
        for (var L = arguments.length, U = new Array(L), I = 0; I < L; I++)
          U[I] = arguments[I]
        return (
          (V = v.call.apply(v, [this].concat(U))),
          oe(ae(V), 'node', null),
          oe(ae(V), 'handleRef', function (_) {
            V.node = _
          }),
          V
        )
      }
      return (
        O(q, [
          {
            key: 'render',
            value: function () {
              var L = K(this.props),
                U = this.props,
                I = U.onMouseEnter,
                _ = U.onMouseOver,
                f = U.onMouseLeave,
                te = { onMouseEnter: I, onMouseOver: _, onMouseLeave: f }
              return c.default.createElement(
                'div',
                g(
                  {
                    ref: this.handleRef,
                    className: 'slick-track',
                    style: this.props.trackStyle,
                  },
                  te
                ),
                L
              )
            },
          },
        ]),
        q
      )
    })(c.default.PureComponent)),
    Zi
  )
}
var Ki = {},
  Ah
function Sv() {
  if (Ah) return Ki
  Ah = 1
  function c(E) {
    '@babel/helpers - typeof'
    return (
      (c =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (D) {
              return typeof D
            }
          : function (D) {
              return D &&
                typeof Symbol == 'function' &&
                D.constructor === Symbol &&
                D !== Symbol.prototype
                ? 'symbol'
                : typeof D
            }),
      c(E)
    )
  }
  Object.defineProperty(Ki, '__esModule', { value: !0 }), (Ki.Dots = void 0)
  var r = h(Kt()),
    u = h(Sr()),
    s = $i()
  function h(E) {
    return E && E.__esModule ? E : { default: E }
  }
  function g(E, D) {
    var j = Object.keys(E)
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(E)
      D &&
        (K = K.filter(function (A) {
          return Object.getOwnPropertyDescriptor(E, A).enumerable
        })),
        j.push.apply(j, K)
    }
    return j
  }
  function b(E) {
    for (var D = 1; D < arguments.length; D++) {
      var j = arguments[D] != null ? arguments[D] : {}
      D % 2
        ? g(Object(j), !0).forEach(function (K) {
            x(E, K, j[K])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(j))
        : g(Object(j)).forEach(function (K) {
            Object.defineProperty(E, K, Object.getOwnPropertyDescriptor(j, K))
          })
    }
    return E
  }
  function x(E, D, j) {
    return (
      (D = Q(D)),
      D in E
        ? Object.defineProperty(E, D, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (E[D] = j),
      E
    )
  }
  function O(E, D) {
    if (!(E instanceof D))
      throw new TypeError('Cannot call a class as a function')
  }
  function y(E, D) {
    for (var j = 0; j < D.length; j++) {
      var K = D[j]
      ;(K.enumerable = K.enumerable || !1),
        (K.configurable = !0),
        'value' in K && (K.writable = !0),
        Object.defineProperty(E, Q(K.key), K)
    }
  }
  function M(E, D, j) {
    return (
      D && y(E.prototype, D),
      Object.defineProperty(E, 'prototype', { writable: !1 }),
      E
    )
  }
  function Q(E) {
    var D = X(E, 'string')
    return c(D) == 'symbol' ? D : String(D)
  }
  function X(E, D) {
    if (c(E) != 'object' || !E) return E
    var j = E[Symbol.toPrimitive]
    if (j !== void 0) {
      var K = j.call(E, D)
      if (c(K) != 'object') return K
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return String(E)
  }
  function ae(E, D) {
    if (typeof D != 'function' && D !== null)
      throw new TypeError('Super expression must either be null or a function')
    ;(E.prototype = Object.create(D && D.prototype, {
      constructor: { value: E, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(E, 'prototype', { writable: !1 }),
      D && ee(E, D)
  }
  function ee(E, D) {
    return (
      (ee = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (K, A) {
            return (K.__proto__ = A), K
          }),
      ee(E, D)
    )
  }
  function k(E) {
    var D = oe()
    return function () {
      var K = fe(E),
        A
      if (D) {
        var v = fe(this).constructor
        A = Reflect.construct(K, arguments, v)
      } else A = K.apply(this, arguments)
      return le(this, A)
    }
  }
  function le(E, D) {
    if (D && (c(D) === 'object' || typeof D == 'function')) return D
    if (D !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    return ce(E)
  }
  function ce(E) {
    if (E === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return E
  }
  function oe() {
    try {
      var E = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
    } catch {}
    return (oe = function () {
      return !!E
    })()
  }
  function fe(E) {
    return (
      (fe = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (j) {
            return j.__proto__ || Object.getPrototypeOf(j)
          }),
      fe(E)
    )
  }
  var ge = function (D) {
    var j
    return (
      D.infinite
        ? (j = Math.ceil(D.slideCount / D.slidesToScroll))
        : (j =
            Math.ceil((D.slideCount - D.slidesToShow) / D.slidesToScroll) + 1),
      j
    )
  }
  return (
    (Ki.Dots = (function (E) {
      ae(j, E)
      var D = k(j)
      function j() {
        return O(this, j), D.apply(this, arguments)
      }
      return (
        M(j, [
          {
            key: 'clickHandler',
            value: function (A, v) {
              v.preventDefault(), this.props.clickHandler(A)
            },
          },
          {
            key: 'render',
            value: function () {
              for (
                var A = this.props,
                  v = A.onMouseEnter,
                  q = A.onMouseOver,
                  V = A.onMouseLeave,
                  L = A.infinite,
                  U = A.slidesToScroll,
                  I = A.slidesToShow,
                  _ = A.slideCount,
                  f = A.currentSlide,
                  te = ge({
                    slideCount: _,
                    slidesToScroll: U,
                    slidesToShow: I,
                    infinite: L,
                  }),
                  T = { onMouseEnter: v, onMouseOver: q, onMouseLeave: V },
                  o = [],
                  m = 0;
                m < te;
                m++
              ) {
                var R = (m + 1) * U - 1,
                  N = L ? R : (0, s.clamp)(R, 0, _ - 1),
                  G = N - (U - 1),
                  W = L ? G : (0, s.clamp)(G, 0, _ - 1),
                  Z = (0, u.default)({
                    'slick-active': L ? f >= W && f <= N : f === W,
                  }),
                  ne = {
                    message: 'dots',
                    index: m,
                    slidesToScroll: U,
                    currentSlide: f,
                  },
                  ue = this.clickHandler.bind(this, ne)
                o = o.concat(
                  r.default.createElement(
                    'li',
                    { key: m, className: Z },
                    r.default.cloneElement(this.props.customPaging(m), {
                      onClick: ue,
                    })
                  )
                )
              }
              return r.default.cloneElement(
                this.props.appendDots(o),
                b({ className: this.props.dotsClass }, T)
              )
            },
          },
        ]),
        j
      )
    })(r.default.PureComponent)),
    Ki
  )
}
var ta = {},
  wh
function Ov() {
  if (wh) return ta
  wh = 1
  function c(E) {
    '@babel/helpers - typeof'
    return (
      (c =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (D) {
              return typeof D
            }
          : function (D) {
              return D &&
                typeof Symbol == 'function' &&
                D.constructor === Symbol &&
                D !== Symbol.prototype
                ? 'symbol'
                : typeof D
            }),
      c(E)
    )
  }
  Object.defineProperty(ta, '__esModule', { value: !0 }),
    (ta.PrevArrow = ta.NextArrow = void 0)
  var r = h(Kt()),
    u = h(Sr()),
    s = $i()
  function h(E) {
    return E && E.__esModule ? E : { default: E }
  }
  function g() {
    return (
      (g = Object.assign
        ? Object.assign.bind()
        : function (E) {
            for (var D = 1; D < arguments.length; D++) {
              var j = arguments[D]
              for (var K in j)
                Object.prototype.hasOwnProperty.call(j, K) && (E[K] = j[K])
            }
            return E
          }),
      g.apply(this, arguments)
    )
  }
  function b(E, D) {
    var j = Object.keys(E)
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(E)
      D &&
        (K = K.filter(function (A) {
          return Object.getOwnPropertyDescriptor(E, A).enumerable
        })),
        j.push.apply(j, K)
    }
    return j
  }
  function x(E) {
    for (var D = 1; D < arguments.length; D++) {
      var j = arguments[D] != null ? arguments[D] : {}
      D % 2
        ? b(Object(j), !0).forEach(function (K) {
            O(E, K, j[K])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(j))
        : b(Object(j)).forEach(function (K) {
            Object.defineProperty(E, K, Object.getOwnPropertyDescriptor(j, K))
          })
    }
    return E
  }
  function O(E, D, j) {
    return (
      (D = X(D)),
      D in E
        ? Object.defineProperty(E, D, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (E[D] = j),
      E
    )
  }
  function y(E, D) {
    if (!(E instanceof D))
      throw new TypeError('Cannot call a class as a function')
  }
  function M(E, D) {
    for (var j = 0; j < D.length; j++) {
      var K = D[j]
      ;(K.enumerable = K.enumerable || !1),
        (K.configurable = !0),
        'value' in K && (K.writable = !0),
        Object.defineProperty(E, X(K.key), K)
    }
  }
  function Q(E, D, j) {
    return (
      D && M(E.prototype, D),
      Object.defineProperty(E, 'prototype', { writable: !1 }),
      E
    )
  }
  function X(E) {
    var D = ae(E, 'string')
    return c(D) == 'symbol' ? D : String(D)
  }
  function ae(E, D) {
    if (c(E) != 'object' || !E) return E
    var j = E[Symbol.toPrimitive]
    if (j !== void 0) {
      var K = j.call(E, D)
      if (c(K) != 'object') return K
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return String(E)
  }
  function ee(E, D) {
    if (typeof D != 'function' && D !== null)
      throw new TypeError('Super expression must either be null or a function')
    ;(E.prototype = Object.create(D && D.prototype, {
      constructor: { value: E, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(E, 'prototype', { writable: !1 }),
      D && k(E, D)
  }
  function k(E, D) {
    return (
      (k = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (K, A) {
            return (K.__proto__ = A), K
          }),
      k(E, D)
    )
  }
  function le(E) {
    var D = fe()
    return function () {
      var K = ge(E),
        A
      if (D) {
        var v = ge(this).constructor
        A = Reflect.construct(K, arguments, v)
      } else A = K.apply(this, arguments)
      return ce(this, A)
    }
  }
  function ce(E, D) {
    if (D && (c(D) === 'object' || typeof D == 'function')) return D
    if (D !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    return oe(E)
  }
  function oe(E) {
    if (E === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return E
  }
  function fe() {
    try {
      var E = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
    } catch {}
    return (fe = function () {
      return !!E
    })()
  }
  function ge(E) {
    return (
      (ge = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (j) {
            return j.__proto__ || Object.getPrototypeOf(j)
          }),
      ge(E)
    )
  }
  return (
    (ta.PrevArrow = (function (E) {
      ee(j, E)
      var D = le(j)
      function j() {
        return y(this, j), D.apply(this, arguments)
      }
      return (
        Q(j, [
          {
            key: 'clickHandler',
            value: function (A, v) {
              v && v.preventDefault(), this.props.clickHandler(A, v)
            },
          },
          {
            key: 'render',
            value: function () {
              var A = { 'slick-arrow': !0, 'slick-prev': !0 },
                v = this.clickHandler.bind(this, { message: 'previous' })
              !this.props.infinite &&
                (this.props.currentSlide === 0 ||
                  this.props.slideCount <= this.props.slidesToShow) &&
                ((A['slick-disabled'] = !0), (v = null))
              var q = {
                  key: '0',
                  'data-role': 'none',
                  className: (0, u.default)(A),
                  style: { display: 'block' },
                  onClick: v,
                },
                V = {
                  currentSlide: this.props.currentSlide,
                  slideCount: this.props.slideCount,
                },
                L
              return (
                this.props.prevArrow
                  ? (L = r.default.cloneElement(
                      this.props.prevArrow,
                      x(x({}, q), V)
                    ))
                  : (L = r.default.createElement(
                      'button',
                      g({ key: '0', type: 'button' }, q),
                      ' ',
                      'Previous'
                    )),
                L
              )
            },
          },
        ]),
        j
      )
    })(r.default.PureComponent)),
    (ta.NextArrow = (function (E) {
      ee(j, E)
      var D = le(j)
      function j() {
        return y(this, j), D.apply(this, arguments)
      }
      return (
        Q(j, [
          {
            key: 'clickHandler',
            value: function (A, v) {
              v && v.preventDefault(), this.props.clickHandler(A, v)
            },
          },
          {
            key: 'render',
            value: function () {
              var A = { 'slick-arrow': !0, 'slick-next': !0 },
                v = this.clickHandler.bind(this, { message: 'next' })
              ;(0, s.canGoNext)(this.props) ||
                ((A['slick-disabled'] = !0), (v = null))
              var q = {
                  key: '1',
                  'data-role': 'none',
                  className: (0, u.default)(A),
                  style: { display: 'block' },
                  onClick: v,
                },
                V = {
                  currentSlide: this.props.currentSlide,
                  slideCount: this.props.slideCount,
                },
                L
              return (
                this.props.nextArrow
                  ? (L = r.default.cloneElement(
                      this.props.nextArrow,
                      x(x({}, q), V)
                    ))
                  : (L = r.default.createElement(
                      'button',
                      g({ key: '1', type: 'button' }, q),
                      ' ',
                      'Next'
                    )),
                L
              )
            },
          },
        ]),
        j
      )
    })(r.default.PureComponent)),
    ta
  )
}
var Kh = (function () {
    if (typeof Map < 'u') return Map
    function c(r, u) {
      var s = -1
      return (
        r.some(function (h, g) {
          return h[0] === u ? ((s = g), !0) : !1
        }),
        s
      )
    }
    return (function () {
      function r() {
        this.__entries__ = []
      }
      return (
        Object.defineProperty(r.prototype, 'size', {
          get: function () {
            return this.__entries__.length
          },
          enumerable: !0,
          configurable: !0,
        }),
        (r.prototype.get = function (u) {
          var s = c(this.__entries__, u),
            h = this.__entries__[s]
          return h && h[1]
        }),
        (r.prototype.set = function (u, s) {
          var h = c(this.__entries__, u)
          ~h ? (this.__entries__[h][1] = s) : this.__entries__.push([u, s])
        }),
        (r.prototype.delete = function (u) {
          var s = this.__entries__,
            h = c(s, u)
          ~h && s.splice(h, 1)
        }),
        (r.prototype.has = function (u) {
          return !!~c(this.__entries__, u)
        }),
        (r.prototype.clear = function () {
          this.__entries__.splice(0)
        }),
        (r.prototype.forEach = function (u, s) {
          s === void 0 && (s = null)
          for (var h = 0, g = this.__entries__; h < g.length; h++) {
            var b = g[h]
            u.call(s, b[1], b[0])
          }
        }),
        r
      )
    })()
  })(),
  ao =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  vr = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
      ? self
      : typeof window < 'u' && window.Math === Math
      ? window
      : Function('return this')()
  })(),
  Tv = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(vr)
      : function (c) {
          return setTimeout(function () {
            return c(Date.now())
          }, 1e3 / 60)
        }
  })(),
  xv = 2
function Ev(c, r) {
  var u = !1,
    s = !1,
    h = 0
  function g() {
    u && ((u = !1), c()), s && x()
  }
  function b() {
    Tv(g)
  }
  function x() {
    var O = Date.now()
    if (u) {
      if (O - h < xv) return
      s = !0
    } else (u = !0), (s = !1), setTimeout(b, r)
    h = O
  }
  return x
}
var _v = 20,
  Av = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  wv = typeof MutationObserver < 'u',
  Rv = (function () {
    function c() {
      ;(this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Ev(this.refresh.bind(this), _v))
    }
    return (
      (c.prototype.addObserver = function (r) {
        ~this.observers_.indexOf(r) || this.observers_.push(r),
          this.connected_ || this.connect_()
      }),
      (c.prototype.removeObserver = function (r) {
        var u = this.observers_,
          s = u.indexOf(r)
        ~s && u.splice(s, 1), !u.length && this.connected_ && this.disconnect_()
      }),
      (c.prototype.refresh = function () {
        var r = this.updateObservers_()
        r && this.refresh()
      }),
      (c.prototype.updateObservers_ = function () {
        var r = this.observers_.filter(function (u) {
          return u.gatherActive(), u.hasActive()
        })
        return (
          r.forEach(function (u) {
            return u.broadcastActive()
          }),
          r.length > 0
        )
      }),
      (c.prototype.connect_ = function () {
        !ao ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          wv
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0))
      }),
      (c.prototype.disconnect_ = function () {
        !ao ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1))
      }),
      (c.prototype.onTransitionEnd_ = function (r) {
        var u = r.propertyName,
          s = u === void 0 ? '' : u,
          h = Av.some(function (g) {
            return !!~s.indexOf(g)
          })
        h && this.refresh()
      }),
      (c.getInstance = function () {
        return this.instance_ || (this.instance_ = new c()), this.instance_
      }),
      (c.instance_ = null),
      c
    )
  })(),
  Jh = function (c, r) {
    for (var u = 0, s = Object.keys(r); u < s.length; u++) {
      var h = s[u]
      Object.defineProperty(c, h, {
        value: r[h],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      })
    }
    return c
  },
  ka = function (c) {
    var r = c && c.ownerDocument && c.ownerDocument.defaultView
    return r || vr
  },
  Ph = Or(0, 0, 0, 0)
function yr(c) {
  return parseFloat(c) || 0
}
function Rh(c) {
  for (var r = [], u = 1; u < arguments.length; u++) r[u - 1] = arguments[u]
  return r.reduce(function (s, h) {
    var g = c['border-' + h + '-width']
    return s + yr(g)
  }, 0)
}
function Mv(c) {
  for (
    var r = ['top', 'right', 'bottom', 'left'], u = {}, s = 0, h = r;
    s < h.length;
    s++
  ) {
    var g = h[s],
      b = c['padding-' + g]
    u[g] = yr(b)
  }
  return u
}
function zv(c) {
  var r = c.getBBox()
  return Or(0, 0, r.width, r.height)
}
function Dv(c) {
  var r = c.clientWidth,
    u = c.clientHeight
  if (!r && !u) return Ph
  var s = ka(c).getComputedStyle(c),
    h = Mv(s),
    g = h.left + h.right,
    b = h.top + h.bottom,
    x = yr(s.width),
    O = yr(s.height)
  if (
    (s.boxSizing === 'border-box' &&
      (Math.round(x + g) !== r && (x -= Rh(s, 'left', 'right') + g),
      Math.round(O + b) !== u && (O -= Rh(s, 'top', 'bottom') + b)),
    !Cv(c))
  ) {
    var y = Math.round(x + g) - r,
      M = Math.round(O + b) - u
    Math.abs(y) !== 1 && (x -= y), Math.abs(M) !== 1 && (O -= M)
  }
  return Or(h.left, h.top, x, O)
}
var jv = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (c) {
        return c instanceof ka(c).SVGGraphicsElement
      }
    : function (c) {
        return c instanceof ka(c).SVGElement && typeof c.getBBox == 'function'
      }
})()
function Cv(c) {
  return c === ka(c).document.documentElement
}
function Nv(c) {
  return ao ? (jv(c) ? zv(c) : Dv(c)) : Ph
}
function Lv(c) {
  var r = c.x,
    u = c.y,
    s = c.width,
    h = c.height,
    g = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    b = Object.create(g.prototype)
  return (
    Jh(b, {
      x: r,
      y: u,
      width: s,
      height: h,
      top: u,
      right: r + s,
      bottom: h + u,
      left: r,
    }),
    b
  )
}
function Or(c, r, u, s) {
  return { x: c, y: r, width: u, height: s }
}
var Hv = (function () {
    function c(r) {
      ;(this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Or(0, 0, 0, 0)),
        (this.target = r)
    }
    return (
      (c.prototype.isActive = function () {
        var r = Nv(this.target)
        return (
          (this.contentRect_ = r),
          r.width !== this.broadcastWidth || r.height !== this.broadcastHeight
        )
      }),
      (c.prototype.broadcastRect = function () {
        var r = this.contentRect_
        return (
          (this.broadcastWidth = r.width), (this.broadcastHeight = r.height), r
        )
      }),
      c
    )
  })(),
  Uv = (function () {
    function c(r, u) {
      var s = Lv(u)
      Jh(this, { target: r, contentRect: s })
    }
    return c
  })(),
  qv = (function () {
    function c(r, u, s) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Kh()),
        typeof r != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.'
        )
      ;(this.callback_ = r), (this.controller_ = u), (this.callbackCtx_ = s)
    }
    return (
      (c.prototype.observe = function (r) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(r instanceof ka(r).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var u = this.observations_
          u.has(r) ||
            (u.set(r, new Hv(r)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
      }),
      (c.prototype.unobserve = function (r) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(r instanceof ka(r).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var u = this.observations_
          u.has(r) &&
            (u.delete(r), u.size || this.controller_.removeObserver(this))
        }
      }),
      (c.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this)
      }),
      (c.prototype.gatherActive = function () {
        var r = this
        this.clearActive(),
          this.observations_.forEach(function (u) {
            u.isActive() && r.activeObservations_.push(u)
          })
      }),
      (c.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var r = this.callbackCtx_,
            u = this.activeObservations_.map(function (s) {
              return new Uv(s.target, s.broadcastRect())
            })
          this.callback_.call(r, u, r), this.clearActive()
        }
      }),
      (c.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      }),
      (c.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      }),
      c
    )
  })(),
  $h = typeof WeakMap < 'u' ? new WeakMap() : new Kh(),
  Wh = (function () {
    function c(r) {
      if (!(this instanceof c))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var u = Rv.getInstance(),
        s = new qv(r, u, this)
      $h.set(this, s)
    }
    return c
  })()
;['observe', 'unobserve', 'disconnect'].forEach(function (c) {
  Wh.prototype[c] = function () {
    var r
    return (r = $h.get(this))[c].apply(r, arguments)
  }
})
var Bv = (function () {
  return typeof vr.ResizeObserver < 'u' ? vr.ResizeObserver : Wh
})()
const Yv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bv },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Gv = vm(Yv)
var Mh
function Xv() {
  if (Mh) return ki
  ;(Mh = 1),
    Object.defineProperty(ki, '__esModule', { value: !0 }),
    (ki.InnerSlider = void 0)
  var c = y(Kt()),
    r = y(vv()),
    u = y(yv()),
    s = y(Sr()),
    h = $i(),
    g = bv(),
    b = Sv(),
    x = Ov(),
    O = y(Gv)
  function y(L) {
    return L && L.__esModule ? L : { default: L }
  }
  function M(L) {
    '@babel/helpers - typeof'
    return (
      (M =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (U) {
              return typeof U
            }
          : function (U) {
              return U &&
                typeof Symbol == 'function' &&
                U.constructor === Symbol &&
                U !== Symbol.prototype
                ? 'symbol'
                : typeof U
            }),
      M(L)
    )
  }
  function Q() {
    return (
      (Q = Object.assign
        ? Object.assign.bind()
        : function (L) {
            for (var U = 1; U < arguments.length; U++) {
              var I = arguments[U]
              for (var _ in I)
                Object.prototype.hasOwnProperty.call(I, _) && (L[_] = I[_])
            }
            return L
          }),
      Q.apply(this, arguments)
    )
  }
  function X(L, U) {
    if (L == null) return {}
    var I = ae(L, U),
      _,
      f
    if (Object.getOwnPropertySymbols) {
      var te = Object.getOwnPropertySymbols(L)
      for (f = 0; f < te.length; f++)
        (_ = te[f]),
          !(U.indexOf(_) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(L, _) &&
            (I[_] = L[_])
    }
    return I
  }
  function ae(L, U) {
    if (L == null) return {}
    var I = {},
      _ = Object.keys(L),
      f,
      te
    for (te = 0; te < _.length; te++)
      (f = _[te]), !(U.indexOf(f) >= 0) && (I[f] = L[f])
    return I
  }
  function ee(L, U) {
    var I = Object.keys(L)
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(L)
      U &&
        (_ = _.filter(function (f) {
          return Object.getOwnPropertyDescriptor(L, f).enumerable
        })),
        I.push.apply(I, _)
    }
    return I
  }
  function k(L) {
    for (var U = 1; U < arguments.length; U++) {
      var I = arguments[U] != null ? arguments[U] : {}
      U % 2
        ? ee(Object(I), !0).forEach(function (_) {
            v(L, _, I[_])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(I))
        : ee(Object(I)).forEach(function (_) {
            Object.defineProperty(L, _, Object.getOwnPropertyDescriptor(I, _))
          })
    }
    return L
  }
  function le(L, U) {
    if (!(L instanceof U))
      throw new TypeError('Cannot call a class as a function')
  }
  function ce(L, U) {
    for (var I = 0; I < U.length; I++) {
      var _ = U[I]
      ;(_.enumerable = _.enumerable || !1),
        (_.configurable = !0),
        'value' in _ && (_.writable = !0),
        Object.defineProperty(L, q(_.key), _)
    }
  }
  function oe(L, U, I) {
    return (
      U && ce(L.prototype, U),
      Object.defineProperty(L, 'prototype', { writable: !1 }),
      L
    )
  }
  function fe(L, U) {
    if (typeof U != 'function' && U !== null)
      throw new TypeError('Super expression must either be null or a function')
    ;(L.prototype = Object.create(U && U.prototype, {
      constructor: { value: L, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(L, 'prototype', { writable: !1 }),
      U && ge(L, U)
  }
  function ge(L, U) {
    return (
      (ge = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (_, f) {
            return (_.__proto__ = f), _
          }),
      ge(L, U)
    )
  }
  function E(L) {
    var U = K()
    return function () {
      var _ = A(L),
        f
      if (U) {
        var te = A(this).constructor
        f = Reflect.construct(_, arguments, te)
      } else f = _.apply(this, arguments)
      return D(this, f)
    }
  }
  function D(L, U) {
    if (U && (M(U) === 'object' || typeof U == 'function')) return U
    if (U !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      )
    return j(L)
  }
  function j(L) {
    if (L === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return L
  }
  function K() {
    try {
      var L = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      )
    } catch {}
    return (K = function () {
      return !!L
    })()
  }
  function A(L) {
    return (
      (A = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (I) {
            return I.__proto__ || Object.getPrototypeOf(I)
          }),
      A(L)
    )
  }
  function v(L, U, I) {
    return (
      (U = q(U)),
      U in L
        ? Object.defineProperty(L, U, {
            value: I,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (L[U] = I),
      L
    )
  }
  function q(L) {
    var U = V(L, 'string')
    return M(U) == 'symbol' ? U : String(U)
  }
  function V(L, U) {
    if (M(L) != 'object' || !L) return L
    var I = L[Symbol.toPrimitive]
    if (I !== void 0) {
      var _ = I.call(L, U)
      if (M(_) != 'object') return _
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return (U === 'string' ? String : Number)(L)
  }
  return (
    (ki.InnerSlider = (function (L) {
      fe(I, L)
      var U = E(I)
      function I(_) {
        var f
        le(this, I),
          (f = U.call(this, _)),
          v(j(f), 'listRefHandler', function (T) {
            return (f.list = T)
          }),
          v(j(f), 'trackRefHandler', function (T) {
            return (f.track = T)
          }),
          v(j(f), 'adaptHeight', function () {
            if (f.props.adaptiveHeight && f.list) {
              var T = f.list.querySelector(
                '[data-index="'.concat(f.state.currentSlide, '"]')
              )
              f.list.style.height = (0, h.getHeight)(T) + 'px'
            }
          }),
          v(j(f), 'componentDidMount', function () {
            if ((f.props.onInit && f.props.onInit(), f.props.lazyLoad)) {
              var T = (0, h.getOnDemandLazySlides)(k(k({}, f.props), f.state))
              T.length > 0 &&
                (f.setState(function (m) {
                  return { lazyLoadedList: m.lazyLoadedList.concat(T) }
                }),
                f.props.onLazyLoad && f.props.onLazyLoad(T))
            }
            var o = k({ listRef: f.list, trackRef: f.track }, f.props)
            f.updateState(o, !0, function () {
              f.adaptHeight(), f.props.autoplay && f.autoPlay('update')
            }),
              f.props.lazyLoad === 'progressive' &&
                (f.lazyLoadTimer = setInterval(f.progressiveLazyLoad, 1e3)),
              (f.ro = new O.default(function () {
                f.state.animating
                  ? (f.onWindowResized(!1),
                    f.callbackTimers.push(
                      setTimeout(function () {
                        return f.onWindowResized()
                      }, f.props.speed)
                    ))
                  : f.onWindowResized()
              })),
              f.ro.observe(f.list),
              document.querySelectorAll &&
                Array.prototype.forEach.call(
                  document.querySelectorAll('.slick-slide'),
                  function (m) {
                    ;(m.onfocus = f.props.pauseOnFocus ? f.onSlideFocus : null),
                      (m.onblur = f.props.pauseOnFocus ? f.onSlideBlur : null)
                  }
                ),
              window.addEventListener
                ? window.addEventListener('resize', f.onWindowResized)
                : window.attachEvent('onresize', f.onWindowResized)
          }),
          v(j(f), 'componentWillUnmount', function () {
            f.animationEndCallback && clearTimeout(f.animationEndCallback),
              f.lazyLoadTimer && clearInterval(f.lazyLoadTimer),
              f.callbackTimers.length &&
                (f.callbackTimers.forEach(function (T) {
                  return clearTimeout(T)
                }),
                (f.callbackTimers = [])),
              window.addEventListener
                ? window.removeEventListener('resize', f.onWindowResized)
                : window.detachEvent('onresize', f.onWindowResized),
              f.autoplayTimer && clearInterval(f.autoplayTimer),
              f.ro.disconnect()
          }),
          v(j(f), 'componentDidUpdate', function (T) {
            if (
              (f.checkImagesLoad(),
              f.props.onReInit && f.props.onReInit(),
              f.props.lazyLoad)
            ) {
              var o = (0, h.getOnDemandLazySlides)(k(k({}, f.props), f.state))
              o.length > 0 &&
                (f.setState(function (N) {
                  return { lazyLoadedList: N.lazyLoadedList.concat(o) }
                }),
                f.props.onLazyLoad && f.props.onLazyLoad(o))
            }
            f.adaptHeight()
            var m = k(
                k({ listRef: f.list, trackRef: f.track }, f.props),
                f.state
              ),
              R = f.didPropsChange(T)
            R &&
              f.updateState(m, R, function () {
                f.state.currentSlide >=
                  c.default.Children.count(f.props.children) &&
                  f.changeSlide({
                    message: 'index',
                    index:
                      c.default.Children.count(f.props.children) -
                      f.props.slidesToShow,
                    currentSlide: f.state.currentSlide,
                  }),
                  f.props.autoplay ? f.autoPlay('update') : f.pause('paused')
              })
          }),
          v(j(f), 'onWindowResized', function (T) {
            f.debouncedResize && f.debouncedResize.cancel(),
              (f.debouncedResize = (0, u.default)(function () {
                return f.resizeWindow(T)
              }, 50)),
              f.debouncedResize()
          }),
          v(j(f), 'resizeWindow', function () {
            var T =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !0,
              o = !!(f.track && f.track.node)
            if (o) {
              var m = k(
                k({ listRef: f.list, trackRef: f.track }, f.props),
                f.state
              )
              f.updateState(m, T, function () {
                f.props.autoplay ? f.autoPlay('update') : f.pause('paused')
              }),
                f.setState({ animating: !1 }),
                clearTimeout(f.animationEndCallback),
                delete f.animationEndCallback
            }
          }),
          v(j(f), 'updateState', function (T, o, m) {
            var R = (0, h.initializedState)(T)
            T = k(k(k({}, T), R), {}, { slideIndex: R.currentSlide })
            var N = (0, h.getTrackLeft)(T)
            T = k(k({}, T), {}, { left: N })
            var G = (0, h.getTrackCSS)(T)
            ;(o ||
              c.default.Children.count(f.props.children) !==
                c.default.Children.count(T.children)) &&
              (R.trackStyle = G),
              f.setState(R, m)
          }),
          v(j(f), 'ssrInit', function () {
            if (f.props.variableWidth) {
              var T = 0,
                o = 0,
                m = [],
                R = (0, h.getPreClones)(
                  k(
                    k(k({}, f.props), f.state),
                    {},
                    { slideCount: f.props.children.length }
                  )
                ),
                N = (0, h.getPostClones)(
                  k(
                    k(k({}, f.props), f.state),
                    {},
                    { slideCount: f.props.children.length }
                  )
                )
              f.props.children.forEach(function (Ze) {
                m.push(Ze.props.style.width), (T += Ze.props.style.width)
              })
              for (var G = 0; G < R; G++)
                (o += m[m.length - 1 - G]), (T += m[m.length - 1 - G])
              for (var W = 0; W < N; W++) T += m[W]
              for (var Z = 0; Z < f.state.currentSlide; Z++) o += m[Z]
              var ne = { width: T + 'px', left: -o + 'px' }
              if (f.props.centerMode) {
                var ue = ''.concat(m[f.state.currentSlide], 'px')
                ne.left = 'calc('
                  .concat(ne.left, ' + (100% - ')
                  .concat(ue, ') / 2 ) ')
              }
              return { trackStyle: ne }
            }
            var ye = c.default.Children.count(f.props.children),
              Te = k(k(k({}, f.props), f.state), {}, { slideCount: ye }),
              Re = (0, h.getPreClones)(Te) + (0, h.getPostClones)(Te) + ye,
              Me = (100 / f.props.slidesToShow) * Re,
              Ae = 100 / Re,
              Se =
                (-Ae * ((0, h.getPreClones)(Te) + f.state.currentSlide) * Me) /
                100
            f.props.centerMode && (Se += (100 - (Ae * Me) / 100) / 2)
            var ze = { width: Me + '%', left: Se + '%' }
            return { slideWidth: Ae + '%', trackStyle: ze }
          }),
          v(j(f), 'checkImagesLoad', function () {
            var T =
                (f.list &&
                  f.list.querySelectorAll &&
                  f.list.querySelectorAll('.slick-slide img')) ||
                [],
              o = T.length,
              m = 0
            Array.prototype.forEach.call(T, function (R) {
              var N = function () {
                return ++m && m >= o && f.onWindowResized()
              }
              if (!R.onclick)
                R.onclick = function () {
                  return R.parentNode.focus()
                }
              else {
                var G = R.onclick
                R.onclick = function (W) {
                  G(W), R.parentNode.focus()
                }
              }
              R.onload ||
                (f.props.lazyLoad
                  ? (R.onload = function () {
                      f.adaptHeight(),
                        f.callbackTimers.push(
                          setTimeout(f.onWindowResized, f.props.speed)
                        )
                    })
                  : ((R.onload = N),
                    (R.onerror = function () {
                      N(), f.props.onLazyLoadError && f.props.onLazyLoadError()
                    })))
            })
          }),
          v(j(f), 'progressiveLazyLoad', function () {
            for (
              var T = [],
                o = k(k({}, f.props), f.state),
                m = f.state.currentSlide;
              m < f.state.slideCount + (0, h.getPostClones)(o);
              m++
            )
              if (f.state.lazyLoadedList.indexOf(m) < 0) {
                T.push(m)
                break
              }
            for (
              var R = f.state.currentSlide - 1;
              R >= -(0, h.getPreClones)(o);
              R--
            )
              if (f.state.lazyLoadedList.indexOf(R) < 0) {
                T.push(R)
                break
              }
            T.length > 0
              ? (f.setState(function (N) {
                  return { lazyLoadedList: N.lazyLoadedList.concat(T) }
                }),
                f.props.onLazyLoad && f.props.onLazyLoad(T))
              : f.lazyLoadTimer &&
                (clearInterval(f.lazyLoadTimer), delete f.lazyLoadTimer)
          }),
          v(j(f), 'slideHandler', function (T) {
            var o =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              m = f.props,
              R = m.asNavFor,
              N = m.beforeChange,
              G = m.onLazyLoad,
              W = m.speed,
              Z = m.afterChange,
              ne = f.state.currentSlide,
              ue = (0, h.slideHandler)(
                k(
                  k(k({ index: T }, f.props), f.state),
                  {},
                  { trackRef: f.track, useCSS: f.props.useCSS && !o }
                )
              ),
              ye = ue.state,
              Te = ue.nextState
            if (ye) {
              N && N(ne, ye.currentSlide)
              var Re = ye.lazyLoadedList.filter(function (Me) {
                return f.state.lazyLoadedList.indexOf(Me) < 0
              })
              G && Re.length > 0 && G(Re),
                !f.props.waitForAnimate &&
                  f.animationEndCallback &&
                  (clearTimeout(f.animationEndCallback),
                  Z && Z(ne),
                  delete f.animationEndCallback),
                f.setState(ye, function () {
                  R &&
                    f.asNavForIndex !== T &&
                    ((f.asNavForIndex = T), R.innerSlider.slideHandler(T)),
                    Te &&
                      (f.animationEndCallback = setTimeout(function () {
                        var Me = Te.animating,
                          Ae = X(Te, ['animating'])
                        f.setState(Ae, function () {
                          f.callbackTimers.push(
                            setTimeout(function () {
                              return f.setState({ animating: Me })
                            }, 10)
                          ),
                            Z && Z(ye.currentSlide),
                            delete f.animationEndCallback
                        })
                      }, W))
                })
            }
          }),
          v(j(f), 'changeSlide', function (T) {
            var o =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              m = k(k({}, f.props), f.state),
              R = (0, h.changeSlide)(m, T)
            if (
              !(R !== 0 && !R) &&
              (o === !0 ? f.slideHandler(R, o) : f.slideHandler(R),
              f.props.autoplay && f.autoPlay('update'),
              f.props.focusOnSelect)
            ) {
              var N = f.list.querySelectorAll('.slick-current')
              N[0] && N[0].focus()
            }
          }),
          v(j(f), 'clickHandler', function (T) {
            f.clickable === !1 && (T.stopPropagation(), T.preventDefault()),
              (f.clickable = !0)
          }),
          v(j(f), 'keyHandler', function (T) {
            var o = (0, h.keyHandler)(T, f.props.accessibility, f.props.rtl)
            o !== '' && f.changeSlide({ message: o })
          }),
          v(j(f), 'selectHandler', function (T) {
            f.changeSlide(T)
          }),
          v(j(f), 'disableBodyScroll', function () {
            var T = function (m) {
              ;(m = m || window.event),
                m.preventDefault && m.preventDefault(),
                (m.returnValue = !1)
            }
            window.ontouchmove = T
          }),
          v(j(f), 'enableBodyScroll', function () {
            window.ontouchmove = null
          }),
          v(j(f), 'swipeStart', function (T) {
            f.props.verticalSwiping && f.disableBodyScroll()
            var o = (0, h.swipeStart)(T, f.props.swipe, f.props.draggable)
            o !== '' && f.setState(o)
          }),
          v(j(f), 'swipeMove', function (T) {
            var o = (0, h.swipeMove)(
              T,
              k(
                k(k({}, f.props), f.state),
                {},
                {
                  trackRef: f.track,
                  listRef: f.list,
                  slideIndex: f.state.currentSlide,
                }
              )
            )
            o && (o.swiping && (f.clickable = !1), f.setState(o))
          }),
          v(j(f), 'swipeEnd', function (T) {
            var o = (0, h.swipeEnd)(
              T,
              k(
                k(k({}, f.props), f.state),
                {},
                {
                  trackRef: f.track,
                  listRef: f.list,
                  slideIndex: f.state.currentSlide,
                }
              )
            )
            if (o) {
              var m = o.triggerSlideHandler
              delete o.triggerSlideHandler,
                f.setState(o),
                m !== void 0 &&
                  (f.slideHandler(m),
                  f.props.verticalSwiping && f.enableBodyScroll())
            }
          }),
          v(j(f), 'touchEnd', function (T) {
            f.swipeEnd(T), (f.clickable = !0)
          }),
          v(j(f), 'slickPrev', function () {
            f.callbackTimers.push(
              setTimeout(function () {
                return f.changeSlide({ message: 'previous' })
              }, 0)
            )
          }),
          v(j(f), 'slickNext', function () {
            f.callbackTimers.push(
              setTimeout(function () {
                return f.changeSlide({ message: 'next' })
              }, 0)
            )
          }),
          v(j(f), 'slickGoTo', function (T) {
            var o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1
            if (((T = Number(T)), isNaN(T))) return ''
            f.callbackTimers.push(
              setTimeout(function () {
                return f.changeSlide(
                  {
                    message: 'index',
                    index: T,
                    currentSlide: f.state.currentSlide,
                  },
                  o
                )
              }, 0)
            )
          }),
          v(j(f), 'play', function () {
            var T
            if (f.props.rtl) T = f.state.currentSlide - f.props.slidesToScroll
            else if ((0, h.canGoNext)(k(k({}, f.props), f.state)))
              T = f.state.currentSlide + f.props.slidesToScroll
            else return !1
            f.slideHandler(T)
          }),
          v(j(f), 'autoPlay', function (T) {
            f.autoplayTimer && clearInterval(f.autoplayTimer)
            var o = f.state.autoplaying
            if (T === 'update') {
              if (o === 'hovered' || o === 'focused' || o === 'paused') return
            } else if (T === 'leave') {
              if (o === 'paused' || o === 'focused') return
            } else if (T === 'blur' && (o === 'paused' || o === 'hovered'))
              return
            ;(f.autoplayTimer = setInterval(
              f.play,
              f.props.autoplaySpeed + 50
            )),
              f.setState({ autoplaying: 'playing' })
          }),
          v(j(f), 'pause', function (T) {
            f.autoplayTimer &&
              (clearInterval(f.autoplayTimer), (f.autoplayTimer = null))
            var o = f.state.autoplaying
            T === 'paused'
              ? f.setState({ autoplaying: 'paused' })
              : T === 'focused'
              ? (o === 'hovered' || o === 'playing') &&
                f.setState({ autoplaying: 'focused' })
              : o === 'playing' && f.setState({ autoplaying: 'hovered' })
          }),
          v(j(f), 'onDotsOver', function () {
            return f.props.autoplay && f.pause('hovered')
          }),
          v(j(f), 'onDotsLeave', function () {
            return (
              f.props.autoplay &&
              f.state.autoplaying === 'hovered' &&
              f.autoPlay('leave')
            )
          }),
          v(j(f), 'onTrackOver', function () {
            return f.props.autoplay && f.pause('hovered')
          }),
          v(j(f), 'onTrackLeave', function () {
            return (
              f.props.autoplay &&
              f.state.autoplaying === 'hovered' &&
              f.autoPlay('leave')
            )
          }),
          v(j(f), 'onSlideFocus', function () {
            return f.props.autoplay && f.pause('focused')
          }),
          v(j(f), 'onSlideBlur', function () {
            return (
              f.props.autoplay &&
              f.state.autoplaying === 'focused' &&
              f.autoPlay('blur')
            )
          }),
          v(j(f), 'render', function () {
            var T = (0, s.default)('slick-slider', f.props.className, {
                'slick-vertical': f.props.vertical,
                'slick-initialized': !0,
              }),
              o = k(k({}, f.props), f.state),
              m = (0, h.extractObject)(o, [
                'fade',
                'cssEase',
                'speed',
                'infinite',
                'centerMode',
                'focusOnSelect',
                'currentSlide',
                'lazyLoad',
                'lazyLoadedList',
                'rtl',
                'slideWidth',
                'slideHeight',
                'listHeight',
                'vertical',
                'slidesToShow',
                'slidesToScroll',
                'slideCount',
                'trackStyle',
                'variableWidth',
                'unslick',
                'centerPadding',
                'targetSlide',
                'useCSS',
              ]),
              R = f.props.pauseOnHover
            m = k(
              k({}, m),
              {},
              {
                onMouseEnter: R ? f.onTrackOver : null,
                onMouseLeave: R ? f.onTrackLeave : null,
                onMouseOver: R ? f.onTrackOver : null,
                focusOnSelect:
                  f.props.focusOnSelect && f.clickable ? f.selectHandler : null,
              }
            )
            var N
            if (
              f.props.dots === !0 &&
              f.state.slideCount >= f.props.slidesToShow
            ) {
              var G = (0, h.extractObject)(o, [
                  'dotsClass',
                  'slideCount',
                  'slidesToShow',
                  'currentSlide',
                  'slidesToScroll',
                  'clickHandler',
                  'children',
                  'customPaging',
                  'infinite',
                  'appendDots',
                ]),
                W = f.props.pauseOnDotsHover
              ;(G = k(
                k({}, G),
                {},
                {
                  clickHandler: f.changeSlide,
                  onMouseEnter: W ? f.onDotsLeave : null,
                  onMouseOver: W ? f.onDotsOver : null,
                  onMouseLeave: W ? f.onDotsLeave : null,
                }
              )),
                (N = c.default.createElement(b.Dots, G))
            }
            var Z,
              ne,
              ue = (0, h.extractObject)(o, [
                'infinite',
                'centerMode',
                'currentSlide',
                'slideCount',
                'slidesToShow',
                'prevArrow',
                'nextArrow',
              ])
            ;(ue.clickHandler = f.changeSlide),
              f.props.arrows &&
                ((Z = c.default.createElement(x.PrevArrow, ue)),
                (ne = c.default.createElement(x.NextArrow, ue)))
            var ye = null
            f.props.vertical && (ye = { height: f.state.listHeight })
            var Te = null
            f.props.vertical === !1
              ? f.props.centerMode === !0 &&
                (Te = { padding: '0px ' + f.props.centerPadding })
              : f.props.centerMode === !0 &&
                (Te = { padding: f.props.centerPadding + ' 0px' })
            var Re = k(k({}, ye), Te),
              Me = f.props.touchMove,
              Ae = {
                className: 'slick-list',
                style: Re,
                onClick: f.clickHandler,
                onMouseDown: Me ? f.swipeStart : null,
                onMouseMove: f.state.dragging && Me ? f.swipeMove : null,
                onMouseUp: Me ? f.swipeEnd : null,
                onMouseLeave: f.state.dragging && Me ? f.swipeEnd : null,
                onTouchStart: Me ? f.swipeStart : null,
                onTouchMove: f.state.dragging && Me ? f.swipeMove : null,
                onTouchEnd: Me ? f.touchEnd : null,
                onTouchCancel: f.state.dragging && Me ? f.swipeEnd : null,
                onKeyDown: f.props.accessibility ? f.keyHandler : null,
              },
              Se = { className: T, dir: 'ltr', style: f.props.style }
            return (
              f.props.unslick &&
                ((Ae = { className: 'slick-list' }), (Se = { className: T })),
              c.default.createElement(
                'div',
                Se,
                f.props.unslick ? '' : Z,
                c.default.createElement(
                  'div',
                  Q({ ref: f.listRefHandler }, Ae),
                  c.default.createElement(
                    g.Track,
                    Q({ ref: f.trackRefHandler }, m),
                    f.props.children
                  )
                ),
                f.props.unslick ? '' : ne,
                f.props.unslick ? '' : N
              )
            )
          }),
          (f.list = null),
          (f.track = null),
          (f.state = k(
            k({}, r.default),
            {},
            {
              currentSlide: f.props.initialSlide,
              targetSlide: f.props.initialSlide ? f.props.initialSlide : 0,
              slideCount: c.default.Children.count(f.props.children),
            }
          )),
          (f.callbackTimers = []),
          (f.clickable = !0),
          (f.debouncedResize = null)
        var te = f.ssrInit()
        return (f.state = k(k({}, f.state), te)), f
      }
      return (
        oe(I, [
          {
            key: 'didPropsChange',
            value: function (f) {
              for (
                var te = !1, T = 0, o = Object.keys(this.props);
                T < o.length;
                T++
              ) {
                var m = o[T]
                if (!f.hasOwnProperty(m)) {
                  te = !0
                  break
                }
                if (
                  !(
                    M(f[m]) === 'object' ||
                    typeof f[m] == 'function' ||
                    isNaN(f[m])
                  ) &&
                  f[m] !== this.props[m]
                ) {
                  te = !0
                  break
                }
              }
              return (
                te ||
                c.default.Children.count(this.props.children) !==
                  c.default.Children.count(f.children)
              )
            },
          },
        ]),
        I
      )
    })(c.default.Component)),
    ki
  )
}
var Zs, zh
function Vv() {
  if (zh) return Zs
  zh = 1
  var c = function (r) {
    return r
      .replace(/[A-Z]/g, function (u) {
        return '-' + u.toLowerCase()
      })
      .toLowerCase()
  }
  return (Zs = c), Zs
}
var Ks, Dh
function Qv() {
  if (Dh) return Ks
  Dh = 1
  var c = Vv(),
    r = function (h) {
      var g = /[height|width]$/
      return g.test(h)
    },
    u = function (h) {
      var g = '',
        b = Object.keys(h)
      return (
        b.forEach(function (x, O) {
          var y = h[x]
          ;(x = c(x)),
            r(x) && typeof y == 'number' && (y = y + 'px'),
            y === !0
              ? (g += x)
              : y === !1
              ? (g += 'not ' + x)
              : (g += '(' + x + ': ' + y + ')'),
            O < b.length - 1 && (g += ' and ')
        }),
        g
      )
    },
    s = function (h) {
      var g = ''
      return typeof h == 'string'
        ? h
        : h instanceof Array
        ? (h.forEach(function (b, x) {
            ;(g += u(b)), x < h.length - 1 && (g += ', ')
          }),
          g)
        : u(h)
    }
  return (Ks = s), Ks
}
var Js, jh
function kv() {
  if (jh) return Js
  jh = 1
  function c(r) {
    ;(this.options = r), !r.deferSetup && this.setup()
  }
  return (
    (c.prototype = {
      constructor: c,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0)
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match()
      },
      off: function () {
        this.options.unmatch && this.options.unmatch()
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off()
      },
      equals: function (r) {
        return this.options === r || this.options.match === r
      },
    }),
    (Js = c),
    Js
  )
}
var Ps, Ch
function Fh() {
  if (Ch) return Ps
  Ch = 1
  function c(s, h) {
    var g = 0,
      b = s.length,
      x
    for (g; g < b && ((x = h(s[g], g)), x !== !1); g++);
  }
  function r(s) {
    return Object.prototype.toString.apply(s) === '[object Array]'
  }
  function u(s) {
    return typeof s == 'function'
  }
  return (Ps = { isFunction: u, isArray: r, each: c }), Ps
}
var $s, Nh
function Zv() {
  if (Nh) return $s
  Nh = 1
  var c = kv(),
    r = Fh().each
  function u(s, h) {
    ;(this.query = s),
      (this.isUnconditional = h),
      (this.handlers = []),
      (this.mql = window.matchMedia(s))
    var g = this
    ;(this.listener = function (b) {
      ;(g.mql = b.currentTarget || b), g.assess()
    }),
      this.mql.addListener(this.listener)
  }
  return (
    (u.prototype = {
      constuctor: u,
      addHandler: function (s) {
        var h = new c(s)
        this.handlers.push(h), this.matches() && h.on()
      },
      removeHandler: function (s) {
        var h = this.handlers
        r(h, function (g, b) {
          if (g.equals(s)) return g.destroy(), !h.splice(b, 1)
        })
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional
      },
      clear: function () {
        r(this.handlers, function (s) {
          s.destroy()
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0)
      },
      assess: function () {
        var s = this.matches() ? 'on' : 'off'
        r(this.handlers, function (h) {
          h[s]()
        })
      },
    }),
    ($s = u),
    $s
  )
}
var Ws, Lh
function Kv() {
  if (Lh) return Ws
  Lh = 1
  var c = Zv(),
    r = Fh(),
    u = r.each,
    s = r.isFunction,
    h = r.isArray
  function g() {
    if (!window.matchMedia)
      throw new Error(
        'matchMedia not present, legacy browsers require a polyfill'
      )
    ;(this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia('only all').matches)
  }
  return (
    (g.prototype = {
      constructor: g,
      register: function (b, x, O) {
        var y = this.queries,
          M = O && this.browserIsIncapable
        return (
          y[b] || (y[b] = new c(b, M)),
          s(x) && (x = { match: x }),
          h(x) || (x = [x]),
          u(x, function (Q) {
            s(Q) && (Q = { match: Q }), y[b].addHandler(Q)
          }),
          this
        )
      },
      unregister: function (b, x) {
        var O = this.queries[b]
        return (
          O && (x ? O.removeHandler(x) : (O.clear(), delete this.queries[b])),
          this
        )
      },
    }),
    (Ws = g),
    Ws
  )
}
var Fs, Hh
function Jv() {
  if (Hh) return Fs
  Hh = 1
  var c = Kv()
  return (Fs = new c()), Fs
}
var Uh
function Pv() {
  return (
    Uh ||
      ((Uh = 1),
      (function (c) {
        Object.defineProperty(c, '__esModule', { value: !0 }),
          (c.default = void 0)
        var r = b(Kt()),
          u = Xv(),
          s = b(Qv()),
          h = b(Zh()),
          g = $i()
        function b(A) {
          return A && A.__esModule ? A : { default: A }
        }
        function x(A) {
          '@babel/helpers - typeof'
          return (
            (x =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (v) {
                    return typeof v
                  }
                : function (v) {
                    return v &&
                      typeof Symbol == 'function' &&
                      v.constructor === Symbol &&
                      v !== Symbol.prototype
                      ? 'symbol'
                      : typeof v
                  }),
            x(A)
          )
        }
        function O() {
          return (
            (O = Object.assign
              ? Object.assign.bind()
              : function (A) {
                  for (var v = 1; v < arguments.length; v++) {
                    var q = arguments[v]
                    for (var V in q)
                      Object.prototype.hasOwnProperty.call(q, V) &&
                        (A[V] = q[V])
                  }
                  return A
                }),
            O.apply(this, arguments)
          )
        }
        function y(A, v) {
          var q = Object.keys(A)
          if (Object.getOwnPropertySymbols) {
            var V = Object.getOwnPropertySymbols(A)
            v &&
              (V = V.filter(function (L) {
                return Object.getOwnPropertyDescriptor(A, L).enumerable
              })),
              q.push.apply(q, V)
          }
          return q
        }
        function M(A) {
          for (var v = 1; v < arguments.length; v++) {
            var q = arguments[v] != null ? arguments[v] : {}
            v % 2
              ? y(Object(q), !0).forEach(function (V) {
                  E(A, V, q[V])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(q))
              : y(Object(q)).forEach(function (V) {
                  Object.defineProperty(
                    A,
                    V,
                    Object.getOwnPropertyDescriptor(q, V)
                  )
                })
          }
          return A
        }
        function Q(A, v) {
          if (!(A instanceof v))
            throw new TypeError('Cannot call a class as a function')
        }
        function X(A, v) {
          for (var q = 0; q < v.length; q++) {
            var V = v[q]
            ;(V.enumerable = V.enumerable || !1),
              (V.configurable = !0),
              'value' in V && (V.writable = !0),
              Object.defineProperty(A, D(V.key), V)
          }
        }
        function ae(A, v, q) {
          return (
            v && X(A.prototype, v),
            Object.defineProperty(A, 'prototype', { writable: !1 }),
            A
          )
        }
        function ee(A, v) {
          if (typeof v != 'function' && v !== null)
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          ;(A.prototype = Object.create(v && v.prototype, {
            constructor: { value: A, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(A, 'prototype', { writable: !1 }),
            v && k(A, v)
        }
        function k(A, v) {
          return (
            (k = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (V, L) {
                  return (V.__proto__ = L), V
                }),
            k(A, v)
          )
        }
        function le(A) {
          var v = fe()
          return function () {
            var V = ge(A),
              L
            if (v) {
              var U = ge(this).constructor
              L = Reflect.construct(V, arguments, U)
            } else L = V.apply(this, arguments)
            return ce(this, L)
          }
        }
        function ce(A, v) {
          if (v && (x(v) === 'object' || typeof v == 'function')) return v
          if (v !== void 0)
            throw new TypeError(
              'Derived constructors may only return object or undefined'
            )
          return oe(A)
        }
        function oe(A) {
          if (A === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return A
        }
        function fe() {
          try {
            var A = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            )
          } catch {}
          return (fe = function () {
            return !!A
          })()
        }
        function ge(A) {
          return (
            (ge = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (q) {
                  return q.__proto__ || Object.getPrototypeOf(q)
                }),
            ge(A)
          )
        }
        function E(A, v, q) {
          return (
            (v = D(v)),
            v in A
              ? Object.defineProperty(A, v, {
                  value: q,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (A[v] = q),
            A
          )
        }
        function D(A) {
          var v = j(A, 'string')
          return x(v) == 'symbol' ? v : String(v)
        }
        function j(A, v) {
          if (x(A) != 'object' || !A) return A
          var q = A[Symbol.toPrimitive]
          if (q !== void 0) {
            var V = q.call(A, v)
            if (x(V) != 'object') return V
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return (v === 'string' ? String : Number)(A)
        }
        var K = (0, g.canUseDOM)() && Jv()
        c.default = (function (A) {
          ee(q, A)
          var v = le(q)
          function q(V) {
            var L
            return (
              Q(this, q),
              (L = v.call(this, V)),
              E(oe(L), 'innerSliderRefHandler', function (U) {
                return (L.innerSlider = U)
              }),
              E(oe(L), 'slickPrev', function () {
                return L.innerSlider.slickPrev()
              }),
              E(oe(L), 'slickNext', function () {
                return L.innerSlider.slickNext()
              }),
              E(oe(L), 'slickGoTo', function (U) {
                var I =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !1
                return L.innerSlider.slickGoTo(U, I)
              }),
              E(oe(L), 'slickPause', function () {
                return L.innerSlider.pause('paused')
              }),
              E(oe(L), 'slickPlay', function () {
                return L.innerSlider.autoPlay('play')
              }),
              (L.state = { breakpoint: null }),
              (L._responsiveMediaHandlers = []),
              L
            )
          }
          return (
            ae(q, [
              {
                key: 'media',
                value: function (L, U) {
                  K.register(L, U),
                    this._responsiveMediaHandlers.push({ query: L, handler: U })
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var L = this
                  if (this.props.responsive) {
                    var U = this.props.responsive.map(function (_) {
                      return _.breakpoint
                    })
                    U.sort(function (_, f) {
                      return _ - f
                    }),
                      U.forEach(function (_, f) {
                        var te
                        f === 0
                          ? (te = (0, s.default)({ minWidth: 0, maxWidth: _ }))
                          : (te = (0, s.default)({
                              minWidth: U[f - 1] + 1,
                              maxWidth: _,
                            })),
                          (0, g.canUseDOM)() &&
                            L.media(te, function () {
                              L.setState({ breakpoint: _ })
                            })
                      })
                    var I = (0, s.default)({ minWidth: U.slice(-1)[0] })
                    ;(0, g.canUseDOM)() &&
                      this.media(I, function () {
                        L.setState({ breakpoint: null })
                      })
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._responsiveMediaHandlers.forEach(function (L) {
                    K.unregister(L.query, L.handler)
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  var L = this,
                    U,
                    I
                  this.state.breakpoint
                    ? ((I = this.props.responsive.filter(function (W) {
                        return W.breakpoint === L.state.breakpoint
                      })),
                      (U =
                        I[0].settings === 'unslick'
                          ? 'unslick'
                          : M(M(M({}, h.default), this.props), I[0].settings)))
                    : (U = M(M({}, h.default), this.props)),
                    U.centerMode &&
                      (U.slidesToScroll > 1, (U.slidesToScroll = 1)),
                    U.fade &&
                      (U.slidesToShow > 1,
                      U.slidesToScroll > 1,
                      (U.slidesToShow = 1),
                      (U.slidesToScroll = 1))
                  var _ = r.default.Children.toArray(this.props.children)
                  ;(_ = _.filter(function (W) {
                    return typeof W == 'string' ? !!W.trim() : !!W
                  })),
                    U.variableWidth &&
                      (U.rows > 1 || U.slidesPerRow > 1) &&
                      (console.warn(
                        'variableWidth is not supported in case of rows > 1 or slidesPerRow > 1'
                      ),
                      (U.variableWidth = !1))
                  for (
                    var f = [], te = null, T = 0;
                    T < _.length;
                    T += U.rows * U.slidesPerRow
                  ) {
                    for (
                      var o = [], m = T;
                      m < T + U.rows * U.slidesPerRow;
                      m += U.slidesPerRow
                    ) {
                      for (
                        var R = [], N = m;
                        N < m + U.slidesPerRow &&
                        (U.variableWidth &&
                          _[N].props.style &&
                          (te = _[N].props.style.width),
                        !(N >= _.length));
                        N += 1
                      )
                        R.push(
                          r.default.cloneElement(_[N], {
                            key: 100 * T + 10 * m + N,
                            tabIndex: -1,
                            style: {
                              width: ''.concat(100 / U.slidesPerRow, '%'),
                              display: 'inline-block',
                            },
                          })
                        )
                      o.push(
                        r.default.createElement('div', { key: 10 * T + m }, R)
                      )
                    }
                    U.variableWidth
                      ? f.push(
                          r.default.createElement(
                            'div',
                            { key: T, style: { width: te } },
                            o
                          )
                        )
                      : f.push(r.default.createElement('div', { key: T }, o))
                  }
                  if (U === 'unslick') {
                    var G = 'regular slider ' + (this.props.className || '')
                    return r.default.createElement('div', { className: G }, _)
                  } else
                    f.length <= U.slidesToShow &&
                      !U.infinite &&
                      (U.unslick = !0)
                  return r.default.createElement(
                    u.InnerSlider,
                    O(
                      {
                        style: this.props.style,
                        ref: this.innerSliderRefHandler,
                      },
                      (0, g.filterSettings)(U)
                    ),
                    f
                  )
                },
              },
            ]),
            q
          )
        })(r.default.Component)
      })(Gs)),
    Gs
  )
}
var qh
function $v() {
  return (
    qh ||
      ((qh = 1),
      (function (c) {
        Object.defineProperty(c, '__esModule', { value: !0 }),
          (c.default = void 0)
        var r = u(Pv())
        function u(s) {
          return s && s.__esModule ? s : { default: s }
        }
        c.default = r.default
      })(Ys)),
    Ys
  )
}
var Wv = $v()
const Ih = mm(Wv),
  Fv = './slider_asesoria_financiera.webp',
  Iv = './slider_ejecucion_cursos.webp',
  ey = './slider_experiencia.webp',
  ty = () => {
    const { t: c } = aa(),
      r = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        arrows: !1,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }
    return $.jsx('div', {
      className: 'top-slider slider-container max-width',
      children: $.jsxs(Ih, {
        ...r,
        children: [
          $.jsxs('div', {
            id: 'sliderElement00',
            children: [
              $.jsx('img', { src: Fv, alt: 'Slide 1' }),
              $.jsx('h3', { children: c('slide01') }),
            ],
          }),
          $.jsxs('div', {
            id: 'sliderElement01',
            children: [
              $.jsx('img', { src: Iv, alt: 'Slide 2' }),
              $.jsx('h3', { children: c('slide02') }),
            ],
          }),
          $.jsxs('div', {
            id: 'sliderElement02',
            children: [
              $.jsx('img', { src: ey, alt: 'Slide 3' }),
              $.jsx('h3', { children: c('slide03') }),
            ],
          }),
        ],
      }),
    })
  },
  ny = './assets/img_margarita-DNSoDgrI.webp',
  ay = () => {
    const { t: c } = aa()
    return $.jsxs('div', {
      className: 'about-us',
      children: [
        $.jsxs('div', {
          className: 'max-width module',
          children: [
            $.jsx('h2', { children: c('titleAbout') }),
            $.jsx('h3', { children: c('subtitleOurFirm') }),
            $.jsxs('section', {
              children: [
                $.jsxs('div', {
                  className: 'column',
                  children: [
                    $.jsx('p', { children: c('textOurFirmLeft01') }),
                    $.jsx('p', { children: c('textOurFirmLeft02') }),
                  ],
                }),
                $.jsxs('div', {
                  className: 'column',
                  children: [
                    $.jsx('p', { children: c('textOurFirmRight01') }),
                    $.jsx('p', { children: c('textOurFirmRight02') }),
                    $.jsx('p', { children: c('textOurFirmRight03') }),
                  ],
                }),
              ],
            }),
          ],
        }),
        $.jsx('div', {
          className: 'bg-container',
          children: $.jsx('div', {
            className: 'max-width module',
            children: $.jsxs('section', {
              children: [
                $.jsx('div', {
                  className: 'column',
                  children: $.jsx('img', { src: ny, alt: 'Margarita Reina' }),
                }),
                $.jsxs('div', {
                  className: 'column',
                  children: [
                    $.jsx('h3', { children: c('subtitleOurTeam') }),
                    $.jsx('p', { children: c('textOurTeam') }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  },
  iy = './assets/servicio_valoracion_financiera-BiX5BsxJ.webp',
  ly = './assets/servicio_fusiones_adquisiciones-CWAmjpr3.webp',
  ry = './assets/servicio_analisis_financiero-DkA9GOYW.webp',
  uy = './assets/servicio_presupuestacion-CbRaSebX.webp',
  sy = './assets/servicio_asesoria_juntas_directivas-CmQD0xR_.webp',
  oy = () => {
    const { t: c } = aa()
    return $.jsxs('div', {
      className: 'our-services module max-width',
      children: [
        $.jsx('h2', { children: c('titleServices') }),
        $.jsxs('section', {
          children: [
            $.jsx('div', {
              className: 'column mobileItem01',
              children: $.jsx('img', { src: iy, alt: 'Slide 1' }),
            }),
            $.jsxs('div', {
              className: 'column mobileItem02',
              children: [
                $.jsx('h3', { children: c('subtitleValuation') }),
                $.jsx('p', { children: c('textValuation') }),
              ],
            }),
            $.jsx('div', {
              className: 'column mobileItem03',
              children: $.jsx('img', { src: ly, alt: 'Slide 1' }),
            }),
            $.jsxs('div', {
              className: 'column mobileItem04',
              children: [
                $.jsx('h3', { children: c('subtitleMergersAndAcquisitions') }),
                $.jsx('p', { children: c('textMergersAndAcquisitions') }),
              ],
            }),
            $.jsx('div', {
              className: 'column mobileItem05',
              children: $.jsx('img', { src: ry, alt: 'Slide 1' }),
            }),
            $.jsxs('div', {
              className: 'column mobileItem06',
              children: [
                $.jsx('h3', { children: c('subtitleFinancialAnalysis') }),
                $.jsx('p', { children: c('textFinancialAnalysis') }),
              ],
            }),
            $.jsx('div', {
              className: 'column mobileItem07',
              children: $.jsx('img', { src: uy, alt: 'Slide 1' }),
            }),
            $.jsxs('div', {
              className: 'column mobileItem08',
              children: [
                $.jsx('h3', { children: c('subtitleBudgeting') }),
                $.jsx('p', { children: c('textBudgeting') }),
              ],
            }),
            $.jsx('div', {
              className: 'column mobileItem09',
              children: $.jsx('img', { src: sy, alt: 'Slide 1' }),
            }),
            $.jsxs('div', {
              className: 'column mobileItem10',
              children: [
                $.jsx('h3', {
                  children: c('subtitleBoardOfDirectorsConsulting'),
                }),
                $.jsx('p', { children: c('textBoardOfDirectorsConsulting') }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  cy = './assets/logo-footer-3D_V8v-4.svg',
  fy =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%3e%3cpath%20d='M6.44112%200.961776C6.14035%200.235245%205.34742%20-0.151456%204.58964%200.0555658L1.15229%200.993025C0.472635%201.18052%200%201.79768%200%202.50077C0%2012.1644%207.83559%2020%2017.4992%2020C18.2023%2020%2018.8195%2019.5274%2019.007%2018.8477L19.9444%2015.4104C20.1515%2014.6526%2019.7648%2013.8596%2019.0382%2013.5589L15.2884%2011.9964C14.6517%2011.7308%2013.9134%2011.9144%2013.4799%2012.4496L11.9018%2014.3752C9.15194%2013.0745%206.92548%2010.8481%205.62475%208.09818L7.55045%206.52403C8.08558%206.08655%208.26917%205.35221%208.00355%204.71552L6.44112%200.965682V0.961776Z'%20fill='%23F0640F'%3e%3c/path%3e%3c/svg%3e",
  dy =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='15'%20viewBox='0%200%2020%2015'%20fill='none'%3e%3cpath%20d='M1.875%200C0.839844%200%200%200.839844%200%201.875C0%202.46484%200.277344%203.01953%200.75%203.375L9.25%209.75C9.69531%2010.082%2010.3047%2010.082%2010.75%209.75L19.25%203.375C19.7227%203.01953%2020%202.46484%2020%201.875C20%200.839844%2019.1602%200%2018.125%200H1.875ZM0%204.375V12.5C0%2013.8789%201.12109%2015%202.5%2015H17.5C18.8789%2015%2020%2013.8789%2020%2012.5V4.375L11.5%2010.75C10.6094%2011.418%209.39063%2011.418%208.5%2010.75L0%204.375Z'%20fill='%23F0640F'%3e%3c/path%3e%3c/svg%3e",
  hy = () => {
    const { t: c } = aa()
    return $.jsx('div', {
      className: 'contact-us',
      children: $.jsx('div', {
        className: 'bg-container',
        children: $.jsxs('section', {
          className: 'max-width module',
          children: [
            $.jsx('div', {
              className: 'column footer-logo-container',
              children: $.jsx('img', { src: cy, alt: 'Transcending Logo' }),
            }),
            $.jsxs('div', {
              className: 'column',
              children: [
                $.jsx('h4', { children: c('titleContactUs') }),
                $.jsxs('p', {
                  children: [
                    $.jsx('img', { src: fy, alt: 'Phone' }),
                    $.jsx('a', {
                      href: 'https://api.whatsapp.com/send/?phone=50672817421',
                      target: '_blank',
                      rel: 'noreferrer noopener',
                      children: '(506) 7281-7421',
                    }),
                  ],
                }),
                $.jsxs('p', {
                  children: [
                    $.jsx('img', { src: dy, alt: 'Envelope' }),
                    $.jsx('a', {
                      href: 'mailto:contact@tfccr.com',
                      target: '_blank',
                      rel: 'noreferrer noopener',
                      children: 'contact@tfccr.com',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  },
  gy = () => {
    const { t: c } = aa()
    return $.jsx('div', {
      className: 'footer',
      children: $.jsx('p', { children: c('copyrightText') }),
    })
  },
  py = () => {
    const { t: c, ready: r } = aa()
    if (!r) return 'loading translations...'
    const u = c('testimonialsSlider', { returnObjects: !0 }),
      s = {
        dots: !1,
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !1,
        arrows: !0,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      }
    return $.jsx('div', {
      className: 'testimonials',
      children: $.jsx('div', {
        className: 'bg-container',
        children: $.jsxs('div', {
          className: 'slider-container max-width',
          children: [
            $.jsx('h2', { children: 'Testimonials' }),
            $.jsx(Ih, {
              ...s,
              children: u.map((h, g) =>
                $.jsxs(
                  'div',
                  {
                    children: [
                      $.jsx('p', { children: h.text }),
                      $.jsx('p', {
                        className: 'testimonial-person-name',
                        children: h.name,
                      }),
                      $.jsx('p', { children: h.role }),
                    ],
                  },
                  g
                )
              ),
            }),
          ],
        }),
      }),
    })
  }
function my() {
  return $.jsxs(Vm, {
    i18n: ct,
    children: [
      $.jsx(mv, {}),
      $.jsx(ty, {}),
      $.jsx(ay, {}),
      $.jsx(oy, {}),
      $.jsx(py, {}),
      $.jsx(hy, {}),
      $.jsx(gy, {}),
    ],
  })
}
wm.createRoot(document.getElementById('root')).render(
  $.jsx(tt.StrictMode, { children: $.jsx(my, {}) })
)
