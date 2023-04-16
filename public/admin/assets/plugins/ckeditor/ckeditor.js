/*
Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
    window.CKEDITOR && window.CKEDITOR.dom || (window.CKEDITOR || (window.CKEDITOR = function () {
        var a = /(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i, e = {
            timestamp: "I8BH", version: "4.10.1 (Standard)", revision: "59246e973", rnd: Math.floor(900 * Math.random()) + 100, _: { pending: [], basePathSrcPattern: a }, status: "unloaded", basePath: function () {
                var c = window.CKEDITOR_BASEPATH || ""; if (!c) for (var b = document.getElementsByTagName("script"), e = 0; e < b.length; e++) { var g = b[e].src.match(a); if (g) { c = g[1]; break } } -1 == c.indexOf(":/") &&
                    "//" != c.slice(0, 2) && (c = 0 === c.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + c : location.href.match(/^[^\?]*\/(?:)/)[0] + c); if (!c) throw 'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.'; return c
            }(), getUrl: function (a) {
                -1 == a.indexOf(":/") && 0 !== a.indexOf("/") && (a = this.basePath + a); this.timestamp && "/" != a.charAt(a.length - 1) && !/[&?]t=/.test(a) && (a += (0 <= a.indexOf("?") ? "\x26" : "?") + "t\x3d" + this.timestamp);
                return a
            }, domReady: function () {
                function a() { try { document.addEventListener ? (document.removeEventListener("DOMContentLoaded", a, !1), c()) : document.attachEvent && "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), c()) } catch (g) { } } function c() { for (var a; a = b.shift();)a() } var b = []; return function (g) {
                    function c() { try { document.documentElement.doScroll("left") } catch (f) { setTimeout(c, 1); return } a() } b.push(g); "complete" === document.readyState && setTimeout(a, 1); if (1 == b.length) if (document.addEventListener) document.addEventListener("DOMContentLoaded",
                        a, !1), window.addEventListener("load", a, !1); else if (document.attachEvent) { document.attachEvent("onreadystatechange", a); window.attachEvent("onload", a); g = !1; try { g = !window.frameElement } catch (m) { } document.documentElement.doScroll && g && c() }
                }
            }()
        }, b = window.CKEDITOR_GETURL; if (b) { var c = e.getUrl; e.getUrl = function (a) { return b.call(e, a) || c.call(e, a) } } return e
    }()), CKEDITOR.event || (CKEDITOR.event = function () { }, CKEDITOR.event.implementOn = function (a) { var e = CKEDITOR.event.prototype, b; for (b in e) null == a[b] && (a[b] = e[b]) },
        CKEDITOR.event.prototype = function () {
            function a(a) { var d = e(this); return d[a] || (d[a] = new b(a)) } var e = function (a) { a = a.getPrivate && a.getPrivate() || a._ || (a._ = {}); return a.events || (a.events = {}) }, b = function (a) { this.name = a; this.listeners = [] }; b.prototype = { getListenerIndex: function (a) { for (var b = 0, e = this.listeners; b < e.length; b++)if (e[b].fn == a) return b; return -1 } }; return {
                define: function (c, b) { var e = a.call(this, c); CKEDITOR.tools.extend(e, b, !0) }, on: function (c, b, e, k, g) {
                    function h(f, a, n, g) {
                        f = {
                            name: c, sender: this, editor: f,
                            data: a, listenerData: k, stop: n, cancel: g, removeListener: m
                        }; return !1 === b.call(e, f) ? !1 : f.data
                    } function m() { n.removeListener(c, b) } var f = a.call(this, c); if (0 > f.getListenerIndex(b)) { f = f.listeners; e || (e = this); isNaN(g) && (g = 10); var n = this; h.fn = b; h.priority = g; for (var r = f.length - 1; 0 <= r; r--)if (f[r].priority <= g) return f.splice(r + 1, 0, h), { removeListener: m }; f.unshift(h) } return { removeListener: m }
                }, once: function () {
                    var a = Array.prototype.slice.call(arguments), b = a[1]; a[1] = function (a) {
                        a.removeListener(); return b.apply(this,
                            arguments)
                    }; return this.on.apply(this, a)
                }, capture: function () { CKEDITOR.event.useCapture = 1; var a = this.on.apply(this, arguments); CKEDITOR.event.useCapture = 0; return a }, fire: function () {
                    var a = 0, b = function () { a = 1 }, l = 0, k = function () { l = 1 }; return function (g, h, m) {
                        var f = e(this)[g]; g = a; var n = l; a = l = 0; if (f) { var r = f.listeners; if (r.length) for (var r = r.slice(0), u, v = 0; v < r.length; v++) { if (f.errorProof) try { u = r[v].call(this, m, h, b, k) } catch (y) { } else u = r[v].call(this, m, h, b, k); !1 === u ? l = 1 : "undefined" != typeof u && (h = u); if (a || l) break } } h =
                            l ? !1 : "undefined" == typeof h ? !0 : h; a = g; l = n; return h
                    }
                }(), fireOnce: function (a, b, l) { b = this.fire(a, b, l); delete e(this)[a]; return b }, removeListener: function (a, b) { var l = e(this)[a]; if (l) { var k = l.getListenerIndex(b); 0 <= k && l.listeners.splice(k, 1) } }, removeAllListeners: function () { var a = e(this), b; for (b in a) delete a[b] }, hasListeners: function (a) { return (a = e(this)[a]) && 0 < a.listeners.length }
            }
        }()), CKEDITOR.editor || (CKEDITOR.editor = function () { CKEDITOR._.pending.push([this, arguments]); CKEDITOR.event.call(this) }, CKEDITOR.editor.prototype.fire =
            function (a, e) { a in { instanceReady: 1, loaded: 1 } && (this[a] = !0); return CKEDITOR.event.prototype.fire.call(this, a, e, this) }, CKEDITOR.editor.prototype.fireOnce = function (a, e) { a in { instanceReady: 1, loaded: 1 } && (this[a] = !0); return CKEDITOR.event.prototype.fireOnce.call(this, a, e, this) }, CKEDITOR.event.implementOn(CKEDITOR.editor.prototype)), CKEDITOR.env || (CKEDITOR.env = function () {
                var a = navigator.userAgent.toLowerCase(), e = a.match(/edge[ \/](\d+.?\d*)/), b = -1 < a.indexOf("trident/"), b = !(!e && !b), b = {
                    ie: b, edge: !!e, webkit: !b &&
                        -1 < a.indexOf(" applewebkit/"), air: -1 < a.indexOf(" adobeair/"), mac: -1 < a.indexOf("macintosh"), quirks: "BackCompat" == document.compatMode && (!document.documentMode || 10 > document.documentMode), mobile: -1 < a.indexOf("mobile"), iOS: /(ipad|iphone|ipod)/.test(a), isCustomDomain: function () { if (!this.ie) return !1; var a = document.domain, b = window.location.hostname; return a != b && a != "[" + b + "]" }, secure: "https:" == location.protocol
                }; b.gecko = "Gecko" == navigator.product && !b.webkit && !b.ie; b.webkit && (-1 < a.indexOf("chrome") ? b.chrome =
                    !0 : b.safari = !0); var c = 0; b.ie && (c = e ? parseFloat(e[1]) : b.quirks || !document.documentMode ? parseFloat(a.match(/msie (\d+)/)[1]) : document.documentMode, b.ie9Compat = 9 == c, b.ie8Compat = 8 == c, b.ie7Compat = 7 == c, b.ie6Compat = 7 > c || b.quirks); b.gecko && (e = a.match(/rv:([\d\.]+)/)) && (e = e[1].split("."), c = 1E4 * e[0] + 100 * (e[1] || 0) + 1 * (e[2] || 0)); b.air && (c = parseFloat(a.match(/ adobeair\/(\d+)/)[1])); b.webkit && (c = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])); b.version = c; b.isCompatible = !(b.ie && 7 > c) && !(b.gecko && 4E4 > c) && !(b.webkit &&
                        534 > c); b.hidpi = 2 <= window.devicePixelRatio; b.needsBrFiller = b.gecko || b.webkit || b.ie && 10 < c; b.needsNbspFiller = b.ie && 11 > c; b.cssClass = "cke_browser_" + (b.ie ? "ie" : b.gecko ? "gecko" : b.webkit ? "webkit" : "unknown"); b.quirks && (b.cssClass += " cke_browser_quirks"); b.ie && (b.cssClass += " cke_browser_ie" + (b.quirks ? "6 cke_browser_iequirks" : b.version)); b.air && (b.cssClass += " cke_browser_air"); b.iOS && (b.cssClass += " cke_browser_ios"); b.hidpi && (b.cssClass += " cke_hidpi"); return b
            }()), "unloaded" == CKEDITOR.status && function () {
                CKEDITOR.event.implementOn(CKEDITOR);
                CKEDITOR.loadFullCore = function () { if ("basic_ready" != CKEDITOR.status) CKEDITOR.loadFullCore._load = 1; else { delete CKEDITOR.loadFullCore; var a = document.createElement("script"); a.type = "text/javascript"; a.src = CKEDITOR.basePath + "ckeditor.js"; document.getElementsByTagName("head")[0].appendChild(a) } }; CKEDITOR.loadFullCoreTimeout = 0; CKEDITOR.add = function (a) { (this._.pending || (this._.pending = [])).push(a) }; (function () {
                    CKEDITOR.domReady(function () {
                        var a = CKEDITOR.loadFullCore, e = CKEDITOR.loadFullCoreTimeout; a && (CKEDITOR.status =
                            "basic_ready", a && a._load ? a() : e && setTimeout(function () { CKEDITOR.loadFullCore && CKEDITOR.loadFullCore() }, 1E3 * e))
                    })
                })(); CKEDITOR.status = "basic_loaded"
            }(), "use strict", CKEDITOR.VERBOSITY_WARN = 1, CKEDITOR.VERBOSITY_ERROR = 2, CKEDITOR.verbosity = CKEDITOR.VERBOSITY_WARN | CKEDITOR.VERBOSITY_ERROR, CKEDITOR.warn = function (a, e) { CKEDITOR.verbosity & CKEDITOR.VERBOSITY_WARN && CKEDITOR.fire("log", { type: "warn", errorCode: a, additionalData: e }) }, CKEDITOR.error = function (a, e) {
                CKEDITOR.verbosity & CKEDITOR.VERBOSITY_ERROR && CKEDITOR.fire("log",
                    { type: "error", errorCode: a, additionalData: e })
            }, CKEDITOR.on("log", function (a) { if (window.console && window.console.log) { var e = console[a.data.type] ? a.data.type : "log", b = a.data.errorCode; if (a = a.data.additionalData) console[e]("[CKEDITOR] Error code: " + b + ".", a); else console[e]("[CKEDITOR] Error code: " + b + "."); console[e]("[CKEDITOR] For more information about this error go to https://ckeditor.com/docs/ckeditor4/latest/guide/dev_errors.html#" + b) } }, null, null, 999), CKEDITOR.dom = {}, function () {
                var a = [], e = CKEDITOR.env.gecko ?
                    "-moz-" : CKEDITOR.env.webkit ? "-webkit-" : CKEDITOR.env.ie ? "-ms-" : "", b = /&/g, c = />/g, d = /</g, l = /"/g, k = /&(lt|gt|amp|quot|nbsp|shy|#\d{1,5});/g, g = { lt: "\x3c", gt: "\x3e", amp: "\x26", quot: '"', nbsp: " ", shy: "­" }, h = function (a, f) { return "#" == f[0] ? String.fromCharCode(parseInt(f.slice(1), 10)) : g[f] }; CKEDITOR.on("reset", function () { a = [] }); CKEDITOR.tools = {
                        arrayCompare: function (a, f) { if (!a && !f) return !0; if (!a || !f || a.length != f.length) return !1; for (var n = 0; n < a.length; n++)if (a[n] != f[n]) return !1; return !0 }, getIndex: function (a, f) {
                            for (var n =
                                0; n < a.length; ++n)if (f(a[n])) return n; return -1
                        }, clone: function (a) { var f; if (a && a instanceof Array) { f = []; for (var n = 0; n < a.length; n++)f[n] = CKEDITOR.tools.clone(a[n]); return f } if (null === a || "object" != typeof a || a instanceof String || a instanceof Number || a instanceof Boolean || a instanceof Date || a instanceof RegExp || a.nodeType || a.window === a) return a; f = new a.constructor; for (n in a) f[n] = CKEDITOR.tools.clone(a[n]); return f }, capitalize: function (a, f) { return a.charAt(0).toUpperCase() + (f ? a.slice(1) : a.slice(1).toLowerCase()) },
                        extend: function (a) { var f = arguments.length, n, g; "boolean" == typeof (n = arguments[f - 1]) ? f-- : "boolean" == typeof (n = arguments[f - 2]) && (g = arguments[f - 1], f -= 2); for (var b = 1; b < f; b++) { var h = arguments[b], c; for (c in h) if (!0 === n || null == a[c]) if (!g || c in g) a[c] = h[c] } return a }, prototypedCopy: function (a) { var f = function () { }; f.prototype = a; return new f }, copy: function (a) { var f = {}, g; for (g in a) f[g] = a[g]; return f }, isArray: function (a) { return "[object Array]" == Object.prototype.toString.call(a) }, isEmpty: function (a) {
                            for (var f in a) if (a.hasOwnProperty(f)) return !1;
                            return !0
                        }, cssVendorPrefix: function (a, f, g) { if (g) return e + a + ":" + f + ";" + a + ":" + f; g = {}; g[a] = f; g[e + a] = f; return g }, cssStyleToDomStyle: function () { var a = document.createElement("div").style, f = "undefined" != typeof a.cssFloat ? "cssFloat" : "undefined" != typeof a.styleFloat ? "styleFloat" : "float"; return function (a) { return "float" == a ? f : a.replace(/-./g, function (f) { return f.substr(1).toUpperCase() }) } }(), buildStyleHtml: function (a) {
                            a = [].concat(a); for (var f, g = [], b = 0; b < a.length; b++)if (f = a[b]) /@import|[{}]/.test(f) ? g.push("\x3cstyle\x3e" +
                                f + "\x3c/style\x3e") : g.push('\x3clink type\x3d"text/css" rel\x3dstylesheet href\x3d"' + f + '"\x3e'); return g.join("")
                        }, htmlEncode: function (a) { return void 0 === a || null === a ? "" : String(a).replace(b, "\x26amp;").replace(c, "\x26gt;").replace(d, "\x26lt;") }, htmlDecode: function (a) { return a.replace(k, h) }, htmlEncodeAttr: function (a) { return CKEDITOR.tools.htmlEncode(a).replace(l, "\x26quot;") }, htmlDecodeAttr: function (a) { return CKEDITOR.tools.htmlDecode(a) }, transformPlainTextToHtml: function (a, f) {
                            var g = f == CKEDITOR.ENTER_BR,
                            b = this.htmlEncode(a.replace(/\r\n/g, "\n")), b = b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;"), h = f == CKEDITOR.ENTER_P ? "p" : "div"; if (!g) { var c = /\n{2}/g; if (c.test(b)) var d = "\x3c" + h + "\x3e", e = "\x3c/" + h + "\x3e", b = d + b.replace(c, function () { return e + d }) + e } b = b.replace(/\n/g, "\x3cbr\x3e"); g || (b = b.replace(new RegExp("\x3cbr\x3e(?\x3d\x3c/" + h + "\x3e)"), function (f) { return CKEDITOR.tools.repeat(f, 2) })); b = b.replace(/^ | $/g, "\x26nbsp;"); return b = b.replace(/(>|\s) /g, function (f, a) { return a + "\x26nbsp;" }).replace(/ (?=<)/g,
                                "\x26nbsp;")
                        }, getNextNumber: function () { var a = 0; return function () { return ++a } }(), getNextId: function () { return "cke_" + this.getNextNumber() }, getUniqueId: function () { for (var a = "e", f = 0; 8 > f; f++)a += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1); return a }, override: function (a, f) { var b = f(a); b.prototype = a.prototype; return b }, setTimeout: function (a, f, b, g, h) { h || (h = window); b || (b = h); return h.setTimeout(function () { g ? a.apply(b, [].concat(g)) : a.apply(b) }, f || 0) }, throttle: function (a, f, b) {
                            var g, h = 0; b = b || {}; return {
                                input: function () {
                                    function c() {
                                        h =
                                        (new Date).getTime(); g = !1; f.apply(b, d)
                                    } var d = Array.prototype.slice.call(arguments); g && (clearTimeout(g), g = 0); var e = (new Date).getTime() - h; e < a ? g = setTimeout(c, a - e) : c()
                                }, reset: function () { g && (clearTimeout(g), g = h = 0) }
                            }
                        }, trim: function () { var a = /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g; return function (f) { return f.replace(a, "") } }(), ltrim: function () { var a = /^[ \t\n\r]+/g; return function (f) { return f.replace(a, "") } }(), rtrim: function () { var a = /[ \t\n\r]+$/g; return function (f) { return f.replace(a, "") } }(), indexOf: function (a,
                            f) { if ("function" == typeof f) for (var b = 0, g = a.length; b < g; b++) { if (f(a[b])) return b } else { if (a.indexOf) return a.indexOf(f); b = 0; for (g = a.length; b < g; b++)if (a[b] === f) return b } return -1 }, search: function (a, f) { var b = CKEDITOR.tools.indexOf(a, f); return 0 <= b ? a[b] : null }, bind: function (a, f) { return function () { return a.apply(f, arguments) } }, createClass: function (a) {
                                var f = a.$, b = a.base, g = a.privates || a._, h = a.proto; a = a.statics; !f && (f = function () { b && this.base.apply(this, arguments) }); if (g) var c = f, f = function () {
                                    var f = this._ || (this._ =
                                        {}), a; for (a in g) { var b = g[a]; f[a] = "function" == typeof b ? CKEDITOR.tools.bind(b, this) : b } c.apply(this, arguments)
                                }; b && (f.prototype = this.prototypedCopy(b.prototype), f.prototype.constructor = f, f.base = b, f.baseProto = b.prototype, f.prototype.base = function () { this.base = b.prototype.base; b.apply(this, arguments); this.base = arguments.callee }); h && this.extend(f.prototype, h, !0); a && this.extend(f, a, !0); return f
                            }, addFunction: function (b, f) { return a.push(function () { return b.apply(f || this, arguments) }) - 1 }, removeFunction: function (b) {
                                a[b] =
                                null
                            }, callFunction: function (b) { var f = a[b]; return f && f.apply(window, Array.prototype.slice.call(arguments, 1)) }, cssLength: function () { var a = /^-?\d+\.?\d*px$/, f; return function (b) { f = CKEDITOR.tools.trim(b + "") + "px"; return a.test(f) ? f : b || "" } }(), convertToPx: function () {
                                var a; return function (f) {
                                    a || (a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"\x3e\x3c/div\x3e', CKEDITOR.document), CKEDITOR.document.getBody().append(a)); return /%$/.test(f) ?
                                        f : (a.setStyle("width", f), a.$.clientWidth)
                                }
                            }(), repeat: function (a, f) { return Array(f + 1).join(a) }, tryThese: function () { for (var a, f = 0, b = arguments.length; f < b; f++) { var g = arguments[f]; try { a = g(); break } catch (h) { } } return a }, genKey: function () { return Array.prototype.slice.call(arguments).join("-") }, defer: function (a) { return function () { var f = arguments, b = this; window.setTimeout(function () { a.apply(b, f) }, 0) } }, normalizeCssText: function (a, f) {
                                var b = [], g, h = CKEDITOR.tools.parseCssText(a, !0, f); for (g in h) b.push(g + ":" + h[g]);
                                b.sort(); return b.length ? b.join(";") + ";" : ""
                            }, convertRgbToHex: function (a) { return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function (a, b, g, h) { a = [b, g, h]; for (b = 0; 3 > b; b++)a[b] = ("0" + parseInt(a[b], 10).toString(16)).slice(-2); return "#" + a.join("") }) }, normalizeHex: function (a) { return a.replace(/#(([0-9a-f]{3}){1,2})($|;|\s+)/gi, function (a, b, g, h) { a = b.toLowerCase(); 3 == a.length && (a = a.split(""), a = [a[0], a[0], a[1], a[1], a[2], a[2]].join("")); return "#" + a + h }) }, parseCssText: function (a, f, b) {
                                var g = {};
                                b && (a = (new CKEDITOR.dom.element("span")).setAttribute("style", a).getAttribute("style") || ""); a && (a = CKEDITOR.tools.normalizeHex(CKEDITOR.tools.convertRgbToHex(a))); if (!a || ";" == a) return g; a.replace(/&quot;/g, '"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, b, h) { f && (b = b.toLowerCase(), "font-family" == b && (h = h.replace(/\s*,\s*/g, ",")), h = CKEDITOR.tools.trim(h)); g[b] = h }); return g
                            }, writeCssText: function (a, f) { var b, g = []; for (b in a) g.push(b + ":" + a[b]); f && g.sort(); return g.join("; ") }, objectCompare: function (a,
                                f, b) { var g; if (!a && !f) return !0; if (!a || !f) return !1; for (g in a) if (a[g] != f[g]) return !1; if (!b) for (g in f) if (a[g] != f[g]) return !1; return !0 }, objectKeys: function (a) { var f = [], b; for (b in a) f.push(b); return f }, convertArrayToObject: function (a, f) { var b = {}; 1 == arguments.length && (f = !0); for (var g = 0, h = a.length; g < h; ++g)b[a[g]] = f; return b }, fixDomain: function () { for (var a; ;)try { a = window.parent.document.domain; break } catch (f) { a = a ? a.replace(/.+?(?:\.|$)/, "") : document.domain; if (!a) break; document.domain = a } return !!a }, eventsBuffer: function (a,
                                    f, b) { function g() { c = (new Date).getTime(); h = !1; b ? f.call(b) : f() } var h, c = 0; return { input: function () { if (!h) { var f = (new Date).getTime() - c; f < a ? h = setTimeout(g, a - f) : g() } }, reset: function () { h && clearTimeout(h); h = c = 0 } } }, enableHtml5Elements: function (a, f) { for (var b = "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "), g = b.length, h; g--;)h = a.createElement(b[g]), f && a.appendChild(h) }, checkIfAnyArrayItemMatches: function (a,
                                        f) { for (var b = 0, g = a.length; b < g; ++b)if (a[b].match(f)) return !0; return !1 }, checkIfAnyObjectPropertyMatches: function (a, f) { for (var b in a) if (b.match(f)) return !0; return !1 }, keystrokeToString: function (a, f) { var b = this.keystrokeToArray(a, f); b.display = b.display.join("+"); b.aria = b.aria.join("+"); return b }, keystrokeToArray: function (a, f) {
                                            var b = f & 16711680, g = f & 65535, h = CKEDITOR.env.mac, c = [], d = []; b & CKEDITOR.CTRL && (c.push(h ? "⌘" : a[17]), d.push(h ? a[224] : a[17])); b & CKEDITOR.ALT && (c.push(h ? "⌥" : a[18]), d.push(a[18])); b & CKEDITOR.SHIFT &&
                                                (c.push(h ? "⇧" : a[16]), d.push(a[16])); g && (a[g] ? (c.push(a[g]), d.push(a[g])) : (c.push(String.fromCharCode(g)), d.push(String.fromCharCode(g)))); return { display: c, aria: d }
                                        }, transparentImageData: "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw\x3d\x3d", getCookie: function (a) {
                                            a = a.toLowerCase(); for (var f = document.cookie.split(";"), b, g, h = 0; h < f.length; h++)if (b = f[h].split("\x3d"), g = decodeURIComponent(CKEDITOR.tools.trim(b[0]).toLowerCase()), g === a) return decodeURIComponent(1 < b.length ?
                                                b[1] : ""); return null
                                        }, setCookie: function (a, f) { document.cookie = encodeURIComponent(a) + "\x3d" + encodeURIComponent(f) + ";path\x3d/" }, getCsrfToken: function () {
                                            var a = CKEDITOR.tools.getCookie("ckCsrfToken"); if (!a || 40 != a.length) {
                                                var a = [], f = ""; if (window.crypto && window.crypto.getRandomValues) a = new Uint8Array(40), window.crypto.getRandomValues(a); else for (var b = 0; 40 > b; b++)a.push(Math.floor(256 * Math.random())); for (b = 0; b < a.length; b++)var g = "abcdefghijklmnopqrstuvwxyz0123456789".charAt(a[b] % 36), f = f + (.5 < Math.random() ?
                                                    g.toUpperCase() : g); a = f; CKEDITOR.tools.setCookie("ckCsrfToken", a)
                                            } return a
                                        }, escapeCss: function (a) { return a ? window.CSS && CSS.escape ? CSS.escape(a) : isNaN(parseInt(a.charAt(0), 10)) ? a : "\\3" + a.charAt(0) + " " + a.substring(1, a.length) : "" }, getMouseButton: function (a) { var f = (a = a.data) && a.$; return a && f ? CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? 4 === f.button ? CKEDITOR.MOUSE_BUTTON_MIDDLE : 1 === f.button ? CKEDITOR.MOUSE_BUTTON_LEFT : CKEDITOR.MOUSE_BUTTON_RIGHT : f.button : !1 }, convertHexStringToBytes: function (a) {
                                            var f = [], b = a.length /
                                                2, g; for (g = 0; g < b; g++)f.push(parseInt(a.substr(2 * g, 2), 16)); return f
                                        }, convertBytesToBase64: function (a) { var f = "", b = a.length, g; for (g = 0; g < b; g += 3) { var h = a.slice(g, g + 3), c = h.length, d = [], e; if (3 > c) for (e = c; 3 > e; e++)h[e] = 0; d[0] = (h[0] & 252) >> 2; d[1] = (h[0] & 3) << 4 | h[1] >> 4; d[2] = (h[1] & 15) << 2 | (h[2] & 192) >> 6; d[3] = h[2] & 63; for (e = 0; 4 > e; e++)f = e <= c ? f + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d[e]) : f + "\x3d" } return f }, style: {
                                            parse: {
                                                _colors: {
                                                    aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF",
                                                    aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgreen: "#006400", darkgrey: "#A9A9A9", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F",
                                                    darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", green: "#008000",
                                                    greenyellow: "#ADFF2F", grey: "#808080", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgreen: "#90EE90", lightgrey: "#D3D3D3", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899",
                                                    lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000",
                                                    olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB",
                                                    slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32"
                                                }, _borderStyle: "none hidden dotted dashed solid double groove ridge inset outset".split(" "), _widthRegExp: /^(thin|medium|thick|[\+-]?\d+(\.\d+)?[a-z%]+|[\+-]?0+(\.0+)?|\.\d+[a-z%]+)$/, _rgbaRegExp: /rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(?:,\s*[0-9.]+\s*)?\)/gi,
                                                _hslaRegExp: /hsla?\(\s*[0-9.]+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[0-9.]+\s*)?\)/gi, background: function (a) { var f = {}, b = this._findColor(a); b.length && (f.color = b[0], CKEDITOR.tools.array.forEach(b, function (f) { a = a.replace(f, "") })); if (a = CKEDITOR.tools.trim(a)) f.unprocessed = a; return f }, margin: function (a) {
                                                    function f(a) { b.top = g[a[0]]; b.right = g[a[1]]; b.bottom = g[a[2]]; b.left = g[a[3]] } var b = {}, g = a.match(/(?:\-?[\.\d]+(?:%|\w*)|auto|inherit|initial|unset)/g) || ["0px"]; switch (g.length) {
                                                        case 1: f([0, 0, 0, 0]); break; case 2: f([0,
                                                            1, 0, 1]); break; case 3: f([0, 1, 2, 1]); break; case 4: f([0, 1, 2, 3])
                                                    }return b
                                                }, border: function (a) { var f = {}, b = a.split(/\s+/g); a = CKEDITOR.tools.style.parse._findColor(a); a.length && (f.color = a[0]); CKEDITOR.tools.array.forEach(b, function (a) { f.style || -1 === CKEDITOR.tools.indexOf(CKEDITOR.tools.style.parse._borderStyle, a) ? !f.width && CKEDITOR.tools.style.parse._widthRegExp.test(a) && (f.width = a) : f.style = a }); return f }, _findColor: function (a) {
                                                    var f = [], b = CKEDITOR.tools.array, f = f.concat(a.match(this._rgbaRegExp) || []), f = f.concat(a.match(this._hslaRegExp) ||
                                                        []); return f = f.concat(b.filter(a.split(/\s+/), function (a) { return a.match(/^\#[a-f0-9]{3}(?:[a-f0-9]{3})?$/gi) ? !0 : a.toLowerCase() in CKEDITOR.tools.style.parse._colors }))
                                                }
                                            }
                                        }, array: {
                                            filter: function (a, f, b) { var g = []; this.forEach(a, function (h, c) { f.call(b, h, c, a) && g.push(h) }); return g }, forEach: function (a, f, b) { var g = a.length, h; for (h = 0; h < g; h++)f.call(b, a[h], h, a) }, map: function (a, f, b) { for (var g = [], h = 0; h < a.length; h++)g.push(f.call(b, a[h], h, a)); return g }, reduce: function (a, f, b, g) {
                                                for (var h = 0; h < a.length; h++)b = f.call(g,
                                                    b, a[h], h, a); return b
                                            }, every: function (a, f, b) { if (!a.length) return !0; f = this.filter(a, f, b); return a.length === f.length }
                                        }, object: { findKey: function (a, f) { if ("object" !== typeof a) return null; for (var b in a) if (a[b] === f) return b; return null }, merge: function (a, f) { var b = CKEDITOR.tools, g = b.clone(a), h = b.clone(f); b.array.forEach(b.objectKeys(h), function (a) { g[a] = "object" === typeof h[a] && "object" === typeof g[a] ? b.object.merge(g[a], h[a]) : h[a] }); return g } }, getAbsoluteRectPosition: function (a, f) {
                                            function b(a) {
                                                if (a) {
                                                    var f =
                                                        a.getClientRect(); g.top += f.top; g.left += f.left; "x" in g && "y" in g && (g.x += f.x, g.y += f.y); b(a.getWindow().getFrame())
                                                }
                                            } var g = CKEDITOR.tools.copy(f); b(a.getFrame()); var h = CKEDITOR.document.getWindow().getScrollPosition(); g.top += h.y; g.left += h.x; "x" in g && "y" in g && (g.y += h.y, g.x += h.x); g.right = g.left + g.width; g.bottom = g.top + g.height; return g
                                        }
                    }; CKEDITOR.tools.array.indexOf = CKEDITOR.tools.indexOf; CKEDITOR.tools.array.isArray = CKEDITOR.tools.isArray; CKEDITOR.MOUSE_BUTTON_LEFT = 0; CKEDITOR.MOUSE_BUTTON_MIDDLE = 1; CKEDITOR.MOUSE_BUTTON_RIGHT =
                        2
            }(), CKEDITOR.dtd = function () {
                var a = CKEDITOR.tools.extend, e = function (a, f) { for (var b = CKEDITOR.tools.clone(a), g = 1; g < arguments.length; g++) { f = arguments[g]; for (var h in f) delete b[h] } return b }, b = {}, c = {}, d = { address: 1, article: 1, aside: 1, blockquote: 1, details: 1, div: 1, dl: 1, fieldset: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, menu: 1, nav: 1, ol: 1, p: 1, pre: 1, section: 1, table: 1, ul: 1 }, l = { command: 1, link: 1, meta: 1, noscript: 1, script: 1, style: 1 }, k = {}, g = { "#": 1 }, h = { center: 1, dir: 1, noframes: 1 };
                a(b, { a: 1, abbr: 1, area: 1, audio: 1, b: 1, bdi: 1, bdo: 1, br: 1, button: 1, canvas: 1, cite: 1, code: 1, command: 1, datalist: 1, del: 1, dfn: 1, em: 1, embed: 1, i: 1, iframe: 1, img: 1, input: 1, ins: 1, kbd: 1, keygen: 1, label: 1, map: 1, mark: 1, meter: 1, noscript: 1, object: 1, output: 1, progress: 1, q: 1, ruby: 1, s: 1, samp: 1, script: 1, select: 1, small: 1, span: 1, strong: 1, sub: 1, sup: 1, textarea: 1, time: 1, u: 1, "var": 1, video: 1, wbr: 1 }, g, { acronym: 1, applet: 1, basefont: 1, big: 1, font: 1, isindex: 1, strike: 1, style: 1, tt: 1 }); a(c, d, b, h); e = {
                    a: e(b, { a: 1, button: 1 }), abbr: b, address: c,
                    area: k, article: c, aside: c, audio: a({ source: 1, track: 1 }, c), b: b, base: k, bdi: b, bdo: b, blockquote: c, body: c, br: k, button: e(b, { a: 1, button: 1 }), canvas: b, caption: c, cite: b, code: b, col: k, colgroup: { col: 1 }, command: k, datalist: a({ option: 1 }, b), dd: c, del: b, details: a({ summary: 1 }, c), dfn: b, div: c, dl: { dt: 1, dd: 1 }, dt: c, em: b, embed: k, fieldset: a({ legend: 1 }, c), figcaption: c, figure: a({ figcaption: 1 }, c), footer: c, form: c, h1: b, h2: b, h3: b, h4: b, h5: b, h6: b, head: a({ title: 1, base: 1 }, l), header: c, hgroup: { h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, hr: k, html: a({
                        head: 1,
                        body: 1
                    }, c, l), i: b, iframe: g, img: k, input: k, ins: b, kbd: b, keygen: k, label: b, legend: b, li: c, link: k, main: c, map: c, mark: b, menu: a({ li: 1 }, c), meta: k, meter: e(b, { meter: 1 }), nav: c, noscript: a({ link: 1, meta: 1, style: 1 }, b), object: a({ param: 1 }, b), ol: { li: 1 }, optgroup: { option: 1 }, option: g, output: b, p: b, param: k, pre: b, progress: e(b, { progress: 1 }), q: b, rp: b, rt: b, ruby: a({ rp: 1, rt: 1 }, b), s: b, samp: b, script: g, section: c, select: { optgroup: 1, option: 1 }, small: b, source: k, span: b, strong: b, style: g, sub: b, summary: a({ h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1 }, b),
                    sup: b, table: { caption: 1, colgroup: 1, thead: 1, tfoot: 1, tbody: 1, tr: 1 }, tbody: { tr: 1 }, td: c, textarea: g, tfoot: { tr: 1 }, th: c, thead: { tr: 1 }, time: e(b, { time: 1 }), title: g, tr: { th: 1, td: 1 }, track: k, u: b, ul: { li: 1 }, "var": b, video: a({ source: 1, track: 1 }, c), wbr: k, acronym: b, applet: a({ param: 1 }, c), basefont: k, big: b, center: c, dialog: k, dir: { li: 1 }, font: b, isindex: k, noframes: c, strike: b, tt: b
                }; a(e, {
                    $block: a({ audio: 1, dd: 1, dt: 1, figcaption: 1, li: 1, video: 1 }, d, h), $blockLimit: {
                        article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1,
                        fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1
                    }, $cdata: { script: 1, style: 1 }, $editable: { address: 1, article: 1, aside: 1, blockquote: 1, body: 1, details: 1, div: 1, fieldset: 1, figcaption: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, main: 1, nav: 1, p: 1, pre: 1, section: 1 }, $empty: {
                        area: 1, base: 1, basefont: 1, br: 1, col: 1, command: 1, dialog: 1, embed: 1, hr: 1, img: 1, input: 1, isindex: 1, keygen: 1, link: 1, meta: 1, param: 1, source: 1,
                        track: 1, wbr: 1
                    }, $inline: b, $list: { dl: 1, ol: 1, ul: 1 }, $listItem: { dd: 1, dt: 1, li: 1 }, $nonBodyContent: a({ body: 1, head: 1, html: 1 }, e.head), $nonEditable: { applet: 1, audio: 1, button: 1, embed: 1, iframe: 1, map: 1, object: 1, option: 1, param: 1, script: 1, textarea: 1, video: 1 }, $object: { applet: 1, audio: 1, button: 1, hr: 1, iframe: 1, img: 1, input: 1, object: 1, select: 1, table: 1, textarea: 1, video: 1 }, $removeEmpty: {
                        abbr: 1, acronym: 1, b: 1, bdi: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, mark: 1, meter: 1, output: 1, q: 1, ruby: 1,
                        s: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, time: 1, tt: 1, u: 1, "var": 1
                    }, $tabIndex: { a: 1, area: 1, button: 1, input: 1, object: 1, select: 1, textarea: 1 }, $tableContent: { caption: 1, col: 1, colgroup: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }, $transparent: { a: 1, audio: 1, canvas: 1, del: 1, ins: 1, map: 1, noscript: 1, object: 1, video: 1 }, $intermediate: { caption: 1, colgroup: 1, dd: 1, dt: 1, figcaption: 1, legend: 1, li: 1, optgroup: 1, option: 1, rp: 1, rt: 1, summary: 1, tbody: 1, td: 1, tfoot: 1, th: 1, thead: 1, tr: 1 }
                }); return e
            }(), CKEDITOR.dom.event = function (a) {
                this.$ =
                a
            }, CKEDITOR.dom.event.prototype = {
                getKey: function () { return this.$.keyCode || this.$.which }, getKeystroke: function () { var a = this.getKey(); if (this.$.ctrlKey || this.$.metaKey) a += CKEDITOR.CTRL; this.$.shiftKey && (a += CKEDITOR.SHIFT); this.$.altKey && (a += CKEDITOR.ALT); return a }, preventDefault: function (a) { var e = this.$; e.preventDefault ? e.preventDefault() : e.returnValue = !1; a && this.stopPropagation() }, stopPropagation: function () { var a = this.$; a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0 }, getTarget: function () {
                    var a =
                        this.$.target || this.$.srcElement; return a ? new CKEDITOR.dom.node(a) : null
                }, getPhase: function () { return this.$.eventPhase || 2 }, getPageOffset: function () { var a = this.getTarget().getDocument().$; return { x: this.$.pageX || this.$.clientX + (a.documentElement.scrollLeft || a.body.scrollLeft), y: this.$.pageY || this.$.clientY + (a.documentElement.scrollTop || a.body.scrollTop) } }
            }, CKEDITOR.CTRL = 1114112, CKEDITOR.SHIFT = 2228224, CKEDITOR.ALT = 4456448, CKEDITOR.EVENT_PHASE_CAPTURING = 1, CKEDITOR.EVENT_PHASE_AT_TARGET = 2, CKEDITOR.EVENT_PHASE_BUBBLING =
        3, CKEDITOR.dom.domObject = function (a) { a && (this.$ = a) }, CKEDITOR.dom.domObject.prototype = function () {
            var a = function (a, b) { return function (c) { "undefined" != typeof CKEDITOR && a.fire(b, new CKEDITOR.dom.event(c)) } }; return {
                getPrivate: function () { var a; (a = this.getCustomData("_")) || this.setCustomData("_", a = {}); return a }, on: function (e) {
                    var b = this.getCustomData("_cke_nativeListeners"); b || (b = {}, this.setCustomData("_cke_nativeListeners", b)); b[e] || (b = b[e] = a(this, e), this.$.addEventListener ? this.$.addEventListener(e, b,
                        !!CKEDITOR.event.useCapture) : this.$.attachEvent && this.$.attachEvent("on" + e, b)); return CKEDITOR.event.prototype.on.apply(this, arguments)
                }, removeListener: function (a) { CKEDITOR.event.prototype.removeListener.apply(this, arguments); if (!this.hasListeners(a)) { var b = this.getCustomData("_cke_nativeListeners"), c = b && b[a]; c && (this.$.removeEventListener ? this.$.removeEventListener(a, c, !1) : this.$.detachEvent && this.$.detachEvent("on" + a, c), delete b[a]) } }, removeAllListeners: function () {
                    var a = this.getCustomData("_cke_nativeListeners"),
                    b; for (b in a) { var c = a[b]; this.$.detachEvent ? this.$.detachEvent("on" + b, c) : this.$.removeEventListener && this.$.removeEventListener(b, c, !1); delete a[b] } CKEDITOR.event.prototype.removeAllListeners.call(this)
                }
            }
        }(), function (a) {
            var e = {}; CKEDITOR.on("reset", function () { e = {} }); a.equals = function (a) { try { return a && a.$ === this.$ } catch (c) { return !1 } }; a.setCustomData = function (a, c) { var d = this.getUniqueId(); (e[d] || (e[d] = {}))[a] = c; return this }; a.getCustomData = function (a) {
                var c = this.$["data-cke-expando"]; return (c = c && e[c]) &&
                    a in c ? c[a] : null
            }; a.removeCustomData = function (a) { var c = this.$["data-cke-expando"], c = c && e[c], d, l; c && (d = c[a], l = a in c, delete c[a]); return l ? d : null }; a.clearCustomData = function () { this.removeAllListeners(); var a = this.$["data-cke-expando"]; a && delete e[a] }; a.getUniqueId = function () { return this.$["data-cke-expando"] || (this.$["data-cke-expando"] = CKEDITOR.tools.getNextNumber()) }; CKEDITOR.event.implementOn(a)
        }(CKEDITOR.dom.domObject.prototype), CKEDITOR.dom.node = function (a) {
            return a ? new CKEDITOR.dom[a.nodeType ==
                CKEDITOR.NODE_DOCUMENT ? "document" : a.nodeType == CKEDITOR.NODE_ELEMENT ? "element" : a.nodeType == CKEDITOR.NODE_TEXT ? "text" : a.nodeType == CKEDITOR.NODE_COMMENT ? "comment" : a.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT ? "documentFragment" : "domObject"](a) : this
        }, CKEDITOR.dom.node.prototype = new CKEDITOR.dom.domObject, CKEDITOR.NODE_ELEMENT = 1, CKEDITOR.NODE_DOCUMENT = 9, CKEDITOR.NODE_TEXT = 3, CKEDITOR.NODE_COMMENT = 8, CKEDITOR.NODE_DOCUMENT_FRAGMENT = 11, CKEDITOR.POSITION_IDENTICAL = 0, CKEDITOR.POSITION_DISCONNECTED = 1, CKEDITOR.POSITION_FOLLOWING =
        2, CKEDITOR.POSITION_PRECEDING = 4, CKEDITOR.POSITION_IS_CONTAINED = 8, CKEDITOR.POSITION_CONTAINS = 16, CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype, {
            appendTo: function (a, e) { a.append(this, e); return a }, clone: function (a, e) {
                function b(c) { c["data-cke-expando"] && (c["data-cke-expando"] = !1); if (c.nodeType == CKEDITOR.NODE_ELEMENT || c.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) if (e || c.nodeType != CKEDITOR.NODE_ELEMENT || c.removeAttribute("id", !1), a) { c = c.childNodes; for (var d = 0; d < c.length; d++)b(c[d]) } } function c(b) {
                    if (b.type ==
                        CKEDITOR.NODE_ELEMENT || b.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) { if (b.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) { var d = b.getName(); ":" == d[0] && b.renameNode(d.substring(1)) } if (a) for (d = 0; d < b.getChildCount(); d++)c(b.getChild(d)) }
                } var d = this.$.cloneNode(a); b(d); d = new CKEDITOR.dom.node(d); CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (this.type == CKEDITOR.NODE_ELEMENT || this.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT) && c(d); return d
            }, hasPrevious: function () { return !!this.$.previousSibling }, hasNext: function () { return !!this.$.nextSibling },
            insertAfter: function (a) { a.$.parentNode.insertBefore(this.$, a.$.nextSibling); return a }, insertBefore: function (a) { a.$.parentNode.insertBefore(this.$, a.$); return a }, insertBeforeMe: function (a) { this.$.parentNode.insertBefore(a.$, this.$); return a }, getAddress: function (a) { for (var e = [], b = this.getDocument().$.documentElement, c = this.$; c && c != b;) { var d = c.parentNode; d && e.unshift(this.getIndex.call({ $: c }, a)); c = d } return e }, getDocument: function () { return new CKEDITOR.dom.document(this.$.ownerDocument || this.$.parentNode.ownerDocument) },
            getIndex: function (a) { function e(a, g) { var h = g ? a.nextSibling : a.previousSibling; return h && h.nodeType == CKEDITOR.NODE_TEXT ? b(h) ? e(h, g) : h : null } function b(a) { return !a.nodeValue || a.nodeValue == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE } var c = this.$, d = -1, l; if (!this.$.parentNode || a && c.nodeType == CKEDITOR.NODE_TEXT && b(c) && !e(c) && !e(c, !0)) return -1; do a && c != this.$ && c.nodeType == CKEDITOR.NODE_TEXT && (l || b(c)) || (d++, l = c.nodeType == CKEDITOR.NODE_TEXT); while (c = c.previousSibling); return d }, getNextSourceNode: function (a,
                e, b) { if (b && !b.call) { var c = b; b = function (a) { return !a.equals(c) } } a = !a && this.getFirst && this.getFirst(); var d; if (!a) { if (this.type == CKEDITOR.NODE_ELEMENT && b && !1 === b(this, !0)) return null; a = this.getNext() } for (; !a && (d = (d || this).getParent());) { if (b && !1 === b(d, !0)) return null; a = d.getNext() } return !a || b && !1 === b(a) ? null : e && e != a.type ? a.getNextSourceNode(!1, e, b) : a }, getPreviousSourceNode: function (a, e, b) {
                    if (b && !b.call) { var c = b; b = function (a) { return !a.equals(c) } } a = !a && this.getLast && this.getLast(); var d; if (!a) {
                        if (this.type ==
                            CKEDITOR.NODE_ELEMENT && b && !1 === b(this, !0)) return null; a = this.getPrevious()
                    } for (; !a && (d = (d || this).getParent());) { if (b && !1 === b(d, !0)) return null; a = d.getPrevious() } return !a || b && !1 === b(a) ? null : e && a.type != e ? a.getPreviousSourceNode(!1, e, b) : a
                }, getPrevious: function (a) { var e = this.$, b; do b = (e = e.previousSibling) && 10 != e.nodeType && new CKEDITOR.dom.node(e); while (b && a && !a(b)); return b }, getNext: function (a) { var e = this.$, b; do b = (e = e.nextSibling) && new CKEDITOR.dom.node(e); while (b && a && !a(b)); return b }, getParent: function (a) {
                    var e =
                        this.$.parentNode; return e && (e.nodeType == CKEDITOR.NODE_ELEMENT || a && e.nodeType == CKEDITOR.NODE_DOCUMENT_FRAGMENT) ? new CKEDITOR.dom.node(e) : null
                }, getParents: function (a) { var e = this, b = []; do b[a ? "push" : "unshift"](e); while (e = e.getParent()); return b }, getCommonAncestor: function (a) { if (a.equals(this)) return this; if (a.contains && a.contains(this)) return a; var e = this.contains ? this : this.getParent(); do if (e.contains(a)) return e; while (e = e.getParent()); return null }, getPosition: function (a) {
                    var e = this.$, b = a.$; if (e.compareDocumentPosition) return e.compareDocumentPosition(b);
                    if (e == b) return CKEDITOR.POSITION_IDENTICAL; if (this.type == CKEDITOR.NODE_ELEMENT && a.type == CKEDITOR.NODE_ELEMENT) { if (e.contains) { if (e.contains(b)) return CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING; if (b.contains(e)) return CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING } if ("sourceIndex" in e) return 0 > e.sourceIndex || 0 > b.sourceIndex ? CKEDITOR.POSITION_DISCONNECTED : e.sourceIndex < b.sourceIndex ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING } e = this.getAddress(); a = a.getAddress();
                    for (var b = Math.min(e.length, a.length), c = 0; c < b; c++)if (e[c] != a[c]) return e[c] < a[c] ? CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_FOLLOWING; return e.length < a.length ? CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_PRECEDING : CKEDITOR.POSITION_IS_CONTAINED + CKEDITOR.POSITION_FOLLOWING
                }, getAscendant: function (a, e) {
                    var b = this.$, c, d; e || (b = b.parentNode); "function" == typeof a ? (d = !0, c = a) : (d = !1, c = function (b) { b = "string" == typeof b.nodeName ? b.nodeName.toLowerCase() : ""; return "string" == typeof a ? b == a : b in a }); for (; b;) {
                        if (c(d ?
                            new CKEDITOR.dom.node(b) : b)) return new CKEDITOR.dom.node(b); try { b = b.parentNode } catch (l) { b = null }
                    } return null
                }, hasAscendant: function (a, e) { var b = this.$; e || (b = b.parentNode); for (; b;) { if (b.nodeName && b.nodeName.toLowerCase() == a) return !0; b = b.parentNode } return !1 }, move: function (a, e) { a.append(this.remove(), e) }, remove: function (a) { var e = this.$, b = e.parentNode; if (b) { if (a) for (; a = e.firstChild;)b.insertBefore(e.removeChild(a), e); b.removeChild(e) } return this }, replace: function (a) { this.insertBefore(a); a.remove() }, trim: function () {
                    this.ltrim();
                    this.rtrim()
                }, ltrim: function () { for (var a; this.getFirst && (a = this.getFirst());) { if (a.type == CKEDITOR.NODE_TEXT) { var e = CKEDITOR.tools.ltrim(a.getText()), b = a.getLength(); if (e) e.length < b && (a.split(b - e.length), this.$.removeChild(this.$.firstChild)); else { a.remove(); continue } } break } }, rtrim: function () {
                    for (var a; this.getLast && (a = this.getLast());) {
                        if (a.type == CKEDITOR.NODE_TEXT) {
                            var e = CKEDITOR.tools.rtrim(a.getText()), b = a.getLength(); if (e) e.length < b && (a.split(e.length), this.$.lastChild.parentNode.removeChild(this.$.lastChild));
                            else { a.remove(); continue }
                        } break
                    } CKEDITOR.env.needsBrFiller && (a = this.$.lastChild) && 1 == a.type && "br" == a.nodeName.toLowerCase() && a.parentNode.removeChild(a)
                }, isReadOnly: function (a) {
                    var e = this; this.type != CKEDITOR.NODE_ELEMENT && (e = this.getParent()); CKEDITOR.env.edge && e && e.is("textarea", "input") && (a = !0); if (!a && e && "undefined" != typeof e.$.isContentEditable) return !(e.$.isContentEditable || e.data("cke-editable")); for (; e;) {
                        if (e.data("cke-editable")) return !1; if (e.hasAttribute("contenteditable")) return "false" ==
                            e.getAttribute("contenteditable"); e = e.getParent()
                    } return !0
                }
        }), CKEDITOR.dom.window = function (a) { CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.window.prototype = new CKEDITOR.dom.domObject, CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype, {
            focus: function () { this.$.focus() }, getViewPaneSize: function () { var a = this.$.document, e = "CSS1Compat" == a.compatMode; return { width: (e ? a.documentElement.clientWidth : a.body.clientWidth) || 0, height: (e ? a.documentElement.clientHeight : a.body.clientHeight) || 0 } }, getScrollPosition: function () {
                var a =
                    this.$; if ("pageXOffset" in a) return { x: a.pageXOffset || 0, y: a.pageYOffset || 0 }; a = a.document; return { x: a.documentElement.scrollLeft || a.body.scrollLeft || 0, y: a.documentElement.scrollTop || a.body.scrollTop || 0 }
            }, getFrame: function () { var a = this.$.frameElement; return a ? new CKEDITOR.dom.element.get(a) : null }
        }), CKEDITOR.dom.document = function (a) { CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.document.prototype = new CKEDITOR.dom.domObject, CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype, {
            type: CKEDITOR.NODE_DOCUMENT,
            appendStyleSheet: function (a) { if (this.$.createStyleSheet) this.$.createStyleSheet(a); else { var e = new CKEDITOR.dom.element("link"); e.setAttributes({ rel: "stylesheet", type: "text/css", href: a }); this.getHead().append(e) } }, appendStyleText: function (a) { if (this.$.createStyleSheet) { var e = this.$.createStyleSheet(""); e.cssText = a } else { var b = new CKEDITOR.dom.element("style", this); b.append(new CKEDITOR.dom.text(a, this)); this.getHead().append(b) } return e || b.$.sheet }, createElement: function (a, e) {
                var b = new CKEDITOR.dom.element(a,
                    this); e && (e.attributes && b.setAttributes(e.attributes), e.styles && b.setStyles(e.styles)); return b
            }, createText: function (a) { return new CKEDITOR.dom.text(a, this) }, focus: function () { this.getWindow().focus() }, getActive: function () { var a; try { a = this.$.activeElement } catch (e) { return null } return new CKEDITOR.dom.element(a) }, getById: function (a) { return (a = this.$.getElementById(a)) ? new CKEDITOR.dom.element(a) : null }, getByAddress: function (a, e) {
                for (var b = this.$.documentElement, c = 0; b && c < a.length; c++) {
                    var d = a[c]; if (e) for (var l =
                        -1, k = 0; k < b.childNodes.length; k++) { var g = b.childNodes[k]; if (!0 !== e || 3 != g.nodeType || !g.previousSibling || 3 != g.previousSibling.nodeType) if (l++, l == d) { b = g; break } } else b = b.childNodes[d]
                } return b ? new CKEDITOR.dom.node(b) : null
            }, getElementsByTag: function (a, e) { CKEDITOR.env.ie && 8 >= document.documentMode || !e || (a = e + ":" + a); return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a)) }, getHead: function () {
                var a = this.$.getElementsByTagName("head")[0]; return a = a ? new CKEDITOR.dom.element(a) : this.getDocumentElement().append(new CKEDITOR.dom.element("head"),
                    !0)
            }, getBody: function () { return new CKEDITOR.dom.element(this.$.body) }, getDocumentElement: function () { return new CKEDITOR.dom.element(this.$.documentElement) }, getWindow: function () { return new CKEDITOR.dom.window(this.$.parentWindow || this.$.defaultView) }, write: function (a) { this.$.open("text/html", "replace"); CKEDITOR.env.ie && (a = a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i, '$\x26\n\x3cscript data-cke-temp\x3d"1"\x3e(' + CKEDITOR.tools.fixDomain + ")();\x3c/script\x3e")); this.$.write(a); this.$.close() }, find: function (a) { return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a)) },
            findOne: function (a) { return (a = this.$.querySelector(a)) ? new CKEDITOR.dom.element(a) : null }, _getHtml5ShivFrag: function () { var a = this.getCustomData("html5ShivFrag"); a || (a = this.$.createDocumentFragment(), CKEDITOR.tools.enableHtml5Elements(a, !0), this.setCustomData("html5ShivFrag", a)); return a }
        }), CKEDITOR.dom.nodeList = function (a) { this.$ = a }, CKEDITOR.dom.nodeList.prototype = {
            count: function () { return this.$.length }, getItem: function (a) { return 0 > a || a >= this.$.length ? null : (a = this.$[a]) ? new CKEDITOR.dom.node(a) : null },
            toArray: function () { return CKEDITOR.tools.array.map(this.$, function (a) { return new CKEDITOR.dom.node(a) }) }
        }, CKEDITOR.dom.element = function (a, e) { "string" == typeof a && (a = (e ? e.$ : document).createElement(a)); CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.element.get = function (a) { return (a = "string" == typeof a ? document.getElementById(a) || document.getElementsByName(a)[0] : a) && (a.$ ? a : new CKEDITOR.dom.element(a)) }, CKEDITOR.dom.element.prototype = new CKEDITOR.dom.node, CKEDITOR.dom.element.createFromHtml = function (a,
            e) { var b = new CKEDITOR.dom.element("div", e); b.setHtml(a); return b.getFirst().remove() }, CKEDITOR.dom.element.setMarker = function (a, e, b, c) { var d = e.getCustomData("list_marker_id") || e.setCustomData("list_marker_id", CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"), l = e.getCustomData("list_marker_names") || e.setCustomData("list_marker_names", {}).getCustomData("list_marker_names"); a[d] = e; l[b] = 1; return e.setCustomData(b, c) }, CKEDITOR.dom.element.clearAllMarkers = function (a) {
                for (var e in a) CKEDITOR.dom.element.clearMarkers(a,
                    a[e], 1)
            }, CKEDITOR.dom.element.clearMarkers = function (a, e, b) { var c = e.getCustomData("list_marker_names"), d = e.getCustomData("list_marker_id"), l; for (l in c) e.removeCustomData(l); e.removeCustomData("list_marker_names"); b && (e.removeCustomData("list_marker_id"), delete a[d]) }, function () {
                function a(a, b) { return -1 < (" " + a + " ").replace(l, " ").indexOf(" " + b + " ") } function e(a) { var b = !0; a.$.id || (a.$.id = "cke_tmp_" + CKEDITOR.tools.getNextNumber(), b = !1); return function () { b || a.removeAttribute("id") } } function b(a, b) {
                    var c =
                        CKEDITOR.tools.escapeCss(a.$.id); return "#" + c + " " + b.split(/,\s*/).join(", #" + c + " ")
                } function c(a) { for (var b = 0, c = 0, f = k[a].length; c < f; c++)b += parseFloat(this.getComputedStyle(k[a][c]) || 0, 10) || 0; return b } var d = document.createElement("_").classList, d = "undefined" !== typeof d && null !== String(d.add).match(/\[Native code\]/gi), l = /[\n\t\r]/g; CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype, {
                    type: CKEDITOR.NODE_ELEMENT, addClass: d ? function (a) { this.$.classList.add(a); return this } : function (b) {
                        var h = this.$.className;
                        h && (a(h, b) || (h += " " + b)); this.$.className = h || b; return this
                    }, removeClass: d ? function (a) { var b = this.$; b.classList.remove(a); b.className || b.removeAttribute("class"); return this } : function (b) { var h = this.getAttribute("class"); h && a(h, b) && ((h = h.replace(new RegExp("(?:^|\\s+)" + b + "(?\x3d\\s|$)"), "").replace(/^\s+/, "")) ? this.setAttribute("class", h) : this.removeAttribute("class")); return this }, hasClass: function (b) { return a(this.$.className, b) }, append: function (a, b) {
                        "string" == typeof a && (a = this.getDocument().createElement(a));
                        b ? this.$.insertBefore(a.$, this.$.firstChild) : this.$.appendChild(a.$); return a
                    }, appendHtml: function (a) { if (this.$.childNodes.length) { var b = new CKEDITOR.dom.element("div", this.getDocument()); b.setHtml(a); b.moveChildren(this) } else this.setHtml(a) }, appendText: function (a) { null != this.$.text && CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? this.$.text += a : this.append(new CKEDITOR.dom.text(a)) }, appendBogus: function (a) {
                        if (a || CKEDITOR.env.needsBrFiller) {
                            for (a = this.getLast(); a && a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.rtrim(a.getText());)a =
                                a.getPrevious(); a && a.is && a.is("br") || (a = this.getDocument().createElement("br"), CKEDITOR.env.gecko && a.setAttribute("type", "_moz"), this.append(a))
                        }
                    }, breakParent: function (a, b) {
                        var c = new CKEDITOR.dom.range(this.getDocument()); c.setStartAfter(this); c.setEndAfter(a); var f = c.extractContents(!1, b || !1), d; c.insertNode(this.remove()); if (CKEDITOR.env.ie && !CKEDITOR.env.edge) {
                            for (c = new CKEDITOR.dom.element("div"); d = f.getFirst();)d.$.style.backgroundColor && (d.$.style.backgroundColor = d.$.style.backgroundColor), c.append(d);
                            c.insertAfter(this); c.remove(!0)
                        } else f.insertAfterNode(this)
                    }, contains: document.compareDocumentPosition ? function (a) { return !!(this.$.compareDocumentPosition(a.$) & 16) } : function (a) { var b = this.$; return a.type != CKEDITOR.NODE_ELEMENT ? b.contains(a.getParent().$) : b != a.$ && b.contains(a.$) }, focus: function () { function a() { try { this.$.focus() } catch (b) { } } return function (b) { b ? CKEDITOR.tools.setTimeout(a, 100, this) : a.call(this) } }(), getHtml: function () {
                        var a = this.$.innerHTML; return CKEDITOR.env.ie ? a.replace(/<\?[^>]*>/g,
                            "") : a
                    }, getOuterHtml: function () { if (this.$.outerHTML) return this.$.outerHTML.replace(/<\?[^>]*>/, ""); var a = this.$.ownerDocument.createElement("div"); a.appendChild(this.$.cloneNode(!0)); return a.innerHTML }, getClientRect: function (a) { var b = CKEDITOR.tools.extend({}, this.$.getBoundingClientRect()); !b.width && (b.width = b.right - b.left); !b.height && (b.height = b.bottom - b.top); return a ? CKEDITOR.tools.getAbsoluteRectPosition(this.getWindow(), b) : b }, setHtml: CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? function (a) {
                        try {
                            var b =
                                this.$; if (this.getParent()) return b.innerHTML = a; var c = this.getDocument()._getHtml5ShivFrag(); c.appendChild(b); b.innerHTML = a; c.removeChild(b); return a
                        } catch (f) { this.$.innerHTML = ""; b = new CKEDITOR.dom.element("body", this.getDocument()); b.$.innerHTML = a; for (b = b.getChildren(); b.count();)this.append(b.getItem(0)); return a }
                    } : function (a) { return this.$.innerHTML = a }, setText: function () { var a = document.createElement("p"); a.innerHTML = "x"; a = a.textContent; return function (b) { this.$[a ? "textContent" : "innerText"] = b } }(),
                    getAttribute: function () {
                        var a = function (a) { return this.$.getAttribute(a, 2) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) {
                            switch (a) {
                                case "class": a = "className"; break; case "http-equiv": a = "httpEquiv"; break; case "name": return this.$.name; case "tabindex": return a = this.$.getAttribute(a, 2), 0 !== a && 0 === this.$.tabIndex && (a = null), a; case "checked": return a = this.$.attributes.getNamedItem(a), (a.specified ? a.nodeValue : this.$.checked) ? "checked" : null; case "hspace": case "value": return this.$[a];
                                case "style": return this.$.style.cssText; case "contenteditable": case "contentEditable": return this.$.attributes.getNamedItem("contentEditable").specified ? this.$.getAttribute("contentEditable") : null
                            }return this.$.getAttribute(a, 2)
                        } : a
                    }(), getAttributes: function (a) { var b = {}, c = this.$.attributes, f; a = CKEDITOR.tools.isArray(a) ? a : []; for (f = 0; f < c.length; f++)-1 === CKEDITOR.tools.indexOf(a, c[f].name) && (b[c[f].name] = c[f].value); return b }, getChildren: function () { return new CKEDITOR.dom.nodeList(this.$.childNodes) },
                    getComputedStyle: document.defaultView && document.defaultView.getComputedStyle ? function (a) { var b = this.getWindow().$.getComputedStyle(this.$, null); return b ? b.getPropertyValue(a) : "" } : function (a) { return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)] }, getDtd: function () { var a = CKEDITOR.dtd[this.getName()]; this.getDtd = function () { return a }; return a }, getElementsByTag: CKEDITOR.dom.document.prototype.getElementsByTag, getTabIndex: function () {
                        var a = this.$.tabIndex; return 0 !== a || CKEDITOR.dtd.$tabIndex[this.getName()] ||
                            0 === parseInt(this.getAttribute("tabindex"), 10) ? a : -1
                    }, getText: function () { return this.$.textContent || this.$.innerText || "" }, getWindow: function () { return this.getDocument().getWindow() }, getId: function () { return this.$.id || null }, getNameAtt: function () { return this.$.name || null }, getName: function () { var a = this.$.nodeName.toLowerCase(); if (CKEDITOR.env.ie && 8 >= document.documentMode) { var b = this.$.scopeName; "HTML" != b && (a = b.toLowerCase() + ":" + a) } this.getName = function () { return a }; return this.getName() }, getValue: function () { return this.$.value },
                    getFirst: function (a) { var b = this.$.firstChild; (b = b && new CKEDITOR.dom.node(b)) && a && !a(b) && (b = b.getNext(a)); return b }, getLast: function (a) { var b = this.$.lastChild; (b = b && new CKEDITOR.dom.node(b)) && a && !a(b) && (b = b.getPrevious(a)); return b }, getStyle: function (a) { return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] }, is: function () { var a = this.getName(); if ("object" == typeof arguments[0]) return !!arguments[0][a]; for (var b = 0; b < arguments.length; b++)if (arguments[b] == a) return !0; return !1 }, isEditable: function (a) {
                        var b =
                            this.getName(); return this.isReadOnly() || "none" == this.getComputedStyle("display") || "hidden" == this.getComputedStyle("visibility") || CKEDITOR.dtd.$nonEditable[b] || CKEDITOR.dtd.$empty[b] || this.is("a") && (this.data("cke-saved-name") || this.hasAttribute("name")) && !this.getChildCount() ? !1 : !1 !== a ? (a = CKEDITOR.dtd[b] || CKEDITOR.dtd.span, !(!a || !a["#"])) : !0
                    }, isIdentical: function (a) {
                        var b = this.clone(0, 1); a = a.clone(0, 1); b.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]);
                        a.removeAttributes(["_moz_dirty", "data-cke-expando", "data-cke-saved-href", "data-cke-saved-name"]); if (b.$.isEqualNode) return b.$.style.cssText = CKEDITOR.tools.normalizeCssText(b.$.style.cssText), a.$.style.cssText = CKEDITOR.tools.normalizeCssText(a.$.style.cssText), b.$.isEqualNode(a.$); b = b.getOuterHtml(); a = a.getOuterHtml(); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version && this.is("a")) { var c = this.getParent(); c.type == CKEDITOR.NODE_ELEMENT && (c = c.clone(), c.setHtml(b), b = c.getHtml(), c.setHtml(a), a = c.getHtml()) } return b ==
                            a
                    }, isVisible: function () { var a = (this.$.offsetHeight || this.$.offsetWidth) && "hidden" != this.getComputedStyle("visibility"), b, c; a && CKEDITOR.env.webkit && (b = this.getWindow(), !b.equals(CKEDITOR.document.getWindow()) && (c = b.$.frameElement) && (a = (new CKEDITOR.dom.element(c)).isVisible())); return !!a }, isEmptyInlineRemoveable: function () {
                        if (!CKEDITOR.dtd.$removeEmpty[this.getName()]) return !1; for (var a = this.getChildren(), b = 0, c = a.count(); b < c; b++) {
                            var f = a.getItem(b); if (f.type != CKEDITOR.NODE_ELEMENT || !f.data("cke-bookmark")) if (f.type ==
                                CKEDITOR.NODE_ELEMENT && !f.isEmptyInlineRemoveable() || f.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(f.getText())) return !1
                        } return !0
                    }, hasAttributes: CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function () { for (var a = this.$.attributes, b = 0; b < a.length; b++) { var c = a[b]; switch (c.nodeName) { case "class": if (this.getAttribute("class")) return !0; case "data-cke-expando": continue; default: if (c.specified) return !0 } } return !1 } : function () {
                        var a = this.$.attributes, b = a.length, c = { "data-cke-expando": 1, _moz_dirty: 1 };
                        return 0 < b && (2 < b || !c[a[0].nodeName] || 2 == b && !c[a[1].nodeName])
                    }, hasAttribute: function () { function a(b) { var c = this.$.attributes.getNamedItem(b); if ("input" == this.getName()) switch (b) { case "class": return 0 < this.$.className.length; case "checked": return !!this.$.checked; case "value": return b = this.getAttribute("type"), "checkbox" == b || "radio" == b ? "on" != this.$.value : !!this.$.value }return c ? c.specified : !1 } return CKEDITOR.env.ie ? 8 > CKEDITOR.env.version ? function (b) { return "name" == b ? !!this.$.name : a.call(this, b) } : a : function (a) { return !!this.$.attributes.getNamedItem(a) } }(),
                    hide: function () { this.setStyle("display", "none") }, moveChildren: function (a, b) { var c = this.$; a = a.$; if (c != a) { var f; if (b) for (; f = c.lastChild;)a.insertBefore(c.removeChild(f), a.firstChild); else for (; f = c.firstChild;)a.appendChild(c.removeChild(f)) } }, mergeSiblings: function () {
                        function a(b, c, f) {
                            if (c && c.type == CKEDITOR.NODE_ELEMENT) {
                                for (var g = []; c.data("cke-bookmark") || c.isEmptyInlineRemoveable();)if (g.push(c), c = f ? c.getNext() : c.getPrevious(), !c || c.type != CKEDITOR.NODE_ELEMENT) return; if (b.isIdentical(c)) {
                                    for (var d =
                                        f ? b.getLast() : b.getFirst(); g.length;)g.shift().move(b, !f); c.moveChildren(b, !f); c.remove(); d && d.type == CKEDITOR.NODE_ELEMENT && d.mergeSiblings()
                                }
                            }
                        } return function (b) { if (!1 === b || CKEDITOR.dtd.$removeEmpty[this.getName()] || this.is("a")) a(this, this.getNext(), !0), a(this, this.getPrevious()) }
                    }(), show: function () { this.setStyles({ display: "", visibility: "" }) }, setAttribute: function () {
                        var a = function (a, b) { this.$.setAttribute(a, b); return this }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (b,
                            c) { "class" == b ? this.$.className = c : "style" == b ? this.$.style.cssText = c : "tabindex" == b ? this.$.tabIndex = c : "checked" == b ? this.$.checked = c : "contenteditable" == b ? a.call(this, "contentEditable", c) : a.apply(this, arguments); return this } : CKEDITOR.env.ie8Compat && CKEDITOR.env.secure ? function (b, c) { if ("src" == b && c.match(/^http:\/\//)) try { a.apply(this, arguments) } catch (f) { } else a.apply(this, arguments); return this } : a
                    }(), setAttributes: function (a) { for (var b in a) this.setAttribute(b, a[b]); return this }, setValue: function (a) {
                        this.$.value =
                        a; return this
                    }, removeAttribute: function () { var a = function (a) { this.$.removeAttribute(a) }; return CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) ? function (a) { "class" == a ? a = "className" : "tabindex" == a ? a = "tabIndex" : "contenteditable" == a && (a = "contentEditable"); this.$.removeAttribute(a) } : a }(), removeAttributes: function (a) { if (CKEDITOR.tools.isArray(a)) for (var b = 0; b < a.length; b++)this.removeAttribute(a[b]); else for (b in a = a || this.getAttributes(), a) a.hasOwnProperty(b) && this.removeAttribute(b) }, removeStyle: function (a) {
                        var b =
                            this.$.style; if (b.removeProperty || "border" != a && "margin" != a && "padding" != a) b.removeProperty ? b.removeProperty(a) : b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a)), this.$.style.cssText || this.removeAttribute("style"); else { var c = ["top", "left", "right", "bottom"], f; "border" == a && (f = ["color", "style", "width"]); for (var b = [], d = 0; d < c.length; d++)if (f) for (var e = 0; e < f.length; e++)b.push([a, c[d], f[e]].join("-")); else b.push([a, c[d]].join("-")); for (a = 0; a < b.length; a++)this.removeStyle(b[a]) }
                    }, setStyle: function (a,
                        b) { this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)] = b; return this }, setStyles: function (a) { for (var b in a) this.setStyle(b, a[b]); return this }, setOpacity: function (a) { CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? (a = Math.round(100 * a), this.setStyle("filter", 100 <= a ? "" : "progid:DXImageTransform.Microsoft.Alpha(opacity\x3d" + a + ")")) : this.setStyle("opacity", a) }, unselectable: function () {
                            this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "none")); if (CKEDITOR.env.ie) {
                                this.setAttribute("unselectable", "on"); for (var a,
                                    b = this.getElementsByTag("*"), c = 0, f = b.count(); c < f; c++)a = b.getItem(c), a.setAttribute("unselectable", "on")
                            }
                        }, getPositionedAncestor: function () { for (var a = this; "html" != a.getName();) { if ("static" != a.getComputedStyle("position")) return a; a = a.getParent() } return null }, getDocumentPosition: function (a) {
                            var b = 0, c = 0, f = this.getDocument(), d = f.getBody(), e = "BackCompat" == f.$.compatMode; if (document.documentElement.getBoundingClientRect && (CKEDITOR.env.ie ? 8 !== CKEDITOR.env.version : 1)) {
                                var l = this.$.getBoundingClientRect(),
                                k = f.$.documentElement, y = k.clientTop || d.$.clientTop || 0, p = k.clientLeft || d.$.clientLeft || 0, w = !0; CKEDITOR.env.ie && (w = f.getDocumentElement().contains(this), f = f.getBody().contains(this), w = e && f || !e && w); w && (CKEDITOR.env.webkit || CKEDITOR.env.ie && 12 <= CKEDITOR.env.version ? (b = d.$.scrollLeft || k.scrollLeft, c = d.$.scrollTop || k.scrollTop) : (c = e ? d.$ : k, b = c.scrollLeft, c = c.scrollTop), b = l.left + b - p, c = l.top + c - y)
                            } else for (y = this, p = null; y && "body" != y.getName() && "html" != y.getName();) {
                                b += y.$.offsetLeft - y.$.scrollLeft; c += y.$.offsetTop -
                                    y.$.scrollTop; y.equals(this) || (b += y.$.clientLeft || 0, c += y.$.clientTop || 0); for (; p && !p.equals(y);)b -= p.$.scrollLeft, c -= p.$.scrollTop, p = p.getParent(); p = y; y = (l = y.$.offsetParent) ? new CKEDITOR.dom.element(l) : null
                            } a && (l = this.getWindow(), y = a.getWindow(), !l.equals(y) && l.$.frameElement && (a = (new CKEDITOR.dom.element(l.$.frameElement)).getDocumentPosition(a), b += a.x, c += a.y)); document.documentElement.getBoundingClientRect || !CKEDITOR.env.gecko || e || (b += this.$.clientLeft ? 1 : 0, c += this.$.clientTop ? 1 : 0); return { x: b, y: c }
                        },
                    scrollIntoView: function (a) { var b = this.getParent(); if (b) { do if ((b.$.clientWidth && b.$.clientWidth < b.$.scrollWidth || b.$.clientHeight && b.$.clientHeight < b.$.scrollHeight) && !b.is("body") && this.scrollIntoParent(b, a, 1), b.is("html")) { var c = b.getWindow(); try { var f = c.$.frameElement; f && (b = new CKEDITOR.dom.element(f)) } catch (d) { } } while (b = b.getParent()) } }, scrollIntoParent: function (a, b, c) {
                        var f, d, e, l; function k(b, f) { /body|html/.test(a.getName()) ? a.getWindow().$.scrollBy(b, f) : (a.$.scrollLeft += b, a.$.scrollTop += f) }
                        function y(a, b) { var f = { x: 0, y: 0 }; if (!a.is(w ? "body" : "html")) { var c = a.$.getBoundingClientRect(); f.x = c.left; f.y = c.top } c = a.getWindow(); c.equals(b) || (c = y(CKEDITOR.dom.element.get(c.$.frameElement), b), f.x += c.x, f.y += c.y); return f } function p(a, b) { return parseInt(a.getComputedStyle("margin-" + b) || 0, 10) || 0 } !a && (a = this.getWindow()); e = a.getDocument(); var w = "BackCompat" == e.$.compatMode; a instanceof CKEDITOR.dom.window && (a = w ? e.getBody() : e.getDocumentElement()); CKEDITOR.env.webkit && (e = this.getEditor(!1)) && (e._.previousScrollTop =
                            null); e = a.getWindow(); d = y(this, e); var q = y(a, e), B = this.$.offsetHeight; f = this.$.offsetWidth; var t = a.$.clientHeight, x = a.$.clientWidth; e = d.x - p(this, "left") - q.x || 0; l = d.y - p(this, "top") - q.y || 0; f = d.x + f + p(this, "right") - (q.x + x) || 0; d = d.y + B + p(this, "bottom") - (q.y + t) || 0; (0 > l || 0 < d) && k(0, !0 === b ? l : !1 === b ? d : 0 > l ? l : d); c && (0 > e || 0 < f) && k(0 > e ? e : f, 0)
                    }, setState: function (a, b, c) {
                        b = b || "cke"; switch (a) {
                            case CKEDITOR.TRISTATE_ON: this.addClass(b + "_on"); this.removeClass(b + "_off"); this.removeClass(b + "_disabled"); c && this.setAttribute("aria-pressed",
                                !0); c && this.removeAttribute("aria-disabled"); break; case CKEDITOR.TRISTATE_DISABLED: this.addClass(b + "_disabled"); this.removeClass(b + "_off"); this.removeClass(b + "_on"); c && this.setAttribute("aria-disabled", !0); c && this.removeAttribute("aria-pressed"); break; default: this.addClass(b + "_off"), this.removeClass(b + "_on"), this.removeClass(b + "_disabled"), c && this.removeAttribute("aria-pressed"), c && this.removeAttribute("aria-disabled")
                        }
                    }, getFrameDocument: function () {
                        var a = this.$; try { a.contentWindow.document } catch (b) {
                            a.src =
                            a.src
                        } return a && new CKEDITOR.dom.document(a.contentWindow.document)
                    }, copyAttributes: function (a, b) { var c = this.$.attributes; b = b || {}; for (var f = 0; f < c.length; f++) { var d = c[f], e = d.nodeName.toLowerCase(), l; if (!(e in b)) if ("checked" == e && (l = this.getAttribute(e))) a.setAttribute(e, l); else if (!CKEDITOR.env.ie || this.hasAttribute(e)) l = this.getAttribute(e), null === l && (l = d.nodeValue), a.setAttribute(e, l) } "" !== this.$.style.cssText && (a.$.style.cssText = this.$.style.cssText) }, renameNode: function (a) {
                        if (this.getName() != a) {
                            var b =
                                this.getDocument(); a = new CKEDITOR.dom.element(a, b); this.copyAttributes(a); this.moveChildren(a); this.getParent(!0) && this.$.parentNode.replaceChild(a.$, this.$); a.$["data-cke-expando"] = this.$["data-cke-expando"]; this.$ = a.$; delete this.getName
                        }
                    }, getChild: function () { function a(b, c) { var f = b.childNodes; if (0 <= c && c < f.length) return f[c] } return function (b) { var c = this.$; if (b.slice) for (b = b.slice(); 0 < b.length && c;)c = a(c, b.shift()); else c = a(c, b); return c ? new CKEDITOR.dom.node(c) : null } }(), getChildCount: function () { return this.$.childNodes.length },
                    disableContextMenu: function () { function a(b) { return b.type == CKEDITOR.NODE_ELEMENT && b.hasClass("cke_enable_context_menu") } this.on("contextmenu", function (b) { b.data.getTarget().getAscendant(a, !0) || b.data.preventDefault() }) }, getDirection: function (a) { return a ? this.getComputedStyle("direction") || this.getDirection() || this.getParent() && this.getParent().getDirection(1) || this.getDocument().$.dir || "ltr" : this.getStyle("direction") || this.getAttribute("dir") }, data: function (a, b) {
                        a = "data-" + a; if (void 0 === b) return this.getAttribute(a);
                        !1 === b ? this.removeAttribute(a) : this.setAttribute(a, b); return null
                    }, getEditor: function (a) { var b = CKEDITOR.instances, c, f, d; a = a || void 0 === a; for (c in b) if (f = b[c], f.element.equals(this) && f.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO || !a && (d = f.editable()) && (d.equals(this) || d.contains(this))) return f; return null }, find: function (a) { var c = e(this); a = new CKEDITOR.dom.nodeList(this.$.querySelectorAll(b(this, a))); c(); return a }, findOne: function (a) {
                        var c = e(this); a = this.$.querySelector(b(this, a)); c(); return a ? new CKEDITOR.dom.element(a) :
                            null
                    }, forEach: function (a, b, c) { if (!(c || b && this.type != b)) var f = a(this); if (!1 !== f) { c = this.getChildren(); for (var d = 0; d < c.count(); d++)f = c.getItem(d), f.type == CKEDITOR.NODE_ELEMENT ? f.forEach(a, b) : b && f.type != b || a(f) } }
                }); var k = { width: ["border-left-width", "border-right-width", "padding-left", "padding-right"], height: ["border-top-width", "border-bottom-width", "padding-top", "padding-bottom"] }; CKEDITOR.dom.element.prototype.setSize = function (a, b, d) {
                    "number" == typeof b && (!d || CKEDITOR.env.ie && CKEDITOR.env.quirks || (b -=
                        c.call(this, a)), this.setStyle(a, b + "px"))
                }; CKEDITOR.dom.element.prototype.getSize = function (a, b) { var d = Math.max(this.$["offset" + CKEDITOR.tools.capitalize(a)], this.$["client" + CKEDITOR.tools.capitalize(a)]) || 0; b && (d -= c.call(this, a)); return d }
            }(), CKEDITOR.dom.documentFragment = function (a) { a = a || CKEDITOR.document; this.$ = a.type == CKEDITOR.NODE_DOCUMENT ? a.$.createDocumentFragment() : a }, CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype, CKEDITOR.dom.element.prototype, {
                type: CKEDITOR.NODE_DOCUMENT_FRAGMENT,
                insertAfterNode: function (a) { a = a.$; a.parentNode.insertBefore(this.$, a.nextSibling) }, getHtml: function () { var a = new CKEDITOR.dom.element("div"); this.clone(1, 1).appendTo(a); return a.getHtml().replace(/\s*data-cke-expando=".*?"/g, "") }
            }, !0, { append: 1, appendBogus: 1, clone: 1, getFirst: 1, getHtml: 1, getLast: 1, getParent: 1, getNext: 1, getPrevious: 1, appendTo: 1, moveChildren: 1, insertBefore: 1, insertAfterNode: 1, replace: 1, trim: 1, type: 1, ltrim: 1, rtrim: 1, getDocument: 1, getChildCount: 1, getChild: 1, getChildren: 1 }), function () {
                function a(a,
                    b) {
                        var f = this.range; if (this._.end) return null; if (!this._.start) { this._.start = 1; if (f.collapsed) return this.end(), null; f.optimize() } var c, d = f.startContainer; c = f.endContainer; var g = f.startOffset, n = f.endOffset, h, e = this.guard, m = this.type, l = a ? "getPreviousSourceNode" : "getNextSourceNode"; if (!a && !this._.guardLTR) {
                            var k = c.type == CKEDITOR.NODE_ELEMENT ? c : c.getParent(), A = c.type == CKEDITOR.NODE_ELEMENT ? c.getChild(n) : c.getNext(); this._.guardLTR = function (a, b) {
                                return (!b || !k.equals(a)) && (!A || !a.equals(A)) && (a.type !=
                                    CKEDITOR.NODE_ELEMENT || !b || !a.equals(f.root))
                            }
                        } if (a && !this._.guardRTL) { var G = d.type == CKEDITOR.NODE_ELEMENT ? d : d.getParent(), F = d.type == CKEDITOR.NODE_ELEMENT ? g ? d.getChild(g - 1) : null : d.getPrevious(); this._.guardRTL = function (a, b) { return (!b || !G.equals(a)) && (!F || !a.equals(F)) && (a.type != CKEDITOR.NODE_ELEMENT || !b || !a.equals(f.root)) } } var E = a ? this._.guardRTL : this._.guardLTR; h = e ? function (a, b) { return !1 === E(a, b) ? !1 : e(a, b) } : E; this.current ? c = this.current[l](!1, m, h) : (a ? c.type == CKEDITOR.NODE_ELEMENT && (c = 0 < n ? c.getChild(n -
                            1) : !1 === h(c, !0) ? null : c.getPreviousSourceNode(!0, m, h)) : (c = d, c.type == CKEDITOR.NODE_ELEMENT && ((c = c.getChild(g)) || (c = !1 === h(d, !0) ? null : d.getNextSourceNode(!0, m, h)))), c && !1 === h(c) && (c = null)); for (; c && !this._.end;) { this.current = c; if (!this.evaluator || !1 !== this.evaluator(c)) { if (!b) return c } else if (b && this.evaluator) return !1; c = c[l](!1, m, h) } this.end(); return this.current = null
                } function e(b) { for (var f, c = null; f = a.call(this, b);)c = f; return c } CKEDITOR.dom.walker = CKEDITOR.tools.createClass({
                    $: function (a) {
                        this.range =
                        a; this._ = {}
                    }, proto: { end: function () { this._.end = 1 }, next: function () { return a.call(this) }, previous: function () { return a.call(this, 1) }, checkForward: function () { return !1 !== a.call(this, 0, 1) }, checkBackward: function () { return !1 !== a.call(this, 1, 1) }, lastForward: function () { return e.call(this) }, lastBackward: function () { return e.call(this, 1) }, reset: function () { delete this.current; this._ = {} } }
                }); var b = {
                    block: 1, "list-item": 1, table: 1, "table-row-group": 1, "table-header-group": 1, "table-footer-group": 1, "table-row": 1, "table-column-group": 1,
                    "table-column": 1, "table-cell": 1, "table-caption": 1
                }, c = { absolute: 1, fixed: 1 }; CKEDITOR.dom.element.prototype.isBlockBoundary = function (a) { return "none" != this.getComputedStyle("float") || this.getComputedStyle("position") in c || !b[this.getComputedStyle("display")] ? !!(this.is(CKEDITOR.dtd.$block) || a && this.is(a)) : !0 }; CKEDITOR.dom.walker.blockBoundary = function (a) { return function (b) { return !(b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary(a)) } }; CKEDITOR.dom.walker.listItemBoundary = function () { return this.blockBoundary({ br: 1 }) };
                CKEDITOR.dom.walker.bookmark = function (a, b) { function f(a) { return a && a.getName && "span" == a.getName() && a.data("cke-bookmark") } return function (c) { var d, g; d = c && c.type != CKEDITOR.NODE_ELEMENT && (g = c.getParent()) && f(g); d = a ? d : d || f(c); return !!(b ^ d) } }; CKEDITOR.dom.walker.whitespaces = function (a) { return function (b) { var f; b && b.type == CKEDITOR.NODE_TEXT && (f = !CKEDITOR.tools.trim(b.getText()) || CKEDITOR.env.webkit && b.getText() == CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE); return !!(a ^ f) } }; CKEDITOR.dom.walker.invisible =
                    function (a) { var b = CKEDITOR.dom.walker.whitespaces(), f = CKEDITOR.env.webkit ? 1 : 0; return function (c) { b(c) ? c = 1 : (c.type == CKEDITOR.NODE_TEXT && (c = c.getParent()), c = c.$.offsetWidth <= f); return !!(a ^ c) } }; CKEDITOR.dom.walker.nodeType = function (a, b) { return function (f) { return !!(b ^ f.type == a) } }; CKEDITOR.dom.walker.bogus = function (a) {
                        function b(a) { return !l(a) && !k(a) } return function (f) {
                            var c = CKEDITOR.env.needsBrFiller ? f.is && f.is("br") : f.getText && d.test(f.getText()); c && (c = f.getParent(), f = f.getNext(b), c = c.isBlockBoundary() &&
                                (!f || f.type == CKEDITOR.NODE_ELEMENT && f.isBlockBoundary())); return !!(a ^ c)
                        }
                    }; CKEDITOR.dom.walker.temp = function (a) { return function (b) { b.type != CKEDITOR.NODE_ELEMENT && (b = b.getParent()); b = b && b.hasAttribute("data-cke-temp"); return !!(a ^ b) } }; var d = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/, l = CKEDITOR.dom.walker.whitespaces(), k = CKEDITOR.dom.walker.bookmark(), g = CKEDITOR.dom.walker.temp(), h = function (a) { return k(a) || l(a) || a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$inline) && !a.is(CKEDITOR.dtd.$empty) }; CKEDITOR.dom.walker.ignored =
                        function (a) { return function (b) { b = l(b) || k(b) || g(b); return !!(a ^ b) } }; var m = CKEDITOR.dom.walker.ignored(); CKEDITOR.dom.walker.empty = function (a) { return function (b) { for (var f = 0, c = b.getChildCount(); f < c; ++f)if (!m(b.getChild(f))) return !!a; return !a } }; var f = CKEDITOR.dom.walker.empty(), n = CKEDITOR.dom.walker.validEmptyBlockContainers = CKEDITOR.tools.extend(function (a) { var b = {}, f; for (f in a) CKEDITOR.dtd[f]["#"] && (b[f] = 1); return b }(CKEDITOR.dtd.$block), { caption: 1, td: 1, th: 1 }); CKEDITOR.dom.walker.editable = function (a) {
                            return function (b) {
                                b =
                                m(b) ? !1 : b.type == CKEDITOR.NODE_TEXT || b.type == CKEDITOR.NODE_ELEMENT && (b.is(CKEDITOR.dtd.$inline) || b.is("hr") || "false" == b.getAttribute("contenteditable") || !CKEDITOR.env.needsBrFiller && b.is(n) && f(b)) ? !0 : !1; return !!(a ^ b)
                            }
                        }; CKEDITOR.dom.element.prototype.getBogus = function () { var a = this; do a = a.getPreviousSourceNode(); while (h(a)); return a && (CKEDITOR.env.needsBrFiller ? a.is && a.is("br") : a.getText && d.test(a.getText())) ? a : !1 }
            }(), CKEDITOR.dom.range = function (a) {
                this.endOffset = this.endContainer = this.startOffset = this.startContainer =
                    null; this.collapsed = !0; var e = a instanceof CKEDITOR.dom.document; this.document = e ? a : a.getDocument(); this.root = e ? a.getBody() : a
            }, function () {
                function a(a) { a.collapsed = a.startContainer && a.endContainer && a.startContainer.equals(a.endContainer) && a.startOffset == a.endOffset } function e(a, b, c, d, g) {
                    function h(a, b, f, c) { var d = f ? a.getPrevious() : a.getNext(); if (c && l) return d; t || c ? b.append(a.clone(!0, g), f) : (a.remove(), k && b.append(a, f)); return d } function e() {
                        var a, b, f, c = Math.min(J.length, D.length); for (a = 0; a < c; a++)if (b =
                            J[a], f = D[a], !b.equals(f)) return a; return a - 1
                    } function m() {
                        var b = R - 1, c = E && I && !x.equals(C); b < N - 1 || b < S - 1 || c ? (c ? a.moveToPosition(C, CKEDITOR.POSITION_BEFORE_START) : S == b + 1 && F ? a.moveToPosition(D[b], CKEDITOR.POSITION_BEFORE_END) : a.moveToPosition(D[b + 1], CKEDITOR.POSITION_BEFORE_START), d && (b = J[b + 1]) && b.type == CKEDITOR.NODE_ELEMENT && (c = CKEDITOR.dom.element.createFromHtml('\x3cspan data-cke-bookmark\x3d"1" style\x3d"display:none"\x3e\x26nbsp;\x3c/span\x3e', a.document), c.insertAfter(b), b.mergeSiblings(!1), a.moveToBookmark({ startNode: c }))) :
                            a.collapse(!0)
                    } a.optimizeBookmark(); var l = 0 === b, k = 1 == b, t = 2 == b; b = t || k; var x = a.startContainer, C = a.endContainer, z = a.startOffset, A = a.endOffset, G, F, E, I, H, K; if (t && C.type == CKEDITOR.NODE_TEXT && (x.equals(C) || x.type === CKEDITOR.NODE_ELEMENT && x.getFirst().equals(C))) c.append(a.document.createText(C.substring(z, A))); else {
                        C.type == CKEDITOR.NODE_TEXT ? t ? K = !0 : C = C.split(A) : 0 < C.getChildCount() ? A >= C.getChildCount() ? (C = C.getChild(A - 1), F = !0) : C = C.getChild(A) : I = F = !0; x.type == CKEDITOR.NODE_TEXT ? t ? H = !0 : x.split(z) : 0 < x.getChildCount() ?
                            0 === z ? (x = x.getChild(z), G = !0) : x = x.getChild(z - 1) : E = G = !0; for (var J = x.getParents(), D = C.getParents(), R = e(), N = J.length - 1, S = D.length - 1, L = c, V, Z, X, da = -1, P = R; P <= N; P++) { Z = J[P]; X = Z.getNext(); for (P != N || Z.equals(D[P]) && N < S ? b && (V = L.append(Z.clone(0, g))) : G ? h(Z, L, !1, E) : H && L.append(a.document.createText(Z.substring(z))); X;) { if (X.equals(D[P])) { da = P; break } X = h(X, L) } L = V } L = c; for (P = R; P <= S; P++)if (c = D[P], X = c.getPrevious(), c.equals(J[P])) b && (L = L.getChild(0)); else {
                                P != S || c.equals(J[P]) && S < N ? b && (V = L.append(c.clone(0, g))) : F ? h(c,
                                    L, !1, I) : K && L.append(a.document.createText(c.substring(0, A))); if (P > da) for (; X;)X = h(X, L, !0); L = V
                            } t || m()
                    }
                } function b() { var a = !1, b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(!0), d = CKEDITOR.dom.walker.bogus(); return function (g) { return c(g) || b(g) ? !0 : d(g) && !a ? a = !0 : g.type == CKEDITOR.NODE_TEXT && (g.hasAscendant("pre") || CKEDITOR.tools.trim(g.getText()).length) || g.type == CKEDITOR.NODE_ELEMENT && !g.is(l) ? !1 : !0 } } function c(a) {
                    var b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(1);
                    return function (d) { return c(d) || b(d) ? !0 : !a && k(d) || d.type == CKEDITOR.NODE_ELEMENT && d.is(CKEDITOR.dtd.$removeEmpty) }
                } function d(a) { return function () { var b; return this[a ? "getPreviousNode" : "getNextNode"](function (a) { !b && m(a) && (b = a); return h(a) && !(k(a) && a.equals(b)) }) } } var l = { abbr: 1, acronym: 1, b: 1, bdo: 1, big: 1, cite: 1, code: 1, del: 1, dfn: 1, em: 1, font: 1, i: 1, ins: 1, label: 1, kbd: 1, q: 1, samp: 1, small: 1, span: 1, strike: 1, strong: 1, sub: 1, sup: 1, tt: 1, u: 1, "var": 1 }, k = CKEDITOR.dom.walker.bogus(), g = /^[\t\r\n ]*(?:&nbsp;|\xa0)$/,
                    h = CKEDITOR.dom.walker.editable(), m = CKEDITOR.dom.walker.ignored(!0); CKEDITOR.dom.range.prototype = {
                        clone: function () { var a = new CKEDITOR.dom.range(this.root); a._setStartContainer(this.startContainer); a.startOffset = this.startOffset; a._setEndContainer(this.endContainer); a.endOffset = this.endOffset; a.collapsed = this.collapsed; return a }, collapse: function (a) {
                            a ? (this._setEndContainer(this.startContainer), this.endOffset = this.startOffset) : (this._setStartContainer(this.endContainer), this.startOffset = this.endOffset);
                            this.collapsed = !0
                        }, cloneContents: function (a) { var b = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || e(this, 2, b, !1, "undefined" == typeof a ? !0 : a); return b }, deleteContents: function (a) { this.collapsed || e(this, 0, null, a) }, extractContents: function (a, b) { var c = new CKEDITOR.dom.documentFragment(this.document); this.collapsed || e(this, 1, c, a, "undefined" == typeof b ? !0 : b); return c }, createBookmark: function (a) {
                            var b, c, d, g, h = this.collapsed; b = this.document.createElement("span"); b.data("cke-bookmark", 1); b.setStyle("display",
                                "none"); b.setHtml("\x26nbsp;"); a && (d = "cke_bm_" + CKEDITOR.tools.getNextNumber(), b.setAttribute("id", d + (h ? "C" : "S"))); h || (c = b.clone(), c.setHtml("\x26nbsp;"), a && c.setAttribute("id", d + "E"), g = this.clone(), g.collapse(), g.insertNode(c)); g = this.clone(); g.collapse(!0); g.insertNode(b); c ? (this.setStartAfter(b), this.setEndBefore(c)) : this.moveToPosition(b, CKEDITOR.POSITION_AFTER_END); return { startNode: a ? d + (h ? "C" : "S") : b, endNode: a ? d + "E" : c, serializable: a, collapsed: h }
                        }, createBookmark2: function () {
                            function a(b) {
                                var f =
                                    b.container, d = b.offset, g; g = f; var h = d; g = g.type != CKEDITOR.NODE_ELEMENT || 0 === h || h == g.getChildCount() ? 0 : g.getChild(h - 1).type == CKEDITOR.NODE_TEXT && g.getChild(h).type == CKEDITOR.NODE_TEXT; g && (f = f.getChild(d - 1), d = f.getLength()); if (f.type == CKEDITOR.NODE_ELEMENT && 0 < d) { a: { for (g = f; d--;)if (h = g.getChild(d).getIndex(!0), 0 <= h) { d = h; break a } d = -1 } d += 1 } if (f.type == CKEDITOR.NODE_TEXT) {
                                        g = f; for (h = 0; (g = g.getPrevious()) && g.type == CKEDITOR.NODE_TEXT;)h += g.getText().replace(CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE, "").length;
                                        g = h; f.getText() ? d += g : (h = f.getPrevious(c), g ? (d = g, f = h ? h.getNext() : f.getParent().getFirst()) : (f = f.getParent(), d = h ? h.getIndex(!0) + 1 : 0))
                                    } b.container = f; b.offset = d
                            } function b(a, f) { var c = f.getCustomData("cke-fillingChar"); if (c) { var d = a.container; c.equals(d) && (a.offset -= CKEDITOR.dom.selection.FILLING_CHAR_SEQUENCE.length, 0 >= a.offset && (a.offset = d.getIndex(), a.container = d.getParent())) } } var c = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT, !0); return function (c) {
                                var d = this.collapsed, g = {
                                    container: this.startContainer,
                                    offset: this.startOffset
                                }, h = { container: this.endContainer, offset: this.endOffset }; c && (a(g), b(g, this.root), d || (a(h), b(h, this.root))); return { start: g.container.getAddress(c), end: d ? null : h.container.getAddress(c), startOffset: g.offset, endOffset: h.offset, normalized: c, collapsed: d, is2: !0 }
                            }
                        }(), moveToBookmark: function (a) {
                            if (a.is2) { var b = this.document.getByAddress(a.start, a.normalized), c = a.startOffset, d = a.end && this.document.getByAddress(a.end, a.normalized); a = a.endOffset; this.setStart(b, c); d ? this.setEnd(d, a) : this.collapse(!0) } else b =
                                (c = a.serializable) ? this.document.getById(a.startNode) : a.startNode, a = c ? this.document.getById(a.endNode) : a.endNode, this.setStartBefore(b), b.remove(), a ? (this.setEndBefore(a), a.remove()) : this.collapse(!0)
                        }, getBoundaryNodes: function () {
                            var a = this.startContainer, b = this.endContainer, c = this.startOffset, d = this.endOffset, g; if (a.type == CKEDITOR.NODE_ELEMENT) if (g = a.getChildCount(), g > c) a = a.getChild(c); else if (1 > g) a = a.getPreviousSourceNode(); else {
                                for (a = a.$; a.lastChild;)a = a.lastChild; a = new CKEDITOR.dom.node(a); a =
                                    a.getNextSourceNode() || a
                            } if (b.type == CKEDITOR.NODE_ELEMENT) if (g = b.getChildCount(), g > d) b = b.getChild(d).getPreviousSourceNode(!0); else if (1 > g) b = b.getPreviousSourceNode(); else { for (b = b.$; b.lastChild;)b = b.lastChild; b = new CKEDITOR.dom.node(b) } a.getPosition(b) & CKEDITOR.POSITION_FOLLOWING && (a = b); return { startNode: a, endNode: b }
                        }, getCommonAncestor: function (a, b) {
                            var c = this.startContainer, d = this.endContainer, c = c.equals(d) ? a && c.type == CKEDITOR.NODE_ELEMENT && this.startOffset == this.endOffset - 1 ? c.getChild(this.startOffset) :
                                c : c.getCommonAncestor(d); return b && !c.is ? c.getParent() : c
                        }, optimize: function () { var a = this.startContainer, b = this.startOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setStartAfter(a) : this.setStartBefore(a)); a = this.endContainer; b = this.endOffset; a.type != CKEDITOR.NODE_ELEMENT && (b ? b >= a.getLength() && this.setEndAfter(a) : this.setEndBefore(a)) }, optimizeBookmark: function () {
                            var a = this.startContainer, b = this.endContainer; a.is && a.is("span") && a.data("cke-bookmark") && this.setStartAt(a, CKEDITOR.POSITION_BEFORE_START);
                            b && b.is && b.is("span") && b.data("cke-bookmark") && this.setEndAt(b, CKEDITOR.POSITION_AFTER_END)
                        }, trim: function (a, b) {
                            var c = this.startContainer, d = this.startOffset, g = this.collapsed; if ((!a || g) && c && c.type == CKEDITOR.NODE_TEXT) {
                                if (d) if (d >= c.getLength()) d = c.getIndex() + 1, c = c.getParent(); else { var h = c.split(d), d = c.getIndex() + 1, c = c.getParent(); this.startContainer.equals(this.endContainer) ? this.setEnd(h, this.endOffset - this.startOffset) : c.equals(this.endContainer) && (this.endOffset += 1) } else d = c.getIndex(), c = c.getParent();
                                this.setStart(c, d); if (g) { this.collapse(!0); return }
                            } c = this.endContainer; d = this.endOffset; b || g || !c || c.type != CKEDITOR.NODE_TEXT || (d ? (d >= c.getLength() || c.split(d), d = c.getIndex() + 1) : d = c.getIndex(), c = c.getParent(), this.setEnd(c, d))
                        }, enlarge: function (a, b) {
                            function c(a) { return a && a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") ? null : a } var d = new RegExp(/[^\s\ufeff]/); switch (a) {
                                case CKEDITOR.ENLARGE_INLINE: var g = 1; case CKEDITOR.ENLARGE_ELEMENT: var h = function (a, b) {
                                    var f = new CKEDITOR.dom.range(m);
                                    f.setStart(a, b); f.setEndAt(m, CKEDITOR.POSITION_BEFORE_END); var f = new CKEDITOR.dom.walker(f), c; for (f.guard = function (a) { return !(a.type == CKEDITOR.NODE_ELEMENT && a.isBlockBoundary()) }; c = f.next();) { if (c.type != CKEDITOR.NODE_TEXT) return !1; G = c != a ? c.getText() : c.substring(b); if (d.test(G)) return !1 } return !0
                                }; if (this.collapsed) break; var e = this.getCommonAncestor(), m = this.root, l, k, t, x, C, z = !1, A, G; A = this.startContainer; var F = this.startOffset; A.type == CKEDITOR.NODE_TEXT ? (F && (A = !CKEDITOR.tools.trim(A.substring(0, F)).length &&
                                    A, z = !!A), A && ((x = A.getPrevious()) || (t = A.getParent()))) : (F && (x = A.getChild(F - 1) || A.getLast()), x || (t = A)); for (t = c(t); t || x;) {
                                        if (t && !x) { !C && t.equals(e) && (C = !0); if (g ? t.isBlockBoundary() : !m.contains(t)) break; z && "inline" == t.getComputedStyle("display") || (z = !1, C ? l = t : this.setStartBefore(t)); x = t.getPrevious() } for (; x;)if (A = !1, x.type == CKEDITOR.NODE_COMMENT) x = x.getPrevious(); else {
                                            if (x.type == CKEDITOR.NODE_TEXT) G = x.getText(), d.test(G) && (x = null), A = /[\s\ufeff]$/.test(G); else if ((x.$.offsetWidth > (CKEDITOR.env.webkit ? 1 :
                                                0) || b && x.is("br")) && !x.data("cke-bookmark")) if (z && CKEDITOR.dtd.$removeEmpty[x.getName()]) { G = x.getText(); if (d.test(G)) x = null; else for (var F = x.$.getElementsByTagName("*"), E = 0, I; I = F[E++];)if (!CKEDITOR.dtd.$removeEmpty[I.nodeName.toLowerCase()]) { x = null; break } x && (A = !!G.length) } else x = null; A && (z ? C ? l = t : t && this.setStartBefore(t) : z = !0); if (x) { A = x.getPrevious(); if (!t && !A) { t = x; x = null; break } x = A } else t = null
                                        } t && (t = c(t.getParent()))
                                    } A = this.endContainer; F = this.endOffset; t = x = null; C = z = !1; A.type == CKEDITOR.NODE_TEXT ?
                                        CKEDITOR.tools.trim(A.substring(F)).length ? z = !0 : (z = !A.getLength(), F == A.getLength() ? (x = A.getNext()) || (t = A.getParent()) : h(A, F) && (t = A.getParent())) : (x = A.getChild(F)) || (t = A); for (; t || x;) {
                                            if (t && !x) { !C && t.equals(e) && (C = !0); if (g ? t.isBlockBoundary() : !m.contains(t)) break; z && "inline" == t.getComputedStyle("display") || (z = !1, C ? k = t : t && this.setEndAfter(t)); x = t.getNext() } for (; x;) {
                                                A = !1; if (x.type == CKEDITOR.NODE_TEXT) G = x.getText(), h(x, 0) || (x = null), A = /^[\s\ufeff]/.test(G); else if (x.type == CKEDITOR.NODE_ELEMENT) {
                                                    if ((0 < x.$.offsetWidth ||
                                                        b && x.is("br")) && !x.data("cke-bookmark")) if (z && CKEDITOR.dtd.$removeEmpty[x.getName()]) { G = x.getText(); if (d.test(G)) x = null; else for (F = x.$.getElementsByTagName("*"), E = 0; I = F[E++];)if (!CKEDITOR.dtd.$removeEmpty[I.nodeName.toLowerCase()]) { x = null; break } x && (A = !!G.length) } else x = null
                                                } else A = 1; A && z && (C ? k = t : this.setEndAfter(t)); if (x) { A = x.getNext(); if (!t && !A) { t = x; x = null; break } x = A } else t = null
                                            } t && (t = c(t.getParent()))
                                        } l && k && (e = l.contains(k) ? k : l, this.setStartBefore(e), this.setEndAfter(e)); break; case CKEDITOR.ENLARGE_BLOCK_CONTENTS: case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS: t =
                                            new CKEDITOR.dom.range(this.root); m = this.root; t.setStartAt(m, CKEDITOR.POSITION_AFTER_START); t.setEnd(this.startContainer, this.startOffset); t = new CKEDITOR.dom.walker(t); var H, K, J = CKEDITOR.dom.walker.blockBoundary(a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? { br: 1 } : null), D = null, R = function (a) { if (a.type == CKEDITOR.NODE_ELEMENT && "false" == a.getAttribute("contenteditable")) if (D) { if (D.equals(a)) { D = null; return } } else D = a; else if (D) return; var b = J(a); b || (H = a); return b }, g = function (a) {
                                                var b = R(a); !b && a.is && a.is("br") &&
                                                    (K = a); return b
                                            }; t.guard = R; t = t.lastBackward(); H = H || m; this.setStartAt(H, !H.is("br") && (!t && this.checkStartOfBlock() || t && H.contains(t)) ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_AFTER_END); if (a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS) { t = this.clone(); t = new CKEDITOR.dom.walker(t); var N = CKEDITOR.dom.walker.whitespaces(), S = CKEDITOR.dom.walker.bookmark(); t.evaluator = function (a) { return !N(a) && !S(a) }; if ((t = t.previous()) && t.type == CKEDITOR.NODE_ELEMENT && t.is("br")) break } t = this.clone(); t.collapse(); t.setEndAt(m,
                                                CKEDITOR.POSITION_BEFORE_END); t = new CKEDITOR.dom.walker(t); t.guard = a == CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS ? g : R; H = D = K = null; t = t.lastForward(); H = H || m; this.setEndAt(H, !t && this.checkEndOfBlock() || t && H.contains(t) ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_BEFORE_START); K && this.setEndAfter(K)
                            }
                        }, shrink: function (a, b, c) {
                            var d = "boolean" === typeof c ? c : c && "boolean" === typeof c.shrinkOnBlockBoundary ? c.shrinkOnBlockBoundary : !0, g = c && c.skipBogus; if (!this.collapsed) {
                                a = a || CKEDITOR.SHRINK_TEXT; var h = this.clone(), e =
                                    this.startContainer, m = this.endContainer, l = this.startOffset, k = this.endOffset, t = c = 1; e && e.type == CKEDITOR.NODE_TEXT && (l ? l >= e.getLength() ? h.setStartAfter(e) : (h.setStartBefore(e), c = 0) : h.setStartBefore(e)); m && m.type == CKEDITOR.NODE_TEXT && (k ? k >= m.getLength() ? h.setEndAfter(m) : (h.setEndAfter(m), t = 0) : h.setEndBefore(m)); var h = new CKEDITOR.dom.walker(h), x = CKEDITOR.dom.walker.bookmark(), C = CKEDITOR.dom.walker.bogus(); h.evaluator = function (b) { return b.type == (a == CKEDITOR.SHRINK_ELEMENT ? CKEDITOR.NODE_ELEMENT : CKEDITOR.NODE_TEXT) };
                                var z; h.guard = function (b, c) { if (g && C(b) || x(b)) return !0; if (a == CKEDITOR.SHRINK_ELEMENT && b.type == CKEDITOR.NODE_TEXT || c && b.equals(z) || !1 === d && b.type == CKEDITOR.NODE_ELEMENT && b.isBlockBoundary() || b.type == CKEDITOR.NODE_ELEMENT && b.hasAttribute("contenteditable")) return !1; c || b.type != CKEDITOR.NODE_ELEMENT || (z = b); return !0 }; c && (e = h[a == CKEDITOR.SHRINK_ELEMENT ? "lastForward" : "next"]()) && this.setStartAt(e, b ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_START); t && (h.reset(), (h = h[a == CKEDITOR.SHRINK_ELEMENT ?
                                    "lastBackward" : "previous"]()) && this.setEndAt(h, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_END)); return !(!c && !t)
                            }
                        }, insertNode: function (a) { this.optimizeBookmark(); this.trim(!1, !0); var b = this.startContainer, c = b.getChild(this.startOffset); c ? a.insertBefore(c) : b.append(a); a.getParent() && a.getParent().equals(this.endContainer) && this.endOffset++; this.setStartBefore(a) }, moveToPosition: function (a, b) { this.setStartAt(a, b); this.collapse(!0) }, moveToRange: function (a) {
                            this.setStart(a.startContainer, a.startOffset);
                            this.setEnd(a.endContainer, a.endOffset)
                        }, selectNodeContents: function (a) { this.setStart(a, 0); this.setEnd(a, a.type == CKEDITOR.NODE_TEXT ? a.getLength() : a.getChildCount()) }, setStart: function (b, c) { b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (c = b.getIndex(), b = b.getParent()); this._setStartContainer(b); this.startOffset = c; this.endContainer || (this._setEndContainer(b), this.endOffset = c); a(this) }, setEnd: function (b, c) {
                            b.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$empty[b.getName()] && (c = b.getIndex() +
                                1, b = b.getParent()); this._setEndContainer(b); this.endOffset = c; this.startContainer || (this._setStartContainer(b), this.startOffset = c); a(this)
                        }, setStartAfter: function (a) { this.setStart(a.getParent(), a.getIndex() + 1) }, setStartBefore: function (a) { this.setStart(a.getParent(), a.getIndex()) }, setEndAfter: function (a) { this.setEnd(a.getParent(), a.getIndex() + 1) }, setEndBefore: function (a) { this.setEnd(a.getParent(), a.getIndex()) }, setStartAt: function (b, c) {
                            switch (c) {
                                case CKEDITOR.POSITION_AFTER_START: this.setStart(b, 0);
                                    break; case CKEDITOR.POSITION_BEFORE_END: b.type == CKEDITOR.NODE_TEXT ? this.setStart(b, b.getLength()) : this.setStart(b, b.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setStartBefore(b); break; case CKEDITOR.POSITION_AFTER_END: this.setStartAfter(b)
                            }a(this)
                        }, setEndAt: function (b, c) {
                            switch (c) {
                                case CKEDITOR.POSITION_AFTER_START: this.setEnd(b, 0); break; case CKEDITOR.POSITION_BEFORE_END: b.type == CKEDITOR.NODE_TEXT ? this.setEnd(b, b.getLength()) : this.setEnd(b, b.getChildCount()); break; case CKEDITOR.POSITION_BEFORE_START: this.setEndBefore(b);
                                    break; case CKEDITOR.POSITION_AFTER_END: this.setEndAfter(b)
                            }a(this)
                        }, fixBlock: function (a, b) { var c = this.createBookmark(), d = this.document.createElement(b); this.collapse(a); this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS); this.extractContents().appendTo(d); d.trim(); this.insertNode(d); var g = d.getBogus(); g && g.remove(); d.appendBogus(); this.moveToBookmark(c); return d }, splitBlock: function (a, b) {
                            var c = new CKEDITOR.dom.elementPath(this.startContainer, this.root), d = new CKEDITOR.dom.elementPath(this.endContainer, this.root),
                            g = c.block, h = d.block, e = null; if (!c.blockLimit.equals(d.blockLimit)) return null; "br" != a && (g || (g = this.fixBlock(!0, a), h = (new CKEDITOR.dom.elementPath(this.endContainer, this.root)).block), h || (h = this.fixBlock(!1, a))); c = g && this.checkStartOfBlock(); d = h && this.checkEndOfBlock(); this.deleteContents(); g && g.equals(h) && (d ? (e = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(h, CKEDITOR.POSITION_AFTER_END), h = null) : c ? (e = new CKEDITOR.dom.elementPath(this.startContainer, this.root), this.moveToPosition(g,
                                CKEDITOR.POSITION_BEFORE_START), g = null) : (h = this.splitElement(g, b || !1), g.is("ul", "ol") || g.appendBogus())); return { previousBlock: g, nextBlock: h, wasStartOfBlock: c, wasEndOfBlock: d, elementPath: e }
                        }, splitElement: function (a, b) { if (!this.collapsed) return null; this.setEndAt(a, CKEDITOR.POSITION_BEFORE_END); var c = this.extractContents(!1, b || !1), d = a.clone(!1, b || !1); c.appendTo(d); d.insertAfter(a); this.moveToPosition(a, CKEDITOR.POSITION_AFTER_END); return d }, removeEmptyBlocksAtEnd: function () {
                            function a(f) {
                                return function (a) {
                                    return b(a) ||
                                        c(a) || a.type == CKEDITOR.NODE_ELEMENT && a.isEmptyInlineRemoveable() || f.is("table") && a.is("caption") ? !1 : !0
                                }
                            } var b = CKEDITOR.dom.walker.whitespaces(), c = CKEDITOR.dom.walker.bookmark(!1); return function (b) { for (var c = this.createBookmark(), d = this[b ? "endPath" : "startPath"](), g = d.block || d.blockLimit, h; g && !g.equals(d.root) && !g.getFirst(a(g));)h = g.getParent(), this[b ? "setEndAt" : "setStartAt"](g, CKEDITOR.POSITION_AFTER_END), g.remove(1), g = h; this.moveToBookmark(c) }
                        }(), startPath: function () {
                            return new CKEDITOR.dom.elementPath(this.startContainer,
                                this.root)
                        }, endPath: function () { return new CKEDITOR.dom.elementPath(this.endContainer, this.root) }, checkBoundaryOfElement: function (a, b) { var d = b == CKEDITOR.START, g = this.clone(); g.collapse(d); g[d ? "setStartAt" : "setEndAt"](a, d ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END); g = new CKEDITOR.dom.walker(g); g.evaluator = c(d); return g[d ? "checkBackward" : "checkForward"]() }, checkStartOfBlock: function () {
                            var a = this.startContainer, c = this.startOffset; CKEDITOR.env.ie && c && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.ltrim(a.substring(0,
                                c)), g.test(a) && this.trim(0, 1)); this.trim(); a = new CKEDITOR.dom.elementPath(this.startContainer, this.root); c = this.clone(); c.collapse(!0); c.setStartAt(a.block || a.blockLimit, CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(c); a.evaluator = b(); return a.checkBackward()
                        }, checkEndOfBlock: function () {
                            var a = this.endContainer, c = this.endOffset; CKEDITOR.env.ie && a.type == CKEDITOR.NODE_TEXT && (a = CKEDITOR.tools.rtrim(a.substring(c)), g.test(a) && this.trim(1, 0)); this.trim(); a = new CKEDITOR.dom.elementPath(this.endContainer,
                                this.root); c = this.clone(); c.collapse(!1); c.setEndAt(a.block || a.blockLimit, CKEDITOR.POSITION_BEFORE_END); a = new CKEDITOR.dom.walker(c); a.evaluator = b(); return a.checkForward()
                        }, getPreviousNode: function (a, b, c) { var d = this.clone(); d.collapse(1); d.setStartAt(c || this.root, CKEDITOR.POSITION_AFTER_START); c = new CKEDITOR.dom.walker(d); c.evaluator = a; c.guard = b; return c.previous() }, getNextNode: function (a, b, c) {
                            var d = this.clone(); d.collapse(); d.setEndAt(c || this.root, CKEDITOR.POSITION_BEFORE_END); c = new CKEDITOR.dom.walker(d);
                            c.evaluator = a; c.guard = b; return c.next()
                        }, checkReadOnly: function () { function a(b, c) { for (; b;) { if (b.type == CKEDITOR.NODE_ELEMENT) { if ("false" == b.getAttribute("contentEditable") && !b.data("cke-editable")) return 0; if (b.is("html") || "true" == b.getAttribute("contentEditable") && (b.contains(c) || b.equals(c))) break } b = b.getParent() } return 1 } return function () { var b = this.startContainer, c = this.endContainer; return !(a(b, c) && a(c, b)) } }(), moveToElementEditablePosition: function (a, b) {
                            if (a.type == CKEDITOR.NODE_ELEMENT && !a.isEditable(!1)) return this.moveToPosition(a,
                                b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START), !0; for (var c = 0; a;) {
                                    if (a.type == CKEDITOR.NODE_TEXT) { b && this.endContainer && this.checkEndOfBlock() && g.test(a.getText()) ? this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START) : this.moveToPosition(a, b ? CKEDITOR.POSITION_AFTER_END : CKEDITOR.POSITION_BEFORE_START); c = 1; break } if (a.type == CKEDITOR.NODE_ELEMENT) if (a.isEditable()) this.moveToPosition(a, b ? CKEDITOR.POSITION_BEFORE_END : CKEDITOR.POSITION_AFTER_START), c = 1; else if (b && a.is("br") && this.endContainer &&
                                        this.checkEndOfBlock()) this.moveToPosition(a, CKEDITOR.POSITION_BEFORE_START); else if ("false" == a.getAttribute("contenteditable") && a.is(CKEDITOR.dtd.$block)) return this.setStartBefore(a), this.setEndAfter(a), !0; var d = a, h = c, e = void 0; d.type == CKEDITOR.NODE_ELEMENT && d.isEditable(!1) && (e = d[b ? "getLast" : "getFirst"](m)); h || e || (e = d[b ? "getPrevious" : "getNext"](m)); a = e
                                } return !!c
                        }, moveToClosestEditablePosition: function (a, b) {
                            var c, d = 0, g, h, e = [CKEDITOR.POSITION_AFTER_END, CKEDITOR.POSITION_BEFORE_START]; a ? (c = new CKEDITOR.dom.range(this.root),
                                c.moveToPosition(a, e[b ? 0 : 1])) : c = this.clone(); if (a && !a.is(CKEDITOR.dtd.$block)) d = 1; else if (g = c[b ? "getNextEditableNode" : "getPreviousEditableNode"]()) d = 1, (h = g.type == CKEDITOR.NODE_ELEMENT) && g.is(CKEDITOR.dtd.$block) && "false" == g.getAttribute("contenteditable") ? (c.setStartAt(g, CKEDITOR.POSITION_BEFORE_START), c.setEndAt(g, CKEDITOR.POSITION_AFTER_END)) : !CKEDITOR.env.needsBrFiller && h && g.is(CKEDITOR.dom.walker.validEmptyBlockContainers) ? (c.setEnd(g, 0), c.collapse()) : c.moveToPosition(g, e[b ? 1 : 0]); d && this.moveToRange(c);
                            return !!d
                        }, moveToElementEditStart: function (a) { return this.moveToElementEditablePosition(a) }, moveToElementEditEnd: function (a) { return this.moveToElementEditablePosition(a, !0) }, getEnclosedNode: function () {
                            var a = this.clone(); a.optimize(); if (a.startContainer.type != CKEDITOR.NODE_ELEMENT || a.endContainer.type != CKEDITOR.NODE_ELEMENT) return null; var a = new CKEDITOR.dom.walker(a), b = CKEDITOR.dom.walker.bookmark(!1, !0), c = CKEDITOR.dom.walker.whitespaces(!0); a.evaluator = function (a) { return c(a) && b(a) }; var d = a.next();
                            a.reset(); return d && d.equals(a.previous()) ? d : null
                        }, getTouchedStartNode: function () { var a = this.startContainer; return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.startOffset) || a }, getTouchedEndNode: function () { var a = this.endContainer; return this.collapsed || a.type != CKEDITOR.NODE_ELEMENT ? a : a.getChild(this.endOffset - 1) || a }, getNextEditableNode: d(), getPreviousEditableNode: d(1), _getTableElement: function (a) {
                            a = a || { td: 1, th: 1, tr: 1, tbody: 1, thead: 1, tfoot: 1, table: 1 }; var b = this.startContainer, c =
                                this.endContainer, d = b.getAscendant("table", !0), g = c.getAscendant("table", !0); return CKEDITOR.env.safari && d && c.equals(this.root) ? b.getAscendant(a, !0) : this.getEnclosedNode() ? this.getEnclosedNode().getAscendant(a, !0) : d && g && (d.equals(g) || d.contains(g) || g.contains(d)) ? b.getAscendant(a, !0) : null
                        }, scrollIntoView: function () {
                            var a = new CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e", this.document), b, c, d, g = this.clone(); g.optimize(); (d = g.startContainer.type == CKEDITOR.NODE_TEXT) ? (c = g.startContainer.getText(),
                                b = g.startContainer.split(g.startOffset), a.insertAfter(g.startContainer)) : g.insertNode(a); a.scrollIntoView(); d && (g.startContainer.setText(c), b.remove()); a.remove()
                        }, getClientRects: function () {
                            function a(b, c) {
                                var f = CKEDITOR.tools.array.map(b, function (a) { return a }), d = new CKEDITOR.dom.range(c.root), g, h, e; c.startContainer instanceof CKEDITOR.dom.element && (h = 0 === c.startOffset && c.startContainer.hasAttribute("data-widget")); c.endContainer instanceof CKEDITOR.dom.element && (e = (e = c.endOffset === (c.endContainer.getChildCount ?
                                    c.endContainer.getChildCount() : c.endContainer.length)) && c.endContainer.hasAttribute("data-widget")); h && d.setStart(c.startContainer.getParent(), c.startContainer.getIndex()); e && d.setEnd(c.endContainer.getParent(), c.endContainer.getIndex() + 1); if (h || e) c = d; d = c.cloneContents(); d = CKEDITOR.dom.document.prototype.find.call(d, "[data-cke-widget-id]").toArray(); if (d = CKEDITOR.tools.array.map(d, function (a) { var b = c.root.editor; a = a.getAttribute("data-cke-widget-id"); return b.widgets.instances[a].element })) return d =
                                        CKEDITOR.tools.array.map(d, function (a) { var b; b = a.getParent().hasClass("cke_widget_wrapper") ? a.getParent() : a; g = this.root.getDocument().$.createRange(); g.setStart(b.getParent().$, b.getIndex()); g.setEnd(b.getParent().$, b.getIndex() + 1); b = g.getClientRects(); b.widgetRect = a.getClientRect(); return b }, c), CKEDITOR.tools.array.forEach(d, function (a) {
                                            function b(d) {
                                                CKEDITOR.tools.array.forEach(f, function (b, g) {
                                                    var h = CKEDITOR.tools.objectCompare(a[d], b); h || (h = CKEDITOR.tools.objectCompare(a.widgetRect, b)); h && (Array.prototype.splice.call(f,
                                                        g, a.length - d, a.widgetRect), c = !0)
                                                }); c || (d < f.length - 1 ? b(d + 1) : f.push(a.widgetRect))
                                            } var c; b(0)
                                        }), f
                            } function b(a, c, f) {
                                var g; c.collapsed ? f.startContainer instanceof CKEDITOR.dom.element ? (a = f.checkStartOfBlock(), g = new CKEDITOR.dom.text("​"), a ? f.startContainer.append(g, !0) : 0 === f.startOffset ? g.insertBefore(f.startContainer.getFirst()) : (f = f.startContainer.getChildren().getItem(f.startOffset - 1), g.insertAfter(f)), c.setStart(g.$, 0), c.setEnd(g.$, 0), a = c.getClientRects(), g.remove()) : f.startContainer instanceof CKEDITOR.dom.text &&
                                    ("" === f.startContainer.getText() ? (f.startContainer.setText("​"), a = c.getClientRects(), f.startContainer.setText("")) : a = [d(f.createBookmark())]) : a = [d(f.createBookmark())]; return a
                            } function c(a, b, f) { a = CKEDITOR.tools.extend({}, a); b && (a = CKEDITOR.tools.getAbsoluteRectPosition(f.document.getWindow(), a)); !a.width && (a.width = a.right - a.left); !a.height && (a.height = a.bottom - a.top); return a } function d(a) {
                                var b = a.startNode; a = a.endNode; var c; b.setText("​"); b.removeStyle("display"); a ? (a.setText("​"), a.removeStyle("display"),
                                    c = [b.getClientRect(), a.getClientRect()], a.remove()) : c = [b.getClientRect(), b.getClientRect()]; b.remove(); return { right: Math.max(c[0].right, c[1].right), bottom: Math.max(c[0].bottom, c[1].bottom), left: Math.min(c[0].left, c[1].left), top: Math.min(c[0].top, c[1].top), width: Math.abs(c[0].left - c[1].left), height: Math.max(c[0].bottom, c[1].bottom) - Math.min(c[0].top, c[1].top) }
                            } return void 0 !== this.document.getSelection ? function (d) {
                                var g = this.root.getDocument().$.createRange(), h; g.setStart(this.startContainer.$, this.startOffset);
                                g.setEnd(this.endContainer.$, this.endOffset); h = g.getClientRects(); h = a(h, this); h.length || (h = b(h, g, this)); return CKEDITOR.tools.array.map(h, function (a) { return c(a, d, this) }, this)
                            } : function (a) { return [c(d(this.createBookmark()), a, this)] }
                        }(), _setStartContainer: function (a) { this.startContainer = a }, _setEndContainer: function (a) { this.endContainer = a }, _find: function (a, b) {
                            var c = this.getCommonAncestor(), d = this.getBoundaryNodes(), g = [], h, e, m, l; if (c && c.find) for (e = c.find(a), h = 0; h < e.count(); h++)if (c = e.getItem(h), b || !c.isReadOnly()) m =
                                c.getPosition(d.startNode) & CKEDITOR.POSITION_FOLLOWING || d.startNode.equals(c), l = c.getPosition(d.endNode) & CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_IS_CONTAINED || d.endNode.equals(c), m && l && g.push(c); return g
                        }
                    }; CKEDITOR.dom.range.mergeRanges = function (a) {
                        return CKEDITOR.tools.array.reduce(a, function (a, b) {
                            var c = a[a.length - 1], f = !1; b = b.clone(); b.enlarge(CKEDITOR.ENLARGE_ELEMENT); if (c) {
                                var d = new CKEDITOR.dom.range(b.root), f = new CKEDITOR.dom.walker(d), g = CKEDITOR.dom.walker.whitespaces(); d.setStart(c.endContainer,
                                    c.endOffset); d.setEnd(b.startContainer, b.startOffset); for (d = f.next(); g(d) || b.endContainer.equals(d);)d = f.next(); f = !d
                            } f ? c.setEnd(b.endContainer, b.endOffset) : a.push(b); return a
                        }, [])
                    }
            }(), CKEDITOR.POSITION_AFTER_START = 1, CKEDITOR.POSITION_BEFORE_END = 2, CKEDITOR.POSITION_BEFORE_START = 3, CKEDITOR.POSITION_AFTER_END = 4, CKEDITOR.ENLARGE_ELEMENT = 1, CKEDITOR.ENLARGE_BLOCK_CONTENTS = 2, CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS = 3, CKEDITOR.ENLARGE_INLINE = 4, CKEDITOR.START = 1, CKEDITOR.END = 2, CKEDITOR.SHRINK_ELEMENT = 1, CKEDITOR.SHRINK_TEXT =
        2, "use strict", function () {
            function a(a) { 1 > arguments.length || (this.range = a, this.forceBrBreak = 0, this.enlargeBr = 1, this.enforceRealBlocks = 0, this._ || (this._ = {})) } function e(a) { var b = []; a.forEach(function (a) { if ("true" == a.getAttribute("contenteditable")) return b.push(a), !1 }, CKEDITOR.NODE_ELEMENT, !0); return b } function b(a, c, d, g) {
                a: { null == g && (g = e(d)); for (var h; h = g.shift();)if (h.getDtd().p) { g = { element: h, remaining: g }; break a } g = null } if (!g) return 0; if ((h = CKEDITOR.filter.instances[g.element.data("cke-filter")]) &&
                    !h.check(c)) return b(a, c, d, g.remaining); c = new CKEDITOR.dom.range(g.element); c.selectNodeContents(g.element); c = c.createIterator(); c.enlargeBr = a.enlargeBr; c.enforceRealBlocks = a.enforceRealBlocks; c.activeFilter = c.filter = h; a._.nestedEditable = { element: g.element, container: d, remaining: g.remaining, iterator: c }; return 1
            } function c(a, b, c) { if (!b) return !1; a = a.clone(); a.collapse(!c); return a.checkBoundaryOfElement(b, c ? CKEDITOR.START : CKEDITOR.END) } var d = /^[\r\n\t ]+$/, l = CKEDITOR.dom.walker.bookmark(!1, !0), k = CKEDITOR.dom.walker.whitespaces(!0),
                g = function (a) { return l(a) && k(a) }, h = { dd: 1, dt: 1, li: 1 }; a.prototype = {
                    getNextParagraph: function (a) {
                        var f, e, k, u, v; a = a || "p"; if (this._.nestedEditable) {
                            if (f = this._.nestedEditable.iterator.getNextParagraph(a)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, f; this.activeFilter = this.filter; if (b(this, a, this._.nestedEditable.container, this._.nestedEditable.remaining)) return this.activeFilter = this._.nestedEditable.iterator.activeFilter, this._.nestedEditable.iterator.getNextParagraph(a); this._.nestedEditable =
                                null
                        } if (!this.range.root.getDtd()[a]) return null; if (!this._.started) {
                            var y = this.range.clone(); e = y.startPath(); var p = y.endPath(), w = !y.collapsed && c(y, e.block), q = !y.collapsed && c(y, p.block, 1); y.shrink(CKEDITOR.SHRINK_ELEMENT, !0); w && y.setStartAt(e.block, CKEDITOR.POSITION_BEFORE_END); q && y.setEndAt(p.block, CKEDITOR.POSITION_AFTER_START); e = y.endContainer.hasAscendant("pre", !0) || y.startContainer.hasAscendant("pre", !0); y.enlarge(this.forceBrBreak && !e || !this.enlargeBr ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS : CKEDITOR.ENLARGE_BLOCK_CONTENTS);
                            y.collapsed || (e = new CKEDITOR.dom.walker(y.clone()), p = CKEDITOR.dom.walker.bookmark(!0, !0), e.evaluator = p, this._.nextNode = e.next(), e = new CKEDITOR.dom.walker(y.clone()), e.evaluator = p, e = e.previous(), this._.lastNode = e.getNextSourceNode(!0, null, y.root), this._.lastNode && this._.lastNode.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(this._.lastNode.getText()) && this._.lastNode.getParent().isBlockBoundary() && (p = this.range.clone(), p.moveToPosition(this._.lastNode, CKEDITOR.POSITION_AFTER_END), p.checkEndOfBlock() &&
                                (p = new CKEDITOR.dom.elementPath(p.endContainer, p.root), this._.lastNode = (p.block || p.blockLimit).getNextSourceNode(!0))), this._.lastNode && y.root.contains(this._.lastNode) || (this._.lastNode = this._.docEndMarker = y.document.createText(""), this._.lastNode.insertAfter(e)), y = null); this._.started = 1; e = y
                        } p = this._.nextNode; y = this._.lastNode; for (this._.nextNode = null; p;) {
                            var w = 0, q = p.hasAscendant("pre"), B = p.type != CKEDITOR.NODE_ELEMENT, t = 0; if (B) p.type == CKEDITOR.NODE_TEXT && d.test(p.getText()) && (B = 0); else {
                                var x = p.getName();
                                if (CKEDITOR.dtd.$block[x] && "false" == p.getAttribute("contenteditable")) { f = p; b(this, a, f); break } else if (p.isBlockBoundary(this.forceBrBreak && !q && { br: 1 })) { if ("br" == x) B = 1; else if (!e && !p.getChildCount() && "hr" != x) { f = p; k = p.equals(y); break } e && (e.setEndAt(p, CKEDITOR.POSITION_BEFORE_START), "br" != x && (this._.nextNode = p)); w = 1 } else { if (p.getFirst()) { e || (e = this.range.clone(), e.setStartAt(p, CKEDITOR.POSITION_BEFORE_START)); p = p.getFirst(); continue } B = 1 }
                            } B && !e && (e = this.range.clone(), e.setStartAt(p, CKEDITOR.POSITION_BEFORE_START));
                            k = (!w || B) && p.equals(y); if (e && !w) for (; !p.getNext(g) && !k;) { x = p.getParent(); if (x.isBlockBoundary(this.forceBrBreak && !q && { br: 1 })) { w = 1; B = 0; k || x.equals(y); e.setEndAt(x, CKEDITOR.POSITION_BEFORE_END); break } p = x; B = 1; k = p.equals(y); t = 1 } B && e.setEndAt(p, CKEDITOR.POSITION_AFTER_END); p = this._getNextSourceNode(p, t, y); if ((k = !p) || w && e) break
                        } if (!f) {
                            if (!e) return this._.docEndMarker && this._.docEndMarker.remove(), this._.nextNode = null; f = new CKEDITOR.dom.elementPath(e.startContainer, e.root); p = f.blockLimit; w = { div: 1, th: 1, td: 1 };
                            f = f.block; !f && p && !this.enforceRealBlocks && w[p.getName()] && e.checkStartOfBlock() && e.checkEndOfBlock() && !p.equals(e.root) ? f = p : !f || this.enforceRealBlocks && f.is(h) ? (f = this.range.document.createElement(a), e.extractContents().appendTo(f), f.trim(), e.insertNode(f), u = v = !0) : "li" != f.getName() ? e.checkStartOfBlock() && e.checkEndOfBlock() || (f = f.clone(!1), e.extractContents().appendTo(f), f.trim(), v = e.splitBlock(), u = !v.wasStartOfBlock, v = !v.wasEndOfBlock, e.insertNode(f)) : k || (this._.nextNode = f.equals(y) ? null : this._getNextSourceNode(e.getBoundaryNodes().endNode,
                                1, y))
                        } u && (u = f.getPrevious()) && u.type == CKEDITOR.NODE_ELEMENT && ("br" == u.getName() ? u.remove() : u.getLast() && "br" == u.getLast().$.nodeName.toLowerCase() && u.getLast().remove()); v && (u = f.getLast()) && u.type == CKEDITOR.NODE_ELEMENT && "br" == u.getName() && (!CKEDITOR.env.needsBrFiller || u.getPrevious(l) || u.getNext(l)) && u.remove(); this._.nextNode || (this._.nextNode = k || f.equals(y) || !y ? null : this._getNextSourceNode(f, 1, y)); return f
                    }, _getNextSourceNode: function (a, b, c) {
                        function d(a) { return !(a.equals(c) || a.equals(g)) } var g =
                            this.range.root; for (a = a.getNextSourceNode(b, null, d); !l(a);)a = a.getNextSourceNode(b, null, d); return a
                    }
                }; CKEDITOR.dom.range.prototype.createIterator = function () { return new a(this) }
        }(), CKEDITOR.command = function (a, e) {
            this.uiItems = []; this.exec = function (b) { if (this.state == CKEDITOR.TRISTATE_DISABLED || !this.checkAllowed()) return !1; this.editorFocus && a.focus(); return !1 === this.fire("exec") ? !0 : !1 !== e.exec.call(this, a, b) }; this.refresh = function (a, b) {
                if (!this.readOnly && a.readOnly) return !0; if (this.context && !b.isContextFor(this.context) ||
                    !this.checkAllowed(!0)) return this.disable(), !0; this.startDisabled || this.enable(); this.modes && !this.modes[a.mode] && this.disable(); return !1 === this.fire("refresh", { editor: a, path: b }) ? !0 : e.refresh && !1 !== e.refresh.apply(this, arguments)
            }; var b; this.checkAllowed = function (c) { return c || "boolean" != typeof b ? b = a.activeFilter.checkFeature(this) : b }; CKEDITOR.tools.extend(this, e, { modes: { wysiwyg: 1 }, editorFocus: 1, contextSensitive: !!e.context, state: CKEDITOR.TRISTATE_DISABLED }); CKEDITOR.event.call(this)
        }, CKEDITOR.command.prototype =
        {
            enable: function () { this.state == CKEDITOR.TRISTATE_DISABLED && this.checkAllowed() && this.setState(this.preserveState && "undefined" != typeof this.previousState ? this.previousState : CKEDITOR.TRISTATE_OFF) }, disable: function () { this.setState(CKEDITOR.TRISTATE_DISABLED) }, setState: function (a) { if (this.state == a || a != CKEDITOR.TRISTATE_DISABLED && !this.checkAllowed()) return !1; this.previousState = this.state; this.state = a; this.fire("state"); return !0 }, toggleState: function () {
                this.state == CKEDITOR.TRISTATE_OFF ? this.setState(CKEDITOR.TRISTATE_ON) :
                this.state == CKEDITOR.TRISTATE_ON && this.setState(CKEDITOR.TRISTATE_OFF)
            }
        }, CKEDITOR.event.implementOn(CKEDITOR.command.prototype), CKEDITOR.ENTER_P = 1, CKEDITOR.ENTER_BR = 2, CKEDITOR.ENTER_DIV = 3, CKEDITOR.config = {
            customConfig: "config.js", autoUpdateElement: !0, language: "", defaultLanguage: "en", contentsLangDirection: "", enterMode: CKEDITOR.ENTER_P, forceEnterMode: !1, shiftEnterMode: CKEDITOR.ENTER_BR, docType: "\x3c!DOCTYPE html\x3e", bodyId: "", bodyClass: "", fullPage: !1, height: 200, contentsCss: CKEDITOR.getUrl("contents.css"),
            extraPlugins: "", removePlugins: "", protectedSource: [], tabIndex: 0, width: "", baseFloatZIndex: 1E4, blockedKeystrokes: [CKEDITOR.CTRL + 66, CKEDITOR.CTRL + 73, CKEDITOR.CTRL + 85]
        }, function () {
            function a(a, b, c, f, d) {
                var g, h; a = []; for (g in b) {
                    h = b[g]; h = "boolean" == typeof h ? {} : "function" == typeof h ? { match: h } : E(h); "$" != g.charAt(0) && (h.elements = g); c && (h.featureName = c.toLowerCase()); var e = h; e.elements = k(e.elements, /\s+/) || null; e.propertiesOnly = e.propertiesOnly || !0 === e.elements; var m = /\s*,\s*/, l = void 0; for (l in K) {
                        e[l] = k(e[l],
                            m) || null; var n = e, p = J[l], t = k(e[J[l]], m), x = e[l], D = [], q = !0, z = void 0; t ? q = !1 : t = {}; for (z in x) "!" == z.charAt(0) && (z = z.slice(1), D.push(z), t[z] = !0, q = !1); for (; z = D.pop();)x[z] = x["!" + z], delete x["!" + z]; n[p] = (q ? !1 : t) || null
                    } e.match = e.match || null; f.push(h); a.push(h)
                } b = d.elements; d = d.generic; var N; c = 0; for (f = a.length; c < f; ++c) {
                    g = E(a[c]); h = !0 === g.classes || !0 === g.styles || !0 === g.attributes; e = g; l = p = m = void 0; for (m in K) e[m] = w(e[m]); n = !0; for (l in J) {
                        m = J[l]; p = e[m]; t = []; x = void 0; for (x in p) -1 < x.indexOf("*") ? t.push(new RegExp("^" +
                            x.replace(/\*/g, ".*") + "$")) : t.push(x); p = t; p.length && (e[m] = p, n = !1)
                    } e.nothingRequired = n; e.noProperties = !(e.attributes || e.classes || e.styles); if (!0 === g.elements || null === g.elements) d[h ? "unshift" : "push"](g); else for (N in e = g.elements, delete g.elements, e) if (b[N]) b[N][h ? "unshift" : "push"](g); else b[N] = [g]
                }
            } function e(a, c, f, d) {
                if (!a.match || a.match(c)) if (d || g(a, c)) if (a.propertiesOnly || (f.valid = !0), f.allAttributes || (f.allAttributes = b(a.attributes, c.attributes, f.validAttributes)), f.allStyles || (f.allStyles = b(a.styles,
                    c.styles, f.validStyles)), !f.allClasses) { a = a.classes; c = c.classes; d = f.validClasses; if (a) if (!0 === a) a = !0; else { for (var h = 0, e = c.length, m; h < e; ++h)m = c[h], d[m] || (d[m] = a(m)); a = !1 } else a = !1; f.allClasses = a }
            } function b(a, b, c) { if (!a) return !1; if (!0 === a) return !0; for (var f in b) c[f] || (c[f] = a(f)); return !1 } function c(a, b, c) {
                if (!a.match || a.match(b)) {
                    if (a.noProperties) return !1; c.hadInvalidAttribute = d(a.attributes, b.attributes) || c.hadInvalidAttribute; c.hadInvalidStyle = d(a.styles, b.styles) || c.hadInvalidStyle; a = a.classes;
                    b = b.classes; if (a) { for (var f = !1, g = !0 === a, h = b.length; h--;)if (g || a(b[h])) b.splice(h, 1), f = !0; a = f } else a = !1; c.hadInvalidClass = a || c.hadInvalidClass
                }
            } function d(a, b) { if (!a) return !1; var c = !1, f = !0 === a, d; for (d in b) if (f || a(d)) delete b[d], c = !0; return c } function l(a, b, c) { if (a.disabled || a.customConfig && !c || !b) return !1; a._.cachedChecks = {}; return !0 } function k(a, b) {
                if (!a) return !1; if (!0 === a) return a; if ("string" == typeof a) return a = I(a), "*" == a ? !0 : CKEDITOR.tools.convertArrayToObject(a.split(b)); if (CKEDITOR.tools.isArray(a)) return a.length ?
                    CKEDITOR.tools.convertArrayToObject(a) : !1; var c = {}, f = 0, d; for (d in a) c[d] = a[d], f++; return f ? c : !1
            } function g(a, b) { if (a.nothingRequired) return !0; var c, f, d, g; if (d = a.requiredClasses) for (g = b.classes, c = 0; c < d.length; ++c)if (f = d[c], "string" == typeof f) { if (-1 == CKEDITOR.tools.indexOf(g, f)) return !1 } else if (!CKEDITOR.tools.checkIfAnyArrayItemMatches(g, f)) return !1; return h(b.styles, a.requiredStyles) && h(b.attributes, a.requiredAttributes) } function h(a, b) {
                if (!b) return !0; for (var c = 0, f; c < b.length; ++c)if (f = b[c], "string" ==
                    typeof f) { if (!(f in a)) return !1 } else if (!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a, f)) return !1; return !0
            } function m(a) { if (!a) return {}; a = a.split(/\s*,\s*/).sort(); for (var b = {}; a.length;)b[a.shift()] = "cke-test"; return b } function f(a) { var b, c, f, d, g = {}, h = 1; for (a = I(a); b = a.match(D);)(c = b[2]) ? (f = n(c, "styles"), d = n(c, "attrs"), c = n(c, "classes")) : f = d = c = null, g["$" + h++] = { elements: b[1], classes: c, styles: f, attributes: d }, a = a.slice(b[0].length); return g } function n(a, b) { var c = a.match(R[b]); return c ? I(c[1]) : null }
            function r(a) { var b = a.styleBackup = a.attributes.style, c = a.classBackup = a.attributes["class"]; a.styles || (a.styles = CKEDITOR.tools.parseCssText(b || "", 1)); a.classes || (a.classes = c ? c.split(/\s+/) : []) } function u(a, b, f, d) {
                var g = 0, h; d.toHtml && (b.name = b.name.replace(N, "$1")); if (d.doCallbacks && a.elementCallbacks) { a: { h = a.elementCallbacks; for (var m = 0, l = h.length, k; m < l; ++m)if (k = h[m](b)) { h = k; break a } h = void 0 } if (h) return h } if (d.doTransform && (h = a._.transformations[b.name])) { r(b); for (m = 0; m < h.length; ++m)x(a, b, h[m]); y(b) } if (d.doFilter) {
                    a: {
                        m =
                        b.name; l = a._; a = l.allowedRules.elements[m]; h = l.allowedRules.generic; m = l.disallowedRules.elements[m]; l = l.disallowedRules.generic; k = d.skipRequired; var n = { valid: !1, validAttributes: {}, validClasses: {}, validStyles: {}, allAttributes: !1, allClasses: !1, allStyles: !1, hadInvalidAttribute: !1, hadInvalidClass: !1, hadInvalidStyle: !1 }, t, D; if (a || h) {
                            r(b); if (m) for (t = 0, D = m.length; t < D; ++t)if (!1 === c(m[t], b, n)) { a = null; break a } if (l) for (t = 0, D = l.length; t < D; ++t)c(l[t], b, n); if (a) for (t = 0, D = a.length; t < D; ++t)e(a[t], b, n, k); if (h) for (t =
                                0, D = h.length; t < D; ++t)e(h[t], b, n, k); a = n
                        } else a = null
                    } if (!a || !a.valid) return f.push(b), 1; D = a.validAttributes; var J = a.validStyles; h = a.validClasses; var m = b.attributes, z = b.styles, l = b.classes; k = b.classBackup; var q = b.styleBackup, w, F, C = [], n = [], A = /^data-cke-/; t = !1; delete m.style; delete m["class"]; delete b.classBackup; delete b.styleBackup; if (!a.allAttributes) for (w in m) D[w] || (A.test(w) ? w == (F = w.replace(/^data-cke-saved-/, "")) || D[F] || (delete m[w], t = !0) : (delete m[w], t = !0)); if (!a.allStyles || a.hadInvalidStyle) {
                        for (w in z) a.allStyles ||
                            J[w] ? C.push(w + ":" + z[w]) : t = !0; C.length && (m.style = C.sort().join("; "))
                    } else q && (m.style = q); if (!a.allClasses || a.hadInvalidClass) { for (w = 0; w < l.length; ++w)(a.allClasses || h[l[w]]) && n.push(l[w]); n.length && (m["class"] = n.sort().join(" ")); k && n.length < k.split(/\s+/).length && (t = !0) } else k && (m["class"] = k); t && (g = 1); if (!d.skipFinalValidation && !p(b)) return f.push(b), 1
                } d.toHtml && (b.name = b.name.replace(S, "cke:$1")); return g
            } function v(a) {
                var b = [], c; for (c in a) -1 < c.indexOf("*") && b.push(c.replace(/\*/g, ".*")); return b.length ?
                    new RegExp("^(?:" + b.join("|") + ")$") : null
            } function y(a) { var b = a.attributes, c; delete b.style; delete b["class"]; if (c = CKEDITOR.tools.writeCssText(a.styles, !0)) b.style = c; a.classes.length && (b["class"] = a.classes.sort().join(" ")) } function p(a) { switch (a.name) { case "a": if (!(a.children.length || a.attributes.name || a.attributes.id)) return !1; break; case "img": if (!a.attributes.src) return !1 }return !0 } function w(a) { if (!a) return !1; if (!0 === a) return !0; var b = v(a); return function (c) { return c in a || b && c.match(b) } } function q() { return new CKEDITOR.htmlParser.element("br") }
            function B(a) { return a.type == CKEDITOR.NODE_ELEMENT && ("br" == a.name || F.$block[a.name]) } function t(a, b, c) {
                var f = a.name; if (F.$empty[f] || !a.children.length) "hr" == f && "br" == b ? a.replaceWith(q()) : (a.parent && c.push({ check: "it", el: a.parent }), a.remove()); else if (F.$block[f] || "tr" == f) if ("br" == b) a.previous && !B(a.previous) && (b = q(), b.insertBefore(a)), a.next && !B(a.next) && (b = q(), b.insertAfter(a)), a.replaceWithChildren(); else {
                    var f = a.children, d; b: {
                        d = F[b]; for (var g = 0, h = f.length, e; g < h; ++g)if (e = f[g], e.type == CKEDITOR.NODE_ELEMENT &&
                            !d[e.name]) { d = !1; break b } d = !0
                    } if (d) a.name = b, a.attributes = {}, c.push({ check: "parent-down", el: a }); else {
                        d = a.parent; for (var g = d.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || "body" == d.name, m, l, h = f.length; 0 < h;)e = f[--h], g && (e.type == CKEDITOR.NODE_TEXT || e.type == CKEDITOR.NODE_ELEMENT && F.$inline[e.name]) ? (m || (m = new CKEDITOR.htmlParser.element(b), m.insertAfter(a), c.push({ check: "parent-down", el: m })), m.add(e, 0)) : (m = null, l = F[d.name] || F.span, e.insertAfter(a), d.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || e.type != CKEDITOR.NODE_ELEMENT ||
                            l[e.name] || c.push({ check: "el-up", el: e })); a.remove()
                    }
                } else f in { style: 1, script: 1 } ? a.remove() : (a.parent && c.push({ check: "it", el: a.parent }), a.replaceWithChildren())
            } function x(a, b, c) { var f, d; for (f = 0; f < c.length; ++f)if (d = c[f], !(d.check && !a.check(d.check, !1) || d.left && !d.left(b))) { d.right(b, L); break } } function C(a, b) {
                var c = b.getDefinition(), f = c.attributes, d = c.styles, g, h, e, m; if (a.name != c.element) return !1; for (g in f) if ("class" == g) for (c = f[g].split(/\s+/), e = a.classes.join("|"); m = c.pop();) { if (-1 == e.indexOf(m)) return !1 } else if (a.attributes[g] !=
                    f[g]) return !1; for (h in d) if (a.styles[h] != d[h]) return !1; return !0
            } function z(a, b) { var c, f; "string" == typeof a ? c = a : a instanceof CKEDITOR.style ? f = a : (c = a[0], f = a[1]); return [{ element: c, left: f, right: function (a, c) { c.transform(a, b) } }] } function A(a) { return function (b) { return C(b, a) } } function G(a) { return function (b, c) { c[a](b) } } var F = CKEDITOR.dtd, E = CKEDITOR.tools.copy, I = CKEDITOR.tools.trim, H = ["", "p", "br", "div"]; CKEDITOR.FILTER_SKIP_TREE = 2; CKEDITOR.filter = function (a) {
                this.allowedContent = []; this.disallowedContent =
                    []; this.elementCallbacks = null; this.disabled = !1; this.editor = null; this.id = CKEDITOR.tools.getNextNumber(); this._ = { allowedRules: { elements: {}, generic: [] }, disallowedRules: { elements: {}, generic: [] }, transformations: {}, cachedTests: {}, cachedChecks: {} }; CKEDITOR.filter.instances[this.id] = this; if (a instanceof CKEDITOR.editor) {
                        a = this.editor = a; this.customConfig = !0; var b = a.config.allowedContent; !0 === b ? this.disabled = !0 : (b || (this.customConfig = !1), this.allow(b, "config", 1), this.allow(a.config.extraAllowedContent, "extra",
                            1), this.allow(H[a.enterMode] + " " + H[a.shiftEnterMode], "default", 1), this.disallow(a.config.disallowedContent))
                    } else this.customConfig = !1, this.allow(a, "default", 1)
            }; CKEDITOR.filter.instances = {}; CKEDITOR.filter.prototype = {
                allow: function (b, c, d) {
                    if (!l(this, b, d)) return !1; var g, h; if ("string" == typeof b) b = f(b); else if (b instanceof CKEDITOR.style) {
                        if (b.toAllowedContentRules) return this.allow(b.toAllowedContentRules(this.editor), c, d); g = b.getDefinition(); b = {}; d = g.attributes; b[g.element] = g = {
                            styles: g.styles, requiredStyles: g.styles &&
                                CKEDITOR.tools.objectKeys(g.styles)
                        }; d && (d = E(d), g.classes = d["class"] ? d["class"].split(/\s+/) : null, g.requiredClasses = g.classes, delete d["class"], g.attributes = d, g.requiredAttributes = d && CKEDITOR.tools.objectKeys(d))
                    } else if (CKEDITOR.tools.isArray(b)) { for (g = 0; g < b.length; ++g)h = this.allow(b[g], c, d); return h } a(this, b, c, this.allowedContent, this._.allowedRules); return !0
                }, applyTo: function (a, b, c, f) {
                    if (this.disabled) return !1; var d = this, g = [], h = this.editor && this.editor.config.protectedSource, e, m = !1, l = {
                        doFilter: !c,
                        doTransform: !0, doCallbacks: !0, toHtml: b
                    }; a.forEach(function (a) {
                        if (a.type == CKEDITOR.NODE_ELEMENT) { if ("off" == a.attributes["data-cke-filter"]) return !1; if (!b || "span" != a.name || !~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-")) if (e = u(d, a, g, l), e & 1) m = !0; else if (e & 2) return !1 } else if (a.type == CKEDITOR.NODE_COMMENT && a.value.match(/^\{cke_protected\}(?!\{C\})/)) {
                            var c; a: {
                                var f = decodeURIComponent(a.value.replace(/^\{cke_protected\}/, "")); c = []; var k, n, p; if (h) for (n = 0; n < h.length; ++n)if ((p = f.match(h[n])) &&
                                    p[0].length == f.length) { c = !0; break a } f = CKEDITOR.htmlParser.fragment.fromHtml(f); 1 == f.children.length && (k = f.children[0]).type == CKEDITOR.NODE_ELEMENT && u(d, k, c, l); c = !c.length
                            } c || g.push(a)
                        }
                    }, null, !0); g.length && (m = !0); var k; a = []; f = H[f || (this.editor ? this.editor.enterMode : CKEDITOR.ENTER_P)]; for (var n; c = g.pop();)c.type == CKEDITOR.NODE_ELEMENT ? t(c, f, a) : c.remove(); for (; k = a.pop();)if (c = k.el, c.parent) switch (n = F[c.parent.name] || F.span, k.check) {
                        case "it": F.$removeEmpty[c.name] && !c.children.length ? t(c, f, a) : p(c) ||
                            t(c, f, a); break; case "el-up": c.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || n[c.name] || t(c, f, a); break; case "parent-down": c.parent.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT || n[c.name] || t(c.parent, f, a)
                    }return m
                }, checkFeature: function (a) { if (this.disabled || !a) return !0; a.toFeature && (a = a.toFeature(this.editor)); return !a.requiredContent || this.check(a.requiredContent) }, disable: function () { this.disabled = !0 }, disallow: function (b) {
                    if (!l(this, b, !0)) return !1; "string" == typeof b && (b = f(b)); a(this, b, null, this.disallowedContent,
                        this._.disallowedRules); return !0
                }, addContentForms: function (a) { if (!this.disabled && a) { var b, c, f = [], d; for (b = 0; b < a.length && !d; ++b)c = a[b], ("string" == typeof c || c instanceof CKEDITOR.style) && this.check(c) && (d = c); if (d) { for (b = 0; b < a.length; ++b)f.push(z(a[b], d)); this.addTransformations(f) } } }, addElementCallback: function (a) { this.elementCallbacks || (this.elementCallbacks = []); this.elementCallbacks.push(a) }, addFeature: function (a) {
                    if (this.disabled || !a) return !0; a.toFeature && (a = a.toFeature(this.editor)); this.allow(a.allowedContent,
                        a.name); this.addTransformations(a.contentTransformations); this.addContentForms(a.contentForms); return a.requiredContent && (this.customConfig || this.disallowedContent.length) ? this.check(a.requiredContent) : !0
                }, addTransformations: function (a) {
                    var b, c; if (!this.disabled && a) {
                        var f = this._.transformations, d; for (d = 0; d < a.length; ++d) {
                            b = a[d]; var g = void 0, h = void 0, e = void 0, m = void 0, l = void 0, k = void 0; c = []; for (h = 0; h < b.length; ++h)e = b[h], "string" == typeof e ? (e = e.split(/\s*:\s*/), m = e[0], l = null, k = e[1]) : (m = e.check, l = e.left,
                                k = e.right), g || (g = e, g = g.element ? g.element : m ? m.match(/^([a-z0-9]+)/i)[0] : g.left.getDefinition().element), l instanceof CKEDITOR.style && (l = A(l)), c.push({ check: m == g ? null : m, left: l, right: "string" == typeof k ? G(k) : k }); b = g; f[b] || (f[b] = []); f[b].push(c)
                        }
                    }
                }, check: function (a, b, c) {
                    if (this.disabled) return !0; if (CKEDITOR.tools.isArray(a)) { for (var d = a.length; d--;)if (this.check(a[d], b, c)) return !0; return !1 } var g, h; if ("string" == typeof a) {
                        h = a + "\x3c" + (!1 === b ? "0" : "1") + (c ? "1" : "0") + "\x3e"; if (h in this._.cachedChecks) return this._.cachedChecks[h];
                        g = f(a).$1; var e = g.styles, d = g.classes; g.name = g.elements; g.classes = d = d ? d.split(/\s*,\s*/) : []; g.styles = m(e); g.attributes = m(g.attributes); g.children = []; d.length && (g.attributes["class"] = d.join(" ")); e && (g.attributes.style = CKEDITOR.tools.writeCssText(g.styles))
                    } else g = a.getDefinition(), e = g.styles, d = g.attributes || {}, e && !CKEDITOR.tools.isEmpty(e) ? (e = E(e), d.style = CKEDITOR.tools.writeCssText(e, !0)) : e = {}, g = { name: g.element, attributes: d, classes: d["class"] ? d["class"].split(/\s+/) : [], styles: e, children: [] }; var e =
                        CKEDITOR.tools.clone(g), l = [], k; if (!1 !== b && (k = this._.transformations[g.name])) { for (d = 0; d < k.length; ++d)x(this, g, k[d]); y(g) } u(this, e, l, { doFilter: !0, doTransform: !1 !== b, skipRequired: !c, skipFinalValidation: !c }); 0 < l.length ? c = !1 : ((b = g.attributes["class"]) && (g.attributes["class"] = g.attributes["class"].split(" ").sort().join(" ")), c = CKEDITOR.tools.objectCompare(g.attributes, e.attributes, !0), b && (g.attributes["class"] = b)); "string" == typeof a && (this._.cachedChecks[h] = c); return c
                }, getAllowedEnterMode: function () {
                    var a =
                        ["p", "div", "br"], b = { p: CKEDITOR.ENTER_P, div: CKEDITOR.ENTER_DIV, br: CKEDITOR.ENTER_BR }; return function (c, f) { var d = a.slice(), g; if (this.check(H[c])) return c; for (f || (d = d.reverse()); g = d.pop();)if (this.check(g)) return b[g]; return CKEDITOR.ENTER_BR }
                }(), clone: function () {
                    var a = new CKEDITOR.filter, b = CKEDITOR.tools.clone; a.allowedContent = b(this.allowedContent); a._.allowedRules = b(this._.allowedRules); a.disallowedContent = b(this.disallowedContent); a._.disallowedRules = b(this._.disallowedRules); a._.transformations =
                        b(this._.transformations); a.disabled = this.disabled; a.editor = this.editor; return a
                }, destroy: function () { delete CKEDITOR.filter.instances[this.id]; delete this._; delete this.allowedContent; delete this.disallowedContent }
            }; var K = { styles: 1, attributes: 1, classes: 1 }, J = { styles: "requiredStyles", attributes: "requiredAttributes", classes: "requiredClasses" }, D = /^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i, R = { styles: /{([^}]+)}/, attrs: /\[([^\]]+)\]/, classes: /\(([^\)]+)\)/ },
                N = /^cke:(object|embed|param)$/, S = /^(object|embed|param)$/, L; L = CKEDITOR.filter.transformationsTools = {
                    sizeToStyle: function (a) { this.lengthToStyle(a, "width"); this.lengthToStyle(a, "height") }, sizeToAttribute: function (a) { this.lengthToAttribute(a, "width"); this.lengthToAttribute(a, "height") }, lengthToStyle: function (a, b, c) { c = c || b; if (!(c in a.styles)) { var f = a.attributes[b]; f && (/^\d+$/.test(f) && (f += "px"), a.styles[c] = f) } delete a.attributes[b] }, lengthToAttribute: function (a, b, c) {
                        c = c || b; if (!(c in a.attributes)) {
                            var f =
                                a.styles[b], d = f && f.match(/^(\d+)(?:\.\d*)?px$/); d ? a.attributes[c] = d[1] : "cke-test" == f && (a.attributes[c] = "cke-test")
                        } delete a.styles[b]
                    }, alignmentToStyle: function (a) { if (!("float" in a.styles)) { var b = a.attributes.align; if ("left" == b || "right" == b) a.styles["float"] = b } delete a.attributes.align }, alignmentToAttribute: function (a) { if (!("align" in a.attributes)) { var b = a.styles["float"]; if ("left" == b || "right" == b) a.attributes.align = b } delete a.styles["float"] }, splitBorderShorthand: function (a) {
                        if (a.styles.border) {
                            var b =
                                CKEDITOR.tools.style.parse.border(a.styles.border); b.color && (a.styles["border-color"] = b.color); b.style && (a.styles["border-style"] = b.style); b.width && (a.styles["border-width"] = b.width); delete a.styles.border
                        }
                    }, listTypeToStyle: function (a) {
                        if (a.attributes.type) switch (a.attributes.type) {
                            case "a": a.styles["list-style-type"] = "lower-alpha"; break; case "A": a.styles["list-style-type"] = "upper-alpha"; break; case "i": a.styles["list-style-type"] = "lower-roman"; break; case "I": a.styles["list-style-type"] = "upper-roman";
                                break; case "1": a.styles["list-style-type"] = "decimal"; break; default: a.styles["list-style-type"] = a.attributes.type
                        }
                    }, splitMarginShorthand: function (a) { function b(f) { a.styles["margin-top"] = c[f[0]]; a.styles["margin-right"] = c[f[1]]; a.styles["margin-bottom"] = c[f[2]]; a.styles["margin-left"] = c[f[3]] } if (a.styles.margin) { var c = a.styles.margin.match(/(\-?[\.\d]+\w+)/g) || ["0px"]; switch (c.length) { case 1: b([0, 0, 0, 0]); break; case 2: b([0, 1, 0, 1]); break; case 3: b([0, 1, 2, 1]); break; case 4: b([0, 1, 2, 3]) }delete a.styles.margin } },
                    matchesStyle: C, transform: function (a, b) { if ("string" == typeof b) a.name = b; else { var c = b.getDefinition(), f = c.styles, d = c.attributes, g, h, e, m; a.name = c.element; for (g in d) if ("class" == g) for (c = a.classes.join("|"), e = d[g].split(/\s+/); m = e.pop();)-1 == c.indexOf(m) && a.classes.push(m); else a.attributes[g] = d[g]; for (h in f) a.styles[h] = f[h] } }
                }
        }(), function () {
            CKEDITOR.focusManager = function (a) { if (a.focusManager) return a.focusManager; this.hasFocus = !1; this.currentActive = null; this._ = { editor: a }; return this }; CKEDITOR.focusManager._ =
                { blurDelay: 200 }; CKEDITOR.focusManager.prototype = {
                    focus: function (a) { this._.timer && clearTimeout(this._.timer); a && (this.currentActive = a); this.hasFocus || this._.locked || ((a = CKEDITOR.currentInstance) && a.focusManager.blur(1), this.hasFocus = !0, (a = this._.editor.container) && a.addClass("cke_focus"), this._.editor.fire("focus")) }, lock: function () { this._.locked = 1 }, unlock: function () { delete this._.locked }, blur: function (a) {
                        function e() {
                            if (this.hasFocus) {
                                this.hasFocus = !1; var a = this._.editor.container; a && a.removeClass("cke_focus");
                                this._.editor.fire("blur")
                            }
                        } if (!this._.locked) { this._.timer && clearTimeout(this._.timer); var b = CKEDITOR.focusManager._.blurDelay; a || !b ? e.call(this) : this._.timer = CKEDITOR.tools.setTimeout(function () { delete this._.timer; e.call(this) }, b, this) }
                    }, add: function (a, e) {
                        var b = a.getCustomData("focusmanager"); if (!b || b != this) {
                            b && b.remove(a); var b = "focus", c = "blur"; e && (CKEDITOR.env.ie ? (b = "focusin", c = "focusout") : CKEDITOR.event.useCapture = 1); var d = { blur: function () { a.equals(this.currentActive) && this.blur() }, focus: function () { this.focus(a) } };
                            a.on(b, d.focus, this); a.on(c, d.blur, this); e && (CKEDITOR.event.useCapture = 0); a.setCustomData("focusmanager", this); a.setCustomData("focusmanager_handlers", d)
                        }
                    }, remove: function (a) { a.removeCustomData("focusmanager"); var e = a.removeCustomData("focusmanager_handlers"); a.removeListener("blur", e.blur); a.removeListener("focus", e.focus) }
                }
        }(), CKEDITOR.keystrokeHandler = function (a) { if (a.keystrokeHandler) return a.keystrokeHandler; this.keystrokes = {}; this.blockedKeystrokes = {}; this._ = { editor: a }; return this }, function () {
            var a,
            e = function (b) { b = b.data; var d = b.getKeystroke(), e = this.keystrokes[d], k = this._.editor; a = !1 === k.fire("key", { keyCode: d, domEvent: b }); a || (e && (a = !1 !== k.execCommand(e, { from: "keystrokeHandler" })), a || (a = !!this.blockedKeystrokes[d])); a && b.preventDefault(!0); return !a }, b = function (b) { a && (a = !1, b.data.preventDefault(!0)) }; CKEDITOR.keystrokeHandler.prototype = { attach: function (a) { a.on("keydown", e, this); if (CKEDITOR.env.gecko && CKEDITOR.env.mac) a.on("keypress", b, this) } }
        }(), function () {
            CKEDITOR.lang = {
                languages: {
                    af: 1, ar: 1,
                    az: 1, bg: 1, bn: 1, bs: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, en: 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, "fr-ca": 1, fr: 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, is: 1, it: 1, ja: 1, ka: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, ms: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, "pt-br": 1, pt: 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, "sr-latn": 1, sr: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, "zh-cn": 1, zh: 1
                }, rtl: { ar: 1, fa: 1, he: 1, ku: 1, ug: 1 }, load: function (a, e, b) {
                    a && CKEDITOR.lang.languages[a] || (a = this.detect(e, a)); var c = this;
                    e = function () { c[a].dir = c.rtl[a] ? "rtl" : "ltr"; b(a, c[a]) }; this[a] ? e() : CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/" + a + ".js"), e, this)
                }, detect: function (a, e) { var b = this.languages; e = e || navigator.userLanguage || navigator.language || a; var c = e.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/), d = c[1], c = c[2]; b[d + "-" + c] ? d = d + "-" + c : b[d] || (d = null); CKEDITOR.lang.detect = d ? function () { return d } : function (a) { return a }; return d || a }
            }
        }(), CKEDITOR.scriptLoader = function () {
            var a = {}, e = {}; return {
                load: function (b, c, d, l) {
                    var k = "string" ==
                        typeof b; k && (b = [b]); d || (d = CKEDITOR); var g = b.length, h = [], m = [], f = function (a) { c && (k ? c.call(d, a) : c.call(d, h, m)) }; if (0 === g) f(!0); else {
                            var n = function (a, b) { (b ? h : m).push(a); 0 >= --g && (l && CKEDITOR.document.getDocumentElement().removeStyle("cursor"), f(b)) }, r = function (b, c) { a[b] = 1; var f = e[b]; delete e[b]; for (var d = 0; d < f.length; d++)f[d](b, c) }, u = function (b) {
                                if (a[b]) n(b, !0); else {
                                    var f = e[b] || (e[b] = []); f.push(n); if (!(1 < f.length)) {
                                        var d = new CKEDITOR.dom.element("script"); d.setAttributes({ type: "text/javascript", src: b });
                                        c && (CKEDITOR.env.ie && (8 >= CKEDITOR.env.version || CKEDITOR.env.ie9Compat) ? d.$.onreadystatechange = function () { if ("loaded" == d.$.readyState || "complete" == d.$.readyState) d.$.onreadystatechange = null, r(b, !0) } : (d.$.onload = function () { setTimeout(function () { r(b, !0) }, 0) }, d.$.onerror = function () { r(b, !1) })); d.appendTo(CKEDITOR.document.getHead())
                                    }
                                }
                            }; l && CKEDITOR.document.getDocumentElement().setStyle("cursor", "wait"); for (var v = 0; v < g; v++)u(b[v])
                        }
                }, queue: function () {
                    function a() {
                        var b; (b = c[0]) && this.load(b.scriptUrl, b.callback,
                            CKEDITOR, 0)
                    } var c = []; return function (d, e) { var k = this; c.push({ scriptUrl: d, callback: function () { e && e.apply(this, arguments); c.shift(); a.call(k) } }); 1 == c.length && a.call(this) }
                }()
            }
        }(), CKEDITOR.resourceManager = function (a, e) { this.basePath = a; this.fileName = e; this.registered = {}; this.loaded = {}; this.externals = {}; this._ = { waitingList: {} } }, CKEDITOR.resourceManager.prototype = {
            add: function (a, e) {
                if (this.registered[a]) throw Error('[CKEDITOR.resourceManager.add] The resource name "' + a + '" is already registered.'); var b =
                    this.registered[a] = e || {}; b.name = a; b.path = this.getPath(a); CKEDITOR.fire(a + CKEDITOR.tools.capitalize(this.fileName) + "Ready", b); return this.get(a)
            }, get: function (a) { return this.registered[a] || null }, getPath: function (a) { var e = this.externals[a]; return CKEDITOR.getUrl(e && e.dir || this.basePath + a + "/") }, getFilePath: function (a) { var e = this.externals[a]; return CKEDITOR.getUrl(this.getPath(a) + (e ? e.file : this.fileName + ".js")) }, addExternal: function (a, e, b) {
                a = a.split(","); for (var c = 0; c < a.length; c++) {
                    var d = a[c]; b || (e =
                        e.replace(/[^\/]+$/, function (a) { b = a; return "" })); this.externals[d] = { dir: e, file: b || this.fileName + ".js" }
                }
            }, load: function (a, e, b) {
                CKEDITOR.tools.isArray(a) || (a = a ? [a] : []); for (var c = this.loaded, d = this.registered, l = [], k = {}, g = {}, h = 0; h < a.length; h++) { var m = a[h]; if (m) if (c[m] || d[m]) g[m] = this.get(m); else { var f = this.getFilePath(m); l.push(f); f in k || (k[f] = []); k[f].push(m) } } CKEDITOR.scriptLoader.load(l, function (a, f) {
                    if (f.length) throw Error('[CKEDITOR.resourceManager.load] Resource name "' + k[f[0]].join(",") + '" was not found at "' +
                        f[0] + '".'); for (var d = 0; d < a.length; d++)for (var h = k[a[d]], m = 0; m < h.length; m++) { var l = h[m]; g[l] = this.get(l); c[l] = 1 } e.call(b, g)
                }, this)
            }
        }, CKEDITOR.plugins = new CKEDITOR.resourceManager("plugins/", "plugin"), CKEDITOR.plugins.load = CKEDITOR.tools.override(CKEDITOR.plugins.load, function (a) {
            var e = {}; return function (b, c, d) {
                var l = {}, k = function (b) {
                    a.call(this, b, function (a) {
                        CKEDITOR.tools.extend(l, a); var b = [], f; for (f in a) {
                            var g = a[f], r = g && g.requires; if (!e[f]) {
                                if (g.icons) for (var u = g.icons.split(","), v = u.length; v--;)CKEDITOR.skin.addIcon(u[v],
                                    g.path + "icons/" + (CKEDITOR.env.hidpi && g.hidpi ? "hidpi/" : "") + u[v] + ".png"); e[f] = 1
                            } if (r) for (r.split && (r = r.split(",")), g = 0; g < r.length; g++)l[r[g]] || b.push(r[g])
                        } if (b.length) k.call(this, b); else { for (f in l) g = l[f], g.onLoad && !g.onLoad._called && (!1 === g.onLoad() && delete l[f], g.onLoad._called = 1); c && c.call(d || window, l) }
                    }, this)
                }; k.call(this, b)
            }
        }), CKEDITOR.plugins.setLang = function (a, e, b) {
            var c = this.get(a); a = c.langEntries || (c.langEntries = {}); c = c.lang || (c.lang = []); c.split && (c = c.split(",")); -1 == CKEDITOR.tools.indexOf(c,
                e) && c.push(e); a[e] = b
        }, CKEDITOR.ui = function (a) { if (a.ui) return a.ui; this.items = {}; this.instances = {}; this.editor = a; this._ = { handlers: {} }; return this }, CKEDITOR.ui.prototype = {
            add: function (a, e, b) { b.name = a.toLowerCase(); var c = this.items[a] = { type: e, command: b.command || null, args: Array.prototype.slice.call(arguments, 2) }; CKEDITOR.tools.extend(c, b) }, get: function (a) { return this.instances[a] }, create: function (a) {
                var e = this.items[a], b = e && this._.handlers[e.type], c = e && e.command && this.editor.getCommand(e.command), b = b &&
                    b.create.apply(this, e.args); this.instances[a] = b; c && c.uiItems.push(b); b && !b.type && (b.type = e.type); return b
            }, addHandler: function (a, e) { this._.handlers[a] = e }, space: function (a) { return CKEDITOR.document.getById(this.spaceId(a)) }, spaceId: function (a) { return this.editor.id + "_" + a }
        }, CKEDITOR.event.implementOn(CKEDITOR.ui), function () {
            function a(a, f, d) {
                CKEDITOR.event.call(this); a = a && CKEDITOR.tools.clone(a); if (void 0 !== f) {
                    if (!(f instanceof CKEDITOR.dom.element)) throw Error("Expect element of type CKEDITOR.dom.element.");
                    if (!d) throw Error("One of the element modes must be specified."); if (CKEDITOR.env.ie && CKEDITOR.env.quirks && d == CKEDITOR.ELEMENT_MODE_INLINE) throw Error("Inline element mode is not supported on IE quirks."); if (!b(f, d)) throw Error('The specified element mode is not supported on element: "' + f.getName() + '".'); this.element = f; this.elementMode = d; this.name = this.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO && (f.getId() || f.getNameAtt())
                } else this.elementMode = CKEDITOR.ELEMENT_MODE_NONE; this._ = {}; this.commands = {};
                this.templates = {}; this.name = this.name || e(); this.id = CKEDITOR.tools.getNextId(); this.status = "unloaded"; this.config = CKEDITOR.tools.prototypedCopy(CKEDITOR.config); this.ui = new CKEDITOR.ui(this); this.focusManager = new CKEDITOR.focusManager(this); this.keystrokeHandler = new CKEDITOR.keystrokeHandler(this); this.on("readOnly", c); this.on("selectionChange", function (a) { l(this, a.data.path) }); this.on("activeFilterChange", function () { l(this, this.elementPath(), !0) }); this.on("mode", c); this.on("instanceReady", function () {
                    if (this.config.startupFocus) {
                        if ("end" ===
                            this.config.startupFocus) { var a = this.createRange(); a.selectNodeContents(this.editable()); a.shrink(CKEDITOR.SHRINK_ELEMENT, !0); a.collapse(); this.getSelection().selectRanges([a]) } this.focus()
                    }
                }); CKEDITOR.fire("instanceCreated", null, this); CKEDITOR.add(this); CKEDITOR.tools.setTimeout(function () { "destroyed" !== this.status ? g(this, a) : CKEDITOR.warn("editor-incorrect-destroy") }, 0, this)
            } function e() { do var a = "editor" + ++v; while (CKEDITOR.instances[a]); return a } function b(a, b) {
                return b == CKEDITOR.ELEMENT_MODE_INLINE ?
                    a.is(CKEDITOR.dtd.$editable) || a.is("textarea") : b == CKEDITOR.ELEMENT_MODE_REPLACE ? !a.is(CKEDITOR.dtd.$nonBodyContent) : 1
            } function c() { var a = this.commands, b; for (b in a) d(this, a[b]) } function d(a, b) { b[b.startDisabled ? "disable" : a.readOnly && !b.readOnly ? "disable" : b.modes[a.mode] ? "enable" : "disable"]() } function l(a, b, c) { if (b) { var f, d, g = a.commands; for (d in g) f = g[d], (c || f.contextSensitive) && f.refresh(a, b) } } function k(a) {
                var b = a.config.customConfig; if (!b) return !1; var b = CKEDITOR.getUrl(b), c = y[b] || (y[b] = {}); c.fn ?
                    (c.fn.call(a, a.config), CKEDITOR.getUrl(a.config.customConfig) != b && k(a) || a.fireOnce("customConfigLoaded")) : CKEDITOR.scriptLoader.queue(b, function () { c.fn = CKEDITOR.editorConfig ? CKEDITOR.editorConfig : function () { }; k(a) }); return !0
            } function g(a, b) {
                a.on("customConfigLoaded", function () {
                    if (b) { if (b.on) for (var c in b.on) a.on(c, b.on[c]); CKEDITOR.tools.extend(a.config, b, !0); delete a.config.on } c = a.config; a.readOnly = c.readOnly ? !0 : a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.is("textarea") ? a.element.hasAttribute("disabled") ||
                        a.element.hasAttribute("readonly") : a.element.isReadOnly() : a.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.element.hasAttribute("disabled") || a.element.hasAttribute("readonly") : !1; a.blockless = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? !(a.element.is("textarea") || CKEDITOR.dtd[a.element.getName()].p) : !1; a.tabIndex = c.tabIndex || a.element && a.element.getAttribute("tabindex") || 0; a.activeEnterMode = a.enterMode = a.blockless ? CKEDITOR.ENTER_BR : c.enterMode; a.activeShiftEnterMode = a.shiftEnterMode = a.blockless ? CKEDITOR.ENTER_BR :
                            c.shiftEnterMode; c.skin && (CKEDITOR.skinName = c.skin); a.fireOnce("configLoaded"); a.dataProcessor = new CKEDITOR.htmlDataProcessor(a); a.filter = a.activeFilter = new CKEDITOR.filter(a); h(a)
                }); b && null != b.customConfig && (a.config.customConfig = b.customConfig); k(a) || a.fireOnce("customConfigLoaded")
            } function h(a) { CKEDITOR.skin.loadPart("editor", function () { m(a) }) } function m(a) {
                CKEDITOR.lang.load(a.config.language, a.config.defaultLanguage, function (b, c) {
                    var d = a.config.title; a.langCode = b; a.lang = CKEDITOR.tools.prototypedCopy(c);
                    a.title = "string" == typeof d || !1 === d ? d : [a.lang.editor, a.name].join(", "); a.config.contentsLangDirection || (a.config.contentsLangDirection = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.element.getDirection(1) : a.lang.dir); a.fire("langLoaded"); f(a)
                })
            } function f(a) { a.getStylesSet(function (b) { a.once("loaded", function () { a.fire("stylesSet", { styles: b }) }, null, null, 1); n(a) }) } function n(a) {
                function b(a) { if (!a) return ""; CKEDITOR.tools.isArray(a) && (a = a.join(",")); return a.replace(/\s/g, "") } var c = a.config, f = b(c.plugins),
                    d = b(c.extraPlugins), g = b(c.removePlugins); if (d) var h = new RegExp("(?:^|,)(?:" + d.replace(/,/g, "|") + ")(?\x3d,|$)", "g"), f = f.replace(h, ""), f = f + ("," + d); if (g) var e = new RegExp("(?:^|,)(?:" + g.replace(/,/g, "|") + ")(?\x3d,|$)", "g"), f = f.replace(e, ""); CKEDITOR.env.air && (f += ",adobeair"); CKEDITOR.plugins.load(f.split(","), function (b) {
                        var f = [], d = [], g = []; a.plugins = CKEDITOR.tools.extend({}, a.plugins, b); for (var h in b) {
                            var m = b[h], l = m.lang, k = null, n = m.requires, t; CKEDITOR.tools.isArray(n) && (n = n.join(",")); if (n && (t = n.match(e))) for (; n =
                                t.pop();)CKEDITOR.error("editor-plugin-required", { plugin: n.replace(",", ""), requiredBy: h }); l && !a.lang[h] && (l.split && (l = l.split(",")), 0 <= CKEDITOR.tools.indexOf(l, a.langCode) ? k = a.langCode : (k = a.langCode.replace(/-.*/, ""), k = k != a.langCode && 0 <= CKEDITOR.tools.indexOf(l, k) ? k : 0 <= CKEDITOR.tools.indexOf(l, "en") ? "en" : l[0]), m.langEntries && m.langEntries[k] ? (a.lang[h] = m.langEntries[k], k = null) : g.push(CKEDITOR.getUrl(m.path + "lang/" + k + ".js"))); d.push(k); f.push(m)
                        } CKEDITOR.scriptLoader.load(g, function () {
                            for (var b = ["beforeInit",
                                "init", "afterInit"], g = 0; g < b.length; g++)for (var h = 0; h < f.length; h++) { var e = f[h]; 0 === g && d[h] && e.lang && e.langEntries && (a.lang[e.name] = e.langEntries[d[h]]); if (e[b[g]]) e[b[g]](a) } a.fireOnce("pluginsLoaded"); c.keystrokes && a.setKeystroke(a.config.keystrokes); for (h = 0; h < a.config.blockedKeystrokes.length; h++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[h]] = 1; a.status = "loaded"; a.fireOnce("loaded"); CKEDITOR.fire("instanceLoaded", null, a)
                        })
                    })
            } function r() {
                var a = this.element; if (a && this.elementMode !=
                    CKEDITOR.ELEMENT_MODE_APPENDTO) { var b = this.getData(); this.config.htmlEncodeOutput && (b = CKEDITOR.tools.htmlEncode(b)); a.is("textarea") ? a.setValue(b) : a.setHtml(b); return !0 } return !1
            } function u(a, b) {
                function c(a) { var b = a.startContainer, f = a.endContainer; return b.is && (b.is("tr") || b.is("td") && b.equals(f) && a.endOffset === b.getChildCount()) ? !0 : !1 } function f(a) { var b = a.startContainer; return b.is("tr") ? a.cloneContents() : b.clone(!0) } for (var d = new CKEDITOR.dom.documentFragment, g, h, e, m = 0; m < a.length; m++) {
                    var l = a[m],
                    k = l.startContainer.getAscendant("tr", !0); c(l) ? (g || (g = k.getAscendant("table").clone(), g.append(k.getAscendant({ thead: 1, tbody: 1, tfoot: 1 }).clone()), d.append(g), g = g.findOne("thead, tbody, tfoot")), h && h.equals(k) || (h = k, e = k.clone(), g.append(e)), e.append(f(l))) : d.append(l.cloneContents())
                } return g ? d : b.getHtmlFromRange(a[0])
            } a.prototype = CKEDITOR.editor.prototype; CKEDITOR.editor = a; var v = 0, y = {}; CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
                plugins: {
                    detectConflict: function (a, b) {
                        for (var c = 0; c < b.length; c++) {
                            var f =
                                b[c]; if (this[f]) return CKEDITOR.warn("editor-plugin-conflict", { plugin: a, replacedWith: f }), !0
                        } return !1
                    }
                }, addCommand: function (a, b) { b.name = a.toLowerCase(); var c = b instanceof CKEDITOR.command ? b : new CKEDITOR.command(this, b); this.mode && d(this, c); return this.commands[a] = c }, _attachToForm: function () {
                    function a(b) { c.updateElement(); c._.required && !f.getValue() && !1 === c.fire("required") && b.data.preventDefault() } function b(a) { return !!(a && a.call && a.apply) } var c = this, f = c.element, d = new CKEDITOR.dom.element(f.$.form);
                    f.is("textarea") && d && (d.on("submit", a), b(d.$.submit) && (d.$.submit = CKEDITOR.tools.override(d.$.submit, function (b) { return function () { a(); b.apply ? b.apply(this) : b() } })), c.on("destroy", function () { d.removeListener("submit", a) }))
                }, destroy: function (a) {
                    this.fire("beforeDestroy"); !a && r.call(this); this.editable(null); this.filter && (this.filter.destroy(), delete this.filter); delete this.activeFilter; this.status = "destroyed"; this.fire("destroy"); this.removeAllListeners(); CKEDITOR.remove(this); CKEDITOR.fire("instanceDestroyed",
                        null, this)
                }, elementPath: function (a) { if (!a) { a = this.getSelection(); if (!a) return null; a = a.getStartElement() } return a ? new CKEDITOR.dom.elementPath(a, this.editable()) : null }, createRange: function () { var a = this.editable(); return a ? new CKEDITOR.dom.range(a) : null }, execCommand: function (a, b) {
                    var c = this.getCommand(a), f = { name: a, commandData: b || {}, command: c }; return c && c.state != CKEDITOR.TRISTATE_DISABLED && !1 !== this.fire("beforeCommandExec", f) && (f.returnValue = c.exec(f.commandData), !c.async && !1 !== this.fire("afterCommandExec",
                        f)) ? f.returnValue : !1
                }, getCommand: function (a) { return this.commands[a] }, getData: function (a) { !a && this.fire("beforeGetData"); var b = this._.data; "string" != typeof b && (b = (b = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? b.is("textarea") ? b.getValue() : b.getHtml() : ""); b = { dataValue: b }; !a && this.fire("getData", b); return b.dataValue }, getSnapshot: function () {
                    var a = this.fire("getSnapshot"); "string" != typeof a && (a = (a = this.element) && this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE ? a.is("textarea") ? a.getValue() :
                        a.getHtml() : ""); return a
                }, loadSnapshot: function (a) { this.fire("loadSnapshot", a) }, setData: function (a, b, c) { var f = !0, d = b; b && "object" == typeof b && (c = b.internal, d = b.callback, f = !b.noSnapshot); !c && f && this.fire("saveSnapshot"); if (d || !c) this.once("dataReady", function (a) { !c && f && this.fire("saveSnapshot"); d && d.call(a.editor) }); a = { dataValue: a }; !c && this.fire("setData", a); this._.data = a.dataValue; !c && this.fire("afterSetData", a) }, setReadOnly: function (a) {
                    a = null == a || a; this.readOnly != a && (this.readOnly = a, this.keystrokeHandler.blockedKeystrokes[8] =
                        +a, this.editable().setReadOnly(a), this.fire("readOnly"))
                }, insertHtml: function (a, b, c) { this.fire("insertHtml", { dataValue: a, mode: b, range: c }) }, insertText: function (a) { this.fire("insertText", a) }, insertElement: function (a) { this.fire("insertElement", a) }, getSelectedHtml: function (a) { var b = this.editable(), c = this.getSelection(), c = c && c.getRanges(); if (!b || !c || 0 === c.length) return null; b = u(c, b); return a ? b.getHtml() : b }, extractSelectedHtml: function (a, b) {
                    var c = this.editable(), f = this.getSelection().getRanges(), d = new CKEDITOR.dom.documentFragment,
                    g; if (!c || 0 === f.length) return null; for (g = 0; g < f.length; g++)d.append(c.extractHtmlFromRange(f[g], b)); b || this.getSelection().selectRanges([f[0]]); return a ? d.getHtml() : d
                }, focus: function () { this.fire("beforeFocus") }, checkDirty: function () { return "ready" == this.status && this._.previousValue !== this.getSnapshot() }, resetDirty: function () { this._.previousValue = this.getSnapshot() }, updateElement: function () { return r.call(this) }, setKeystroke: function () {
                    for (var a = this.keystrokeHandler.keystrokes, b = CKEDITOR.tools.isArray(arguments[0]) ?
                        arguments[0] : [[].slice.call(arguments, 0)], c, f, d = b.length; d--;)c = b[d], f = 0, CKEDITOR.tools.isArray(c) && (f = c[1], c = c[0]), f ? a[c] = f : delete a[c]
                }, getCommandKeystroke: function (a) { if (a = "string" === typeof a ? this.getCommand(a) : a) { var b = CKEDITOR.tools.object.findKey(this.commands, a), c = this.keystrokeHandler.keystrokes, f; if (a.fakeKeystroke) return a.fakeKeystroke; for (f in c) if (c.hasOwnProperty(f) && c[f] == b) return f } return null }, addFeature: function (a) { return this.filter.addFeature(a) }, setActiveFilter: function (a) {
                    a ||
                    (a = this.filter); this.activeFilter !== a && (this.activeFilter = a, this.fire("activeFilterChange"), a === this.filter ? this.setActiveEnterMode(null, null) : this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode), a.getAllowedEnterMode(this.shiftEnterMode, !0)))
                }, setActiveEnterMode: function (a, b) {
                    a = a ? this.blockless ? CKEDITOR.ENTER_BR : a : this.enterMode; b = b ? this.blockless ? CKEDITOR.ENTER_BR : b : this.shiftEnterMode; if (this.activeEnterMode != a || this.activeShiftEnterMode != b) this.activeEnterMode = a, this.activeShiftEnterMode =
                        b, this.fire("activeEnterModeChange")
                }, showNotification: function (a) { alert(a) }
            })
        }(), CKEDITOR.ELEMENT_MODE_NONE = 0, CKEDITOR.ELEMENT_MODE_REPLACE = 1, CKEDITOR.ELEMENT_MODE_APPENDTO = 2, CKEDITOR.ELEMENT_MODE_INLINE = 3, CKEDITOR.htmlParser = function () { this._ = { htmlPartsRegex: /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g } }, function () {
            var a = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
            e = { checked: 1, compact: 1, declare: 1, defer: 1, disabled: 1, ismap: 1, multiple: 1, nohref: 1, noresize: 1, noshade: 1, nowrap: 1, readonly: 1, selected: 1 }; CKEDITOR.htmlParser.prototype = {
                onTagOpen: function () { }, onTagClose: function () { }, onText: function () { }, onCDATA: function () { }, onComment: function () { }, parse: function (b) {
                    for (var c, d, l = 0, k; c = this._.htmlPartsRegex.exec(b);) {
                        d = c.index; if (d > l) if (l = b.substring(l, d), k) k.push(l); else this.onText(l); l = this._.htmlPartsRegex.lastIndex; if (d = c[1]) if (d = d.toLowerCase(), k && CKEDITOR.dtd.$cdata[d] &&
                            (this.onCDATA(k.join("")), k = null), !k) { this.onTagClose(d); continue } if (k) k.push(c[0]); else if (d = c[3]) { if (d = d.toLowerCase(), !/="/.test(d)) { var g = {}, h, m = c[4]; c = !!c[5]; if (m) for (; h = a.exec(m);) { var f = h[1].toLowerCase(); h = h[2] || h[3] || h[4] || ""; g[f] = !h && e[f] ? f : CKEDITOR.tools.htmlDecodeAttr(h) } this.onTagOpen(d, g, c); !k && CKEDITOR.dtd.$cdata[d] && (k = []) } } else if (d = c[2]) this.onComment(d)
                    } if (b.length > l) this.onText(b.substring(l, b.length))
                }
            }
        }(), CKEDITOR.htmlParser.basicWriter = CKEDITOR.tools.createClass({
            $: function () {
                this._ =
                { output: [] }
            }, proto: {
                openTag: function (a) { this._.output.push("\x3c", a) }, openTagClose: function (a, e) { e ? this._.output.push(" /\x3e") : this._.output.push("\x3e") }, attribute: function (a, e) { "string" == typeof e && (e = CKEDITOR.tools.htmlEncodeAttr(e)); this._.output.push(" ", a, '\x3d"', e, '"') }, closeTag: function (a) { this._.output.push("\x3c/", a, "\x3e") }, text: function (a) { this._.output.push(a) }, comment: function (a) { this._.output.push("\x3c!--", a, "--\x3e") }, write: function (a) { this._.output.push(a) }, reset: function () {
                    this._.output =
                    []; this._.indent = !1
                }, getHtml: function (a) { var e = this._.output.join(""); a && this.reset(); return e }
            }
        }), "use strict", function () {
            CKEDITOR.htmlParser.node = function () { }; CKEDITOR.htmlParser.node.prototype = {
                remove: function () { var a = this.parent.children, e = CKEDITOR.tools.indexOf(a, this), b = this.previous, c = this.next; b && (b.next = c); c && (c.previous = b); a.splice(e, 1); this.parent = null }, replaceWith: function (a) {
                    var e = this.parent.children, b = CKEDITOR.tools.indexOf(e, this), c = a.previous = this.previous, d = a.next = this.next; c && (c.next =
                        a); d && (d.previous = a); e[b] = a; a.parent = this.parent; this.parent = null
                }, insertAfter: function (a) { var e = a.parent.children, b = CKEDITOR.tools.indexOf(e, a), c = a.next; e.splice(b + 1, 0, this); this.next = a.next; this.previous = a; a.next = this; c && (c.previous = this); this.parent = a.parent }, insertBefore: function (a) { var e = a.parent.children, b = CKEDITOR.tools.indexOf(e, a); e.splice(b, 0, this); this.next = a; (this.previous = a.previous) && (a.previous.next = this); a.previous = this; this.parent = a.parent }, getAscendant: function (a) {
                    var e = "function" ==
                        typeof a ? a : "string" == typeof a ? function (b) { return b.name == a } : function (b) { return b.name in a }, b = this.parent; for (; b && b.type == CKEDITOR.NODE_ELEMENT;) { if (e(b)) return b; b = b.parent } return null
                }, wrapWith: function (a) { this.replaceWith(a); a.add(this); return a }, getIndex: function () { return CKEDITOR.tools.indexOf(this.parent.children, this) }, getFilterContext: function (a) { return a || {} }
            }
        }(), "use strict", CKEDITOR.htmlParser.comment = function (a) { this.value = a; this._ = { isBlockLike: !1 } }, CKEDITOR.htmlParser.comment.prototype =
        CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, { type: CKEDITOR.NODE_COMMENT, filter: function (a, e) { var b = this.value; if (!(b = a.onComment(e, b, this))) return this.remove(), !1; if ("string" != typeof b) return this.replaceWith(b), !1; this.value = b; return !0 }, writeHtml: function (a, e) { e && this.filter(e); a.comment(this.value) } }), "use strict", function () {
            CKEDITOR.htmlParser.text = function (a) { this.value = a; this._ = { isBlockLike: !1 } }; CKEDITOR.htmlParser.text.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, {
                type: CKEDITOR.NODE_TEXT,
                filter: function (a, e) { if (!(this.value = a.onText(e, this.value, this))) return this.remove(), !1 }, writeHtml: function (a, e) { e && this.filter(e); a.text(this.value) }
            })
        }(), "use strict", function () { CKEDITOR.htmlParser.cdata = function (a) { this.value = a }; CKEDITOR.htmlParser.cdata.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, { type: CKEDITOR.NODE_TEXT, filter: function () { }, writeHtml: function (a) { a.write(this.value) } }) }(), "use strict", CKEDITOR.htmlParser.fragment = function () {
            this.children = []; this.parent = null;
            this._ = { isBlockLike: !0, hasInlineStarted: !1 }
        }, function () {
            function a(a) { return a.attributes["data-cke-survive"] ? !1 : "a" == a.name && a.attributes.href || CKEDITOR.dtd.$removeEmpty[a.name] } var e = CKEDITOR.tools.extend({ table: 1, ul: 1, ol: 1, dl: 1 }, CKEDITOR.dtd.table, CKEDITOR.dtd.ul, CKEDITOR.dtd.ol, CKEDITOR.dtd.dl), b = { ol: 1, ul: 1 }, c = CKEDITOR.tools.extend({}, { html: 1 }, CKEDITOR.dtd.html, CKEDITOR.dtd.body, CKEDITOR.dtd.head, { style: 1, script: 1 }), d = { ul: "li", ol: "li", dl: "dd", table: "tbody", tbody: "tr", thead: "tr", tfoot: "tr", tr: "td" };
            CKEDITOR.htmlParser.fragment.fromHtml = function (l, k, g) {
                function h(a) { var b; if (0 < p.length) for (var c = 0; c < p.length; c++) { var f = p[c], d = f.name, g = CKEDITOR.dtd[d], h = q.name && CKEDITOR.dtd[q.name]; h && !h[d] || a && g && !g[a] && CKEDITOR.dtd[a] ? d == q.name && (n(q, q.parent, 1), c--) : (b || (m(), b = 1), f = f.clone(), f.parent = q, q = f, p.splice(c, 1), c--) } } function m() { for (; w.length;)n(w.shift(), q) } function f(a) {
                    if (a._.isBlockLike && "pre" != a.name && "textarea" != a.name) {
                        var b = a.children.length, c = a.children[b - 1], f; c && c.type == CKEDITOR.NODE_TEXT &&
                            ((f = CKEDITOR.tools.rtrim(c.value)) ? c.value = f : a.children.length = b - 1)
                    }
                } function n(b, c, d) { c = c || q || y; var h = q; void 0 === b.previous && (r(c, b) && (q = c, v.onTagOpen(g, {}), b.returnPoint = c = q), f(b), a(b) && !b.children.length || c.add(b), "pre" == b.name && (t = !1), "textarea" == b.name && (B = !1)); b.returnPoint ? (q = b.returnPoint, delete b.returnPoint) : q = d ? c : h } function r(a, b) {
                    if ((a == y || "body" == a.name) && g && (!a.name || CKEDITOR.dtd[a.name][g])) {
                        var c, f; return (c = b.attributes && (f = b.attributes["data-cke-real-element-type"]) ? f : b.name) && c in
                            CKEDITOR.dtd.$inline && !(c in CKEDITOR.dtd.head) && !b.isOrphan || b.type == CKEDITOR.NODE_TEXT
                    }
                } function u(a, b) { return a in CKEDITOR.dtd.$listItem || a in CKEDITOR.dtd.$tableContent ? a == b || "dt" == a && "dd" == b || "dd" == a && "dt" == b : !1 } var v = new CKEDITOR.htmlParser, y = k instanceof CKEDITOR.htmlParser.element ? k : "string" == typeof k ? new CKEDITOR.htmlParser.element(k) : new CKEDITOR.htmlParser.fragment, p = [], w = [], q = y, B = "textarea" == y.name, t = "pre" == y.name; v.onTagOpen = function (f, d, g, l) {
                    d = new CKEDITOR.htmlParser.element(f, d); d.isUnknown &&
                        g && (d.isEmpty = !0); d.isOptionalClose = l; if (a(d)) p.push(d); else {
                            if ("pre" == f) t = !0; else { if ("br" == f && t) { q.add(new CKEDITOR.htmlParser.text("\n")); return } "textarea" == f && (B = !0) } if ("br" == f) w.push(d); else {
                                for (; !(l = (g = q.name) ? CKEDITOR.dtd[g] || (q._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : c, d.isUnknown || q.isUnknown || l[f]);)if (q.isOptionalClose) v.onTagClose(g); else if (f in b && g in b) g = q.children, (g = g[g.length - 1]) && "li" == g.name || n(g = new CKEDITOR.htmlParser.element("li"), q), !d.returnPoint && (d.returnPoint =
                                    q), q = g; else if (f in CKEDITOR.dtd.$listItem && !u(f, g)) v.onTagOpen("li" == f ? "ul" : "dl", {}, 0, 1); else if (g in e && !u(f, g)) !d.returnPoint && (d.returnPoint = q), q = q.parent; else if (g in CKEDITOR.dtd.$inline && p.unshift(q), q.parent) n(q, q.parent, 1); else { d.isOrphan = 1; break } h(f); m(); d.parent = q; d.isEmpty ? n(d) : q = d
                            }
                        }
                }; v.onTagClose = function (a) {
                    for (var b = p.length - 1; 0 <= b; b--)if (a == p[b].name) { p.splice(b, 1); return } for (var c = [], f = [], d = q; d != y && d.name != a;)d._.isBlockLike || f.unshift(d), c.push(d), d = d.returnPoint || d.parent; if (d !=
                        y) { for (b = 0; b < c.length; b++) { var h = c[b]; n(h, h.parent) } q = d; d._.isBlockLike && m(); n(d, d.parent); d == q && (q = q.parent); p = p.concat(f) } "body" == a && (g = !1)
                }; v.onText = function (a) {
                    if (!(q._.hasInlineStarted && !w.length || t || B) && (a = CKEDITOR.tools.ltrim(a), 0 === a.length)) return; var b = q.name, f = b ? CKEDITOR.dtd[b] || (q._.isBlockLike ? CKEDITOR.dtd.div : CKEDITOR.dtd.span) : c; if (!B && !f["#"] && b in e) v.onTagOpen(d[b] || ""), v.onText(a); else {
                        m(); h(); t || B || (a = a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g, " ")); a = new CKEDITOR.htmlParser.text(a);
                        if (r(q, a)) this.onTagOpen(g, {}, 0, 1); q.add(a)
                    }
                }; v.onCDATA = function (a) { q.add(new CKEDITOR.htmlParser.cdata(a)) }; v.onComment = function (a) { m(); h(); q.add(new CKEDITOR.htmlParser.comment(a)) }; v.parse(l); for (m(); q != y;)n(q, q.parent, 1); f(y); return y
            }; CKEDITOR.htmlParser.fragment.prototype = {
                type: CKEDITOR.NODE_DOCUMENT_FRAGMENT, add: function (a, b) {
                    isNaN(b) && (b = this.children.length); var c = 0 < b ? this.children[b - 1] : null; if (c) {
                        if (a._.isBlockLike && c.type == CKEDITOR.NODE_TEXT && (c.value = CKEDITOR.tools.rtrim(c.value), 0 ===
                            c.value.length)) { this.children.pop(); this.add(a); return } c.next = a
                    } a.previous = c; a.parent = this; this.children.splice(b, 0, a); this._.hasInlineStarted || (this._.hasInlineStarted = a.type == CKEDITOR.NODE_TEXT || a.type == CKEDITOR.NODE_ELEMENT && !a._.isBlockLike)
                }, filter: function (a, b) { b = this.getFilterContext(b); a.onRoot(b, this); this.filterChildren(a, !1, b) }, filterChildren: function (a, b, c) {
                    if (this.childrenFilteredBy != a.id) {
                        c = this.getFilterContext(c); if (b && !this.parent) a.onRoot(c, this); this.childrenFilteredBy = a.id; for (b =
                            0; b < this.children.length; b++)!1 === this.children[b].filter(a, c) && b--
                    }
                }, writeHtml: function (a, b) { b && this.filter(b); this.writeChildrenHtml(a) }, writeChildrenHtml: function (a, b, c) { var d = this.getFilterContext(); if (c && !this.parent && b) b.onRoot(d, this); b && this.filterChildren(b, !1, d); b = 0; c = this.children; for (d = c.length; b < d; b++)c[b].writeHtml(a) }, forEach: function (a, b, c) {
                    if (!(c || b && this.type != b)) var d = a(this); if (!1 !== d) {
                        c = this.children; for (var e = 0; e < c.length; e++)d = c[e], d.type == CKEDITOR.NODE_ELEMENT ? d.forEach(a,
                            b) : b && d.type != b || a(d)
                    }
                }, getFilterContext: function (a) { return a || {} }
            }
        }(), "use strict", function () {
            function a() { this.rules = [] } function e(b, c, d, e) { var k, g; for (k in c) (g = b[k]) || (g = b[k] = new a), g.add(c[k], d, e) } CKEDITOR.htmlParser.filter = CKEDITOR.tools.createClass({
                $: function (b) { this.id = CKEDITOR.tools.getNextNumber(); this.elementNameRules = new a; this.attributeNameRules = new a; this.elementsRules = {}; this.attributesRules = {}; this.textRules = new a; this.commentRules = new a; this.rootRules = new a; b && this.addRules(b, 10) },
                proto: {
                    addRules: function (a, c) {
                        var d; "number" == typeof c ? d = c : c && "priority" in c && (d = c.priority); "number" != typeof d && (d = 10); "object" != typeof c && (c = {}); a.elementNames && this.elementNameRules.addMany(a.elementNames, d, c); a.attributeNames && this.attributeNameRules.addMany(a.attributeNames, d, c); a.elements && e(this.elementsRules, a.elements, d, c); a.attributes && e(this.attributesRules, a.attributes, d, c); a.text && this.textRules.add(a.text, d, c); a.comment && this.commentRules.add(a.comment, d, c); a.root && this.rootRules.add(a.root,
                            d, c)
                    }, applyTo: function (a) { a.filter(this) }, onElementName: function (a, c) { return this.elementNameRules.execOnName(a, c) }, onAttributeName: function (a, c) { return this.attributeNameRules.execOnName(a, c) }, onText: function (a, c, d) { return this.textRules.exec(a, c, d) }, onComment: function (a, c, d) { return this.commentRules.exec(a, c, d) }, onRoot: function (a, c) { return this.rootRules.exec(a, c) }, onElement: function (a, c) {
                        for (var d = [this.elementsRules["^"], this.elementsRules[c.name], this.elementsRules.$], e, k = 0; 3 > k; k++)if (e = d[k]) {
                            e =
                            e.exec(a, c, this); if (!1 === e) return null; if (e && e != c) return this.onNode(a, e); if (c.parent && !c.name) break
                        } return c
                    }, onNode: function (a, c) { var d = c.type; return d == CKEDITOR.NODE_ELEMENT ? this.onElement(a, c) : d == CKEDITOR.NODE_TEXT ? new CKEDITOR.htmlParser.text(this.onText(a, c.value)) : d == CKEDITOR.NODE_COMMENT ? new CKEDITOR.htmlParser.comment(this.onComment(a, c.value)) : null }, onAttribute: function (a, c, d, e) { return (d = this.attributesRules[d]) ? d.exec(a, e, c, this) : e }
                }
            }); CKEDITOR.htmlParser.filterRulesGroup = a; a.prototype =
            {
                add: function (a, c, d) { this.rules.splice(this.findIndex(c), 0, { value: a, priority: c, options: d }) }, addMany: function (a, c, d) { for (var e = [this.findIndex(c), 0], k = 0, g = a.length; k < g; k++)e.push({ value: a[k], priority: c, options: d }); this.rules.splice.apply(this.rules, e) }, findIndex: function (a) { for (var c = this.rules, d = c.length - 1; 0 <= d && a < c[d].priority;)d--; return d + 1 }, exec: function (a, c) {
                    var d = c instanceof CKEDITOR.htmlParser.node || c instanceof CKEDITOR.htmlParser.fragment, e = Array.prototype.slice.call(arguments, 1), k = this.rules,
                    g = k.length, h, m, f, n; for (n = 0; n < g; n++)if (d && (h = c.type, m = c.name), f = k[n], !(a.nonEditable && !f.options.applyToAll || a.nestedEditable && f.options.excludeNestedEditable)) { f = f.value.apply(null, e); if (!1 === f || d && f && (f.name != m || f.type != h)) return f; null != f && (e[0] = c = f) } return c
                }, execOnName: function (a, c) { for (var d = 0, e = this.rules, k = e.length, g; c && d < k; d++)g = e[d], a.nonEditable && !g.options.applyToAll || a.nestedEditable && g.options.excludeNestedEditable || (c = c.replace(g.value[0], g.value[1])); return c }
            }
        }(), function () {
            function a(a,
                f) {
                    function g(a) { return a || CKEDITOR.env.needsNbspFiller ? new CKEDITOR.htmlParser.text(" ") : new CKEDITOR.htmlParser.element("br", { "data-cke-bogus": 1 }) } function h(a, f) {
                        return function (d) {
                            if (d.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                                var h = [], m = b(d), k, t; if (m) for (e(m, 1) && h.push(m); m;)l(m) && (k = c(m)) && e(k) && ((t = c(k)) && !l(t) ? h.push(k) : (g(n).insertAfter(k), k.remove())), m = m.previous; for (m = 0; m < h.length; m++)h[m].remove(); if (h = !a || !1 !== ("function" == typeof f ? f(d) : f)) n || CKEDITOR.env.needsBrFiller || d.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT ?
                                    n || CKEDITOR.env.needsBrFiller || !(7 < document.documentMode || d.name in CKEDITOR.dtd.tr || d.name in CKEDITOR.dtd.$listItem) ? (h = b(d), h = !h || "form" == d.name && "input" == h.name) : h = !1 : h = !1; h && d.add(g(a))
                            }
                        }
                    } function e(a, b) {
                        if ((!n || CKEDITOR.env.needsBrFiller) && a.type == CKEDITOR.NODE_ELEMENT && "br" == a.name && !a.attributes["data-cke-eol"]) return !0; var c; return a.type == CKEDITOR.NODE_TEXT && (c = a.value.match(p)) && (c.index && ((new CKEDITOR.htmlParser.text(a.value.substring(0, c.index))).insertBefore(a), a.value = c[0]), !CKEDITOR.env.needsBrFiller &&
                            n && (!b || a.parent.name in D) || !n && ((c = a.previous) && "br" == c.name || !c || l(c))) ? !0 : !1
                    } var m = { elements: {} }, n = "html" == f, D = CKEDITOR.tools.extend({}, t), J; for (J in D) "#" in q[J] || delete D[J]; for (J in D) m.elements[J] = h(n, a.config.fillEmptyBlocks); m.root = h(n, !1); m.elements.br = function (a) {
                        return function (b) {
                            if (b.parent.type != CKEDITOR.NODE_DOCUMENT_FRAGMENT) {
                                var f = b.attributes; if ("data-cke-bogus" in f || "data-cke-eol" in f) delete f["data-cke-bogus"]; else {
                                    for (f = b.next; f && d(f);)f = f.next; var h = c(b); !f && l(b.parent) ? k(b.parent,
                                        g(a)) : l(f) && h && !l(h) && g(a).insertBefore(f)
                                }
                            }
                        }
                    }(n); return m
            } function e(a, b) { return a != CKEDITOR.ENTER_BR && !1 !== b ? a == CKEDITOR.ENTER_DIV ? "div" : "p" : !1 } function b(a) { for (a = a.children[a.children.length - 1]; a && d(a);)a = a.previous; return a } function c(a) { for (a = a.previous; a && d(a);)a = a.previous; return a } function d(a) { return a.type == CKEDITOR.NODE_TEXT && !CKEDITOR.tools.trim(a.value) || a.type == CKEDITOR.NODE_ELEMENT && a.attributes["data-cke-bookmark"] } function l(a) {
                return a && (a.type == CKEDITOR.NODE_ELEMENT && a.name in
                    t || a.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT)
            } function k(a, b) { var c = a.children[a.children.length - 1]; a.children.push(b); b.parent = a; c && (c.next = b, b.previous = c) } function g(a) { a = a.attributes; "false" != a.contenteditable && (a["data-cke-editable"] = a.contenteditable ? "true" : 1); a.contenteditable = "false" } function h(a) { a = a.attributes; switch (a["data-cke-editable"]) { case "true": a.contenteditable = "true"; break; case "1": delete a.contenteditable } } function m(a) {
                return a.replace(G, function (a, b, c) {
                    return "\x3c" + b + c.replace(F,
                        function (a, b) { return E.test(b) && -1 == c.indexOf("data-cke-saved-" + b) ? " data-cke-saved-" + a + " data-cke-" + CKEDITOR.rnd + "-" + a : a }) + "\x3e"
                })
            } function f(a, b) { return a.replace(b, function (a, b, c) { 0 === a.indexOf("\x3ctextarea") && (a = b + u(c).replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;") + "\x3c/textarea\x3e"); return "\x3ccke:encoded\x3e" + encodeURIComponent(a) + "\x3c/cke:encoded\x3e" }) } function n(a) { return a.replace(K, function (a, b) { return decodeURIComponent(b) }) } function r(a) {
                return a.replace(/\x3c!--(?!{cke_protected})[\s\S]+?--\x3e/g,
                    function (a) { return "\x3c!--" + w + "{C}" + encodeURIComponent(a).replace(/--/g, "%2D%2D") + "--\x3e" })
            } function u(a) { return a.replace(/\x3c!--\{cke_protected\}\{C\}([\s\S]+?)--\x3e/g, function (a, b) { return decodeURIComponent(b) }) } function v(a, b) { var c = b._.dataStore; return a.replace(/\x3c!--\{cke_protected\}([\s\S]+?)--\x3e/g, function (a, b) { return decodeURIComponent(b) }).replace(/\{cke_protected_(\d+)\}/g, function (a, b) { return c && c[b] || "" }) } function y(a, b) {
                var c = [], f = b.config.protectedSource, d = b._.dataStore || (b._.dataStore =
                    { id: 1 }), g = /<\!--\{cke_temp(comment)?\}(\d*?)--\x3e/g, f = [/<script[\s\S]*?(<\/script>|$)/gi, /<noscript[\s\S]*?<\/noscript>/gi, /<meta[\s\S]*?\/?>/gi].concat(f); a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, function (a) { return "\x3c!--{cke_tempcomment}" + (c.push(a) - 1) + "--\x3e" }); for (var h = 0; h < f.length; h++)a = a.replace(f[h], function (a) { a = a.replace(g, function (a, b, f) { return c[f] }); return /cke_temp(comment)?/.test(a) ? a : "\x3c!--{cke_temp}" + (c.push(a) - 1) + "--\x3e" }); a = a.replace(g, function (a, b, f) {
                        return "\x3c!--" + w + (b ? "{C}" :
                            "") + encodeURIComponent(c[f]).replace(/--/g, "%2D%2D") + "--\x3e"
                    }); a = a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=\/>]+))+\s*\/?>/g, function (a) { return a.replace(/\x3c!--\{cke_protected\}([^>]*)--\x3e/g, function (a, b) { d[d.id] = decodeURIComponent(b); return "{cke_protected_" + d.id++ + "}" }) }); return a = a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g, function (a, c, f, d) { return "\x3c" + c + f + "\x3e" + v(u(d), b) + "\x3c/" + c + "\x3e" })
            } CKEDITOR.htmlDataProcessor = function (b) {
                var c,
                d, g = this; this.editor = b; this.dataFilter = c = new CKEDITOR.htmlParser.filter; this.htmlFilter = d = new CKEDITOR.htmlParser.filter; this.writer = new CKEDITOR.htmlParser.basicWriter; c.addRules(x); c.addRules(C, { applyToAll: !0 }); c.addRules(a(b, "data"), { applyToAll: !0 }); d.addRules(z); d.addRules(A, { applyToAll: !0 }); d.addRules(a(b, "html"), { applyToAll: !0 }); b.on("toHtml", function (a) {
                    a = a.data; var c = a.dataValue, d, c = y(c, b), c = f(c, H), c = m(c), c = f(c, I), c = c.replace(J, "$1cke:$2"), c = c.replace(R, "\x3ccke:$1$2\x3e\x3c/cke:$1\x3e"),
                        c = c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g, "$1$2$2"), c = c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi, "$1data-cke-" + CKEDITOR.rnd + "-$2"); d = a.context || b.editable().getName(); var g; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && "pre" == d && (d = "div", c = "\x3cpre\x3e" + c + "\x3c/pre\x3e", g = 1); d = b.document.createElement(d); d.setHtml("a" + c); c = d.getHtml().substr(1); c = c.replace(new RegExp("data-cke-" + CKEDITOR.rnd + "-", "ig"), ""); g && (c = c.replace(/^<pre>|<\/pre>$/gi, "")); c = c.replace(D, "$1$2"); c = n(c); c = u(c); d = !1 === a.fixForBody ? !1 :
                            e(a.enterMode, b.config.autoParagraph); c = CKEDITOR.htmlParser.fragment.fromHtml(c, a.context, d); d && (g = c, !g.children.length && CKEDITOR.dtd[g.name][d] && (d = new CKEDITOR.htmlParser.element(d), g.add(d))); a.dataValue = c
                }, null, null, 5); b.on("toHtml", function (a) { a.data.filter.applyTo(a.data.dataValue, !0, a.data.dontFilter, a.data.enterMode) && b.fire("dataFiltered") }, null, null, 6); b.on("toHtml", function (a) { a.data.dataValue.filterChildren(g.dataFilter, !0) }, null, null, 10); b.on("toHtml", function (a) {
                    a = a.data; var b = a.dataValue,
                        c = new CKEDITOR.htmlParser.basicWriter; b.writeChildrenHtml(c); b = c.getHtml(!0); a.dataValue = r(b)
                }, null, null, 15); b.on("toDataFormat", function (a) { var c = a.data.dataValue; a.data.enterMode != CKEDITOR.ENTER_BR && (c = c.replace(/^<br *\/?>/i, "")); a.data.dataValue = CKEDITOR.htmlParser.fragment.fromHtml(c, a.data.context, e(a.data.enterMode, b.config.autoParagraph)) }, null, null, 5); b.on("toDataFormat", function (a) { a.data.dataValue.filterChildren(g.htmlFilter, !0) }, null, null, 10); b.on("toDataFormat", function (a) {
                    a.data.filter.applyTo(a.data.dataValue,
                        !1, !0)
                }, null, null, 11); b.on("toDataFormat", function (a) { var c = a.data.dataValue, f = g.writer; f.reset(); c.writeChildrenHtml(f); c = f.getHtml(!0); c = u(c); c = v(c, b); a.data.dataValue = c }, null, null, 15)
            }; CKEDITOR.htmlDataProcessor.prototype = {
                toHtml: function (a, b, c, f) {
                    var d = this.editor, g, h, e, m; b && "object" == typeof b ? (g = b.context, c = b.fixForBody, f = b.dontFilter, h = b.filter, e = b.enterMode, m = b.protectedWhitespaces) : g = b; g || null === g || (g = d.editable().getName()); return d.fire("toHtml", {
                        dataValue: a, context: g, fixForBody: c, dontFilter: f,
                        filter: h || d.filter, enterMode: e || d.enterMode, protectedWhitespaces: m
                    }).dataValue
                }, toDataFormat: function (a, b) { var c, f, d; b && (c = b.context, f = b.filter, d = b.enterMode); c || null === c || (c = this.editor.editable().getName()); return this.editor.fire("toDataFormat", { dataValue: a, filter: f || this.editor.filter, context: c, enterMode: d || this.editor.enterMode }).dataValue }
            }; var p = /(?:&nbsp;|\xa0)$/, w = "{cke_protected}", q = CKEDITOR.dtd, B = "caption colgroup col thead tfoot tbody".split(" "), t = CKEDITOR.tools.extend({}, q.$blockLimit,
                q.$block), x = { elements: { input: g, textarea: g } }, C = { attributeNames: [[/^on/, "data-cke-pa-on"], [/^srcdoc/, "data-cke-pa-srcdoc"], [/^data-cke-expando$/, ""]], elements: { iframe: function (a) { if (a.attributes && a.attributes.src) { var b = a.attributes.src.toLowerCase().replace(/[^a-z]/gi, ""); if (0 === b.indexOf("javascript") || 0 === b.indexOf("data")) a.attributes["data-cke-pa-src"] = a.attributes.src, delete a.attributes.src } } } }, z = {
                    elements: {
                        embed: function (a) {
                            var b = a.parent; if (b && "object" == b.name) {
                                var c = b.attributes.width, b = b.attributes.height;
                                c && (a.attributes.width = c); b && (a.attributes.height = b)
                            }
                        }, a: function (a) { var b = a.attributes; if (!(a.children.length || b.name || b.id || a.attributes["data-cke-saved-name"])) return !1 }
                    }
                }, A = {
                    elementNames: [[/^cke:/, ""], [/^\?xml:namespace$/, ""]], attributeNames: [[/^data-cke-(saved|pa)-/, ""], [/^data-cke-.*/, ""], ["hidefocus", ""]], elements: {
                        $: function (a) { var b = a.attributes; if (b) { if (b["data-cke-temp"]) return !1; for (var c = ["name", "href", "src"], f, d = 0; d < c.length; d++)f = "data-cke-saved-" + c[d], f in b && delete b[c[d]] } return a },
                        table: function (a) { a.children.slice(0).sort(function (a, b) { var c, f; a.type == CKEDITOR.NODE_ELEMENT && b.type == a.type && (c = CKEDITOR.tools.indexOf(B, a.name), f = CKEDITOR.tools.indexOf(B, b.name)); -1 < c && -1 < f && c != f || (c = a.parent ? a.getIndex() : -1, f = b.parent ? b.getIndex() : -1); return c > f ? 1 : -1 }) }, param: function (a) { a.children = []; a.isEmpty = !0; return a }, span: function (a) { "Apple-style-span" == a.attributes["class"] && delete a.name }, html: function (a) { delete a.attributes.contenteditable; delete a.attributes["class"] }, body: function (a) {
                            delete a.attributes.spellcheck;
                            delete a.attributes.contenteditable
                        }, style: function (a) { var b = a.children[0]; b && b.value && (b.value = CKEDITOR.tools.trim(b.value)); a.attributes.type || (a.attributes.type = "text/css") }, title: function (a) { var b = a.children[0]; !b && k(a, b = new CKEDITOR.htmlParser.text); b.value = a.attributes["data-cke-title"] || "" }, input: h, textarea: h
                    }, attributes: { "class": function (a) { return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g, "")) || !1 } }
                }; CKEDITOR.env.ie && (A.attributes.style = function (a) {
                    return a.replace(/(^|;)([^\:]+)/g,
                        function (a) { return a.toLowerCase() })
                }); var G = /<(a|area|img|input|source)\b([^>]*)>/gi, F = /([\w-:]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi, E = /^(href|src|name)$/i, I = /(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi, H = /(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi, K = /<cke:encoded>([^<]*)<\/cke:encoded>/gi, J = /(<\/?)((?:object|embed|param|html|body|head|title)([\s][^>]*)?>)/gi, D = /(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi, R = /<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi
        }(),
        "use strict", CKEDITOR.htmlParser.element = function (a, e) { this.name = a; this.attributes = e || {}; this.children = []; var b = a || "", c = b.match(/^cke:(.*)/); c && (b = c[1]); b = !!(CKEDITOR.dtd.$nonBodyContent[b] || CKEDITOR.dtd.$block[b] || CKEDITOR.dtd.$listItem[b] || CKEDITOR.dtd.$tableContent[b] || CKEDITOR.dtd.$nonEditable[b] || "br" == b); this.isEmpty = !!CKEDITOR.dtd.$empty[a]; this.isUnknown = !CKEDITOR.dtd[a]; this._ = { isBlockLike: b, hasInlineStarted: this.isEmpty || !b } }, CKEDITOR.htmlParser.cssStyle = function (a) {
            var e = {}; ((a instanceof
                CKEDITOR.htmlParser.element ? a.attributes.style : a) || "").replace(/&quot;/g, '"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function (a, c, d) { "font-family" == c && (d = d.replace(/["']/g, "")); e[c.toLowerCase()] = d }); return { rules: e, populate: function (a) { var c = this.toString(); c && (a instanceof CKEDITOR.dom.element ? a.setAttribute("style", c) : a instanceof CKEDITOR.htmlParser.element ? a.attributes.style = c : a.style = c) }, toString: function () { var a = [], c; for (c in e) e[c] && a.push(c, ":", e[c], ";"); return a.join("") } }
        }, function () {
            function a(a) {
                return function (b) {
                    return b.type ==
                        CKEDITOR.NODE_ELEMENT && ("string" == typeof a ? b.name == a : b.name in a)
                }
            } var e = function (a, b) { a = a[0]; b = b[0]; return a < b ? -1 : a > b ? 1 : 0 }, b = CKEDITOR.htmlParser.fragment.prototype; CKEDITOR.htmlParser.element.prototype = CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node, {
                type: CKEDITOR.NODE_ELEMENT, add: b.add, clone: function () { return new CKEDITOR.htmlParser.element(this.name, this.attributes) }, filter: function (a, b) {
                    var e = this, k, g; b = e.getFilterContext(b); if (b.off) return !0; if (!e.parent) a.onRoot(b, e); for (; ;) {
                        k = e.name; if (!(g =
                            a.onElementName(b, k))) return this.remove(), !1; e.name = g; if (!(e = a.onElement(b, e))) return this.remove(), !1; if (e !== this) return this.replaceWith(e), !1; if (e.name == k) break; if (e.type != CKEDITOR.NODE_ELEMENT) return this.replaceWith(e), !1; if (!e.name) return this.replaceWithChildren(), !1
                    } k = e.attributes; var h, m; for (h in k) { for (g = k[h]; ;)if (m = a.onAttributeName(b, h)) if (m != h) delete k[h], h = m; else break; else { delete k[h]; break } m && (!1 === (g = a.onAttribute(b, e, m, g)) ? delete k[m] : k[m] = g) } e.isEmpty || this.filterChildren(a, !1,
                        b); return !0
                }, filterChildren: b.filterChildren, writeHtml: function (a, b) { b && this.filter(b); var l = this.name, k = [], g = this.attributes, h, m; a.openTag(l, g); for (h in g) k.push([h, g[h]]); a.sortAttributes && k.sort(e); h = 0; for (m = k.length; h < m; h++)g = k[h], a.attribute(g[0], g[1]); a.openTagClose(l, this.isEmpty); this.writeChildrenHtml(a); this.isEmpty || a.closeTag(l) }, writeChildrenHtml: b.writeChildrenHtml, replaceWithChildren: function () { for (var a = this.children, b = a.length; b;)a[--b].insertAfter(this); this.remove() }, forEach: b.forEach,
                getFirst: function (b) { if (!b) return this.children.length ? this.children[0] : null; "function" != typeof b && (b = a(b)); for (var d = 0, e = this.children.length; d < e; ++d)if (b(this.children[d])) return this.children[d]; return null }, getHtml: function () { var a = new CKEDITOR.htmlParser.basicWriter; this.writeChildrenHtml(a); return a.getHtml() }, setHtml: function (a) { a = this.children = CKEDITOR.htmlParser.fragment.fromHtml(a).children; for (var b = 0, e = a.length; b < e; ++b)a[b].parent = this }, getOuterHtml: function () {
                    var a = new CKEDITOR.htmlParser.basicWriter;
                    this.writeHtml(a); return a.getHtml()
                }, split: function (a) { for (var b = this.children.splice(a, this.children.length - a), e = this.clone(), k = 0; k < b.length; ++k)b[k].parent = e; e.children = b; b[0] && (b[0].previous = null); 0 < a && (this.children[a - 1].next = null); this.parent.add(e, this.getIndex() + 1); return e }, find: function (a, b) {
                    void 0 === b && (b = !1); var e = [], k; for (k = 0; k < this.children.length; k++) {
                        var g = this.children[k]; "function" == typeof a && a(g) ? e.push(g) : "string" == typeof a && g.name === a && e.push(g); b && g.find && (e = e.concat(g.find(a,
                            b)))
                    } return e
                }, addClass: function (a) { if (!this.hasClass(a)) { var b = this.attributes["class"] || ""; this.attributes["class"] = b + (b ? " " : "") + a } }, removeClass: function (a) { var b = this.attributes["class"]; b && ((b = CKEDITOR.tools.trim(b.replace(new RegExp("(?:\\s+|^)" + a + "(?:\\s+|$)"), " "))) ? this.attributes["class"] = b : delete this.attributes["class"]) }, hasClass: function (a) { var b = this.attributes["class"]; return b ? (new RegExp("(?:^|\\s)" + a + "(?\x3d\\s|$)")).test(b) : !1 }, getFilterContext: function (a) {
                    var b = []; a || (a = {
                        off: !1,
                        nonEditable: !1, nestedEditable: !1
                    }); a.off || "off" != this.attributes["data-cke-processor"] || b.push("off", !0); a.nonEditable || "false" != this.attributes.contenteditable ? a.nonEditable && !a.nestedEditable && "true" == this.attributes.contenteditable && b.push("nestedEditable", !0) : b.push("nonEditable", !0); if (b.length) { a = CKEDITOR.tools.copy(a); for (var e = 0; e < b.length; e += 2)a[b[e]] = b[e + 1] } return a
                }
            }, !0)
        }(), function () {
            var a = /{([^}]+)}/g; CKEDITOR.template = function (a) { this.source = String(a) }; CKEDITOR.template.prototype.output =
                function (e, b) { var c = this.source.replace(a, function (a, b) { return void 0 !== e[b] ? e[b] : a }); return b ? b.push(c) : c }
        }(), delete CKEDITOR.loadFullCore, CKEDITOR.instances = {}, CKEDITOR.document = new CKEDITOR.dom.document(document), CKEDITOR.add = function (a) {
            CKEDITOR.instances[a.name] = a; a.on("focus", function () { CKEDITOR.currentInstance != a && (CKEDITOR.currentInstance = a, CKEDITOR.fire("currentInstance")) }); a.on("blur", function () { CKEDITOR.currentInstance == a && (CKEDITOR.currentInstance = null, CKEDITOR.fire("currentInstance")) });
            CKEDITOR.fire("instance", null, a)
        }, CKEDITOR.remove = function (a) { delete CKEDITOR.instances[a.name] }, function () { var a = {}; CKEDITOR.addTemplate = function (e, b) { var c = a[e]; if (c) return c; c = { name: e, source: b }; CKEDITOR.fire("template", c); return a[e] = new CKEDITOR.template(c.source) }; CKEDITOR.getTemplate = function (e) { return a[e] } }(), function () { var a = []; CKEDITOR.addCss = function (e) { a.push(e) }; CKEDITOR.getCss = function () { return a.join("\n") } }(), CKEDITOR.on("instanceDestroyed", function () {
            CKEDITOR.tools.isEmpty(this.instances) &&
            CKEDITOR.fire("reset")
        }), CKEDITOR.TRISTATE_ON = 1, CKEDITOR.TRISTATE_OFF = 2, CKEDITOR.TRISTATE_DISABLED = 0, function () {
            CKEDITOR.inline = function (a, e) {
                if (!CKEDITOR.env.isCompatible) return null; a = CKEDITOR.dom.element.get(a); if (a.getEditor()) throw 'The editor instance "' + a.getEditor().name + '" is already attached to the provided element.'; var b = new CKEDITOR.editor(e, a, CKEDITOR.ELEMENT_MODE_INLINE), c = a.is("textarea") ? a : null; c ? (b.setData(c.getValue(), null, !0), a = CKEDITOR.dom.element.createFromHtml('\x3cdiv contenteditable\x3d"' +
                    !!b.readOnly + '" class\x3d"cke_textarea_inline"\x3e' + c.getValue() + "\x3c/div\x3e", CKEDITOR.document), a.insertAfter(c), c.hide(), c.$.form && b._attachToForm()) : b.setData(a.getHtml(), null, !0); b.on("loaded", function () { b.fire("uiReady"); b.editable(a); b.container = a; b.ui.contentsElement = a; b.setData(b.getData(1)); b.resetDirty(); b.fire("contentDom"); b.mode = "wysiwyg"; b.fire("mode"); b.status = "ready"; b.fireOnce("instanceReady"); CKEDITOR.fire("instanceReady", null, b) }, null, null, 1E4); b.on("destroy", function () {
                        c && (b.container.clearCustomData(),
                            b.container.remove(), c.show()); b.element.clearCustomData(); delete b.element
                    }); return b
            }; CKEDITOR.inlineAll = function () { var a, e, b; for (b in CKEDITOR.dtd.$editable) for (var c = CKEDITOR.document.getElementsByTag(b), d = 0, l = c.count(); d < l; d++)a = c.getItem(d), "true" == a.getAttribute("contenteditable") && (e = { element: a, config: {} }, !1 !== CKEDITOR.fire("inline", e) && CKEDITOR.inline(a, e.config)) }; CKEDITOR.domReady(function () { !CKEDITOR.disableAutoInline && CKEDITOR.inlineAll() })
        }(), CKEDITOR.replaceClass = "ckeditor", function () {
            function a(a,
                d, l, k) {
                    if (!CKEDITOR.env.isCompatible) return null; a = CKEDITOR.dom.element.get(a); if (a.getEditor()) throw 'The editor instance "' + a.getEditor().name + '" is already attached to the provided element.'; var g = new CKEDITOR.editor(d, a, k); k == CKEDITOR.ELEMENT_MODE_REPLACE && (a.setStyle("visibility", "hidden"), g._.required = a.hasAttribute("required"), a.removeAttribute("required")); l && g.setData(l, null, !0); g.on("loaded", function () {
                        b(g); k == CKEDITOR.ELEMENT_MODE_REPLACE && g.config.autoUpdateElement && a.$.form && g._attachToForm();
                        g.setMode(g.config.startupMode, function () { g.resetDirty(); g.status = "ready"; g.fireOnce("instanceReady"); CKEDITOR.fire("instanceReady", null, g) })
                    }); g.on("destroy", e); return g
            } function e() { var a = this.container, b = this.element; a && (a.clearCustomData(), a.remove()); b && (b.clearCustomData(), this.elementMode == CKEDITOR.ELEMENT_MODE_REPLACE && (b.show(), this._.required && b.setAttribute("required", "required")), delete this.element) } function b(a) {
                var b = a.name, e = a.element, k = a.elementMode, g = a.fire("uiSpace", {
                    space: "top",
                    html: ""
                }).html, h = a.fire("uiSpace", { space: "bottom", html: "" }).html, m = new CKEDITOR.template('\x3c{outerEl} id\x3d"cke_{name}" class\x3d"{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} ' + CKEDITOR.env.cssClass + '"  dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"application"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : "") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : "") + '\x3c{outerEl} class\x3d"cke_inner cke_reset" role\x3d"presentation"\x3e{topHtml}\x3c{outerEl} id\x3d"{contentId}" class\x3d"cke_contents cke_reset" role\x3d"presentation"\x3e\x3c/{outerEl}\x3e{bottomHtml}\x3c/{outerEl}\x3e\x3c/{outerEl}\x3e'),
                b = CKEDITOR.dom.element.createFromHtml(m.output({ id: a.id, name: b, langDir: a.lang.dir, langCode: a.langCode, voiceLabel: a.title, topHtml: g ? '\x3cspan id\x3d"' + a.ui.spaceId("top") + '" class\x3d"cke_top cke_reset_all" role\x3d"presentation" style\x3d"height:auto"\x3e' + g + "\x3c/span\x3e" : "", contentId: a.ui.spaceId("contents"), bottomHtml: h ? '\x3cspan id\x3d"' + a.ui.spaceId("bottom") + '" class\x3d"cke_bottom cke_reset_all" role\x3d"presentation"\x3e' + h + "\x3c/span\x3e" : "", outerEl: CKEDITOR.env.ie ? "span" : "div" })); k == CKEDITOR.ELEMENT_MODE_REPLACE ?
                    (e.hide(), b.insertAfter(e)) : e.append(b); a.container = b; a.ui.contentsElement = a.ui.space("contents"); g && a.ui.space("top").unselectable(); h && a.ui.space("bottom").unselectable(); e = a.config.width; k = a.config.height; e && b.setStyle("width", CKEDITOR.tools.cssLength(e)); k && a.ui.space("contents").setStyle("height", CKEDITOR.tools.cssLength(k)); b.disableContextMenu(); CKEDITOR.env.webkit && b.on("focus", function () { a.focus() }); a.fireOnce("uiReady")
            } CKEDITOR.replace = function (b, d) { return a(b, d, null, CKEDITOR.ELEMENT_MODE_REPLACE) };
            CKEDITOR.appendTo = function (b, d, e) { return a(b, d, e, CKEDITOR.ELEMENT_MODE_APPENDTO) }; CKEDITOR.replaceAll = function () { for (var a = document.getElementsByTagName("textarea"), b = 0; b < a.length; b++) { var e = null, k = a[b]; if (k.name || k.id) { if ("string" == typeof arguments[0]) { if (!(new RegExp("(?:^|\\s)" + arguments[0] + "(?:$|\\s)")).test(k.className)) continue } else if ("function" == typeof arguments[0] && (e = {}, !1 === arguments[0](k, e))) continue; this.replace(k, e) } } }; CKEDITOR.editor.prototype.addMode = function (a, b) {
                (this._.modes || (this._.modes =
                    {}))[a] = b
            }; CKEDITOR.editor.prototype.setMode = function (a, b) {
                var e = this, k = this._.modes; if (a != e.mode && k && k[a]) {
                    e.fire("beforeSetMode", a); if (e.mode) { var g = e.checkDirty(), k = e._.previousModeData, h, m = 0; e.fire("beforeModeUnload"); e.editable(0); e._.previousMode = e.mode; e._.previousModeData = h = e.getData(1); "source" == e.mode && k == h && (e.fire("lockSnapshot", { forceUpdate: !0 }), m = 1); e.ui.space("contents").setHtml(""); e.mode = "" } else e._.previousModeData = e.getData(1); this._.modes[a](function () {
                        e.mode = a; void 0 !== g && !g &&
                            e.resetDirty(); m ? e.fire("unlockSnapshot") : "wysiwyg" == a && e.fire("saveSnapshot"); setTimeout(function () { e.fire("mode"); b && b.call(e) }, 0)
                    })
                }
            }; CKEDITOR.editor.prototype.resize = function (a, b, e, k) {
                var g = this.container, h = this.ui.space("contents"), m = CKEDITOR.env.webkit && this.document && this.document.getWindow().$.frameElement; k = k ? this.container.getFirst(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner") }) : g; k.setSize("width", a, !0); m && (m.style.width = "1%"); var f = (k.$.offsetHeight || 0) - (h.$.clientHeight ||
                    0), g = Math.max(b - (e ? 0 : f), 0); b = e ? b + f : b; h.setStyle("height", g + "px"); m && (m.style.width = "100%"); this.fire("resize", { outerHeight: b, contentsHeight: g, outerWidth: a || k.getSize("width") })
            }; CKEDITOR.editor.prototype.getResizable = function (a) { return a ? this.ui.space("contents") : this.container }; CKEDITOR.domReady(function () { CKEDITOR.replaceClass && CKEDITOR.replaceAll(CKEDITOR.replaceClass) })
        }(), CKEDITOR.config.startupMode = "wysiwyg", function () {
            function a(a) {
                var b = a.editor, f = a.data.path, d = f.blockLimit, g = a.data.selection,
                h = g.getRanges()[0], m; if (CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller) if (g = e(g, f)) g.appendBogus(), m = CKEDITOR.env.ie; k(b, f.block, d) && h.collapsed && !h.getCommonAncestor().isReadOnly() && (f = h.clone(), f.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS), d = new CKEDITOR.dom.walker(f), d.guard = function (a) { return !c(a) || a.type == CKEDITOR.NODE_COMMENT || a.isReadOnly() }, !d.checkForward() || f.checkStartOfBlock() && f.checkEndOfBlock()) && (b = h.fixBlock(!0, b.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p"), CKEDITOR.env.needsBrFiller ||
                    (b = b.getFirst(c)) && b.type == CKEDITOR.NODE_TEXT && CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/) && b.remove(), m = 1, a.cancel()); m && h.select()
            } function e(a, b) { if (a.isFake) return 0; var f = b.block || b.blockLimit, d = f && f.getLast(c); if (!(!f || !f.isBlockBoundary() || d && d.type == CKEDITOR.NODE_ELEMENT && d.isBlockBoundary() || f.is("pre") || f.getBogus())) return f } function b(a) { var b = a.data.getTarget(); b.is("input") && (b = b.getAttribute("type"), "submit" != b && "reset" != b || a.data.preventDefault()) } function c(a) {
                return f(a) &&
                    n(a)
            } function d(a, b) { return function (c) { var f = c.data.$.toElement || c.data.$.fromElement || c.data.$.relatedTarget; (f = f && f.nodeType == CKEDITOR.NODE_ELEMENT ? new CKEDITOR.dom.element(f) : null) && (b.equals(f) || b.contains(f)) || a.call(this, c) } } function l(a) {
                function b(a) { return function (b, d) { d && b.type == CKEDITOR.NODE_ELEMENT && b.is(g) && (f = b); if (!(d || !c(b) || a && u(b))) return !1 } } var f, d = a.getRanges()[0]; a = a.root; var g = { table: 1, ul: 1, ol: 1, dl: 1 }; if (d.startPath().contains(g)) {
                    var e = d.clone(); e.collapse(1); e.setStartAt(a,
                        CKEDITOR.POSITION_AFTER_START); a = new CKEDITOR.dom.walker(e); a.guard = b(); a.checkBackward(); if (f) return e = d.clone(), e.collapse(), e.setEndAt(f, CKEDITOR.POSITION_AFTER_END), a = new CKEDITOR.dom.walker(e), a.guard = b(!0), f = !1, a.checkForward(), f
                } return null
            } function k(a, b, c) { return !1 !== a.config.autoParagraph && a.activeEnterMode != CKEDITOR.ENTER_BR && (a.editable().equals(c) && !b || b && "true" == b.getAttribute("contenteditable")) } function g(a) {
                return a.activeEnterMode != CKEDITOR.ENTER_BR && !1 !== a.config.autoParagraph ?
                    a.activeEnterMode == CKEDITOR.ENTER_DIV ? "div" : "p" : !1
            } function h(a) { var b = a.editor; b.getSelection().scrollIntoView(); setTimeout(function () { b.fire("saveSnapshot") }, 0) } function m(a, b, c) { var f = a.getCommonAncestor(b); for (b = a = c ? b : a; (a = a.getParent()) && !f.equals(a) && 1 == a.getChildCount();)b = a; b.remove() } var f, n, r, u, v, y, p, w, q, B; CKEDITOR.editable = CKEDITOR.tools.createClass({
                base: CKEDITOR.dom.element, $: function (a, b) { this.base(b.$ || b); this.editor = a; this.status = "unloaded"; this.hasFocus = !1; this.setup() }, proto: {
                    focus: function () {
                        var a;
                        if (CKEDITOR.env.webkit && !this.hasFocus && (a = this.editor._.previousActive || this.getDocument().getActive(), this.contains(a))) { a.focus(); return } CKEDITOR.env.edge && 14 < CKEDITOR.env.version && !this.hasFocus && this.getDocument().equals(CKEDITOR.document) && (this.editor._.previousScrollTop = this.$.scrollTop); try {
                            if (!CKEDITOR.env.ie || CKEDITOR.env.edge && 14 < CKEDITOR.env.version || !this.getDocument().equals(CKEDITOR.document)) if (CKEDITOR.env.chrome) { var b = this.$.scrollTop; this.$.focus(); this.$.scrollTop = b } else this.$.focus();
                            else this.$.setActive()
                        } catch (c) { if (!CKEDITOR.env.ie) throw c; } CKEDITOR.env.safari && !this.isInline() && (a = CKEDITOR.document.getActive(), a.equals(this.getWindow().getFrame()) || this.getWindow().focus())
                    }, on: function (a, b) { var c = Array.prototype.slice.call(arguments, 0); CKEDITOR.env.ie && /^focus|blur$/.exec(a) && (a = "focus" == a ? "focusin" : "focusout", b = d(b, this), c[0] = a, c[1] = b); return CKEDITOR.dom.element.prototype.on.apply(this, c) }, attachListener: function (a) {
                        !this._.listeners && (this._.listeners = []); var b = Array.prototype.slice.call(arguments,
                            1), b = a.on.apply(a, b); this._.listeners.push(b); return b
                    }, clearListeners: function () { var a = this._.listeners; try { for (; a.length;)a.pop().removeListener() } catch (b) { } }, restoreAttrs: function () { var a = this._.attrChanges, b, c; for (c in a) a.hasOwnProperty(c) && (b = a[c], null !== b ? this.setAttribute(c, b) : this.removeAttribute(c)) }, attachClass: function (a) { var b = this.getCustomData("classes"); this.hasClass(a) || (!b && (b = []), b.push(a), this.setCustomData("classes", b), this.addClass(a)) }, changeAttr: function (a, b) {
                        var c = this.getAttribute(a);
                        b !== c && (!this._.attrChanges && (this._.attrChanges = {}), a in this._.attrChanges || (this._.attrChanges[a] = c), this.setAttribute(a, b))
                    }, insertText: function (a) { this.editor.focus(); this.insertHtml(this.transformPlainTextToHtml(a), "text") }, transformPlainTextToHtml: function (a) { var b = this.editor.getSelection().getStartElement().hasAscendant("pre", !0) ? CKEDITOR.ENTER_BR : this.editor.activeEnterMode; return CKEDITOR.tools.transformPlainTextToHtml(a, b) }, insertHtml: function (a, b, c) {
                        var f = this.editor; f.focus(); f.fire("saveSnapshot");
                        c || (c = f.getSelection().getRanges()[0]); y(this, b || "html", a, c); c.select(); h(this); this.editor.fire("afterInsertHtml", {})
                    }, insertHtmlIntoRange: function (a, b, c) { y(this, c || "html", a, b); this.editor.fire("afterInsertHtml", { intoRange: b }) }, insertElement: function (a, b) {
                        var f = this.editor; f.focus(); f.fire("saveSnapshot"); var d = f.activeEnterMode, f = f.getSelection(), g = a.getName(), g = CKEDITOR.dtd.$block[g]; b || (b = f.getRanges()[0]); this.insertElementIntoRange(a, b) && (b.moveToPosition(a, CKEDITOR.POSITION_AFTER_END), g && ((g =
                            a.getNext(function (a) { return c(a) && !u(a) })) && g.type == CKEDITOR.NODE_ELEMENT && g.is(CKEDITOR.dtd.$block) ? g.getDtd()["#"] ? b.moveToElementEditStart(g) : b.moveToElementEditEnd(a) : g || d == CKEDITOR.ENTER_BR || (g = b.fixBlock(!0, d == CKEDITOR.ENTER_DIV ? "div" : "p"), b.moveToElementEditStart(g)))); f.selectRanges([b]); h(this)
                    }, insertElementIntoSelection: function (a) { this.insertElement(a) }, insertElementIntoRange: function (a, b) {
                        var c = this.editor, f = c.config.enterMode, d = a.getName(), g = CKEDITOR.dtd.$block[d]; if (b.checkReadOnly()) return !1;
                        b.deleteContents(1); b.startContainer.type == CKEDITOR.NODE_ELEMENT && (b.startContainer.is({ tr: 1, table: 1, tbody: 1, thead: 1, tfoot: 1 }) ? p(b) : b.startContainer.is(CKEDITOR.dtd.$list) && w(b)); var e, h; if (g) for (; (e = b.getCommonAncestor(0, 1)) && (h = CKEDITOR.dtd[e.getName()]) && (!h || !h[d]);)e.getName() in CKEDITOR.dtd.span ? b.splitElement(e) : b.checkStartOfBlock() && b.checkEndOfBlock() ? (b.setStartBefore(e), b.collapse(!0), e.remove()) : b.splitBlock(f == CKEDITOR.ENTER_DIV ? "div" : "p", c.editable()); b.insertNode(a); return !0
                    }, setData: function (a,
                        b) { b || (a = this.editor.dataProcessor.toHtml(a)); this.setHtml(a); this.fixInitialSelection(); "unloaded" == this.status && (this.status = "ready"); this.editor.fire("dataReady") }, getData: function (a) { var b = this.getHtml(); a || (b = this.editor.dataProcessor.toDataFormat(b)); return b }, setReadOnly: function (a) { this.setAttribute("contenteditable", !a) }, detach: function () { this.removeClass("cke_editable"); this.status = "detached"; var a = this.editor; this._.detach(); delete a.document; delete a.window }, isInline: function () { return this.getDocument().equals(CKEDITOR.document) },
                    fixInitialSelection: function () {
                        function a() { var b = c.getDocument().$, f = b.getSelection(), d; a: if (f.anchorNode && f.anchorNode == c.$) d = !0; else { if (CKEDITOR.env.webkit && (d = c.getDocument().getActive()) && d.equals(c) && !f.anchorNode) { d = !0; break a } d = void 0 } d && (d = new CKEDITOR.dom.range(c), d.moveToElementEditStart(c), b = b.createRange(), b.setStart(d.startContainer.$, d.startOffset), b.collapse(!0), f.removeAllRanges(), f.addRange(b)) } function b() {
                            var a = c.getDocument().$, f = a.selection, d = c.getDocument().getActive(); "None" ==
                                f.type && d.equals(c) && (f = new CKEDITOR.dom.range(c), a = a.body.createTextRange(), f.moveToElementEditStart(c), f = f.startContainer, f.type != CKEDITOR.NODE_ELEMENT && (f = f.getParent()), a.moveToElementText(f.$), a.collapse(!0), a.select())
                        } var c = this; if (CKEDITOR.env.ie && (9 > CKEDITOR.env.version || CKEDITOR.env.quirks)) this.hasFocus && (this.focus(), b()); else if (this.hasFocus) this.focus(), a(); else this.once("focus", function () { a() }, null, null, -999)
                    }, getHtmlFromRange: function (a) {
                        if (a.collapsed) return new CKEDITOR.dom.documentFragment(a.document);
                        a = { doc: this.getDocument(), range: a.clone() }; q.eol.detect(a, this); q.bogus.exclude(a); q.cell.shrink(a); a.fragment = a.range.cloneContents(); q.tree.rebuild(a, this); q.eol.fix(a, this); return new CKEDITOR.dom.documentFragment(a.fragment.$)
                    }, extractHtmlFromRange: function (a, b) {
                        var c = B, f = { range: a, doc: a.document }, d = this.getHtmlFromRange(a); if (a.collapsed) return a.optimize(), d; a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); c.table.detectPurge(f); f.bookmark = a.createBookmark(); delete f.range; var g = this.editor.createRange();
                        g.moveToPosition(f.bookmark.startNode, CKEDITOR.POSITION_BEFORE_START); f.targetBookmark = g.createBookmark(); c.list.detectMerge(f, this); c.table.detectRanges(f, this); c.block.detectMerge(f, this); f.tableContentsRanges ? (c.table.deleteRanges(f), a.moveToBookmark(f.bookmark), f.range = a) : (a.moveToBookmark(f.bookmark), f.range = a, a.extractContents(c.detectExtractMerge(f))); a.moveToBookmark(f.targetBookmark); a.optimize(); c.fixUneditableRangePosition(a); c.list.merge(f, this); c.table.purge(f, this); c.block.merge(f, this);
                        if (b) { c = a.startPath(); if (f = a.checkStartOfBlock() && a.checkEndOfBlock() && c.block && !a.root.equals(c.block)) { a: { var f = c.block.getElementsByTag("span"), g = 0, e; if (f) for (; e = f.getItem(g++);)if (!n(e)) { f = !0; break a } f = !1 } f = !f } f && (a.moveToPosition(c.block, CKEDITOR.POSITION_BEFORE_START), c.block.remove()) } else c.autoParagraph(this.editor, a), r(a.startContainer) && a.startContainer.appendBogus(); a.startContainer.mergeSiblings(); return d
                    }, setup: function () {
                        var a = this.editor; this.attachListener(a, "beforeGetData", function () {
                            var b =
                                this.getData(); this.is("textarea") || !1 !== a.config.ignoreEmptyParagraph && (b = b.replace(v, function (a, b) { return b })); a.setData(b, null, 1)
                        }, this); this.attachListener(a, "getSnapshot", function (a) { a.data = this.getData(1) }, this); this.attachListener(a, "afterSetData", function () { this.setData(a.getData(1)) }, this); this.attachListener(a, "loadSnapshot", function (a) { this.setData(a.data, 1) }, this); this.attachListener(a, "beforeFocus", function () { var b = a.getSelection(); (b = b && b.getNative()) && "Control" == b.type || this.focus() },
                            this); this.attachListener(a, "insertHtml", function (a) { this.insertHtml(a.data.dataValue, a.data.mode, a.data.range) }, this); this.attachListener(a, "insertElement", function (a) { this.insertElement(a.data) }, this); this.attachListener(a, "insertText", function (a) { this.insertText(a.data) }, this); this.setReadOnly(a.readOnly); this.attachClass("cke_editable"); a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? this.attachClass("cke_editable_inline") : a.elementMode != CKEDITOR.ELEMENT_MODE_REPLACE && a.elementMode != CKEDITOR.ELEMENT_MODE_APPENDTO ||
                                this.attachClass("cke_editable_themed"); this.attachClass("cke_contents_" + a.config.contentsLangDirection); a.keystrokeHandler.blockedKeystrokes[8] = +a.readOnly; a.keystrokeHandler.attach(this); this.on("blur", function () { this.hasFocus = !1 }, null, null, -1); this.on("focus", function () { this.hasFocus = !0 }, null, null, -1); if (CKEDITOR.env.webkit) this.on("scroll", function () { a._.previousScrollTop = a.editable().$.scrollTop }, null, null, -1); if (CKEDITOR.env.edge && 14 < CKEDITOR.env.version) {
                                    var d = function () {
                                        var b = a.editable();
                                        null != a._.previousScrollTop && b.getDocument().equals(CKEDITOR.document) && (b.$.scrollTop = a._.previousScrollTop, a._.previousScrollTop = null, this.removeListener("scroll", d))
                                    }; this.on("scroll", d)
                                } a.focusManager.add(this); this.equals(CKEDITOR.document.getActive()) && (this.hasFocus = !0, a.once("contentDom", function () { a.focusManager.focus(this) }, this)); this.isInline() && this.changeAttr("tabindex", a.tabIndex); if (!this.is("textarea")) {
                                    a.document = this.getDocument(); a.window = this.getWindow(); var g = a.document; this.changeAttr("spellcheck",
                                        !a.config.disableNativeSpellChecker); var e = a.config.contentsLangDirection; this.getDirection(1) != e && this.changeAttr("dir", e); var h = CKEDITOR.getCss(); if (h) { var e = g.getHead(), k = e.getCustomData("stylesheet"); k ? h != k.getText() && (CKEDITOR.env.ie && 9 > CKEDITOR.env.version ? k.$.styleSheet.cssText = h : k.setText(h)) : (h = g.appendStyleText(h), h = new CKEDITOR.dom.element(h.ownerNode || h.owningElement), e.setCustomData("stylesheet", h), h.data("cke-temp", 1)) } e = g.getCustomData("stylesheet_ref") || 0; g.setCustomData("stylesheet_ref",
                                            e + 1); this.setCustomData("cke_includeReadonly", !a.config.disableReadonlyStyling); this.attachListener(this, "click", function (a) { a = a.data; var b = (new CKEDITOR.dom.elementPath(a.getTarget(), this)).contains("a"); b && 2 != a.$.button && b.isReadOnly() && a.preventDefault() }); var n = { 8: 1, 46: 1 }; this.attachListener(a, "key", function (b) {
                                                if (a.readOnly) return !0; var c = b.data.domEvent.getKey(), d; b = a.getSelection(); if (0 !== b.getRanges().length) {
                                                    if (c in n) {
                                                        var g, e = b.getRanges()[0], h = e.startPath(), m, k, p, c = 8 == c; CKEDITOR.env.ie &&
                                                            11 > CKEDITOR.env.version && (g = b.getSelectedElement()) || (g = l(b)) ? (a.fire("saveSnapshot"), e.moveToPosition(g, CKEDITOR.POSITION_BEFORE_START), g.remove(), e.select(), a.fire("saveSnapshot"), d = 1) : e.collapsed && ((m = h.block) && (p = m[c ? "getPrevious" : "getNext"](f)) && p.type == CKEDITOR.NODE_ELEMENT && p.is("table") && e[c ? "checkStartOfBlock" : "checkEndOfBlock"]() ? (a.fire("saveSnapshot"), e[c ? "checkEndOfBlock" : "checkStartOfBlock"]() && m.remove(), e["moveToElementEdit" + (c ? "End" : "Start")](p), e.select(), a.fire("saveSnapshot"),
                                                                d = 1) : h.blockLimit && h.blockLimit.is("td") && (k = h.blockLimit.getAscendant("table")) && e.checkBoundaryOfElement(k, c ? CKEDITOR.START : CKEDITOR.END) && (p = k[c ? "getPrevious" : "getNext"](f)) ? (a.fire("saveSnapshot"), e["moveToElementEdit" + (c ? "End" : "Start")](p), e.checkStartOfBlock() && e.checkEndOfBlock() ? p.remove() : e.select(), a.fire("saveSnapshot"), d = 1) : (k = h.contains(["td", "th", "caption"])) && e.checkBoundaryOfElement(k, c ? CKEDITOR.START : CKEDITOR.END) && (d = 1))
                                                    } return !d
                                                }
                                            }); a.blockless && CKEDITOR.env.ie && CKEDITOR.env.needsBrFiller &&
                                                this.attachListener(this, "keyup", function (b) { b.data.getKeystroke() in n && !this.getFirst(c) && (this.appendBogus(), b = a.createRange(), b.moveToPosition(this, CKEDITOR.POSITION_AFTER_START), b.select()) }); this.attachListener(this, "dblclick", function (b) { if (a.readOnly) return !1; b = { element: b.data.getTarget() }; a.fire("doubleclick", b) }); CKEDITOR.env.ie && this.attachListener(this, "click", b); CKEDITOR.env.ie && !CKEDITOR.env.edge || this.attachListener(this, "mousedown", function (b) {
                                                    var c = b.data.getTarget(); c.is("img", "hr",
                                                        "input", "textarea", "select") && !c.isReadOnly() && (a.getSelection().selectElement(c), c.is("input", "textarea", "select") && b.data.preventDefault())
                                                }); CKEDITOR.env.edge && this.attachListener(this, "mouseup", function (b) { (b = b.data.getTarget()) && b.is("img") && !b.isReadOnly() && a.getSelection().selectElement(b) }); CKEDITOR.env.gecko && this.attachListener(this, "mouseup", function (b) {
                                                    if (2 == b.data.$.button && (b = b.data.getTarget(), !b.getAscendant("table") && !b.getOuterHtml().replace(v, ""))) {
                                                        var c = a.createRange(); c.moveToElementEditStart(b);
                                                        c.select(!0)
                                                    }
                                                }); CKEDITOR.env.webkit && (this.attachListener(this, "click", function (a) { a.data.getTarget().is("input", "select") && a.data.preventDefault() }), this.attachListener(this, "mouseup", function (a) { a.data.getTarget().is("input", "textarea") && a.data.preventDefault() })); CKEDITOR.env.webkit && this.attachListener(a, "key", function (b) {
                                                    if (a.readOnly) return !0; var c = b.data.domEvent.getKey(); if (c in n && (b = a.getSelection(), 0 !== b.getRanges().length)) {
                                                        var c = 8 == c, f = b.getRanges()[0]; b = f.startPath(); if (f.collapsed) a: {
                                                            var d =
                                                                b.block; if (d && f[c ? "checkStartOfBlock" : "checkEndOfBlock"]() && f.moveToClosestEditablePosition(d, !c) && f.collapsed) {
                                                                    if (f.startContainer.type == CKEDITOR.NODE_ELEMENT) { var g = f.startContainer.getChild(f.startOffset - (c ? 1 : 0)); if (g && g.type == CKEDITOR.NODE_ELEMENT && g.is("hr")) { a.fire("saveSnapshot"); g.remove(); b = !0; break a } } f = f.startPath().block; if (!f || f && f.contains(d)) b = void 0; else {
                                                                        a.fire("saveSnapshot"); var e; (e = (c ? f : d).getBogus()) && e.remove(); e = a.getSelection(); g = e.createBookmarks(); (c ? d : f).moveChildren(c ?
                                                                            f : d, !1); b.lastElement.mergeSiblings(); m(d, f, !c); e.selectBookmarks(g); b = !0
                                                                    }
                                                                } else b = !1
                                                        } else c = f, e = b.block, f = c.endPath().block, e && f && !e.equals(f) ? (a.fire("saveSnapshot"), (d = e.getBogus()) && d.remove(), c.enlarge(CKEDITOR.ENLARGE_INLINE), c.deleteContents(), f.getParent() && (f.moveChildren(e, !1), b.lastElement.mergeSiblings(), m(e, f, !0)), c = a.getSelection().getRanges()[0], c.collapse(1), c.optimize(), "" === c.startContainer.getHtml() && c.startContainer.appendBogus(), c.select(), b = !0) : b = !1; if (!b) return; a.getSelection().scrollIntoView();
                                                        a.fire("saveSnapshot"); return !1
                                                    }
                                                }, this, null, 100)
                                }
                    }
                }, _: {
                    detach: function () {
                        this.editor.setData(this.editor.getData(), 0, 1); this.clearListeners(); this.restoreAttrs(); var a; if (a = this.removeCustomData("classes")) for (; a.length;)this.removeClass(a.pop()); if (!this.is("textarea")) { a = this.getDocument(); var b = a.getHead(); if (b.getCustomData("stylesheet")) { var c = a.getCustomData("stylesheet_ref"); --c ? a.setCustomData("stylesheet_ref", c) : (a.removeCustomData("stylesheet_ref"), b.removeCustomData("stylesheet").remove()) } } this.editor.fire("contentDomUnload");
                        delete this.editor
                    }
                }
            }); CKEDITOR.editor.prototype.editable = function (a) { var b = this._.editable; if (b && a) return 0; arguments.length && (b = this._.editable = a ? a instanceof CKEDITOR.editable ? a : new CKEDITOR.editable(this, a) : (b && b.detach(), null)); return b }; CKEDITOR.on("instanceLoaded", function (b) {
                var c = b.editor; c.on("insertElement", function (a) {
                    a = a.data; a.type == CKEDITOR.NODE_ELEMENT && (a.is("input") || a.is("textarea")) && ("false" != a.getAttribute("contentEditable") && a.data("cke-editable", a.hasAttribute("contenteditable") ?
                        "true" : "1"), a.setAttribute("contentEditable", !1))
                }); c.on("selectionChange", function (b) { if (!c.readOnly) { var f = c.getSelection(); f && !f.isLocked && (f = c.checkDirty(), c.fire("lockSnapshot"), a(b), c.fire("unlockSnapshot"), !f && c.resetDirty()) } })
            }); CKEDITOR.on("instanceCreated", function (a) {
                var b = a.editor; b.on("mode", function () {
                    var a = b.editable(); if (a && a.isInline()) {
                        var c = b.title; a.changeAttr("role", "textbox"); a.changeAttr("aria-multiline", "true"); a.changeAttr("aria-label", c); c && a.changeAttr("title", c); var f =
                            b.fire("ariaEditorHelpLabel", {}).label; if (f && (c = this.ui.space(this.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? "top" : "contents"))) { var d = CKEDITOR.tools.getNextId(), f = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + d + '" class\x3d"cke_voice_label"\x3e' + f + "\x3c/span\x3e"); c.append(f); a.changeAttr("aria-describedby", d) }
                    }
                })
            }); CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}"); f = CKEDITOR.dom.walker.whitespaces(!0); n = CKEDITOR.dom.walker.bookmark(!1,
                !0); r = CKEDITOR.dom.walker.empty(); u = CKEDITOR.dom.walker.bogus(); v = /(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi; y = function () {
                    function a(b) { return b.type == CKEDITOR.NODE_ELEMENT } function b(c, f) {
                        var d, g, e, h, m = [], k = f.range.startContainer; d = f.range.startPath(); for (var k = n[k.getName()], l = 0, p = c.getChildren(), r = p.count(), q = -1, F = -1, w = 0, v = d.contains(n.$list); l < r; ++l)d = p.getItem(l), a(d) ? (e = d.getName(), v && e in CKEDITOR.dtd.$list ?
                            m = m.concat(b(d, f)) : (h = !!k[e], "br" != e || !d.data("cke-eol") || l && l != r - 1 || (w = (g = l ? m[l - 1].node : p.getItem(l + 1)) && (!a(g) || !g.is("br")), g = g && a(g) && n.$block[g.getName()]), -1 != q || h || (q = l), h || (F = l), m.push({ isElement: 1, isLineBreak: w, isBlock: d.isBlockBoundary(), hasBlockSibling: g, node: d, name: e, allowed: h }), g = w = 0)) : m.push({ isElement: 0, node: d, allowed: 1 }); -1 < q && (m[q].firstNotAllowed = 1); -1 < F && (m[F].lastNotAllowed = 1); return m
                    } function f(b, c) {
                        var d = [], g = b.getChildren(), e = g.count(), h, m = 0, k = n[c], l = !b.is(n.$inline) || b.is("br");
                        for (l && d.push(" "); m < e; m++)h = g.getItem(m), a(h) && !h.is(k) ? d = d.concat(f(h, c)) : d.push(h); l && d.push(" "); return d
                    } function d(b) { return a(b.startContainer) && b.startContainer.getChild(b.startOffset - 1) } function e(b) { return b && a(b) && (b.is(n.$removeEmpty) || b.is("a") && !b.isBlockBoundary()) } function h(b, c, f, d) {
                        var g = b.clone(), e, m; g.setEndAt(c, CKEDITOR.POSITION_BEFORE_END); (e = (new CKEDITOR.dom.walker(g)).next()) && a(e) && l[e.getName()] && (m = e.getPrevious()) && a(m) && !m.getParent().equals(b.startContainer) && f.contains(m) &&
                            d.contains(e) && e.isIdentical(m) && (e.moveChildren(m), e.remove(), h(b, c, f, d))
                    } function m(b, c) { function f(b, c) { if (c.isBlock && c.isElement && !c.node.is("br") && a(b) && b.is("br")) return b.remove(), 1 } var d = c.endContainer.getChild(c.endOffset), g = c.endContainer.getChild(c.endOffset - 1); d && f(d, b[b.length - 1]); g && f(g, b[0]) && (c.setEnd(c.endContainer, c.endOffset - 1), c.collapse()) } var n = CKEDITOR.dtd, l = { p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, ul: 1, ol: 1, li: 1, pre: 1, dl: 1, blockquote: 1 }, p = {
                        p: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1,
                        h6: 1
                    }, r = CKEDITOR.tools.extend({}, n.$inline); delete r.br; return function (l, D, q, w) {
                        var v = l.editor, y = !1; "unfiltered_html" == D && (D = "html", y = !0); if (!w.checkReadOnly()) {
                            var I = (new CKEDITOR.dom.elementPath(w.startContainer, w.root)).blockLimit || w.root; l = { type: D, dontFilter: y, editable: l, editor: v, range: w, blockLimit: I, mergeCandidates: [], zombies: [] }; D = l.range; w = l.mergeCandidates; var u, B; "text" == l.type && D.shrink(CKEDITOR.SHRINK_ELEMENT, !0, !1) && (u = CKEDITOR.dom.element.createFromHtml("\x3cspan\x3e\x26nbsp;\x3c/span\x3e",
                                D.document), D.insertNode(u), D.setStartAfter(u)); y = new CKEDITOR.dom.elementPath(D.startContainer); l.endPath = I = new CKEDITOR.dom.elementPath(D.endContainer); if (!D.collapsed) { var v = I.block || I.blockLimit, da = D.getCommonAncestor(); v && !v.equals(da) && !v.contains(da) && D.checkEndOfBlock() && l.zombies.push(v); D.deleteContents() } for (; (B = d(D)) && a(B) && B.isBlockBoundary() && y.contains(B);)D.moveToPosition(B, CKEDITOR.POSITION_BEFORE_END); h(D, l.blockLimit, y, I); u && (D.setEndBefore(u), D.collapse(), u.remove()); u = D.startPath();
                            if (v = u.contains(e, !1, 1)) D.splitElement(v), l.inlineStylesRoot = v, l.inlineStylesPeak = u.lastElement; u = D.createBookmark(); (v = u.startNode.getPrevious(c)) && a(v) && e(v) && w.push(v); (v = u.startNode.getNext(c)) && a(v) && e(v) && w.push(v); for (v = u.startNode; (v = v.getParent()) && e(v);)w.push(v); D.moveToBookmark(u); if (u = q) {
                                u = l.range; if ("text" == l.type && l.inlineStylesRoot) {
                                    B = l.inlineStylesPeak; D = B.getDocument().createText("{cke-peak}"); for (w = l.inlineStylesRoot.getParent(); !B.equals(w);)D = D.appendTo(B.clone()), B = B.getParent();
                                    q = D.getOuterHtml().split("{cke-peak}").join(q)
                                } B = l.blockLimit.getName(); if (/^\s+|\s+$/.test(q) && "span" in CKEDITOR.dtd[B]) { var P = '\x3cspan data-cke-marker\x3d"1"\x3e\x26nbsp;\x3c/span\x3e'; q = P + q + P } q = l.editor.dataProcessor.toHtml(q, { context: null, fixForBody: !1, protectedWhitespaces: !!P, dontFilter: l.dontFilter, filter: l.editor.activeFilter, enterMode: l.editor.activeEnterMode }); B = u.document.createElement("body"); B.setHtml(q); P && (B.getFirst().remove(), B.getLast().remove()); if ((P = u.startPath().block) && (1 !=
                                    P.getChildCount() || !P.getBogus())) a: { var Q; if (1 == B.getChildCount() && a(Q = B.getFirst()) && Q.is(p) && !Q.hasAttribute("contenteditable")) { P = Q.getElementsByTag("*"); u = 0; for (w = P.count(); u < w; u++)if (D = P.getItem(u), !D.is(r)) break a; Q.moveChildren(Q.getParent(1)); Q.remove() } } l.dataWrapper = B; u = q
                            } if (u) {
                                Q = l.range; u = Q.document; var M; B = l.blockLimit; w = 0; var U, P = [], T, O; q = v = 0; var W, aa; D = Q.startContainer; var y = l.endPath.elements[0], ba, I = y.getPosition(D), da = !!y.getCommonAncestor(D) && I != CKEDITOR.POSITION_IDENTICAL && !(I &
                                    CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED); D = b(l.dataWrapper, l); for (m(D, Q); w < D.length; w++) {
                                        I = D[w]; if (M = I.isLineBreak) { M = Q; W = B; var Y = void 0, ca = void 0; I.hasBlockSibling ? M = 1 : (Y = M.startContainer.getAscendant(n.$block, 1)) && Y.is({ div: 1, p: 1 }) ? (ca = Y.getPosition(W), ca == CKEDITOR.POSITION_IDENTICAL || ca == CKEDITOR.POSITION_CONTAINS ? M = 0 : (W = M.splitElement(Y), M.moveToPosition(W, CKEDITOR.POSITION_AFTER_START), M = 1)) : M = 0 } if (M) q = 0 < w; else {
                                            M = Q.startPath(); !I.isBlock && k(l.editor, M.block, M.blockLimit) && (O =
                                                g(l.editor)) && (O = u.createElement(O), O.appendBogus(), Q.insertNode(O), CKEDITOR.env.needsBrFiller && (U = O.getBogus()) && U.remove(), Q.moveToPosition(O, CKEDITOR.POSITION_BEFORE_END)); if ((M = Q.startPath().block) && !M.equals(T)) { if (U = M.getBogus()) U.remove(), P.push(M); T = M } I.firstNotAllowed && (v = 1); if (v && I.isElement) {
                                                    M = Q.startContainer; for (W = null; M && !n[M.getName()][I.name];) { if (M.equals(B)) { M = null; break } W = M; M = M.getParent() } if (M) W && (aa = Q.splitElement(W), l.zombies.push(aa), l.zombies.push(W)); else {
                                                        W = B.getName(); ba =
                                                            !w; M = w == D.length - 1; W = f(I.node, W); for (var Y = [], ca = W.length, ea = 0, ia = void 0, ja = 0, fa = -1; ea < ca; ea++)ia = W[ea], " " == ia ? (ja || ba && !ea || (Y.push(new CKEDITOR.dom.text(" ")), fa = Y.length), ja = 1) : (Y.push(ia), ja = 0); M && fa == Y.length && Y.pop(); ba = Y
                                                    }
                                                } if (ba) { for (; M = ba.pop();)Q.insertNode(M); ba = 0 } else Q.insertNode(I.node); I.lastNotAllowed && w < D.length - 1 && ((aa = da ? y : aa) && Q.setEndAt(aa, CKEDITOR.POSITION_AFTER_START), v = 0); Q.collapse()
                                        }
                                    } 1 != D.length ? U = !1 : (U = D[0], U = U.isElement && "false" == U.node.getAttribute("contenteditable"));
                                U && (q = !0, M = D[0].node, Q.setStartAt(M, CKEDITOR.POSITION_BEFORE_START), Q.setEndAt(M, CKEDITOR.POSITION_AFTER_END)); l.dontMoveCaret = q; l.bogusNeededBlocks = P
                            } U = l.range; var ga; aa = l.bogusNeededBlocks; for (ba = U.createBookmark(); T = l.zombies.pop();)T.getParent() && (O = U.clone(), O.moveToElementEditStart(T), O.removeEmptyBlocksAtEnd()); if (aa) for (; T = aa.pop();)CKEDITOR.env.needsBrFiller ? T.appendBogus() : T.append(U.document.createText(" ")); for (; T = l.mergeCandidates.pop();)T.mergeSiblings(); U.moveToBookmark(ba); if (!l.dontMoveCaret) {
                                for (T =
                                    d(U); T && a(T) && !T.is(n.$empty);) { if (T.isBlockBoundary()) U.moveToPosition(T, CKEDITOR.POSITION_BEFORE_END); else { if (e(T) && T.getHtml().match(/(\s|&nbsp;)$/g)) { ga = null; break } ga = U.clone(); ga.moveToPosition(T, CKEDITOR.POSITION_BEFORE_END) } T = T.getLast(c) } ga && U.moveToRange(ga)
                            }
                        }
                    }
                }(); p = function () {
                    function a(b) {
                        b = new CKEDITOR.dom.walker(b); b.guard = function (a, b) { if (b) return !1; if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$tableContent) }; b.evaluator = function (a) { return a.type == CKEDITOR.NODE_ELEMENT };
                        return b
                    } function b(a, c, f) { c = a.getDocument().createElement(c); a.append(c, f); return c } function c(a) { var b = a.count(), f; for (b; 0 < b--;)f = a.getItem(b), CKEDITOR.tools.trim(f.getHtml()) || (f.appendBogus(), CKEDITOR.env.ie && 9 > CKEDITOR.env.version && f.getChildCount() && f.getFirst().remove()) } return function (f) {
                        var d = f.startContainer, g = d.getAscendant("table", 1), e = !1; c(g.getElementsByTag("td")); c(g.getElementsByTag("th")); g = f.clone(); g.setStart(d, 0); g = a(g).lastBackward(); g || (g = f.clone(), g.setEndAt(d, CKEDITOR.POSITION_BEFORE_END),
                            g = a(g).lastForward(), e = !0); g || (g = d); g.is("table") ? (f.setStartAt(g, CKEDITOR.POSITION_BEFORE_START), f.collapse(!0), g.remove()) : (g.is({ tbody: 1, thead: 1, tfoot: 1 }) && (g = b(g, "tr", e)), g.is("tr") && (g = b(g, g.getParent().is("thead") ? "th" : "td", e)), (d = g.getBogus()) && d.remove(), f.moveToPosition(g, e ? CKEDITOR.POSITION_AFTER_START : CKEDITOR.POSITION_BEFORE_END))
                    }
                }(); w = function () {
                    function a(b) {
                        b = new CKEDITOR.dom.walker(b); b.guard = function (a, b) {
                            if (b) return !1; if (a.type == CKEDITOR.NODE_ELEMENT) return a.is(CKEDITOR.dtd.$list) ||
                                a.is(CKEDITOR.dtd.$listItem)
                        }; b.evaluator = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.is(CKEDITOR.dtd.$listItem) }; return b
                    } return function (b) {
                        var c = b.startContainer, f = !1, d; d = b.clone(); d.setStart(c, 0); d = a(d).lastBackward(); d || (d = b.clone(), d.setEndAt(c, CKEDITOR.POSITION_BEFORE_END), d = a(d).lastForward(), f = !0); d || (d = c); d.is(CKEDITOR.dtd.$list) ? (b.setStartAt(d, CKEDITOR.POSITION_BEFORE_START), b.collapse(!0), d.remove()) : ((c = d.getBogus()) && c.remove(), b.moveToPosition(d, f ? CKEDITOR.POSITION_AFTER_START :
                            CKEDITOR.POSITION_BEFORE_END), b.select())
                    }
                }(); q = {
                    eol: {
                        detect: function (a, b) { var c = a.range, f = c.clone(), d = c.clone(), g = new CKEDITOR.dom.elementPath(c.startContainer, b), e = new CKEDITOR.dom.elementPath(c.endContainer, b); f.collapse(1); d.collapse(); g.block && f.checkBoundaryOfElement(g.block, CKEDITOR.END) && (c.setStartAfter(g.block), a.prependEolBr = 1); e.block && d.checkBoundaryOfElement(e.block, CKEDITOR.START) && (c.setEndBefore(e.block), a.appendEolBr = 1) }, fix: function (a, b) {
                            var c = b.getDocument(), f; a.appendEolBr && (f =
                                this.createEolBr(c), a.fragment.append(f)); !a.prependEolBr || f && !f.getPrevious() || a.fragment.append(this.createEolBr(c), 1)
                        }, createEolBr: function (a) { return a.createElement("br", { attributes: { "data-cke-eol": 1 } }) }
                    }, bogus: { exclude: function (a) { var b = a.range.getBoundaryNodes(), c = b.startNode, b = b.endNode; !b || !u(b) || c && c.equals(b) || a.range.setEndBefore(b) } }, tree: {
                        rebuild: function (a, b) {
                            var c = a.range, f = c.getCommonAncestor(), d = new CKEDITOR.dom.elementPath(f, b), g = new CKEDITOR.dom.elementPath(c.startContainer, b),
                            c = new CKEDITOR.dom.elementPath(c.endContainer, b), e; f.type == CKEDITOR.NODE_TEXT && (f = f.getParent()); if (d.blockLimit.is({ tr: 1, table: 1 })) { var h = d.contains("table").getParent(); e = function (a) { return !a.equals(h) } } else if (d.block && d.block.is(CKEDITOR.dtd.$listItem) && (g = g.contains(CKEDITOR.dtd.$list), c = c.contains(CKEDITOR.dtd.$list), !g.equals(c))) { var m = d.contains(CKEDITOR.dtd.$list).getParent(); e = function (a) { return !a.equals(m) } } e || (e = function (a) { return !a.equals(d.block) && !a.equals(d.blockLimit) }); this.rebuildFragment(a,
                                b, f, e)
                        }, rebuildFragment: function (a, b, c, f) { for (var d; c && !c.equals(b) && f(c);)d = c.clone(0, 1), a.fragment.appendTo(d), a.fragment = d, c = c.getParent() }
                    }, cell: { shrink: function (a) { a = a.range; var b = a.startContainer, c = a.endContainer, f = a.startOffset, d = a.endOffset; b.type == CKEDITOR.NODE_ELEMENT && b.equals(c) && b.is("tr") && ++f == d && a.shrink(CKEDITOR.SHRINK_TEXT) } }
                }; B = function () {
                    function a(b, c) { var f = b.getParent(); if (f.is(CKEDITOR.dtd.$inline)) b[c ? "insertBefore" : "insertAfter"](f) } function b(c, f, d) {
                        a(f); a(d, 1); for (var g; g =
                            d.getNext();)g.insertAfter(f), f = g; r(c) && c.remove()
                    } function c(a, b) { var f = new CKEDITOR.dom.range(a); f.setStartAfter(b.startNode); f.setEndBefore(b.endNode); return f } return {
                        list: {
                            detectMerge: function (a, b) {
                                var f = c(b, a.bookmark), d = f.startPath(), g = f.endPath(), e = d.contains(CKEDITOR.dtd.$list), h = g.contains(CKEDITOR.dtd.$list); a.mergeList = e && h && e.getParent().equals(h.getParent()) && !e.equals(h); a.mergeListItems = d.block && g.block && d.block.is(CKEDITOR.dtd.$listItem) && g.block.is(CKEDITOR.dtd.$listItem); if (a.mergeList ||
                                    a.mergeListItems) f = f.clone(), f.setStartBefore(a.bookmark.startNode), f.setEndAfter(a.bookmark.endNode), a.mergeListBookmark = f.createBookmark()
                            }, merge: function (a, c) {
                                if (a.mergeListBookmark) {
                                    var f = a.mergeListBookmark.startNode, d = a.mergeListBookmark.endNode, g = new CKEDITOR.dom.elementPath(f, c), e = new CKEDITOR.dom.elementPath(d, c); if (a.mergeList) { var h = g.contains(CKEDITOR.dtd.$list), m = e.contains(CKEDITOR.dtd.$list); h.equals(m) || (m.moveChildren(h), m.remove()) } a.mergeListItems && (g = g.contains(CKEDITOR.dtd.$listItem),
                                        e = e.contains(CKEDITOR.dtd.$listItem), g.equals(e) || b(e, f, d)); f.remove(); d.remove()
                                }
                            }
                        }, block: {
                            detectMerge: function (a, b) { if (!a.tableContentsRanges && !a.mergeListBookmark) { var c = new CKEDITOR.dom.range(b); c.setStartBefore(a.bookmark.startNode); c.setEndAfter(a.bookmark.endNode); a.mergeBlockBookmark = c.createBookmark() } }, merge: function (a, c) {
                                if (a.mergeBlockBookmark && !a.purgeTableBookmark) {
                                    var f = a.mergeBlockBookmark.startNode, d = a.mergeBlockBookmark.endNode, g = new CKEDITOR.dom.elementPath(f, c), e = new CKEDITOR.dom.elementPath(d,
                                        c), g = g.block, e = e.block; g && e && !g.equals(e) && b(e, f, d); f.remove(); d.remove()
                                }
                            }
                        }, table: function () {
                            function a(c) {
                                var d = [], g, e = new CKEDITOR.dom.walker(c), h = c.startPath().contains(f), m = c.endPath().contains(f), k = {}; e.guard = function (a, e) {
                                    if (a.type == CKEDITOR.NODE_ELEMENT) { var l = "visited_" + (e ? "out" : "in"); if (a.getCustomData(l)) return; CKEDITOR.dom.element.setMarker(k, a, l, 1) } if (e && h && a.equals(h)) g = c.clone(), g.setEndAt(h, CKEDITOR.POSITION_BEFORE_END), d.push(g); else if (!e && m && a.equals(m)) g = c.clone(), g.setStartAt(m,
                                        CKEDITOR.POSITION_AFTER_START), d.push(g); else { if (l = !e) l = a.type == CKEDITOR.NODE_ELEMENT && a.is(f) && (!h || b(a, h)) && (!m || b(a, m)); if (!l && (l = e)) if (a.is(f)) var l = h && h.getAscendant("table", !0), n = m && m.getAscendant("table", !0), p = a.getAscendant("table", !0), l = l && l.contains(p) || n && n.contains(p); else l = void 0; l && (g = c.clone(), g.selectNodeContents(a), d.push(g)) }
                                }; e.lastForward(); CKEDITOR.dom.element.clearAllMarkers(k); return d
                            } function b(a, c) {
                                var f = CKEDITOR.POSITION_CONTAINS + CKEDITOR.POSITION_IS_CONTAINED, d = a.getPosition(c);
                                return d === CKEDITOR.POSITION_IDENTICAL ? !1 : 0 === (d & f)
                            } var f = { td: 1, th: 1, caption: 1 }; return {
                                detectPurge: function (a) {
                                    var b = a.range, c = b.clone(); c.enlarge(CKEDITOR.ENLARGE_ELEMENT); var c = new CKEDITOR.dom.walker(c), d = 0; c.evaluator = function (a) { a.type == CKEDITOR.NODE_ELEMENT && a.is(f) && ++d }; c.checkForward(); if (1 < d) {
                                        var c = b.startPath().contains("table"), g = b.endPath().contains("table"); c && g && b.checkBoundaryOfElement(c, CKEDITOR.START) && b.checkBoundaryOfElement(g, CKEDITOR.END) && (b = a.range.clone(), b.setStartBefore(c),
                                            b.setEndAfter(g), a.purgeTableBookmark = b.createBookmark())
                                    }
                                }, detectRanges: function (d, g) {
                                    var e = c(g, d.bookmark), h = e.clone(), m, k, l = e.getCommonAncestor(); l.is(CKEDITOR.dtd.$tableContent) && !l.is(f) && (l = l.getAscendant("table", !0)); k = l; l = new CKEDITOR.dom.elementPath(e.startContainer, k); k = new CKEDITOR.dom.elementPath(e.endContainer, k); l = l.contains("table"); k = k.contains("table"); if (l || k) l && k && b(l, k) ? (d.tableSurroundingRange = h, h.setStartAt(l, CKEDITOR.POSITION_AFTER_END), h.setEndAt(k, CKEDITOR.POSITION_BEFORE_START),
                                        h = e.clone(), h.setEndAt(l, CKEDITOR.POSITION_AFTER_END), m = e.clone(), m.setStartAt(k, CKEDITOR.POSITION_BEFORE_START), m = a(h).concat(a(m))) : l ? k || (d.tableSurroundingRange = h, h.setStartAt(l, CKEDITOR.POSITION_AFTER_END), e.setEndAt(l, CKEDITOR.POSITION_AFTER_END)) : (d.tableSurroundingRange = h, h.setEndAt(k, CKEDITOR.POSITION_BEFORE_START), e.setStartAt(k, CKEDITOR.POSITION_AFTER_START)), d.tableContentsRanges = m ? m : a(e)
                                }, deleteRanges: function (a) {
                                    for (var b; b = a.tableContentsRanges.pop();)b.extractContents(), r(b.startContainer) &&
                                        b.startContainer.appendBogus(); a.tableSurroundingRange && a.tableSurroundingRange.extractContents()
                                }, purge: function (a) { if (a.purgeTableBookmark) { var b = a.doc, c = a.range.clone(), b = b.createElement("p"); b.insertBefore(a.purgeTableBookmark.startNode); c.moveToBookmark(a.purgeTableBookmark); c.deleteContents(); a.range.moveToPosition(b, CKEDITOR.POSITION_AFTER_START) } }
                            }
                        }(), detectExtractMerge: function (a) { return !(a.range.startPath().contains(CKEDITOR.dtd.$listItem) && a.range.endPath().contains(CKEDITOR.dtd.$listItem)) },
                        fixUneditableRangePosition: function (a) { a.startContainer.getDtd()["#"] || a.moveToClosestEditablePosition(null, !0) }, autoParagraph: function (a, b) { var c = b.startPath(), f; k(a, c.block, c.blockLimit) && (f = g(a)) && (f = b.document.createElement(f), f.appendBogus(), b.insertNode(f), b.moveToPosition(f, CKEDITOR.POSITION_AFTER_START)) }
                    }
                }()
        }(), function () {
            function a(a) { return CKEDITOR.plugins.widget && CKEDITOR.plugins.widget.isDomWidget(a) } function e(b, c) {
                if (0 === b.length || a(b[0].getEnclosedNode())) return !1; var f, d; if ((f = !c &&
                    1 === b.length) && !(f = b[0].collapsed)) { var g = b[0]; f = g.startContainer.getAscendant({ td: 1, th: 1 }, !0); var e = g.endContainer.getAscendant({ td: 1, th: 1 }, !0); d = CKEDITOR.tools.trim; f && f.equals(e) && !f.findOne("td, th, tr, tbody, table") ? (g = g.cloneContents(), f = g.getFirst() ? d(g.getFirst().getText()) !== d(f.getText()) : !0) : f = !1 } if (f) return !1; for (d = 0; d < b.length; d++)if (f = b[d]._getTableElement(), !f) return !1; return !0
            } function b(a) {
                function b(a) { a = a.find("td, th"); var c = [], f; for (f = 0; f < a.count(); f++)c.push(a.getItem(f)); return c }
                var c = [], f, d; for (d = 0; d < a.length; d++)f = a[d]._getTableElement(), f.is && f.is({ td: 1, th: 1 }) ? c.push(f) : c = c.concat(b(f)); return c
            } function c(a) { a = b(a); var c = "", f = [], d, g; for (g = 0; g < a.length; g++)d && !d.equals(a[g].getAscendant("tr")) ? (c += f.join("\t") + "\n", d = a[g].getAscendant("tr"), f = []) : 0 === g && (d = a[g].getAscendant("tr")), f.push(a[g].getText()); return c += f.join("\t") } function d(a) {
                var b = this.root.editor, f = b.getSelection(1); this.reset(); t = !0; f.root.once("selectionchange", function (a) { a.cancel() }, null, null, 0); f.selectRanges([a[0]]);
                f = this._.cache; f.ranges = new CKEDITOR.dom.rangeList(a); f.type = CKEDITOR.SELECTION_TEXT; f.selectedElement = a[0]._getTableElement(); f.selectedText = c(a); f.nativeSel = null; this.isFake = 1; this.rev = w++; b._.fakeSelection = this; t = !1; this.root.fire("selectionchange")
            } function l() {
                var b = this._.fakeSelection, c; if (b) {
                    c = this.getSelection(1); var f; if (!(f = !c) && (f = !c.isHidden())) {
                        f = b; var d = c.getRanges(), g = f.getRanges(), h = d.length && d[0]._getTableElement() && d[0]._getTableElement().getAscendant("table", !0), m = g.length && g[0]._getTableElement() &&
                            g[0]._getTableElement().getAscendant("table", !0), k = 1 === d.length && d[0]._getTableElement() && d[0]._getTableElement().is("table"), l = 1 === g.length && g[0]._getTableElement() && g[0]._getTableElement().is("table"); if (a(f.getSelectedElement())) f = !1; else { var n = 1 === d.length && d[0].collapsed, g = e(d, !!CKEDITOR.env.webkit) && e(g); h = h && m ? h.equals(m) || m.contains(h) : !1; h && (n || g) ? (k && !l && f.selectRanges(d), f = !0) : f = !1 } f = !f
                    } f && (b.reset(), b = 0)
                } if (!b && (b = c || this.getSelection(1), !b || b.getType() == CKEDITOR.SELECTION_NONE)) return;
                this.fire("selectionCheck", b); c = this.elementPath(); c.compare(this._.selectionPreviousPath) || (f = this._.selectionPreviousPath && this._.selectionPreviousPath.blockLimit.equals(c.blockLimit), CKEDITOR.env.webkit && !f && (this._.previousActive = this.document.getActive()), this._.selectionPreviousPath = c, this.fire("selectionChange", { selection: b, path: c }))
            } function k() { C = !0; x || (g.call(this), x = CKEDITOR.tools.setTimeout(g, 200, this)) } function g() { x = null; C && (CKEDITOR.tools.setTimeout(l, 0, this), C = !1) } function h(a) {
                return z(a) ||
                    a.type == CKEDITOR.NODE_ELEMENT && !a.is(CKEDITOR.dtd.$empty) ? !0 : !1
            } function m(a) { function b(c, f) { return c && c.type != CKEDITOR.NODE_TEXT ? a.clone()["moveToElementEdit" + (f ? "End" : "Start")](c) : !1 } if (!(a.root instanceof CKEDITOR.editable)) return !1; var c = a.startContainer, f = a.getPreviousNode(h, null, c), d = a.getNextNode(h, null, c); return b(f) || b(d, 1) || !(f || d || c.type == CKEDITOR.NODE_ELEMENT && c.isBlockBoundary() && c.getBogus()) ? !0 : !1 } function f(a) {
                n(a, !1); var b = a.getDocument().createText(q); a.setCustomData("cke-fillingChar",
                    b); return b
            } function n(a, b) {
                var c = a && a.removeCustomData("cke-fillingChar"); if (c) {
                    if (!1 !== b) { var f = a.getDocument().getSelection().getNative(), d = f && "None" != f.type && f.getRangeAt(0), g = q.length; if (c.getLength() > g && d && d.intersectsNode(c.$)) { var e = [{ node: f.anchorNode, offset: f.anchorOffset }, { node: f.focusNode, offset: f.focusOffset }]; f.anchorNode == c.$ && f.anchorOffset > g && (e[0].offset -= g); f.focusNode == c.$ && f.focusOffset > g && (e[1].offset -= g) } } c.setText(r(c.getText(), 1)); e && (c = a.getDocument().$, f = c.getSelection(),
                        c = c.createRange(), c.setStart(e[0].node, e[0].offset), c.collapse(!0), f.removeAllRanges(), f.addRange(c), f.extend(e[1].node, e[1].offset))
                }
            } function r(a, b) { return b ? a.replace(B, function (a, b) { return b ? " " : "" }) : a.replace(q, "") } function u(a, b) {
                var c = b && CKEDITOR.tools.htmlEncode(b) || "\x26nbsp;", c = CKEDITOR.dom.element.createFromHtml('\x3cdiv data-cke-hidden-sel\x3d"1" data-cke-temp\x3d"1" style\x3d"' + (CKEDITOR.env.ie && 14 > CKEDITOR.env.version ? "display:none" : "z-index:1000;position:fixed;top:0;left:-1000px") + '"\x3e' + c + "\x3c/div\x3e",
                    a.document); a.fire("lockSnapshot"); a.editable().append(c); var f = a.getSelection(1), d = a.createRange(), g = f.root.on("selectionchange", function (a) { a.cancel() }, null, null, 0); d.setStartAt(c, CKEDITOR.POSITION_AFTER_START); d.setEndAt(c, CKEDITOR.POSITION_BEFORE_END); f.selectRanges([d]); g.removeListener(); a.fire("unlockSnapshot"); a._.hiddenSelectionContainer = c
            } function v(a) {
                var b = { 37: 1, 39: 1, 8: 1, 46: 1 }; return function (c) {
                    var f = c.data.getKeystroke(); if (b[f]) {
                        var d = a.getSelection().getRanges(), g = d[0]; 1 == d.length &&
                            g.collapsed && (f = g[38 > f ? "getPreviousEditableNode" : "getNextEditableNode"]()) && f.type == CKEDITOR.NODE_ELEMENT && "false" == f.getAttribute("contenteditable") && (a.getSelection().fake(f), c.data.preventDefault(), c.cancel())
                    }
                }
            } function y(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b]; c.getCommonAncestor().isReadOnly() && a.splice(b, 1); if (!c.collapsed) {
                        if (c.startContainer.isReadOnly()) for (var f = c.startContainer, d; f && !((d = f.type == CKEDITOR.NODE_ELEMENT) && f.is("body") || !f.isReadOnly());)d && "false" == f.getAttribute("contentEditable") &&
                            c.setStartAfter(f), f = f.getParent(); f = c.startContainer; d = c.endContainer; var g = c.startOffset, e = c.endOffset, h = c.clone(); f && f.type == CKEDITOR.NODE_TEXT && (g >= f.getLength() ? h.setStartAfter(f) : h.setStartBefore(f)); d && d.type == CKEDITOR.NODE_TEXT && (e ? h.setEndAfter(d) : h.setEndBefore(d)); f = new CKEDITOR.dom.walker(h); f.evaluator = function (f) {
                                if (f.type == CKEDITOR.NODE_ELEMENT && f.isReadOnly()) {
                                    var d = c.clone(); c.setEndBefore(f); c.collapsed && a.splice(b--, 1); f.getPosition(h.endContainer) & CKEDITOR.POSITION_CONTAINS || (d.setStartAfter(f),
                                        d.collapsed || a.splice(b + 1, 0, d)); return !0
                                } return !1
                            }; f.next()
                    }
                } return a
            } var p = "function" != typeof window.getSelection, w = 1, q = CKEDITOR.tools.repeat("​", 7), B = new RegExp(q + "( )?", "g"), t, x, C, z = CKEDITOR.dom.walker.invisible(1), A = function () {
                function a(b) { return function (a) { var c = a.editor.createRange(); c.moveToClosestEditablePosition(a.selected, b) && a.editor.getSelection().selectRanges([c]); return !1 } } function b(a) {
                    return function (b) {
                        var c = b.editor, f = c.createRange(), d; if (!c.readOnly) return (d = f.moveToClosestEditablePosition(b.selected,
                            a)) || (d = f.moveToClosestEditablePosition(b.selected, !a)), d && c.getSelection().selectRanges([f]), c.fire("saveSnapshot"), b.selected.remove(), d || (f.moveToElementEditablePosition(c.editable()), c.getSelection().selectRanges([f])), c.fire("saveSnapshot"), !1
                    }
                } var c = a(), f = a(1); return { 37: c, 38: c, 39: f, 40: f, 8: b(), 46: b(1) }
            }(); CKEDITOR.on("instanceCreated", function (a) {
                function b() { var a = c.getSelection(); a && a.removeAllRanges() } var c = a.editor; c.on("contentDom", function () {
                    function a() {
                        w = new CKEDITOR.dom.selection(c.getSelection());
                        w.lock()
                    } function b() { g.removeListener("mouseup", b); m.removeListener("mouseup", b); var a = CKEDITOR.document.$.selection, c = a.createRange(); "None" != a.type && c.parentElement() && c.parentElement().ownerDocument == d.$ && c.select() } function f(a) { a = a.getRanges()[0]; return a ? (a = a.startContainer.getAscendant(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("contenteditable") }, !0)) && "false" === a.getAttribute("contenteditable") ? a : null : null } var d = c.document, g = CKEDITOR.document, e = c.editable(), h = d.getBody(),
                        m = d.getDocumentElement(), r = e.isInline(), q, w; CKEDITOR.env.gecko && e.attachListener(e, "focus", function (a) { a.removeListener(); 0 !== q && (a = c.getSelection().getNative()) && a.isCollapsed && a.anchorNode == e.$ && (a = c.createRange(), a.moveToElementEditStart(e), a.select()) }, null, null, -2); e.attachListener(e, CKEDITOR.env.webkit ? "DOMFocusIn" : "focus", function () {
                            q && CKEDITOR.env.webkit && (q = c._.previousActive && c._.previousActive.equals(d.getActive())) && null != c._.previousScrollTop && c._.previousScrollTop != e.$.scrollTop && (e.$.scrollTop =
                                c._.previousScrollTop); c.unlockSelection(q); q = 0
                        }, null, null, -1); e.attachListener(e, "mousedown", function () { q = 0 }); if (CKEDITOR.env.ie || r) p ? e.attachListener(e, "beforedeactivate", a, null, null, -1) : e.attachListener(c, "selectionCheck", a, null, null, -1), e.attachListener(e, CKEDITOR.env.webkit ? "DOMFocusOut" : "blur", function () { c.lockSelection(w); q = 1 }, null, null, -1), e.attachListener(e, "mousedown", function () { q = 0 }); if (CKEDITOR.env.ie && !r) {
                            var t; e.attachListener(e, "mousedown", function (a) {
                                2 == a.data.$.button && ((a = c.document.getSelection()) &&
                                    a.getType() != CKEDITOR.SELECTION_NONE || (t = c.window.getScrollPosition()))
                            }); e.attachListener(e, "mouseup", function (a) { 2 == a.data.$.button && t && (c.document.$.documentElement.scrollLeft = t.x, c.document.$.documentElement.scrollTop = t.y); t = null }); if ("BackCompat" != d.$.compatMode) {
                                if (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) {
                                    var x, u; m.on("mousedown", function (a) {
                                        function b(a) {
                                            a = a.data.$; if (x) {
                                                var c = h.$.createTextRange(); try { c.moveToPoint(a.clientX, a.clientY) } catch (f) { } x.setEndPoint(0 > u.compareEndPoints("StartToStart",
                                                    c) ? "EndToEnd" : "StartToStart", c); x.select()
                                            }
                                        } function c() { m.removeListener("mousemove", b); g.removeListener("mouseup", c); m.removeListener("mouseup", c); x.select() } a = a.data; if (a.getTarget().is("html") && a.$.y < m.$.clientHeight && a.$.x < m.$.clientWidth) { x = h.$.createTextRange(); try { x.moveToPoint(a.$.clientX, a.$.clientY) } catch (f) { } u = x.duplicate(); m.on("mousemove", b); g.on("mouseup", c); m.on("mouseup", c) }
                                    })
                                } if (7 < CKEDITOR.env.version && 11 > CKEDITOR.env.version) m.on("mousedown", function (a) {
                                    a.data.getTarget().is("html") &&
                                    (g.on("mouseup", b), m.on("mouseup", b))
                                })
                            }
                        } e.attachListener(e, "selectionchange", l, c); e.attachListener(e, "keyup", k, c); CKEDITOR.env.ie && e.attachListener(e, "keydown", function (a) { var b = this.getSelection(1), c = f(b); c && !c.equals(e) && (b.selectElement(c), a.data.preventDefault()) }, c); e.attachListener(e, CKEDITOR.env.webkit ? "DOMFocusIn" : "focus", function () { c.forceNextSelectionCheck(); c.selectionChange(1) }); if (r && (CKEDITOR.env.webkit || CKEDITOR.env.gecko)) {
                            var y; e.attachListener(e, "mousedown", function () { y = 1 }); e.attachListener(d.getDocumentElement(),
                                "mouseup", function () { y && k.call(c); y = 0 })
                        } else e.attachListener(CKEDITOR.env.ie ? e : d.getDocumentElement(), "mouseup", k, c); CKEDITOR.env.webkit && e.attachListener(d, "keydown", function (a) { switch (a.data.getKey()) { case 13: case 33: case 34: case 35: case 36: case 37: case 39: case 8: case 45: case 46: e.hasFocus && n(e) } }, null, null, -1); e.attachListener(e, "keydown", v(c), null, null, -1)
                }); c.on("setData", function () { c.unlockSelection(); CKEDITOR.env.webkit && b() }); c.on("contentDomUnload", function () { c.unlockSelection() }); if (CKEDITOR.env.ie9Compat) c.on("beforeDestroy",
                    b, null, null, 9); c.on("dataReady", function () { delete c._.fakeSelection; delete c._.hiddenSelectionContainer; c.selectionChange(1) }); c.on("loadSnapshot", function () { var a = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT), b = c.editable().getLast(a); b && b.hasAttribute("data-cke-hidden-sel") && (b.remove(), CKEDITOR.env.gecko && (a = c.editable().getFirst(a)) && a.is("br") && a.getAttribute("_moz_editor_bogus_node") && a.remove()) }, null, null, 100); c.on("key", function (a) {
                        if ("wysiwyg" == c.mode) {
                            var b = c.getSelection(); if (b.isFake) {
                                var f =
                                    A[a.data.keyCode]; if (f) return f({ editor: c, selected: b.getSelectedElement(), selection: b, keyEvent: a })
                            }
                        }
                    })
            }); if (CKEDITOR.env.webkit) CKEDITOR.on("instanceReady", function (a) {
                var b = a.editor; b.on("selectionChange", function () { var a = b.editable(), c = a.getCustomData("cke-fillingChar"); c && (c.getCustomData("ready") ? (n(a), a.editor.fire("selectionCheck")) : c.setCustomData("ready", 1)) }, null, null, -1); b.on("beforeSetMode", function () { n(b.editable()) }, null, null, -1); b.on("getSnapshot", function (a) { a.data && (a.data = r(a.data)) },
                    b, null, 20); b.on("toDataFormat", function (a) { a.data.dataValue = r(a.data.dataValue) }, null, null, 0)
            }); CKEDITOR.editor.prototype.selectionChange = function (a) { (a ? l : k).call(this) }; CKEDITOR.editor.prototype.getSelection = function (a) { return !this._.savedSelection && !this._.fakeSelection || a ? (a = this.editable()) && "wysiwyg" == this.mode ? new CKEDITOR.dom.selection(a) : null : this._.savedSelection || this._.fakeSelection }; CKEDITOR.editor.prototype.lockSelection = function (a) {
                a = a || this.getSelection(1); return a.getType() != CKEDITOR.SELECTION_NONE ?
                    (!a.isLocked && a.lock(), this._.savedSelection = a, !0) : !1
            }; CKEDITOR.editor.prototype.unlockSelection = function (a) { var b = this._.savedSelection; return b ? (b.unlock(a), delete this._.savedSelection, !0) : !1 }; CKEDITOR.editor.prototype.forceNextSelectionCheck = function () { delete this._.selectionPreviousPath }; CKEDITOR.dom.document.prototype.getSelection = function () { return new CKEDITOR.dom.selection(this) }; CKEDITOR.dom.range.prototype.select = function () {
                var a = this.root instanceof CKEDITOR.editable ? this.root.editor.getSelection() :
                    new CKEDITOR.dom.selection(this.root); a.selectRanges([this]); return a
            }; CKEDITOR.SELECTION_NONE = 1; CKEDITOR.SELECTION_TEXT = 2; CKEDITOR.SELECTION_ELEMENT = 3; CKEDITOR.dom.selection = function (a) {
                if (a instanceof CKEDITOR.dom.selection) { var b = a; a = a.root } var c = a instanceof CKEDITOR.dom.element; this.rev = b ? b.rev : w++; this.document = a instanceof CKEDITOR.dom.document ? a : a.getDocument(); this.root = c ? a : this.document.getBody(); this.isLocked = 0; this._ = { cache: {} }; if (b) return CKEDITOR.tools.extend(this._.cache, b._.cache),
                    this.isFake = b.isFake, this.isLocked = b.isLocked, this; a = this.getNative(); var f, d; if (a) if (a.getRangeAt) f = (d = a.rangeCount && a.getRangeAt(0)) && new CKEDITOR.dom.node(d.commonAncestorContainer); else { try { d = a.createRange() } catch (g) { } f = d && CKEDITOR.dom.element.get(d.item && d.item(0) || d.parentElement()) } if (!f || f.type != CKEDITOR.NODE_ELEMENT && f.type != CKEDITOR.NODE_TEXT || !this.root.equals(f) && !this.root.contains(f)) this._.cache.type = CKEDITOR.SELECTION_NONE, this._.cache.startElement = null, this._.cache.selectedElement =
                        null, this._.cache.selectedText = "", this._.cache.ranges = new CKEDITOR.dom.rangeList; return this
            }; var G = { img: 1, hr: 1, li: 1, table: 1, tr: 1, td: 1, th: 1, embed: 1, object: 1, ol: 1, ul: 1, a: 1, input: 1, form: 1, select: 1, textarea: 1, button: 1, fieldset: 1, thead: 1, tfoot: 1 }; CKEDITOR.tools.extend(CKEDITOR.dom.selection, { _removeFillingCharSequenceString: r, _createFillingCharSequenceNode: f, FILLING_CHAR_SEQUENCE: q }); CKEDITOR.dom.selection.prototype = {
                getNative: function () {
                    return void 0 !== this._.cache.nativeSel ? this._.cache.nativeSel : this._.cache.nativeSel =
                        p ? this.document.$.selection : this.document.getWindow().$.getSelection()
                }, getType: p ? function () { var a = this._.cache; if (a.type) return a.type; var b = CKEDITOR.SELECTION_NONE; try { var c = this.getNative(), f = c.type; "Text" == f && (b = CKEDITOR.SELECTION_TEXT); "Control" == f && (b = CKEDITOR.SELECTION_ELEMENT); c.createRange().parentElement() && (b = CKEDITOR.SELECTION_TEXT) } catch (d) { } return a.type = b } : function () {
                    var a = this._.cache; if (a.type) return a.type; var b = CKEDITOR.SELECTION_TEXT, c = this.getNative(); if (!c || !c.rangeCount) b = CKEDITOR.SELECTION_NONE;
                    else if (1 == c.rangeCount) { var c = c.getRangeAt(0), f = c.startContainer; f == c.endContainer && 1 == f.nodeType && 1 == c.endOffset - c.startOffset && G[f.childNodes[c.startOffset].nodeName.toLowerCase()] && (b = CKEDITOR.SELECTION_ELEMENT) } return a.type = b
                }, getRanges: function () {
                    var a = p ? function () {
                        function a(b) { return (new CKEDITOR.dom.node(b)).getIndex() } var b = function (b, c) {
                            b = b.duplicate(); b.collapse(c); var f = b.parentElement(); if (!f.hasChildNodes()) return { container: f, offset: 0 }; for (var d = f.children, g, e, h = b.duplicate(), m = 0,
                                k = d.length - 1, l = -1, n, p; m <= k;)if (l = Math.floor((m + k) / 2), g = d[l], h.moveToElementText(g), n = h.compareEndPoints("StartToStart", b), 0 < n) k = l - 1; else if (0 > n) m = l + 1; else return { container: f, offset: a(g) }; if (-1 == l || l == d.length - 1 && 0 > n) {
                                    h.moveToElementText(f); h.setEndPoint("StartToStart", b); h = h.text.replace(/(\r\n|\r)/g, "\n").length; d = f.childNodes; if (!h) return g = d[d.length - 1], g.nodeType != CKEDITOR.NODE_TEXT ? { container: f, offset: d.length } : { container: g, offset: g.nodeValue.length }; for (f = d.length; 0 < h && 0 < f;)e = d[--f], e.nodeType ==
                                        CKEDITOR.NODE_TEXT && (p = e, h -= e.nodeValue.length); return { container: p, offset: -h }
                                } h.collapse(0 < n ? !0 : !1); h.setEndPoint(0 < n ? "StartToStart" : "EndToStart", b); h = h.text.replace(/(\r\n|\r)/g, "\n").length; if (!h) return { container: f, offset: a(g) + (0 < n ? 0 : 1) }; for (; 0 < h;)try { e = g[0 < n ? "previousSibling" : "nextSibling"], e.nodeType == CKEDITOR.NODE_TEXT && (h -= e.nodeValue.length, p = e), g = e } catch (r) { return { container: f, offset: a(g) } } return { container: p, offset: 0 < n ? -h : p.nodeValue.length + h }
                        }; return function () {
                            var a = this.getNative(), c = a &&
                                a.createRange(), f = this.getType(); if (!a) return []; if (f == CKEDITOR.SELECTION_TEXT) return a = new CKEDITOR.dom.range(this.root), f = b(c, !0), a.setStart(new CKEDITOR.dom.node(f.container), f.offset), f = b(c), a.setEnd(new CKEDITOR.dom.node(f.container), f.offset), a.endContainer.getPosition(a.startContainer) & CKEDITOR.POSITION_PRECEDING && a.endOffset <= a.startContainer.getIndex() && a.collapse(), [a]; if (f == CKEDITOR.SELECTION_ELEMENT) {
                                    for (var f = [], d = 0; d < c.length; d++) {
                                        for (var g = c.item(d), e = g.parentNode, h = 0, a = new CKEDITOR.dom.range(this.root); h <
                                            e.childNodes.length && e.childNodes[h] != g; h++); a.setStart(new CKEDITOR.dom.node(e), h); a.setEnd(new CKEDITOR.dom.node(e), h + 1); f.push(a)
                                    } return f
                                } return []
                        }
                    }() : function () { var a = [], b, c = this.getNative(); if (!c) return a; for (var f = 0; f < c.rangeCount; f++) { var d = c.getRangeAt(f); b = new CKEDITOR.dom.range(this.root); b.setStart(new CKEDITOR.dom.node(d.startContainer), d.startOffset); b.setEnd(new CKEDITOR.dom.node(d.endContainer), d.endOffset); a.push(b) } return a }; return function (b) {
                        var c = this._.cache, f = c.ranges; f || (c.ranges =
                            f = new CKEDITOR.dom.rangeList(a.call(this))); return b ? y(new CKEDITOR.dom.rangeList(f.slice())) : f
                    }
                }(), getStartElement: function () {
                    var a = this._.cache; if (void 0 !== a.startElement) return a.startElement; var b; switch (this.getType()) {
                        case CKEDITOR.SELECTION_ELEMENT: return this.getSelectedElement(); case CKEDITOR.SELECTION_TEXT: var c = this.getRanges()[0]; if (c) {
                            if (c.collapsed) b = c.startContainer, b.type != CKEDITOR.NODE_ELEMENT && (b = b.getParent()); else {
                                for (c.optimize(); b = c.startContainer, c.startOffset == (b.getChildCount ?
                                    b.getChildCount() : b.getLength()) && !b.isBlockBoundary();)c.setStartAfter(b); b = c.startContainer; if (b.type != CKEDITOR.NODE_ELEMENT) return b.getParent(); if ((b = b.getChild(c.startOffset)) && b.type == CKEDITOR.NODE_ELEMENT) for (c = b.getFirst(); c && c.type == CKEDITOR.NODE_ELEMENT;)b = c, c = c.getFirst(); else b = c.startContainer
                            } b = b.$
                        }
                    }return a.startElement = b ? new CKEDITOR.dom.element(b) : null
                }, getSelectedElement: function () {
                    var a = this._.cache; if (void 0 !== a.selectedElement) return a.selectedElement; var b = this, c = CKEDITOR.tools.tryThese(function () { return b.getNative().createRange().item(0) },
                        function () { for (var a = b.getRanges()[0].clone(), c, f, d = 2; d && !((c = a.getEnclosedNode()) && c.type == CKEDITOR.NODE_ELEMENT && G[c.getName()] && (f = c)); d--)a.shrink(CKEDITOR.SHRINK_ELEMENT); return f && f.$ }); return a.selectedElement = c ? new CKEDITOR.dom.element(c) : null
                }, getSelectedText: function () { var a = this._.cache; if (void 0 !== a.selectedText) return a.selectedText; var b = this.getNative(), b = p ? "Control" == b.type ? "" : b.createRange().text : b.toString(); return a.selectedText = b }, lock: function () {
                    this.getRanges(); this.getStartElement();
                    this.getSelectedElement(); this.getSelectedText(); this._.cache.nativeSel = null; this.isLocked = 1
                }, unlock: function (a) { if (this.isLocked) { if (a) var b = this.getSelectedElement(), c = this.getRanges(), f = this.isFake; this.isLocked = 0; this.reset(); a && (a = b || c[0] && c[0].getCommonAncestor()) && a.getAscendant("body", 1) && (e(c) ? d.call(this, c) : f ? this.fake(b) : b ? this.selectElement(b) : this.selectRanges(c)) } }, reset: function () {
                    this._.cache = {}; this.isFake = 0; var a = this.root.editor; if (a && a._.fakeSelection) if (this.rev == a._.fakeSelection.rev) {
                        delete a._.fakeSelection;
                        var b = a._.hiddenSelectionContainer; if (b) { var c = a.checkDirty(); a.fire("lockSnapshot"); b.remove(); a.fire("unlockSnapshot"); !c && a.resetDirty() } delete a._.hiddenSelectionContainer
                    } else CKEDITOR.warn("selection-fake-reset"); this.rev = w++
                }, selectElement: function (a) { var b = new CKEDITOR.dom.range(this.root); b.setStartBefore(a); b.setEndAfter(a); this.selectRanges([b]) }, selectRanges: function (a) {
                    var b = this.root.editor, c = b && b._.hiddenSelectionContainer; this.reset(); if (c) for (var c = this.root, g, h = 0; h < a.length; ++h)g =
                        a[h], g.endContainer.equals(c) && (g.endOffset = Math.min(g.endOffset, c.getChildCount())); if (a.length) if (this.isLocked) { var k = CKEDITOR.document.getActive(); this.unlock(); this.selectRanges(a); this.lock(); k && !k.equals(this.root) && k.focus() } else {
                            var l; a: {
                                var r, q; if (1 == a.length && !(q = a[0]).collapsed && (l = q.getEnclosedNode()) && l.type == CKEDITOR.NODE_ELEMENT && (q = q.clone(), q.shrink(CKEDITOR.SHRINK_ELEMENT, !0), (r = q.getEnclosedNode()) && r.type == CKEDITOR.NODE_ELEMENT && (l = r), "false" == l.getAttribute("contenteditable"))) break a;
                                l = void 0
                            } if (l) this.fake(l); else if (b && b.plugins.tableselection && CKEDITOR.plugins.tableselection.isSupportedEnvironment && e(a) && !t) d.call(this, a); else {
                                if (p) {
                                    r = CKEDITOR.dom.walker.whitespaces(!0); l = /\ufeff|\u00a0/; q = { table: 1, tbody: 1, tr: 1 }; 1 < a.length && (b = a[a.length - 1], a[0].setEnd(b.endContainer, b.endOffset)); b = a[0]; a = b.collapsed; var w, v, x; if ((c = b.getEnclosedNode()) && c.type == CKEDITOR.NODE_ELEMENT && c.getName() in G && (!c.is("a") || !c.getText())) try { x = c.$.createControlRange(); x.addElement(c.$); x.select(); return } catch (u) { } if (b.startContainer.type ==
                                        CKEDITOR.NODE_ELEMENT && b.startContainer.getName() in q || b.endContainer.type == CKEDITOR.NODE_ELEMENT && b.endContainer.getName() in q) b.shrink(CKEDITOR.NODE_ELEMENT, !0), a = b.collapsed; x = b.createBookmark(); q = x.startNode; a || (k = x.endNode); x = b.document.$.body.createTextRange(); x.moveToElementText(q.$); x.moveStart("character", 1); k ? (l = b.document.$.body.createTextRange(), l.moveToElementText(k.$), x.setEndPoint("EndToEnd", l), x.moveEnd("character", -1)) : (w = q.getNext(r), v = q.hasAscendant("pre"), w = !(w && w.getText && w.getText().match(l)) &&
                                            (v || !q.hasPrevious() || q.getPrevious().is && q.getPrevious().is("br")), v = b.document.createElement("span"), v.setHtml("\x26#65279;"), v.insertBefore(q), w && b.document.createText("﻿").insertBefore(q)); b.setStartBefore(q); q.remove(); a ? (w ? (x.moveStart("character", -1), x.select(), b.document.$.selection.clear()) : x.select(), b.moveToPosition(v, CKEDITOR.POSITION_BEFORE_START), v.remove()) : (b.setEndBefore(k), k.remove(), x.select())
                                } else {
                                    k = this.getNative(); if (!k) return; this.removeAllRanges(); for (x = 0; x < a.length; x++) {
                                        if (x <
                                            a.length - 1 && (w = a[x], v = a[x + 1], l = w.clone(), l.setStart(w.endContainer, w.endOffset), l.setEnd(v.startContainer, v.startOffset), !l.collapsed && (l.shrink(CKEDITOR.NODE_ELEMENT, !0), b = l.getCommonAncestor(), l = l.getEnclosedNode(), b.isReadOnly() || l && l.isReadOnly()))) { v.setStart(w.startContainer, w.startOffset); a.splice(x--, 1); continue } b = a[x]; v = this.document.$.createRange(); b.collapsed && CKEDITOR.env.webkit && m(b) && (l = f(this.root), b.insertNode(l), (w = l.getNext()) && !l.getPrevious() && w.type == CKEDITOR.NODE_ELEMENT && "br" ==
                                                w.getName() ? (n(this.root), b.moveToPosition(w, CKEDITOR.POSITION_BEFORE_START)) : b.moveToPosition(l, CKEDITOR.POSITION_AFTER_END)); v.setStart(b.startContainer.$, b.startOffset); try { v.setEnd(b.endContainer.$, b.endOffset) } catch (y) { if (0 <= y.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")) b.collapse(1), v.setEnd(b.endContainer.$, b.endOffset); else throw y; } k.addRange(v)
                                    }
                                } this.reset(); this.root.fire("selectionchange")
                            }
                        }
                }, fake: function (a, b) {
                    var c = this.root.editor; void 0 === b && a.hasAttribute("aria-label") && (b = a.getAttribute("aria-label"));
                    this.reset(); u(c, b); var f = this._.cache, d = new CKEDITOR.dom.range(this.root); d.setStartBefore(a); d.setEndAfter(a); f.ranges = new CKEDITOR.dom.rangeList(d); f.selectedElement = f.startElement = a; f.type = CKEDITOR.SELECTION_ELEMENT; f.selectedText = f.nativeSel = null; this.isFake = 1; this.rev = w++; c._.fakeSelection = this; this.root.fire("selectionchange")
                }, isHidden: function () { var a = this.getCommonAncestor(); a && a.type == CKEDITOR.NODE_TEXT && (a = a.getParent()); return !(!a || !a.data("cke-hidden-sel")) }, isInTable: function (a) {
                    return e(this.getRanges(),
                        a)
                }, isCollapsed: function () { var a = this.getRanges(); return 1 === a.length && a[0].collapsed }, createBookmarks: function (a) { a = this.getRanges().createBookmarks(a); this.isFake && (a.isFake = 1); return a }, createBookmarks2: function (a) { a = this.getRanges().createBookmarks2(a); this.isFake && (a.isFake = 1); return a }, selectBookmarks: function (a) {
                    for (var b = [], c, f = 0; f < a.length; f++) { var d = new CKEDITOR.dom.range(this.root); d.moveToBookmark(a[f]); b.push(d) } a.isFake && (c = e(b) ? b[0]._getTableElement() : b[0].getEnclosedNode(), c && c.type ==
                        CKEDITOR.NODE_ELEMENT || (CKEDITOR.warn("selection-not-fake"), a.isFake = 0)); a.isFake && !e(b) ? this.fake(c) : this.selectRanges(b); return this
                }, getCommonAncestor: function () { var a = this.getRanges(); return a.length ? a[0].startContainer.getCommonAncestor(a[a.length - 1].endContainer) : null }, scrollIntoView: function () { this.type != CKEDITOR.SELECTION_NONE && this.getRanges()[0].scrollIntoView() }, removeAllRanges: function () { if (this.getType() != CKEDITOR.SELECTION_NONE) { var a = this.getNative(); try { a && a[p ? "empty" : "removeAllRanges"]() } catch (b) { } this.reset() } }
            }
        }(),
        "use strict", CKEDITOR.STYLE_BLOCK = 1, CKEDITOR.STYLE_INLINE = 2, CKEDITOR.STYLE_OBJECT = 3, function () {
            function a(a, b) { for (var c, f; (a = a.getParent()) && !a.equals(b);)if (a.getAttribute("data-nostyle")) c = a; else if (!f) { var d = a.getAttribute("contentEditable"); "false" == d ? c = a : "true" == d && (f = 1) } return c } function e(a, b, c, f) { return (a.getPosition(b) | f) == f && (!c.childRule || c.childRule(a)) } function b(c) {
                var f = c.document; if (c.collapsed) f = w(this, f), c.insertNode(f), c.moveToPosition(f, CKEDITOR.POSITION_BEFORE_END); else {
                    var g =
                        this.element, h = this._.definition, m, k = h.ignoreReadonly, l = k || h.includeReadonly; null == l && (l = c.root.getCustomData("cke_includeReadonly")); var n = CKEDITOR.dtd[g]; n || (m = !0, n = CKEDITOR.dtd.span); c.enlarge(CKEDITOR.ENLARGE_INLINE, 1); c.trim(); var p = c.createBookmark(), r = p.startNode, q = p.endNode, x = r, t; if (!k) { var y = c.getCommonAncestor(), k = a(r, y), y = a(q, y); k && (x = k.getNextSourceNode(!0)); y && (q = y) } for (x.getPosition(q) == CKEDITOR.POSITION_FOLLOWING && (x = 0); x;) {
                            k = !1; if (x.equals(q)) x = null, k = !0; else {
                                var u = x.type == CKEDITOR.NODE_ELEMENT ?
                                    x.getName() : null, y = u && "false" == x.getAttribute("contentEditable"), B = u && x.getAttribute("data-nostyle"); if (u && x.data("cke-bookmark")) { x = x.getNextSourceNode(!0); continue } if (y && l && CKEDITOR.dtd.$block[u]) for (var z = x, A = d(z), C = void 0, G = A.length, ea = 0, z = G && new CKEDITOR.dom.range(z.getDocument()); ea < G; ++ea) { var C = A[ea], F = CKEDITOR.filter.instances[C.data("cke-filter")]; if (F ? F.check(this) : 1) z.selectNodeContents(C), b.call(this, z) } A = u ? !n[u] || B ? 0 : y && !l ? 0 : e(x, q, h, K) : 1; if (A) if (C = x.getParent(), A = h, G = g, ea = m, !C || !(C.getDtd() ||
                                        CKEDITOR.dtd.span)[G] && !ea || A.parentRule && !A.parentRule(C)) k = !0; else { if (t || u && CKEDITOR.dtd.$removeEmpty[u] && (x.getPosition(q) | K) != K || (t = c.clone(), t.setStartBefore(x)), u = x.type, u == CKEDITOR.NODE_TEXT || y || u == CKEDITOR.NODE_ELEMENT && !x.getChildCount()) { for (var u = x, E; (k = !u.getNext(I)) && (E = u.getParent(), n[E.getName()]) && e(E, r, h, J);)u = E; t.setEndAfter(u) } } else k = !0; x = x.getNextSourceNode(B || y)
                            } if (k && t && !t.collapsed) {
                                for (var k = w(this, f), y = k.hasAttributes(), B = t.getCommonAncestor(), u = {}, A = {}, C = {}, G = {}, fa, H, ha; k &&
                                    B;) { if (B.getName() == g) { for (fa in h.attributes) !G[fa] && (ha = B.getAttribute(H)) && (k.getAttribute(fa) == ha ? A[fa] = 1 : G[fa] = 1); for (H in h.styles) !C[H] && (ha = B.getStyle(H)) && (k.getStyle(H) == ha ? u[H] = 1 : C[H] = 1) } B = B.getParent() } for (fa in A) k.removeAttribute(fa); for (H in u) k.removeStyle(H); y && !k.hasAttributes() && (k = null); k ? (t.extractContents().appendTo(k), t.insertNode(k), v.call(this, k), k.mergeSiblings(), CKEDITOR.env.ie || k.$.normalize()) : (k = new CKEDITOR.dom.element("span"), t.extractContents().appendTo(k), t.insertNode(k),
                                        v.call(this, k), k.remove(!0)); t = null
                            }
                        } c.moveToBookmark(p); c.shrink(CKEDITOR.SHRINK_TEXT); c.shrink(CKEDITOR.NODE_ELEMENT, !0)
                }
            } function c(a) {
                function b() {
                    for (var a = new CKEDITOR.dom.elementPath(f.getParent()), c = new CKEDITOR.dom.elementPath(l.getParent()), d = null, g = null, e = 0; e < a.elements.length; e++) { var h = a.elements[e]; if (h == a.block || h == a.blockLimit) break; n.checkElementRemovable(h, !0) && (d = h) } for (e = 0; e < c.elements.length; e++) {
                        h = c.elements[e]; if (h == c.block || h == c.blockLimit) break; n.checkElementRemovable(h, !0) &&
                            (g = h)
                    } g && l.breakParent(g); d && f.breakParent(d)
                } a.enlarge(CKEDITOR.ENLARGE_INLINE, 1); var c = a.createBookmark(), f = c.startNode, d = this._.definition.alwaysRemoveElement; if (a.collapsed) {
                    for (var g = new CKEDITOR.dom.elementPath(f.getParent(), a.root), e, h = 0, m; h < g.elements.length && (m = g.elements[h]) && m != g.block && m != g.blockLimit; h++)if (this.checkElementRemovable(m)) {
                        var k; !d && a.collapsed && (a.checkBoundaryOfElement(m, CKEDITOR.END) || (k = a.checkBoundaryOfElement(m, CKEDITOR.START))) ? (e = m, e.match = k ? "start" : "end") : (m.mergeSiblings(),
                            m.is(this.element) ? u.call(this, m) : y(m, t(this)[m.getName()]))
                    } if (e) { d = f; for (h = 0; ; h++) { m = g.elements[h]; if (m.equals(e)) break; else if (m.match) continue; else m = m.clone(); m.append(d); d = m } d["start" == e.match ? "insertBefore" : "insertAfter"](e) }
                } else {
                    var l = c.endNode, n = this; b(); for (g = f; !g.equals(l);)e = g.getNextSourceNode(), g.type == CKEDITOR.NODE_ELEMENT && this.checkElementRemovable(g) && (g.getName() == this.element ? u.call(this, g) : y(g, t(this)[g.getName()]), e.type == CKEDITOR.NODE_ELEMENT && e.contains(f) && (b(), e = f.getNext())),
                        g = e
                } a.moveToBookmark(c); a.shrink(CKEDITOR.NODE_ELEMENT, !0)
            } function d(a) { var b = []; a.forEach(function (a) { if ("true" == a.getAttribute("contenteditable")) return b.push(a), !1 }, CKEDITOR.NODE_ELEMENT, !0); return b } function l(a) { var b = a.getEnclosedNode() || a.getCommonAncestor(!1, !0); (a = (new CKEDITOR.dom.elementPath(b, a.root)).contains(this.element, 1)) && !a.isReadOnly() && q(a, this) } function k(a) {
                var b = a.getCommonAncestor(!0, !0); if (a = (new CKEDITOR.dom.elementPath(b, a.root)).contains(this.element, 1)) {
                    var b = this._.definition,
                    c = b.attributes; if (c) for (var f in c) a.removeAttribute(f, c[f]); if (b.styles) for (var d in b.styles) b.styles.hasOwnProperty(d) && a.removeStyle(d)
                }
            } function g(a) { var b = a.createBookmark(!0), c = a.createIterator(); c.enforceRealBlocks = !0; this._.enterMode && (c.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR); for (var f, d = a.document, g; f = c.getNextParagraph();)!f.isReadOnly() && (c.activeFilter ? c.activeFilter.check(this) : 1) && (g = w(this, d, f), m(f, g)); a.moveToBookmark(b) } function h(a) {
                var b = a.createBookmark(1), c = a.createIterator();
                c.enforceRealBlocks = !0; c.enlargeBr = this._.enterMode != CKEDITOR.ENTER_BR; for (var f, d; f = c.getNextParagraph();)this.checkElementRemovable(f) && (f.is("pre") ? ((d = this._.enterMode == CKEDITOR.ENTER_BR ? null : a.document.createElement(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div")) && f.copyAttributes(d), m(f, d)) : u.call(this, f)); a.moveToBookmark(b)
            } function m(a, b) {
                var c = !b; c && (b = a.getDocument().createElement("div"), a.copyAttributes(b)); var d = b && b.is("pre"), g = a.is("pre"), e = !d && g; if (d && !g) {
                    g = b; (e = a.getBogus()) && e.remove();
                    e = a.getHtml(); e = n(e, /(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, ""); e = e.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi, "$1"); e = e.replace(/([ \t\n\r]+|&nbsp;)/g, " "); e = e.replace(/<br\b[^>]*>/gi, "\n"); if (CKEDITOR.env.ie) { var h = a.getDocument().createElement("div"); h.append(g); g.$.outerHTML = "\x3cpre\x3e" + e + "\x3c/pre\x3e"; g.copyAttributes(h.getFirst()); g = h.getFirst().remove() } else g.setHtml(e); b = g
                } else e ? b = r(c ? [a.getHtml()] : f(a), b) : a.moveChildren(b); b.replace(a); if (d) {
                    var c = b, m; (m = c.getPrevious(H)) && m.type == CKEDITOR.NODE_ELEMENT &&
                        m.is("pre") && (d = n(m.getHtml(), /\n$/, "") + "\n\n" + n(c.getHtml(), /^\n/, ""), CKEDITOR.env.ie ? c.$.outerHTML = "\x3cpre\x3e" + d + "\x3c/pre\x3e" : c.setHtml(d), m.remove())
                } else c && p(b)
            } function f(a) { var b = []; n(a.getOuterHtml(), /(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi, function (a, b, c) { return b + "\x3c/pre\x3e" + c + "\x3cpre\x3e" }).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi, function (a, c) { b.push(c) }); return b } function n(a, b, c) {
                var f = "", d = ""; a = a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,
                    function (a, b, c) { b && (f = b); c && (d = c); return "" }); return f + a.replace(b, c) + d
            } function r(a, b) {
                var c; 1 < a.length && (c = new CKEDITOR.dom.documentFragment(b.getDocument())); for (var f = 0; f < a.length; f++) {
                    var d = a[f], d = d.replace(/(\r\n|\r)/g, "\n"), d = n(d, /^[ \t]*\n/, ""), d = n(d, /\n$/, ""), d = n(d, /^[ \t]+|[ \t]+$/g, function (a, b) { return 1 == a.length ? "\x26nbsp;" : b ? " " + CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) : CKEDITOR.tools.repeat("\x26nbsp;", a.length - 1) + " " }), d = d.replace(/\n/g, "\x3cbr\x3e"), d = d.replace(/[ \t]{2,}/g, function (a) {
                        return CKEDITOR.tools.repeat("\x26nbsp;",
                            a.length - 1) + " "
                    }); if (c) { var g = b.clone(); g.setHtml(d); c.append(g) } else b.setHtml(d)
                } return c || b
            } function u(a, b) {
                var c = this._.definition, f = c.attributes, c = c.styles, d = t(this)[a.getName()], g = CKEDITOR.tools.isEmpty(f) && CKEDITOR.tools.isEmpty(c), e; for (e in f) if ("class" != e && !this._.definition.fullMatch || a.getAttribute(e) == x(e, f[e])) b && "data-" == e.slice(0, 5) || (g = a.hasAttribute(e), a.removeAttribute(e)); for (var h in c) this._.definition.fullMatch && a.getStyle(h) != x(h, c[h], !0) || (g = g || !!a.getStyle(h), a.removeStyle(h));
                y(a, d, A[a.getName()]); g && (this._.definition.alwaysRemoveElement ? p(a, 1) : !CKEDITOR.dtd.$block[a.getName()] || this._.enterMode == CKEDITOR.ENTER_BR && !a.hasAttributes() ? p(a) : a.renameNode(this._.enterMode == CKEDITOR.ENTER_P ? "p" : "div"))
            } function v(a) { for (var b = t(this), c = a.getElementsByTag(this.element), f, d = c.count(); 0 <= --d;)f = c.getItem(d), f.isReadOnly() || u.call(this, f, !0); for (var g in b) if (g != this.element) for (c = a.getElementsByTag(g), d = c.count() - 1; 0 <= d; d--)f = c.getItem(d), f.isReadOnly() || y(f, b[g]) } function y(a,
                b, c) { if (b = b && b.attributes) for (var f = 0; f < b.length; f++) { var d = b[f][0], g; if (g = a.getAttribute(d)) { var e = b[f][1]; (null === e || e.test && e.test(g) || "string" == typeof e && g == e) && a.removeAttribute(d) } } c || p(a) } function p(a, b) {
                    if (!a.hasAttributes() || b) if (CKEDITOR.dtd.$block[a.getName()]) { var c = a.getPrevious(H), f = a.getNext(H); !c || c.type != CKEDITOR.NODE_TEXT && c.isBlockBoundary({ br: 1 }) || a.append("br", 1); !f || f.type != CKEDITOR.NODE_TEXT && f.isBlockBoundary({ br: 1 }) || a.append("br"); a.remove(!0) } else c = a.getFirst(), f = a.getLast(),
                        a.remove(!0), c && (c.type == CKEDITOR.NODE_ELEMENT && c.mergeSiblings(), f && !c.equals(f) && f.type == CKEDITOR.NODE_ELEMENT && f.mergeSiblings())
                } function w(a, b, c) { var f; f = a.element; "*" == f && (f = "span"); f = new CKEDITOR.dom.element(f, b); c && c.copyAttributes(f); f = q(f, a); b.getCustomData("doc_processing_style") && f.hasAttribute("id") ? f.removeAttribute("id") : b.setCustomData("doc_processing_style", 1); return f } function q(a, b) {
                    var c = b._.definition, f = c.attributes, c = CKEDITOR.style.getStyleText(c); if (f) for (var d in f) a.setAttribute(d,
                        f[d]); c && a.setAttribute("style", c); a.getDocument().removeCustomData("doc_processing_style"); return a
                } function B(a, b) { for (var c in a) a[c] = a[c].replace(E, function (a, c) { return b[c] }) } function t(a) {
                    if (a._.overrides) return a._.overrides; var b = a._.overrides = {}, c = a._.definition.overrides; if (c) {
                        CKEDITOR.tools.isArray(c) || (c = [c]); for (var f = 0; f < c.length; f++) {
                            var d = c[f], g, e; "string" == typeof d ? g = d.toLowerCase() : (g = d.element ? d.element.toLowerCase() : a.element, e = d.attributes); d = b[g] || (b[g] = {}); if (e) {
                                var d = d.attributes =
                                    d.attributes || [], h; for (h in e) d.push([h.toLowerCase(), e[h]])
                            }
                        }
                    } return b
                } function x(a, b, c) { var f = new CKEDITOR.dom.element("span"); f[c ? "setStyle" : "setAttribute"](a, b); return f[c ? "getStyle" : "getAttribute"](a) } function C(a, b) {
                    function c(a, b) { return "font-family" == b.toLowerCase() ? a.replace(/["']/g, "") : a } "string" == typeof a && (a = CKEDITOR.tools.parseCssText(a)); "string" == typeof b && (b = CKEDITOR.tools.parseCssText(b, !0)); for (var f in a) if (!(f in b) || c(b[f], f) != c(a[f], f) && "inherit" != a[f] && "inherit" != b[f]) return !1;
                    return !0
                } function z(a, b, c) { var f = a.getRanges(); b = b ? this.removeFromRange : this.applyToRange; var d, g; if (a.isFake && a.isInTable()) for (d = [], g = 0; g < f.length; g++)d.push(f[g].clone()); for (var e = f.createIterator(); g = e.getNextRange();)b.call(this, g, c); a.selectRanges(d || f) } var A = { address: 1, div: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, p: 1, pre: 1, section: 1, header: 1, footer: 1, nav: 1, article: 1, aside: 1, figure: 1, dialog: 1, hgroup: 1, time: 1, meter: 1, menu: 1, command: 1, keygen: 1, output: 1, progress: 1, details: 1, datagrid: 1, datalist: 1 }, G = {
                    a: 1,
                    blockquote: 1, embed: 1, hr: 1, img: 1, li: 1, object: 1, ol: 1, table: 1, td: 1, tr: 1, th: 1, ul: 1, dl: 1, dt: 1, dd: 1, form: 1, audio: 1, video: 1
                }, F = /\s*(?:;\s*|$)/, E = /#\((.+?)\)/g, I = CKEDITOR.dom.walker.bookmark(0, 1), H = CKEDITOR.dom.walker.whitespaces(1); CKEDITOR.style = function (a, b) {
                    if ("string" == typeof a.type) return new CKEDITOR.style.customHandlers[a.type](a); var c = a.attributes; c && c.style && (a.styles = CKEDITOR.tools.extend({}, a.styles, CKEDITOR.tools.parseCssText(c.style)), delete c.style); b && (a = CKEDITOR.tools.clone(a), B(a.attributes,
                        b), B(a.styles, b)); c = this.element = a.element ? "string" == typeof a.element ? a.element.toLowerCase() : a.element : "*"; this.type = a.type || (A[c] ? CKEDITOR.STYLE_BLOCK : G[c] ? CKEDITOR.STYLE_OBJECT : CKEDITOR.STYLE_INLINE); "object" == typeof this.element && (this.type = CKEDITOR.STYLE_OBJECT); this._ = { definition: a }
                }; CKEDITOR.style.prototype = {
                    apply: function (a) {
                        if (a instanceof CKEDITOR.dom.document) return z.call(this, a.getSelection()); if (this.checkApplicable(a.elementPath(), a)) {
                            var b = this._.enterMode; b || (this._.enterMode = a.activeEnterMode);
                            z.call(this, a.getSelection(), 0, a); this._.enterMode = b
                        }
                    }, remove: function (a) { if (a instanceof CKEDITOR.dom.document) return z.call(this, a.getSelection(), 1); if (this.checkApplicable(a.elementPath(), a)) { var b = this._.enterMode; b || (this._.enterMode = a.activeEnterMode); z.call(this, a.getSelection(), 1, a); this._.enterMode = b } }, applyToRange: function (a) { this.applyToRange = this.type == CKEDITOR.STYLE_INLINE ? b : this.type == CKEDITOR.STYLE_BLOCK ? g : this.type == CKEDITOR.STYLE_OBJECT ? l : null; return this.applyToRange(a) }, removeFromRange: function (a) {
                        this.removeFromRange =
                        this.type == CKEDITOR.STYLE_INLINE ? c : this.type == CKEDITOR.STYLE_BLOCK ? h : this.type == CKEDITOR.STYLE_OBJECT ? k : null; return this.removeFromRange(a)
                    }, applyToObject: function (a) { q(a, this) }, checkActive: function (a, b) {
                        switch (this.type) {
                            case CKEDITOR.STYLE_BLOCK: return this.checkElementRemovable(a.block || a.blockLimit, !0, b); case CKEDITOR.STYLE_OBJECT: case CKEDITOR.STYLE_INLINE: for (var c = a.elements, f = 0, d; f < c.length; f++)if (d = c[f], this.type != CKEDITOR.STYLE_INLINE || d != a.block && d != a.blockLimit) {
                                if (this.type == CKEDITOR.STYLE_OBJECT) {
                                    var g =
                                        d.getName(); if (!("string" == typeof this.element ? g == this.element : g in this.element)) continue
                                } if (this.checkElementRemovable(d, !0, b)) return !0
                            }
                        }return !1
                    }, checkApplicable: function (a, b, c) { b && b instanceof CKEDITOR.filter && (c = b); if (c && !c.check(this)) return !1; switch (this.type) { case CKEDITOR.STYLE_OBJECT: return !!a.contains(this.element); case CKEDITOR.STYLE_BLOCK: return !!a.blockLimit.getDtd()[this.element] }return !0 }, checkElementMatch: function (a, b) {
                        var c = this._.definition; if (!a || !c.ignoreReadonly && a.isReadOnly()) return !1;
                        var f = a.getName(); if ("string" == typeof this.element ? f == this.element : f in this.element) { if (!b && !a.hasAttributes()) return !0; if (f = c._AC) c = f; else { var f = {}, d = 0, g = c.attributes; if (g) for (var e in g) d++, f[e] = g[e]; if (e = CKEDITOR.style.getStyleText(c)) f.style || d++, f.style = e; f._length = d; c = c._AC = f } if (c._length) { for (var h in c) if ("_length" != h) if (f = a.getAttribute(h) || "", "style" == h ? C(c[h], f) : c[h] == f) { if (!b) return !0 } else if (b) return !1; if (b) return !0 } else return !0 } return !1
                    }, checkElementRemovable: function (a, b, c) {
                        if (this.checkElementMatch(a,
                            b, c)) return !0; if (b = t(this)[a.getName()]) { var f; if (!(b = b.attributes)) return !0; for (c = 0; c < b.length; c++)if (f = b[c][0], f = a.getAttribute(f)) { var d = b[c][1]; if (null === d) return !0; if ("string" == typeof d) { if (f == d) return !0 } else if (d.test(f)) return !0 } } return !1
                    }, buildPreview: function (a) {
                        var b = this._.definition, c = [], f = b.element; "bdo" == f && (f = "span"); var c = ["\x3c", f], d = b.attributes; if (d) for (var g in d) c.push(" ", g, '\x3d"', d[g], '"'); (d = CKEDITOR.style.getStyleText(b)) && c.push(' style\x3d"', d, '"'); c.push("\x3e", a || b.name,
                            "\x3c/", f, "\x3e"); return c.join("")
                    }, getDefinition: function () { return this._.definition }
                }; CKEDITOR.style.getStyleText = function (a) { var b = a._ST; if (b) return b; var b = a.styles, c = a.attributes && a.attributes.style || "", f = ""; c.length && (c = c.replace(F, ";")); for (var d in b) { var g = b[d], e = (d + ":" + g).replace(F, ";"); "inherit" == g ? f += e : c += e } c.length && (c = CKEDITOR.tools.normalizeCssText(c, !0)); return a._ST = c + f }; CKEDITOR.style.customHandlers = {}; CKEDITOR.style.addCustomHandler = function (a) {
                    var b = function (a) {
                        this._ = { definition: a };
                        this.setup && this.setup(a)
                    }; b.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype), { assignedTo: CKEDITOR.STYLE_OBJECT }, a, !0); return this.customHandlers[a.type] = b
                }; var K = CKEDITOR.POSITION_PRECEDING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED, J = CKEDITOR.POSITION_FOLLOWING | CKEDITOR.POSITION_IDENTICAL | CKEDITOR.POSITION_IS_CONTAINED
        }(), CKEDITOR.styleCommand = function (a, e) { this.requiredContent = this.allowedContent = this.style = a; CKEDITOR.tools.extend(this, e, !0) },
        CKEDITOR.styleCommand.prototype.exec = function (a) { a.focus(); this.state == CKEDITOR.TRISTATE_OFF ? a.applyStyle(this.style) : this.state == CKEDITOR.TRISTATE_ON && a.removeStyle(this.style) }, CKEDITOR.stylesSet = new CKEDITOR.resourceManager("", "stylesSet"), CKEDITOR.addStylesSet = CKEDITOR.tools.bind(CKEDITOR.stylesSet.add, CKEDITOR.stylesSet), CKEDITOR.loadStylesSet = function (a, e, b) { CKEDITOR.stylesSet.addExternal(a, e, ""); CKEDITOR.stylesSet.load(a, b) }, CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
            attachStyleStateChange: function (a,
                e) { var b = this._.styleStateChangeCallbacks; b || (b = this._.styleStateChangeCallbacks = [], this.on("selectionChange", function (a) { for (var d = 0; d < b.length; d++) { var e = b[d], k = e.style.checkActive(a.data.path, this) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF; e.fn.call(this, k) } })); b.push({ style: a, fn: e }) }, applyStyle: function (a) { a.apply(this) }, removeStyle: function (a) { a.remove(this) }, getStylesSet: function (a) {
                    if (this._.stylesDefinitions) a(this._.stylesDefinitions); else {
                        var e = this, b = e.config.stylesCombo_stylesSet || e.config.stylesSet;
                        if (!1 === b) a(null); else if (b instanceof Array) e._.stylesDefinitions = b, a(b); else { b || (b = "default"); var b = b.split(":"), c = b[0]; CKEDITOR.stylesSet.addExternal(c, b[1] ? b.slice(1).join(":") : CKEDITOR.getUrl("styles.js"), ""); CKEDITOR.stylesSet.load(c, function (b) { e._.stylesDefinitions = b[c]; a(e._.stylesDefinitions) }) }
                    }
                }
        }), CKEDITOR.dom.comment = function (a, e) { "string" == typeof a && (a = (e ? e.$ : document).createComment(a)); CKEDITOR.dom.domObject.call(this, a) }, CKEDITOR.dom.comment.prototype = new CKEDITOR.dom.node, CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,
            { type: CKEDITOR.NODE_COMMENT, getOuterHtml: function () { return "\x3c!--" + this.$.nodeValue + "--\x3e" } }), "use strict", function () {
                var a = {}, e = {}, b; for (b in CKEDITOR.dtd.$blockLimit) b in CKEDITOR.dtd.$list || (a[b] = 1); for (b in CKEDITOR.dtd.$block) b in CKEDITOR.dtd.$blockLimit || b in CKEDITOR.dtd.$empty || (e[b] = 1); CKEDITOR.dom.elementPath = function (b, d) {
                    var l = null, k = null, g = [], h = b, m; d = d || b.getDocument().getBody(); h || (h = d); do if (h.type == CKEDITOR.NODE_ELEMENT) {
                        g.push(h); if (!this.lastElement && (this.lastElement = h, h.is(CKEDITOR.dtd.$object) ||
                            "false" == h.getAttribute("contenteditable"))) continue; if (h.equals(d)) break; if (!k && (m = h.getName(), "true" == h.getAttribute("contenteditable") ? k = h : !l && e[m] && (l = h), a[m])) { if (m = !l && "div" == m) { a: { m = h.getChildren(); for (var f = 0, n = m.count(); f < n; f++) { var r = m.getItem(f); if (r.type == CKEDITOR.NODE_ELEMENT && CKEDITOR.dtd.$block[r.getName()]) { m = !0; break a } } m = !1 } m = !m } m ? l = h : k = h }
                    } while (h = h.getParent()); k || (k = d); this.block = l; this.blockLimit = k; this.root = d; this.elements = g
                }
            }(), CKEDITOR.dom.elementPath.prototype = {
                compare: function (a) {
                    var e =
                        this.elements; a = a && a.elements; if (!a || e.length != a.length) return !1; for (var b = 0; b < e.length; b++)if (!e[b].equals(a[b])) return !1; return !0
                }, contains: function (a, e, b) {
                    var c = 0, d; "string" == typeof a && (d = function (b) { return b.getName() == a }); a instanceof CKEDITOR.dom.element ? d = function (b) { return b.equals(a) } : CKEDITOR.tools.isArray(a) ? d = function (b) { return -1 < CKEDITOR.tools.indexOf(a, b.getName()) } : "function" == typeof a ? d = a : "object" == typeof a && (d = function (b) { return b.getName() in a }); var l = this.elements, k = l.length; e &&
                        (b ? c += 1 : --k); b && (l = Array.prototype.slice.call(l, 0), l.reverse()); for (; c < k; c++)if (d(l[c])) return l[c]; return null
                }, isContextFor: function (a) { var e; return a in CKEDITOR.dtd.$block ? (e = this.contains(CKEDITOR.dtd.$intermediate) || this.root.equals(this.block) && this.block || this.blockLimit, !!e.getDtd()[a]) : !0 }, direction: function () { return (this.block || this.blockLimit || this.root).getDirection(1) }
            }, CKEDITOR.dom.text = function (a, e) { "string" == typeof a && (a = (e ? e.$ : document).createTextNode(a)); this.$ = a }, CKEDITOR.dom.text.prototype =
        new CKEDITOR.dom.node, CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype, {
            type: CKEDITOR.NODE_TEXT, getLength: function () { return this.$.nodeValue.length }, getText: function () { return this.$.nodeValue }, setText: function (a) { this.$.nodeValue = a }, split: function (a) {
                var e = this.$.parentNode, b = e.childNodes.length, c = this.getLength(), d = this.getDocument(), l = new CKEDITOR.dom.text(this.$.splitText(a), d); e.childNodes.length == b && (a >= c ? (l = d.createText(""), l.insertAfter(this)) : (a = d.createText(""), a.insertAfter(l), a.remove()));
                return l
            }, substring: function (a, e) { return "number" != typeof e ? this.$.nodeValue.substr(a) : this.$.nodeValue.substring(a, e) }
        }), function () {
            function a(a, c, d) {
                var e = a.serializable, k = c[d ? "endContainer" : "startContainer"], g = d ? "endOffset" : "startOffset", h = e ? c.document.getById(a.startNode) : a.startNode; a = e ? c.document.getById(a.endNode) : a.endNode; k.equals(h.getPrevious()) ? (c.startOffset = c.startOffset - k.getLength() - a.getPrevious().getLength(), k = a.getNext()) : k.equals(a.getPrevious()) && (c.startOffset -= k.getLength(),
                    k = a.getNext()); k.equals(h.getParent()) && c[g]++; k.equals(a.getParent()) && c[g]++; c[d ? "endContainer" : "startContainer"] = k; return c
            } CKEDITOR.dom.rangeList = function (a) { if (a instanceof CKEDITOR.dom.rangeList) return a; a ? a instanceof CKEDITOR.dom.range && (a = [a]) : a = []; return CKEDITOR.tools.extend(a, e) }; var e = {
                createIterator: function () {
                    var a = this, c = CKEDITOR.dom.walker.bookmark(), d = [], e; return {
                        getNextRange: function (k) {
                            e = void 0 === e ? 0 : e + 1; var g = a[e]; if (g && 1 < a.length) {
                                if (!e) for (var h = a.length - 1; 0 <= h; h--)d.unshift(a[h].createBookmark(!0));
                                if (k) for (var m = 0; a[e + m + 1];) { var f = g.document; k = 0; h = f.getById(d[m].endNode); for (f = f.getById(d[m + 1].startNode); ;) { h = h.getNextSourceNode(!1); if (f.equals(h)) k = 1; else if (c(h) || h.type == CKEDITOR.NODE_ELEMENT && h.isBlockBoundary()) continue; break } if (!k) break; m++ } for (g.moveToBookmark(d.shift()); m--;)h = a[++e], h.moveToBookmark(d.shift()), g.setEnd(h.endContainer, h.endOffset)
                            } return g
                        }
                    }
                }, createBookmarks: function (b) {
                    for (var c = [], d, e = 0; e < this.length; e++) {
                        c.push(d = this[e].createBookmark(b, !0)); for (var k = e + 1; k < this.length; k++)this[k] =
                            a(d, this[k]), this[k] = a(d, this[k], !0)
                    } return c
                }, createBookmarks2: function (a) { for (var c = [], d = 0; d < this.length; d++)c.push(this[d].createBookmark2(a)); return c }, moveToBookmarks: function (a) { for (var c = 0; c < this.length; c++)this[c].moveToBookmark(a[c]) }
            }
        }(), function () {
            function a() { return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1] || "skins/" + CKEDITOR.skinName.split(",")[0] + "/") } function e(b) {
                var c = CKEDITOR.skin["ua_" + b], d = CKEDITOR.env; if (c) for (var c = c.split(",").sort(function (a, b) { return a > b ? -1 : 1 }), g = 0,
                    e; g < c.length; g++)if (e = c[g], d.ie && (e.replace(/^ie/, "") == d.version || d.quirks && "iequirks" == e) && (e = "ie"), d[e]) { b += "_" + c[g]; break } return CKEDITOR.getUrl(a() + b + ".css")
            } function b(a, b) { l[a] || (CKEDITOR.document.appendStyleSheet(e(a)), l[a] = 1); b && b() } function c(a) { var b = a.getById(k); b || (b = a.getHead().append("style"), b.setAttribute("id", k), b.setAttribute("type", "text/css")); return b } function d(a, b, c) {
                var d, g, e; if (CKEDITOR.env.webkit) for (b = b.split("}").slice(0, -1), g = 0; g < b.length; g++)b[g] = b[g].split("{"); for (var h =
                    0; h < a.length; h++)if (CKEDITOR.env.webkit) for (g = 0; g < b.length; g++) { e = b[g][1]; for (d = 0; d < c.length; d++)e = e.replace(c[d][0], c[d][1]); a[h].$.sheet.addRule(b[g][0], e) } else { e = b; for (d = 0; d < c.length; d++)e = e.replace(c[d][0], c[d][1]); CKEDITOR.env.ie && 11 > CKEDITOR.env.version ? a[h].$.styleSheet.cssText += e : a[h].$.innerHTML += e }
            } var l = {}; CKEDITOR.skin = {
                path: a, loadPart: function (c, f) { CKEDITOR.skin.name != CKEDITOR.skinName.split(",")[0] ? CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a() + "skin.js"), function () { b(c, f) }) : b(c, f) },
                getPath: function (a) { return CKEDITOR.getUrl(e(a)) }, icons: {}, addIcon: function (a, b, c, d) { a = a.toLowerCase(); this.icons[a] || (this.icons[a] = { path: b, offset: c || 0, bgsize: d || "16px" }) }, getIconStyle: function (a, b, c, d, g) { var e; a && (a = a.toLowerCase(), b && (e = this.icons[a + "-rtl"]), e || (e = this.icons[a])); a = c || e && e.path || ""; d = d || e && e.offset; g = g || e && e.bgsize || "16px"; a && (a = a.replace(/'/g, "\\'")); return a && "background-image:url('" + CKEDITOR.getUrl(a) + "');background-position:0 " + d + "px;background-size:" + g + ";" }
            }; CKEDITOR.tools.extend(CKEDITOR.editor.prototype,
                { getUiColor: function () { return this.uiColor }, setUiColor: function (a) { var b = c(CKEDITOR.document); return (this.setUiColor = function (a) { this.uiColor = a; var c = CKEDITOR.skin.chameleon, e = "", m = ""; "function" == typeof c && (e = c(this, "editor"), m = c(this, "panel")); a = [[h, a]]; d([b], e, a); d(g, m, a) }).call(this, a) } }); var k = "cke_ui_color", g = [], h = /\$color/g; CKEDITOR.on("instanceLoaded", function (a) {
                    if (!CKEDITOR.env.ie || !CKEDITOR.env.quirks) {
                        var b = a.editor; a = function (a) {
                            a = (a.data[0] || a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();
                            if (!a.getById("cke_ui_color")) { a = c(a); g.push(a); var e = b.getUiColor(); e && d([a], CKEDITOR.skin.chameleon(b, "panel"), [[h, e]]) }
                        }; b.on("panelShow", a); b.on("menuShow", a); b.config.uiColor && b.setUiColor(b.config.uiColor)
                    }
                })
        }(), function () {
            if (CKEDITOR.env.webkit) CKEDITOR.env.hc = !1; else {
                var a = CKEDITOR.dom.element.createFromHtml('\x3cdiv style\x3d"width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"\x3e\x3c/div\x3e', CKEDITOR.document); a.appendTo(CKEDITOR.document.getHead());
                try { var e = a.getComputedStyle("border-top-color"), b = a.getComputedStyle("border-right-color"); CKEDITOR.env.hc = !(!e || e != b) } catch (c) { CKEDITOR.env.hc = !1 } a.remove()
            } CKEDITOR.env.hc && (CKEDITOR.env.cssClass += " cke_hc"); CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}"); CKEDITOR.status = "loaded"; CKEDITOR.fireOnce("loaded"); if (a = CKEDITOR._.pending) for (delete CKEDITOR._.pending, e = 0; e < a.length; e++)CKEDITOR.editor.prototype.constructor.apply(a[e][0], a[e][1]), CKEDITOR.add(a[e][0])
        }(), CKEDITOR.skin.name =
        "moono-lisa", CKEDITOR.skin.ua_editor = "ie,iequirks,ie8,gecko", CKEDITOR.skin.ua_dialog = "ie,iequirks,ie8", CKEDITOR.skin.chameleon = function () {
            var a = function () { return function (a, c) { for (var d = a.match(/[^#]./g), e = 0; 3 > e; e++) { var k = e, g; g = parseInt(d[e], 16); g = ("0" + (0 > c ? 0 | g * (1 + c) : 0 | g + (255 - g) * c).toString(16)).slice(-2); d[k] = g } return "#" + d.join("") } }(), e = {
                editor: new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_bottom [background-color:{defaultBackground};border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [background-color:{defaultBackground};border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [background-color:{defaultBackground};outline-color:{defaultBorder};] {id} .cke_dialog_tab [background-color:{dialogTab};border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [background-color:{lightBackground};] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} a.cke_button_off:hover,{id} a.cke_button_off:focus,{id} a.cke_button_off:active [background-color:{darkBackground};border-color:{toolbarElementsBorder};] {id} .cke_button_on [background-color:{ckeButtonOn};border-color:{toolbarElementsBorder};] {id} .cke_toolbar_separator,{id} .cke_toolgroup a.cke_button:last-child:after,{id} .cke_toolgroup a.cke_button.cke_button_disabled:hover:last-child:after [background-color: {toolbarElementsBorder};border-color: {toolbarElementsBorder};] {id} a.cke_combo_button:hover,{id} a.cke_combo_button:focus,{id} .cke_combo_on a.cke_combo_button [border-color:{toolbarElementsBorder};background-color:{darkBackground};] {id} .cke_combo:after [border-color:{toolbarElementsBorder};] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover,{id} a.cke_path_item:focus,{id} a.cke_path_item:active [background-color:{darkBackground};] {id}.cke_panel [border-color:{defaultBorder};] "),
                panel: new CKEDITOR.template(".cke_panel_grouptitle [background-color:{lightBackground};border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover,.cke_menubutton:focus,.cke_menubutton:active [background-color:{menubuttonHover};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menubutton_disabled:hover .cke_menubutton_icon,.cke_menubutton_disabled:focus .cke_menubutton_icon,.cke_menubutton_disabled:active .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")
            };
            return function (b, c) { var d = a(b.uiColor, .4), d = { id: "." + b.id, defaultBorder: a(d, -.2), toolbarElementsBorder: a(d, -.25), defaultBackground: d, lightBackground: a(d, .8), darkBackground: a(d, -.15), ckeButtonOn: a(d, .4), ckeResizer: a(d, -.4), ckeColorauto: a(d, .8), dialogBody: a(d, .7), dialogTab: a(d, .65), dialogTabSelected: "#FFF", dialogTabSelectedBorder: "#FFF", elementsPathColor: a(d, -.6), menubuttonHover: a(d, .1), menubuttonIcon: a(d, .5), menubuttonIconHover: a(d, .3) }; return e[c].output(d).replace(/\[/g, "{").replace(/\]/g, "}") }
        }(),
        CKEDITOR.plugins.add("dialogui", {
            onLoad: function () {
                var a = function (a) { this._ || (this._ = {}); this._["default"] = this._.initValue = a["default"] || ""; this._.required = a.required || !1; for (var b = [this._], c = 1; c < arguments.length; c++)b.push(arguments[c]); b.push(!0); CKEDITOR.tools.extend.apply(CKEDITOR.tools, b); return this._ }, e = { build: function (a, b, c) { return new CKEDITOR.ui.dialog.textInput(a, b, c) } }, b = { build: function (a, b, c) { return new CKEDITOR.ui.dialog[b.type](a, b, c) } }, c = {
                    isChanged: function () {
                        return this.getValue() !=
                            this.getInitValue()
                    }, reset: function (a) { this.setValue(this.getInitValue(), a) }, setInitValue: function () { this._.initValue = this.getValue() }, resetInitValue: function () { this._.initValue = this._["default"] }, getInitValue: function () { return this._.initValue }
                }, d = CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, {
                    onChange: function (a, b) {
                        this._.domOnChangeRegistered || (a.on("load", function () {
                            this.getInputElement().on("change", function () { a.parts.dialog.isVisible() && this.fire("change", { value: this.getValue() }) },
                                this)
                        }, this), this._.domOnChangeRegistered = !0); this.on("change", b)
                    }
                }, !0), l = /^on([A-Z]\w+)/, k = function (a) { for (var b in a) (l.test(b) || "title" == b || "type" == b) && delete a[b]; return a }, g = function (a) { a = a.data.getKeystroke(); a == CKEDITOR.SHIFT + CKEDITOR.ALT + 36 ? this.setDirectionMarker("ltr") : a == CKEDITOR.SHIFT + CKEDITOR.ALT + 35 && this.setDirectionMarker("rtl") }; CKEDITOR.tools.extend(CKEDITOR.ui.dialog, {
                    labeledElement: function (b, c, f, d) {
                        if (!(4 > arguments.length)) {
                            var g = a.call(this, c); g.labelId = CKEDITOR.tools.getNextId() +
                                "_label"; this._.children = []; var e = { role: c.role || "presentation" }; c.includeLabel && (e["aria-labelledby"] = g.labelId); CKEDITOR.ui.dialog.uiElement.call(this, b, c, f, "div", null, e, function () {
                                    var a = [], f = c.required ? " cke_required" : ""; "horizontal" != c.labelLayout ? a.push('\x3clabel class\x3d"cke_dialog_ui_labeled_label' + f + '" ', ' id\x3d"' + g.labelId + '"', g.inputId ? ' for\x3d"' + g.inputId + '"' : "", (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e", c.label, "\x3c/label\x3e", '\x3cdiv class\x3d"cke_dialog_ui_labeled_content"',
                                        c.controlStyle ? ' style\x3d"' + c.controlStyle + '"' : "", ' role\x3d"presentation"\x3e', d.call(this, b, c), "\x3c/div\x3e") : (f = {
                                            type: "hbox", widths: c.widths, padding: 0, children: [{ type: "html", html: '\x3clabel class\x3d"cke_dialog_ui_labeled_label' + f + '" id\x3d"' + g.labelId + '" for\x3d"' + g.inputId + '"' + (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e" + CKEDITOR.tools.htmlEncode(c.label) + "\x3c/label\x3e" }, {
                                                type: "html", html: '\x3cspan class\x3d"cke_dialog_ui_labeled_content"' + (c.controlStyle ? ' style\x3d"' + c.controlStyle +
                                                    '"' : "") + "\x3e" + d.call(this, b, c) + "\x3c/span\x3e"
                                            }]
                                        }, CKEDITOR.dialog._.uiElementBuilders.hbox.build(b, f, a)); return a.join("")
                                })
                        }
                    }, textInput: function (b, c, f) {
                        if (!(3 > arguments.length)) {
                            a.call(this, c); var d = this._.inputId = CKEDITOR.tools.getNextId() + "_textInput", e = { "class": "cke_dialog_ui_input_" + c.type, id: d, type: c.type }; c.validate && (this.validate = c.validate); c.maxLength && (e.maxlength = c.maxLength); c.size && (e.size = c.size); c.inputStyle && (e.style = c.inputStyle); var k = this, l = !1; b.on("load", function () {
                                k.getInputElement().on("keydown",
                                    function (a) { 13 == a.data.getKeystroke() && (l = !0) }); k.getInputElement().on("keyup", function (a) { 13 == a.data.getKeystroke() && l && (b.getButton("ok") && setTimeout(function () { b.getButton("ok").click() }, 0), l = !1); k.bidi && g.call(k, a) }, null, null, 1E3)
                            }); CKEDITOR.ui.dialog.labeledElement.call(this, b, c, f, function () {
                                var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_', c.type, '" role\x3d"presentation"']; c.width && a.push('style\x3d"width:' + c.width + '" '); a.push("\x3e\x3cinput "); e["aria-labelledby"] = this._.labelId; this._.required &&
                                    (e["aria-required"] = this._.required); for (var b in e) a.push(b + '\x3d"' + e[b] + '" '); a.push(" /\x3e\x3c/div\x3e"); return a.join("")
                            })
                        }
                    }, textarea: function (b, c, f) {
                        if (!(3 > arguments.length)) {
                            a.call(this, c); var d = this, e = this._.inputId = CKEDITOR.tools.getNextId() + "_textarea", k = {}; c.validate && (this.validate = c.validate); k.rows = c.rows || 5; k.cols = c.cols || 20; k["class"] = "cke_dialog_ui_input_textarea " + (c["class"] || ""); "undefined" != typeof c.inputStyle && (k.style = c.inputStyle); c.dir && (k.dir = c.dir); if (d.bidi) b.on("load",
                                function () { d.getInputElement().on("keyup", g) }, d); CKEDITOR.ui.dialog.labeledElement.call(this, b, c, f, function () { k["aria-labelledby"] = this._.labelId; this._.required && (k["aria-required"] = this._.required); var a = ['\x3cdiv class\x3d"cke_dialog_ui_input_textarea" role\x3d"presentation"\x3e\x3ctextarea id\x3d"', e, '" '], b; for (b in k) a.push(b + '\x3d"' + CKEDITOR.tools.htmlEncode(k[b]) + '" '); a.push("\x3e", CKEDITOR.tools.htmlEncode(d._["default"]), "\x3c/textarea\x3e\x3c/div\x3e"); return a.join("") })
                        }
                    }, checkbox: function (b,
                        c, f) {
                            if (!(3 > arguments.length)) {
                                var d = a.call(this, c, { "default": !!c["default"] }); c.validate && (this.validate = c.validate); CKEDITOR.ui.dialog.uiElement.call(this, b, c, f, "span", null, null, function () {
                                    var a = CKEDITOR.tools.extend({}, c, { id: c.id ? c.id + "_checkbox" : CKEDITOR.tools.getNextId() + "_checkbox" }, !0), f = [], g = CKEDITOR.tools.getNextId() + "_label", e = { "class": "cke_dialog_ui_checkbox_input", type: "checkbox", "aria-labelledby": g }; k(a); c["default"] && (e.checked = "checked"); "undefined" != typeof a.inputStyle && (a.style = a.inputStyle);
                                    d.checkbox = new CKEDITOR.ui.dialog.uiElement(b, a, f, "input", null, e); f.push(' \x3clabel id\x3d"', g, '" for\x3d"', e.id, '"' + (c.labelStyle ? ' style\x3d"' + c.labelStyle + '"' : "") + "\x3e", CKEDITOR.tools.htmlEncode(c.label), "\x3c/label\x3e"); return f.join("")
                                })
                            }
                    }, radio: function (b, c, f) {
                        if (!(3 > arguments.length)) {
                            a.call(this, c); this._["default"] || (this._["default"] = this._.initValue = c.items[0][1]); c.validate && (this.validate = c.validate); var d = [], g = this; c.role = "radiogroup"; c.includeLabel = !0; CKEDITOR.ui.dialog.labeledElement.call(this,
                                b, c, f, function () {
                                    for (var a = [], f = [], e = (c.id ? c.id : CKEDITOR.tools.getNextId()) + "_radio", l = 0; l < c.items.length; l++) {
                                        var w = c.items[l], q = void 0 !== w[2] ? w[2] : w[0], B = void 0 !== w[1] ? w[1] : w[0], t = CKEDITOR.tools.getNextId() + "_radio_input", x = t + "_label", t = CKEDITOR.tools.extend({}, c, { id: t, title: null, type: null }, !0), q = CKEDITOR.tools.extend({}, t, { title: q }, !0), C = { type: "radio", "class": "cke_dialog_ui_radio_input", name: e, value: B, "aria-labelledby": x }, z = []; g._["default"] == B && (C.checked = "checked"); k(t); k(q); "undefined" != typeof t.inputStyle &&
                                            (t.style = t.inputStyle); t.keyboardFocusable = !0; d.push(new CKEDITOR.ui.dialog.uiElement(b, t, z, "input", null, C)); z.push(" "); new CKEDITOR.ui.dialog.uiElement(b, q, z, "label", null, { id: x, "for": C.id }, w[0]); a.push(z.join(""))
                                    } new CKEDITOR.ui.dialog.hbox(b, d, a, f); return f.join("")
                                }); this._.children = d
                        }
                    }, button: function (b, c, f) {
                        if (arguments.length) {
                            "function" == typeof c && (c = c(b.getParentEditor())); a.call(this, c, { disabled: c.disabled || !1 }); CKEDITOR.event.implementOn(this); var d = this; b.on("load", function () {
                                var a = this.getElement();
                                (function () { a.on("click", function (a) { d.click(); a.data.preventDefault() }); a.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1 } && (d.click(), a.data.preventDefault()) }) })(); a.unselectable()
                            }, this); var g = CKEDITOR.tools.extend({}, c); delete g.style; var e = CKEDITOR.tools.getNextId() + "_label"; CKEDITOR.ui.dialog.uiElement.call(this, b, g, f, "a", null, { style: c.style, href: "javascript:void(0)", title: c.label, hidefocus: "true", "class": c["class"], role: "button", "aria-labelledby": e }, '\x3cspan id\x3d"' + e + '" class\x3d"cke_dialog_ui_button"\x3e' +
                                CKEDITOR.tools.htmlEncode(c.label) + "\x3c/span\x3e")
                        }
                    }, select: function (b, c, f) {
                        if (!(3 > arguments.length)) {
                            var d = a.call(this, c); c.validate && (this.validate = c.validate); d.inputId = CKEDITOR.tools.getNextId() + "_select"; CKEDITOR.ui.dialog.labeledElement.call(this, b, c, f, function () {
                                var a = CKEDITOR.tools.extend({}, c, { id: c.id ? c.id + "_select" : CKEDITOR.tools.getNextId() + "_select" }, !0), f = [], g = [], e = { id: d.inputId, "class": "cke_dialog_ui_input_select", "aria-labelledby": this._.labelId }; f.push('\x3cdiv class\x3d"cke_dialog_ui_input_',
                                    c.type, '" role\x3d"presentation"'); c.width && f.push('style\x3d"width:' + c.width + '" '); f.push("\x3e"); void 0 !== c.size && (e.size = c.size); void 0 !== c.multiple && (e.multiple = c.multiple); k(a); for (var l = 0, w; l < c.items.length && (w = c.items[l]); l++)g.push('\x3coption value\x3d"', CKEDITOR.tools.htmlEncode(void 0 !== w[1] ? w[1] : w[0]).replace(/"/g, "\x26quot;"), '" /\x3e ', CKEDITOR.tools.htmlEncode(w[0])); "undefined" != typeof a.inputStyle && (a.style = a.inputStyle); d.select = new CKEDITOR.ui.dialog.uiElement(b, a, f, "select", null,
                                        e, g.join("")); f.push("\x3c/div\x3e"); return f.join("")
                            })
                        }
                    }, file: function (b, c, f) {
                        if (!(3 > arguments.length)) {
                            void 0 === c["default"] && (c["default"] = ""); var d = CKEDITOR.tools.extend(a.call(this, c), { definition: c, buttons: [] }); c.validate && (this.validate = c.validate); b.on("load", function () { CKEDITOR.document.getById(d.frameId).getParent().addClass("cke_dialog_ui_input_file") }); CKEDITOR.ui.dialog.labeledElement.call(this, b, c, f, function () {
                                d.frameId = CKEDITOR.tools.getNextId() + "_fileInput"; var a = ['\x3ciframe frameborder\x3d"0" allowtransparency\x3d"0" class\x3d"cke_dialog_ui_input_file" role\x3d"presentation" id\x3d"',
                                    d.frameId, '" title\x3d"', c.label, '" src\x3d"javascript:void(']; a.push(CKEDITOR.env.ie ? "(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "})()" : "0"); a.push(')"\x3e\x3c/iframe\x3e'); return a.join("")
                            })
                        }
                    }, fileButton: function (b, c, f) {
                        var d = this; if (!(3 > arguments.length)) {
                            a.call(this, c); c.validate && (this.validate = c.validate); var g = CKEDITOR.tools.extend({}, c), e = g.onClick; g.className = (g.className ? g.className + " " : "") + "cke_dialog_ui_button"; g.onClick = function (a) {
                                var f =
                                    c["for"]; a = e ? e.call(this, a) : !1; !1 !== a && ("xhr" !== a && b.getContentElement(f[0], f[1]).submit(), this.disable())
                            }; b.on("load", function () { b.getContentElement(c["for"][0], c["for"][1])._.buttons.push(d) }); CKEDITOR.ui.dialog.button.call(this, b, g, f)
                        }
                    }, html: function () {
                        var a = /^\s*<[\w:]+\s+([^>]*)?>/, b = /^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/, c = /\/$/; return function (d, g, e) {
                            if (!(3 > arguments.length)) {
                                var k = [], l = g.html; "\x3c" != l.charAt(0) && (l = "\x3cspan\x3e" + l + "\x3c/span\x3e"); var p = g.focus; if (p) {
                                    var w = this.focus;
                                    this.focus = function () { ("function" == typeof p ? p : w).call(this); this.fire("focus") }; g.isFocusable && (this.isFocusable = this.isFocusable); this.keyboardFocusable = !0
                                } CKEDITOR.ui.dialog.uiElement.call(this, d, g, k, "span", null, null, ""); k = k.join("").match(a); l = l.match(b) || ["", "", ""]; c.test(l[1]) && (l[1] = l[1].slice(0, -1), l[2] = "/" + l[2]); e.push([l[1], " ", k[1] || "", l[2]].join(""))
                            }
                        }
                    }(), fieldset: function (a, b, c, d, g) {
                        var e = g.label; this._ = { children: b }; CKEDITOR.ui.dialog.uiElement.call(this, a, g, d, "fieldset", null, null, function () {
                            var a =
                                []; e && a.push("\x3clegend" + (g.labelStyle ? ' style\x3d"' + g.labelStyle + '"' : "") + "\x3e" + e + "\x3c/legend\x3e"); for (var b = 0; b < c.length; b++)a.push(c[b]); return a.join("")
                        })
                    }
                }, !0); CKEDITOR.ui.dialog.html.prototype = new CKEDITOR.ui.dialog.uiElement; CKEDITOR.ui.dialog.labeledElement.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    setLabel: function (a) {
                        var b = CKEDITOR.document.getById(this._.labelId); 1 > b.getChildCount() ? (new CKEDITOR.dom.text(a, CKEDITOR.document)).appendTo(b) : b.getChild(0).$.nodeValue =
                            a; return this
                    }, getLabel: function () { var a = CKEDITOR.document.getById(this._.labelId); return !a || 1 > a.getChildCount() ? "" : a.getChild(0).getText() }, eventProcessors: d
                }, !0); CKEDITOR.ui.dialog.button.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                    click: function () { return this._.disabled ? !1 : this.fire("click", { dialog: this._.dialog }) }, enable: function () { this._.disabled = !1; var a = this.getElement(); a && a.removeClass("cke_disabled") }, disable: function () { this._.disabled = !0; this.getElement().addClass("cke_disabled") },
                    isVisible: function () { return this.getElement().getFirst().isVisible() }, isEnabled: function () { return !this._.disabled }, eventProcessors: CKEDITOR.tools.extend({}, CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors, { onClick: function (a, b) { this.on("click", function () { b.apply(this, arguments) }) } }, !0), accessKeyUp: function () { this.click() }, accessKeyDown: function () { this.focus() }, keyboardFocusable: !0
                }, !0); CKEDITOR.ui.dialog.textInput.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, {
                    getInputElement: function () { return CKEDITOR.document.getById(this._.inputId) },
                    focus: function () { var a = this.selectParentTab(); setTimeout(function () { var b = a.getInputElement(); b && b.$.focus() }, 0) }, select: function () { var a = this.selectParentTab(); setTimeout(function () { var b = a.getInputElement(); b && (b.$.focus(), b.$.select()) }, 0) }, accessKeyUp: function () { this.select() }, setValue: function (a) { if (this.bidi) { var b = a && a.charAt(0); (b = "‪" == b ? "ltr" : "‫" == b ? "rtl" : null) && (a = a.slice(1)); this.setDirectionMarker(b) } a || (a = ""); return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this, arguments) },
                    getValue: function () { var a = CKEDITOR.ui.dialog.uiElement.prototype.getValue.call(this); if (this.bidi && a) { var b = this.getDirectionMarker(); b && (a = ("ltr" == b ? "‪" : "‫") + a) } return a }, setDirectionMarker: function (a) { var b = this.getInputElement(); a ? b.setAttributes({ dir: a, "data-cke-dir-marker": a }) : this.getDirectionMarker() && b.removeAttributes(["dir", "data-cke-dir-marker"]) }, getDirectionMarker: function () { return this.getInputElement().data("cke-dir-marker") }, keyboardFocusable: !0
                }, c, !0); CKEDITOR.ui.dialog.textarea.prototype =
                    new CKEDITOR.ui.dialog.textInput; CKEDITOR.ui.dialog.select.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, {
                        getInputElement: function () { return this._.select.getElement() }, add: function (a, b, c) { var d = new CKEDITOR.dom.element("option", this.getDialog().getParentEditor().document), g = this.getInputElement().$; d.$.text = a; d.$.value = void 0 === b || null === b ? a : b; void 0 === c || null === c ? CKEDITOR.env.ie ? g.add(d.$) : g.add(d.$, null) : g.add(d.$, c); return this }, remove: function (a) {
                            this.getInputElement().$.remove(a);
                            return this
                        }, clear: function () { for (var a = this.getInputElement().$; 0 < a.length;)a.remove(0); return this }, keyboardFocusable: !0
                    }, c, !0); CKEDITOR.ui.dialog.checkbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                        getInputElement: function () { return this._.checkbox.getElement() }, setValue: function (a, b) { this.getInputElement().$.checked = a; !b && this.fire("change", { value: a }) }, getValue: function () { return this.getInputElement().$.checked }, accessKeyUp: function () { this.setValue(!this.getValue()) }, eventProcessors: {
                            onChange: function (a,
                                b) { if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return d.onChange.apply(this, arguments); a.on("load", function () { var a = this._.checkbox.getElement(); a.on("propertychange", function (b) { b = b.data.$; "checked" == b.propertyName && this.fire("change", { value: a.$.checked }) }, this) }, this); this.on("change", b); return null }
                        }, keyboardFocusable: !0
                    }, c, !0); CKEDITOR.ui.dialog.radio.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement, {
                        setValue: function (a, b) {
                            for (var c = this._.children, d, g = 0; g < c.length && (d = c[g]); g++)d.getElement().$.checked =
                                d.getValue() == a; !b && this.fire("change", { value: a })
                        }, getValue: function () { for (var a = this._.children, b = 0; b < a.length; b++)if (a[b].getElement().$.checked) return a[b].getValue(); return null }, accessKeyUp: function () { var a = this._.children, b; for (b = 0; b < a.length; b++)if (a[b].getElement().$.checked) { a[b].getElement().focus(); return } a[0].getElement().focus() }, eventProcessors: {
                            onChange: function (a, b) {
                                if (!CKEDITOR.env.ie || 8 < CKEDITOR.env.version) return d.onChange.apply(this, arguments); a.on("load", function () {
                                    for (var a =
                                        this._.children, b = this, c = 0; c < a.length; c++)a[c].getElement().on("propertychange", function (a) { a = a.data.$; "checked" == a.propertyName && this.$.checked && b.fire("change", { value: this.getAttribute("value") }) })
                                }, this); this.on("change", b); return null
                            }
                        }
                    }, c, !0); CKEDITOR.ui.dialog.file.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement, c, {
                        getInputElement: function () {
                            var a = CKEDITOR.document.getById(this._.frameId).getFrameDocument(); return 0 < a.$.forms.length ? new CKEDITOR.dom.element(a.$.forms[0].elements[0]) :
                                this.getElement()
                        }, submit: function () { this.getInputElement().getParent().$.submit(); return this }, getAction: function () { return this.getInputElement().getParent().$.action }, registerEvents: function (a) { var b = /^on([A-Z]\w+)/, c, d = function (a, b, c, f) { a.on("formLoaded", function () { a.getInputElement().on(c, f, a) }) }, g; for (g in a) if (c = g.match(b)) this.eventProcessors[g] ? this.eventProcessors[g].call(this, this._.dialog, a[g]) : d(this, this._.dialog, c[1].toLowerCase(), a[g]); return this }, reset: function () {
                            function a() {
                                c.$.open();
                                var h = ""; d.size && (h = d.size - (CKEDITOR.env.ie ? 7 : 0)); var q = b.frameId + "_input"; c.$.write(['\x3chtml dir\x3d"' + l + '" lang\x3d"' + p + '"\x3e\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e\x3cbody style\x3d"margin: 0; overflow: hidden; background: transparent;"\x3e', '\x3cform enctype\x3d"multipart/form-data" method\x3d"POST" dir\x3d"' + l + '" lang\x3d"' + p + '" action\x3d"', CKEDITOR.tools.htmlEncode(d.action), '"\x3e\x3clabel id\x3d"', b.labelId, '" for\x3d"', q, '" style\x3d"display:none"\x3e', CKEDITOR.tools.htmlEncode(d.label),
                                    '\x3c/label\x3e\x3cinput style\x3d"width:100%" id\x3d"', q, '" aria-labelledby\x3d"', b.labelId, '" type\x3d"file" name\x3d"', CKEDITOR.tools.htmlEncode(d.id || "cke_upload"), '" size\x3d"', CKEDITOR.tools.htmlEncode(0 < h ? h : ""), '" /\x3e\x3c/form\x3e\x3c/body\x3e\x3c/html\x3e\x3cscript\x3e', CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "", "window.parent.CKEDITOR.tools.callFunction(" + e + ");", "window.onbeforeunload \x3d function() {window.parent.CKEDITOR.tools.callFunction(" + k + ")}", "\x3c/script\x3e"].join(""));
                                c.$.close(); for (h = 0; h < g.length; h++)g[h].enable()
                            } var b = this._, c = CKEDITOR.document.getById(b.frameId).getFrameDocument(), d = b.definition, g = b.buttons, e = this.formLoadedNumber, k = this.formUnloadNumber, l = b.dialog._.editor.lang.dir, p = b.dialog._.editor.langCode; e || (e = this.formLoadedNumber = CKEDITOR.tools.addFunction(function () { this.fire("formLoaded") }, this), k = this.formUnloadNumber = CKEDITOR.tools.addFunction(function () { this.getInputElement().clearCustomData() }, this), this.getDialog()._.editor.on("destroy", function () {
                                CKEDITOR.tools.removeFunction(e);
                                CKEDITOR.tools.removeFunction(k)
                            })); CKEDITOR.env.gecko ? setTimeout(a, 500) : a()
                        }, getValue: function () { return this.getInputElement().$.value || "" }, setInitValue: function () { this._.initValue = "" }, eventProcessors: { onChange: function (a, b) { this._.domOnChangeRegistered || (this.on("formLoaded", function () { this.getInputElement().on("change", function () { this.fire("change", { value: this.getValue() }) }, this) }, this), this._.domOnChangeRegistered = !0); this.on("change", b) } }, keyboardFocusable: !0
                    }, !0); CKEDITOR.ui.dialog.fileButton.prototype =
                        new CKEDITOR.ui.dialog.button; CKEDITOR.ui.dialog.fieldset.prototype = CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype); CKEDITOR.dialog.addUIElement("text", e); CKEDITOR.dialog.addUIElement("password", e); CKEDITOR.dialog.addUIElement("textarea", b); CKEDITOR.dialog.addUIElement("checkbox", b); CKEDITOR.dialog.addUIElement("radio", b); CKEDITOR.dialog.addUIElement("button", b); CKEDITOR.dialog.addUIElement("select", b); CKEDITOR.dialog.addUIElement("file", b); CKEDITOR.dialog.addUIElement("fileButton", b); CKEDITOR.dialog.addUIElement("html",
                            b); CKEDITOR.dialog.addUIElement("fieldset", { build: function (a, b, c) { for (var d = b.children, g, e = [], k = [], l = 0; l < d.length && (g = d[l]); l++) { var p = []; e.push(p); k.push(CKEDITOR.dialog._.uiElementBuilders[g.type].build(a, g, p)) } return new CKEDITOR.ui.dialog[b.type](a, k, e, c, b) } })
            }
        }), CKEDITOR.DIALOG_RESIZE_NONE = 0, CKEDITOR.DIALOG_RESIZE_WIDTH = 1, CKEDITOR.DIALOG_RESIZE_HEIGHT = 2, CKEDITOR.DIALOG_RESIZE_BOTH = 3, CKEDITOR.DIALOG_STATE_IDLE = 1, CKEDITOR.DIALOG_STATE_BUSY = 2, function () {
            function a() {
                for (var a = this._.tabIdList.length,
                    b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId) + a, c = b - 1; c > b - a; c--)if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a]; return null
            } function e() { for (var a = this._.tabIdList.length, b = CKEDITOR.tools.indexOf(this._.tabIdList, this._.currentTabId), c = b + 1; c < b + a; c++)if (this._.tabs[this._.tabIdList[c % a]][0].$.offsetHeight) return this._.tabIdList[c % a]; return null } function b(a, b) {
                for (var c = a.$.getElementsByTagName("input"), f = 0, d = c.length; f < d; f++) {
                    var g = new CKEDITOR.dom.element(c[f]);
                    "text" == g.getAttribute("type").toLowerCase() && (b ? (g.setAttribute("value", g.getCustomData("fake_value") || ""), g.removeCustomData("fake_value")) : (g.setCustomData("fake_value", g.getAttribute("value")), g.setAttribute("value", "")))
                }
            } function c(a, b) { var c = this.getInputElement(); c && (a ? c.removeAttribute("aria-invalid") : c.setAttribute("aria-invalid", !0)); a || (this.select ? this.select() : this.focus()); b && alert(b); this.fire("validated", { valid: a, msg: b }) } function d() { var a = this.getInputElement(); a && a.removeAttribute("aria-invalid") }
            function l(a) {
                var b = CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog", y).output({ id: CKEDITOR.tools.getNextNumber(), editorId: a.id, langDir: a.lang.dir, langCode: a.langCode, editorDialogClass: "cke_editor_" + a.name.replace(/\./g, "\\.") + "_dialog", closeTitle: a.lang.common.close, hidpi: CKEDITOR.env.hidpi ? "cke_hidpi" : "" })), c = b.getChild([0, 0, 0, 0, 0]), f = c.getChild(0), d = c.getChild(1); a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(c); !CKEDITOR.env.ie || CKEDITOR.env.quirks ||
                    CKEDITOR.env.edge || (a = "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())", CKEDITOR.dom.element.createFromHtml('\x3ciframe frameBorder\x3d"0" class\x3d"cke_iframe_shim" src\x3d"' + a + '" tabIndex\x3d"-1"\x3e\x3c/iframe\x3e').appendTo(c.getParent())); f.unselectable(); d.unselectable(); return { element: b, parts: { dialog: b.getChild(0), title: f, close: d, tabs: c.getChild(2), contents: c.getChild([3, 0, 0, 0]), footer: c.getChild([3, 0, 1, 0]) } }
            } function k(a,
                b, c) { this.element = b; this.focusIndex = c; this.tabIndex = 0; this.isFocusable = function () { return !b.getAttribute("disabled") && b.isVisible() }; this.focus = function () { a._.currentFocusIndex = this.focusIndex; this.element.focus() }; b.on("keydown", function (a) { a.data.getKeystroke() in { 32: 1, 13: 1 } && this.fire("click") }); b.on("focus", function () { this.fire("mouseover") }); b.on("blur", function () { this.fire("mouseout") }) } function g(a) {
                    function b() { a.layout() } var c = CKEDITOR.document.getWindow(); c.on("resize", b); a.on("hide", function () {
                        c.removeListener("resize",
                            b)
                    })
                } function h(a, b) { this._ = { dialog: a }; CKEDITOR.tools.extend(this, b) } function m(a) {
                    function b(c) { var k = a.getSize(), l = CKEDITOR.document.getWindow().getViewPaneSize(), m = c.data.$.screenX, n = c.data.$.screenY, p = m - f.x, q = n - f.y; f = { x: m, y: n }; d.x += p; d.y += q; a.move(d.x + h[3] < e ? -h[3] : d.x - h[1] > l.width - k.width - e ? l.width - k.width + ("rtl" == g.lang.dir ? 0 : h[1]) : d.x, d.y + h[0] < e ? -h[0] : d.y - h[2] > l.height - k.height - e ? l.height - k.height + h[2] : d.y, 1); c.data.preventDefault() } function c() {
                        CKEDITOR.document.removeListener("mousemove",
                            b); CKEDITOR.document.removeListener("mouseup", c); if (CKEDITOR.env.ie6Compat) { var a = z.getChild(0).getFrameDocument(); a.removeListener("mousemove", b); a.removeListener("mouseup", c) }
                    } var f = null, d = null, g = a.getParentEditor(), e = g.config.dialog_magnetDistance, h = CKEDITOR.skin.margins || [0, 0, 0, 0]; "undefined" == typeof e && (e = 20); a.parts.title.on("mousedown", function (g) {
                        f = { x: g.data.$.screenX, y: g.data.$.screenY }; CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", c); d = a.getPosition(); if (CKEDITOR.env.ie6Compat) {
                            var e =
                                z.getChild(0).getFrameDocument(); e.on("mousemove", b); e.on("mouseup", c)
                        } g.data.preventDefault()
                    }, a)
                } function f(a) {
                    function b(c) {
                        var n = "rtl" == g.lang.dir, p = m.width, q = m.height, w = p + (c.data.$.screenX - l.x) * (n ? -1 : 1) * (a._.moved ? 1 : 2), x = q + (c.data.$.screenY - l.y) * (a._.moved ? 1 : 2), r = a._.element.getFirst(), r = n && r.getComputedStyle("right"), t = a.getPosition(); t.y + x > k.height && (x = k.height - t.y); (n ? r : t.x) + w > k.width && (w = k.width - (n ? r : t.x)); if (d == CKEDITOR.DIALOG_RESIZE_WIDTH || d == CKEDITOR.DIALOG_RESIZE_BOTH) p = Math.max(f.minWidth ||
                            0, w - e); if (d == CKEDITOR.DIALOG_RESIZE_HEIGHT || d == CKEDITOR.DIALOG_RESIZE_BOTH) q = Math.max(f.minHeight || 0, x - h); a.resize(p, q); a._.moved || a.layout(); c.data.preventDefault()
                    } function c() { CKEDITOR.document.removeListener("mouseup", c); CKEDITOR.document.removeListener("mousemove", b); n && (n.remove(), n = null); if (CKEDITOR.env.ie6Compat) { var a = z.getChild(0).getFrameDocument(); a.removeListener("mouseup", c); a.removeListener("mousemove", b) } } var f = a.definition, d = f.resizable; if (d != CKEDITOR.DIALOG_RESIZE_NONE) {
                        var g = a.getParentEditor(),
                        e, h, k, l, m, n, p = CKEDITOR.tools.addFunction(function (f) {
                            m = a.getSize(); var d = a.parts.contents; d.$.getElementsByTagName("iframe").length && (n = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_dialog_resize_cover" style\x3d"height: 100%; position: absolute; width: 100%;"\x3e\x3c/div\x3e'), d.append(n)); h = m.height - a.parts.contents.getSize("height", !(CKEDITOR.env.gecko || CKEDITOR.env.ie && CKEDITOR.env.quirks)); e = m.width - a.parts.contents.getSize("width", 1); l = { x: f.screenX, y: f.screenY }; k = CKEDITOR.document.getWindow().getViewPaneSize();
                            CKEDITOR.document.on("mousemove", b); CKEDITOR.document.on("mouseup", c); CKEDITOR.env.ie6Compat && (d = z.getChild(0).getFrameDocument(), d.on("mousemove", b), d.on("mouseup", c)); f.preventDefault && f.preventDefault()
                        }); a.on("load", function () {
                            var b = ""; d == CKEDITOR.DIALOG_RESIZE_WIDTH ? b = " cke_resizer_horizontal" : d == CKEDITOR.DIALOG_RESIZE_HEIGHT && (b = " cke_resizer_vertical"); b = CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_resizer' + b + " cke_resizer_" + g.lang.dir + '" title\x3d"' + CKEDITOR.tools.htmlEncode(g.lang.common.resize) +
                                '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + p + ', event )"\x3e' + ("ltr" == g.lang.dir ? "◢" : "◣") + "\x3c/div\x3e"); a.parts.footer.append(b, 1)
                        }); g.on("destroy", function () { CKEDITOR.tools.removeFunction(p) })
                    }
                } function n(a) { a.data.preventDefault(1) } function r(a) {
                    var b = CKEDITOR.document.getWindow(), c = a.config, f = CKEDITOR.skinName || a.config.skin, d = c.dialog_backgroundCoverColor || ("moono-lisa" == f ? "black" : "white"), f = c.dialog_backgroundCoverOpacity, g = c.baseFloatZIndex, c = CKEDITOR.tools.genKey(d, f, g), e = C[c]; e ? e.show() :
                        (g = ['\x3cdiv tabIndex\x3d"-1" style\x3d"position: ', CKEDITOR.env.ie6Compat ? "absolute" : "fixed", "; z-index: ", g, "; top: 0px; left: 0px; ", CKEDITOR.env.ie6Compat ? "" : "background-color: " + d, '" class\x3d"cke_dialog_background_cover"\x3e'], CKEDITOR.env.ie6Compat && (d = "\x3chtml\x3e\x3cbody style\x3d\\'background-color:" + d + ";\\'\x3e\x3c/body\x3e\x3c/html\x3e", g.push('\x3ciframe hidefocus\x3d"true" frameborder\x3d"0" id\x3d"cke_dialog_background_iframe" src\x3d"javascript:'), g.push("void((function(){" + encodeURIComponent("document.open();(" +
                            CKEDITOR.tools.fixDomain + ")();document.write( '" + d + "' );document.close();") + "})())"), g.push('" style\x3d"position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity\x3d0)"\x3e\x3c/iframe\x3e')), g.push("\x3c/div\x3e"), e = CKEDITOR.dom.element.createFromHtml(g.join("")), e.setOpacity(void 0 !== f ? f : .5), e.on("keydown", n), e.on("keypress", n), e.on("keyup", n), e.appendTo(CKEDITOR.document.getBody()), C[c] = e); a.focusManager.add(e); z = e; a = function () {
                                var a = b.getViewPaneSize();
                                e.setStyles({ width: a.width + "px", height: a.height + "px" })
                            }; var h = function () { var a = b.getScrollPosition(), c = CKEDITOR.dialog._.currentTop; e.setStyles({ left: a.x + "px", top: a.y + "px" }); if (c) { do a = c.getPosition(), c.move(a.x, a.y); while (c = c._.parentDialog) } }; x = a; b.on("resize", a); a(); CKEDITOR.env.mac && CKEDITOR.env.webkit || e.focus(); if (CKEDITOR.env.ie6Compat) {
                                var k = function () { h(); arguments.callee.prevScrollHandler.apply(this, arguments) }; b.$.setTimeout(function () {
                                    k.prevScrollHandler = window.onscroll || function () { };
                                    window.onscroll = k
                                }, 0); h()
                            }
                } function u(a) { z && (a.focusManager.remove(z), a = CKEDITOR.document.getWindow(), z.hide(), a.removeListener("resize", x), CKEDITOR.env.ie6Compat && a.$.setTimeout(function () { window.onscroll = window.onscroll && window.onscroll.prevScrollHandler || null }, 0), x = null) } var v = CKEDITOR.tools.cssLength, y = '\x3cdiv class\x3d"cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir\x3d"{langDir}" lang\x3d"{langCode}" role\x3d"dialog" aria-labelledby\x3d"cke_dialog_title_{id}"\x3e\x3ctable class\x3d"cke_dialog ' +
                    CKEDITOR.env.cssClass + ' cke_{langDir}" style\x3d"position:absolute" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd role\x3d"presentation"\x3e\x3cdiv class\x3d"cke_dialog_body" role\x3d"presentation"\x3e\x3cdiv id\x3d"cke_dialog_title_{id}" class\x3d"cke_dialog_title" role\x3d"presentation"\x3e\x3c/div\x3e\x3ca id\x3d"cke_dialog_close_button_{id}" class\x3d"cke_dialog_close_button" href\x3d"javascript:void(0)" title\x3d"{closeTitle}" role\x3d"button"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e\x3cdiv id\x3d"cke_dialog_tabs_{id}" class\x3d"cke_dialog_tabs" role\x3d"tablist"\x3e\x3c/div\x3e\x3ctable class\x3d"cke_dialog_contents" role\x3d"presentation"\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_contents_{id}" class\x3d"cke_dialog_contents_body" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd id\x3d"cke_dialog_footer_{id}" class\x3d"cke_dialog_footer" role\x3d"presentation"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e';
            CKEDITOR.dialog = function (b, g) {
                function h() { var a = A._.focusList; a.sort(function (a, b) { return a.tabIndex != b.tabIndex ? b.tabIndex - a.tabIndex : a.focusIndex - b.focusIndex }); for (var b = a.length, c = 0; c < b; c++)a[c].focusIndex = c } function k(a) {
                    var b = A._.focusList; a = a || 0; if (!(1 > b.length)) {
                        var c = A._.currentFocusIndex; A._.tabBarMode && 0 > a && (c = 0); try { b[c].getInputElement().$.blur() } catch (f) { } var d = c, g = 1 < A._.pageCount; do {
                            d += a; if (g && !A._.tabBarMode && (d == b.length || -1 == d)) {
                                A._.tabBarMode = !0; A._.tabs[A._.currentTabId][0].focus();
                                A._.currentFocusIndex = -1; return
                            } d = (d + b.length) % b.length; if (d == c) break
                        } while (a && !b[d].isFocusable()); b[d].focus(); "text" == b[d].type && b[d].select()
                    }
                } function n(c) {
                    if (A == CKEDITOR.dialog._.currentTop) {
                        var f = c.data.getKeystroke(), d = "rtl" == b.lang.dir, g = [37, 38, 39, 40]; z = y = 0; if (9 == f || f == CKEDITOR.SHIFT + 9) k(f == CKEDITOR.SHIFT + 9 ? -1 : 1), z = 1; else if (f == CKEDITOR.ALT + 121 && !A._.tabBarMode && 1 < A.getPageCount()) A._.tabBarMode = !0, A._.tabs[A._.currentTabId][0].focus(), A._.currentFocusIndex = -1, z = 1; else if (-1 != CKEDITOR.tools.indexOf(g,
                            f) && A._.tabBarMode) f = -1 != CKEDITOR.tools.indexOf([d ? 39 : 37, 38], f) ? a.call(A) : e.call(A), A.selectPage(f), A._.tabs[f][0].focus(), z = 1; else if (13 != f && 32 != f || !A._.tabBarMode) if (13 == f) f = c.data.getTarget(), f.is("a", "button", "select", "textarea") || f.is("input") && "button" == f.$.type || ((f = this.getButton("ok")) && CKEDITOR.tools.setTimeout(f.click, 0, f), z = 1), y = 1; else if (27 == f) (f = this.getButton("cancel")) ? CKEDITOR.tools.setTimeout(f.click, 0, f) : !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(), y = 1; else return; else this.selectPage(this._.currentTabId),
                                this._.tabBarMode = !1, this._.currentFocusIndex = -1, k(1), z = 1; q(c)
                    }
                } function q(a) { z ? a.data.preventDefault(1) : y && a.data.stopPropagation() } var w = CKEDITOR.dialog._.dialogDefinitions[g], x = CKEDITOR.tools.clone(p), r = b.config.dialog_buttonsOrder || "OS", v = b.lang.dir, B = {}, z, y; ("OS" == r && CKEDITOR.env.mac || "rtl" == r && "ltr" == v || "ltr" == r && "rtl" == v) && x.buttons.reverse(); w = CKEDITOR.tools.extend(w(b), x); w = CKEDITOR.tools.clone(w); w = new t(this, w); x = l(b); this._ = {
                    editor: b, element: x.element, name: g, contentSize: { width: 0, height: 0 },
                    size: { width: 0, height: 0 }, contents: {}, buttons: {}, accessKeyMap: {}, tabs: {}, tabIdList: [], currentTabId: null, currentTabIndex: null, pageCount: 0, lastTab: null, tabBarMode: !1, focusList: [], currentFocusIndex: 0, hasFocus: !1
                }; this.parts = x.parts; CKEDITOR.tools.setTimeout(function () { b.fire("ariaWidget", this.parts.contents) }, 0, this); x = { position: CKEDITOR.env.ie6Compat ? "absolute" : "fixed", top: 0, visibility: "hidden" }; x["rtl" == v ? "right" : "left"] = 0; this.parts.dialog.setStyles(x); CKEDITOR.event.call(this); this.definition = w = CKEDITOR.fire("dialogDefinition",
                    { name: g, definition: w }, b).definition; if (!("removeDialogTabs" in b._) && b.config.removeDialogTabs) { x = b.config.removeDialogTabs.split(";"); for (v = 0; v < x.length; v++)if (r = x[v].split(":"), 2 == r.length) { var u = r[0]; B[u] || (B[u] = []); B[u].push(r[1]) } b._.removeDialogTabs = B } if (b._.removeDialogTabs && (B = b._.removeDialogTabs[g])) for (v = 0; v < B.length; v++)w.removeContents(B[v]); if (w.onLoad) this.on("load", w.onLoad); if (w.onShow) this.on("show", w.onShow); if (w.onHide) this.on("hide", w.onHide); if (w.onOk) this.on("ok", function (a) {
                        b.fire("saveSnapshot");
                        setTimeout(function () { b.fire("saveSnapshot") }, 0); !1 === w.onOk.call(this, a) && (a.data.hide = !1)
                    }); this.state = CKEDITOR.DIALOG_STATE_IDLE; if (w.onCancel) this.on("cancel", function (a) { !1 === w.onCancel.call(this, a) && (a.data.hide = !1) }); var A = this, O = function (a) { var b = A._.contents, c = !1, f; for (f in b) for (var d in b[f]) if (c = a.call(this, b[f][d])) return }; this.on("ok", function (a) {
                        O(function (b) {
                            if (b.validate) {
                                var f = b.validate(this), d = "string" == typeof f || !1 === f; d && (a.data.hide = !1, a.stop()); c.call(b, !d, "string" == typeof f ?
                                    f : void 0); return d
                            }
                        })
                    }, this, null, 0); this.on("cancel", function (a) { O(function (c) { if (c.isChanged()) return b.config.dialog_noConfirmCancel || confirm(b.lang.common.confirmCancel) || (a.data.hide = !1), !0 }) }, this, null, 0); this.parts.close.on("click", function (a) { !1 !== this.fire("cancel", { hide: !0 }).hide && this.hide(); a.data.preventDefault() }, this); this.changeFocus = k; var C = this._.element; b.focusManager.add(C, 1); this.on("show", function () { C.on("keydown", n, this); if (CKEDITOR.env.gecko) C.on("keypress", q, this) }); this.on("hide",
                        function () { C.removeListener("keydown", n); CKEDITOR.env.gecko && C.removeListener("keypress", q); O(function (a) { d.apply(a) }) }); this.on("iframeAdded", function (a) { (new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown", n, this, null, 0) }); this.on("show", function () {
                            h(); var a = 1 < A._.pageCount; b.config.dialog_startupFocusTab && a ? (A._.tabBarMode = !0, A._.tabs[A._.currentTabId][0].focus(), A._.currentFocusIndex = -1) : this._.hasFocus || (this._.currentFocusIndex = a ? -1 : this._.focusList.length - 1, w.onFocus ?
                                (a = w.onFocus.call(this)) && a.focus() : k(1))
                        }, this, null, 4294967295); if (CKEDITOR.env.ie6Compat) this.on("load", function () { var a = this.getElement(), b = a.getFirst(); b.remove(); b.appendTo(a) }, this); m(this); f(this); (new CKEDITOR.dom.text(w.title, CKEDITOR.document)).appendTo(this.parts.title); for (v = 0; v < w.contents.length; v++)(B = w.contents[v]) && this.addPage(B); this.parts.tabs.on("click", function (a) {
                            var b = a.data.getTarget(); b.hasClass("cke_dialog_tab") && (b = b.$.id, this.selectPage(b.substring(4, b.lastIndexOf("_"))),
                                this._.tabBarMode && (this._.tabBarMode = !1, this._.currentFocusIndex = -1, k(1)), a.data.preventDefault())
                        }, this); v = []; B = CKEDITOR.dialog._.uiElementBuilders.hbox.build(this, { type: "hbox", className: "cke_dialog_footer_buttons", widths: [], children: w.buttons }, v).getChild(); this.parts.footer.setHtml(v.join("")); for (v = 0; v < B.length; v++)this._.buttons[B[v].id] = B[v]
            }; CKEDITOR.dialog.prototype = {
                destroy: function () { this.hide(); this._.element.remove() }, resize: function () {
                    return function (a, b) {
                        this._.contentSize && this._.contentSize.width ==
                            a && this._.contentSize.height == b || (CKEDITOR.dialog.fire("resize", { dialog: this, width: a, height: b }, this._.editor), this.fire("resize", { width: a, height: b }, this._.editor), this.parts.contents.setStyles({ width: a + "px", height: b + "px" }), "rtl" == this._.editor.lang.dir && this._.position && (this._.position.x = CKEDITOR.document.getWindow().getViewPaneSize().width - this._.contentSize.width - parseInt(this._.element.getFirst().getStyle("right"), 10)), this._.contentSize = { width: a, height: b })
                    }
                }(), getSize: function () {
                    var a = this._.element.getFirst();
                    return { width: a.$.offsetWidth || 0, height: a.$.offsetHeight || 0 }
                }, move: function (a, b, c) {
                    var f = this._.element.getFirst(), d = "rtl" == this._.editor.lang.dir, g = "fixed" == f.getComputedStyle("position"); CKEDITOR.env.ie && f.setStyle("zoom", "100%"); g && this._.position && this._.position.x == a && this._.position.y == b || (this._.position = { x: a, y: b }, g || (g = CKEDITOR.document.getWindow().getScrollPosition(), a += g.x, b += g.y), d && (g = this.getSize(), a = CKEDITOR.document.getWindow().getViewPaneSize().width - g.width - a), b = { top: (0 < b ? b : 0) + "px" },
                        b[d ? "right" : "left"] = (0 < a ? a : 0) + "px", f.setStyles(b), c && (this._.moved = 1))
                }, getPosition: function () { return CKEDITOR.tools.extend({}, this._.position) }, show: function () {
                    var a = this._.element, b = this.definition; a.getParent() && a.getParent().equals(CKEDITOR.document.getBody()) ? a.setStyle("display", "block") : a.appendTo(CKEDITOR.document.getBody()); this.resize(this._.contentSize && this._.contentSize.width || b.width || b.minWidth, this._.contentSize && this._.contentSize.height || b.height || b.minHeight); this.reset(); null ===
                        this._.currentTabId && this.selectPage(this.definition.contents[0].id); null === CKEDITOR.dialog._.currentZIndex && (CKEDITOR.dialog._.currentZIndex = this._.editor.config.baseFloatZIndex); this._.element.getFirst().setStyle("z-index", CKEDITOR.dialog._.currentZIndex += 10); null === CKEDITOR.dialog._.currentTop ? (CKEDITOR.dialog._.currentTop = this, this._.parentDialog = null, r(this._.editor)) : (this._.parentDialog = CKEDITOR.dialog._.currentTop, this._.parentDialog.getElement().getFirst().$.style.zIndex -= Math.floor(this._.editor.config.baseFloatZIndex /
                            2), CKEDITOR.dialog._.currentTop = this); a.on("keydown", G); a.on("keyup", F); this._.hasFocus = !1; for (var c in b.contents) if (b.contents[c]) {
                                var a = b.contents[c], f = this._.tabs[a.id], d = a.requiredContent, e = 0; if (f) {
                                    for (var h in this._.contents[a.id]) { var k = this._.contents[a.id][h]; "hbox" != k.type && "vbox" != k.type && k.getInputElement() && (k.requiredContent && !this._.editor.activeFilter.check(k.requiredContent) ? k.disable() : (k.enable(), e++)) } !e || d && !this._.editor.activeFilter.check(d) ? f[0].addClass("cke_dialog_tab_disabled") :
                                        f[0].removeClass("cke_dialog_tab_disabled")
                                }
                            } CKEDITOR.tools.setTimeout(function () { this.layout(); g(this); this.parts.dialog.setStyle("visibility", ""); this.fireOnce("load", {}); CKEDITOR.ui.fire("ready", this); this.fire("show", {}); this._.editor.fire("dialogShow", this); this._.parentDialog || this._.editor.focusManager.lock(); this.foreach(function (a) { a.setInitValue && a.setInitValue() }) }, 100, this)
                }, layout: function () {
                    var a = this.parts.dialog, b = this.getSize(), c = CKEDITOR.document.getWindow().getViewPaneSize(), f =
                        (c.width - b.width) / 2, d = (c.height - b.height) / 2; CKEDITOR.env.ie6Compat || (b.height + (0 < d ? d : 0) > c.height || b.width + (0 < f ? f : 0) > c.width ? a.setStyle("position", "absolute") : a.setStyle("position", "fixed")); this.move(this._.moved ? this._.position.x : f, this._.moved ? this._.position.y : d)
                }, foreach: function (a) { for (var b in this._.contents) for (var c in this._.contents[b]) a.call(this, this._.contents[b][c]); return this }, reset: function () { var a = function (a) { a.reset && a.reset(1) }; return function () { this.foreach(a); return this } }(),
                setupContent: function () { var a = arguments; this.foreach(function (b) { b.setup && b.setup.apply(b, a) }) }, commitContent: function () { var a = arguments; this.foreach(function (b) { CKEDITOR.env.ie && this._.currentFocusIndex == b.focusIndex && b.getInputElement().$.blur(); b.commit && b.commit.apply(b, a) }) }, hide: function () {
                    if (this.parts.dialog.isVisible()) {
                        this.fire("hide", {}); this._.editor.fire("dialogHide", this); this.selectPage(this._.tabIdList[0]); var a = this._.element; a.setStyle("display", "none"); this.parts.dialog.setStyle("visibility",
                            "hidden"); for (I(this); CKEDITOR.dialog._.currentTop != this;)CKEDITOR.dialog._.currentTop.hide(); if (this._.parentDialog) { var b = this._.parentDialog.getElement().getFirst(); b.setStyle("z-index", parseInt(b.$.style.zIndex, 10) + Math.floor(this._.editor.config.baseFloatZIndex / 2)) } else u(this._.editor); if (CKEDITOR.dialog._.currentTop = this._.parentDialog) CKEDITOR.dialog._.currentZIndex -= 10; else {
                                CKEDITOR.dialog._.currentZIndex = null; a.removeListener("keydown", G); a.removeListener("keyup", F); var c = this._.editor;
                                c.focus(); setTimeout(function () { c.focusManager.unlock(); CKEDITOR.env.iOS && c.window.focus() }, 0)
                            } delete this._.parentDialog; this.foreach(function (a) { a.resetInitValue && a.resetInitValue() }); this.setState(CKEDITOR.DIALOG_STATE_IDLE)
                    }
                }, addPage: function (a) {
                    if (!a.requiredContent || this._.editor.filter.check(a.requiredContent)) {
                        for (var b = [], c = a.label ? ' title\x3d"' + CKEDITOR.tools.htmlEncode(a.label) + '"' : "", f = CKEDITOR.dialog._.uiElementBuilders.vbox.build(this, {
                            type: "vbox", className: "cke_dialog_page_contents",
                            children: a.elements, expand: !!a.expand, padding: a.padding, style: a.style || "width: 100%;"
                        }, b), d = this._.contents[a.id] = {}, g = f.getChild(), e = 0; f = g.shift();)f.notAllowed || "hbox" == f.type || "vbox" == f.type || e++, d[f.id] = f, "function" == typeof f.getChild && g.push.apply(g, f.getChild()); e || (a.hidden = !0); b = CKEDITOR.dom.element.createFromHtml(b.join("")); b.setAttribute("role", "tabpanel"); f = CKEDITOR.env; d = "cke_" + a.id + "_" + CKEDITOR.tools.getNextNumber(); c = CKEDITOR.dom.element.createFromHtml(['\x3ca class\x3d"cke_dialog_tab"',
                            0 < this._.pageCount ? " cke_last" : "cke_first", c, a.hidden ? ' style\x3d"display:none"' : "", ' id\x3d"', d, '"', f.gecko && !f.hc ? "" : ' href\x3d"javascript:void(0)"', ' tabIndex\x3d"-1" hidefocus\x3d"true" role\x3d"tab"\x3e', a.label, "\x3c/a\x3e"].join("")); b.setAttribute("aria-labelledby", d); this._.tabs[a.id] = [c, b]; this._.tabIdList.push(a.id); !a.hidden && this._.pageCount++; this._.lastTab = c; this.updateStyle(); b.setAttribute("name", a.id); b.appendTo(this.parts.contents); c.unselectable(); this.parts.tabs.append(c); a.accessKey &&
                                (E(this, this, "CTRL+" + a.accessKey, K, H), this._.accessKeyMap["CTRL+" + a.accessKey] = a.id)
                    }
                }, selectPage: function (a) {
                    if (this._.currentTabId != a && !this._.tabs[a][0].hasClass("cke_dialog_tab_disabled") && !1 !== this.fire("selectPage", { page: a, currentPage: this._.currentTabId })) {
                        for (var c in this._.tabs) { var f = this._.tabs[c][0], d = this._.tabs[c][1]; c != a && (f.removeClass("cke_dialog_tab_selected"), d.hide()); d.setAttribute("aria-hidden", c != a) } var g = this._.tabs[a]; g[0].addClass("cke_dialog_tab_selected"); CKEDITOR.env.ie6Compat ||
                            CKEDITOR.env.ie7Compat ? (b(g[1]), g[1].show(), setTimeout(function () { b(g[1], 1) }, 0)) : g[1].show(); this._.currentTabId = a; this._.currentTabIndex = CKEDITOR.tools.indexOf(this._.tabIdList, a)
                    }
                }, updateStyle: function () { this.parts.dialog[(1 === this._.pageCount ? "add" : "remove") + "Class"]("cke_single_page") }, hidePage: function (b) { var c = this._.tabs[b] && this._.tabs[b][0]; c && 1 != this._.pageCount && c.isVisible() && (b == this._.currentTabId && this.selectPage(a.call(this)), c.hide(), this._.pageCount--, this.updateStyle()) }, showPage: function (a) {
                    if (a =
                        this._.tabs[a] && this._.tabs[a][0]) a.show(), this._.pageCount++, this.updateStyle()
                }, getElement: function () { return this._.element }, getName: function () { return this._.name }, getContentElement: function (a, b) { var c = this._.contents[a]; return c && c[b] }, getValueOf: function (a, b) { return this.getContentElement(a, b).getValue() }, setValueOf: function (a, b, c) { return this.getContentElement(a, b).setValue(c) }, getButton: function (a) { return this._.buttons[a] }, click: function (a) { return this._.buttons[a].click() }, disableButton: function (a) { return this._.buttons[a].disable() },
                enableButton: function (a) { return this._.buttons[a].enable() }, getPageCount: function () { return this._.pageCount }, getParentEditor: function () { return this._.editor }, getSelectedElement: function () { return this.getParentEditor().getSelection().getSelectedElement() }, addFocusable: function (a, b) { if ("undefined" == typeof b) b = this._.focusList.length, this._.focusList.push(new k(this, a, b)); else { this._.focusList.splice(b, 0, new k(this, a, b)); for (var c = b + 1; c < this._.focusList.length; c++)this._.focusList[c].focusIndex++ } },
                setState: function (a) {
                    if (this.state != a) {
                        this.state = a; if (a == CKEDITOR.DIALOG_STATE_BUSY) { if (!this.parts.spinner) { var b = this.getParentEditor().lang.dir, c = { attributes: { "class": "cke_dialog_spinner" }, styles: { "float": "rtl" == b ? "right" : "left" } }; c.styles["margin-" + ("rtl" == b ? "left" : "right")] = "8px"; this.parts.spinner = CKEDITOR.document.createElement("div", c); this.parts.spinner.setHtml("\x26#8987;"); this.parts.spinner.appendTo(this.parts.title, 1) } this.parts.spinner.show(); this.getButton("ok").disable() } else a ==
                            CKEDITOR.DIALOG_STATE_IDLE && (this.parts.spinner && this.parts.spinner.hide(), this.getButton("ok").enable()); this.fire("state", a)
                    }
                }
            }; CKEDITOR.tools.extend(CKEDITOR.dialog, {
                add: function (a, b) { this._.dialogDefinitions[a] && "function" != typeof b || (this._.dialogDefinitions[a] = b) }, exists: function (a) { return !!this._.dialogDefinitions[a] }, getCurrent: function () { return CKEDITOR.dialog._.currentTop }, isTabEnabled: function (a, b, c) {
                    a = a.config.removeDialogTabs; return !(a && a.match(new RegExp("(?:^|;)" + b + ":" + c + "(?:$|;)",
                        "i")))
                }, okButton: function () { var a = function (a, b) { b = b || {}; return CKEDITOR.tools.extend({ id: "ok", type: "button", label: a.lang.common.ok, "class": "cke_dialog_ui_button_ok", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("ok", { hide: !0 }).hide && a.hide() } }, b, !0) }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (c) { return a(c, b) }, { type: "button" }, !0) }; return a }(), cancelButton: function () {
                    var a = function (a, b) {
                        b = b || {}; return CKEDITOR.tools.extend({
                            id: "cancel", type: "button", label: a.lang.common.cancel,
                            "class": "cke_dialog_ui_button_cancel", onClick: function (a) { a = a.data.dialog; !1 !== a.fire("cancel", { hide: !0 }).hide && a.hide() }
                        }, b, !0)
                    }; a.type = "button"; a.override = function (b) { return CKEDITOR.tools.extend(function (c) { return a(c, b) }, { type: "button" }, !0) }; return a
                }(), addUIElement: function (a, b) { this._.uiElementBuilders[a] = b }
            }); CKEDITOR.dialog._ = { uiElementBuilders: {}, dialogDefinitions: {}, currentTop: null, currentZIndex: null }; CKEDITOR.event.implementOn(CKEDITOR.dialog); CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);
            var p = { resizable: CKEDITOR.DIALOG_RESIZE_BOTH, minWidth: 600, minHeight: 400, buttons: [CKEDITOR.dialog.okButton, CKEDITOR.dialog.cancelButton] }, w = function (a, b, c) { for (var f = 0, d; d = a[f]; f++)if (d.id == b || c && d[c] && (d = w(d[c], b, c))) return d; return null }, q = function (a, b, c, f, d) { if (c) { for (var g = 0, e; e = a[g]; g++) { if (e.id == c) return a.splice(g, 0, b), b; if (f && e[f] && (e = q(e[f], b, c, f, !0))) return e } if (d) return null } a.push(b); return b }, B = function (a, b, c) {
                for (var f = 0, d; d = a[f]; f++) {
                    if (d.id == b) return a.splice(f, 1); if (c && d[c] && (d = B(d[c],
                        b, c))) return d
                } return null
            }, t = function (a, b) { this.dialog = a; for (var c = b.contents, f = 0, d; d = c[f]; f++)c[f] = d && new h(a, d); CKEDITOR.tools.extend(this, b) }; t.prototype = { getContents: function (a) { return w(this.contents, a) }, getButton: function (a) { return w(this.buttons, a) }, addContents: function (a, b) { return q(this.contents, a, b) }, addButton: function (a, b) { return q(this.buttons, a, b) }, removeContents: function (a) { B(this.contents, a) }, removeButton: function (a) { B(this.buttons, a) } }; h.prototype = {
                get: function (a) {
                    return w(this.elements,
                        a, "children")
                }, add: function (a, b) { return q(this.elements, a, b, "children") }, remove: function (a) { B(this.elements, a, "children") }
            }; var x, C = {}, z, A = {}, G = function (a) { var b = a.data.$.ctrlKey || a.data.$.metaKey, c = a.data.$.altKey, f = a.data.$.shiftKey, d = String.fromCharCode(a.data.$.keyCode); (b = A[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (f ? "SHIFT+" : "") + d]) && b.length && (b = b[b.length - 1], b.keydown && b.keydown.call(b.uiElement, b.dialog, b.key), a.data.preventDefault()) }, F = function (a) {
                var b = a.data.$.ctrlKey || a.data.$.metaKey, c = a.data.$.altKey,
                f = a.data.$.shiftKey, d = String.fromCharCode(a.data.$.keyCode); (b = A[(b ? "CTRL+" : "") + (c ? "ALT+" : "") + (f ? "SHIFT+" : "") + d]) && b.length && (b = b[b.length - 1], b.keyup && (b.keyup.call(b.uiElement, b.dialog, b.key), a.data.preventDefault()))
            }, E = function (a, b, c, f, d) { (A[c] || (A[c] = [])).push({ uiElement: a, dialog: b, key: c, keyup: d || a.accessKeyUp, keydown: f || a.accessKeyDown }) }, I = function (a) { for (var b in A) { for (var c = A[b], f = c.length - 1; 0 <= f; f--)c[f].dialog != a && c[f].uiElement != a || c.splice(f, 1); 0 === c.length && delete A[b] } }, H = function (a,
                b) { a._.accessKeyMap[b] && a.selectPage(a._.accessKeyMap[b]) }, K = function () { }; (function () {
                    CKEDITOR.ui.dialog = {
                        uiElement: function (a, b, c, f, d, g, e) {
                            if (!(4 > arguments.length)) {
                                var h = (f.call ? f(b) : f) || "div", k = ["\x3c", h, " "], l = (d && d.call ? d(b) : d) || {}, m = (g && g.call ? g(b) : g) || {}, n = (e && e.call ? e.call(this, a, b) : e) || "", p = this.domId = m.id || CKEDITOR.tools.getNextId() + "_uiElement"; b.requiredContent && !a.getParentEditor().filter.check(b.requiredContent) && (l.display = "none", this.notAllowed = !0); m.id = p; var q = {}; b.type && (q["cke_dialog_ui_" +
                                    b.type] = 1); b.className && (q[b.className] = 1); b.disabled && (q.cke_disabled = 1); for (var w = m["class"] && m["class"].split ? m["class"].split(" ") : [], p = 0; p < w.length; p++)w[p] && (q[w[p]] = 1); w = []; for (p in q) w.push(p); m["class"] = w.join(" "); b.title && (m.title = b.title); q = (b.style || "").split(";"); b.align && (w = b.align, l["margin-left"] = "left" == w ? 0 : "auto", l["margin-right"] = "right" == w ? 0 : "auto"); for (p in l) q.push(p + ":" + l[p]); b.hidden && q.push("display:none"); for (p = q.length - 1; 0 <= p; p--)"" === q[p] && q.splice(p, 1); 0 < q.length && (m.style =
                                        (m.style ? m.style + "; " : "") + q.join("; ")); for (p in m) k.push(p + '\x3d"' + CKEDITOR.tools.htmlEncode(m[p]) + '" '); k.push("\x3e", n, "\x3c/", h, "\x3e"); c.push(k.join("")); (this._ || (this._ = {})).dialog = a; "boolean" == typeof b.isChanged && (this.isChanged = function () { return b.isChanged }); "function" == typeof b.isChanged && (this.isChanged = b.isChanged); "function" == typeof b.setValue && (this.setValue = CKEDITOR.tools.override(this.setValue, function (a) { return function (c) { a.call(this, b.setValue.call(this, c)) } })); "function" == typeof b.getValue &&
                                            (this.getValue = CKEDITOR.tools.override(this.getValue, function (a) { return function () { return b.getValue.call(this, a.call(this)) } })); CKEDITOR.event.implementOn(this); this.registerEvents(b); this.accessKeyUp && this.accessKeyDown && b.accessKey && E(this, a, "CTRL+" + b.accessKey); var x = this; a.on("load", function () {
                                                var b = x.getInputElement(); if (b) {
                                                    var c = x.type in { checkbox: 1, ratio: 1 } && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? "cke_dialog_ui_focused" : ""; b.on("focus", function () {
                                                        a._.tabBarMode = !1; a._.hasFocus = !0; x.fire("focus");
                                                        c && this.addClass(c)
                                                    }); b.on("blur", function () { x.fire("blur"); c && this.removeClass(c) })
                                                }
                                            }); CKEDITOR.tools.extend(this, b); this.keyboardFocusable && (this.tabIndex = b.tabIndex || 0, this.focusIndex = a._.focusList.push(this) - 1, this.on("focus", function () { a._.currentFocusIndex = x.focusIndex }))
                            }
                        }, hbox: function (a, b, c, f, d) {
                            if (!(4 > arguments.length)) {
                                this._ || (this._ = {}); var g = this._.children = b, e = d && d.widths || null, h = d && d.height || null, k, l = { role: "presentation" }; d && d.align && (l.align = d.align); CKEDITOR.ui.dialog.uiElement.call(this,
                                    a, d || { type: "hbox" }, f, "table", {}, l, function () {
                                        var a = ['\x3ctbody\x3e\x3ctr class\x3d"cke_dialog_ui_hbox"\x3e']; for (k = 0; k < c.length; k++) {
                                            var b = "cke_dialog_ui_hbox_child", f = []; 0 === k && (b = "cke_dialog_ui_hbox_first"); k == c.length - 1 && (b = "cke_dialog_ui_hbox_last"); a.push('\x3ctd class\x3d"', b, '" role\x3d"presentation" '); e ? e[k] && f.push("width:" + v(e[k])) : f.push("width:" + Math.floor(100 / c.length) + "%"); h && f.push("height:" + v(h)); d && void 0 !== d.padding && f.push("padding:" + v(d.padding)); CKEDITOR.env.ie && CKEDITOR.env.quirks &&
                                                g[k].align && f.push("text-align:" + g[k].align); 0 < f.length && a.push('style\x3d"' + f.join("; ") + '" '); a.push("\x3e", c[k], "\x3c/td\x3e")
                                        } a.push("\x3c/tr\x3e\x3c/tbody\x3e"); return a.join("")
                                    })
                            }
                        }, vbox: function (a, b, c, f, d) {
                            if (!(3 > arguments.length)) {
                                this._ || (this._ = {}); var g = this._.children = b, e = d && d.width || null, h = d && d.heights || null; CKEDITOR.ui.dialog.uiElement.call(this, a, d || { type: "vbox" }, f, "div", null, { role: "presentation" }, function () {
                                    var b = ['\x3ctable role\x3d"presentation" cellspacing\x3d"0" border\x3d"0" '];
                                    b.push('style\x3d"'); d && d.expand && b.push("height:100%;"); b.push("width:" + v(e || "100%"), ";"); CKEDITOR.env.webkit && b.push("float:none;"); b.push('"'); b.push('align\x3d"', CKEDITOR.tools.htmlEncode(d && d.align || ("ltr" == a.getParentEditor().lang.dir ? "left" : "right")), '" '); b.push("\x3e\x3ctbody\x3e"); for (var f = 0; f < c.length; f++) {
                                        var k = []; b.push('\x3ctr\x3e\x3ctd role\x3d"presentation" '); e && k.push("width:" + v(e || "100%")); h ? k.push("height:" + v(h[f])) : d && d.expand && k.push("height:" + Math.floor(100 / c.length) + "%");
                                        d && void 0 !== d.padding && k.push("padding:" + v(d.padding)); CKEDITOR.env.ie && CKEDITOR.env.quirks && g[f].align && k.push("text-align:" + g[f].align); 0 < k.length && b.push('style\x3d"', k.join("; "), '" '); b.push(' class\x3d"cke_dialog_ui_vbox_child"\x3e', c[f], "\x3c/td\x3e\x3c/tr\x3e")
                                    } b.push("\x3c/tbody\x3e\x3c/table\x3e"); return b.join("")
                                })
                            }
                        }
                    }
                })(); CKEDITOR.ui.dialog.uiElement.prototype = {
                    getElement: function () { return CKEDITOR.document.getById(this.domId) }, getInputElement: function () { return this.getElement() }, getDialog: function () { return this._.dialog },
                    setValue: function (a, b) { this.getInputElement().setValue(a); !b && this.fire("change", { value: a }); return this }, getValue: function () { return this.getInputElement().getValue() }, isChanged: function () { return !1 }, selectParentTab: function () { for (var a = this.getInputElement(); (a = a.getParent()) && -1 == a.$.className.search("cke_dialog_page_contents");); if (!a) return this; a = a.getAttribute("name"); this._.dialog._.currentTabId != a && this._.dialog.selectPage(a); return this }, focus: function () {
                        this.selectParentTab().getInputElement().focus();
                        return this
                    }, registerEvents: function (a) { var b = /^on([A-Z]\w+)/, c, f = function (a, b, c, f) { b.on("load", function () { a.getInputElement().on(c, f, a) }) }, d; for (d in a) if (c = d.match(b)) this.eventProcessors[d] ? this.eventProcessors[d].call(this, this._.dialog, a[d]) : f(this, this._.dialog, c[1].toLowerCase(), a[d]); return this }, eventProcessors: { onLoad: function (a, b) { a.on("load", b, this) }, onShow: function (a, b) { a.on("show", b, this) }, onHide: function (a, b) { a.on("hide", b, this) } }, accessKeyDown: function () { this.focus() }, accessKeyUp: function () { },
                    disable: function () { var a = this.getElement(); this.getInputElement().setAttribute("disabled", "true"); a.addClass("cke_disabled") }, enable: function () { var a = this.getElement(); this.getInputElement().removeAttribute("disabled"); a.removeClass("cke_disabled") }, isEnabled: function () { return !this.getElement().hasClass("cke_disabled") }, isVisible: function () { return this.getInputElement().isVisible() }, isFocusable: function () { return this.isEnabled() && this.isVisible() ? !0 : !1 }
                }; CKEDITOR.ui.dialog.hbox.prototype = CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,
                    { getChild: function (a) { if (1 > arguments.length) return this._.children.concat(); a.splice || (a = [a]); return 2 > a.length ? this._.children[a[0]] : this._.children[a[0]] && this._.children[a[0]].getChild ? this._.children[a[0]].getChild(a.slice(1, a.length)) : null } }, !0); CKEDITOR.ui.dialog.vbox.prototype = new CKEDITOR.ui.dialog.hbox; (function () {
                        var a = {
                            build: function (a, b, c) {
                                for (var f = b.children, d, g = [], e = [], h = 0; h < f.length && (d = f[h]); h++) { var k = []; g.push(k); e.push(CKEDITOR.dialog._.uiElementBuilders[d.type].build(a, d, k)) } return new CKEDITOR.ui.dialog[b.type](a,
                                    e, g, c, b)
                            }
                        }; CKEDITOR.dialog.addUIElement("hbox", a); CKEDITOR.dialog.addUIElement("vbox", a)
                    })(); CKEDITOR.dialogCommand = function (a, b) { this.dialogName = a; CKEDITOR.tools.extend(this, b, !0) }; CKEDITOR.dialogCommand.prototype = { exec: function (a) { var b = this.tabId; a.openDialog(this.dialogName, function (a) { b && a.selectPage(b) }) }, canUndo: !1, editorFocus: 1 }; (function () {
                        var a = /^([a]|[^a])+$/, b = /^\d*$/, c = /^\d*(?:\.\d+)?$/, f = /^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/, d = /^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,
                        g = /^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/; CKEDITOR.VALIDATE_OR = 1; CKEDITOR.VALIDATE_AND = 2; CKEDITOR.dialog.validate = {
                            functions: function () {
                                var a = arguments; return function () {
                                    var b = this && this.getValue ? this.getValue() : a[0], c, f = CKEDITOR.VALIDATE_AND, d = [], g; for (g = 0; g < a.length; g++)if ("function" == typeof a[g]) d.push(a[g]); else break; g < a.length && "string" == typeof a[g] && (c = a[g], g++); g < a.length && "number" == typeof a[g] && (f = a[g]); var e = f == CKEDITOR.VALIDATE_AND ? !0 : !1; for (g = 0; g < d.length; g++)e = f == CKEDITOR.VALIDATE_AND ? e &&
                                        d[g](b) : e || d[g](b); return e ? !0 : c
                                }
                            }, regex: function (a, b) { return function (c) { c = this && this.getValue ? this.getValue() : c; return a.test(c) ? !0 : b } }, notEmpty: function (b) { return this.regex(a, b) }, integer: function (a) { return this.regex(b, a) }, number: function (a) { return this.regex(c, a) }, cssLength: function (a) { return this.functions(function (a) { return d.test(CKEDITOR.tools.trim(a)) }, a) }, htmlLength: function (a) { return this.functions(function (a) { return f.test(CKEDITOR.tools.trim(a)) }, a) }, inlineStyle: function (a) {
                                return this.functions(function (a) { return g.test(CKEDITOR.tools.trim(a)) },
                                    a)
                            }, equals: function (a, b) { return this.functions(function (b) { return b == a }, b) }, notEqual: function (a, b) { return this.functions(function (b) { return b != a }, b) }
                        }; CKEDITOR.on("instanceDestroyed", function (a) { if (CKEDITOR.tools.isEmpty(CKEDITOR.instances)) { for (var b; b = CKEDITOR.dialog._.currentTop;)b.hide(); for (var c in C) C[c].remove(); C = {} } a = a.editor._.storedDialogs; for (var f in a) a[f].destroy() })
                    })(); CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
                        openDialog: function (a, b) {
                            var c = null, f = CKEDITOR.dialog._.dialogDefinitions[a];
                            null === CKEDITOR.dialog._.currentTop && r(this); if ("function" == typeof f) c = this._.storedDialogs || (this._.storedDialogs = {}), c = c[a] || (c[a] = new CKEDITOR.dialog(this, a)), b && b.call(c, c), c.show(); else {
                                if ("failed" == f) throw u(this), Error('[CKEDITOR.dialog.openDialog] Dialog "' + a + '" failed when loading definition.'); "string" == typeof f && CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(f), function () {
                                    "function" != typeof CKEDITOR.dialog._.dialogDefinitions[a] && (CKEDITOR.dialog._.dialogDefinitions[a] = "failed"); this.openDialog(a,
                                        b)
                                }, this, 0, 1)
                            } CKEDITOR.skin.loadPart("dialog"); return c
                        }
                    })
        }(), CKEDITOR.plugins.add("dialog", { requires: "dialogui", init: function (a) { a.on("doubleclick", function (e) { e.data.dialog && a.openDialog(e.data.dialog) }, null, null, 999) } }), function () {
            CKEDITOR.plugins.add("a11yhelp", {
                requires: "dialog", availableLangs: {
                    af: 1, ar: 1, az: 1, bg: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, en: 1, "en-au": 1, "en-gb": 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fo: 1, fr: 1, "fr-ca": 1, gl: 1, gu: 1, he: 1, hi: 1, hr: 1, hu: 1, id: 1, it: 1, ja: 1, km: 1, ko: 1,
                    ku: 1, lt: 1, lv: 1, mk: 1, mn: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, pt: 1, "pt-br": 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, sr: 1, "sr-latn": 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, zh: 1, "zh-cn": 1
                }, init: function (a) {
                    var e = this; a.addCommand("a11yHelp", {
                        exec: function () { var b = a.langCode, b = e.availableLangs[b] ? b : e.availableLangs[b.replace(/-.*/, "")] ? b.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e.path + "dialogs/lang/" + b + ".js"), function () { a.lang.a11yhelp = e.langEntries[b]; a.openDialog("a11yHelp") }) }, modes: { wysiwyg: 1, source: 1 },
                        readOnly: 1, canUndo: !1
                    }); a.setKeystroke(CKEDITOR.ALT + 48, "a11yHelp"); CKEDITOR.dialog.add("a11yHelp", this.path + "dialogs/a11yhelp.js"); a.on("ariaEditorHelpLabel", function (b) { b.data.label = a.lang.common.editorHelp })
                }
            })
        }(), CKEDITOR.plugins.add("about", {
            requires: "dialog", init: function (a) {
                var e = a.addCommand("about", new CKEDITOR.dialogCommand("about")); e.modes = { wysiwyg: 1, source: 1 }; e.canUndo = !1; e.readOnly = 1; a.ui.addButton && a.ui.addButton("About", { label: a.lang.about.dlgTitle, command: "about", toolbar: "about" });
                CKEDITOR.dialog.add("about", this.path + "dialogs/about.js")
            }
        }), CKEDITOR.plugins.add("basicstyles", {
            init: function (a) {
                var e = 0, b = function (b, d, h, l) { if (l) { l = new CKEDITOR.style(l); var f = c[h]; f.unshift(l); a.attachStyleStateChange(l, function (b) { !a.readOnly && a.getCommand(h).setState(b) }); a.addCommand(h, new CKEDITOR.styleCommand(l, { contentForms: f })); a.ui.addButton && a.ui.addButton(b, { label: d, command: h, toolbar: "basicstyles," + (e += 10) }) } }, c = {
                    bold: ["strong", "b", ["span", function (a) {
                        a = a.styles["font-weight"]; return "bold" ==
                            a || 700 <= +a
                    }]], italic: ["em", "i", ["span", function (a) { return "italic" == a.styles["font-style"] }]], underline: ["u", ["span", function (a) { return "underline" == a.styles["text-decoration"] }]], strike: ["s", "strike", ["span", function (a) { return "line-through" == a.styles["text-decoration"] }]], subscript: ["sub"], superscript: ["sup"]
                }, d = a.config, l = a.lang.basicstyles; b("Bold", l.bold, "bold", d.coreStyles_bold); b("Italic", l.italic, "italic", d.coreStyles_italic); b("Underline", l.underline, "underline", d.coreStyles_underline); b("Strike",
                    l.strike, "strike", d.coreStyles_strike); b("Subscript", l.subscript, "subscript", d.coreStyles_subscript); b("Superscript", l.superscript, "superscript", d.coreStyles_superscript); a.setKeystroke([[CKEDITOR.CTRL + 66, "bold"], [CKEDITOR.CTRL + 73, "italic"], [CKEDITOR.CTRL + 85, "underline"]])
            }
        }), CKEDITOR.config.coreStyles_bold = { element: "strong", overrides: "b" }, CKEDITOR.config.coreStyles_italic = { element: "em", overrides: "i" }, CKEDITOR.config.coreStyles_underline = { element: "u" }, CKEDITOR.config.coreStyles_strike = {
            element: "s",
            overrides: "strike"
        }, CKEDITOR.config.coreStyles_subscript = { element: "sub" }, CKEDITOR.config.coreStyles_superscript = { element: "sup" }, function () {
            var a = {
                exec: function (a) {
                    var b = a.getCommand("blockquote").state, c = a.getSelection(), d = c && c.getRanges()[0]; if (d) {
                        var l = c.createBookmarks(); if (CKEDITOR.env.ie) {
                            var k = l[0].startNode, g = l[0].endNode, h; if (k && "blockquote" == k.getParent().getName()) for (h = k; h = h.getNext();)if (h.type == CKEDITOR.NODE_ELEMENT && h.isBlockBoundary()) { k.move(h, !0); break } if (g && "blockquote" == g.getParent().getName()) for (h =
                                g; h = h.getPrevious();)if (h.type == CKEDITOR.NODE_ELEMENT && h.isBlockBoundary()) { g.move(h); break }
                        } var m = d.createIterator(); m.enlargeBr = a.config.enterMode != CKEDITOR.ENTER_BR; if (b == CKEDITOR.TRISTATE_OFF) {
                            for (k = []; b = m.getNextParagraph();)k.push(b); 1 > k.length && (b = a.document.createElement(a.config.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), g = l.shift(), d.insertNode(b), b.append(new CKEDITOR.dom.text("﻿", a.document)), d.moveToBookmark(g), d.selectNodeContents(b), d.collapse(!0), g = d.createBookmark(), k.push(b), l.unshift(g));
                            h = k[0].getParent(); d = []; for (g = 0; g < k.length; g++)b = k[g], h = h.getCommonAncestor(b.getParent()); for (b = { table: 1, tbody: 1, tr: 1, ol: 1, ul: 1 }; b[h.getName()];)h = h.getParent(); for (g = null; 0 < k.length;) { for (b = k.shift(); !b.getParent().equals(h);)b = b.getParent(); b.equals(g) || d.push(b); g = b } for (; 0 < d.length;)if (b = d.shift(), "blockquote" == b.getName()) { for (g = new CKEDITOR.dom.documentFragment(a.document); b.getFirst();)g.append(b.getFirst().remove()), k.push(g.getLast()); g.replace(b) } else k.push(b); d = a.document.createElement("blockquote");
                            for (d.insertBefore(k[0]); 0 < k.length;)b = k.shift(), d.append(b)
                        } else if (b == CKEDITOR.TRISTATE_ON) {
                            g = []; for (h = {}; b = m.getNextParagraph();) { for (k = d = null; b.getParent();) { if ("blockquote" == b.getParent().getName()) { d = b.getParent(); k = b; break } b = b.getParent() } d && k && !k.getCustomData("blockquote_moveout") && (g.push(k), CKEDITOR.dom.element.setMarker(h, k, "blockquote_moveout", !0)) } CKEDITOR.dom.element.clearAllMarkers(h); b = []; k = []; for (h = {}; 0 < g.length;)m = g.shift(), d = m.getParent(), m.getPrevious() ? m.getNext() ? (m.breakParent(m.getParent()),
                                k.push(m.getNext())) : m.remove().insertAfter(d) : m.remove().insertBefore(d), d.getCustomData("blockquote_processed") || (k.push(d), CKEDITOR.dom.element.setMarker(h, d, "blockquote_processed", !0)), b.push(m); CKEDITOR.dom.element.clearAllMarkers(h); for (g = k.length - 1; 0 <= g; g--) { d = k[g]; a: { h = d; for (var m = 0, f = h.getChildCount(), n = void 0; m < f && (n = h.getChild(m)); m++)if (n.type == CKEDITOR.NODE_ELEMENT && n.isBlockBoundary()) { h = !1; break a } h = !0 } h && d.remove() } if (a.config.enterMode == CKEDITOR.ENTER_BR) for (d = !0; b.length;)if (m = b.shift(),
                                    "div" == m.getName()) { g = new CKEDITOR.dom.documentFragment(a.document); !d || !m.getPrevious() || m.getPrevious().type == CKEDITOR.NODE_ELEMENT && m.getPrevious().isBlockBoundary() || g.append(a.document.createElement("br")); for (d = m.getNext() && !(m.getNext().type == CKEDITOR.NODE_ELEMENT && m.getNext().isBlockBoundary()); m.getFirst();)m.getFirst().remove().appendTo(g); d && g.append(a.document.createElement("br")); g.replace(m); d = !1 }
                        } c.selectBookmarks(l); a.focus()
                    }
                }, refresh: function (a, b) {
                    this.setState(a.elementPath(b.block ||
                        b.blockLimit).contains("blockquote", 1) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF)
                }, context: "blockquote", allowedContent: "blockquote", requiredContent: "blockquote"
            }; CKEDITOR.plugins.add("blockquote", { init: function (e) { e.blockless || (e.addCommand("blockquote", a), e.ui.addButton && e.ui.addButton("Blockquote", { label: e.lang.blockquote.toolbar, command: "blockquote", toolbar: "blocks,10" })) } })
        }(), "use strict", function () {
            function a(a, c) {
                CKEDITOR.tools.extend(this, c, {
                    editor: a, id: "cke-" + CKEDITOR.tools.getUniqueId(),
                    area: a._.notificationArea
                }); c.type || (this.type = "info"); this.element = this._createElement(); a.plugins.clipboard && CKEDITOR.plugins.clipboard.preventDefaultDropOnElement(this.element)
            } function e(a) { var c = this; this.editor = a; this.notifications = []; this.element = this._createElement(); this._uiBuffer = CKEDITOR.tools.eventsBuffer(10, this._layout, this); this._changeBuffer = CKEDITOR.tools.eventsBuffer(500, this._layout, this); a.on("destroy", function () { c._removeListeners(); c.element.remove() }) } CKEDITOR.plugins.add("notification",
                {
                    init: function (a) {
                        function c(a) { var b = new CKEDITOR.dom.element("div"); b.setStyles({ position: "fixed", "margin-left": "-9999px" }); b.setAttributes({ "aria-live": "assertive", "aria-atomic": "true" }); b.setText(a); CKEDITOR.document.getBody().append(b); setTimeout(function () { b.remove() }, 100) } a._.notificationArea = new e(a); a.showNotification = function (c, e, k) { var g, h; "progress" == e ? g = k : h = k; c = new CKEDITOR.plugins.notification(a, { message: c, type: e, progress: g, duration: h }); c.show(); return c }; a.on("key", function (d) {
                            if (27 ==
                                d.data.keyCode) { var e = a._.notificationArea.notifications; e.length && (c(a.lang.notification.closed), e[e.length - 1].hide(), d.cancel()) }
                        })
                    }
                }); a.prototype = {
                    show: function () { !1 !== this.editor.fire("notificationShow", { notification: this }) && (this.area.add(this), this._hideAfterTimeout()) }, update: function (a) {
                        var c = !0; !1 === this.editor.fire("notificationUpdate", { notification: this, options: a }) && (c = !1); var d = this.element, e = d.findOne(".cke_notification_message"), k = d.findOne(".cke_notification_progress"), g = a.type; d.removeAttribute("role");
                        a.progress && "progress" != this.type && (g = "progress"); g && (d.removeClass(this._getClass()), d.removeAttribute("aria-label"), this.type = g, d.addClass(this._getClass()), d.setAttribute("aria-label", this.type), "progress" != this.type || k ? "progress" != this.type && k && k.remove() : (k = this._createProgressElement(), k.insertBefore(e))); void 0 !== a.message && (this.message = a.message, e.setHtml(this.message)); void 0 !== a.progress && (this.progress = a.progress, k && k.setStyle("width", this._getPercentageProgress())); c && a.important && (d.setAttribute("role",
                            "alert"), this.isVisible() || this.area.add(this)); this.duration = a.duration; this._hideAfterTimeout()
                    }, hide: function () { !1 !== this.editor.fire("notificationHide", { notification: this }) && this.area.remove(this) }, isVisible: function () { return 0 <= CKEDITOR.tools.indexOf(this.area.notifications, this) }, _createElement: function () {
                        var a = this, c, d, e = this.editor.lang.common.close; c = new CKEDITOR.dom.element("div"); c.addClass("cke_notification"); c.addClass(this._getClass()); c.setAttributes({ id: this.id, role: "alert", "aria-label": this.type });
                        "progress" == this.type && c.append(this._createProgressElement()); d = new CKEDITOR.dom.element("p"); d.addClass("cke_notification_message"); d.setHtml(this.message); c.append(d); d = CKEDITOR.dom.element.createFromHtml('\x3ca class\x3d"cke_notification_close" href\x3d"javascript:void(0)" title\x3d"' + e + '" role\x3d"button" tabindex\x3d"-1"\x3e\x3cspan class\x3d"cke_label"\x3eX\x3c/span\x3e\x3c/a\x3e'); c.append(d); d.on("click", function () { a.editor.focus(); a.hide() }); return c
                    }, _getClass: function () {
                        return "progress" ==
                            this.type ? "cke_notification_info" : "cke_notification_" + this.type
                    }, _createProgressElement: function () { var a = new CKEDITOR.dom.element("span"); a.addClass("cke_notification_progress"); a.setStyle("width", this._getPercentageProgress()); return a }, _getPercentageProgress: function () { return Math.round(100 * (this.progress || 0)) + "%" }, _hideAfterTimeout: function () {
                        var a = this, c; this._hideTimeoutId && clearTimeout(this._hideTimeoutId); if ("number" == typeof this.duration) c = this.duration; else if ("info" == this.type || "success" ==
                            this.type) c = "number" == typeof this.editor.config.notification_duration ? this.editor.config.notification_duration : 5E3; c && (a._hideTimeoutId = setTimeout(function () { a.hide() }, c))
                    }
                }; e.prototype = {
                    add: function (a) { this.notifications.push(a); this.element.append(a.element); 1 == this.element.getChildCount() && (CKEDITOR.document.getBody().append(this.element), this._attachListeners()); this._layout() }, remove: function (a) {
                        var c = CKEDITOR.tools.indexOf(this.notifications, a); 0 > c || (this.notifications.splice(c, 1), a.element.remove(),
                            this.element.getChildCount() || (this._removeListeners(), this.element.remove()))
                    }, _createElement: function () { var a = this.editor, c = a.config, d = new CKEDITOR.dom.element("div"); d.addClass("cke_notifications_area"); d.setAttribute("id", "cke_notifications_area_" + a.name); d.setStyle("z-index", c.baseFloatZIndex - 2); return d }, _attachListeners: function () {
                        var a = CKEDITOR.document.getWindow(), c = this.editor; a.on("scroll", this._uiBuffer.input); a.on("resize", this._uiBuffer.input); c.on("change", this._changeBuffer.input);
                        c.on("floatingSpaceLayout", this._layout, this, null, 20); c.on("blur", this._layout, this, null, 20)
                    }, _removeListeners: function () { var a = CKEDITOR.document.getWindow(), c = this.editor; a.removeListener("scroll", this._uiBuffer.input); a.removeListener("resize", this._uiBuffer.input); c.removeListener("change", this._changeBuffer.input); c.removeListener("floatingSpaceLayout", this._layout); c.removeListener("blur", this._layout) }, _layout: function () {
                        function a() { c.setStyle("left", w(q + e.width - n - r)) } var c = this.element, d =
                            this.editor, e = d.ui.contentsElement.getClientRect(), k = d.ui.contentsElement.getDocumentPosition(), g, h, m = c.getClientRect(), f, n = this._notificationWidth, r = this._notificationMargin; f = CKEDITOR.document.getWindow(); var u = f.getScrollPosition(), v = f.getViewPaneSize(), y = CKEDITOR.document.getBody(), p = y.getDocumentPosition(), w = CKEDITOR.tools.cssLength; n && r || (f = this.element.getChild(0), n = this._notificationWidth = f.getClientRect().width, r = this._notificationMargin = parseInt(f.getComputedStyle("margin-left"), 10) + parseInt(f.getComputedStyle("margin-right"),
                                10)); d.toolbar && (g = d.ui.space("top"), h = g.getClientRect()); g && g.isVisible() && h.bottom > e.top && h.bottom < e.bottom - m.height ? c.setStyles({ position: "fixed", top: w(h.bottom) }) : 0 < e.top ? c.setStyles({ position: "absolute", top: w(k.y) }) : k.y + e.height - m.height > u.y ? c.setStyles({ position: "fixed", top: 0 }) : c.setStyles({ position: "absolute", top: w(k.y + e.height - m.height) }); var q = "fixed" == c.getStyle("position") ? e.left : "static" != y.getComputedStyle("position") ? k.x - p.x : k.x; e.width < n + r ? k.x + n + r > u.x + v.width ? a() : c.setStyle("left",
                                    w(q)) : k.x + n + r > u.x + v.width ? c.setStyle("left", w(q)) : k.x + e.width / 2 + n / 2 + r > u.x + v.width ? c.setStyle("left", w(q - k.x + u.x + v.width - n - r)) : 0 > e.left + e.width - n - r ? a() : 0 > e.left + e.width / 2 - n / 2 ? c.setStyle("left", w(q - k.x + u.x)) : c.setStyle("left", w(q + e.width / 2 - n / 2 - r / 2))
                    }
                }; CKEDITOR.plugins.notification = a
        }(), function () {
            var a = '\x3ca id\x3d"{id}" class\x3d"cke_button cke_button__{name} cke_button_{state} {cls}"' + (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") + ' title\x3d"{title}" tabindex\x3d"-1" hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasArrow}" aria-disabled\x3d"{ariaDisabled}"';
            CKEDITOR.env.gecko && CKEDITOR.env.mac && (a += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (a += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var a = a + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" ' + (CKEDITOR.env.ie ? 'onclick\x3d"return false;" onmouseup' : "onclick") + '\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{style}"'),
                a = a + '\x3e\x26nbsp;\x3c/span\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_button_label cke_button__{name}_label" aria-hidden\x3d"false"\x3e{label}\x3c/span\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_button_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e{arrowHtml}\x3c/a\x3e', e = CKEDITOR.addTemplate("buttonArrow", '\x3cspan class\x3d"cke_button_arrow"\x3e' + (CKEDITOR.env.hc ? "\x26#9660;" : "") + "\x3c/span\x3e"), b = CKEDITOR.addTemplate("button", a); CKEDITOR.plugins.add("button", {
                    beforeInit: function (a) {
                        a.ui.addHandler(CKEDITOR.UI_BUTTON,
                            CKEDITOR.ui.button.handler)
                    }
                }); CKEDITOR.UI_BUTTON = "button"; CKEDITOR.ui.button = function (a) { CKEDITOR.tools.extend(this, a, { title: a.label, click: a.click || function (b) { b.execCommand(a.command) } }); this._ = {} }; CKEDITOR.ui.button.handler = { create: function (a) { return new CKEDITOR.ui.button(a) } }; CKEDITOR.ui.button.prototype = {
                    render: function (a, d) {
                        function l() {
                            var b = a.mode; b && (b = this.modes[b] ? void 0 !== k[b] ? k[b] : CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, b = a.readOnly && !this.readOnly ? CKEDITOR.TRISTATE_DISABLED :
                                b, this.setState(b), this.refresh && this.refresh())
                        } var k = null, g = CKEDITOR.env, h = this._.id = CKEDITOR.tools.getNextId(), m = "", f = this.command, n, r, u; this._.editor = a; var v = { id: h, button: this, editor: a, focus: function () { CKEDITOR.document.getById(h).focus() }, execute: function () { this.button.click(a) }, attach: function (a) { this.button.attach(a) } }, y = CKEDITOR.tools.addFunction(function (a) { if (v.onkey) return a = new CKEDITOR.dom.event(a), !1 !== v.onkey(v, a.getKeystroke()) }), p = CKEDITOR.tools.addFunction(function (a) {
                            var b; v.onfocus &&
                                (b = !1 !== v.onfocus(v, new CKEDITOR.dom.event(a))); return b
                        }), w = 0; v.clickFn = n = CKEDITOR.tools.addFunction(function () { w && (a.unlockSelection(1), w = 0); v.execute(); g.iOS && a.focus() }); this.modes ? (k = {}, a.on("beforeModeUnload", function () { a.mode && this._.state != CKEDITOR.TRISTATE_DISABLED && (k[a.mode] = this._.state) }, this), a.on("activeFilterChange", l, this), a.on("mode", l, this), !this.readOnly && a.on("readOnly", l, this)) : f && (f = a.getCommand(f)) && (f.on("state", function () { this.setState(f.state) }, this), m += f.state == CKEDITOR.TRISTATE_ON ?
                            "on" : f.state == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off"); var q; if (this.directional) a.on("contentDirChanged", function (b) { var f = CKEDITOR.document.getById(this._.id), d = f.getFirst(); b = b.data; b != a.lang.dir ? f.addClass("cke_" + b) : f.removeClass("cke_ltr").removeClass("cke_rtl"); d.setAttribute("style", CKEDITOR.skin.getIconStyle(q, "rtl" == b, this.icon, this.iconOffset)) }, this); f ? (r = a.getCommandKeystroke(f)) && (u = CKEDITOR.tools.keystrokeToString(a.lang.common.keyboard, r)) : m += "off"; r = this.name || this.command; var B =
                                null, t = this.icon; q = r; this.icon && !/\./.test(this.icon) ? (q = this.icon, t = null) : (this.icon && (B = this.icon), CKEDITOR.env.hidpi && this.iconHiDpi && (B = this.iconHiDpi)); B ? (CKEDITOR.skin.addIcon(B, B), t = null) : B = q; m = {
                                    id: h, name: r, iconName: q, label: this.label, cls: this.className || "", state: m, ariaDisabled: "disabled" == m ? "true" : "false", title: this.title + (u ? " (" + u.display + ")" : ""), ariaShortcut: u ? a.lang.common.keyboardShortcut + " " + u.aria : "", titleJs: g.gecko && !g.hc ? "" : (this.title || "").replace("'", ""), hasArrow: this.hasArrow ? "true" :
                                        "false", keydownFn: y, focusFn: p, clickFn: n, style: CKEDITOR.skin.getIconStyle(B, "rtl" == a.lang.dir, t, this.iconOffset), arrowHtml: this.hasArrow ? e.output() : ""
                                }; b.output(m, d); if (this.onRender) this.onRender(); return v
                    }, setState: function (a) {
                        if (this._.state == a) return !1; this._.state = a; var b = CKEDITOR.document.getById(this._.id); return b ? (b.setState(a, "cke_button"), a == CKEDITOR.TRISTATE_DISABLED ? b.setAttribute("aria-disabled", !0) : b.removeAttribute("aria-disabled"), this.hasArrow ? (a = a == CKEDITOR.TRISTATE_ON ? this._.editor.lang.button.selectedLabel.replace(/%1/g,
                            this.label) : this.label, CKEDITOR.document.getById(this._.id + "_label").setText(a)) : a == CKEDITOR.TRISTATE_ON ? b.setAttribute("aria-pressed", !0) : b.removeAttribute("aria-pressed"), !0) : !1
                    }, getState: function () { return this._.state }, toFeature: function (a) { if (this._.feature) return this._.feature; var b = this; this.allowedContent || this.requiredContent || !this.command || (b = a.getCommand(this.command) || b); return this._.feature = b }
                }; CKEDITOR.ui.prototype.addButton = function (a, b) { this.add(a, CKEDITOR.UI_BUTTON, b) }
        }(), function () {
            function a(a) {
                function b() {
                    for (var f =
                        c(), h = CKEDITOR.tools.clone(a.config.toolbarGroups) || e(a), l = 0; l < h.length; l++) { var m = h[l]; if ("/" != m) { "string" == typeof m && (m = h[l] = { name: m }); var y, p = m.groups; if (p) for (var w = 0; w < p.length; w++)y = p[w], (y = f[y]) && g(m, y); (y = f[m.name]) && g(m, y) } } return h
                } function c() {
                    var b = {}, f, g, e; for (f in a.ui.items) g = a.ui.items[f], e = g.toolbar || "others", e = e.split(","), g = e[0], e = parseInt(e[1] || -1, 10), b[g] || (b[g] = []), b[g].push({ name: f, order: e }); for (g in b) b[g] = b[g].sort(function (a, b) {
                        return a.order == b.order ? 0 : 0 > b.order ? -1 : 0 > a.order ?
                            1 : a.order < b.order ? -1 : 1
                    }); return b
                } function g(b, c) { if (c.length) { b.items ? b.items.push(a.ui.create("-")) : b.items = []; for (var f; f = c.shift();)f = "string" == typeof f ? f : f.name, m && -1 != CKEDITOR.tools.indexOf(m, f) || (f = a.ui.create(f)) && a.addFeature(f) && b.items.push(f) } } function h(a) { var b = [], c, f, d; for (c = 0; c < a.length; ++c)f = a[c], d = {}, "/" == f ? b.push(f) : CKEDITOR.tools.isArray(f) ? (g(d, CKEDITOR.tools.clone(f)), b.push(d)) : f.items && (g(d, CKEDITOR.tools.clone(f.items)), d.name = f.name, b.push(d)); return b } var m = a.config.removeButtons,
                    m = m && m.split(","), f = a.config.toolbar; "string" == typeof f && (f = a.config["toolbar_" + f]); return a.toolbar = f ? h(f) : b()
            } function e(a) {
                return a._.toolbarGroups || (a._.toolbarGroups = [{ name: "document", groups: ["mode", "document", "doctools"] }, { name: "clipboard", groups: ["clipboard", "undo"] }, { name: "editing", groups: ["find", "selection", "spellchecker"] }, { name: "forms" }, "/", { name: "basicstyles", groups: ["basicstyles", "cleanup"] }, { name: "paragraph", groups: ["list", "indent", "blocks", "align", "bidi"] }, { name: "links" }, { name: "insert" },
                    "/", { name: "styles" }, { name: "colors" }, { name: "tools" }, { name: "others" }, { name: "about" }])
            } var b = function () { this.toolbars = []; this.focusCommandExecuted = !1 }; b.prototype.focus = function () { for (var a = 0, b; b = this.toolbars[a++];)for (var c = 0, g; g = b.items[c++];)if (g.focus) { g.focus(); return } }; var c = { modes: { wysiwyg: 1, source: 1 }, readOnly: 1, exec: function (a) { a.toolbox && (a.toolbox.focusCommandExecuted = !0, CKEDITOR.env.ie || CKEDITOR.env.air ? setTimeout(function () { a.toolbox.focus() }, 100) : a.toolbox.focus()) } }; CKEDITOR.plugins.add("toolbar",
                {
                    requires: "button", init: function (d) {
                        var e, k = function (a, b) {
                            var c, f = "rtl" == d.lang.dir, n = d.config.toolbarGroupCycling, r = f ? 37 : 39, f = f ? 39 : 37, n = void 0 === n || n; switch (b) {
                                case 9: case CKEDITOR.SHIFT + 9: for (; !c || !c.items.length;)if (c = 9 == b ? (c ? c.next : a.toolbar.next) || d.toolbox.toolbars[0] : (c ? c.previous : a.toolbar.previous) || d.toolbox.toolbars[d.toolbox.toolbars.length - 1], c.items.length) for (a = c.items[e ? c.items.length - 1 : 0]; a && !a.focus;)(a = e ? a.previous : a.next) || (c = 0); a && a.focus(); return !1; case r: c = a; do c = c.next, !c &&
                                    n && (c = a.toolbar.items[0]); while (c && !c.focus); c ? c.focus() : k(a, 9); return !1; case 40: return a.button && a.button.hasArrow ? a.execute() : k(a, 40 == b ? r : f), !1; case f: case 38: c = a; do c = c.previous, !c && n && (c = a.toolbar.items[a.toolbar.items.length - 1]); while (c && !c.focus); c ? c.focus() : (e = 1, k(a, CKEDITOR.SHIFT + 9), e = 0); return !1; case 27: return d.focus(), !1; case 13: case 32: return a.execute(), !1
                            }return !0
                        }; d.on("uiSpace", function (c) {
                            if (c.data.space == d.config.toolbarLocation) {
                                c.removeListener(); d.toolbox = new b; var e = CKEDITOR.tools.getNextId(),
                                    l = ['\x3cspan id\x3d"', e, '" class\x3d"cke_voice_label"\x3e', d.lang.toolbar.toolbars, "\x3c/span\x3e", '\x3cspan id\x3d"' + d.ui.spaceId("toolbox") + '" class\x3d"cke_toolbox" role\x3d"group" aria-labelledby\x3d"', e, '" onmousedown\x3d"return false;"\x3e'], e = !1 !== d.config.toolbarStartupExpanded, f, n; d.config.toolbarCanCollapse && d.elementMode != CKEDITOR.ELEMENT_MODE_INLINE && l.push('\x3cspan class\x3d"cke_toolbox_main"' + (e ? "\x3e" : ' style\x3d"display:none"\x3e')); for (var r = d.toolbox.toolbars, u = a(d), v = u.length,
                                        y = 0; y < v; y++) {
                                            var p, w = 0, q, B = u[y], t = "/" !== B && ("/" === u[y + 1] || y == v - 1), x; if (B) if (f && (l.push("\x3c/span\x3e"), n = f = 0), "/" === B) l.push('\x3cspan class\x3d"cke_toolbar_break"\x3e\x3c/span\x3e'); else {
                                                x = B.items || B; for (var C = 0; C < x.length; C++) {
                                                    var z = x[C], A; if (z) {
                                                        var G = function (a) { a = a.render(d, l); F = w.items.push(a) - 1; 0 < F && (a.previous = w.items[F - 1], a.previous.next = a); a.toolbar = w; a.onkey = k; a.onfocus = function () { d.toolbox.focusCommandExecuted || d.focus() } }; if (z.type == CKEDITOR.UI_SEPARATOR) n = f && z; else {
                                                            A = !1 !== z.canGroup;
                                                            if (!w) { p = CKEDITOR.tools.getNextId(); w = { id: p, items: [] }; q = B.name && (d.lang.toolbar.toolbarGroups[B.name] || B.name); l.push('\x3cspan id\x3d"', p, '" class\x3d"cke_toolbar' + (t ? ' cke_toolbar_last"' : '"'), q ? ' aria-labelledby\x3d"' + p + '_label"' : "", ' role\x3d"toolbar"\x3e'); q && l.push('\x3cspan id\x3d"', p, '_label" class\x3d"cke_voice_label"\x3e', q, "\x3c/span\x3e"); l.push('\x3cspan class\x3d"cke_toolbar_start"\x3e\x3c/span\x3e'); var F = r.push(w) - 1; 0 < F && (w.previous = r[F - 1], w.previous.next = w) } A ? f || (l.push('\x3cspan class\x3d"cke_toolgroup" role\x3d"presentation"\x3e'),
                                                                f = 1) : f && (l.push("\x3c/span\x3e"), f = 0); n && (G(n), n = 0); G(z)
                                                        }
                                                    }
                                                } f && (l.push("\x3c/span\x3e"), n = f = 0); w && l.push('\x3cspan class\x3d"cke_toolbar_end"\x3e\x3c/span\x3e\x3c/span\x3e')
                                            }
                                } d.config.toolbarCanCollapse && l.push("\x3c/span\x3e"); if (d.config.toolbarCanCollapse && d.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                                    var E = CKEDITOR.tools.addFunction(function () { d.execCommand("toolbarCollapse") }); d.on("destroy", function () { CKEDITOR.tools.removeFunction(E) }); d.addCommand("toolbarCollapse", {
                                        readOnly: 1, exec: function (a) {
                                            var b =
                                                a.ui.space("toolbar_collapser"), c = b.getPrevious(), f = a.ui.space("contents"), d = c.getParent(), g = parseInt(f.$.style.height, 10), e = d.$.offsetHeight, h = b.hasClass("cke_toolbox_collapser_min"); h ? (c.show(), b.removeClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarCollapse)) : (c.hide(), b.addClass("cke_toolbox_collapser_min"), b.setAttribute("title", a.lang.toolbar.toolbarExpand)); b.getFirst().setText(h ? "▲" : "◀"); f.setStyle("height", g - (d.$.offsetHeight - e) + "px"); a.fire("resize", {
                                                    outerHeight: a.container.$.offsetHeight,
                                                    contentsHeight: f.$.offsetHeight, outerWidth: a.container.$.offsetWidth
                                                })
                                        }, modes: { wysiwyg: 1, source: 1 }
                                    }); d.setKeystroke(CKEDITOR.ALT + (CKEDITOR.env.ie || CKEDITOR.env.webkit ? 189 : 109), "toolbarCollapse"); l.push('\x3ca title\x3d"' + (e ? d.lang.toolbar.toolbarCollapse : d.lang.toolbar.toolbarExpand) + '" id\x3d"' + d.ui.spaceId("toolbar_collapser") + '" tabIndex\x3d"-1" class\x3d"cke_toolbox_collapser'); e || l.push(" cke_toolbox_collapser_min"); l.push('" onclick\x3d"CKEDITOR.tools.callFunction(' + E + ')"\x3e', '\x3cspan class\x3d"cke_arrow"\x3e\x26#9650;\x3c/span\x3e',
                                        "\x3c/a\x3e")
                                } l.push("\x3c/span\x3e"); c.data.html += l.join("")
                            }
                        }); d.on("destroy", function () { if (this.toolbox) { var a, b = 0, c, f, d; for (a = this.toolbox.toolbars; b < a.length; b++)for (f = a[b].items, c = 0; c < f.length; c++)d = f[c], d.clickFn && CKEDITOR.tools.removeFunction(d.clickFn), d.keyDownFn && CKEDITOR.tools.removeFunction(d.keyDownFn) } }); d.on("uiReady", function () { var a = d.ui.space("toolbox"); a && d.focusManager.add(a, 1) }); d.addCommand("toolbarFocus", c); d.setKeystroke(CKEDITOR.ALT + 121, "toolbarFocus"); d.ui.add("-", CKEDITOR.UI_SEPARATOR,
                            {}); d.ui.addHandler(CKEDITOR.UI_SEPARATOR, { create: function () { return { render: function (a, b) { b.push('\x3cspan class\x3d"cke_toolbar_separator" role\x3d"separator"\x3e\x3c/span\x3e'); return {} } } } })
                    }
                }); CKEDITOR.ui.prototype.addToolbarGroup = function (a, b, c) {
                    var g = e(this.editor), h = 0 === b, m = { name: a }; if (c) {
                        if (c = CKEDITOR.tools.search(g, function (a) { return a.name == c })) {
                            !c.groups && (c.groups = []); if (b && (b = CKEDITOR.tools.indexOf(c.groups, b), 0 <= b)) { c.groups.splice(b + 1, 0, a); return } h ? c.groups.splice(0, 0, a) : c.groups.push(a);
                            return
                        } b = null
                    } b && (b = CKEDITOR.tools.indexOf(g, function (a) { return a.name == b })); h ? g.splice(0, 0, a) : "number" == typeof b ? g.splice(b + 1, 0, m) : g.push(a)
                }
        }(), CKEDITOR.UI_SEPARATOR = "separator", CKEDITOR.config.toolbarLocation = "top", "use strict", function () {
            function a(a, b, c) {
                b.type || (b.type = "auto"); if (c && !1 === a.fire("beforePaste", b) || !b.dataValue && b.dataTransfer.isEmpty()) return !1; b.dataValue || (b.dataValue = ""); if (CKEDITOR.env.gecko && "drop" == b.method && a.toolbox) a.once("afterPaste", function () { a.toolbox.focus() }); return a.fire("paste",
                    b)
            } function e(b) {
                function c() {
                    var a = b.editable(); if (CKEDITOR.plugins.clipboard.isCustomCopyCutSupported) { var d = function (a) { b.getSelection().isCollapsed() || (b.readOnly && "cut" == a.name || A.initPasteDataTransfer(a, b), a.data.preventDefault()) }; a.on("copy", d); a.on("cut", d); a.on("cut", function () { b.readOnly || b.extractSelectedHtml() }, null, null, 999) } a.on(A.mainPasteEvent, function (a) { "beforepaste" == A.mainPasteEvent && G || x(a) }); "beforepaste" == A.mainPasteEvent && (a.on("paste", function (a) {
                        F || (e(), a.data.preventDefault(),
                            x(a), k("paste"))
                    }), a.on("contextmenu", h, null, null, 0), a.on("beforepaste", function (a) { !a.data || a.data.$.ctrlKey || a.data.$.shiftKey || h() }, null, null, 0)); a.on("beforecut", function () { !G && l(b) }); var g; a.attachListener(CKEDITOR.env.ie ? a : b.document.getDocumentElement(), "mouseup", function () { g = setTimeout(function () { C() }, 0) }); b.on("destroy", function () { clearTimeout(g) }); a.on("keyup", C)
                } function d(a) {
                    return {
                        type: a, canUndo: "cut" == a, startDisabled: !0, fakeKeystroke: "cut" == a ? CKEDITOR.CTRL + 88 : CKEDITOR.CTRL + 67, exec: function () {
                            "cut" ==
                            this.type && l(); var a; var c = this.type; if (CKEDITOR.env.ie) a = k(c); else try { a = b.document.$.execCommand(c, !1, null) } catch (d) { a = !1 } a || b.showNotification(b.lang.clipboard[this.type + "Error"]); return a
                        }
                    }
                } function g() {
                    return {
                        canUndo: !1, async: !0, fakeKeystroke: CKEDITOR.CTRL + 86, exec: function (b, c) {
                            function f(c, e) {
                                e = "undefined" !== typeof e ? e : !0; c ? (c.method = "paste", c.dataTransfer || (c.dataTransfer = A.initPasteDataTransfer()), a(b, c, e)) : g && !b._.forcePasteDialog && b.showNotification(k, "info", b.config.clipboard_notificationDuration);
                                b._.forcePasteDialog = !1; b.fire("afterCommandExec", { name: "paste", command: d, returnValue: !!c })
                            } c = "undefined" !== typeof c && null !== c ? c : {}; var d = this, g = "undefined" !== typeof c.notification ? c.notification : !0, e = c.type, h = CKEDITOR.tools.keystrokeToString(b.lang.common.keyboard, b.getCommandKeystroke(this)), k = "string" === typeof g ? g : b.lang.clipboard.pasteNotification.replace(/%1/, '\x3ckbd aria-label\x3d"' + h.aria + '"\x3e' + h.display + "\x3c/kbd\x3e"), h = "string" === typeof c ? c : c.dataValue; e && !0 !== b.config.forcePasteAsPlainText &&
                                "allow-word" !== b.config.forcePasteAsPlainText ? b._.nextPasteType = e : delete b._.nextPasteType; "string" === typeof h ? f({ dataValue: h }) : b.getClipboardData(f)
                        }
                    }
                } function e() { F = 1; setTimeout(function () { F = 0 }, 100) } function h() { G = 1; setTimeout(function () { G = 0 }, 10) } function k(a) { var c = b.document, d = c.getBody(), g = !1, e = function () { g = !0 }; d.on(a, e); 7 < CKEDITOR.env.version ? c.$.execCommand(a) : c.$.selection.createRange().execCommand(a); d.removeListener(a, e); return g } function l() {
                    if (CKEDITOR.env.ie && !CKEDITOR.env.quirks) {
                        var a =
                            b.getSelection(), c, d, g; a.getType() == CKEDITOR.SELECTION_ELEMENT && (c = a.getSelectedElement()) && (d = a.getRanges()[0], g = b.document.createText(""), g.insertBefore(c), d.setStartBefore(g), d.setEndAfter(c), a.selectRanges([d]), setTimeout(function () { c.getParent() && (g.remove(), a.selectElement(c)) }, 0))
                    }
                } function m(a, c) {
                    var d = b.document, g = b.editable(), e = function (a) { a.cancel() }, h; if (!d.getById("cke_pastebin")) {
                        var k = b.getSelection(), l = k.createBookmarks(); CKEDITOR.env.ie && k.root.fire("selectionchange"); var n = new CKEDITOR.dom.element(!CKEDITOR.env.webkit &&
                            !g.is("body") || CKEDITOR.env.ie ? "div" : "body", d); n.setAttributes({ id: "cke_pastebin", "data-cke-temp": "1" }); var p = 0, d = d.getWindow(); CKEDITOR.env.webkit ? (g.append(n), n.addClass("cke_editable"), g.is("body") || (p = "static" != g.getComputedStyle("position") ? g : CKEDITOR.dom.element.get(g.$.offsetParent), p = p.getDocumentPosition().y)) : g.getAscendant(CKEDITOR.env.ie ? "body" : "html", 1).append(n); n.setStyles({
                                position: "absolute", top: d.getScrollPosition().y - p + 10 + "px", width: "1px", height: Math.max(1, d.getViewPaneSize().height -
                                    20) + "px", overflow: "hidden", margin: 0, padding: 0
                            }); CKEDITOR.env.safari && n.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select", "text")); (p = n.getParent().isReadOnly()) ? (n.setOpacity(0), n.setAttribute("contenteditable", !0)) : n.setStyle("ltr" == b.config.contentsLangDirection ? "left" : "right", "-10000px"); b.on("selectionChange", e, null, null, 0); if (CKEDITOR.env.webkit || CKEDITOR.env.gecko) h = g.once("blur", e, null, null, -100); p && n.focus(); p = new CKEDITOR.dom.range(n); p.selectNodeContents(n); var q = p.select(); CKEDITOR.env.ie &&
                                (h = g.once("blur", function () { b.lockSelection(q) })); var w = CKEDITOR.document.getWindow().getScrollPosition().y; setTimeout(function () { CKEDITOR.env.webkit && (CKEDITOR.document.getBody().$.scrollTop = w); h && h.removeListener(); CKEDITOR.env.ie && g.focus(); k.selectBookmarks(l); n.remove(); var a; CKEDITOR.env.webkit && (a = n.getFirst()) && a.is && a.hasClass("Apple-style-span") && (n = a); b.removeListener("selectionChange", e); c(n.getHtml()) }, 0)
                    }
                } function B() {
                    if ("paste" == A.mainPasteEvent) return b.fire("beforePaste", {
                        type: "auto",
                        method: "paste"
                    }), !1; b.focus(); e(); var a = b.focusManager; a.lock(); if (b.editable().fire(A.mainPasteEvent) && !k("paste")) return a.unlock(), !1; a.unlock(); return !0
                } function t(a) { if ("wysiwyg" == b.mode) switch (a.data.keyCode) { case CKEDITOR.CTRL + 86: case CKEDITOR.SHIFT + 45: a = b.editable(); e(); "paste" == A.mainPasteEvent && a.fire("beforepaste"); break; case CKEDITOR.CTRL + 88: case CKEDITOR.SHIFT + 46: b.fire("saveSnapshot"), setTimeout(function () { b.fire("saveSnapshot") }, 50) } } function x(c) {
                    var d = {
                        type: "auto", method: "paste",
                        dataTransfer: A.initPasteDataTransfer(c)
                    }; d.dataTransfer.cacheData(); var g = !1 !== b.fire("beforePaste", d); g && A.canClipboardApiBeTrusted(d.dataTransfer, b) ? (c.data.preventDefault(), setTimeout(function () { a(b, d) }, 0)) : m(c, function (c) { d.dataValue = c.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig, ""); g && a(b, d) })
                } function C() { if ("wysiwyg" == b.mode) { var a = z("paste"); b.getCommand("cut").setState(z("cut")); b.getCommand("copy").setState(z("copy")); b.getCommand("paste").setState(a); b.fire("pasteState", a) } } function z(a) {
                    if (E &&
                        a in { paste: 1, cut: 1 }) return CKEDITOR.TRISTATE_DISABLED; if ("paste" == a) return CKEDITOR.TRISTATE_OFF; a = b.getSelection(); var c = a.getRanges(); return a.getType() == CKEDITOR.SELECTION_NONE || 1 == c.length && c[0].collapsed ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF
                } var A = CKEDITOR.plugins.clipboard, G = 0, F = 0, E = 0; (function () {
                    b.on("key", t); b.on("contentDom", c); b.on("selectionChange", function (a) { E = a.data.selection.getRanges()[0].checkReadOnly(); C() }); if (b.contextMenu) {
                        b.contextMenu.addListener(function (a, b) {
                            E =
                            b.getRanges()[0].checkReadOnly(); return { cut: z("cut"), copy: z("copy"), paste: z("paste") }
                        }); var a = null; b.on("menuShow", function () { a && (a.removeListener(), a = null); var c = b.contextMenu.findItemByCommandName("paste"); c && c.element && (a = c.element.on("touchend", function () { b._.forcePasteDialog = !0 })) })
                    } if (b.ui.addButton) b.once("instanceReady", function () {
                        b._.pasteButtons && CKEDITOR.tools.array.forEach(b._.pasteButtons, function (a) {
                            if (a = b.ui.get(a)) if (a = CKEDITOR.document.getById(a._.id)) a.on("touchend", function () {
                                b._.forcePasteDialog =
                                !0
                            })
                        })
                    })
                })(); (function () { function a(c, d, g, e, h) { var k = b.lang.clipboard[d]; b.addCommand(d, g); b.ui.addButton && b.ui.addButton(c, { label: k, command: d, toolbar: "clipboard," + e }); b.addMenuItems && b.addMenuItem(d, { label: k, command: d, group: "clipboard", order: h }) } a("Cut", "cut", d("cut"), 10, 1); a("Copy", "copy", d("copy"), 20, 4); a("Paste", "paste", g(), 30, 8); b._.pasteButtons || (b._.pasteButtons = []); b._.pasteButtons.push("Paste") })(); b.getClipboardData = function (a, c) {
                    function d(a) { a.removeListener(); a.cancel(); c(a.data) } function g(a) {
                        a.removeListener();
                        a.cancel(); c({ type: h, dataValue: a.data.dataValue, dataTransfer: a.data.dataTransfer, method: "paste" })
                    } var e = !1, h = "auto"; c || (c = a, a = null); b.on("beforePaste", function (a) { a.removeListener(); e = !0; h = a.data.type }, null, null, 1E3); b.on("paste", d, null, null, 0); !1 === B() && (b.removeListener("paste", d), b._.forcePasteDialog && e && b.fire("pasteDialog") ? (b.on("pasteDialogCommit", g), b.on("dialogHide", function (a) { a.removeListener(); a.data.removeListener("pasteDialogCommit", g); a.data._.committed || c(null) })) : c(null))
                }
            } function b(a) {
                if (CKEDITOR.env.webkit) {
                    if (!a.match(/^[^<]*$/g) &&
                        !a.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi)) return "html"
                } else if (CKEDITOR.env.ie) { if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi) && !a.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi)) return "html" } else if (CKEDITOR.env.gecko) { if (!a.match(/^([^<]|<br( ?\/)?>)*$/gi)) return "html" } else return "html"; return "htmlifiedtext"
            } function c(a, b) {
                function c(a) { return CKEDITOR.tools.repeat("\x3c/p\x3e\x3cp\x3e", ~~(a / 2)) + (1 == a % 2 ? "\x3cbr\x3e" : "") } b = b.replace(/(?!\u3000)\s+/g, " ").replace(/> +</g, "\x3e\x3c").replace(/<br ?\/>/gi,
                    "\x3cbr\x3e"); b = b.replace(/<\/?[A-Z]+>/g, function (a) { return a.toLowerCase() }); if (b.match(/^[^<]$/)) return b; CKEDITOR.env.webkit && -1 < b.indexOf("\x3cdiv\x3e") && (b = b.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g, "\x3cbr\x3e").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g, "\x3cdiv\x3e\x3c/div\x3e"), b.match(/<div>(<br>|)<\/div>/) && (b = "\x3cp\x3e" + b.replace(/(<div>(<br>|)<\/div>)+/g, function (a) { return c(a.split("\x3c/div\x3e\x3cdiv\x3e").length + 1) }) + "\x3c/p\x3e"), b = b.replace(/<\/div><div>/g, "\x3cbr\x3e"),
                        b = b.replace(/<\/?div>/g, "")); CKEDITOR.env.gecko && a.enterMode != CKEDITOR.ENTER_BR && (CKEDITOR.env.gecko && (b = b.replace(/^<br><br>$/, "\x3cbr\x3e")), -1 < b.indexOf("\x3cbr\x3e\x3cbr\x3e") && (b = "\x3cp\x3e" + b.replace(/(<br>){2,}/g, function (a) { return c(a.length / 4) }) + "\x3c/p\x3e")); return k(a, b)
            } function d() {
                function a() { var b = {}, c; for (c in CKEDITOR.dtd) "$" != c.charAt(0) && "div" != c && "span" != c && (b[c] = 1); return b } var b = {}; return {
                    get: function (c) {
                        return "plain-text" == c ? b.plainText || (b.plainText = new CKEDITOR.filter("br")) :
                            "semantic-content" == c ? ((c = b.semanticContent) || (c = new CKEDITOR.filter, c.allow({ $1: { elements: a(), attributes: !0, styles: !1, classes: !1 } }), c = b.semanticContent = c), c) : c ? new CKEDITOR.filter(c) : null
                    }
                }
            } function l(a, b, c) { b = CKEDITOR.htmlParser.fragment.fromHtml(b); var d = new CKEDITOR.htmlParser.basicWriter; c.applyTo(b, !0, !1, a.activeEnterMode); b.writeHtml(d); return d.getHtml() } function k(a, b) {
                a.enterMode == CKEDITOR.ENTER_BR ? b = b.replace(/(<\/p><p>)+/g, function (a) {
                    return CKEDITOR.tools.repeat("\x3cbr\x3e", a.length /
                        7 * 2)
                }).replace(/<\/?p>/g, "") : a.enterMode == CKEDITOR.ENTER_DIV && (b = b.replace(/<(\/)?p>/g, "\x3c$1div\x3e")); return b
            } function g(a) { a.data.preventDefault(); a.data.$.dataTransfer.dropEffect = "none" } function h(b) {
                var c = CKEDITOR.plugins.clipboard; b.on("contentDom", function () {
                    function d(c, g, e) { g.select(); a(b, { dataTransfer: e, method: "drop" }, 1); e.sourceEditor.fire("saveSnapshot"); e.sourceEditor.editable().extractHtmlFromRange(c); e.sourceEditor.getSelection().selectRanges([c]); e.sourceEditor.fire("saveSnapshot") }
                    function g(d, e) { d.select(); a(b, { dataTransfer: e, method: "drop" }, 1); c.resetDragDataTransfer() } function e(a, c, d) { var g = { $: a.data.$, target: a.data.getTarget() }; c && (g.dragRange = c); d && (g.dropRange = d); !1 === b.fire(a.name, g) && a.data.preventDefault() } function h(a) { a.type != CKEDITOR.NODE_ELEMENT && (a = a.getParent()); return a.getChildCount() } var k = b.editable(), l = CKEDITOR.plugins.clipboard.getDropTarget(b), m = b.ui.space("top"), B = b.ui.space("bottom"); c.preventDefaultDropOnElement(m); c.preventDefaultDropOnElement(B);
                    k.attachListener(l, "dragstart", e); k.attachListener(b, "dragstart", c.resetDragDataTransfer, c, null, 1); k.attachListener(b, "dragstart", function (a) { c.initDragDataTransfer(a, b) }, null, null, 2); k.attachListener(b, "dragstart", function () { var a = c.dragRange = b.getSelection().getRanges()[0]; CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (c.dragStartContainerChildCount = a ? h(a.startContainer) : null, c.dragEndContainerChildCount = a ? h(a.endContainer) : null) }, null, null, 100); k.attachListener(l, "dragend", e); k.attachListener(b, "dragend",
                        c.initDragDataTransfer, c, null, 1); k.attachListener(b, "dragend", c.resetDragDataTransfer, c, null, 100); k.attachListener(l, "dragover", function (a) { if (CKEDITOR.env.edge) a.data.preventDefault(); else { var b = a.data.getTarget(); b && b.is && b.is("html") ? a.data.preventDefault() : CKEDITOR.env.ie && CKEDITOR.plugins.clipboard.isFileApiSupported && a.data.$.dataTransfer.types.contains("Files") && a.data.preventDefault() } }); k.attachListener(l, "drop", function (a) {
                            if (!a.data.$.defaultPrevented) {
                                a.data.preventDefault(); var d = a.data.getTarget();
                                if (!d.isReadOnly() || d.type == CKEDITOR.NODE_ELEMENT && d.is("html")) { var d = c.getRangeAtDropPosition(a, b), g = c.dragRange; d && e(a, g, d) }
                            }
                        }, null, null, 9999); k.attachListener(b, "drop", c.initDragDataTransfer, c, null, 1); k.attachListener(b, "drop", function (a) { if (a = a.data) { var e = a.dropRange, h = a.dragRange, k = a.dataTransfer; k.getTransferType(b) == CKEDITOR.DATA_TRANSFER_INTERNAL ? setTimeout(function () { c.internalDrop(h, e, k, b) }, 0) : k.getTransferType(b) == CKEDITOR.DATA_TRANSFER_CROSS_EDITORS ? d(h, e, k) : g(e, k) } }, null, null, 9999)
                })
            }
            var m; CKEDITOR.plugins.add("clipboard", {
                requires: "dialog,notification,toolbar", init: function (a) {
                    var g, k = d(); a.config.forcePasteAsPlainText ? g = "plain-text" : a.config.pasteFilter ? g = a.config.pasteFilter : !CKEDITOR.env.webkit || "pasteFilter" in a.config || (g = "semantic-content"); a.pasteFilter = k.get(g); e(a); h(a); CKEDITOR.dialog.add("paste", CKEDITOR.getUrl(this.path + "dialogs/paste.js")); if (CKEDITOR.env.gecko) {
                        var m = ["image/png", "image/jpeg", "image/gif"], v; a.on("paste", function (b) {
                            var c = b.data, d = c.dataTransfer;
                            if (!c.dataValue && "paste" == c.method && d && 1 == d.getFilesCount() && v != d.id && (d = d.getFile(0), -1 != CKEDITOR.tools.indexOf(m, d.type))) { var g = new FileReader; g.addEventListener("load", function () { b.data.dataValue = '\x3cimg src\x3d"' + g.result + '" /\x3e'; a.fire("paste", b.data) }, !1); g.addEventListener("abort", function () { a.fire("paste", b.data) }, !1); g.addEventListener("error", function () { a.fire("paste", b.data) }, !1); g.readAsDataURL(d); v = c.dataTransfer.id; b.stop() }
                        }, null, null, 1)
                    } a.on("paste", function (b) {
                        b.data.dataTransfer ||
                        (b.data.dataTransfer = new CKEDITOR.plugins.clipboard.dataTransfer); if (!b.data.dataValue) { var c = b.data.dataTransfer, d = c.getData("text/html"); if (d) b.data.dataValue = d, b.data.type = "html"; else if (d = c.getData("text/plain")) b.data.dataValue = a.editable().transformPlainTextToHtml(d), b.data.type = "text" }
                    }, null, null, 1); a.on("paste", function (a) {
                        var b = a.data.dataValue, c = CKEDITOR.dtd.$block; -1 < b.indexOf("Apple-") && (b = b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi, " "), "html" != a.data.type && (b = b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,
                            function (a, b) { return b.replace(/\t/g, "\x26nbsp;\x26nbsp; \x26nbsp;") })), -1 < b.indexOf('\x3cbr class\x3d"Apple-interchange-newline"\x3e') && (a.data.startsWithEOL = 1, a.data.preSniffing = "html", b = b.replace(/<br class="Apple-interchange-newline">/, "")), b = b.replace(/(<[^>]+) class="Apple-[^"]*"/gi, "$1")); if (b.match(/^<[^<]+cke_(editable|contents)/i)) {
                                var f, d, g = new CKEDITOR.dom.element("div"); for (g.setHtml(b); 1 == g.getChildCount() && (f = g.getFirst()) && f.type == CKEDITOR.NODE_ELEMENT && (f.hasClass("cke_editable") ||
                                    f.hasClass("cke_contents"));)g = d = f; d && (b = d.getHtml().replace(/<br>$/i, ""))
                            } CKEDITOR.env.ie ? b = b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g, function (b, f) { return f.toLowerCase() in c ? (a.data.preSniffing = "html", "\x3c" + f) : b }) : CKEDITOR.env.webkit ? b = b.replace(/<\/(\w+)><div><br><\/div>$/, function (b, f) { return f in c ? (a.data.endsWithEOL = 1, "\x3c/" + f + "\x3e") : b }) : CKEDITOR.env.gecko && (b = b.replace(/(\s)<br>$/, "$1")); a.data.dataValue = b
                    }, null, null, 3); a.on("paste", function (d) {
                        d = d.data; var g = a._.nextPasteType || d.type, e = d.dataValue,
                            h, m = a.config.clipboard_defaultContentType || "html", n = d.dataTransfer.getTransferType(a) == CKEDITOR.DATA_TRANSFER_EXTERNAL, x = !0 === a.config.forcePasteAsPlainText; h = "html" == g || "html" == d.preSniffing ? "html" : b(e); delete a._.nextPasteType; "htmlifiedtext" == h && (e = c(a.config, e)); if ("text" == g && "html" == h) e = l(a, e, k.get("plain-text")); else if (n && a.pasteFilter && !d.dontFilter || x) e = l(a, e, a.pasteFilter); d.startsWithEOL && (e = '\x3cbr data-cke-eol\x3d"1"\x3e' + e); d.endsWithEOL && (e += '\x3cbr data-cke-eol\x3d"1"\x3e'); "auto" ==
                                g && (g = "html" == h || "html" == m ? "html" : "text"); d.type = g; d.dataValue = e; delete d.preSniffing; delete d.startsWithEOL; delete d.endsWithEOL
                    }, null, null, 6); a.on("paste", function (b) { b = b.data; b.dataValue && (a.insertHtml(b.dataValue, b.type, b.range), setTimeout(function () { a.fire("afterPaste") }, 0)) }, null, null, 1E3); a.on("pasteDialog", function (b) { setTimeout(function () { a.openDialog("paste", b.data) }, 0) })
                }
            }); CKEDITOR.plugins.clipboard = {
                isCustomCopyCutSupported: (!CKEDITOR.env.ie || 16 <= CKEDITOR.env.version) && !CKEDITOR.env.iOS,
                isCustomDataTypesSupported: !CKEDITOR.env.ie || 16 <= CKEDITOR.env.version, isFileApiSupported: !CKEDITOR.env.ie || 9 < CKEDITOR.env.version, mainPasteEvent: CKEDITOR.env.ie && !CKEDITOR.env.edge ? "beforepaste" : "paste", addPasteButton: function (a, b, c) { a.ui.addButton && (a.ui.addButton(b, c), a._.pasteButtons || (a._.pasteButtons = []), a._.pasteButtons.push(b)) }, canClipboardApiBeTrusted: function (a, b) {
                    return a.getTransferType(b) != CKEDITOR.DATA_TRANSFER_EXTERNAL || CKEDITOR.env.chrome && !a.isEmpty() || CKEDITOR.env.gecko && (a.getData("text/html") ||
                        a.getFilesCount()) || CKEDITOR.env.safari && 603 <= CKEDITOR.env.version && !CKEDITOR.env.iOS || CKEDITOR.env.edge && 16 <= CKEDITOR.env.version ? !0 : !1
                }, getDropTarget: function (a) { var b = a.editable(); return CKEDITOR.env.ie && 9 > CKEDITOR.env.version || b.isInline() ? b : a.document }, fixSplitNodesAfterDrop: function (a, b, c, d) {
                    function g(a, c, d) {
                        var f = a; f.type == CKEDITOR.NODE_TEXT && (f = a.getParent()); if (f.equals(c) && d != c.getChildCount()) return a = b.startContainer.getChild(b.startOffset - 1), c = b.startContainer.getChild(b.startOffset),
                            a && a.type == CKEDITOR.NODE_TEXT && c && c.type == CKEDITOR.NODE_TEXT && (d = a.getLength(), a.setText(a.getText() + c.getText()), c.remove(), b.setStart(a, d), b.collapse(!0)), !0
                    } var e = b.startContainer; "number" == typeof d && "number" == typeof c && e.type == CKEDITOR.NODE_ELEMENT && (g(a.startContainer, e, c) || g(a.endContainer, e, d))
                }, isDropRangeAffectedByDragRange: function (a, b) {
                    var c = b.startContainer, d = b.endOffset; return a.endContainer.equals(c) && a.endOffset <= d || a.startContainer.getParent().equals(c) && a.startContainer.getIndex() <
                        d || a.endContainer.getParent().equals(c) && a.endContainer.getIndex() < d ? !0 : !1
                }, internalDrop: function (b, c, d, g) {
                    var e = CKEDITOR.plugins.clipboard, h = g.editable(), k, l; g.fire("saveSnapshot"); g.fire("lockSnapshot", { dontUpdate: 1 }); CKEDITOR.env.ie && 10 > CKEDITOR.env.version && this.fixSplitNodesAfterDrop(b, c, e.dragStartContainerChildCount, e.dragEndContainerChildCount); (l = this.isDropRangeAffectedByDragRange(b, c)) || (k = b.createBookmark(!1)); e = c.clone().createBookmark(!1); l && (k = b.createBookmark(!1)); b = k.startNode; c =
                        k.endNode; l = e.startNode; c && b.getPosition(l) & CKEDITOR.POSITION_PRECEDING && c.getPosition(l) & CKEDITOR.POSITION_FOLLOWING && l.insertBefore(b); b = g.createRange(); b.moveToBookmark(k); h.extractHtmlFromRange(b, 1); c = g.createRange(); c.moveToBookmark(e); a(g, { dataTransfer: d, method: "drop", range: c }, 1); g.fire("unlockSnapshot")
                }, getRangeAtDropPosition: function (a, b) {
                    var c = a.data.$, d = c.clientX, g = c.clientY, e = b.getSelection(!0).getRanges()[0], h = b.createRange(); if (a.data.testRange) return a.data.testRange; if (document.caretRangeFromPoint &&
                        b.document.$.caretRangeFromPoint(d, g)) c = b.document.$.caretRangeFromPoint(d, g), h.setStart(CKEDITOR.dom.node(c.startContainer), c.startOffset), h.collapse(!0); else if (c.rangeParent) h.setStart(CKEDITOR.dom.node(c.rangeParent), c.rangeOffset), h.collapse(!0); else {
                            if (CKEDITOR.env.ie && 8 < CKEDITOR.env.version && e && b.editable().hasFocus) return e; if (document.body.createTextRange) {
                                b.focus(); c = b.document.getBody().$.createTextRange(); try {
                                    for (var k = !1, l = 0; 20 > l && !k; l++) {
                                        if (!k) try { c.moveToPoint(d, g - l), k = !0 } catch (m) { } if (!k) try {
                                            c.moveToPoint(d,
                                                g + l), k = !0
                                        } catch (t) { }
                                    } if (k) { var x = "cke-temp-" + (new Date).getTime(); c.pasteHTML('\x3cspan id\x3d"' + x + '"\x3e​\x3c/span\x3e'); var C = b.document.getById(x); h.moveToPosition(C, CKEDITOR.POSITION_BEFORE_START); C.remove() } else {
                                        var z = b.document.$.elementFromPoint(d, g), A = new CKEDITOR.dom.element(z), G; if (A.equals(b.editable()) || "html" == A.getName()) return e && e.startContainer && !e.startContainer.equals(b.editable()) ? e : null; G = A.getClientRect(); d < G.left ? h.setStartAt(A, CKEDITOR.POSITION_AFTER_START) : h.setStartAt(A,
                                            CKEDITOR.POSITION_BEFORE_END); h.collapse(!0)
                                    }
                                } catch (F) { return null }
                            } else return null
                        } return h
                }, initDragDataTransfer: function (a, b) { var c = a.data.$ ? a.data.$.dataTransfer : null, d = new this.dataTransfer(c, b); "dragstart" === a.name && d.storeId(); c ? this.dragData && d.id == this.dragData.id ? d = this.dragData : this.dragData = d : this.dragData ? d = this.dragData : this.dragData = d; a.data.dataTransfer = d }, resetDragDataTransfer: function () { this.dragData = null }, initPasteDataTransfer: function (a, b) {
                    if (this.isCustomCopyCutSupported) {
                        if (a &&
                            a.data && a.data.$) { var c = a.data.$.clipboardData, d = new this.dataTransfer(c, b); "copy" !== a.name && "cut" !== a.name || d.storeId(); this.copyCutData && d.id == this.copyCutData.id ? (d = this.copyCutData, d.$ = c) : this.copyCutData = d; return d } return new this.dataTransfer(null, b)
                    } return new this.dataTransfer(CKEDITOR.env.edge && a && a.data.$ && a.data.$.clipboardData || null, b)
                }, preventDefaultDropOnElement: function (a) { a && a.on("dragover", g) }
            }; m = CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ? "cke/id" : "Text"; CKEDITOR.plugins.clipboard.dataTransfer =
                function (a, b) {
                    a && (this.$ = a); this._ = { metaRegExp: /^<meta.*?>/i, bodyRegExp: /<body(?:[\s\S]*?)>([\s\S]*)<\/body>/i, fragmentRegExp: /\x3c!--(?:Start|End)Fragment--\x3e/g, data: {}, files: [], nativeHtmlCache: "", normalizeType: function (a) { a = a.toLowerCase(); return "text" == a || "text/plain" == a ? "Text" : "url" == a ? "URL" : a } }; this._.fallbackDataTransfer = new CKEDITOR.plugins.clipboard.fallbackDataTransfer(this); this.id = this.getData(m); this.id || (this.id = "Text" == m ? "" : "cke-" + CKEDITOR.tools.getUniqueId()); b && (this.sourceEditor =
                        b, this.setData("text/html", b.getSelectedHtml(1)), "Text" == m || this.getData("text/plain") || this.setData("text/plain", b.getSelection().getSelectedText()))
                }; CKEDITOR.DATA_TRANSFER_INTERNAL = 1; CKEDITOR.DATA_TRANSFER_CROSS_EDITORS = 2; CKEDITOR.DATA_TRANSFER_EXTERNAL = 3; CKEDITOR.plugins.clipboard.dataTransfer.prototype = {
                    getData: function (a, b) {
                        a = this._.normalizeType(a); var c = "text/html" == a && b ? this._.nativeHtmlCache : this._.data[a]; if (void 0 === c || null === c || "" === c) {
                            if (this._.fallbackDataTransfer.isRequired()) c = this._.fallbackDataTransfer.getData(a,
                                b); else try { c = this.$.getData(a) || "" } catch (d) { c = "" } "text/html" != a || b || (c = this._stripHtml(c))
                        } "Text" == a && CKEDITOR.env.gecko && this.getFilesCount() && "file://" == c.substring(0, 7) && (c = ""); if ("string" === typeof c) var g = c.indexOf("\x3c/html\x3e"), c = -1 !== g ? c.substring(0, g + 7) : c; return c
                    }, setData: function (a, b) {
                        a = this._.normalizeType(a); "text/html" == a ? (this._.data[a] = this._stripHtml(b), this._.nativeHtmlCache = b) : this._.data[a] = b; if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported || "URL" == a || "Text" == a) if ("Text" ==
                            m && "Text" == a && (this.id = b), this._.fallbackDataTransfer.isRequired()) this._.fallbackDataTransfer.setData(a, b); else try { this.$.setData(a, b) } catch (c) { }
                    }, storeId: function () { "Text" !== m && this.setData(m, this.id) }, getTransferType: function (a) { return this.sourceEditor ? this.sourceEditor == a ? CKEDITOR.DATA_TRANSFER_INTERNAL : CKEDITOR.DATA_TRANSFER_CROSS_EDITORS : CKEDITOR.DATA_TRANSFER_EXTERNAL }, cacheData: function () {
                        function a(c) {
                            c = b._.normalizeType(c); var d = b.getData(c); "text/html" == c && (b._.nativeHtmlCache = b.getData(c,
                                !0), d = b._stripHtml(d)); d && (b._.data[c] = d)
                        } if (this.$) { var b = this, c, d; if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) { if (this.$.types) for (c = 0; c < this.$.types.length; c++)a(this.$.types[c]) } else a("Text"), a("URL"); d = this._getImageFromClipboard(); if (this.$ && this.$.files || d) { this._.files = []; if (this.$.files && this.$.files.length) for (c = 0; c < this.$.files.length; c++)this._.files.push(this.$.files[c]); 0 === this._.files.length && d && this._.files.push(d) } }
                    }, getFilesCount: function () {
                        return this._.files.length ?
                            this._.files.length : this.$ && this.$.files && this.$.files.length ? this.$.files.length : this._getImageFromClipboard() ? 1 : 0
                    }, getFile: function (a) { return this._.files.length ? this._.files[a] : this.$ && this.$.files && this.$.files.length ? this.$.files[a] : 0 === a ? this._getImageFromClipboard() : void 0 }, isEmpty: function () {
                        var a = {}, b; if (this.getFilesCount()) return !1; CKEDITOR.tools.array.forEach(CKEDITOR.tools.objectKeys(this._.data), function (b) { a[b] = 1 }); if (this.$) if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported) {
                            if (this.$.types) for (var c =
                                0; c < this.$.types.length; c++)a[this.$.types[c]] = 1
                        } else a.Text = 1, a.URL = 1; "Text" != m && (a[m] = 0); for (b in a) if (a[b] && "" !== this.getData(b)) return !1; return !0
                    }, _getImageFromClipboard: function () { var a; if (this.$ && this.$.items && this.$.items[0]) try { if ((a = this.$.items[0].getAsFile()) && a.type) return a } catch (b) { } }, _stripHtml: function (a) { if (a && a.length) { a = a.replace(this._.metaRegExp, ""); var b = this._.bodyRegExp.exec(a); b && b.length && (a = b[1], a = a.replace(this._.fragmentRegExp, "")) } return a }
                }; CKEDITOR.plugins.clipboard.fallbackDataTransfer =
                    function (a) { this._dataTransfer = a; this._customDataFallbackType = "text/html" }; CKEDITOR.plugins.clipboard.fallbackDataTransfer._isCustomMimeTypeSupported = null; CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes = []; CKEDITOR.plugins.clipboard.fallbackDataTransfer.prototype = {
                        isRequired: function () {
                            var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer, b = this._dataTransfer.$; if (null === a._isCustomMimeTypeSupported) if (b) {
                                a._isCustomMimeTypeSupported = !1; if (CKEDITOR.env.edge && 17 <= CKEDITOR.env.version) return !0;
                                try { b.setData("cke/mimetypetest", "cke test value"), a._isCustomMimeTypeSupported = "cke test value" === b.getData("cke/mimetypetest"), b.clearData("cke/mimetypetest") } catch (c) { }
                            } else return !1; return !a._isCustomMimeTypeSupported
                        }, getData: function (a, b) { var c = this._getData(this._customDataFallbackType, !0); if (b) return c; var c = this._extractDataComment(c), d = null, d = a === this._customDataFallbackType ? c.content : c.data && c.data[a] ? c.data[a] : this._getData(a, !0); return null !== d ? d : "" }, setData: function (a, b) {
                            var c = a === this._customDataFallbackType;
                            c && (b = this._applyDataComment(b, this._getFallbackTypeData())); var d = b, g = this._dataTransfer.$; try { g.setData(a, d), c && (this._dataTransfer._.nativeHtmlCache = d) } catch (e) {
                                if (this._isUnsupportedMimeTypeError(e)) {
                                    c = CKEDITOR.plugins.clipboard.fallbackDataTransfer; -1 === CKEDITOR.tools.indexOf(c._customTypes, a) && c._customTypes.push(a); var c = this._getFallbackTypeContent(), h = this._getFallbackTypeData(); h[a] = d; try {
                                        d = this._applyDataComment(c, h), g.setData(this._customDataFallbackType, d), this._dataTransfer._.nativeHtmlCache =
                                            d
                                    } catch (k) { d = "" }
                                }
                            } return d
                        }, _getData: function (a, b) { var c = this._dataTransfer._.data; if (!b && c[a]) return c[a]; try { return this._dataTransfer.$.getData(a) } catch (d) { return null } }, _getFallbackTypeContent: function () { var a = this._dataTransfer._.data[this._customDataFallbackType]; a || (a = this._extractDataComment(this._getData(this._customDataFallbackType, !0)).content); return a }, _getFallbackTypeData: function () {
                            var a = CKEDITOR.plugins.clipboard.fallbackDataTransfer._customTypes, b = this._extractDataComment(this._getData(this._customDataFallbackType,
                                !0)).data || {}, c = this._dataTransfer._.data; CKEDITOR.tools.array.forEach(a, function (a) { void 0 !== c[a] ? b[a] = c[a] : void 0 !== b[a] && (b[a] = b[a]) }, this); return b
                        }, _isUnsupportedMimeTypeError: function (a) { return a.message && -1 !== a.message.search(/element not found/gi) }, _extractDataComment: function (a) { var b = { data: null, content: a || "" }; if (a && 16 < a.length) { var c; (c = /\x3c!--cke-data:(.*?)--\x3e/g.exec(a)) && c[1] && (b.data = JSON.parse(decodeURIComponent(c[1])), b.content = a.replace(c[0], "")) } return b }, _applyDataComment: function (a,
                            b) { var c = ""; b && CKEDITOR.tools.objectKeys(b).length && (c = "\x3c!--cke-data:" + encodeURIComponent(JSON.stringify(b)) + "--\x3e"); return c + (a && a.length ? a : "") }
                    }
        }(), CKEDITOR.config.clipboard_notificationDuration = 1E4, function () {
            CKEDITOR.plugins.add("panel", { beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_PANEL, CKEDITOR.ui.panel.handler) } }); CKEDITOR.UI_PANEL = "panel"; CKEDITOR.ui.panel = function (a, b) {
                b && CKEDITOR.tools.extend(this, b); CKEDITOR.tools.extend(this, { className: "", css: [] }); this.id = CKEDITOR.tools.getNextId();
                this.document = a; this.isFramed = this.forceIFrame || this.css.length; this._ = { blocks: {} }
            }; CKEDITOR.ui.panel.handler = { create: function (a) { return new CKEDITOR.ui.panel(a) } }; var a = CKEDITOR.addTemplate("panel", '\x3cdiv lang\x3d"{langCode}" id\x3d"{id}" dir\x3d{dir} class\x3d"cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style\x3d"z-index:{z-index}" role\x3d"presentation"\x3e{frame}\x3c/div\x3e'), e = CKEDITOR.addTemplate("panel-frame", '\x3ciframe id\x3d"{id}" class\x3d"cke_panel_frame" role\x3d"presentation" frameborder\x3d"0" src\x3d"{src}"\x3e\x3c/iframe\x3e'),
                b = CKEDITOR.addTemplate("panel-frame-inner", '\x3c!DOCTYPE html\x3e\x3chtml class\x3d"cke_panel_container {env}" dir\x3d"{dir}" lang\x3d"{langCode}"\x3e\x3chead\x3e{css}\x3c/head\x3e\x3cbody class\x3d"cke_{dir}" style\x3d"margin:0;padding:0" onload\x3d"{onload}"\x3e\x3c/body\x3e\x3c/html\x3e'); CKEDITOR.ui.panel.prototype = {
                    render: function (c, d) {
                        this.getHolderElement = function () {
                            var a = this._.holder; if (!a) {
                                if (this.isFramed) {
                                    var a = this.document.getById(this.id + "_frame"), c = a.getParent(), a = a.getFrameDocument();
                                    CKEDITOR.env.iOS && c.setStyles({ overflow: "scroll", "-webkit-overflow-scrolling": "touch" }); c = CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function () { this.isLoaded = !0; if (this.onLoad) this.onLoad() }, this)); a.write(b.output(CKEDITOR.tools.extend({ css: CKEDITOR.tools.buildStyleHtml(this.css), onload: "window.parent.CKEDITOR.tools.callFunction(" + c + ");" }, l))); a.getWindow().$.CKEDITOR = CKEDITOR; a.on("keydown", function (a) {
                                        var b = a.data.getKeystroke(), c = this.document.getById(this.id).getAttribute("dir"); this._.onKeyDown &&
                                            !1 === this._.onKeyDown(b) ? a.data.preventDefault() : (27 == b || b == ("rtl" == c ? 39 : 37)) && this.onEscape && !1 === this.onEscape(b) && a.data.preventDefault()
                                    }, this); a = a.getBody(); a.unselectable(); CKEDITOR.env.air && CKEDITOR.tools.callFunction(c)
                                } else a = this.document.getById(this.id); this._.holder = a
                            } return a
                        }; var l = { editorId: c.id, id: this.id, langCode: c.langCode, dir: c.lang.dir, cls: this.className, frame: "", env: CKEDITOR.env.cssClass, "z-index": c.config.baseFloatZIndex + 1 }; if (this.isFramed) {
                            var k = CKEDITOR.env.air ? "javascript:void(0)" :
                                CKEDITOR.env.ie ? "javascript:void(function(){" + encodeURIComponent("document.open();(" + CKEDITOR.tools.fixDomain + ")();document.close();") + "}())" : ""; l.frame = e.output({ id: this.id + "_frame", src: k })
                        } k = a.output(l); d && d.push(k); return k
                    }, addBlock: function (a, b) { b = this._.blocks[a] = b instanceof CKEDITOR.ui.panel.block ? b : new CKEDITOR.ui.panel.block(this.getHolderElement(), b); this._.currentBlock || this.showBlock(a); return b }, getBlock: function (a) { return this._.blocks[a] }, showBlock: function (a) {
                        a = this._.blocks[a]; var b =
                            this._.currentBlock, e = !this.forceIFrame || CKEDITOR.env.ie ? this._.holder : this.document.getById(this.id + "_frame"); b && b.hide(); this._.currentBlock = a; CKEDITOR.fire("ariaWidget", e); a._.focusIndex = -1; this._.onKeyDown = a.onKeyDown && CKEDITOR.tools.bind(a.onKeyDown, a); a.show(); return a
                    }, destroy: function () { this.element && this.element.remove() }
                }; CKEDITOR.ui.panel.block = CKEDITOR.tools.createClass({
                    $: function (a, b) {
                        this.element = a.append(a.getDocument().createElement("div", {
                            attributes: { tabindex: -1, "class": "cke_panel_block" },
                            styles: { display: "none" }
                        })); b && CKEDITOR.tools.extend(this, b); this.element.setAttributes({ role: this.attributes.role || "presentation", "aria-label": this.attributes["aria-label"], title: this.attributes.title || this.attributes["aria-label"] }); this.keys = {}; this._.focusIndex = -1; this.element.disableContextMenu()
                    }, _: {
                        markItem: function (a) { -1 != a && (a = this.element.getElementsByTag("a").getItem(this._.focusIndex = a), CKEDITOR.env.webkit && a.getDocument().getWindow().focus(), a.focus(), this.onMark && this.onMark(a)) }, markFirstDisplayed: function (a) {
                            for (var b =
                                function (a) { return a.type == CKEDITOR.NODE_ELEMENT && "none" == a.getStyle("display") }, e = this._.getItems(), k, g, h = e.count() - 1; 0 <= h; h--)if (k = e.getItem(h), k.getAscendant(b) || (g = k, this._.focusIndex = h), "true" == k.getAttribute("aria-selected")) { g = k; this._.focusIndex = h; break } g && (a && a(), CKEDITOR.env.webkit && g.getDocument().getWindow().focus(), g.focus(), this.onMark && this.onMark(g))
                        }, getItems: function () { return this.element.getElementsByTag("a") }
                    }, proto: {
                        show: function () { this.element.setStyle("display", "") }, hide: function () {
                            this.onHide &&
                            !0 === this.onHide.call(this) || this.element.setStyle("display", "none")
                        }, onKeyDown: function (a, b) {
                            var e = this.keys[a]; switch (e) {
                                case "next": for (var k = this._.focusIndex, e = this.element.getElementsByTag("a"), g; g = e.getItem(++k);)if (g.getAttribute("_cke_focus") && g.$.offsetWidth) { this._.focusIndex = k; g.focus(); break } return g || b ? !1 : (this._.focusIndex = -1, this.onKeyDown(a, 1)); case "prev": k = this._.focusIndex; for (e = this.element.getElementsByTag("a"); 0 < k && (g = e.getItem(--k));) {
                                    if (g.getAttribute("_cke_focus") && g.$.offsetWidth) {
                                        this._.focusIndex =
                                        k; g.focus(); break
                                    } g = null
                                } return g || b ? !1 : (this._.focusIndex = e.count(), this.onKeyDown(a, 1)); case "click": case "mouseup": return k = this._.focusIndex, (g = 0 <= k && this.element.getElementsByTag("a").getItem(k)) && (g.$[e] ? g.$[e]() : g.$["on" + e]()), !1
                            }return !0
                        }
                    }
                })
        }(), CKEDITOR.plugins.add("floatpanel", { requires: "panel" }), function () {
            function a(a, c, d, l, k) {
                k = CKEDITOR.tools.genKey(c.getUniqueId(), d.getUniqueId(), a.lang.dir, a.uiColor || "", l.css || "", k || ""); var g = e[k]; g || (g = e[k] = new CKEDITOR.ui.panel(c, l), g.element = d.append(CKEDITOR.dom.element.createFromHtml(g.render(a),
                    c)), g.element.setStyles({ display: "none", position: "absolute" })); return g
            } var e = {}; CKEDITOR.ui.floatPanel = CKEDITOR.tools.createClass({
                $: function (b, c, d, e) {
                    function k() { f.hide() } d.forceIFrame = 1; d.toolbarRelated && b.elementMode == CKEDITOR.ELEMENT_MODE_INLINE && (c = CKEDITOR.document.getById("cke_" + b.name)); var g = c.getDocument(); e = a(b, g, c, d, e || 0); var h = e.element, m = h.getFirst(), f = this; h.disableContextMenu(); this.element = h; this._ = {
                        editor: b, panel: e, parentElement: c, definition: d, document: g, iframe: m, children: [], dir: b.lang.dir,
                        showBlockParams: null
                    }; b.on("mode", k); b.on("resize", k); g.getWindow().on("resize", function () { this.reposition() }, this)
                }, proto: {
                    addBlock: function (a, c) { return this._.panel.addBlock(a, c) }, addListBlock: function (a, c) { return this._.panel.addListBlock(a, c) }, getBlock: function (a) { return this._.panel.getBlock(a) }, showBlock: function (a, c, d, e, k, g) {
                        var h = this._.panel, m = h.showBlock(a); this._.showBlockParams = [].slice.call(arguments); this.allowBlur(!1); var f = this._.editor.editable(); this._.returnFocus = f.hasFocus ? f : new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);
                        this._.hideTimeout = 0; var n = this.element, f = this._.iframe, f = CKEDITOR.env.ie && !CKEDITOR.env.edge ? f : new CKEDITOR.dom.window(f.$.contentWindow), r = n.getDocument(), u = this._.parentElement.getPositionedAncestor(), v = c.getDocumentPosition(r), r = u ? u.getDocumentPosition(r) : { x: 0, y: 0 }, y = "rtl" == this._.dir, p = v.x + (e || 0) - r.x, w = v.y + (k || 0) - r.y; !y || 1 != d && 4 != d ? y || 2 != d && 3 != d || (p += c.$.offsetWidth - 1) : p += c.$.offsetWidth; if (3 == d || 4 == d) w += c.$.offsetHeight - 1; this._.panel._.offsetParentId = c.getId(); n.setStyles({
                            top: w + "px", left: 0,
                            display: ""
                        }); n.setOpacity(0); n.getFirst().removeStyle("width"); this._.editor.focusManager.add(f); this._.blurSet || (CKEDITOR.event.useCapture = !0, f.on("blur", function (a) { function b() { delete this._.returnFocus; this.hide() } this.allowBlur() && a.data.getPhase() == CKEDITOR.EVENT_PHASE_AT_TARGET && this.visible && !this._.activeChild && (CKEDITOR.env.iOS ? this._.hideTimeout || (this._.hideTimeout = CKEDITOR.tools.setTimeout(b, 0, this)) : b.call(this)) }, this), f.on("focus", function () { this._.focused = !0; this.hideChild(); this.allowBlur(!0) },
                            this), CKEDITOR.env.iOS && (f.on("touchstart", function () { clearTimeout(this._.hideTimeout) }, this), f.on("touchend", function () { this._.hideTimeout = 0; this.focus() }, this)), CKEDITOR.event.useCapture = !1, this._.blurSet = 1); h.onEscape = CKEDITOR.tools.bind(function (a) { if (this.onEscape && !1 === this.onEscape(a)) return !1 }, this); CKEDITOR.tools.setTimeout(function () {
                                var a = CKEDITOR.tools.bind(function () {
                                    var a = n; a.removeStyle("width"); if (m.autoSize) {
                                        var b = m.element.getDocument(), b = (CKEDITOR.env.webkit || CKEDITOR.env.edge ?
                                            m.element : b.getBody()).$.scrollWidth; CKEDITOR.env.ie && CKEDITOR.env.quirks && 0 < b && (b += (a.$.offsetWidth || 0) - (a.$.clientWidth || 0) + 3); a.setStyle("width", b + 10 + "px"); b = m.element.$.scrollHeight; CKEDITOR.env.ie && CKEDITOR.env.quirks && 0 < b && (b += (a.$.offsetHeight || 0) - (a.$.clientHeight || 0) + 3); a.setStyle("height", b + "px"); h._.currentBlock.element.setStyle("display", "none").removeStyle("display")
                                    } else a.removeStyle("height"); y && (p -= n.$.offsetWidth); n.setStyle("left", p + "px"); var b = h.element.getWindow(), a = n.$.getBoundingClientRect(),
                                        b = b.getViewPaneSize(), c = a.width || a.right - a.left, d = a.height || a.bottom - a.top, f = y ? a.right : b.width - a.left, e = y ? b.width - a.right : a.left; y ? f < c && (p = e > c ? p + c : b.width > c ? p - a.left : p - a.right + b.width) : f < c && (p = e > c ? p - c : b.width > c ? p - a.right + b.width : p - a.left); c = a.top; b.height - a.top < d && (w = c > d ? w - d : b.height > d ? w - a.bottom + b.height : w - a.top); CKEDITOR.env.ie && (b = a = new CKEDITOR.dom.element(n.$.offsetParent), "html" == b.getName() && (b = b.getDocument().getBody()), "rtl" == b.getComputedStyle("direction") && (p = CKEDITOR.env.ie8Compat ? p - 2 *
                                            n.getDocument().getDocumentElement().$.scrollLeft : p - (a.$.scrollWidth - a.$.clientWidth))); var a = n.getFirst(), k; (k = a.getCustomData("activePanel")) && k.onHide && k.onHide.call(this, 1); a.setCustomData("activePanel", this); n.setStyles({ top: w + "px", left: p + "px" }); n.setOpacity(1); g && g()
                                }, this); h.isLoaded ? a() : h.onLoad = a; CKEDITOR.tools.setTimeout(function () {
                                    var a = CKEDITOR.env.webkit && CKEDITOR.document.getWindow().getScrollPosition().y; this.focus(); m.element.focus(); CKEDITOR.env.webkit && (CKEDITOR.document.getBody().$.scrollTop =
                                        a); this.allowBlur(!0); CKEDITOR.env.ie ? CKEDITOR.tools.setTimeout(function () { m.markFirstDisplayed ? m.markFirstDisplayed() : m._.markFirstDisplayed() }, 0) : m.markFirstDisplayed ? m.markFirstDisplayed() : m._.markFirstDisplayed(); this._.editor.fire("panelShow", this)
                                }, 0, this)
                            }, CKEDITOR.env.air ? 200 : 0, this); this.visible = 1; this.onShow && this.onShow.call(this)
                    }, reposition: function () { var a = this._.showBlockParams; this.visible && this._.showBlockParams && (this.hide(), this.showBlock.apply(this, a)) }, focus: function () {
                        if (CKEDITOR.env.webkit) {
                            var a =
                                CKEDITOR.document.getActive(); a && !a.equals(this._.iframe) && a.$.blur()
                        } (this._.lastFocused || this._.iframe.getFrameDocument().getWindow()).focus()
                    }, blur: function () { var a = this._.iframe.getFrameDocument().getActive(); a && a.is("a") && (this._.lastFocused = a) }, hide: function (a) {
                        if (this.visible && (!this.onHide || !0 !== this.onHide.call(this))) {
                            this.hideChild(); CKEDITOR.env.gecko && this._.iframe.getFrameDocument().$.activeElement.blur(); this.element.setStyle("display", "none"); this.visible = 0; this.element.getFirst().removeCustomData("activePanel");
                            if (a = a && this._.returnFocus) CKEDITOR.env.webkit && a.type && a.getWindow().$.focus(), a.focus(); delete this._.lastFocused; this._.showBlockParams = null; this._.editor.fire("panelHide", this)
                        }
                    }, allowBlur: function (a) { var c = this._.panel; void 0 !== a && (c.allowBlur = a); return c.allowBlur }, showAsChild: function (a, c, d, e, k, g) {
                        if (this._.activeChild != a || a._.panel._.offsetParentId != d.getId()) this.hideChild(), a.onHide = CKEDITOR.tools.bind(function () { CKEDITOR.tools.setTimeout(function () { this._.focused || this.hide() }, 0, this) },
                            this), this._.activeChild = a, this._.focused = !1, a.showBlock(c, d, e, k, g), this.blur(), (CKEDITOR.env.ie7Compat || CKEDITOR.env.ie6Compat) && setTimeout(function () { a.element.getChild(0).$.style.cssText += "" }, 100)
                    }, hideChild: function (a) { var c = this._.activeChild; c && (delete c.onHide, delete this._.activeChild, c.hide(), a && this.focus()) }
                }
            }); CKEDITOR.on("instanceDestroyed", function () { var a = CKEDITOR.tools.isEmpty(CKEDITOR.instances), c; for (c in e) { var d = e[c]; a ? d.destroy() : d.element.hide() } a && (e = {}) })
        }(), CKEDITOR.plugins.add("menu",
            { requires: "floatpanel", beforeInit: function (a) { for (var e = a.config.menu_groups.split(","), b = a._.menuGroups = {}, c = a._.menuItems = {}, d = 0; d < e.length; d++)b[e[d]] = d + 1; a.addMenuGroup = function (a, c) { b[a] = c || 100 }; a.addMenuItem = function (a, d) { b[d.group] && (c[a] = new CKEDITOR.menuItem(this, a, d)) }; a.addMenuItems = function (a) { for (var b in a) this.addMenuItem(b, a[b]) }; a.getMenuItem = function (a) { return c[a] }; a.removeMenuItem = function (a) { delete c[a] } } }), function () {
                function a(a) {
                    a.sort(function (a, b) {
                        return a.group < b.group ?
                            -1 : a.group > b.group ? 1 : a.order < b.order ? -1 : a.order > b.order ? 1 : 0
                    })
                } var e = '\x3cspan class\x3d"cke_menuitem"\x3e\x3ca id\x3d"{id}" class\x3d"cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href\x3d"{href}" title\x3d"{title}" tabindex\x3d"-1" _cke_focus\x3d1 hidefocus\x3d"true" role\x3d"{role}" aria-label\x3d"{label}" aria-describedby\x3d"{id}_description" aria-haspopup\x3d"{hasPopup}" aria-disabled\x3d"{disabled}" {ariaChecked} draggable\x3d"false"'; CKEDITOR.env.gecko && CKEDITOR.env.mac &&
                    (e += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (e += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;" ondragstart\x3d"return false;"'); var e = e + (' onmouseover\x3d"CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout\x3d"CKEDITOR.tools.callFunction({moveOutFn},{index});" ' + (CKEDITOR.env.ie ? 'onclick\x3d"return false;" onmouseup' : "onclick") + '\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;"\x3e'), b = CKEDITOR.addTemplate("menuItem", e + '\x3cspan class\x3d"cke_menubutton_inner"\x3e\x3cspan class\x3d"cke_menubutton_icon"\x3e\x3cspan class\x3d"cke_button_icon cke_button__{iconName}_icon" style\x3d"{iconStyle}"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"cke_menubutton_label"\x3e{label}\x3c/span\x3e{shortcutHtml}{arrowHtml}\x3c/span\x3e\x3c/a\x3e\x3cspan id\x3d"{id}_description" class\x3d"cke_voice_label" aria-hidden\x3d"false"\x3e{ariaShortcut}\x3c/span\x3e\x3c/span\x3e'),
                        c = CKEDITOR.addTemplate("menuArrow", '\x3cspan class\x3d"cke_menuarrow"\x3e\x3cspan\x3e{label}\x3c/span\x3e\x3c/span\x3e'), d = CKEDITOR.addTemplate("menuShortcut", '\x3cspan class\x3d"cke_menubutton_label cke_menubutton_shortcut"\x3e{shortcut}\x3c/span\x3e'); CKEDITOR.menu = CKEDITOR.tools.createClass({
                            $: function (a, b) {
                                b = this._.definition = b || {}; this.id = CKEDITOR.tools.getNextId(); this.editor = a; this.items = []; this._.listeners = []; this._.level = b.level || 1; var c = CKEDITOR.tools.extend({}, b.panel, {
                                    css: [CKEDITOR.skin.getPath("editor")],
                                    level: this._.level - 1, block: {}
                                }), d = c.block.attributes = c.attributes || {}; !d.role && (d.role = "menu"); this._.panelDefinition = c
                            }, _: {
                                onShow: function () { var a = this.editor.getSelection(), b = a && a.getStartElement(), c = this.editor.elementPath(), d = this._.listeners; this.removeAll(); for (var e = 0; e < d.length; e++) { var f = d[e](b, a, c); if (f) for (var n in f) { var r = this.editor.getMenuItem(n); !r || r.command && !this.editor.getCommand(r.command).state || (r.state = f[n], this.add(r)) } } }, onClick: function (a) {
                                    this.hide(); if (a.onClick) a.onClick();
                                    else a.command && this.editor.execCommand(a.command)
                                }, onEscape: function (a) { var b = this.parent; b ? b._.panel.hideChild(1) : 27 == a && this.hide(1); return !1 }, onHide: function () { this.onHide && this.onHide() }, showSubMenu: function (a) {
                                    var b = this._.subMenu, c = this.items[a]; if (c = c.getItems && c.getItems()) {
                                        b ? b.removeAll() : (b = this._.subMenu = new CKEDITOR.menu(this.editor, CKEDITOR.tools.extend({}, this._.definition, { level: this._.level + 1 }, !0)), b.parent = this, b._.onClick = CKEDITOR.tools.bind(this._.onClick, this)); for (var d in c) {
                                            var e =
                                                this.editor.getMenuItem(d); e && (e.state = c[d], b.add(e))
                                        } var f = this._.panel.getBlock(this.id).element.getDocument().getById(this.id + String(a)); setTimeout(function () { b.show(f, 2) }, 0)
                                    } else this._.panel.hideChild(1)
                                }
                            }, proto: {
                                add: function (a) { a.order || (a.order = this.items.length); this.items.push(a) }, removeAll: function () { this.items = [] }, show: function (b, c, d, e) {
                                    if (!this.parent && (this._.onShow(), !this.items.length)) return; c = c || ("rtl" == this.editor.lang.dir ? 2 : 1); var m = this.items, f = this.editor, n = this._.panel, r = this._.element;
                                    if (!n) {
                                        n = this._.panel = new CKEDITOR.ui.floatPanel(this.editor, CKEDITOR.document.getBody(), this._.panelDefinition, this._.level); n.onEscape = CKEDITOR.tools.bind(function (a) { if (!1 === this._.onEscape(a)) return !1 }, this); n.onShow = function () { n._.panel.getHolderElement().getParent().addClass("cke").addClass("cke_reset_all") }; n.onHide = CKEDITOR.tools.bind(function () { this._.onHide && this._.onHide() }, this); r = n.addBlock(this.id, this._.panelDefinition.block); r.autoSize = !0; var u = r.keys; u[40] = "next"; u[9] = "next"; u[38] =
                                            "prev"; u[CKEDITOR.SHIFT + 9] = "prev"; u["rtl" == f.lang.dir ? 37 : 39] = CKEDITOR.env.ie ? "mouseup" : "click"; u[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (u[13] = "mouseup"); r = this._.element = r.element; u = r.getDocument(); u.getBody().setStyle("overflow", "hidden"); u.getElementsByTag("html").getItem(0).setStyle("overflow", "hidden"); this._.itemOverFn = CKEDITOR.tools.addFunction(function (a) {
                                                clearTimeout(this._.showSubTimeout); this._.showSubTimeout = CKEDITOR.tools.setTimeout(this._.showSubMenu, f.config.menu_subMenuDelay ||
                                                    400, this, [a])
                                            }, this); this._.itemOutFn = CKEDITOR.tools.addFunction(function () { clearTimeout(this._.showSubTimeout) }, this); this._.itemClickFn = CKEDITOR.tools.addFunction(function (a) { var b = this.items[a]; if (b.state == CKEDITOR.TRISTATE_DISABLED) this.hide(1); else if (b.getItems) this._.showSubMenu(a); else this._.onClick(b) }, this)
                                    } a(m); for (var u = f.elementPath(), u = ['\x3cdiv class\x3d"cke_menu' + (u && u.direction() != f.lang.dir ? " cke_mixed_dir_content" : "") + '" role\x3d"presentation"\x3e'], v = m.length, y = v && m[0].group,
                                        p = 0; p < v; p++) { var w = m[p]; y != w.group && (u.push('\x3cdiv class\x3d"cke_menuseparator" role\x3d"separator"\x3e\x3c/div\x3e'), y = w.group); w.render(this, p, u) } u.push("\x3c/div\x3e"); r.setHtml(u.join("")); CKEDITOR.ui.fire("ready", this); this.parent ? this.parent._.panel.showAsChild(n, this.id, b, c, d, e) : n.showBlock(this.id, b, c, d, e); f.fire("menuShow", [n])
                                }, addListener: function (a) { this._.listeners.push(a) }, hide: function (a) { this._.onHide && this._.onHide(); this._.panel && this._.panel.hide(a) }, findItemByCommandName: function (a) {
                                    var b =
                                        CKEDITOR.tools.array.filter(this.items, function (b) { return a === b.command }); return b.length ? (b = b[0], { item: b, element: this._.element.findOne("." + b.className) }) : null
                                }
                            }
                        }); CKEDITOR.menuItem = CKEDITOR.tools.createClass({
                            $: function (a, b, c) { CKEDITOR.tools.extend(this, c, { order: 0, className: "cke_menubutton__" + b }); this.group = a._.menuGroups[this.group]; this.editor = a; this.name = b }, proto: {
                                render: function (a, e, g) {
                                    var h = a.id + String(e), m = "undefined" == typeof this.state ? CKEDITOR.TRISTATE_OFF : this.state, f = "", n = this.editor,
                                    r, u, v = m == CKEDITOR.TRISTATE_ON ? "on" : m == CKEDITOR.TRISTATE_DISABLED ? "disabled" : "off"; this.role in { menuitemcheckbox: 1, menuitemradio: 1 } && (f = ' aria-checked\x3d"' + (m == CKEDITOR.TRISTATE_ON ? "true" : "false") + '"'); var y = this.getItems, p = "\x26#" + ("rtl" == this.editor.lang.dir ? "9668" : "9658") + ";", w = this.name; this.icon && !/\./.test(this.icon) && (w = this.icon); this.command && (r = n.getCommand(this.command), (r = n.getCommandKeystroke(r)) && (u = CKEDITOR.tools.keystrokeToString(n.lang.common.keyboard, r))); a = {
                                        id: h, name: this.name,
                                        iconName: w, label: this.label, cls: this.className || "", state: v, hasPopup: y ? "true" : "false", disabled: m == CKEDITOR.TRISTATE_DISABLED, title: this.label + (u ? " (" + u.display + ")" : ""), ariaShortcut: u ? n.lang.common.keyboardShortcut + " " + u.aria : "", href: "javascript:void('" + (this.label || "").replace("'") + "')", hoverFn: a._.itemOverFn, moveOutFn: a._.itemOutFn, clickFn: a._.itemClickFn, index: e, iconStyle: CKEDITOR.skin.getIconStyle(w, "rtl" == this.editor.lang.dir, w == this.icon ? null : this.icon, this.iconOffset), shortcutHtml: u ? d.output({ shortcut: u.display }) :
                                            "", arrowHtml: y ? c.output({ label: p }) : "", role: this.role ? this.role : "menuitem", ariaChecked: f
                                    }; b.output(a, g)
                                }
                            }
                        })
            }(), CKEDITOR.config.menu_groups = "clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div", CKEDITOR.plugins.add("contextmenu", {
                requires: "menu", onLoad: function () {
                    CKEDITOR.plugins.contextMenu = CKEDITOR.tools.createClass({
                        base: CKEDITOR.menu, $: function (a) {
                            this.base.call(this, a, {
                                panel: {
                                    className: "cke_menu_panel",
                                    attributes: { "aria-label": a.lang.contextmenu.options }
                                }
                            })
                        }, proto: {
                            addTarget: function (a, e) {
                                a.on("contextmenu", function (a) {
                                    a = a.data; var c = CKEDITOR.env.webkit ? b : CKEDITOR.env.mac ? a.$.metaKey : a.$.ctrlKey; if (!e || !c) {
                                        a.preventDefault(); if (CKEDITOR.env.mac && CKEDITOR.env.webkit) { var c = this.editor, k = (new CKEDITOR.dom.elementPath(a.getTarget(), c.editable())).contains(function (a) { return a.hasAttribute("contenteditable") }, !0); k && "false" == k.getAttribute("contenteditable") && c.getSelection().fake(k) } var k = a.getTarget().getDocument(),
                                            g = a.getTarget().getDocument().getDocumentElement(), c = !k.equals(CKEDITOR.document), k = k.getWindow().getScrollPosition(), h = c ? a.$.clientX : a.$.pageX || k.x + a.$.clientX, m = c ? a.$.clientY : a.$.pageY || k.y + a.$.clientY; CKEDITOR.tools.setTimeout(function () { this.open(g, null, h, m) }, CKEDITOR.env.ie ? 200 : 0, this)
                                    }
                                }, this); if (CKEDITOR.env.webkit) { var b, c = function () { b = 0 }; a.on("keydown", function (a) { b = CKEDITOR.env.mac ? a.data.$.metaKey : a.data.$.ctrlKey }); a.on("keyup", c); a.on("contextmenu", c) }
                            }, open: function (a, e, b, c) {
                                !1 !== this.editor.config.enableContextMenu &&
                                (this.editor.focus(), a = a || CKEDITOR.document.getDocumentElement(), this.editor.selectionChange(1), this.show(a, e, b, c))
                            }
                        }
                    })
                }, beforeInit: function (a) { var e = a.contextMenu = new CKEDITOR.plugins.contextMenu(a); a.on("contentDom", function () { e.addTarget(a.editable(), !1 !== a.config.browserContextMenuOnCtrl) }); a.addCommand("contextMenu", { exec: function () { a.contextMenu.open(a.document.getBody()) } }); a.setKeystroke(CKEDITOR.SHIFT + 121, "contextMenu"); a.setKeystroke(CKEDITOR.CTRL + CKEDITOR.SHIFT + 121, "contextMenu") }
            }), function () {
                function a(a,
                    b) {
                        function k(b) { b = f.list[b]; var c; b.equals(a.editable()) || "true" == b.getAttribute("contenteditable") ? (c = a.createRange(), c.selectNodeContents(b), c = c.select()) : (c = a.getSelection(), c.selectElement(b)); CKEDITOR.env.ie && a.fire("selectionChange", { selection: c, path: new CKEDITOR.dom.elementPath(b) }); a.focus() } function g() { m && m.setHtml('\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e'); delete f.list } var h = a.ui.spaceId("path"), m, f = a._.elementsPath, n = f.idBase; b.html += '\x3cspan id\x3d"' + h + '_label" class\x3d"cke_voice_label"\x3e' +
                            a.lang.elementspath.eleLabel + '\x3c/span\x3e\x3cspan id\x3d"' + h + '" class\x3d"cke_path" role\x3d"group" aria-labelledby\x3d"' + h + '_label"\x3e\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e\x3c/span\x3e'; a.on("uiReady", function () { var b = a.ui.space("path"); b && a.focusManager.add(b, 1) }); f.onClick = k; var r = CKEDITOR.tools.addFunction(k), u = CKEDITOR.tools.addFunction(function (b, c) {
                                var g = f.idBase, e; c = new CKEDITOR.dom.event(c); e = "rtl" == a.lang.dir; switch (c.getKeystroke()) {
                                    case e ? 39 : 37: case 9: return (e =
                                        CKEDITOR.document.getById(g + (b + 1))) || (e = CKEDITOR.document.getById(g + "0")), e.focus(), !1; case e ? 37 : 39: case CKEDITOR.SHIFT + 9: return (e = CKEDITOR.document.getById(g + (b - 1))) || (e = CKEDITOR.document.getById(g + (f.list.length - 1))), e.focus(), !1; case 27: return a.focus(), !1; case 13: case 32: return k(b), !1
                                }return !0
                            }); a.on("selectionChange", function (b) {
                                for (var g = [], e = f.list = [], k = [], l = f.filters, B = !0, t = b.data.path.elements, x = t.length; x--;) {
                                    var C = t[x], z = 0; b = C.data("cke-display-name") ? C.data("cke-display-name") : C.data("cke-real-element-type") ?
                                        C.data("cke-real-element-type") : C.getName(); (B = C.hasAttribute("contenteditable") ? "true" == C.getAttribute("contenteditable") : B) || C.hasAttribute("contenteditable") || (z = 1); for (var A = 0; A < l.length; A++) { var G = l[A](C, b); if (!1 === G) { z = 1; break } b = G || b } z || (e.unshift(C), k.unshift(b))
                                } e = e.length; for (l = 0; l < e; l++)b = k[l], B = a.lang.elementspath.eleTitle.replace(/%1/, b), b = c.output({ id: n + l, label: B, text: b, jsTitle: "javascript:void('" + b + "')", index: l, keyDownFn: u, clickFn: r }), g.unshift(b); m || (m = CKEDITOR.document.getById(h));
                                k = m; k.setHtml(g.join("") + '\x3cspan class\x3d"cke_path_empty"\x3e\x26nbsp;\x3c/span\x3e'); a.fire("elementsPathUpdate", { space: k })
                            }); a.on("readOnly", g); a.on("contentDomUnload", g); a.addCommand("elementsPathFocus", e.toolbarFocus); a.setKeystroke(CKEDITOR.ALT + 122, "elementsPathFocus")
                } var e = { toolbarFocus: { editorFocus: !1, readOnly: 1, exec: function (a) { (a = CKEDITOR.document.getById(a._.elementsPath.idBase + "0")) && a.focus(CKEDITOR.env.ie || CKEDITOR.env.air) } } }, b = ""; CKEDITOR.env.gecko && CKEDITOR.env.mac && (b += ' onkeypress\x3d"return false;"');
                CKEDITOR.env.gecko && (b += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var c = CKEDITOR.addTemplate("pathItem", '\x3ca id\x3d"{id}" href\x3d"{jsTitle}" tabindex\x3d"-1" class\x3d"cke_path_item" title\x3d"{label}"' + b + ' hidefocus\x3d"true"  onkeydown\x3d"return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick\x3d"CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role\x3d"button" aria-label\x3d"{label}"\x3e{text}\x3c/a\x3e'); CKEDITOR.plugins.add("elementspath",
                    { init: function (b) { b._.elementsPath = { idBase: "cke_elementspath_" + CKEDITOR.tools.getNextNumber() + "_", filters: [] }; b.on("uiSpace", function (c) { "bottom" == c.data.space && a(b, c.data) }) } })
            }(), function () {
                function a(a, d) {
                    var l, k; d.on("refresh", function (a) { var c = [e], d; for (d in a.data.states) c.push(a.data.states[d]); this.setState(CKEDITOR.tools.search(c, b) ? b : e) }, d, null, 100); d.on("exec", function (b) { l = a.getSelection(); k = l.createBookmarks(1); b.data || (b.data = {}); b.data.done = !1 }, d, null, 0); d.on("exec", function () {
                        a.forceNextSelectionCheck();
                        l.selectBookmarks(k)
                    }, d, null, 100)
                } var e = CKEDITOR.TRISTATE_DISABLED, b = CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indent", {
                    init: function (b) {
                        var d = CKEDITOR.plugins.indent.genericDefinition; a(b, b.addCommand("indent", new d(!0))); a(b, b.addCommand("outdent", new d)); b.ui.addButton && (b.ui.addButton("Indent", { label: b.lang.indent.indent, command: "indent", directional: !0, toolbar: "indent,20" }), b.ui.addButton("Outdent", { label: b.lang.indent.outdent, command: "outdent", directional: !0, toolbar: "indent,10" })); b.on("dirChanged",
                            function (a) {
                                var d = b.createRange(), g = a.data.node; d.setStartBefore(g); d.setEndAfter(g); for (var e = new CKEDITOR.dom.walker(d), m; m = e.next();)if (m.type == CKEDITOR.NODE_ELEMENT) if (!m.equals(g) && m.getDirection()) d.setStartAfter(m), e = new CKEDITOR.dom.walker(d); else {
                                    var f = b.config.indentClasses; if (f) for (var n = "ltr" == a.data.dir ? ["_rtl", ""] : ["", "_rtl"], r = 0; r < f.length; r++)m.hasClass(f[r] + n[0]) && (m.removeClass(f[r] + n[0]), m.addClass(f[r] + n[1])); f = m.getStyle("margin-right"); n = m.getStyle("margin-left"); f ? m.setStyle("margin-left",
                                        f) : m.removeStyle("margin-left"); n ? m.setStyle("margin-right", n) : m.removeStyle("margin-right")
                                }
                            })
                    }
                }); CKEDITOR.plugins.indent = {
                    genericDefinition: function (a) { this.isIndent = !!a; this.startDisabled = !this.isIndent }, specificDefinition: function (a, b, e) { this.name = b; this.editor = a; this.jobs = {}; this.enterBr = a.config.enterMode == CKEDITOR.ENTER_BR; this.isIndent = !!e; this.relatedGlobal = e ? "indent" : "outdent"; this.indentKey = e ? 9 : CKEDITOR.SHIFT + 9; this.database = {} }, registerCommands: function (a, b) {
                        a.on("pluginsLoaded", function () {
                            for (var a in b) (function (a,
                                b) { var c = a.getCommand(b.relatedGlobal), d; for (d in b.jobs) c.on("exec", function (c) { c.data.done || (a.fire("lockSnapshot"), b.execJob(a, d) && (c.data.done = !0), a.fire("unlockSnapshot"), CKEDITOR.dom.element.clearAllMarkers(b.database)) }, this, null, d), c.on("refresh", function (c) { c.data.states || (c.data.states = {}); c.data.states[b.name + "@" + d] = b.refreshJob(a, d, c.data.path) }, this, null, d); a.addFeature(b) })(this, b[a])
                        })
                    }
                }; CKEDITOR.plugins.indent.genericDefinition.prototype = { context: "p", exec: function () { } }; CKEDITOR.plugins.indent.specificDefinition.prototype =
                    { execJob: function (a, b) { var l = this.jobs[b]; if (l.state != e) return l.exec.call(this, a) }, refreshJob: function (a, b, l) { b = this.jobs[b]; a.activeFilter.checkFeature(this) ? b.state = b.refresh.call(this, a, l) : b.state = e; return b.state }, getContext: function (a) { return a.contains(this.context) } }
            }(), function () {
                function a(a) {
                    function c(e) {
                        for (var h = l.startContainer, q = l.endContainer; h && !h.getParent().equals(e);)h = h.getParent(); for (; q && !q.getParent().equals(e);)q = q.getParent(); if (!h || !q) return !1; for (var v = [], t = !1; !t;)h.equals(q) &&
                            (t = !0), v.push(h), h = h.getNext(); if (1 > v.length) return !1; h = e.getParents(!0); for (q = 0; q < h.length; q++)if (h[q].getName && k[h[q].getName()]) { e = h[q]; break } for (var h = d.isIndent ? 1 : -1, q = v[0], v = v[v.length - 1], t = CKEDITOR.plugins.list.listToArray(e, f), x = t[v.getCustomData("listarray_index")].indent, q = q.getCustomData("listarray_index"); q <= v.getCustomData("listarray_index"); q++)if (t[q].indent += h, 0 < h) {
                                for (var y = t[q].parent, z = q - 1; 0 <= z; z--)if (t[z].indent === h) { y = t[z].parent; break } t[q].parent = new CKEDITOR.dom.element(y.getName(),
                                    y.getDocument())
                            } for (q = v.getCustomData("listarray_index") + 1; q < t.length && t[q].indent > x; q++)t[q].indent += h; h = CKEDITOR.plugins.list.arrayToList(t, f, null, a.config.enterMode, e.getDirection()); if (!d.isIndent) { var A; if ((A = e.getParent()) && A.is("li")) for (var v = h.listNode.getChildren(), u = [], F, q = v.count() - 1; 0 <= q; q--)(F = v.getItem(q)) && F.is && F.is("li") && u.push(F) } h && h.listNode.replace(e); if (u && u.length) for (q = 0; q < u.length; q++) {
                                for (F = e = u[q]; (F = F.getNext()) && F.is && F.getName() in k;)CKEDITOR.env.needsNbspFiller && !e.getFirst(b) &&
                                    e.append(l.document.createText(" ")), e.append(F); e.insertAfter(A)
                            } h && a.fire("contentDomInvalidated"); return !0
                    } for (var d = this, f = this.database, k = this.context, l, u = a.getSelection(), u = (u && u.getRanges()).createIterator(); l = u.getNextRange();) {
                        for (var v = l.getCommonAncestor(); v && (v.type != CKEDITOR.NODE_ELEMENT || !k[v.getName()]);) { if (a.editable().equals(v)) { v = !1; break } v = v.getParent() } v || (v = l.startPath().contains(k)) && l.setEndAt(v, CKEDITOR.POSITION_BEFORE_END); if (!v) {
                            var y = l.getEnclosedNode(); y && y.type == CKEDITOR.NODE_ELEMENT &&
                                y.getName() in k && (l.setStartAt(y, CKEDITOR.POSITION_AFTER_START), l.setEndAt(y, CKEDITOR.POSITION_BEFORE_END), v = y)
                        } v && l.startContainer.type == CKEDITOR.NODE_ELEMENT && l.startContainer.getName() in k && (y = new CKEDITOR.dom.walker(l), y.evaluator = e, l.startContainer = y.next()); v && l.endContainer.type == CKEDITOR.NODE_ELEMENT && l.endContainer.getName() in k && (y = new CKEDITOR.dom.walker(l), y.evaluator = e, l.endContainer = y.previous()); if (v) return c(v)
                    } return 0
                } function e(a) { return a.type == CKEDITOR.NODE_ELEMENT && a.is("li") }
                function b(a) { return c(a) && d(a) } var c = CKEDITOR.dom.walker.whitespaces(!0), d = CKEDITOR.dom.walker.bookmark(!1, !0), l = CKEDITOR.TRISTATE_DISABLED, k = CKEDITOR.TRISTATE_OFF; CKEDITOR.plugins.add("indentlist", {
                    requires: "indent", init: function (b) {
                        function c(b) {
                            d.specificDefinition.apply(this, arguments); this.requiredContent = ["ul", "ol"]; b.on("key", function (a) {
                                var c = b.elementPath(); if ("wysiwyg" == b.mode && a.data.keyCode == this.indentKey && c) {
                                    var d = this.getContext(c); !d || this.isIndent && CKEDITOR.plugins.indentList.firstItemInPath(this.context,
                                        c, d) || (b.execCommand(this.relatedGlobal), a.cancel())
                                }
                            }, this); this.jobs[this.isIndent ? 10 : 30] = { refresh: this.isIndent ? function (a, b) { var c = this.getContext(b), d = CKEDITOR.plugins.indentList.firstItemInPath(this.context, b, c); return c && this.isIndent && !d ? k : l } : function (a, b) { return !this.getContext(b) || this.isIndent ? l : k }, exec: CKEDITOR.tools.bind(a, this) }
                        } var d = CKEDITOR.plugins.indent; d.registerCommands(b, { indentlist: new c(b, "indentlist", !0), outdentlist: new c(b, "outdentlist") }); CKEDITOR.tools.extend(c.prototype,
                            d.specificDefinition.prototype, { context: { ol: 1, ul: 1 } })
                    }
                }); CKEDITOR.plugins.indentList = {}; CKEDITOR.plugins.indentList.firstItemInPath = function (a, b, c) { var d = b.contains(e); c || (c = b.contains(a)); return c && d && d.equals(c.getFirst(e)) }
            }(), function () {
                function a(a, b, c) {
                    function d(c) { if (!(!(l = k[c ? "getFirst" : "getLast"]()) || l.is && l.isBlockBoundary() || !(m = b.root[c ? "getPrevious" : "getNext"](CKEDITOR.dom.walker.invisible(!0))) || m.is && m.isBlockBoundary({ br: 1 }))) a.document.createElement("br")[c ? "insertBefore" : "insertAfter"](l) }
                    for (var f = CKEDITOR.plugins.list.listToArray(b.root, c), e = [], g = 0; g < b.contents.length; g++) { var h = b.contents[g]; (h = h.getAscendant("li", !0)) && !h.getCustomData("list_item_processed") && (e.push(h), CKEDITOR.dom.element.setMarker(c, h, "list_item_processed", !0)) } h = null; for (g = 0; g < e.length; g++)h = e[g].getCustomData("listarray_index"), f[h].indent = -1; for (g = h + 1; g < f.length; g++)if (f[g].indent > f[g - 1].indent + 1) { e = f[g - 1].indent + 1 - f[g].indent; for (h = f[g].indent; f[g] && f[g].indent >= h;)f[g].indent += e, g++; g-- } var k = CKEDITOR.plugins.list.arrayToList(f,
                        c, null, a.config.enterMode, b.root.getAttribute("dir")).listNode, l, m; d(!0); d(); k.replace(b.root); a.fire("contentDomInvalidated")
                } function e(a, b) { this.name = a; this.context = this.type = b; this.allowedContent = b + " li"; this.requiredContent = b } function b(a, b, c, d) { for (var f, e; f = a[d ? "getLast" : "getFirst"](u);)(e = f.getDirection(1)) !== b.getDirection(1) && f.setAttribute("dir", e), f.remove(), c ? f[d ? "insertBefore" : "insertAfter"](c) : b.append(f, d) } function c(a) {
                    function c(d) {
                        var e = a[d ? "getPrevious" : "getNext"](f); e && e.type ==
                            CKEDITOR.NODE_ELEMENT && e.is(a.getName()) && (b(a, e, null, !d), a.remove(), a = e)
                    } c(); c(1)
                } function d(a) { return a.type == CKEDITOR.NODE_ELEMENT && (a.getName() in CKEDITOR.dtd.$block || a.getName() in CKEDITOR.dtd.$listItem) && CKEDITOR.dtd[a.getName()]["#"] } function l(a, d, e) {
                    a.fire("saveSnapshot"); e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS); var g = e.extractContents(); d.trim(!1, !0); var h = d.createBookmark(), l = new CKEDITOR.dom.elementPath(d.startContainer), m = l.block, l = l.lastElement.getAscendant("li", 1) || m, x = new CKEDITOR.dom.elementPath(e.startContainer),
                        r = x.contains(CKEDITOR.dtd.$listItem), x = x.contains(CKEDITOR.dtd.$list); m ? (m = m.getBogus()) && m.remove() : x && (m = x.getPrevious(f)) && n(m) && m.remove(); (m = g.getLast()) && m.type == CKEDITOR.NODE_ELEMENT && m.is("br") && m.remove(); (m = d.startContainer.getChild(d.startOffset)) ? g.insertBefore(m) : d.startContainer.append(g); r && (g = k(r)) && (l.contains(r) ? (b(g, r.getParent(), r), g.remove()) : l.append(g)); for (; e.checkStartOfBlock() && e.checkEndOfBlock();) {
                            x = e.startPath(); g = x.block; if (!g) break; g.is("li") && (l = g.getParent(), g.equals(l.getLast(f)) &&
                                g.equals(l.getFirst(f)) && (g = l)); e.moveToPosition(g, CKEDITOR.POSITION_BEFORE_START); g.remove()
                        } e = e.clone(); g = a.editable(); e.setEndAt(g, CKEDITOR.POSITION_BEFORE_END); e = new CKEDITOR.dom.walker(e); e.evaluator = function (a) { return f(a) && !n(a) }; (e = e.next()) && e.type == CKEDITOR.NODE_ELEMENT && e.getName() in CKEDITOR.dtd.$list && c(e); d.moveToBookmark(h); d.select(); a.fire("saveSnapshot")
                } function k(a) { return (a = a.getLast(f)) && a.type == CKEDITOR.NODE_ELEMENT && a.getName() in g ? a : null } var g = { ol: 1, ul: 1 }, h = CKEDITOR.dom.walker.whitespaces(),
                    m = CKEDITOR.dom.walker.bookmark(), f = function (a) { return !(h(a) || m(a)) }, n = CKEDITOR.dom.walker.bogus(); CKEDITOR.plugins.list = {
                        listToArray: function (a, b, c, d, f) {
                            if (!g[a.getName()]) return []; d || (d = 0); c || (c = []); for (var e = 0, h = a.getChildCount(); e < h; e++) {
                                var k = a.getChild(e); k.type == CKEDITOR.NODE_ELEMENT && k.getName() in CKEDITOR.dtd.$list && CKEDITOR.plugins.list.listToArray(k, b, c, d + 1); if ("li" == k.$.nodeName.toLowerCase()) {
                                    var l = { parent: a, indent: d, element: k, contents: [] }; f ? l.grandparent = f : (l.grandparent = a.getParent(),
                                        l.grandparent && "li" == l.grandparent.$.nodeName.toLowerCase() && (l.grandparent = l.grandparent.getParent())); b && CKEDITOR.dom.element.setMarker(b, k, "listarray_index", c.length); c.push(l); for (var m = 0, n = k.getChildCount(), r; m < n; m++)r = k.getChild(m), r.type == CKEDITOR.NODE_ELEMENT && g[r.getName()] ? CKEDITOR.plugins.list.listToArray(r, b, c, d + 1, l.grandparent) : l.contents.push(r)
                                }
                            } return c
                        }, arrayToList: function (a, b, c, d, e) {
                            c || (c = 0); if (!a || a.length < c + 1) return null; for (var h, k = a[c].parent.getDocument(), l = new CKEDITOR.dom.documentFragment(k),
                                n = null, z = c, A = Math.max(a[c].indent, 0), r = null, u, E, I = d == CKEDITOR.ENTER_P ? "p" : "div"; ;) {
                                    var H = a[z]; h = H.grandparent; u = H.element.getDirection(1); if (H.indent == A) { n && a[z].parent.getName() == n.getName() || (n = a[z].parent.clone(!1, 1), e && n.setAttribute("dir", e), l.append(n)); r = n.append(H.element.clone(0, 1)); u != n.getDirection(1) && r.setAttribute("dir", u); for (h = 0; h < H.contents.length; h++)r.append(H.contents[h].clone(1, 1)); z++ } else if (H.indent == Math.max(A, 0) + 1) H = a[z - 1].element.getDirection(1), z = CKEDITOR.plugins.list.arrayToList(a,
                                        null, z, d, H != u ? u : null), !r.getChildCount() && CKEDITOR.env.needsNbspFiller && 7 >= k.$.documentMode && r.append(k.createText(" ")), r.append(z.listNode), z = z.nextIndex; else if (-1 == H.indent && !c && h) {
                                            g[h.getName()] ? (r = H.element.clone(!1, !0), u != h.getDirection(1) && r.setAttribute("dir", u)) : r = new CKEDITOR.dom.documentFragment(k); var n = h.getDirection(1) != u, K = H.element, J = K.getAttribute("class"), D = K.getAttribute("style"), R = r.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && (d != CKEDITOR.ENTER_BR || n || D || J), N, S = H.contents.length, L;
                                            for (h = 0; h < S; h++)if (N = H.contents[h], m(N) && 1 < S) R ? L = N.clone(1, 1) : r.append(N.clone(1, 1)); else if (N.type == CKEDITOR.NODE_ELEMENT && N.isBlockBoundary()) { n && !N.getDirection() && N.setAttribute("dir", u); E = N; var V = K.getAttribute("style"); V && E.setAttribute("style", V.replace(/([^;])$/, "$1;") + (E.getAttribute("style") || "")); J && N.addClass(J); E = null; L && (r.append(L), L = null); r.append(N.clone(1, 1)) } else R ? (E || (E = k.createElement(I), r.append(E), n && E.setAttribute("dir", u)), D && E.setAttribute("style", D), J && E.setAttribute("class",
                                                J), L && (E.append(L), L = null), E.append(N.clone(1, 1))) : r.append(N.clone(1, 1)); L && ((E || r).append(L), L = null); r.type == CKEDITOR.NODE_DOCUMENT_FRAGMENT && z != a.length - 1 && (CKEDITOR.env.needsBrFiller && (u = r.getLast()) && u.type == CKEDITOR.NODE_ELEMENT && u.is("br") && u.remove(), (u = r.getLast(f)) && u.type == CKEDITOR.NODE_ELEMENT && u.is(CKEDITOR.dtd.$block) || r.append(k.createElement("br"))); u = r.$.nodeName.toLowerCase(); "div" != u && "p" != u || r.appendBogus(); l.append(r); n = null; z++
                                        } else return null; E = null; if (a.length <= z || Math.max(a[z].indent,
                                            0) < A) break
                            } if (b) for (a = l.getFirst(); a;) { if (a.type == CKEDITOR.NODE_ELEMENT && (CKEDITOR.dom.element.clearMarkers(b, a), a.getName() in CKEDITOR.dtd.$listItem && (c = a, k = e = d = void 0, d = c.getDirection()))) { for (e = c.getParent(); e && !(k = e.getDirection());)e = e.getParent(); d == k && c.removeAttribute("dir") } a = a.getNextSourceNode() } return { listNode: l, nextIndex: z }
                        }
                    }; var r = /^h[1-6]$/, u = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT); e.prototype = {
                        exec: function (b) {
                            this.refresh(b, b.elementPath()); var d = b.config, e = b.getSelection(),
                                h = e && e.getRanges(); if (this.state == CKEDITOR.TRISTATE_OFF) { var k = b.editable(); if (k.getFirst(f)) { var l = 1 == h.length && h[0]; (d = l && l.getEnclosedNode()) && d.is && this.type == d.getName() && this.setState(CKEDITOR.TRISTATE_ON) } else d.enterMode == CKEDITOR.ENTER_BR ? k.appendBogus() : h[0].fixBlock(1, d.enterMode == CKEDITOR.ENTER_P ? "p" : "div"), e.selectRanges(h) } for (var d = e.createBookmarks(!0), k = [], m = {}, h = h.createIterator(), n = 0; (l = h.getNextRange()) && ++n;) {
                                    var u = l.getBoundaryNodes(), z = u.startNode, A = u.endNode; z.type == CKEDITOR.NODE_ELEMENT &&
                                        "td" == z.getName() && l.setStartAt(u.startNode, CKEDITOR.POSITION_AFTER_START); A.type == CKEDITOR.NODE_ELEMENT && "td" == A.getName() && l.setEndAt(u.endNode, CKEDITOR.POSITION_BEFORE_END); l = l.createIterator(); for (l.forceBrBreak = this.state == CKEDITOR.TRISTATE_OFF; u = l.getNextParagraph();)if (!u.getCustomData("list_block")) {
                                            CKEDITOR.dom.element.setMarker(m, u, "list_block", 1); for (var G = b.elementPath(u), z = G.elements, A = 0, G = G.blockLimit, F, E = z.length - 1; 0 <= E && (F = z[E]); E--)if (g[F.getName()] && G.contains(F)) {
                                                G.removeCustomData("list_group_object_" +
                                                    n); (z = F.getCustomData("list_group_object")) ? z.contents.push(u) : (z = { root: F, contents: [u] }, k.push(z), CKEDITOR.dom.element.setMarker(m, F, "list_group_object", z)); A = 1; break
                                            } A || (A = G, A.getCustomData("list_group_object_" + n) ? A.getCustomData("list_group_object_" + n).contents.push(u) : (z = { root: A, contents: [u] }, CKEDITOR.dom.element.setMarker(m, A, "list_group_object_" + n, z), k.push(z)))
                                        }
                                } for (F = []; 0 < k.length;)if (z = k.shift(), this.state == CKEDITOR.TRISTATE_OFF) if (g[z.root.getName()]) {
                                    h = b; n = z; z = m; l = F; A = CKEDITOR.plugins.list.listToArray(n.root,
                                        z); G = []; for (u = 0; u < n.contents.length; u++)E = n.contents[u], (E = E.getAscendant("li", !0)) && !E.getCustomData("list_item_processed") && (G.push(E), CKEDITOR.dom.element.setMarker(z, E, "list_item_processed", !0)); for (var E = n.root.getDocument(), I = void 0, H = void 0, u = 0; u < G.length; u++) { var K = G[u].getCustomData("listarray_index"), I = A[K].parent; I.is(this.type) || (H = E.createElement(this.type), I.copyAttributes(H, { start: 1, type: 1 }), H.removeStyle("list-style-type"), A[K].parent = H) } z = CKEDITOR.plugins.list.arrayToList(A, z, null,
                                            h.config.enterMode); A = void 0; G = z.listNode.getChildCount(); for (u = 0; u < G && (A = z.listNode.getChild(u)); u++)A.getName() == this.type && l.push(A); z.listNode.replace(n.root); h.fire("contentDomInvalidated")
                                } else {
                                    A = b; l = z; u = F; G = l.contents; h = l.root.getDocument(); n = []; 1 == G.length && G[0].equals(l.root) && (z = h.createElement("div"), G[0].moveChildren && G[0].moveChildren(z), G[0].append(z), G[0] = z); l = l.contents[0].getParent(); for (E = 0; E < G.length; E++)l = l.getCommonAncestor(G[E].getParent()); I = A.config.useComputedState; A = z = void 0;
                                    I = void 0 === I || I; for (E = 0; E < G.length; E++)for (H = G[E]; K = H.getParent();) { if (K.equals(l)) { n.push(H); !A && H.getDirection() && (A = 1); H = H.getDirection(I); null !== z && (z = z && z != H ? null : H); break } H = K } if (!(1 > n.length)) {
                                        G = n[n.length - 1].getNext(); E = h.createElement(this.type); u.push(E); for (I = u = void 0; n.length;)u = n.shift(), I = h.createElement("li"), H = u, H.is("pre") || r.test(H.getName()) || "false" == H.getAttribute("contenteditable") ? u.appendTo(I) : (u.copyAttributes(I), z && u.getDirection() && (I.removeStyle("direction"), I.removeAttribute("dir")),
                                            u.moveChildren(I), u.remove()), I.appendTo(E); z && A && E.setAttribute("dir", z); G ? E.insertBefore(G) : E.appendTo(l)
                                    }
                                } else this.state == CKEDITOR.TRISTATE_ON && g[z.root.getName()] && a.call(this, b, z, m); for (E = 0; E < F.length; E++)c(F[E]); CKEDITOR.dom.element.clearAllMarkers(m); e.selectBookmarks(d); b.focus()
                        }, refresh: function (a, b) { var c = b.contains(g, 1), d = b.blockLimit || b.root; c && d.contains(c) ? this.setState(c.is(this.type) ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_OFF) }
                    }; CKEDITOR.plugins.add("list",
                        {
                            requires: "indentlist", init: function (a) {
                                a.blockless || (a.addCommand("numberedlist", new e("numberedlist", "ol")), a.addCommand("bulletedlist", new e("bulletedlist", "ul")), a.ui.addButton && (a.ui.addButton("NumberedList", { label: a.lang.list.numberedlist, command: "numberedlist", directional: !0, toolbar: "list,10" }), a.ui.addButton("BulletedList", { label: a.lang.list.bulletedlist, command: "bulletedlist", directional: !0, toolbar: "list,20" })), a.on("key", function (b) {
                                    var c = b.data.domEvent.getKey(), e; if ("wysiwyg" == a.mode &&
                                        c in { 8: 1, 46: 1 }) {
                                            var h = a.getSelection().getRanges()[0], m = h && h.startPath(); if (h && h.collapsed) {
                                                var r = 8 == c, x = a.editable(), u = new CKEDITOR.dom.walker(h.clone()); u.evaluator = function (a) { return f(a) && !n(a) }; u.guard = function (a, b) { return !(b && a.type == CKEDITOR.NODE_ELEMENT && a.is("table")) }; c = h.clone(); if (r) {
                                                    var z; (z = m.contains(g)) && h.checkBoundaryOfElement(z, CKEDITOR.START) && (z = z.getParent()) && z.is("li") && (z = k(z)) ? (e = z, z = z.getPrevious(f), c.moveToPosition(z && n(z) ? z : e, CKEDITOR.POSITION_BEFORE_START)) : (u.range.setStartAt(x,
                                                        CKEDITOR.POSITION_AFTER_START), u.range.setEnd(h.startContainer, h.startOffset), (z = u.previous()) && z.type == CKEDITOR.NODE_ELEMENT && (z.getName() in g || z.is("li")) && (z.is("li") || (u.range.selectNodeContents(z), u.reset(), u.evaluator = d, z = u.previous()), e = z, c.moveToElementEditEnd(e), c.moveToPosition(c.endPath().block, CKEDITOR.POSITION_BEFORE_END))); if (e) l(a, c, h), b.cancel(); else {
                                                            var A = m.contains(g); A && h.checkBoundaryOfElement(A, CKEDITOR.START) && (e = A.getFirst(f), h.checkBoundaryOfElement(e, CKEDITOR.START) && (z = A.getPrevious(f),
                                                                k(e) ? z && (h.moveToElementEditEnd(z), h.select()) : a.execCommand("outdent"), b.cancel()))
                                                        }
                                                } else if (e = m.contains("li")) {
                                                    if (u.range.setEndAt(x, CKEDITOR.POSITION_BEFORE_END), r = (x = e.getLast(f)) && d(x) ? x : e, m = 0, (z = u.next()) && z.type == CKEDITOR.NODE_ELEMENT && z.getName() in g && z.equals(x) ? (m = 1, z = u.next()) : h.checkBoundaryOfElement(r, CKEDITOR.END) && (m = 2), m && z) {
                                                        h = h.clone(); h.moveToElementEditStart(z); if (1 == m && (c.optimize(), !c.startContainer.equals(e))) {
                                                            for (e = c.startContainer; e.is(CKEDITOR.dtd.$inline);)A = e, e = e.getParent();
                                                            A && c.moveToPosition(A, CKEDITOR.POSITION_AFTER_END)
                                                        } 2 == m && (c.moveToPosition(c.endPath().block, CKEDITOR.POSITION_BEFORE_END), h.endPath().block && h.moveToPosition(h.endPath().block, CKEDITOR.POSITION_AFTER_START)); l(a, c, h); b.cancel()
                                                    }
                                                } else u.range.setEndAt(x, CKEDITOR.POSITION_BEFORE_END), (z = u.next()) && z.type == CKEDITOR.NODE_ELEMENT && z.is(g) && (z = z.getFirst(f), m.block && h.checkStartOfBlock() && h.checkEndOfBlock() ? (m.block.remove(), h.moveToElementEditStart(z), h.select()) : k(z) ? (h.moveToElementEditStart(z), h.select()) :
                                                    (h = h.clone(), h.moveToElementEditStart(z), l(a, c, h)), b.cancel()); setTimeout(function () { a.selectionChange(1) })
                                            }
                                    }
                                }))
                            }
                        })
            }(), function () {
                function a(a, b, c) { c = a.config.forceEnterMode || c; if ("wysiwyg" == a.mode) { b || (b = a.activeEnterMode); var d = a.elementPath(); d && !d.isContextFor("p") && (b = CKEDITOR.ENTER_BR, c = 1); a.fire("saveSnapshot"); b == CKEDITOR.ENTER_BR ? k(a, b, null, c) : g(a, b, null, c); a.fire("saveSnapshot") } } function e(a) { a = a.getSelection().getRanges(!0); for (var b = a.length - 1; 0 < b; b--)a[b].deleteContents(); return a[0] }
                function b(a) { var b = a.startContainer.getAscendant(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && "true" == a.getAttribute("contenteditable") }, !0); if (a.root.equals(b)) return a; b = new CKEDITOR.dom.range(b); b.moveToRange(a); return b } CKEDITOR.plugins.add("enterkey", {
                    init: function (b) {
                        b.addCommand("enter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (b) { a(b) } }); b.addCommand("shiftEnter", { modes: { wysiwyg: 1 }, editorFocus: !1, exec: function (b) { a(b, b.activeShiftEnterMode, 1) } }); b.setKeystroke([[13, "enter"], [CKEDITOR.SHIFT +
                            13, "shiftEnter"]])
                    }
                }); var c = CKEDITOR.dom.walker.whitespaces(), d = CKEDITOR.dom.walker.bookmark(), l, k, g, h; CKEDITOR.plugins.enterkey = {
                    enterBlock: function (a, f, g, l) {
                        function u(a) { var b; if (a === CKEDITOR.ENTER_BR || -1 === CKEDITOR.tools.indexOf(["td", "th"], w.lastElement.getName()) || 1 !== w.lastElement.getChildCount()) return !1; a = w.lastElement.getChild(0).clone(!0); (b = a.getBogus()) && b.remove(); return a.getText().length ? !1 : !0 } if (g = g || e(a)) {
                            g = b(g); var v = g.document, y = g.checkStartOfBlock(), p = g.checkEndOfBlock(), w = a.elementPath(g.startContainer),
                                q = w.block, B = f == CKEDITOR.ENTER_DIV ? "div" : "p", t; if (y && p) {
                                    if (q && (q.is("li") || q.getParent().is("li"))) {
                                        q.is("li") || (q = q.getParent()); g = q.getParent(); t = g.getParent(); l = !q.hasPrevious(); var p = !q.hasNext(), B = a.getSelection(), y = B.createBookmarks(), x = q.getDirection(1), C = q.getAttribute("class"), z = q.getAttribute("style"), A = t.getDirection(1) != x; a = a.enterMode != CKEDITOR.ENTER_BR || A || z || C; if (t.is("li")) l || p ? (l && p && g.remove(), q[p ? "insertAfter" : "insertBefore"](t)) : q.breakParent(t); else {
                                            if (a) if (w.block.is("li") ? (t =
                                                v.createElement(f == CKEDITOR.ENTER_P ? "p" : "div"), A && t.setAttribute("dir", x), z && t.setAttribute("style", z), C && t.setAttribute("class", C), q.moveChildren(t)) : t = w.block, l || p) t[l ? "insertBefore" : "insertAfter"](g); else q.breakParent(g), t.insertAfter(g); else if (q.appendBogus(!0), l || p) for (; v = q[l ? "getFirst" : "getLast"]();)v[l ? "insertBefore" : "insertAfter"](g); else for (q.breakParent(g); v = q.getLast();)v.insertAfter(g); q.remove()
                                        } B.selectBookmarks(y); return
                                    } if (q && q.getParent().is("blockquote")) {
                                        q.breakParent(q.getParent());
                                        q.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1)) || q.getPrevious().remove(); q.getNext().getFirst(CKEDITOR.dom.walker.invisible(1)) || q.getNext().remove(); g.moveToElementEditStart(q); g.select(); return
                                    }
                                } else if (q && q.is("pre") && !p) { k(a, f, g, l); return } if (z = g.splitBlock(B)) {
                                    a = z.previousBlock; q = z.nextBlock; y = z.wasStartOfBlock; p = z.wasEndOfBlock; q ? (x = q.getParent(), x.is("li") && (q.breakParent(x), q.move(q.getNext(), 1))) : a && (x = a.getParent()) && x.is("li") && (a.breakParent(x), x = a.getNext(), g.moveToElementEditStart(x),
                                        a.move(a.getPrevious())); if (y || p) if (u(f)) g.moveToElementEditStart(g.getTouchedStartNode()); else {
                                            if (a) { if (a.is("li") || !h.test(a.getName()) && !a.is("pre")) t = a.clone() } else q && (t = q.clone()); t ? l && !t.is("li") && t.renameNode(B) : x && x.is("li") ? t = x : (t = v.createElement(B), a && (C = a.getDirection()) && t.setAttribute("dir", C)); if (v = z.elementPath) for (f = 0, l = v.elements.length; f < l; f++) {
                                                B = v.elements[f]; if (B.equals(v.block) || B.equals(v.blockLimit)) break; CKEDITOR.dtd.$removeEmpty[B.getName()] && (B = B.clone(), t.moveChildren(B),
                                                    t.append(B))
                                            } t.appendBogus(); t.getParent() || g.insertNode(t); t.is("li") && t.removeAttribute("value"); !CKEDITOR.env.ie || !y || p && a.getChildCount() || (g.moveToElementEditStart(p ? a : t), g.select()); g.moveToElementEditStart(y && !p ? q : t)
                                        } else q.is("li") && (t = g.clone(), t.selectNodeContents(q), t = new CKEDITOR.dom.walker(t), t.evaluator = function (a) { return !(d(a) || c(a) || a.type == CKEDITOR.NODE_ELEMENT && a.getName() in CKEDITOR.dtd.$inline && !(a.getName() in CKEDITOR.dtd.$empty)) }, (x = t.next()) && x.type == CKEDITOR.NODE_ELEMENT &&
                                            x.is("ul", "ol") && (CKEDITOR.env.needsBrFiller ? v.createElement("br") : v.createText(" ")).insertBefore(x)), q && g.moveToElementEditStart(q); g.select(); g.scrollIntoView()
                                }
                        }
                    }, enterBr: function (a, b, c, d) {
                        if (c = c || e(a)) {
                            var k = c.document, l = c.checkEndOfBlock(), y = new CKEDITOR.dom.elementPath(a.getSelection().getStartElement()), p = y.block, w = p && y.block.getName(); d || "li" != w ? (!d && l && h.test(w) ? (l = p.getDirection()) ? (k = k.createElement("div"), k.setAttribute("dir", l), k.insertAfter(p), c.setStart(k, 0)) : (k.createElement("br").insertAfter(p),
                                CKEDITOR.env.gecko && k.createText("").insertAfter(p), c.setStartAt(p.getNext(), CKEDITOR.env.ie ? CKEDITOR.POSITION_BEFORE_START : CKEDITOR.POSITION_AFTER_START)) : (a = "pre" == w && CKEDITOR.env.ie && 8 > CKEDITOR.env.version ? k.createText("\r") : k.createElement("br"), c.deleteContents(), c.insertNode(a), CKEDITOR.env.needsBrFiller ? (k.createText("﻿").insertAfter(a), l && (p || y.blockLimit).appendBogus(), a.getNext().$.nodeValue = "", c.setStartAt(a.getNext(), CKEDITOR.POSITION_AFTER_START)) : c.setStartAt(a, CKEDITOR.POSITION_AFTER_END)),
                                c.collapse(!0), c.select(), c.scrollIntoView()) : g(a, b, c, d)
                        }
                    }
                }; l = CKEDITOR.plugins.enterkey; k = l.enterBr; g = l.enterBlock; h = /^h[1-6]$/
            }(), function () {
                function a(a, b) {
                    var c = {}, d = [], l = { nbsp: " ", shy: "­", gt: "\x3e", lt: "\x3c", amp: "\x26", apos: "'", quot: '"' }; a = a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g, function (a, f) { var e = b ? "\x26" + f + ";" : l[f]; c[e] = b ? l[f] : "\x26" + f + ";"; d.push(e); return "" }); if (!b && a) {
                        a = a.split(","); var k = document.createElement("div"), g; k.innerHTML = "\x26" + a.join(";\x26") + ";"; g = k.innerHTML; k =
                            null; for (k = 0; k < g.length; k++) { var h = g.charAt(k); c[h] = "\x26" + a[k] + ";"; d.push(h) }
                    } c.regex = d.join(b ? "|" : ""); return c
                } CKEDITOR.plugins.add("entities", {
                    afterInit: function (e) {
                        function b(a) { return h[a] } function c(a) { return "force" != d.entities_processNumerical && k[a] ? k[a] : "\x26#" + a.charCodeAt(0) + ";" } var d = e.config; if (e = (e = e.dataProcessor) && e.htmlFilter) {
                            var l = []; !1 !== d.basicEntities && l.push("nbsp,gt,lt,amp"); d.entities && (l.length && l.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
                                d.entities_latin && l.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"), d.entities_greek && l.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
                                d.entities_additional && l.push(d.entities_additional)); var k = a(l.join(",")), g = k.regex ? "[" + k.regex + "]" : "a^"; delete k.regex; d.entities && d.entities_processNumerical && (g = "[^ -~]|" + g); var g = new RegExp(g, "g"), h = a("nbsp,gt,lt,amp,shy", !0), m = new RegExp(h.regex, "g"); e.addRules({ text: function (a) { return a.replace(m, b).replace(g, c) } }, { applyToAll: !0, excludeNestedEditable: !0 })
                        }
                    }
                })
            }(), CKEDITOR.config.basicEntities = !0, CKEDITOR.config.entities = !0, CKEDITOR.config.entities_latin = !0, CKEDITOR.config.entities_greek = !0,
        CKEDITOR.config.entities_additional = "#39", CKEDITOR.plugins.add("popup"), CKEDITOR.tools.extend(CKEDITOR.editor.prototype, {
            popup: function (a, e, b, c) {
                e = e || "80%"; b = b || "70%"; "string" == typeof e && 1 < e.length && "%" == e.substr(e.length - 1, 1) && (e = parseInt(window.screen.width * parseInt(e, 10) / 100, 10)); "string" == typeof b && 1 < b.length && "%" == b.substr(b.length - 1, 1) && (b = parseInt(window.screen.height * parseInt(b, 10) / 100, 10)); 640 > e && (e = 640); 420 > b && (b = 420); var d = parseInt((window.screen.height - b) / 2, 10), l = parseInt((window.screen.width -
                    e) / 2, 10); c = (c || "location\x3dno,menubar\x3dno,toolbar\x3dno,dependent\x3dyes,minimizable\x3dno,modal\x3dyes,alwaysRaised\x3dyes,resizable\x3dyes,scrollbars\x3dyes") + ",width\x3d" + e + ",height\x3d" + b + ",top\x3d" + d + ",left\x3d" + l; var k = window.open("", null, c, !0); if (!k) return !1; try { -1 == navigator.userAgent.toLowerCase().indexOf(" chrome/") && (k.moveTo(l, d), k.resizeTo(e, b)), k.focus(), k.location.href = a } catch (g) { window.open(a, null, c, !0) } return !0
            }
        }), "use strict", function () {
            function a(a) {
                this.editor = a; this.loaders =
                    []
            } function e(a, c, e) { var g = a.config.fileTools_defaultFileName; this.editor = a; this.lang = a.lang; "string" === typeof c ? (this.data = c, this.file = b(this.data), this.loaded = this.total = this.file.size) : (this.data = null, this.file = c, this.total = this.file.size, this.loaded = 0); e ? this.fileName = e : this.file.name ? this.fileName = this.file.name : (a = this.file.type.split("/"), g && (a[0] = g), this.fileName = a.join(".")); this.uploaded = 0; this.responseData = this.uploadTotal = null; this.status = "created"; this.abort = function () { this.changeStatus("abort") } }
            function b(a) { var b = a.match(c)[1]; a = a.replace(c, ""); a = atob(a); var e = [], g, h, m, f; for (g = 0; g < a.length; g += 512) { h = a.slice(g, g + 512); m = Array(h.length); for (f = 0; f < h.length; f++)m[f] = h.charCodeAt(f); h = new Uint8Array(m); e.push(h) } return new Blob(e, { type: b }) } CKEDITOR.plugins.add("filetools", {
                beforeInit: function (b) {
                    b.uploadRepository = new a(b); b.on("fileUploadRequest", function (a) { var b = a.data.fileLoader; b.xhr.open("POST", b.uploadUrl, !0); a.data.requestData.upload = { file: b.file, name: b.fileName } }, null, null, 5); b.on("fileUploadRequest",
                        function (a) { var c = a.data.fileLoader, e = new FormData; a = a.data.requestData; var h = b.config.fileTools_requestHeaders, m, f; for (f in a) { var n = a[f]; "object" === typeof n && n.file ? e.append(f, n.file, n.name) : e.append(f, n) } e.append("ckCsrfToken", CKEDITOR.tools.getCsrfToken()); if (h) for (m in h) c.xhr.setRequestHeader(m, h[m]); c.xhr.send(e) }, null, null, 999); b.on("fileUploadResponse", function (a) {
                            var b = a.data.fileLoader, c = b.xhr, d = a.data; try {
                                var e = JSON.parse(c.responseText); e.error && e.error.message && (d.message = e.error.message);
                                if (e.uploaded) for (var f in e) d[f] = e[f]; else a.cancel()
                            } catch (n) { d.message = b.lang.filetools.responseError, CKEDITOR.warn("filetools-response-error", { responseText: c.responseText }), a.cancel() }
                        }, null, null, 999)
                }
            }); a.prototype = { create: function (a, b, c) { c = c || e; var g = this.loaders.length; a = new c(this.editor, a, b); a.id = g; this.loaders[g] = a; this.fire("instanceCreated", a); return a }, isFinished: function () { for (var a = 0; a < this.loaders.length; ++a)if (!this.loaders[a].isFinished()) return !1; return !0 } }; e.prototype = {
                loadAndUpload: function (a,
                    b) { var c = this; this.once("loaded", function (e) { e.cancel(); c.once("update", function (a) { a.cancel() }, null, null, 0); c.upload(a, b) }, null, null, 0); this.load() }, load: function () {
                        var a = this, b = this.reader = new FileReader; a.changeStatus("loading"); this.abort = function () { a.reader.abort() }; b.onabort = function () { a.changeStatus("abort") }; b.onerror = function () { a.message = a.lang.filetools.loadError; a.changeStatus("error") }; b.onprogress = function (b) { a.loaded = b.loaded; a.update() }; b.onload = function () {
                            a.loaded = a.total; a.data = b.result;
                            a.changeStatus("loaded")
                        }; b.readAsDataURL(this.file)
                    }, upload: function (a, b) { var c = b || {}; a ? (this.uploadUrl = a, this.xhr = new XMLHttpRequest, this.attachRequestListeners(), this.editor.fire("fileUploadRequest", { fileLoader: this, requestData: c }) && this.changeStatus("uploading")) : (this.message = this.lang.filetools.noUrlError, this.changeStatus("error")) }, attachRequestListeners: function () {
                        function a() { "error" != c.status && (c.message = c.lang.filetools.networkError, c.changeStatus("error")) } function b() {
                            "abort" != c.status &&
                            c.changeStatus("abort")
                        } var c = this, e = this.xhr; c.abort = function () { e.abort(); b() }; e.onerror = a; e.onabort = b; e.upload ? (e.upload.onprogress = function (a) { a.lengthComputable && (c.uploadTotal || (c.uploadTotal = a.total), c.uploaded = a.loaded, c.update()) }, e.upload.onerror = a, e.upload.onabort = b) : (c.uploadTotal = c.total, c.update()); e.onload = function () {
                            c.update(); if ("abort" != c.status) if (c.uploaded = c.uploadTotal, 200 > e.status || 299 < e.status) c.message = c.lang.filetools["httpError" + e.status], c.message || (c.message = c.lang.filetools.httpError.replace("%1",
                                e.status)), c.changeStatus("error"); else { for (var a = { fileLoader: c }, b = ["message", "fileName", "url"], d = c.editor.fire("fileUploadResponse", a), l = 0; l < b.length; l++) { var r = b[l]; "string" === typeof a[r] && (c[r] = a[r]) } c.responseData = a; delete c.responseData.fileLoader; !1 === d ? c.changeStatus("error") : c.changeStatus("uploaded") }
                        }
                    }, changeStatus: function (a) { this.status = a; if ("error" == a || "abort" == a || "loaded" == a || "uploaded" == a) this.abort = function () { }; this.fire(a); this.update() }, update: function () { this.fire("update") }, isFinished: function () { return !!this.status.match(/^(?:loaded|uploaded|error|abort)$/) }
            };
            CKEDITOR.event.implementOn(a.prototype); CKEDITOR.event.implementOn(e.prototype); var c = /^data:(\S*?);base64,/; CKEDITOR.fileTools || (CKEDITOR.fileTools = {}); CKEDITOR.tools.extend(CKEDITOR.fileTools, {
                uploadRepository: a, fileLoader: e, getUploadUrl: function (a, b) {
                    var c = CKEDITOR.tools.capitalize; return b && a[b + "UploadUrl"] ? a[b + "UploadUrl"] : a.uploadUrl ? a.uploadUrl : b && a["filebrowser" + c(b, 1) + "UploadUrl"] ? a["filebrowser" + c(b, 1) + "UploadUrl"] + "\x26responseType\x3djson" : a.filebrowserUploadUrl ? a.filebrowserUploadUrl +
                        "\x26responseType\x3djson" : null
                }, isTypeSupported: function (a, b) { return !!a.type.match(b) }, isFileUploadSupported: "function" === typeof FileReader && "function" === typeof (new FileReader).readAsDataURL && "function" === typeof FormData && "function" === typeof (new FormData).append && "function" === typeof XMLHttpRequest && "function" === typeof Blob
            })
        }(), function () {
            function a(a, b) { var c = []; if (b) for (var d in b) c.push(d + "\x3d" + encodeURIComponent(b[d])); else return a; return a + (-1 != a.indexOf("?") ? "\x26" : "?") + c.join("\x26") } function e(b) {
                return !b.match(/command=QuickUpload/) ||
                    b.match(/(\?|&)responseType=json/) ? b : a(b, { responseType: "json" })
            } function b(a) { a += ""; return a.charAt(0).toUpperCase() + a.substr(1) } function c() {
                var c = this.getDialog(), d = c.getParentEditor(); d._.filebrowserSe = this; var f = d.config["filebrowser" + b(c.getName()) + "WindowWidth"] || d.config.filebrowserWindowWidth || "80%", c = d.config["filebrowser" + b(c.getName()) + "WindowHeight"] || d.config.filebrowserWindowHeight || "70%", e = this.filebrowser.params || {}; e.CKEditor = d.name; e.CKEditorFuncNum = d._.filebrowserFn; e.langCode ||
                    (e.langCode = d.langCode); e = a(this.filebrowser.url, e); d.popup(e, f, c, d.config.filebrowserWindowFeatures || d.config.fileBrowserWindowFeatures)
            } function d(a) { var b = new CKEDITOR.dom.element(a.$.form); b && ((a = b.$.elements.ckCsrfToken) ? a = new CKEDITOR.dom.element(a) : (a = new CKEDITOR.dom.element("input"), a.setAttributes({ name: "ckCsrfToken", type: "hidden" }), b.append(a)), a.setAttribute("value", CKEDITOR.tools.getCsrfToken())) } function l() {
                var a = this.getDialog(); a.getParentEditor()._.filebrowserSe = this; return a.getContentElement(this["for"][0],
                    this["for"][1]).getInputElement().$.value && a.getContentElement(this["for"][0], this["for"][1]).getAction() ? !0 : !1
            } function k(b, c, d) { var f = d.params || {}; f.CKEditor = b.name; f.CKEditorFuncNum = b._.filebrowserFn; f.langCode || (f.langCode = b.langCode); c.action = a(d.url, f); c.filebrowser = d } function g(a, m, u, v) {
                if (v && v.length) for (var y, p = v.length; p--;)if (y = v[p], "hbox" != y.type && "vbox" != y.type && "fieldset" != y.type || g(a, m, u, y.children), y.filebrowser) if ("string" == typeof y.filebrowser && (y.filebrowser = {
                    action: "fileButton" ==
                        y.type ? "QuickUpload" : "Browse", target: y.filebrowser
                }), "Browse" == y.filebrowser.action) { var w = y.filebrowser.url; void 0 === w && (w = a.config["filebrowser" + b(m) + "BrowseUrl"], void 0 === w && (w = a.config.filebrowserBrowseUrl)); w && (y.onClick = c, y.filebrowser.url = w, y.hidden = !1) } else if ("QuickUpload" == y.filebrowser.action && y["for"] && (w = y.filebrowser.url, void 0 === w && (w = a.config["filebrowser" + b(m) + "UploadUrl"], void 0 === w && (w = a.config.filebrowserUploadUrl)), w)) {
                    var q = y.onClick; y.onClick = function (b) {
                        var c = b.sender, g = c.getDialog().getContentElement(this["for"][0],
                            this["for"][1]).getInputElement(), k = CKEDITOR.fileTools && CKEDITOR.fileTools.isFileUploadSupported; if (q && !1 === q.call(c, b)) return !1; if (l.call(c, b)) { if ("form" !== a.config.filebrowserUploadMethod && k) return b = a.uploadRepository.create(g.$.files[0]), b.on("uploaded", function (a) { var b = a.sender.responseData; f.call(a.sender.editor, b.url, b.message) }), b.on("error", h.bind(this)), b.on("abort", h.bind(this)), b.loadAndUpload(e(w)), "xhr"; d(g); return !0 } return !1
                    }; y.filebrowser.url = w; y.hidden = !1; k(a, u.getContents(y["for"][0]).get(y["for"][1]),
                        y.filebrowser)
                }
            } function h(a) { var b = {}; try { b = JSON.parse(a.sender.xhr.response) || {} } catch (c) { } this.enable(); alert(b.error ? b.error.message : a.sender.message) } function m(a, b, c) { if (-1 !== c.indexOf(";")) { c = c.split(";"); for (var d = 0; d < c.length; d++)if (m(a, b, c[d])) return !0; return !1 } return (a = a.getContents(b).get(c).filebrowser) && a.url } function f(a, b) {
                var c = this._.filebrowserSe.getDialog(), d = this._.filebrowserSe["for"], f = this._.filebrowserSe.filebrowser.onSelect; d && c.getContentElement(d[0], d[1]).reset(); if ("function" !=
                    typeof b || !1 !== b.call(this._.filebrowserSe)) if (!f || !1 !== f.call(this._.filebrowserSe, a, b)) if ("string" == typeof b && b && alert(b), a && (d = this._.filebrowserSe, c = d.getDialog(), d = d.filebrowser.target || null)) if (d = d.split(":"), f = c.getContentElement(d[0], d[1])) f.setValue(a), c.selectPage(d[0])
            } CKEDITOR.plugins.add("filebrowser", { requires: "popup,filetools", init: function (a) { a._.filebrowserFn = CKEDITOR.tools.addFunction(f, a); a.on("destroy", function () { CKEDITOR.tools.removeFunction(this._.filebrowserFn) }) } }); CKEDITOR.on("dialogDefinition",
                function (a) { if (a.editor.plugins.filebrowser) for (var b = a.data.definition, c, d = 0; d < b.contents.length; ++d)if (c = b.contents[d]) g(a.editor, a.data.name, b, c.elements), c.hidden && c.filebrowser && (c.hidden = !m(b, c.id, c.filebrowser)) })
        }(), function () {
            function a(a) {
                var d = a.config, l = a.fire("uiSpace", { space: "top", html: "" }).html, k = function () {
                    function f(a, c, d) { h.setStyle(c, b(d)); h.setStyle("position", a) } function g(a) {
                        var b = m.getDocumentPosition(); switch (a) {
                            case "top": f("absolute", "top", b.y - q - x); break; case "pin": f("fixed",
                                "top", z); break; case "bottom": f("absolute", "top", b.y + (p.height || p.bottom - p.top) + x)
                        }l = a
                    } var l, m, y, p, w, q, B, t = d.floatSpaceDockedOffsetX || 0, x = d.floatSpaceDockedOffsetY || 0, C = d.floatSpacePinnedOffsetX || 0, z = d.floatSpacePinnedOffsetY || 0; return function (f) {
                        if (m = a.editable()) {
                            var n = f && "focus" == f.name; n && h.show(); a.fire("floatingSpaceLayout", { show: n }); h.removeStyle("left"); h.removeStyle("right"); y = h.getClientRect(); p = m.getClientRect(); w = e.getViewPaneSize(); q = y.height; B = "pageXOffset" in e.$ ? e.$.pageXOffset : CKEDITOR.document.$.documentElement.scrollLeft;
                            l ? (q + x <= p.top ? g("top") : q + x > w.height - p.bottom ? g("pin") : g("bottom"), f = w.width / 2, f = d.floatSpacePreferRight ? "right" : 0 < p.left && p.right < w.width && p.width > y.width ? "rtl" == d.contentsLangDirection ? "right" : "left" : f - p.left > p.right - f ? "left" : "right", y.width > w.width ? (f = "left", n = 0) : (n = "left" == f ? 0 < p.left ? p.left : 0 : p.right < w.width ? w.width - p.right : 0, n + y.width > w.width && (f = "left" == f ? "right" : "left", n = 0)), h.setStyle(f, b(("pin" == l ? C : t) + n + ("pin" == l ? 0 : "left" == f ? B : -B)))) : (l = "pin", g("pin"), k(f))
                        }
                    }
                }(); if (l) {
                    var g = new CKEDITOR.template('\x3cdiv id\x3d"cke_{name}" class\x3d"cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} ' +
                        CKEDITOR.env.cssClass + '" dir\x3d"{langDir}" title\x3d"' + (CKEDITOR.env.gecko ? " " : "") + '" lang\x3d"{langCode}" role\x3d"application" style\x3d"{style}"' + (a.title ? ' aria-labelledby\x3d"cke_{name}_arialbl"' : " ") + "\x3e" + (a.title ? '\x3cspan id\x3d"cke_{name}_arialbl" class\x3d"cke_voice_label"\x3e{voiceLabel}\x3c/span\x3e' : " ") + '\x3cdiv class\x3d"cke_inner"\x3e\x3cdiv id\x3d"{topId}" class\x3d"cke_top" role\x3d"presentation"\x3e{content}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'), h = CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(g.output({
                            content: l,
                            id: a.id, langDir: a.lang.dir, langCode: a.langCode, name: a.name, style: "display:none;z-index:" + (d.baseFloatZIndex - 1), topId: a.ui.spaceId("top"), voiceLabel: a.title
                        }))), m = CKEDITOR.tools.eventsBuffer(500, k), f = CKEDITOR.tools.eventsBuffer(100, k); h.unselectable(); h.on("mousedown", function (a) { a = a.data; a.getTarget().hasAscendant("a", 1) || a.preventDefault() }); a.on("focus", function (b) { k(b); a.on("change", m.input); e.on("scroll", f.input); e.on("resize", f.input) }); a.on("blur", function () {
                            h.hide(); a.removeListener("change",
                                m.input); e.removeListener("scroll", f.input); e.removeListener("resize", f.input)
                        }); a.on("destroy", function () { e.removeListener("scroll", f.input); e.removeListener("resize", f.input); h.clearCustomData(); h.remove() }); a.focusManager.hasFocus && h.show(); a.focusManager.add(h, 1)
                }
            } var e = CKEDITOR.document.getWindow(), b = CKEDITOR.tools.cssLength; CKEDITOR.plugins.add("floatingspace", { init: function (b) { b.on("loaded", function () { a(this) }, null, null, 20) } })
        }(), CKEDITOR.plugins.add("listblock", {
            requires: "panel", onLoad: function () {
                var a =
                    CKEDITOR.addTemplate("panel-list", '\x3cul role\x3d"presentation" class\x3d"cke_panel_list"\x3e{items}\x3c/ul\x3e'), e = CKEDITOR.addTemplate("panel-list-item", '\x3cli id\x3d"{id}" class\x3d"cke_panel_listItem" role\x3dpresentation\x3e\x3ca id\x3d"{id}_option" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"{title}" href\x3d"javascript:void(\'{val}\')"  {onclick}\x3d"CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role\x3d"option"\x3e{text}\x3c/a\x3e\x3c/li\x3e'), b = CKEDITOR.addTemplate("panel-list-group",
                        '\x3ch1 id\x3d"{id}" class\x3d"cke_panel_grouptitle" role\x3d"presentation" \x3e{label}\x3c/h1\x3e'), c = /\'/g; CKEDITOR.ui.panel.prototype.addListBlock = function (a, b) { return this.addBlock(a, new CKEDITOR.ui.listBlock(this.getHolderElement(), b)) }; CKEDITOR.ui.listBlock = CKEDITOR.tools.createClass({
                            base: CKEDITOR.ui.panel.block, $: function (a, b) {
                                b = b || {}; var c = b.attributes || (b.attributes = {}); (this.multiSelect = !!b.multiSelect) && (c["aria-multiselectable"] = !0); !c.role && (c.role = "listbox"); this.base.apply(this, arguments);
                                this.element.setAttribute("role", c.role); c = this.keys; c[40] = "next"; c[9] = "next"; c[38] = "prev"; c[CKEDITOR.SHIFT + 9] = "prev"; c[32] = CKEDITOR.env.ie ? "mouseup" : "click"; CKEDITOR.env.ie && (c[13] = "mouseup"); this._.pendingHtml = []; this._.pendingList = []; this._.items = {}; this._.groups = {}
                            }, _: {
                                close: function () { if (this._.started) { var b = a.output({ items: this._.pendingList.join("") }); this._.pendingList = []; this._.pendingHtml.push(b); delete this._.started } }, getClick: function () {
                                    this._.click || (this._.click = CKEDITOR.tools.addFunction(function (a) {
                                        var b =
                                            this.toggle(a); if (this.onClick) this.onClick(a, b)
                                    }, this)); return this._.click
                                }
                            }, proto: {
                                add: function (a, b, k) { var g = CKEDITOR.tools.getNextId(); this._.started || (this._.started = 1, this._.size = this._.size || 0); this._.items[a] = g; var h; h = CKEDITOR.tools.htmlEncodeAttr(a).replace(c, "\\'"); a = { id: g, val: h, onclick: CKEDITOR.env.ie ? 'onclick\x3d"return false;" onmouseup' : "onclick", clickFn: this._.getClick(), title: CKEDITOR.tools.htmlEncodeAttr(k || a), text: b || a }; this._.pendingList.push(e.output(a)) }, startGroup: function (a) {
                                    this._.close();
                                    var c = CKEDITOR.tools.getNextId(); this._.groups[a] = c; this._.pendingHtml.push(b.output({ id: c, label: a }))
                                }, commit: function () { this._.close(); this.element.appendHtml(this._.pendingHtml.join("")); delete this._.size; this._.pendingHtml = [] }, toggle: function (a) { var b = this.isMarked(a); b ? this.unmark(a) : this.mark(a); return !b }, hideGroup: function (a) { var b = (a = this.element.getDocument().getById(this._.groups[a])) && a.getNext(); a && (a.setStyle("display", "none"), b && "ul" == b.getName() && b.setStyle("display", "none")) }, hideItem: function (a) {
                                    this.element.getDocument().getById(this._.items[a]).setStyle("display",
                                        "none")
                                }, showAll: function () { var a = this._.items, b = this._.groups, c = this.element.getDocument(), e; for (e in a) c.getById(a[e]).setStyle("display", ""); for (var h in b) a = c.getById(b[h]), e = a.getNext(), a.setStyle("display", ""), e && "ul" == e.getName() && e.setStyle("display", "") }, mark: function (a) { this.multiSelect || this.unmarkAll(); a = this._.items[a]; var b = this.element.getDocument().getById(a); b.addClass("cke_selected"); this.element.getDocument().getById(a + "_option").setAttribute("aria-selected", !0); this.onMark && this.onMark(b) },
                                markFirstDisplayed: function () { var a = this; this._.markFirstDisplayed(function () { a.multiSelect || a.unmarkAll() }) }, unmark: function (a) { var b = this.element.getDocument(); a = this._.items[a]; var c = b.getById(a); c.removeClass("cke_selected"); b.getById(a + "_option").removeAttribute("aria-selected"); this.onUnmark && this.onUnmark(c) }, unmarkAll: function () {
                                    var a = this._.items, b = this.element.getDocument(), c; for (c in a) { var e = a[c]; b.getById(e).removeClass("cke_selected"); b.getById(e + "_option").removeAttribute("aria-selected") } this.onUnmark &&
                                        this.onUnmark()
                                }, isMarked: function (a) { return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected") }, focus: function (a) { this._.focusIndex = -1; var b = this.element.getElementsByTag("a"), c, e = -1; if (a) for (c = this.element.getDocument().getById(this._.items[a]).getFirst(); a = b.getItem(++e);) { if (a.equals(c)) { this._.focusIndex = e; break } } else this.element.focus(); c && setTimeout(function () { c.focus() }, 0) }
                            }
                        })
            }
        }), CKEDITOR.plugins.add("richcombo", {
            requires: "floatpanel,listblock,button", beforeInit: function (a) {
                a.ui.addHandler(CKEDITOR.UI_RICHCOMBO,
                    CKEDITOR.ui.richCombo.handler)
            }
        }), function () {
            var a = '\x3cspan id\x3d"{id}" class\x3d"cke_combo cke_combo__{name} {cls}" role\x3d"presentation"\x3e\x3cspan id\x3d"{id}_label" class\x3d"cke_combo_label"\x3e{label}\x3c/span\x3e\x3ca class\x3d"cke_combo_button" title\x3d"{title}" tabindex\x3d"-1"' + (CKEDITOR.env.gecko && !CKEDITOR.env.hc ? "" : " href\x3d\"javascript:void('{titleJs}')\"") + ' hidefocus\x3d"true" role\x3d"button" aria-labelledby\x3d"{id}_label" aria-haspopup\x3d"true"'; CKEDITOR.env.gecko && CKEDITOR.env.mac &&
                (a += ' onkeypress\x3d"return false;"'); CKEDITOR.env.gecko && (a += ' onblur\x3d"this.style.cssText \x3d this.style.cssText;"'); var a = a + (' onkeydown\x3d"return CKEDITOR.tools.callFunction({keydownFn},event,this);" onfocus\x3d"return CKEDITOR.tools.callFunction({focusFn},event);" ' + (CKEDITOR.env.ie ? 'onclick\x3d"return false;" onmouseup' : "onclick") + '\x3d"CKEDITOR.tools.callFunction({clickFn},this);return false;"\x3e\x3cspan id\x3d"{id}_text" class\x3d"cke_combo_text cke_combo_inlinelabel"\x3e{label}\x3c/span\x3e\x3cspan class\x3d"cke_combo_open"\x3e\x3cspan class\x3d"cke_combo_arrow"\x3e' +
                    (CKEDITOR.env.hc ? "\x26#9660;" : CKEDITOR.env.air ? "\x26nbsp;" : "") + "\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e\x3c/span\x3e"), e = CKEDITOR.addTemplate("combo", a); CKEDITOR.UI_RICHCOMBO = "richcombo"; CKEDITOR.ui.richCombo = CKEDITOR.tools.createClass({
                        $: function (a) {
                            CKEDITOR.tools.extend(this, a, { canGroup: !1, title: a.label, modes: { wysiwyg: 1 }, editorFocus: 1 }); a = this.panel || {}; delete this.panel; this.id = CKEDITOR.tools.getNextNumber(); this.document = a.parent && a.parent.getDocument() || CKEDITOR.document; a.className = "cke_combopanel";
                            a.block = { multiSelect: a.multiSelect, attributes: a.attributes }; a.toolbarRelated = !0; this._ = { panelDefinition: a, items: {} }
                        }, proto: {
                            renderHtml: function (a) { var c = []; this.render(a, c); return c.join("") }, render: function (a, c) {
                                function d() { if (this.getState() != CKEDITOR.TRISTATE_ON) { var c = this.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED; a.readOnly && !this.readOnly && (c = CKEDITOR.TRISTATE_DISABLED); this.setState(c); this.setValue(""); c != CKEDITOR.TRISTATE_DISABLED && this.refresh && this.refresh() } } var l =
                                    CKEDITOR.env, k = "cke_" + this.id, g = CKEDITOR.tools.addFunction(function (c) { r && (a.unlockSelection(1), r = 0); m.execute(c) }, this), h = this, m = { id: k, combo: this, focus: function () { CKEDITOR.document.getById(k).getChild(1).focus() }, execute: function (c) { var d = h._; if (d.state != CKEDITOR.TRISTATE_DISABLED) if (h.createPanel(a), d.on) d.panel.hide(); else { h.commit(); var f = h.getValue(); f ? d.list.mark(f) : d.list.unmarkAll(); d.panel.showBlock(h.id, new CKEDITOR.dom.element(c), 4) } }, clickFn: g }; a.on("activeFilterChange", d, this); a.on("mode",
                                        d, this); a.on("selectionChange", d, this); !this.readOnly && a.on("readOnly", d, this); var f = CKEDITOR.tools.addFunction(function (a, b) { a = new CKEDITOR.dom.event(a); var c = a.getKeystroke(); switch (c) { case 13: case 32: case 40: CKEDITOR.tools.callFunction(g, b); break; default: m.onkey(m, c) }a.preventDefault() }), n = CKEDITOR.tools.addFunction(function () { m.onfocus && m.onfocus() }), r = 0; m.keyDownFn = f; l = {
                                            id: k, name: this.name || this.command, label: this.label, title: this.title, cls: this.className || "", titleJs: l.gecko && !l.hc ? "" : (this.title ||
                                                "").replace("'", ""), keydownFn: f, focusFn: n, clickFn: g
                                        }; e.output(l, c); if (this.onRender) this.onRender(); return m
                            }, createPanel: function (a) {
                                if (!this._.panel) {
                                    var c = this._.panelDefinition, d = this._.panelDefinition.block, e = c.parent || CKEDITOR.document.getBody(), k = "cke_combopanel__" + this.name, g = new CKEDITOR.ui.floatPanel(a, e, c), c = g.addListBlock(this.id, d), h = this; g.onShow = function () { this.element.addClass(k); h.setState(CKEDITOR.TRISTATE_ON); h._.on = 1; h.editorFocus && !a.focusManager.hasFocus && a.focus(); if (h.onOpen) h.onOpen() };
                                    g.onHide = function (c) { this.element.removeClass(k); h.setState(h.modes && h.modes[a.mode] ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); h._.on = 0; if (!c && h.onClose) h.onClose() }; g.onEscape = function () { g.hide(1) }; c.onClick = function (a, b) { h.onClick && h.onClick.call(h, a, b); g.hide() }; this._.panel = g; this._.list = c; g.getBlock(this.id).onHide = function () { h._.on = 0; h.setState(CKEDITOR.TRISTATE_OFF) }; this.init && this.init()
                                }
                            }, setValue: function (a, c) {
                                this._.value = a; var d = this.document.getById("cke_" + this.id + "_text"); d &&
                                    (a || c ? d.removeClass("cke_combo_inlinelabel") : (c = this.label, d.addClass("cke_combo_inlinelabel")), d.setText("undefined" != typeof c ? c : a))
                            }, getValue: function () { return this._.value || "" }, unmarkAll: function () { this._.list.unmarkAll() }, mark: function (a) { this._.list.mark(a) }, hideItem: function (a) { this._.list.hideItem(a) }, hideGroup: function (a) { this._.list.hideGroup(a) }, showAll: function () { this._.list.showAll() }, add: function (a, c, d) { this._.items[a] = d || a; this._.list.add(a, c, d) }, startGroup: function (a) { this._.list.startGroup(a) },
                            commit: function () { this._.committed || (this._.list.commit(), this._.committed = 1, CKEDITOR.ui.fire("ready", this)); this._.committed = 1 }, setState: function (a) { if (this._.state != a) { var c = this.document.getById("cke_" + this.id); c.setState(a, "cke_combo"); a == CKEDITOR.TRISTATE_DISABLED ? c.setAttribute("aria-disabled", !0) : c.removeAttribute("aria-disabled"); this._.state = a } }, getState: function () { return this._.state }, enable: function () { this._.state == CKEDITOR.TRISTATE_DISABLED && this.setState(this._.lastState) }, disable: function () {
                                this._.state !=
                                CKEDITOR.TRISTATE_DISABLED && (this._.lastState = this._.state, this.setState(CKEDITOR.TRISTATE_DISABLED))
                            }
                        }, statics: { handler: { create: function (a) { return new CKEDITOR.ui.richCombo(a) } } }
                    }); CKEDITOR.ui.prototype.addRichCombo = function (a, c) { this.add(a, CKEDITOR.UI_RICHCOMBO, c) }
        }(), CKEDITOR.plugins.add("format", {
            requires: "richcombo", init: function (a) {
                if (!a.blockless) {
                    for (var e = a.config, b = a.lang.format, c = e.format_tags.split(";"), d = {}, l = 0, k = [], g = 0; g < c.length; g++) {
                        var h = c[g], m = new CKEDITOR.style(e["format_" + h]);
                        if (!a.filter.customConfig || a.filter.check(m)) l++, d[h] = m, d[h]._.enterMode = a.config.enterMode, k.push(m)
                    } 0 !== l && a.ui.addRichCombo("Format", {
                        label: b.label, title: b.panelTitle, toolbar: "styles,20", allowedContent: k, panel: { css: [CKEDITOR.skin.getPath("editor")].concat(e.contentsCss), multiSelect: !1, attributes: { "aria-label": b.panelTitle } }, init: function () { this.startGroup(b.panelTitle); for (var a in d) { var c = b["tag_" + a]; this.add(a, d[a].buildPreview(c), c) } }, onClick: function (b) {
                            a.focus(); a.fire("saveSnapshot"); b =
                                d[b]; var c = a.elementPath(); b.checkActive(c, a) || a.applyStyle(b); setTimeout(function () { a.fire("saveSnapshot") }, 0)
                        }, onRender: function () { a.on("selectionChange", function (b) { var c = this.getValue(); b = b.data.path; this.refresh(); for (var e in d) if (d[e].checkActive(b, a)) { e != c && this.setValue(e, a.lang.format["tag_" + e]); return } this.setValue("") }, this) }, onOpen: function () { this.showAll(); for (var b in d) a.activeFilter.check(d[b]) || this.hideItem(b) }, refresh: function () {
                            var b = a.elementPath(); if (b) {
                                if (b.isContextFor("p")) for (var c in d) if (a.activeFilter.check(d[c])) return;
                                this.setState(CKEDITOR.TRISTATE_DISABLED)
                            }
                        }
                    })
                }
            }
        }), CKEDITOR.config.format_tags = "p;h1;h2;h3;h4;h5;h6;pre;address;div", CKEDITOR.config.format_p = { element: "p" }, CKEDITOR.config.format_div = { element: "div" }, CKEDITOR.config.format_pre = { element: "pre" }, CKEDITOR.config.format_address = { element: "address" }, CKEDITOR.config.format_h1 = { element: "h1" }, CKEDITOR.config.format_h2 = { element: "h2" }, CKEDITOR.config.format_h3 = { element: "h3" }, CKEDITOR.config.format_h4 = { element: "h4" }, CKEDITOR.config.format_h5 = { element: "h5" }, CKEDITOR.config.format_h6 =
        { element: "h6" }, function () { var a = { canUndo: !1, exec: function (a) { var b = a.document.createElement("hr"); a.insertElement(b) }, allowedContent: "hr", requiredContent: "hr" }; CKEDITOR.plugins.add("horizontalrule", { init: function (e) { e.blockless || (e.addCommand("horizontalrule", a), e.ui.addButton && e.ui.addButton("HorizontalRule", { label: e.lang.horizontalrule.toolbar, command: "horizontalrule", toolbar: "insert,40" })) } }) }(), CKEDITOR.plugins.add("htmlwriter", {
            init: function (a) {
                var e = new CKEDITOR.htmlWriter; e.forceSimpleAmpersand =
                    a.config.forceSimpleAmpersand; e.indentationChars = a.config.dataIndentationChars || "\t"; a.dataProcessor.writer = e
            }
        }), CKEDITOR.htmlWriter = CKEDITOR.tools.createClass({
            base: CKEDITOR.htmlParser.basicWriter, $: function () {
                this.base(); this.indentationChars = "\t"; this.selfClosingEnd = " /\x3e"; this.lineBreakChars = "\n"; this.sortAttributes = 1; this._.indent = 0; this._.indentation = ""; this._.inPre = 0; this._.rules = {}; var a = CKEDITOR.dtd, e; for (e in CKEDITOR.tools.extend({}, a.$nonBodyContent, a.$block, a.$listItem, a.$tableContent)) this.setRules(e,
                    { indent: !a[e]["#"], breakBeforeOpen: 1, breakBeforeClose: !a[e]["#"], breakAfterClose: 1, needsSpace: e in a.$block && !(e in { li: 1, dt: 1, dd: 1 }) }); this.setRules("br", { breakAfterOpen: 1 }); this.setRules("title", { indent: 0, breakAfterOpen: 0 }); this.setRules("style", { indent: 0, breakBeforeClose: 1 }); this.setRules("pre", { breakAfterOpen: 1, indent: 0 })
            }, proto: {
                openTag: function (a) {
                    var e = this._.rules[a]; this._.afterCloser && e && e.needsSpace && this._.needsSpace && this._.output.push("\n"); this._.indent ? this.indentation() : e && e.breakBeforeOpen &&
                        (this.lineBreak(), this.indentation()); this._.output.push("\x3c", a); this._.afterCloser = 0
                }, openTagClose: function (a, e) { var b = this._.rules[a]; e ? (this._.output.push(this.selfClosingEnd), b && b.breakAfterClose && (this._.needsSpace = b.needsSpace)) : (this._.output.push("\x3e"), b && b.indent && (this._.indentation += this.indentationChars)); b && b.breakAfterOpen && this.lineBreak(); "pre" == a && (this._.inPre = 1) }, attribute: function (a, e) {
                    "string" == typeof e && (this.forceSimpleAmpersand && (e = e.replace(/&amp;/g, "\x26")), e = CKEDITOR.tools.htmlEncodeAttr(e));
                    this._.output.push(" ", a, '\x3d"', e, '"')
                }, closeTag: function (a) { var e = this._.rules[a]; e && e.indent && (this._.indentation = this._.indentation.substr(this.indentationChars.length)); this._.indent ? this.indentation() : e && e.breakBeforeClose && (this.lineBreak(), this.indentation()); this._.output.push("\x3c/", a, "\x3e"); "pre" == a && (this._.inPre = 0); e && e.breakAfterClose && (this.lineBreak(), this._.needsSpace = e.needsSpace); this._.afterCloser = 1 }, text: function (a) {
                    this._.indent && (this.indentation(), !this._.inPre && (a = CKEDITOR.tools.ltrim(a)));
                    this._.output.push(a)
                }, comment: function (a) { this._.indent && this.indentation(); this._.output.push("\x3c!--", a, "--\x3e") }, lineBreak: function () { !this._.inPre && 0 < this._.output.length && this._.output.push(this.lineBreakChars); this._.indent = 1 }, indentation: function () { !this._.inPre && this._.indentation && this._.output.push(this._.indentation); this._.indent = 0 }, reset: function () { this._.output = []; this._.indent = 0; this._.indentation = ""; this._.afterCloser = 0; this._.inPre = 0; this._.needsSpace = 0 }, setRules: function (a, e) {
                    var b =
                        this._.rules[a]; b ? CKEDITOR.tools.extend(b, e, !0) : this._.rules[a] = e
                }
            }
        }), function () {
            function a(a, c) { c || (c = a.getSelection().getSelectedElement()); if (c && c.is("img") && !c.data("cke-realelement") && !c.isReadOnly()) return c } function e(a) { var c = a.getStyle("float"); if ("inherit" == c || "none" == c) c = 0; c || (c = a.getAttribute("align")); return c } CKEDITOR.plugins.add("image", {
                requires: "dialog", init: function (b) {
                    if (!b.plugins.detectConflict("image", ["easyimage", "image2"])) {
                        CKEDITOR.dialog.add("image", this.path + "dialogs/image.js");
                        var c = "img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}"; CKEDITOR.dialog.isTabEnabled(b, "image", "advanced") && (c = "img[alt,dir,id,lang,longdesc,!src,title]{*}(*)"); b.addCommand("image", new CKEDITOR.dialogCommand("image", { allowedContent: c, requiredContent: "img[alt,src]", contentTransformations: [["img{width}: sizeToStyle", "img[width]: sizeToAttribute"], ["img{float}: alignmentToStyle", "img[align]: alignmentToAttribute"]] })); b.ui.addButton &&
                            b.ui.addButton("Image", { label: b.lang.common.image, command: "image", toolbar: "insert,10" }); b.on("doubleclick", function (a) { var b = a.data.element; !b.is("img") || b.data("cke-realelement") || b.isReadOnly() || (a.data.dialog = "image") }); b.addMenuItems && b.addMenuItems({ image: { label: b.lang.image.menu, command: "image", group: "image" } }); b.contextMenu && b.contextMenu.addListener(function (c) { if (a(b, c)) return { image: CKEDITOR.TRISTATE_OFF } })
                    }
                }, afterInit: function (b) {
                    function c(c) {
                        var l = b.getCommand("justify" + c); if (l) {
                            if ("left" ==
                                c || "right" == c) l.on("exec", function (k) { var g = a(b), h; g && (h = e(g), h == c ? (g.removeStyle("float"), c == e(g) && g.removeAttribute("align")) : g.setStyle("float", c), k.cancel()) }); l.on("refresh", function (k) { var g = a(b); g && (g = e(g), this.setState(g == c ? CKEDITOR.TRISTATE_ON : "right" == c || "left" == c ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED), k.cancel()) })
                        }
                    } b.plugins.image2 || (c("left"), c("right"), c("center"), c("block"))
                }
            })
        }(), CKEDITOR.config.image_removeLinkByEmptyURL = !0, function () {
            function a(a, b) {
                var d = c.exec(a), e =
                    c.exec(b); if (d) { if (!d[2] && "px" == e[2]) return e[1]; if ("px" == d[2] && !e[2]) return e[1] + "px" } return b
            } var e = CKEDITOR.htmlParser.cssStyle, b = CKEDITOR.tools.cssLength, c = /^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i, d = {
                elements: {
                    $: function (b) {
                        var c = b.attributes; if ((c = (c = (c = c && c["data-cke-realelement"]) && new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(c))) && c.children[0]) && b.attributes["data-cke-resizable"]) {
                            var d = (new e(b)).rules; b = c.attributes; var h = d.width, d = d.height; h && (b.width = a(b.width, h)); d && (b.height =
                                a(b.height, d))
                        } return c
                    }
                }
            }; CKEDITOR.plugins.add("fakeobjects", { init: function (a) { a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}", "fakeobjects") }, afterInit: function (a) { (a = (a = a.dataProcessor) && a.htmlFilter) && a.addRules(d, { applyToAll: !0 }) } }); CKEDITOR.editor.prototype.createFakeElement = function (a, c, d, h) {
                var m = this.lang.fakeobjects, m = m[d] || m.unknown; c = {
                    "class": c, "data-cke-realelement": encodeURIComponent(a.getOuterHtml()), "data-cke-real-node-type": a.type, alt: m, title: m, align: a.getAttribute("align") ||
                        ""
                }; CKEDITOR.env.hc || (c.src = CKEDITOR.tools.transparentImageData); d && (c["data-cke-real-element-type"] = d); h && (c["data-cke-resizable"] = h, d = new e, h = a.getAttribute("width"), a = a.getAttribute("height"), h && (d.rules.width = b(h)), a && (d.rules.height = b(a)), d.populate(c)); return this.document.createElement("img", { attributes: c })
            }; CKEDITOR.editor.prototype.createFakeParserElement = function (a, c, d, h) {
                var m = this.lang.fakeobjects, m = m[d] || m.unknown, f; f = new CKEDITOR.htmlParser.basicWriter; a.writeHtml(f); f = f.getHtml(); c =
                    { "class": c, "data-cke-realelement": encodeURIComponent(f), "data-cke-real-node-type": a.type, alt: m, title: m, align: a.attributes.align || "" }; CKEDITOR.env.hc || (c.src = CKEDITOR.tools.transparentImageData); d && (c["data-cke-real-element-type"] = d); h && (c["data-cke-resizable"] = h, h = a.attributes, a = new e, d = h.width, h = h.height, void 0 !== d && (a.rules.width = b(d)), void 0 !== h && (a.rules.height = b(h)), a.populate(c)); return new CKEDITOR.htmlParser.element("img", c)
            }; CKEDITOR.editor.prototype.restoreRealElement = function (b) {
                if (b.data("cke-real-node-type") !=
                    CKEDITOR.NODE_ELEMENT) return null; var c = CKEDITOR.dom.element.createFromHtml(decodeURIComponent(b.data("cke-realelement")), this.document); if (b.data("cke-resizable")) { var d = b.getStyle("width"); b = b.getStyle("height"); d && c.setAttribute("width", a(c.getAttribute("width"), d)); b && c.setAttribute("height", a(c.getAttribute("height"), b)) } return c
            }
        }(), "use strict", function () {
            function a(a) { return a.replace(/'/g, "\\$\x26") } function e(a) {
                for (var b, c = a.length, d = [], e = 0; e < c; e++)b = a.charCodeAt(e), d.push(b); return "String.fromCharCode(" +
                    d.join(",") + ")"
            } function b(b, c) { var d = b.plugins.link, e = d.compiledProtectionFunction.params, f, g; g = [d.compiledProtectionFunction.name, "("]; for (var h = 0; h < e.length; h++)d = e[h].toLowerCase(), f = c[d], 0 < h && g.push(","), g.push("'", f ? a(encodeURIComponent(c[d])) : "", "'"); g.push(")"); return g.join("") } function c(a) { a = a.config.emailProtection || ""; var b; a && "encode" != a && (b = {}, a.replace(/^([^(]+)\(([^)]+)\)$/, function (a, c, d) { b.name = c; b.params = []; d.replace(/[^,\s]+/g, function (a) { b.params.push(a) }) })); return b } CKEDITOR.plugins.add("link",
                {
                    requires: "dialog,fakeobjects", onLoad: function () {
                        function a(b) { return c.replace(/%1/g, "rtl" == b ? "right" : "left").replace(/%2/g, "cke_contents_" + b) } var b = "background:url(" + CKEDITOR.getUrl(this.path + "images" + (CKEDITOR.env.hidpi ? "/hidpi" : "") + "/anchor.png") + ") no-repeat %1 center;border:1px dotted #00f;background-size:16px;", c = ".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{" + b + "padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{" + b + "width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}";
                        CKEDITOR.addCss(a("ltr") + a("rtl"))
                    }, init: function (a) {
                        var b = "a[!href]"; CKEDITOR.dialog.isTabEnabled(a, "link", "advanced") && (b = b.replace("]", ",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type,download]{*}(*)")); CKEDITOR.dialog.isTabEnabled(a, "link", "target") && (b = b.replace("]", ",target,onclick]")); a.addCommand("link", new CKEDITOR.dialogCommand("link", { allowedContent: b, requiredContent: "a[href]" })); a.addCommand("anchor", new CKEDITOR.dialogCommand("anchor", { allowedContent: "a[!name,id]", requiredContent: "a[name]" }));
                        a.addCommand("unlink", new CKEDITOR.unlinkCommand); a.addCommand("removeAnchor", new CKEDITOR.removeAnchorCommand); a.setKeystroke(CKEDITOR.CTRL + 76, "link"); a.ui.addButton && (a.ui.addButton("Link", { label: a.lang.link.toolbar, command: "link", toolbar: "links,10" }), a.ui.addButton("Unlink", { label: a.lang.link.unlink, command: "unlink", toolbar: "links,20" }), a.ui.addButton("Anchor", { label: a.lang.link.anchor.toolbar, command: "anchor", toolbar: "links,30" })); CKEDITOR.dialog.add("link", this.path + "dialogs/link.js"); CKEDITOR.dialog.add("anchor",
                            this.path + "dialogs/anchor.js"); a.on("doubleclick", function (b) { var c = b.data.element.getAscendant({ a: 1, img: 1 }, !0); c && !c.isReadOnly() && (c.is("a") ? (b.data.dialog = !c.getAttribute("name") || c.getAttribute("href") && c.getChildCount() ? "link" : "anchor", b.data.link = c) : CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, c) && (b.data.dialog = "anchor")) }, null, null, 0); a.on("doubleclick", function (b) { b.data.dialog in { link: 1, anchor: 1 } && b.data.link && a.getSelection().selectElement(b.data.link) }, null, null, 20); a.addMenuItems && a.addMenuItems({
                                anchor: {
                                    label: a.lang.link.anchor.menu,
                                    command: "anchor", group: "anchor", order: 1
                                }, removeAnchor: { label: a.lang.link.anchor.remove, command: "removeAnchor", group: "anchor", order: 5 }, link: { label: a.lang.link.menu, command: "link", group: "link", order: 1 }, unlink: { label: a.lang.link.unlink, command: "unlink", group: "link", order: 5 }
                            }); a.contextMenu && a.contextMenu.addListener(function (b) {
                                if (!b || b.isReadOnly()) return null; b = CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, b); if (!b && !(b = CKEDITOR.plugins.link.getSelectedLink(a))) return null; var c = {}; b.getAttribute("href") &&
                                    b.getChildCount() && (c = { link: CKEDITOR.TRISTATE_OFF, unlink: CKEDITOR.TRISTATE_OFF }); b && b.hasAttribute("name") && (c.anchor = c.removeAnchor = CKEDITOR.TRISTATE_OFF); return c
                            }); this.compiledProtectionFunction = c(a)
                    }, afterInit: function (a) {
                        a.dataProcessor.dataFilter.addRules({ elements: { a: function (b) { return b.attributes.name ? b.children.length ? null : a.createFakeParserElement(b, "cke_anchor", "anchor") : null } } }); var b = a._.elementsPath && a._.elementsPath.filters; b && b.push(function (b, c) {
                            if ("a" == c && (CKEDITOR.plugins.link.tryRestoreFakeAnchor(a,
                                b) || b.getAttribute("name") && (!b.getAttribute("href") || !b.getChildCount()))) return "anchor"
                        })
                    }
                }); var d = /^javascript:/, l = /^mailto:([^?]+)(?:\?(.+))?$/, k = /subject=([^;?:@&=$,\/]*)/i, g = /body=([^;?:@&=$,\/]*)/i, h = /^#(.*)$/, m = /^((?:http|https|ftp|news):\/\/)?(.*)$/, f = /^(_(?:self|top|parent|blank))$/, n = /^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/, r = /^javascript:([^(]+)\(([^)]+)\)$/, u = /\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,
                    v = /(?:^|,)([^=]+)=(\d+|yes|no)/gi, y = { id: "advId", dir: "advLangDir", accessKey: "advAccessKey", name: "advName", lang: "advLangCode", tabindex: "advTabIndex", title: "advTitle", type: "advContentType", "class": "advCSSClasses", charset: "advCharset", style: "advStyles", rel: "advRel" }; CKEDITOR.plugins.link = {
                        getSelectedLink: function (a, b) {
                            var c = a.getSelection(), d = c.getSelectedElement(), e = c.getRanges(), f = [], g; if (!b && d && d.is("a")) return d; for (d = 0; d < e.length; d++)if (g = c.getRanges()[d], g.shrink(CKEDITOR.SHRINK_ELEMENT, !0, { skipBogus: !0 }),
                                (g = a.elementPath(g.getCommonAncestor()).contains("a", 1)) && b) f.push(g); else if (g) return g; return b ? f : null
                        }, getEditorAnchors: function (a) {
                            for (var b = a.editable(), c = b.isInline() && !a.plugins.divarea ? a.document : b, b = c.getElementsByTag("a"), c = c.getElementsByTag("img"), d = [], e = 0, f; f = b.getItem(e++);)(f.data("cke-saved-name") || f.hasAttribute("name")) && d.push({ name: f.data("cke-saved-name") || f.getAttribute("name"), id: f.getAttribute("id") }); for (e = 0; f = c.getItem(e++);)(f = this.tryRestoreFakeAnchor(a, f)) && d.push({
                                name: f.getAttribute("name"),
                                id: f.getAttribute("id")
                            }); return d
                        }, fakeAnchor: !0, tryRestoreFakeAnchor: function (a, b) { if (b && b.data("cke-real-element-type") && "anchor" == b.data("cke-real-element-type")) { var c = a.restoreRealElement(b); if (c.data("cke-saved-name")) return c } }, parseLinkAttributes: function (a, b) {
                            var c = b && (b.data("cke-saved-href") || b.getAttribute("href")) || "", e = a.plugins.link.compiledProtectionFunction, t = a.config.emailProtection, x, C = {}; c.match(d) && ("encode" == t ? c = c.replace(n, function (a, b, c) {
                                c = c || ""; return "mailto:" + String.fromCharCode.apply(String,
                                    b.split(",")) + c.replace(/\\'/g, "'")
                            }) : t && c.replace(r, function (a, b, c) { if (b == e.name) { C.type = "email"; a = C.email = {}; b = /(^')|('$)/g; c = c.match(/[^,\s]+/g); for (var d = c.length, f, g, h = 0; h < d; h++)f = decodeURIComponent, g = c[h].replace(b, "").replace(/\\'/g, "'"), g = f(g), f = e.params[h].toLowerCase(), a[f] = g; a.address = [a.name, a.domain].join("@") } })); if (!C.type) if (t = c.match(h)) C.type = "anchor", C.anchor = {}, C.anchor.name = C.anchor.id = t[1]; else if (t = c.match(l)) {
                                x = c.match(k); c = c.match(g); C.type = "email"; var z = C.email = {}; z.address =
                                    t[1]; x && (z.subject = decodeURIComponent(x[1])); c && (z.body = decodeURIComponent(c[1]))
                            } else c && (x = c.match(m)) && (C.type = "url", C.url = {}, C.url.protocol = x[1], C.url.url = x[2]); if (b) {
                                if (c = b.getAttribute("target")) C.target = { type: c.match(f) ? c : "frame", name: c }; else if (c = (c = b.data("cke-pa-onclick") || b.getAttribute("onclick")) && c.match(u)) for (C.target = { type: "popup", name: c[1] }; t = v.exec(c[2]);)"yes" != t[2] && "1" != t[2] || t[1] in { height: 1, width: 1, top: 1, left: 1 } ? isFinite(t[2]) && (C.target[t[1]] = t[2]) : C.target[t[1]] = !0; null !==
                                    b.getAttribute("download") && (C.download = !0); var c = {}, A; for (A in y) (t = b.getAttribute(A)) && (c[y[A]] = t); if (A = b.data("cke-saved-name") || c.advName) c.advName = A; CKEDITOR.tools.isEmpty(c) || (C.advanced = c)
                            } return C
                        }, getLinkAttributes: function (c, d) {
                            var f = c.config.emailProtection || "", g = {}; switch (d.type) {
                                case "url": var f = d.url && void 0 !== d.url.protocol ? d.url.protocol : "http://", h = d.url && CKEDITOR.tools.trim(d.url.url) || ""; g["data-cke-saved-href"] = 0 === h.indexOf("/") ? h : f + h; break; case "anchor": f = d.anchor && d.anchor.id;
                                    g["data-cke-saved-href"] = "#" + (d.anchor && d.anchor.name || f || ""); break; case "email": var k = d.email, h = k.address; switch (f) {
                                        case "": case "encode": var l = encodeURIComponent(k.subject || ""), m = encodeURIComponent(k.body || ""), k = []; l && k.push("subject\x3d" + l); m && k.push("body\x3d" + m); k = k.length ? "?" + k.join("\x26") : ""; "encode" == f ? (f = ["javascript:void(location.href\x3d'mailto:'+", e(h)], k && f.push("+'", a(k), "'"), f.push(")")) : f = ["mailto:", h, k]; break; default: f = h.split("@", 2), k.name = f[0], k.domain = f[1], f = ["javascript:", b(c,
                                            k)]
                                    }g["data-cke-saved-href"] = f.join("")
                            }if (d.target) if ("popup" == d.target.type) { for (var f = ["window.open(this.href, '", d.target.name || "", "', '"], n = "resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "), h = n.length, l = function (a) { d.target[a] && n.push(a + "\x3d" + d.target[a]) }, k = 0; k < h; k++)n[k] += d.target[n[k]] ? "\x3dyes" : "\x3dno"; l("width"); l("left"); l("height"); l("top"); f.push(n.join(","), "'); return false;"); g["data-cke-pa-onclick"] = f.join("") } else "notSet" != d.target.type && d.target.name &&
                                (g.target = d.target.name); d.download && (g.download = ""); if (d.advanced) { for (var r in y) (f = d.advanced[y[r]]) && (g[r] = f); g.name && (g["data-cke-saved-name"] = g.name) } g["data-cke-saved-href"] && (g.href = g["data-cke-saved-href"]); r = { target: 1, onclick: 1, "data-cke-pa-onclick": 1, "data-cke-saved-name": 1, download: 1 }; d.advanced && CKEDITOR.tools.extend(r, y); for (var u in g) delete r[u]; return { set: g, removed: CKEDITOR.tools.objectKeys(r) }
                        }, showDisplayTextForElement: function (a, b) {
                            var c = {
                                img: 1, table: 1, tbody: 1, thead: 1, tfoot: 1,
                                input: 1, select: 1, textarea: 1
                            }, d = b.getSelection(); return b.widgets && b.widgets.focused || d && 1 < d.getRanges().length ? !1 : !a || !a.getName || !a.is(c)
                        }
                    }; CKEDITOR.unlinkCommand = function () { }; CKEDITOR.unlinkCommand.prototype = {
                        exec: function (a) {
                            if (CKEDITOR.env.ie) {
                                var b = a.getSelection().getRanges()[0], c = b.getPreviousEditableNode() && b.getPreviousEditableNode().getAscendant("a", !0) || b.getNextEditableNode() && b.getNextEditableNode().getAscendant("a", !0), d; b.collapsed && c && (d = b.createBookmark(), b.selectNodeContents(c),
                                    b.select())
                            } c = new CKEDITOR.style({ element: "a", type: CKEDITOR.STYLE_INLINE, alwaysRemoveElement: 1 }); a.removeStyle(c); d && (b.moveToBookmark(d), b.select())
                        }, refresh: function (a, b) { var c = b.lastElement && b.lastElement.getAscendant("a", !0); c && "a" == c.getName() && c.getAttribute("href") && c.getChildCount() ? this.setState(CKEDITOR.TRISTATE_OFF) : this.setState(CKEDITOR.TRISTATE_DISABLED) }, contextSensitive: 1, startDisabled: 1, requiredContent: "a[href]", editorFocus: 1
                    }; CKEDITOR.removeAnchorCommand = function () { }; CKEDITOR.removeAnchorCommand.prototype =
                        { exec: function (a) { var b = a.getSelection(), c = b.createBookmarks(), d; if (b && (d = b.getSelectedElement()) && (d.getChildCount() ? d.is("a") : CKEDITOR.plugins.link.tryRestoreFakeAnchor(a, d))) d.remove(1); else if (d = CKEDITOR.plugins.link.getSelectedLink(a)) d.hasAttribute("href") ? (d.removeAttributes({ name: 1, "data-cke-saved-name": 1 }), d.removeClass("cke_anchor")) : d.remove(1); b.selectBookmarks(c) }, requiredContent: "a[name]" }; CKEDITOR.tools.extend(CKEDITOR.config, { linkShowAdvancedTab: !0, linkShowTargetTab: !0 })
        }(), "use strict",
        function () {
            function a(a, b, c) { return n(b) && n(c) && c.equals(b.getNext(function (a) { return !(aa(a) || ba(a) || r(a)) })) } function e(a) { this.upper = a[0]; this.lower = a[1]; this.set.apply(this, a.slice(2)) } function b(a) { var b = a.element; if (b && n(b) && (b = b.getAscendant(a.triggers, !0)) && a.editable.contains(b)) { var c = k(b); if ("true" == c.getAttribute("contenteditable")) return b; if (c.is(a.triggers)) return c } return null } function c(a, b, c) { t(a, b); t(a, c); a = b.size.bottom; c = c.size.top; return a && c ? 0 | (a + c) / 2 : a || c } function d(a, b, c) {
                return b =
                    b[c ? "getPrevious" : "getNext"](function (b) { return b && b.type == CKEDITOR.NODE_TEXT && !aa(b) || n(b) && !r(b) && !f(a, b) })
            } function l(a, b, c) { return a > b && a < c } function k(a, b) { if (a.data("cke-editable")) return null; for (b || (a = a.getParent()); a && !a.data("cke-editable");) { if (a.hasAttribute("contenteditable")) return a; a = a.getParent() } return null } function g(a) {
                var b = a.doc, c = F('\x3cspan contenteditable\x3d"false" data-cke-magic-line\x3d"1" style\x3d"' + U + "position:absolute;border-top:1px dashed " + a.boxColor + '"\x3e\x3c/span\x3e',
                    b), d = CKEDITOR.getUrl(this.path + "images/" + (E.hidpi ? "hidpi/" : "") + "icon" + (a.rtl ? "-rtl" : "") + ".png"); A(c, {
                        attach: function () { this.wrap.getParent() || this.wrap.appendTo(a.editable, !0); return this }, lineChildren: [A(F('\x3cspan title\x3d"' + a.editor.lang.magicline.title + '" contenteditable\x3d"false"\x3e\x26#8629;\x3c/span\x3e', b), {
                            base: U + "height:17px;width:17px;" + (a.rtl ? "left" : "right") + ":17px;background:url(" + d + ") center no-repeat " + a.boxColor + ";cursor:pointer;" + (E.hc ? "font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;" :
                                "") + (E.hidpi ? "background-size: 9px 10px;" : ""), looks: ["top:-8px; border-radius: 2px;", "top:-17px; border-radius: 2px 2px 0px 0px;", "top:-1px; border-radius: 0px 0px 2px 2px;"]
                        }), A(F(O, b), { base: T + "left:0px;border-left-color:" + a.boxColor + ";", looks: ["border-width:8px 0 8px 8px;top:-8px", "border-width:8px 0 0 8px;top:-8px", "border-width:0 0 8px 8px;top:0px"] }), A(F(O, b), {
                            base: T + "right:0px;border-right-color:" + a.boxColor + ";", looks: ["border-width:8px 8px 8px 0;top:-8px", "border-width:8px 8px 0 0;top:-8px",
                                "border-width:0 8px 8px 0;top:0px"]
                        })], detach: function () { this.wrap.getParent() && this.wrap.remove(); return this }, mouseNear: function () { t(a, this); var b = a.holdDistance, c = this.size; return c && l(a.mouse.y, c.top - b, c.bottom + b) && l(a.mouse.x, c.left - b, c.right + b) ? !0 : !1 }, place: function () {
                            var b = a.view, c = a.editable, d = a.trigger, f = d.upper, e = d.lower, g = f || e, h = g.getParent(), k = {}; this.trigger = d; f && t(a, f, !0); e && t(a, e, !0); t(a, h, !0); a.inInlineMode && x(a, !0); h.equals(c) ? (k.left = b.scroll.x, k.right = -b.scroll.x, k.width = "") : (k.left =
                                g.size.left - g.size.margin.left + b.scroll.x - (a.inInlineMode ? b.editable.left + b.editable.border.left : 0), k.width = g.size.outerWidth + g.size.margin.left + g.size.margin.right + b.scroll.x, k.right = ""); f && e ? k.top = f.size.margin.bottom === e.size.margin.top ? 0 | f.size.bottom + f.size.margin.bottom / 2 : f.size.margin.bottom < e.size.margin.top ? f.size.bottom + f.size.margin.bottom : f.size.bottom + f.size.margin.bottom - e.size.margin.top : f ? e || (k.top = f.size.bottom + f.size.margin.bottom) : k.top = e.size.top - e.size.margin.top; d.is(S) || l(k.top,
                                    b.scroll.y - 15, b.scroll.y + 5) ? (k.top = a.inInlineMode ? 0 : b.scroll.y, this.look(S)) : d.is(L) || l(k.top, b.pane.bottom - 5, b.pane.bottom + 15) ? (k.top = a.inInlineMode ? b.editable.height + b.editable.padding.top + b.editable.padding.bottom : b.pane.bottom - 1, this.look(L)) : (a.inInlineMode && (k.top -= b.editable.top + b.editable.border.top), this.look(V)); a.inInlineMode && (k.top--, k.top += b.editable.scroll.top, k.left += b.editable.scroll.left); for (var m in k) k[m] = CKEDITOR.tools.cssLength(k[m]); this.setStyles(k)
                        }, look: function (a) {
                            if (this.oldLook !=
                                a) { for (var b = this.lineChildren.length, c; b--;)(c = this.lineChildren[b]).setAttribute("style", c.base + c.looks[0 | a / 2]); this.oldLook = a }
                        }, wrap: new G("span", a.doc)
                    }); for (b = c.lineChildren.length; b--;)c.lineChildren[b].appendTo(c); c.look(V); c.appendTo(c.wrap); c.unselectable(); c.lineChildren[0].on("mouseup", function (b) {
                        c.detach(); h(a, function (b) { var c = a.line.trigger; b[c.is(J) ? "insertBefore" : "insertAfter"](c.is(J) ? c.lower : c.upper) }, !0); a.editor.focus(); E.ie || a.enterMode == CKEDITOR.ENTER_BR || a.hotNode.scrollIntoView();
                        b.data.preventDefault(!0)
                    }); c.on("mousedown", function (a) { a.data.preventDefault(!0) }); a.line = c
            } function h(a, b, c) { var d = new CKEDITOR.dom.range(a.doc), f = a.editor, e; E.ie && a.enterMode == CKEDITOR.ENTER_BR ? e = a.doc.createText(Z) : (e = (e = k(a.element, !0)) && e.data("cke-enter-mode") || a.enterMode, e = new G(K[e], a.doc), e.is("br") || a.doc.createText(Z).appendTo(e)); c && f.fire("saveSnapshot"); b(e); d.moveToPosition(e, CKEDITOR.POSITION_AFTER_START); f.getSelection().selectRanges([d]); a.hotNode = e; c && f.fire("saveSnapshot") }
            function m(a, c) {
                return {
                    canUndo: !0, modes: { wysiwyg: 1 }, exec: function () {
                        function f(b) { var d = E.ie && 9 > E.version ? " " : Z, e = a.hotNode && a.hotNode.getText() == d && a.element.equals(a.hotNode) && a.lastCmdDirection === !!c; h(a, function (d) { e && a.hotNode && a.hotNode.remove(); d[c ? "insertAfter" : "insertBefore"](b); d.setAttributes({ "data-cke-magicline-hot": 1, "data-cke-magicline-dir": !!c }); a.lastCmdDirection = !!c }); E.ie || a.enterMode == CKEDITOR.ENTER_BR || a.hotNode.scrollIntoView(); a.line.detach() } return function (e) {
                            e = e.getSelection().getStartElement();
                            var g; e = e.getAscendant(Q, 1); if (!y(a, e) && e && !e.equals(a.editable) && !e.contains(a.editable)) { (g = k(e)) && "false" == g.getAttribute("contenteditable") && (e = g); a.element = e; g = d(a, e, !c); var h; n(g) && g.is(a.triggers) && g.is(P) && (!d(a, g, !c) || (h = d(a, g, !c)) && n(h) && h.is(a.triggers)) ? f(g) : (h = b(a, e), n(h) && (d(a, h, !c) ? (e = d(a, h, !c)) && n(e) && e.is(a.triggers) && f(h) : f(h))) }
                        }
                    }()
                }
            } function f(a, b) { if (!b || b.type != CKEDITOR.NODE_ELEMENT || !b.$) return !1; var c = a.line; return c.wrap.equals(b) || c.wrap.contains(b) } function n(a) {
                return a &&
                    a.type == CKEDITOR.NODE_ELEMENT && a.$
            } function r(a) { if (!n(a)) return !1; var b; (b = u(a)) || (n(a) ? (b = { left: 1, right: 1, center: 1 }, b = !(!b[a.getComputedStyle("float")] && !b[a.getAttribute("align")])) : b = !1); return b } function u(a) { return !!{ absolute: 1, fixed: 1 }[a.getComputedStyle("position")] } function v(a, b) { return n(b) ? b.is(a.triggers) : null } function y(a, b) { if (!b) return !1; for (var c = b.getParents(1), d = c.length; d--;)for (var f = a.tabuList.length; f--;)if (c[d].hasAttribute(a.tabuList[f])) return !0; return !1 } function p(a, b, c) {
                b =
                b[c ? "getLast" : "getFirst"](function (b) { return a.isRelevant(b) && !b.is(da) }); if (!b) return !1; t(a, b); return c ? b.size.top > a.mouse.y : b.size.bottom < a.mouse.y
            } function w(a) {
                var b = a.editable, c = a.mouse, d = a.view, g = a.triggerOffset; x(a); var h = c.y > (a.inInlineMode ? d.editable.top + d.editable.height / 2 : Math.min(d.editable.height, d.pane.height) / 2), b = b[h ? "getLast" : "getFirst"](function (a) { return !(aa(a) || ba(a)) }); if (!b) return null; f(a, b) && (b = a.line.wrap[h ? "getPrevious" : "getNext"](function (a) { return !(aa(a) || ba(a)) })); if (!n(b) ||
                    r(b) || !v(a, b)) return null; t(a, b); return !h && 0 <= b.size.top && l(c.y, 0, b.size.top + g) ? (a = a.inInlineMode || 0 === d.scroll.y ? S : V, new e([null, b, J, N, a])) : h && b.size.bottom <= d.pane.height && l(c.y, b.size.bottom - g, d.pane.height) ? (a = a.inInlineMode || l(b.size.bottom, d.pane.height - g, d.pane.height) ? L : V, new e([b, null, D, N, a])) : null
            } function q(a) {
                var c = a.mouse, f = a.view, g = a.triggerOffset, h = b(a); if (!h) return null; t(a, h); var g = Math.min(g, 0 | h.size.outerHeight / 2), k = [], m, O; if (l(c.y, h.size.top - 1, h.size.top + g)) O = !1; else if (l(c.y,
                    h.size.bottom - g, h.size.bottom + 1)) O = !0; else return null; if (r(h) || p(a, h, O) || h.getParent().is(X)) return null; var q = d(a, h, !O); if (q) { if (q && q.type == CKEDITOR.NODE_TEXT) return null; if (n(q)) { if (r(q) || !v(a, q) || q.getParent().is(X)) return null; k = [q, h][O ? "reverse" : "concat"]().concat([R, N]) } } else h.equals(a.editable[O ? "getLast" : "getFirst"](a.isRelevant)) ? (x(a), O && l(c.y, h.size.bottom - g, f.pane.height) && l(h.size.bottom, f.pane.height - g, f.pane.height) ? m = L : l(c.y, 0, h.size.top + g) && (m = S)) : m = V, k = [null, h][O ? "reverse" : "concat"]().concat([O ?
                        D : J, N, m, h.equals(a.editable[O ? "getLast" : "getFirst"](a.isRelevant)) ? O ? L : S : V]); return 0 in k ? new e(k) : null
            } function B(a, b, c, d) {
                for (var f = b.getDocumentPosition(), e = {}, g = {}, h = {}, k = {}, l = ca.length; l--;)e[ca[l]] = parseInt(b.getComputedStyle.call(b, "border-" + ca[l] + "-width"), 10) || 0, h[ca[l]] = parseInt(b.getComputedStyle.call(b, "padding-" + ca[l]), 10) || 0, g[ca[l]] = parseInt(b.getComputedStyle.call(b, "margin-" + ca[l]), 10) || 0; c && !d || C(a, d); k.top = f.y - (c ? 0 : a.view.scroll.y); k.left = f.x - (c ? 0 : a.view.scroll.x); k.outerWidth =
                    b.$.offsetWidth; k.outerHeight = b.$.offsetHeight; k.height = k.outerHeight - (h.top + h.bottom + e.top + e.bottom); k.width = k.outerWidth - (h.left + h.right + e.left + e.right); k.bottom = k.top + k.outerHeight; k.right = k.left + k.outerWidth; a.inInlineMode && (k.scroll = { top: b.$.scrollTop, left: b.$.scrollLeft }); return A({ border: e, padding: h, margin: g, ignoreScroll: c }, k, !0)
            } function t(a, b, c) {
                if (!n(b)) return b.size = null; if (!b.size) b.size = {}; else if (b.size.ignoreScroll == c && b.size.date > new Date - M) return null; return A(b.size, B(a, b, c), { date: +new Date },
                    !0)
            } function x(a, b) { a.view.editable = B(a, a.editable, b, !0) } function C(a, b) { a.view || (a.view = {}); var c = a.view; if (!(!b && c && c.date > new Date - M)) { var d = a.win, c = d.getScrollPosition(), d = d.getViewPaneSize(); A(a.view, { scroll: { x: c.x, y: c.y, width: a.doc.$.documentElement.scrollWidth - d.width, height: a.doc.$.documentElement.scrollHeight - d.height }, pane: { width: d.width, height: d.height, bottom: d.height + c.y }, date: +new Date }, !0) } } function z(a, b, c, d) {
                for (var f = d, g = d, h = 0, k = !1, l = !1, m = a.view.pane.height, n = a.mouse; n.y + h < m && 0 < n.y -
                    h;) { k || (k = b(f, d)); l || (l = b(g, d)); !k && 0 < n.y - h && (f = c(a, { x: n.x, y: n.y - h })); !l && n.y + h < m && (g = c(a, { x: n.x, y: n.y + h })); if (k && l) break; h += 2 } return new e([f, g, null, null])
            } CKEDITOR.plugins.add("magicline", {
                init: function (a) {
                    var c = a.config, k = c.magicline_triggerOffset || 30, l = {
                        editor: a, enterMode: c.enterMode, triggerOffset: k, holdDistance: 0 | k * (c.magicline_holdDistance || .5), boxColor: c.magicline_color || "#ff0000", rtl: "rtl" == c.contentsLangDirection, tabuList: ["data-cke-hidden-sel"].concat(c.magicline_tabuList || []), triggers: c.magicline_everywhere ?
                            Q : { table: 1, hr: 1, div: 1, ul: 1, ol: 1, dl: 1, form: 1, blockquote: 1 }
                    }, O, p, z; l.isRelevant = function (a) { return n(a) && !f(l, a) && !r(a) }; a.on("contentDom", function () {
                        var k = a.editable(), n = a.document, t = a.window; A(l, { editable: k, inInlineMode: k.isInline(), doc: n, win: t, hotNode: null }, !0); l.boundary = l.inInlineMode ? l.editable : l.doc.getDocumentElement(); k.is(H.$inline) || (l.inInlineMode && !u(k) && k.setStyles({ position: "relative", top: null, left: null }), g.call(this, l), C(l), k.attachListener(a, "beforeUndoImage", function () { l.line.detach() }),
                            k.attachListener(a, "beforeGetData", function () { l.line.wrap.getParent() && (l.line.detach(), a.once("getData", function () { l.line.attach() }, null, null, 1E3)) }, null, null, 0), k.attachListener(l.inInlineMode ? n : n.getWindow().getFrame(), "mouseout", function (b) {
                                if ("wysiwyg" == a.mode) if (l.inInlineMode) { var c = b.data.$.clientX; b = b.data.$.clientY; C(l); x(l, !0); var d = l.view.editable, f = l.view.scroll; c > d.left - f.x && c < d.right - f.x && b > d.top - f.y && b < d.bottom - f.y || (clearTimeout(z), z = null, l.line.detach()) } else clearTimeout(z), z = null,
                                    l.line.detach()
                            }), k.attachListener(k, "keyup", function () { l.hiddenMode = 0 }), k.attachListener(k, "keydown", function (b) { if ("wysiwyg" == a.mode) switch (b.data.getKeystroke()) { case 2228240: case 16: l.hiddenMode = 1, l.line.detach() } }), k.attachListener(l.inInlineMode ? k : n, "mousemove", function (b) {
                                p = !0; if ("wysiwyg" == a.mode && !a.readOnly && !z) {
                                    var c = { x: b.data.$.clientX, y: b.data.$.clientY }; z = setTimeout(function () {
                                        l.mouse = c; z = l.trigger = null; C(l); p && !l.hiddenMode && a.focusManager.hasFocus && !l.line.mouseNear() && (l.element =
                                            W(l, !0)) && ((l.trigger = w(l) || q(l) || Y(l)) && !y(l, l.trigger.upper || l.trigger.lower) ? l.line.attach().place() : (l.trigger = null, l.line.detach()), p = !1)
                                    }, 30)
                                }
                            }), k.attachListener(t, "scroll", function () { "wysiwyg" == a.mode && (l.line.detach(), E.webkit && (l.hiddenMode = 1, clearTimeout(O), O = setTimeout(function () { l.mouseDown || (l.hiddenMode = 0) }, 50))) }), k.attachListener(I ? n : t, "mousedown", function () { "wysiwyg" == a.mode && (l.line.detach(), l.hiddenMode = 1, l.mouseDown = 1) }), k.attachListener(I ? n : t, "mouseup", function () {
                                l.hiddenMode =
                                0; l.mouseDown = 0
                            }), a.addCommand("accessPreviousSpace", m(l)), a.addCommand("accessNextSpace", m(l, !0)), a.setKeystroke([[c.magicline_keystrokePrevious, "accessPreviousSpace"], [c.magicline_keystrokeNext, "accessNextSpace"]]), a.on("loadSnapshot", function () { var b, c, d, f; for (f in { p: 1, br: 1, div: 1 }) for (b = a.document.getElementsByTag(f), d = b.count(); d--;)if ((c = b.getItem(d)).data("cke-magicline-hot")) { l.hotNode = c; l.lastCmdDirection = "true" === c.data("cke-magicline-dir") ? !0 : !1; return } }), this.backdoor = {
                                accessFocusSpace: h,
                                boxTrigger: e, isLine: f, getAscendantTrigger: b, getNonEmptyNeighbour: d, getSize: B, that: l, triggerEdge: q, triggerEditable: w, triggerExpand: Y
                            })
                    }, this)
                }
            }); var A = CKEDITOR.tools.extend, G = CKEDITOR.dom.element, F = G.createFromHtml, E = CKEDITOR.env, I = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, H = CKEDITOR.dtd, K = {}, J = 128, D = 64, R = 32, N = 16, S = 4, L = 2, V = 1, Z = " ", X = H.$listItem, da = H.$tableContent, P = A({}, H.$nonEditable, H.$empty), Q = H.$block, M = 100, U = "width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;",
                T = U + "border-color:transparent;display:block;border-style:solid;", O = "\x3cspan\x3e" + Z + "\x3c/span\x3e"; K[CKEDITOR.ENTER_BR] = "br"; K[CKEDITOR.ENTER_P] = "p"; K[CKEDITOR.ENTER_DIV] = "div"; e.prototype = { set: function (a, b, c) { this.properties = a + b + (c || V); return this }, is: function (a) { return (this.properties & a) == a } }; var W = function () {
                    function a(b, c) { var d = b.$.elementFromPoint(c.x, c.y); return d && d.nodeType ? new CKEDITOR.dom.element(d) : null } return function (b, c, d) {
                        if (!b.mouse) return null; var e = b.doc, g = b.line.wrap; d = d || b.mouse;
                        var h = a(e, d); c && f(b, h) && (g.hide(), h = a(e, d), g.show()); return !h || h.type != CKEDITOR.NODE_ELEMENT || !h.$ || E.ie && 9 > E.version && !b.boundary.equals(h) && !b.boundary.contains(h) ? null : h
                    }
                }(), aa = CKEDITOR.dom.walker.whitespaces(), ba = CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT), Y = function () {
                    function b(f) {
                        var e = f.element, g, h, k; if (!n(e) || e.contains(f.editable) || e.isReadOnly()) return null; k = z(f, function (a, b) { return !b.equals(a) }, function (a, b) { return W(a, !0, b) }, e); g = k.upper; h = k.lower; if (a(f, g, h)) return k.set(R,
                            8); if (g && e.contains(g)) for (; !g.getParent().equals(e);)g = g.getParent(); else g = e.getFirst(function (a) { return d(f, a) }); if (h && e.contains(h)) for (; !h.getParent().equals(e);)h = h.getParent(); else h = e.getLast(function (a) { return d(f, a) }); if (!g || !h) return null; t(f, g); t(f, h); if (!l(f.mouse.y, g.size.top, h.size.bottom)) return null; for (var e = Number.MAX_VALUE, m, O, q, p; h && !h.equals(g) && (O = g.getNext(f.isRelevant));)m = Math.abs(c(f, g, O) - f.mouse.y), m < e && (e = m, q = g, p = O), g = O, t(f, g); if (!q || !p || !l(f.mouse.y, q.size.top, p.size.bottom)) return null;
                        k.upper = q; k.lower = p; return k.set(R, 8)
                    } function d(a, b) { return !(b && b.type == CKEDITOR.NODE_TEXT || ba(b) || r(b) || f(a, b) || b.type == CKEDITOR.NODE_ELEMENT && b.$ && b.is("br")) } return function (c) { var d = b(c), f; if (f = d) { f = d.upper; var e = d.lower; f = !f || !e || r(e) || r(f) || e.equals(f) || f.equals(e) || e.contains(f) || f.contains(e) ? !1 : v(c, f) && v(c, e) && a(c, f, e) ? !0 : !1 } return f ? d : null }
                }(), ca = ["top", "left", "right", "bottom"]
        }(), CKEDITOR.config.magicline_keystrokePrevious = CKEDITOR.CTRL + CKEDITOR.SHIFT + 51, CKEDITOR.config.magicline_keystrokeNext =
        CKEDITOR.CTRL + CKEDITOR.SHIFT + 52, function () {
            function a(a) { if (!a || a.type != CKEDITOR.NODE_ELEMENT || "form" != a.getName()) return []; for (var b = [], c = ["style", "className"], d = 0; d < c.length; d++) { var e = a.$.elements.namedItem(c[d]); e && (e = new CKEDITOR.dom.element(e), b.push([e, e.nextSibling]), e.remove()) } return b } function e(a, b) { if (a && a.type == CKEDITOR.NODE_ELEMENT && "form" == a.getName() && 0 < b.length) for (var c = b.length - 1; 0 <= c; c--) { var d = b[c][0], e = b[c][1]; e ? d.insertBefore(e) : d.appendTo(a) } } function b(b, c) {
                var d = a(b), h =
                    {}, m = b.$; c || (h["class"] = m.className || "", m.className = ""); h.inline = m.style.cssText || ""; c || (m.style.cssText = "position: static; overflow: visible"); e(d); return h
            } function c(b, c) { var d = a(b), h = b.$; "class" in c && (h.className = c["class"]); "inline" in c && (h.style.cssText = c.inline); e(d) } function d(a) {
                if (!a.editable().isInline()) {
                    var b = CKEDITOR.instances, c; for (c in b) { var d = b[c]; "wysiwyg" != d.mode || d.readOnly || (d = d.document.getBody(), d.setAttribute("contentEditable", !1), d.setAttribute("contentEditable", !0)) } a.editable().hasFocus &&
                        (a.toolbox.focus(), a.focus())
                }
            } CKEDITOR.plugins.add("maximize", {
                init: function (a) {
                    function e() { var b = m.getViewPaneSize(); a.resize(b.width, b.height, null, !0) } if (a.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var g = a.lang, h = CKEDITOR.document, m = h.getWindow(), f, n, r, u = CKEDITOR.TRISTATE_OFF; a.addCommand("maximize", {
                            modes: { wysiwyg: !CKEDITOR.env.iOS, source: !CKEDITOR.env.iOS }, readOnly: 1, editorFocus: !1, exec: function () {
                                var v = a.container.getFirst(function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_inner") }),
                                y = a.ui.space("contents"); if ("wysiwyg" == a.mode) { var p = a.getSelection(); f = p && p.getRanges(); n = m.getScrollPosition() } else { var w = a.editable().$; f = !CKEDITOR.env.ie && [w.selectionStart, w.selectionEnd]; n = [w.scrollLeft, w.scrollTop] } if (this.state == CKEDITOR.TRISTATE_OFF) {
                                    m.on("resize", e); r = m.getScrollPosition(); for (p = a.container; p = p.getParent();)p.setCustomData("maximize_saved_styles", b(p)), p.setStyle("z-index", a.config.baseFloatZIndex - 5); y.setCustomData("maximize_saved_styles", b(y, !0)); v.setCustomData("maximize_saved_styles",
                                        b(v, !0)); y = { overflow: CKEDITOR.env.webkit ? "" : "hidden", width: 0, height: 0 }; h.getDocumentElement().setStyles(y); !CKEDITOR.env.gecko && h.getDocumentElement().setStyle("position", "fixed"); CKEDITOR.env.gecko && CKEDITOR.env.quirks || h.getBody().setStyles(y); CKEDITOR.env.ie ? setTimeout(function () { m.$.scrollTo(0, 0) }, 0) : m.$.scrollTo(0, 0); v.setStyle("position", CKEDITOR.env.gecko && CKEDITOR.env.quirks ? "fixed" : "absolute"); v.$.offsetLeft; v.setStyles({ "z-index": a.config.baseFloatZIndex - 5, left: "0px", top: "0px" }); v.addClass("cke_maximized");
                                    e(); y = v.getDocumentPosition(); v.setStyles({ left: -1 * y.x + "px", top: -1 * y.y + "px" }); CKEDITOR.env.gecko && d(a)
                                } else if (this.state == CKEDITOR.TRISTATE_ON) {
                                    m.removeListener("resize", e); for (var p = [y, v], q = 0; q < p.length; q++)c(p[q], p[q].getCustomData("maximize_saved_styles")), p[q].removeCustomData("maximize_saved_styles"); for (p = a.container; p = p.getParent();)c(p, p.getCustomData("maximize_saved_styles")), p.removeCustomData("maximize_saved_styles"); CKEDITOR.env.ie ? setTimeout(function () { m.$.scrollTo(r.x, r.y) }, 0) : m.$.scrollTo(r.x,
                                        r.y); v.removeClass("cke_maximized"); CKEDITOR.env.webkit && (v.setStyle("display", "inline"), setTimeout(function () { v.setStyle("display", "block") }, 0)); a.fire("resize", { outerHeight: a.container.$.offsetHeight, contentsHeight: y.$.offsetHeight, outerWidth: a.container.$.offsetWidth })
                                } this.toggleState(); if (p = this.uiItems[0]) y = this.state == CKEDITOR.TRISTATE_OFF ? g.maximize.maximize : g.maximize.minimize, p = CKEDITOR.document.getById(p._.id), p.getChild(1).setHtml(y), p.setAttribute("title", y), p.setAttribute("href", 'javascript:void("' +
                                    y + '");'); "wysiwyg" == a.mode ? f ? (CKEDITOR.env.gecko && d(a), a.getSelection().selectRanges(f), (w = a.getSelection().getStartElement()) && w.scrollIntoView(!0)) : m.$.scrollTo(n.x, n.y) : (f && (w.selectionStart = f[0], w.selectionEnd = f[1]), w.scrollLeft = n[0], w.scrollTop = n[1]); f = n = null; u = this.state; a.fire("maximize", this.state)
                            }, canUndo: !1
                        }); a.ui.addButton && a.ui.addButton("Maximize", { label: g.maximize.maximize, command: "maximize", toolbar: "tools,10" }); a.on("mode", function () {
                            var b = a.getCommand("maximize"); b.setState(b.state ==
                                CKEDITOR.TRISTATE_DISABLED ? CKEDITOR.TRISTATE_DISABLED : u)
                        }, null, null, 100)
                    }
                }
            })
        }(), function () {
            function a(a, b, c) { var d = CKEDITOR.cleanWord; d ? c() : (a = CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile || b + "filter/default.js"), CKEDITOR.scriptLoader.load(a, c, null, !0)); return !d } CKEDITOR.plugins.add("pastefromword", {
                requires: "clipboard", init: function (e) {
                    function b(a) {
                        var b = CKEDITOR.plugins.pastefromword && CKEDITOR.plugins.pastefromword.images, c, d = []; if (b && a.editor.filter.check("img[src]") && (c = b.extractTagsFromHtml(a.data.dataValue),
                            0 !== c.length && (b = b.extractFromRtf(a.data.dataTransfer["text/rtf"]), 0 !== b.length && (CKEDITOR.tools.array.forEach(b, function (a) { d.push(a.type ? "data:" + a.type + ";base64," + CKEDITOR.tools.convertBytesToBase64(CKEDITOR.tools.convertHexStringToBytes(a.hex)) : null) }, this), c.length === d.length)))) for (b = 0; b < c.length; b++)0 === c[b].indexOf("file://") && d[b] && (a.data.dataValue = a.data.dataValue.replace(c[b], d[b]))
                    } var c = 0, d = this.path, l = void 0 === e.config.pasteFromWord_inlineImages ? !0 : e.config.pasteFromWord_inlineImages;
                    e.addCommand("pastefromword", { canUndo: !1, async: !0, exec: function (a, b) { c = 1; a.execCommand("paste", { type: "html", notification: b && "undefined" !== typeof b.notification ? b.notification : !0 }) } }); CKEDITOR.plugins.clipboard.addPasteButton(e, "PasteFromWord", { label: e.lang.pastefromword.toolbar, command: "pastefromword", toolbar: "clipboard,50" }); e.on("paste", function (b) {
                        var g = b.data, h = CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ? g.dataTransfer.getData("text/html", !0) : null, l = CKEDITOR.plugins.clipboard.isCustomDataTypesSupported ?
                            g.dataTransfer.getData("text/rtf") : null, h = h || g.dataValue, f = { dataValue: h, dataTransfer: { "text/rtf": l } }, l = /(class=\"?Mso|style=(?:\"|\')[^\"]*?\bmso\-|w:WordDocument|<o:\w+>|<\/font>)/, l = /<meta\s*name=(?:\"|\')?generator(?:\"|\')?\s*content=(?:\"|\')?microsoft/gi.test(h) || l.test(h); if (h && (c || l) && (!1 !== e.fire("pasteFromWord", f) || c)) {
                                g.dontFilter = !0; var n = a(e, d, function () {
                                    if (n) e.fire("paste", g); else if (!e.config.pasteFromWordPromptCleanup || c || confirm(e.lang.pastefromword.confirmCleanup)) f.dataValue = CKEDITOR.cleanWord(f.dataValue,
                                        e), e.fire("afterPasteFromWord", f), g.dataValue = f.dataValue, !0 === e.config.forcePasteAsPlainText ? g.type = "text" : CKEDITOR.plugins.clipboard.isCustomCopyCutSupported || "allow-word" !== e.config.forcePasteAsPlainText || (g.type = "html"); c = 0
                                }); n && b.cancel()
                            }
                    }, null, null, 3); if (CKEDITOR.plugins.clipboard.isCustomDataTypesSupported && l) e.on("afterPasteFromWord", b)
                }
            })
        }(), function () {
            var a = {
                canUndo: !1, async: !0, exec: function (a, b) {
                    var c = a.lang, d = CKEDITOR.tools.keystrokeToString(c.common.keyboard, a.getCommandKeystroke(CKEDITOR.env.ie ?
                        a.commands.paste : this)), l = b && "undefined" !== typeof b.notification ? b.notification : !b || !b.from || "keystrokeHandler" === b.from && CKEDITOR.env.ie, c = l && "string" === typeof l ? l : c.pastetext.pasteNotification.replace(/%1/, '\x3ckbd aria-label\x3d"' + d.aria + '"\x3e' + d.display + "\x3c/kbd\x3e"); a.execCommand("paste", { type: "text", notification: l ? c : !1 })
                }
            }; CKEDITOR.plugins.add("pastetext", {
                requires: "clipboard", init: function (e) {
                    var b = CKEDITOR.env.safari ? CKEDITOR.CTRL + CKEDITOR.ALT + CKEDITOR.SHIFT + 86 : CKEDITOR.CTRL + CKEDITOR.SHIFT +
                        86; e.addCommand("pastetext", a); e.setKeystroke(b, "pastetext"); CKEDITOR.plugins.clipboard.addPasteButton(e, "PasteText", { label: e.lang.pastetext.button, command: "pastetext", toolbar: "clipboard,40" }); if (e.config.forcePasteAsPlainText) e.on("beforePaste", function (a) { "html" != a.data.type && (a.data.type = "text") }); e.on("pasteState", function (a) { e.getCommand("pastetext").setState(a.data) })
                }
            })
        }(), CKEDITOR.plugins.add("removeformat", {
            init: function (a) {
                a.addCommand("removeFormat", CKEDITOR.plugins.removeformat.commands.removeformat);
                a.ui.addButton && a.ui.addButton("RemoveFormat", { label: a.lang.removeformat.toolbar, command: "removeFormat", toolbar: "cleanup,10" })
            }
        }), CKEDITOR.plugins.removeformat = {
            commands: {
                removeformat: {
                    exec: function (a) {
                        for (var e = a._.removeFormatRegex || (a._.removeFormatRegex = new RegExp("^(?:" + a.config.removeFormatTags.replace(/,/g, "|") + ")$", "i")), b = a._.removeAttributes || (a._.removeAttributes = a.config.removeFormatAttributes.split(",")), c = CKEDITOR.plugins.removeformat.filter, d = a.getSelection().getRanges(), l = d.createIterator(),
                            k = function (a) { return a.type == CKEDITOR.NODE_ELEMENT }, g; g = l.getNextRange();) {
                                g.collapsed || g.enlarge(CKEDITOR.ENLARGE_ELEMENT); var h = g.createBookmark(), m = h.startNode, f = h.endNode, n = function (b) { for (var d = a.elementPath(b), f = d.elements, g = 1, h; (h = f[g]) && !h.equals(d.block) && !h.equals(d.blockLimit); g++)e.test(h.getName()) && c(a, h) && b.breakParent(h) }; n(m); if (f) for (n(f), m = m.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT); m && !m.equals(f);)if (m.isReadOnly()) { if (m.getPosition(f) & CKEDITOR.POSITION_CONTAINS) break; m = m.getNext(k) } else n =
                                    m.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT), "img" == m.getName() && m.data("cke-realelement") || !c(a, m) || (e.test(m.getName()) ? m.remove(1) : (m.removeAttributes(b), a.fire("removeFormatCleanup", m))), m = n; g.moveToBookmark(h)
                        } a.forceNextSelectionCheck(); a.getSelection().selectRanges(d)
                    }
                }
            }, filter: function (a, e) { for (var b = a._.removeFormatFilters || [], c = 0; c < b.length; c++)if (!1 === b[c](e)) return !1; return !0 }
        }, CKEDITOR.editor.prototype.addRemoveFormatFilter = function (a) {
            this._.removeFormatFilters || (this._.removeFormatFilters =
                []); this._.removeFormatFilters.push(a)
        }, CKEDITOR.config.removeFormatTags = "b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var", CKEDITOR.config.removeFormatAttributes = "class,style,lang,width,height,align,hspace,valign", CKEDITOR.plugins.add("resize", {
            init: function (a) {
                function e(b) {
                    var d = h.width, e = h.height, k = d + (b.data.$.screenX - g.x) * ("rtl" == l ? -1 : 1); b = e + (b.data.$.screenY - g.y); m && (d = Math.max(c.resize_minWidth, Math.min(k, c.resize_maxWidth))); f && (e = Math.max(c.resize_minHeight,
                        Math.min(b, c.resize_maxHeight))); a.resize(m ? d : null, e)
                } function b() { CKEDITOR.document.removeListener("mousemove", e); CKEDITOR.document.removeListener("mouseup", b); a.document && (a.document.removeListener("mousemove", e), a.document.removeListener("mouseup", b)) } var c = a.config, d = a.ui.spaceId("resizer"), l = a.element ? a.element.getDirection(1) : "ltr"; !c.resize_dir && (c.resize_dir = "vertical"); void 0 === c.resize_maxWidth && (c.resize_maxWidth = 3E3); void 0 === c.resize_maxHeight && (c.resize_maxHeight = 3E3); void 0 === c.resize_minWidth &&
                    (c.resize_minWidth = 750); void 0 === c.resize_minHeight && (c.resize_minHeight = 250); if (!1 !== c.resize_enabled) {
                        var k = null, g, h, m = ("both" == c.resize_dir || "horizontal" == c.resize_dir) && c.resize_minWidth != c.resize_maxWidth, f = ("both" == c.resize_dir || "vertical" == c.resize_dir) && c.resize_minHeight != c.resize_maxHeight, n = CKEDITOR.tools.addFunction(function (d) {
                            k || (k = a.getResizable()); h = { width: k.$.offsetWidth || 0, height: k.$.offsetHeight || 0 }; g = { x: d.screenX, y: d.screenY }; c.resize_minWidth > h.width && (c.resize_minWidth = h.width);
                            c.resize_minHeight > h.height && (c.resize_minHeight = h.height); CKEDITOR.document.on("mousemove", e); CKEDITOR.document.on("mouseup", b); a.document && (a.document.on("mousemove", e), a.document.on("mouseup", b)); d.preventDefault && d.preventDefault()
                        }); a.on("destroy", function () { CKEDITOR.tools.removeFunction(n) }); a.on("uiSpace", function (b) {
                            if ("bottom" == b.data.space) {
                                var c = ""; m && !f && (c = " cke_resizer_horizontal"); !m && f && (c = " cke_resizer_vertical"); var e = '\x3cspan id\x3d"' + d + '" class\x3d"cke_resizer' + c + " cke_resizer_" +
                                    l + '" title\x3d"' + CKEDITOR.tools.htmlEncode(a.lang.common.resize) + '" onmousedown\x3d"CKEDITOR.tools.callFunction(' + n + ', event)"\x3e' + ("ltr" == l ? "◢" : "◣") + "\x3c/span\x3e"; "ltr" == l && "ltr" == c ? b.data.html += e : b.data.html = e + b.data.html
                            }
                        }, a, null, 100); a.on("maximize", function (b) { a.ui.space("resizer")[b.data == CKEDITOR.TRISTATE_ON ? "hide" : "show"]() })
                    }
            }
        }), CKEDITOR.plugins.add("menubutton", {
            requires: "button,menu", onLoad: function () {
                var a = function (a) {
                    var b = this._, c = b.menu; b.state !== CKEDITOR.TRISTATE_DISABLED && (b.on &&
                        c ? c.hide() : (b.previousState = b.state, c || (c = b.menu = new CKEDITOR.menu(a, { panel: { className: "cke_menu_panel", attributes: { "aria-label": a.lang.common.options } } }), c.onHide = CKEDITOR.tools.bind(function () { var c = this.command ? a.getCommand(this.command).modes : this.modes; this.setState(!c || c[a.mode] ? b.previousState : CKEDITOR.TRISTATE_DISABLED); b.on = 0 }, this), this.onMenu && c.addListener(this.onMenu)), this.setState(CKEDITOR.TRISTATE_ON), b.on = 1, setTimeout(function () { c.show(CKEDITOR.document.getById(b.id), 4) }, 0)))
                }; CKEDITOR.ui.menuButton =
                    CKEDITOR.tools.createClass({ base: CKEDITOR.ui.button, $: function (e) { delete e.panel; this.base(e); this.hasArrow = !0; this.click = a }, statics: { handler: { create: function (a) { return new CKEDITOR.ui.menuButton(a) } } } })
            }, beforeInit: function (a) { a.ui.addHandler(CKEDITOR.UI_MENUBUTTON, CKEDITOR.ui.menuButton.handler) }
        }), CKEDITOR.UI_MENUBUTTON = "menubutton", "use strict", CKEDITOR.plugins.add("scayt", {
            requires: "menubutton,dialog", tabToOpen: null, dialogName: "scaytDialog", onLoad: function (a) {
                CKEDITOR.plugins.scayt.onLoadTimestamp =
                (new Date).getTime(); "moono-lisa" == (CKEDITOR.skinName || a.config.skin) && CKEDITOR.document.appendStyleSheet(this.path + "skins/" + CKEDITOR.skin.name + "/scayt.css"); CKEDITOR.document.appendStyleSheet(this.path + "dialogs/dialog.css")
            }, init: function (a) {
                var e = this, b = CKEDITOR.plugins.scayt; this.bindEvents(a); this.parseConfig(a); this.addRule(a); CKEDITOR.dialog.add(this.dialogName, CKEDITOR.getUrl(this.path + "dialogs/options.js")); this.addMenuItems(a); var c = a.lang.scayt, d = CKEDITOR.env; a.ui.add("Scayt", CKEDITOR.UI_MENUBUTTON,
                    {
                        label: c.text_title, title: a.plugins.wsc ? a.lang.wsc.title : c.text_title, modes: { wysiwyg: !(d.ie && (8 > d.version || d.quirks)) }, toolbar: "spellchecker,20", refresh: function () { var c = a.ui.instances.Scayt.getState(); a.scayt && (c = b.state.scayt[a.name] ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF); a.fire("scaytButtonState", c) }, onRender: function () { var b = this; a.on("scaytButtonState", function (a) { void 0 !== typeof a.data && b.setState(a.data) }) }, onMenu: function () {
                            var c = a.scayt; a.getMenuItem("scaytToggle").label = a.lang.scayt[c &&
                                b.state.scayt[a.name] ? "btn_disable" : "btn_enable"]; var d = { scaytToggle: CKEDITOR.TRISTATE_OFF, scaytOptions: c ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytLangs: c ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytDict: c ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, scaytAbout: c ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, WSC: a.plugins.wsc ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED }; a.config.scayt_uiTabs[0] || delete d.scaytOptions; a.config.scayt_uiTabs[1] || delete d.scaytLangs;
                            a.config.scayt_uiTabs[2] || delete d.scaytDict; c && !CKEDITOR.plugins.scayt.isNewUdSupported(c) && (delete d.scaytDict, a.config.scayt_uiTabs[2] = 0, CKEDITOR.plugins.scayt.alarmCompatibilityMessage()); return d
                        }
                    }); a.contextMenu && a.addMenuItems && (a.contextMenu.addListener(function (b, c) { var d = a.scayt, h, m; d && (m = d.getSelectionNode()) && (h = e.menuGenerator(a, m), d.showBanner("." + a.contextMenu._.definition.panel.className.split(" ").join(" ."))); return h }), a.contextMenu._.onHide = CKEDITOR.tools.override(a.contextMenu._.onHide,
                        function (b) { return function () { var c = a.scayt; c && c.hideBanner(); return b.apply(this) } }))
            }, addMenuItems: function (a) {
                var e = this, b = CKEDITOR.plugins.scayt; a.addMenuGroup("scaytButton"); for (var c = a.config.scayt_contextMenuItemsOrder.split("|"), d = 0; d < c.length; d++)c[d] = "scayt_" + c[d]; if ((c = ["grayt_description", "grayt_suggest", "grayt_control"].concat(c)) && c.length) for (d = 0; d < c.length; d++)a.addMenuGroup(c[d], d - 10); a.addCommand("scaytToggle", {
                    exec: function (a) {
                        var c = a.scayt; b.state.scayt[a.name] = !b.state.scayt[a.name];
                        !0 === b.state.scayt[a.name] ? c || b.createScayt(a) : c && b.destroy(a)
                    }
                }); a.addCommand("scaytAbout", { exec: function (a) { a.scayt.tabToOpen = "about"; b.openDialog(e.dialogName, a) } }); a.addCommand("scaytOptions", { exec: function (a) { a.scayt.tabToOpen = "options"; b.openDialog(e.dialogName, a) } }); a.addCommand("scaytLangs", { exec: function (a) { a.scayt.tabToOpen = "langs"; b.openDialog(e.dialogName, a) } }); a.addCommand("scaytDict", { exec: function (a) { a.scayt.tabToOpen = "dictionaries"; b.openDialog(e.dialogName, a) } }); c = {
                    scaytToggle: {
                        label: a.lang.scayt.btn_enable,
                        group: "scaytButton", command: "scaytToggle"
                    }, scaytAbout: { label: a.lang.scayt.btn_about, group: "scaytButton", command: "scaytAbout" }, scaytOptions: { label: a.lang.scayt.btn_options, group: "scaytButton", command: "scaytOptions" }, scaytLangs: { label: a.lang.scayt.btn_langs, group: "scaytButton", command: "scaytLangs" }, scaytDict: { label: a.lang.scayt.btn_dictionaries, group: "scaytButton", command: "scaytDict" }
                }; a.plugins.wsc && (c.WSC = {
                    label: a.lang.wsc.toolbar, group: "scaytButton", onClick: function () {
                        var b = CKEDITOR.plugins.scayt,
                        c = a.scayt, d = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.container.getText() : a.document.getBody().getText(); (d = d.replace(/\s/g, "")) ? (c && b.state.scayt[a.name] && c.setMarkupPaused && c.setMarkupPaused(!0), a.lockSelection(), a.execCommand("checkspell")) : alert("Nothing to check!")
                    }
                }); a.addMenuItems(c)
            }, bindEvents: function (a) {
                var e = CKEDITOR.plugins.scayt, b = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE, c = function () { e.destroy(a) }, d = function () { !e.state.scayt[a.name] || a.readOnly || a.scayt || e.createScayt(a) }, l = function () {
                    var c =
                        a.editable(); c.attachListener(c, "focus", function (c) { CKEDITOR.plugins.scayt && !a.scayt && setTimeout(d, 0); c = CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[a.name] && a.scayt; var e, f; if ((b || c) && a._.savedSelection) { c = a._.savedSelection.getSelectedElement(); c = !c && a._.savedSelection.getRanges(); for (var g = 0; g < c.length; g++)f = c[g], "string" === typeof f.startContainer.$.nodeValue && (e = f.startContainer.getText().length, (e < f.startOffset || e < f.endOffset) && a.unlockSelection(!1)) } }, this, null, -10)
                }, k = function () {
                    b ?
                        a.config.scayt_inlineModeImmediateMarkup ? d() : (a.on("blur", function () { setTimeout(c, 0) }), a.on("focus", d), a.focusManager.hasFocus && d()) : d(); l(); var e = a.editable(); e.attachListener(e, "mousedown", function (b) { b = b.data.getTarget(); var c = a.widgets && a.widgets.getByElement(b); c && (c.wrapper = b.getAscendant(function (a) { return a.hasAttribute("data-cke-widget-wrapper") }, !0)) }, this, null, -10)
                }; a.on("contentDom", k); a.on("beforeCommandExec", function (b) {
                    var c = a.scayt, d = !1, f = !1, k = !0; b.data.name in e.options.disablingCommandExec &&
                        "wysiwyg" == a.mode ? c && (e.destroy(a), a.fire("scaytButtonState", CKEDITOR.TRISTATE_DISABLED)) : "bold" !== b.data.name && "italic" !== b.data.name && "underline" !== b.data.name && "strike" !== b.data.name && "subscript" !== b.data.name && "superscript" !== b.data.name && "enter" !== b.data.name && "cut" !== b.data.name && "language" !== b.data.name || !c || ("cut" === b.data.name && (k = !1, f = !0), "language" === b.data.name && (f = d = !0), a.fire("reloadMarkupScayt", { removeOptions: { removeInside: k, forceBookmark: f, language: d }, timeout: 0 }))
                }); a.on("beforeSetMode",
                    function (b) { if ("source" == b.data) { if (b = a.scayt) e.destroy(a), a.fire("scaytButtonState", CKEDITOR.TRISTATE_DISABLED); a.document && a.document.getBody().removeAttribute("_jquid") } }); a.on("afterCommandExec", function (b) { "wysiwyg" != a.mode || "undo" != b.data.name && "redo" != b.data.name || setTimeout(function () { e.reloadMarkup(a.scayt) }, 250) }); a.on("readOnly", function (b) {
                        var c; b && (c = a.scayt, !0 === b.editor.readOnly ? c && c.fire("removeMarkupInDocument", {}) : c ? e.reloadMarkup(c) : "wysiwyg" == b.editor.mode && !0 === e.state.scayt[b.editor.name] &&
                            (e.createScayt(a), b.editor.fire("scaytButtonState", CKEDITOR.TRISTATE_ON)))
                    }); a.on("beforeDestroy", c); a.on("setData", function () { c(); (a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE || a.plugins.divarea) && k() }, this, null, 50); a.on("reloadMarkupScayt", function (b) {
                        var c = b.data && b.data.removeOptions, d = b.data && b.data.timeout, f = b.data && b.data.language, k = a.scayt; k && setTimeout(function () {
                            f && (c.selectionNode = a.plugins.language.getCurrentLangElement(a), c.selectionNode = c.selectionNode && c.selectionNode.$ || null); k.removeMarkupInSelectionNode(c);
                            e.reloadMarkup(k)
                        }, d || 0)
                    }); a.on("insertElement", function () { a.fire("reloadMarkupScayt", { removeOptions: { forceBookmark: !0 } }) }, this, null, 50); a.on("insertHtml", function () { a.scayt && a.scayt.setFocused && a.scayt.setFocused(!0); a.fire("reloadMarkupScayt") }, this, null, 50); a.on("insertText", function () { a.scayt && a.scayt.setFocused && a.scayt.setFocused(!0); a.fire("reloadMarkupScayt") }, this, null, 50); a.on("scaytDialogShown", function (b) { b.data.selectPage(a.scayt.tabToOpen) })
            }, parseConfig: function (a) {
                var e = CKEDITOR.plugins.scayt;
                e.replaceOldOptionsNames(a.config); "boolean" !== typeof a.config.scayt_autoStartup && (a.config.scayt_autoStartup = !1); e.state.scayt[a.name] = a.config.scayt_autoStartup; "boolean" !== typeof a.config.grayt_autoStartup && (a.config.grayt_autoStartup = !1); "boolean" !== typeof a.config.scayt_inlineModeImmediateMarkup && (a.config.scayt_inlineModeImmediateMarkup = !1); e.state.grayt[a.name] = a.config.grayt_autoStartup; a.config.scayt_contextCommands || (a.config.scayt_contextCommands = "ignoreall|add"); a.config.scayt_contextMenuItemsOrder ||
                    (a.config.scayt_contextMenuItemsOrder = "suggest|moresuggest|control"); a.config.scayt_sLang || (a.config.scayt_sLang = "en_US"); if (void 0 === a.config.scayt_maxSuggestions || "number" != typeof a.config.scayt_maxSuggestions || 0 > a.config.scayt_maxSuggestions) a.config.scayt_maxSuggestions = 3; if (void 0 === a.config.scayt_minWordLength || "number" != typeof a.config.scayt_minWordLength || 1 > a.config.scayt_minWordLength) a.config.scayt_minWordLength = 3; if (void 0 === a.config.scayt_customDictionaryIds || "string" !== typeof a.config.scayt_customDictionaryIds) a.config.scayt_customDictionaryIds =
                        ""; if (void 0 === a.config.scayt_userDictionaryName || "string" !== typeof a.config.scayt_userDictionaryName) a.config.scayt_userDictionaryName = null; if ("string" === typeof a.config.scayt_uiTabs && 3 === a.config.scayt_uiTabs.split(",").length) {
                            var b = [], c = []; a.config.scayt_uiTabs = a.config.scayt_uiTabs.split(","); CKEDITOR.tools.search(a.config.scayt_uiTabs, function (a) { 1 === Number(a) || 0 === Number(a) ? (c.push(!0), b.push(Number(a))) : c.push(!1) }); null === CKEDITOR.tools.search(c, !1) ? a.config.scayt_uiTabs = b : a.config.scayt_uiTabs =
                                [1, 1, 1]
                        } else a.config.scayt_uiTabs = [1, 1, 1]; "string" != typeof a.config.scayt_serviceProtocol && (a.config.scayt_serviceProtocol = null); "string" != typeof a.config.scayt_serviceHost && (a.config.scayt_serviceHost = null); "string" != typeof a.config.scayt_servicePort && (a.config.scayt_servicePort = null); "string" != typeof a.config.scayt_servicePath && (a.config.scayt_servicePath = null); a.config.scayt_moreSuggestions || (a.config.scayt_moreSuggestions = "on"); "string" !== typeof a.config.scayt_customerId && (a.config.scayt_customerId =
                            "1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2"); "string" !== typeof a.config.scayt_customPunctuation && (a.config.scayt_customPunctuation = "-"); "string" !== typeof a.config.scayt_srcUrl && (e = document.location.protocol, e = -1 != e.search(/https?:/) ? e : "http:", a.config.scayt_srcUrl = e + "//svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js"); "boolean" !== typeof CKEDITOR.config.scayt_handleCheckDirty && (CKEDITOR.config.scayt_handleCheckDirty = !0); "boolean" !== typeof CKEDITOR.config.scayt_handleUndoRedo &&
                                (CKEDITOR.config.scayt_handleUndoRedo = !0); CKEDITOR.config.scayt_handleUndoRedo = CKEDITOR.plugins.undo ? CKEDITOR.config.scayt_handleUndoRedo : !1; "boolean" !== typeof a.config.scayt_multiLanguageMode && (a.config.scayt_multiLanguageMode = !1); "object" !== typeof a.config.scayt_multiLanguageStyles && (a.config.scayt_multiLanguageStyles = {}); a.config.scayt_ignoreAllCapsWords && "boolean" !== typeof a.config.scayt_ignoreAllCapsWords && (a.config.scayt_ignoreAllCapsWords = !1); a.config.scayt_ignoreDomainNames && "boolean" !== typeof a.config.scayt_ignoreDomainNames &&
                                    (a.config.scayt_ignoreDomainNames = !1); a.config.scayt_ignoreWordsWithMixedCases && "boolean" !== typeof a.config.scayt_ignoreWordsWithMixedCases && (a.config.scayt_ignoreWordsWithMixedCases = !1); a.config.scayt_ignoreWordsWithNumbers && "boolean" !== typeof a.config.scayt_ignoreWordsWithNumbers && (a.config.scayt_ignoreWordsWithNumbers = !1); if (a.config.scayt_disableOptionsStorage) {
                                        var e = CKEDITOR.tools.isArray(a.config.scayt_disableOptionsStorage) ? a.config.scayt_disableOptionsStorage : "string" === typeof a.config.scayt_disableOptionsStorage ?
                                            [a.config.scayt_disableOptionsStorage] : void 0, d = "all options lang ignore-all-caps-words ignore-domain-names ignore-words-with-mixed-cases ignore-words-with-numbers".split(" "), l = ["lang", "ignore-all-caps-words", "ignore-domain-names", "ignore-words-with-mixed-cases", "ignore-words-with-numbers"], k = CKEDITOR.tools.search, g = CKEDITOR.tools.indexOf; a.config.scayt_disableOptionsStorage = function (a) {
                                                for (var b = [], c = 0; c < a.length; c++) {
                                                    var e = a[c], r = !!k(a, "options"); if (!k(d, e) || r && k(l, function (a) { if ("lang" === a) return !1 })) return;
                                                    k(l, e) && l.splice(g(l, e), 1); if ("all" === e || r && k(a, "lang")) return []; "options" === e && (l = ["lang"])
                                                } return b = b.concat(l)
                                            }(e)
                                    }
            }, addRule: function (a) {
                var e = CKEDITOR.plugins.scayt, b = a.dataProcessor, c = b && b.htmlFilter, d = a._.elementsPath && a._.elementsPath.filters, b = b && b.dataFilter, l = a.addRemoveFormatFilter, k = function (b) { if (a.scayt && (b.hasAttribute(e.options.data_attribute_name) || b.hasAttribute(e.options.problem_grammar_data_attribute))) return !1 }, g = function (b) {
                    var c = !0; a.scayt && (b.hasAttribute(e.options.data_attribute_name) ||
                        b.hasAttribute(e.options.problem_grammar_data_attribute)) && (c = !1); return c
                }; d && d.push(k); b && b.addRules({ elements: { span: function (a) { var b = a.hasClass(e.options.misspelled_word_class) && a.attributes[e.options.data_attribute_name], c = a.hasClass(e.options.problem_grammar_class) && a.attributes[e.options.problem_grammar_data_attribute]; e && (b || c) && delete a.name; return a } } }); c && c.addRules({
                    elements: {
                        span: function (a) {
                            var b = a.hasClass(e.options.misspelled_word_class) && a.attributes[e.options.data_attribute_name],
                            c = a.hasClass(e.options.problem_grammar_class) && a.attributes[e.options.problem_grammar_data_attribute]; e && (b || c) && delete a.name; return a
                        }
                    }
                }); l && l.call(a, g)
            }, scaytMenuDefinition: function (a) {
                var e = this, b = CKEDITOR.plugins.scayt; a = a.scayt; return {
                    scayt: {
                        scayt_ignore: { label: a.getLocal("btn_ignore"), group: "scayt_control", order: 1, exec: function (a) { a.scayt.ignoreWord() } }, scayt_ignoreall: { label: a.getLocal("btn_ignoreAll"), group: "scayt_control", order: 2, exec: function (a) { a.scayt.ignoreAllWords() } }, scayt_add: {
                            label: a.getLocal("btn_addWord"),
                            group: "scayt_control", order: 3, exec: function (a) { var b = a.scayt; setTimeout(function () { b.addWordToUserDictionary() }, 10) }
                        }, scayt_option: { label: a.getLocal("btn_options"), group: "scayt_control", order: 4, exec: function (a) { a.scayt.tabToOpen = "options"; b.openDialog(e.dialogName, a) }, verification: function (a) { return 1 == a.config.scayt_uiTabs[0] ? !0 : !1 } }, scayt_language: {
                            label: a.getLocal("btn_langs"), group: "scayt_control", order: 5, exec: function (a) { a.scayt.tabToOpen = "langs"; b.openDialog(e.dialogName, a) }, verification: function (a) {
                                return 1 ==
                                    a.config.scayt_uiTabs[1] ? !0 : !1
                            }
                        }, scayt_dictionary: { label: a.getLocal("btn_dictionaries"), group: "scayt_control", order: 6, exec: function (a) { a.scayt.tabToOpen = "dictionaries"; b.openDialog(e.dialogName, a) }, verification: function (a) { return 1 == a.config.scayt_uiTabs[2] ? !0 : !1 } }, scayt_about: { label: a.getLocal("btn_about"), group: "scayt_control", order: 7, exec: function (a) { a.scayt.tabToOpen = "about"; b.openDialog(e.dialogName, a) } }
                    }, grayt: {
                        grayt_problemdescription: {
                            label: "Grammar problem description", group: "grayt_description",
                            order: 1, state: CKEDITOR.TRISTATE_DISABLED, exec: function (a) { }
                        }, grayt_ignore: { label: a.getLocal("btn_ignore"), group: "grayt_control", order: 2, exec: function (a) { a.scayt.ignorePhrase() } }, grayt_ignoreall: { label: a.getLocal("btn_ignoreAll"), group: "grayt_control", order: 3, exec: function (a) { a.scayt.ignoreAllPhrases() } }
                    }
                }
            }, buildSuggestionMenuItems: function (a, e, b) {
                var c = {}, d = {}, l = b ? "word" : "phrase", k = b ? "startGrammarCheck" : "startSpellCheck", g = a.scayt; if (0 < e.length && "no_any_suggestions" !== e[0]) if (b) for (b = 0; b < e.length; b++) {
                    var h =
                        "scayt_suggest_" + CKEDITOR.plugins.scayt.suggestions[b].replace(" ", "_"); a.addCommand(h, this.createCommand(CKEDITOR.plugins.scayt.suggestions[b], l, k)); b < a.config.scayt_maxSuggestions ? (a.addMenuItem(h, { label: e[b], command: h, group: "scayt_suggest", order: b + 1 }), c[h] = CKEDITOR.TRISTATE_OFF) : (a.addMenuItem(h, { label: e[b], command: h, group: "scayt_moresuggest", order: b + 1 }), d[h] = CKEDITOR.TRISTATE_OFF, "on" === a.config.scayt_moreSuggestions && (a.addMenuItem("scayt_moresuggest", {
                            label: g.getLocal("btn_moreSuggestions"),
                            group: "scayt_moresuggest", order: 10, getItems: function () { return d }
                        }), c.scayt_moresuggest = CKEDITOR.TRISTATE_OFF))
                } else for (b = 0; b < e.length; b++)h = "grayt_suggest_" + CKEDITOR.plugins.scayt.suggestions[b].replace(" ", "_"), a.addCommand(h, this.createCommand(CKEDITOR.plugins.scayt.suggestions[b], l, k)), a.addMenuItem(h, { label: e[b], command: h, group: "grayt_suggest", order: b + 1 }), c[h] = CKEDITOR.TRISTATE_OFF; else c.no_scayt_suggest = CKEDITOR.TRISTATE_DISABLED, a.addCommand("no_scayt_suggest", { exec: function () { } }), a.addMenuItem("no_scayt_suggest",
                    { label: g.getLocal("btn_noSuggestions") || "no_scayt_suggest", command: "no_scayt_suggest", group: "scayt_suggest", order: 0 }); return c
            }, menuGenerator: function (a, e) {
                var b = a.scayt, c = this.scaytMenuDefinition(a), d = {}, l = a.config.scayt_contextCommands.split("|"), k = e.getAttribute(b.getLangAttribute()) || b.getLang(), g, h, m, f; h = b.isScaytNode(e); m = b.isGraytNode(e); h ? (c = c.scayt, g = e.getAttribute(b.getScaytNodeAttributeName()), b.fire("getSuggestionsList", { lang: k, word: g }), d = this.buildSuggestionMenuItems(a, CKEDITOR.plugins.scayt.suggestions,
                    h)) : m && (c = c.grayt, d = e.getAttribute(b.getGraytNodeAttributeName()), b.getGraytNodeRuleAttributeName ? (g = e.getAttribute(b.getGraytNodeRuleAttributeName()), b.getProblemDescriptionText(d, g, k)) : b.getProblemDescriptionText(d, k), f = b.getProblemDescriptionText(d, g, k), c.grayt_problemdescription && f && (f = f.replace(/([.!?])\s/g, "$1\x3cbr\x3e"), c.grayt_problemdescription.label = f), b.fire("getGrammarSuggestionsList", { lang: k, phrase: d, rule: g }), d = this.buildSuggestionMenuItems(a, CKEDITOR.plugins.scayt.suggestions, h)); if (h &&
                        "off" == a.config.scayt_contextCommands) return d; for (var n in c) h && -1 == CKEDITOR.tools.indexOf(l, n.replace("scayt_", "")) && "all" != a.config.scayt_contextCommands || m && "grayt_problemdescription" !== n && -1 == CKEDITOR.tools.indexOf(l, n.replace("grayt_", "")) && "all" != a.config.scayt_contextCommands || (d[n] = "undefined" != typeof c[n].state ? c[n].state : CKEDITOR.TRISTATE_OFF, "function" !== typeof c[n].verification || c[n].verification(a) || delete d[n], a.addCommand(n, { exec: c[n].exec }), a.addMenuItem(n, {
                            label: a.lang.scayt[c[n].label] ||
                                c[n].label, command: n, group: c[n].group, order: c[n].order
                        })); return d
            }, createCommand: function (a, e, b) { return { exec: function (c) { c = c.scayt; var d = {}; d[e] = a; c.replaceSelectionNode(d); "startGrammarCheck" === b && c.removeMarkupInSelectionNode({ grammarOnly: !0 }); c.fire(b) } } }
        }), CKEDITOR.plugins.scayt = {
            charsToObserve: [{
                charName: "cke-fillingChar", charCode: function () {
                    var a = CKEDITOR.version.match(/^\d(\.\d*)*/), a = a && a[0], e; if (a) {
                        e = "4.5.7"; var b, a = a.replace(/\./g, ""); e = e.replace(/\./g, ""); b = a.length - e.length; b = 0 <= b ? b :
                            0; e = parseInt(a) >= parseInt(e) * Math.pow(10, b)
                    } return e ? Array(7).join(String.fromCharCode(8203)) : String.fromCharCode(8203)
                }()
            }], onLoadTimestamp: "", state: { scayt: {}, grayt: {} }, warningCounter: 0, suggestions: [], options: { disablingCommandExec: { source: !0, newpage: !0, templates: !0 }, data_attribute_name: "data-scayt-word", misspelled_word_class: "scayt-misspell-word", problem_grammar_data_attribute: "data-grayt-phrase", problem_grammar_class: "gramm-problem" }, backCompatibilityMap: {
                scayt_service_protocol: "scayt_serviceProtocol",
                scayt_service_host: "scayt_serviceHost", scayt_service_port: "scayt_servicePort", scayt_service_path: "scayt_servicePath", scayt_customerid: "scayt_customerId"
            }, openDialog: function (a, e) { var b = e.scayt; b.isAllModulesReady && !1 === b.isAllModulesReady() || (e.lockSelection(), e.openDialog(a)) }, alarmCompatibilityMessage: function () {
                5 > this.warningCounter && (console.warn("You are using the latest version of SCAYT plugin for CKEditor with the old application version. In order to have access to the newest features, it is recommended to upgrade the application version to latest one as well. Contact us for more details at support@webspellchecker.net."),
                    this.warningCounter += 1)
            }, isNewUdSupported: function (a) { return a.getUserDictionary ? !0 : !1 }, reloadMarkup: function (a) { var e; a && (e = a.getScaytLangList(), a.reloadMarkup ? a.reloadMarkup() : (this.alarmCompatibilityMessage(), e && e.ltr && e.rtl && a.fire("startSpellCheck, startGrammarCheck"))) }, replaceOldOptionsNames: function (a) { for (var e in a) e in this.backCompatibilityMap && (a[this.backCompatibilityMap[e]] = a[e], delete a[e]) }, createScayt: function (a) {
                var e = this, b = CKEDITOR.plugins.scayt; this.loadScaytLibrary(a, function (a) {
                    function d(a) {
                        return new SCAYT.CKSCAYT(a,
                            function () { }, function () { })
                    } var l; a.window && (l = "BODY" == a.editable().$.nodeName ? a.window.getFrame() : a.editable()); if (l) {
                        l = {
                            lang: a.config.scayt_sLang, container: l.$, customDictionary: a.config.scayt_customDictionaryIds, userDictionaryName: a.config.scayt_userDictionaryName, localization: a.langCode, customer_id: a.config.scayt_customerId, customPunctuation: a.config.scayt_customPunctuation, debug: a.config.scayt_debug, data_attribute_name: e.options.data_attribute_name, misspelled_word_class: e.options.misspelled_word_class,
                            problem_grammar_data_attribute: e.options.problem_grammar_data_attribute, problem_grammar_class: e.options.problem_grammar_class, "options-to-restore": a.config.scayt_disableOptionsStorage, focused: a.editable().hasFocus, ignoreElementsRegex: a.config.scayt_elementsToIgnore, ignoreGraytElementsRegex: a.config.grayt_elementsToIgnore, minWordLength: a.config.scayt_minWordLength, multiLanguageMode: a.config.scayt_multiLanguageMode, multiLanguageStyles: a.config.scayt_multiLanguageStyles, graytAutoStartup: a.config.grayt_autoStartup,
                            charsToObserve: b.charsToObserve
                        }; a.config.scayt_serviceProtocol && (l.service_protocol = a.config.scayt_serviceProtocol); a.config.scayt_serviceHost && (l.service_host = a.config.scayt_serviceHost); a.config.scayt_servicePort && (l.service_port = a.config.scayt_servicePort); a.config.scayt_servicePath && (l.service_path = a.config.scayt_servicePath); "boolean" === typeof a.config.scayt_ignoreAllCapsWords && (l["ignore-all-caps-words"] = a.config.scayt_ignoreAllCapsWords); "boolean" === typeof a.config.scayt_ignoreDomainNames &&
                            (l["ignore-domain-names"] = a.config.scayt_ignoreDomainNames); "boolean" === typeof a.config.scayt_ignoreWordsWithMixedCases && (l["ignore-words-with-mixed-cases"] = a.config.scayt_ignoreWordsWithMixedCases); "boolean" === typeof a.config.scayt_ignoreWordsWithNumbers && (l["ignore-words-with-numbers"] = a.config.scayt_ignoreWordsWithNumbers); var k; try { k = d(l) } catch (g) { e.alarmCompatibilityMessage(), delete l.charsToObserve, k = d(l) } k.subscribe("suggestionListSend", function (a) {
                                for (var b = {}, c = [], d = 0; d < a.suggestionList.length; d++)b["word_" +
                                    a.suggestionList[d]] || (b["word_" + a.suggestionList[d]] = a.suggestionList[d], c.push(a.suggestionList[d])); CKEDITOR.plugins.scayt.suggestions = c
                            }); k.subscribe("selectionIsChanged", function (b) { a.getSelection().isLocked && "restoreSelection" !== b.action && a.lockSelection(); "restoreSelection" === b.action && a.selectionChange(!0) }); k.subscribe("graytStateChanged", function (d) { b.state.grayt[a.name] = d.state }); k.addMarkupHandler && k.addMarkupHandler(function (b) {
                                var d = a.editable(), e = d.getCustomData(b.charName); e && (e.$ =
                                    b.node, d.setCustomData(b.charName, e))
                            }); a.scayt = k; a.fire("scaytButtonState", a.readOnly ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_ON)
                    } else b.state.scayt[a.name] = !1
                })
            }, destroy: function (a) { a.scayt && a.scayt.destroy(); delete a.scayt; a.fire("scaytButtonState", CKEDITOR.TRISTATE_OFF) }, loadScaytLibrary: function (a, e) {
                var b, c = function () { CKEDITOR.fireOnce("scaytReady"); a.scayt || "function" === typeof e && e(a) }; "undefined" === typeof window.SCAYT || "function" !== typeof window.SCAYT.CKSCAYT ? (b = a.config.scayt_srcUrl +
                    "?" + this.onLoadTimestamp, CKEDITOR.scriptLoader.load(b, function (a) { a && c() })) : window.SCAYT && "function" === typeof window.SCAYT.CKSCAYT && c()
            }
        }, CKEDITOR.on("dialogDefinition", function (a) {
            var e = a.data.name; a = a.data.definition.dialog; "scaytDialog" !== e && "checkspell" !== e && (a.on("show", function (a) { a = a.sender && a.sender.getParentEditor(); var c = CKEDITOR.plugins.scayt, d = a.scayt; d && c.state.scayt[a.name] && d.setMarkupPaused && d.setMarkupPaused(!0) }), a.on("hide", function (a) {
                a = a.sender && a.sender.getParentEditor(); var c =
                    CKEDITOR.plugins.scayt, d = a.scayt; d && c.state.scayt[a.name] && d.setMarkupPaused && d.setMarkupPaused(!1)
            })); if ("scaytDialog" === e) a.on("cancel", function (a) { return !1 }, this, null, -1); if ("checkspell" === e) a.on("cancel", function (a) { a = a.sender && a.sender.getParentEditor(); var c = CKEDITOR.plugins.scayt, d = a.scayt; d && c.state.scayt[a.name] && d.setMarkupPaused && d.setMarkupPaused(!1); a.unlockSelection() }, this, null, -2); if ("link" === e) a.on("ok", function (a) {
                var c = a.sender && a.sender.getParentEditor(); c && setTimeout(function () {
                    c.fire("reloadMarkupScayt",
                        { removeOptions: { removeInside: !0, forceBookmark: !0 }, timeout: 0 })
                }, 0)
            }); if ("replace" === e) a.on("hide", function (a) { a = a.sender && a.sender.getParentEditor(); var c = CKEDITOR.plugins.scayt, d = a.scayt; a && setTimeout(function () { d && (d.fire("removeMarkupInDocument", {}), c.reloadMarkup(d)) }, 0) })
        }), CKEDITOR.on("scaytReady", function () {
            if (!0 === CKEDITOR.config.scayt_handleCheckDirty) {
                var a = CKEDITOR.editor.prototype; a.checkDirty = CKEDITOR.tools.override(a.checkDirty, function (a) {
                    return function () {
                        var c = null, d = this.scayt; if (CKEDITOR.plugins.scayt &&
                            CKEDITOR.plugins.scayt.state.scayt[this.name] && this.scayt) { if (c = "ready" == this.status) var e = d.removeMarkupFromString(this.getSnapshot()), d = d.removeMarkupFromString(this._.previousValue), c = c && d !== e } else c = a.call(this); return c
                    }
                }); a.resetDirty = CKEDITOR.tools.override(a.resetDirty, function (a) { return function () { var c = this.scayt; CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[this.name] && this.scayt ? this._.previousValue = c.removeMarkupFromString(this.getSnapshot()) : a.call(this) } })
            } if (!0 === CKEDITOR.config.scayt_handleUndoRedo) {
                var a =
                    CKEDITOR.plugins.undo.Image.prototype, e = "function" == typeof a.equalsContent ? "equalsContent" : "equals"; a[e] = CKEDITOR.tools.override(a[e], function (a) { return function (c) { var d = c.editor.scayt, e = this.contents, k = c.contents, g = null; CKEDITOR.plugins.scayt && CKEDITOR.plugins.scayt.state.scayt[c.editor.name] && c.editor.scayt && (this.contents = d.removeMarkupFromString(e) || "", c.contents = d.removeMarkupFromString(k) || ""); g = a.apply(this, arguments); this.contents = e; c.contents = k; return g } })
            }
        }), function () {
            var a = {
                preserveState: !0,
                editorFocus: !1, readOnly: 1, exec: function (a) { this.toggleState(); this.refresh(a) }, refresh: function (a) { if (a.document) { var b = this.state == CKEDITOR.TRISTATE_ON ? "attachClass" : "removeClass"; a.editable()[b]("cke_show_borders") } }
            }; CKEDITOR.plugins.add("showborders", {
                modes: { wysiwyg: 1 }, onLoad: function () {
                    var a; a = (CKEDITOR.env.ie6Compat ? [".%1 table.%2,", ".%1 table.%2 td, .%1 table.%2 th", "{", "border : #d3d3d3 1px dotted", "}"] : ".%1 table.%2,;.%1 table.%2 \x3e tr \x3e td, .%1 table.%2 \x3e tr \x3e th,;.%1 table.%2 \x3e tbody \x3e tr \x3e td, .%1 table.%2 \x3e tbody \x3e tr \x3e th,;.%1 table.%2 \x3e thead \x3e tr \x3e td, .%1 table.%2 \x3e thead \x3e tr \x3e th,;.%1 table.%2 \x3e tfoot \x3e tr \x3e td, .%1 table.%2 \x3e tfoot \x3e tr \x3e th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g,
                        "cke_show_border").replace(/%1/g, "cke_show_borders "); CKEDITOR.addCss(a)
                }, init: function (e) {
                    var b = e.addCommand("showborders", a); b.canUndo = !1; !1 !== e.config.startupShowBorders && b.setState(CKEDITOR.TRISTATE_ON); e.on("mode", function () { b.state != CKEDITOR.TRISTATE_DISABLED && b.refresh(e) }, null, null, 100); e.on("contentDom", function () { b.state != CKEDITOR.TRISTATE_DISABLED && b.refresh(e) }); e.on("removeFormatCleanup", function (a) {
                        a = a.data; e.getCommand("showborders").state == CKEDITOR.TRISTATE_ON && a.is("table") && (!a.hasAttribute("border") ||
                            0 >= parseInt(a.getAttribute("border"), 10)) && a.addClass("cke_show_border")
                    })
                }, afterInit: function (a) {
                    var b = a.dataProcessor; a = b && b.dataFilter; b = b && b.htmlFilter; a && a.addRules({ elements: { table: function (a) { a = a.attributes; var b = a["class"], e = parseInt(a.border, 10); e && !(0 >= e) || b && -1 != b.indexOf("cke_show_border") || (a["class"] = (b || "") + " cke_show_border") } } }); b && b.addRules({
                        elements: {
                            table: function (a) {
                                a = a.attributes; var b = a["class"]; b && (a["class"] = b.replace("cke_show_border", "").replace(/\s{2}/, " ").replace(/^\s+|\s+$/,
                                    ""))
                            }
                        }
                    })
                }
            }); CKEDITOR.on("dialogDefinition", function (a) {
                var b = a.data.name; if ("table" == b || "tableProperties" == b) if (a = a.data.definition, b = a.getContents("info").get("txtBorder"), b.commit = CKEDITOR.tools.override(b.commit, function (a) { return function (b, e) { a.apply(this, arguments); var k = parseInt(this.getValue(), 10); e[!k || 0 >= k ? "addClass" : "removeClass"]("cke_show_border") } }), a = (a = a.getContents("advanced")) && a.get("advCSSClasses")) a.setup = CKEDITOR.tools.override(a.setup, function (a) {
                    return function () {
                        a.apply(this,
                            arguments); this.setValue(this.getValue().replace(/cke_show_border/, ""))
                    }
                }), a.commit = CKEDITOR.tools.override(a.commit, function (a) { return function (b, e) { a.apply(this, arguments); parseInt(e.getAttribute("border"), 10) || e.addClass("cke_show_border") } })
            })
        }(), function () {
            CKEDITOR.plugins.add("sourcearea", {
                init: function (e) {
                    function b() {
                        var a = d && this.equals(CKEDITOR.document.getActive()); this.hide(); this.setStyle("height", this.getParent().$.clientHeight + "px"); this.setStyle("width", this.getParent().$.clientWidth +
                            "px"); this.show(); a && this.focus()
                    } if (e.elementMode != CKEDITOR.ELEMENT_MODE_INLINE) {
                        var c = CKEDITOR.plugins.sourcearea; e.addMode("source", function (c) {
                            var d = e.ui.space("contents").getDocument().createElement("textarea"); d.setStyles(CKEDITOR.tools.extend({ width: CKEDITOR.env.ie7Compat ? "99%" : "100%", height: "100%", resize: "none", outline: "none", "text-align": "left" }, CKEDITOR.tools.cssVendorPrefix("tab-size", e.config.sourceAreaTabSize || 4))); d.setAttribute("dir", "ltr"); d.addClass("cke_source").addClass("cke_reset").addClass("cke_enable_context_menu");
                            e.ui.space("contents").append(d); d = e.editable(new a(e, d)); d.setData(e.getData(1)); CKEDITOR.env.ie && (d.attachListener(e, "resize", b, d), d.attachListener(CKEDITOR.document.getWindow(), "resize", b, d), CKEDITOR.tools.setTimeout(b, 0, d)); e.fire("ariaWidget", this); c()
                        }); e.addCommand("source", c.commands.source); e.ui.addButton && e.ui.addButton("Source", { label: e.lang.sourcearea.toolbar, command: "source", toolbar: "mode,10" }); e.on("mode", function () {
                            e.getCommand("source").setState("source" == e.mode ? CKEDITOR.TRISTATE_ON :
                                CKEDITOR.TRISTATE_OFF)
                        }); var d = CKEDITOR.env.ie && 9 == CKEDITOR.env.version
                    }
                }
            }); var a = CKEDITOR.tools.createClass({
                base: CKEDITOR.editable, proto: {
                    setData: function (a) { this.setValue(a); this.status = "ready"; this.editor.fire("dataReady") }, getData: function () { return this.getValue() }, insertHtml: function () { }, insertElement: function () { }, insertText: function () { }, setReadOnly: function (a) { this[(a ? "set" : "remove") + "Attribute"]("readOnly", "readonly") }, detach: function () {
                        a.baseProto.detach.call(this); this.clearCustomData();
                        this.remove()
                    }
                }
            })
        }(), CKEDITOR.plugins.sourcearea = { commands: { source: { modes: { wysiwyg: 1, source: 1 }, editorFocus: !1, readOnly: 1, exec: function (a) { "wysiwyg" == a.mode && a.fire("saveSnapshot"); a.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED); a.setMode("source" == a.mode ? "wysiwyg" : "source") }, canUndo: !1 } } }, CKEDITOR.plugins.add("specialchar", {
            availableLangs: {
                af: 1, ar: 1, az: 1, bg: 1, ca: 1, cs: 1, cy: 1, da: 1, de: 1, "de-ch": 1, el: 1, en: 1, "en-au": 1, "en-ca": 1, "en-gb": 1, eo: 1, es: 1, "es-mx": 1, et: 1, eu: 1, fa: 1, fi: 1, fr: 1, "fr-ca": 1,
                gl: 1, he: 1, hr: 1, hu: 1, id: 1, it: 1, ja: 1, km: 1, ko: 1, ku: 1, lt: 1, lv: 1, nb: 1, nl: 1, no: 1, oc: 1, pl: 1, pt: 1, "pt-br": 1, ro: 1, ru: 1, si: 1, sk: 1, sl: 1, sq: 1, sv: 1, th: 1, tr: 1, tt: 1, ug: 1, uk: 1, vi: 1, zh: 1, "zh-cn": 1
            }, requires: "dialog", init: function (a) {
                var e = this; CKEDITOR.dialog.add("specialchar", this.path + "dialogs/specialchar.js"); a.addCommand("specialchar", {
                    exec: function () {
                        var b = a.langCode, b = e.availableLangs[b] ? b : e.availableLangs[b.replace(/-.*/, "")] ? b.replace(/-.*/, "") : "en"; CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e.path + "dialogs/lang/" +
                            b + ".js"), function () { CKEDITOR.tools.extend(a.lang.specialchar, e.langEntries[b]); a.openDialog("specialchar") })
                    }, modes: { wysiwyg: 1 }, canUndo: !1
                }); a.ui.addButton && a.ui.addButton("SpecialChar", { label: a.lang.specialchar.toolbar, command: "specialchar", toolbar: "insert,50" })
            }
        }), CKEDITOR.config.specialChars = "! \x26quot; # $ % \x26amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; \x26lt; \x3d \x26gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ \x26euro; \x26lsquo; \x26rsquo; \x26ldquo; \x26rdquo; \x26ndash; \x26mdash; \x26iexcl; \x26cent; \x26pound; \x26curren; \x26yen; \x26brvbar; \x26sect; \x26uml; \x26copy; \x26ordf; \x26laquo; \x26not; \x26reg; \x26macr; \x26deg; \x26sup2; \x26sup3; \x26acute; \x26micro; \x26para; \x26middot; \x26cedil; \x26sup1; \x26ordm; \x26raquo; \x26frac14; \x26frac12; \x26frac34; \x26iquest; \x26Agrave; \x26Aacute; \x26Acirc; \x26Atilde; \x26Auml; \x26Aring; \x26AElig; \x26Ccedil; \x26Egrave; \x26Eacute; \x26Ecirc; \x26Euml; \x26Igrave; \x26Iacute; \x26Icirc; \x26Iuml; \x26ETH; \x26Ntilde; \x26Ograve; \x26Oacute; \x26Ocirc; \x26Otilde; \x26Ouml; \x26times; \x26Oslash; \x26Ugrave; \x26Uacute; \x26Ucirc; \x26Uuml; \x26Yacute; \x26THORN; \x26szlig; \x26agrave; \x26aacute; \x26acirc; \x26atilde; \x26auml; \x26aring; \x26aelig; \x26ccedil; \x26egrave; \x26eacute; \x26ecirc; \x26euml; \x26igrave; \x26iacute; \x26icirc; \x26iuml; \x26eth; \x26ntilde; \x26ograve; \x26oacute; \x26ocirc; \x26otilde; \x26ouml; \x26divide; \x26oslash; \x26ugrave; \x26uacute; \x26ucirc; \x26uuml; \x26yacute; \x26thorn; \x26yuml; \x26OElig; \x26oelig; \x26#372; \x26#374 \x26#373 \x26#375; \x26sbquo; \x26#8219; \x26bdquo; \x26hellip; \x26trade; \x26#9658; \x26bull; \x26rarr; \x26rArr; \x26hArr; \x26diams; \x26asymp;".split(" "),
        function () {
            CKEDITOR.plugins.add("stylescombo", {
                requires: "richcombo", init: function (a) {
                    var e = a.config, b = a.lang.stylescombo, c = {}, d = [], l = []; a.on("stylesSet", function (b) {
                        if (b = b.data.styles) {
                            for (var g, h, m, f = 0, n = b.length; f < n; f++)(g = b[f], a.blockless && g.element in CKEDITOR.dtd.$block || "string" == typeof g.type && !CKEDITOR.style.customHandlers[g.type] || (h = g.name, g = new CKEDITOR.style(g), a.filter.customConfig && !a.filter.check(g))) || (g._name = h, g._.enterMode = e.enterMode, g._.type = m = g.assignedTo || g.type, g._.weight =
                                f + 1E3 * (m == CKEDITOR.STYLE_OBJECT ? 1 : m == CKEDITOR.STYLE_BLOCK ? 2 : 3), c[h] = g, d.push(g), l.push(g)); d.sort(function (a, b) { return a._.weight - b._.weight })
                        }
                    }); a.ui.addRichCombo("Styles", {
                        label: b.label, title: b.panelTitle, toolbar: "styles,10", allowedContent: l, panel: { css: [CKEDITOR.skin.getPath("editor")].concat(e.contentsCss), multiSelect: !0, attributes: { "aria-label": b.panelTitle } }, init: function () {
                            var a, c, e, l, f, n; f = 0; for (n = d.length; f < n; f++)a = d[f], c = a._name, l = a._.type, l != e && (this.startGroup(b["panelTitle" + String(l)]),
                                e = l), this.add(c, a.type == CKEDITOR.STYLE_OBJECT ? c : a.buildPreview(), c); this.commit()
                        }, onClick: function (b) { a.focus(); a.fire("saveSnapshot"); b = c[b]; var d = a.elementPath(); if (b.group && b.removeStylesFromSameGroup(a)) a.applyStyle(b); else a[b.checkActive(d, a) ? "removeStyle" : "applyStyle"](b); a.fire("saveSnapshot") }, onRender: function () {
                            a.on("selectionChange", function (b) {
                                var d = this.getValue(); b = b.data.path.elements; for (var e = 0, l = b.length, f; e < l; e++) {
                                    f = b[e]; for (var n in c) if (c[n].checkElementRemovable(f, !0, a)) {
                                        n !=
                                        d && this.setValue(n); return
                                    }
                                } this.setValue("")
                            }, this)
                        }, onOpen: function () {
                            var d = a.getSelection(), d = d.getSelectedElement() || d.getStartElement() || a.editable(), d = a.elementPath(d), e = [0, 0, 0, 0]; this.showAll(); this.unmarkAll(); for (var h in c) { var l = c[h], f = l._.type; l.checkApplicable(d, a, a.activeFilter) ? e[f]++ : this.hideItem(h); l.checkActive(d, a) && this.mark(h) } e[CKEDITOR.STYLE_BLOCK] || this.hideGroup(b["panelTitle" + String(CKEDITOR.STYLE_BLOCK)]); e[CKEDITOR.STYLE_INLINE] || this.hideGroup(b["panelTitle" + String(CKEDITOR.STYLE_INLINE)]);
                            e[CKEDITOR.STYLE_OBJECT] || this.hideGroup(b["panelTitle" + String(CKEDITOR.STYLE_OBJECT)])
                        }, refresh: function () { var b = a.elementPath(); if (b) { for (var d in c) if (c[d].checkApplicable(b, a, a.activeFilter)) return; this.setState(CKEDITOR.TRISTATE_DISABLED) } }, reset: function () { c = {}; d = [] }
                    })
                }
            })
        }(), function () {
            function a(a) {
                return {
                    editorFocus: !1, canUndo: !1, modes: { wysiwyg: 1 }, exec: function (b) {
                        if (b.editable().hasFocus) {
                            var c = b.getSelection(), e; if (e = (new CKEDITOR.dom.elementPath(c.getCommonAncestor(), c.root)).contains({
                                td: 1,
                                th: 1
                            }, 1)) {
                                var c = b.createRange(), h = CKEDITOR.tools.tryThese(function () { var b = e.getParent().$.cells[e.$.cellIndex + (a ? -1 : 1)]; b.parentNode.parentNode; return b }, function () { var b = e.getParent(), b = b.getAscendant("table").$.rows[b.$.rowIndex + (a ? -1 : 1)]; return b.cells[a ? b.cells.length - 1 : 0] }); if (h || a) if (h) h = new CKEDITOR.dom.element(h), c.moveToElementEditStart(h), c.checkStartOfBlock() && c.checkEndOfBlock() || c.selectNodeContents(h); else return !0; else {
                                    for (var m = e.getAscendant("table").$, h = e.getParent().$.cells, m =
                                        new CKEDITOR.dom.element(m.insertRow(-1), b.document), f = 0, n = h.length; f < n; f++)m.append((new CKEDITOR.dom.element(h[f], b.document)).clone(!1, !1)).appendBogus(); c.moveToElementEditStart(m)
                                } c.select(!0); return !0
                            }
                        } return !1
                    }
                }
            } var e = { editorFocus: !1, modes: { wysiwyg: 1, source: 1 } }, b = { exec: function (a) { a.container.focusNext(!0, a.tabIndex) } }, c = { exec: function (a) { a.container.focusPrevious(!0, a.tabIndex) } }; CKEDITOR.plugins.add("tab", {
                init: function (d) {
                    for (var l = !1 !== d.config.enableTabKeyTools, k = d.config.tabSpaces || 0,
                        g = ""; k--;)g += " "; if (g) d.on("key", function (a) { 9 == a.data.keyCode && (d.insertText(g), a.cancel()) }); if (l) d.on("key", function (a) { (9 == a.data.keyCode && d.execCommand("selectNextCell") || a.data.keyCode == CKEDITOR.SHIFT + 9 && d.execCommand("selectPreviousCell")) && a.cancel() }); d.addCommand("blur", CKEDITOR.tools.extend(b, e)); d.addCommand("blurBack", CKEDITOR.tools.extend(c, e)); d.addCommand("selectNextCell", a()); d.addCommand("selectPreviousCell", a(!0))
                }
            })
        }(), CKEDITOR.dom.element.prototype.focusNext = function (a, e) {
            var b =
                void 0 === e ? this.getTabIndex() : e, c, d, l, k, g, h; if (0 >= b) for (g = this.getNextSourceNode(a, CKEDITOR.NODE_ELEMENT); g;) { if (g.isVisible() && 0 === g.getTabIndex()) { l = g; break } g = g.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT) } else for (g = this.getDocument().getBody().getFirst(); g = g.getNextSourceNode(!1, CKEDITOR.NODE_ELEMENT);) {
                    if (!c) if (!d && g.equals(this)) { if (d = !0, a) { if (!(g = g.getNextSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; c = 1 } } else d && !this.contains(g) && (c = 1); if (g.isVisible() && !(0 > (h = g.getTabIndex()))) {
                        if (c && h == b) {
                            l =
                            g; break
                        } h > b && (!l || !k || h < k) ? (l = g, k = h) : l || 0 !== h || (l = g, k = h)
                    }
                } l && l.focus()
        }, CKEDITOR.dom.element.prototype.focusPrevious = function (a, e) {
            for (var b = void 0 === e ? this.getTabIndex() : e, c, d, l, k = 0, g, h = this.getDocument().getBody().getLast(); h = h.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT);) {
                if (!c) if (!d && h.equals(this)) { if (d = !0, a) { if (!(h = h.getPreviousSourceNode(!0, CKEDITOR.NODE_ELEMENT))) break; c = 1 } } else d && !this.contains(h) && (c = 1); if (h.isVisible() && !(0 > (g = h.getTabIndex()))) if (0 >= b) {
                    if (c && 0 === g) { l = h; break } g > k &&
                        (l = h, k = g)
                } else { if (c && g == b) { l = h; break } g < b && (!l || g > k) && (l = h, k = g) }
            } l && l.focus()
        }, CKEDITOR.plugins.add("table", {
            requires: "dialog", init: function (a) {
                function e(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains("table", 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } if (!a.blockless) {
                    var b = a.lang.table; a.addCommand("table", new CKEDITOR.dialogCommand("table", {
                        context: "table", allowedContent: "table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];" +
                            (a.plugins.dialogadvtab ? "table" + a.plugins.dialogadvtab.allowedContent() : ""), requiredContent: "table", contentTransformations: [["table{width}: sizeToStyle", "table[width]: sizeToAttribute"], ["td: splitBorderShorthand"], [{
                                element: "table", right: function (a) {
                                    if (a.styles) {
                                        var b; if (a.styles.border) b = CKEDITOR.tools.style.parse.border(a.styles.border); else if (CKEDITOR.env.ie && 8 === CKEDITOR.env.version) {
                                            var e = a.styles; e["border-left"] && e["border-left"] === e["border-right"] && e["border-right"] === e["border-top"] &&
                                                e["border-top"] === e["border-bottom"] && (b = CKEDITOR.tools.style.parse.border(e["border-top"]))
                                        } b && b.style && "solid" === b.style && b.width && 0 !== parseFloat(b.width) && (a.attributes.border = 1); "collapse" == a.styles["border-collapse"] && (a.attributes.cellspacing = 0)
                                    }
                                }
                            }]]
                    })); a.addCommand("tableProperties", new CKEDITOR.dialogCommand("tableProperties", e())); a.addCommand("tableDelete", e({
                        exec: function (a) {
                            var b = a.elementPath().contains("table", 1); if (b) {
                                var e = b.getParent(), k = a.editable(); 1 != e.getChildCount() || e.is("td",
                                    "th") || e.equals(k) || (b = e); a = a.createRange(); a.moveToPosition(b, CKEDITOR.POSITION_BEFORE_START); b.remove(); a.select()
                            }
                        }
                    })); a.ui.addButton && a.ui.addButton("Table", { label: b.toolbar, command: "table", toolbar: "insert,30" }); CKEDITOR.dialog.add("table", this.path + "dialogs/table.js"); CKEDITOR.dialog.add("tableProperties", this.path + "dialogs/table.js"); a.addMenuItems && a.addMenuItems({
                        table: { label: b.menu, command: "tableProperties", group: "table", order: 5 }, tabledelete: {
                            label: b.deleteTable, command: "tableDelete", group: "table",
                            order: 1
                        }
                    }); a.on("doubleclick", function (a) { a.data.element.is("table") && (a.data.dialog = "tableProperties") }); a.contextMenu && a.contextMenu.addListener(function () { return { tabledelete: CKEDITOR.TRISTATE_OFF, table: CKEDITOR.TRISTATE_OFF } })
                }
            }
        }), function () {
            function a(a, b) {
                function c(a) { return b ? b.contains(a) && a.getAscendant("table", !0).equals(b) : !0 } function d(a) {
                    0 < e.length || a.type != CKEDITOR.NODE_ELEMENT || !v.test(a.getName()) || a.getCustomData("selected_cell") || (CKEDITOR.dom.element.setMarker(f, a, "selected_cell",
                        !0), e.push(a))
                } var e = [], f = {}; if (!a) return e; for (var g = a.getRanges(), h = 0; h < g.length; h++) { var k = g[h]; if (k.collapsed) (k = k.getCommonAncestor().getAscendant({ td: 1, th: 1 }, !0)) && c(k) && e.push(k); else { var k = new CKEDITOR.dom.walker(k), l; for (k.guard = d; l = k.next();)l.type == CKEDITOR.NODE_ELEMENT && l.is(CKEDITOR.dtd.table) || (l = l.getAscendant({ td: 1, th: 1 }, !0)) && !l.getCustomData("selected_cell") && c(l) && (CKEDITOR.dom.element.setMarker(f, l, "selected_cell", !0), e.push(l)) } } CKEDITOR.dom.element.clearAllMarkers(f); return e
            }
            function e(b, c) {
                for (var d = y(b) ? b : a(b), e = d[0], f = e.getAscendant("table"), e = e.getDocument(), g = d[0].getParent(), h = g.$.rowIndex, d = d[d.length - 1], k = d.getParent().$.rowIndex + d.$.rowSpan - 1, d = new CKEDITOR.dom.element(f.$.rows[k]), h = c ? h : k, g = c ? g : d, d = CKEDITOR.tools.buildTableMap(f), f = d[h], h = c ? d[h - 1] : d[h + 1], d = d[0].length, e = e.createElement("tr"), k = 0; f[k] && k < d; k++) {
                    var l; 1 < f[k].rowSpan && h && f[k] == h[k] ? (l = f[k], l.rowSpan += 1) : (l = (new CKEDITOR.dom.element(f[k])).clone(), l.removeAttribute("rowSpan"), l.appendBogus(), e.append(l),
                        l = l.$); k += l.colSpan - 1
                } c ? e.insertBefore(g) : e.insertAfter(g); return e
            } function b(c) {
                if (c instanceof CKEDITOR.dom.selection) {
                    var d = c.getRanges(), e = a(c), f = e[0].getAscendant("table"), g = CKEDITOR.tools.buildTableMap(f), h = e[0].getParent().$.rowIndex, e = e[e.length - 1], k = e.getParent().$.rowIndex + e.$.rowSpan - 1, e = []; c.reset(); for (c = h; c <= k; c++) {
                        for (var l = g[c], m = new CKEDITOR.dom.element(f.$.rows[c]), n = 0; n < l.length; n++) {
                            var r = new CKEDITOR.dom.element(l[n]), u = r.getParent().$.rowIndex; 1 == r.$.rowSpan ? r.remove() : (--r.$.rowSpan,
                                u == c && (u = g[c + 1], u[n - 1] ? r.insertAfter(new CKEDITOR.dom.element(u[n - 1])) : (new CKEDITOR.dom.element(f.$.rows[c + 1])).append(r, 1))); n += r.$.colSpan - 1
                        } e.push(m)
                    } g = f.$.rows; d[0].moveToPosition(f, CKEDITOR.POSITION_BEFORE_START); h = new CKEDITOR.dom.element(g[k + 1] || (0 < h ? g[h - 1] : null) || f.$.parentNode); for (c = e.length; 0 <= c; c--)b(e[c]); return f.$.parentNode ? h : (d[0].select(), null)
                } c instanceof CKEDITOR.dom.element && (f = c.getAscendant("table"), 1 == f.$.rows.length ? f.remove() : c.remove()); return null
            } function c(a) {
                for (var b =
                    a.getParent().$.cells, c = 0, d = 0; d < b.length; d++) { var e = b[d], c = c + e.colSpan; if (e == a.$) break } return c - 1
            } function d(a, b) { for (var d = b ? Infinity : 0, e = 0; e < a.length; e++) { var f = c(a[e]); if (b ? f < d : f > d) d = f } return d } function l(b, c) {
                for (var e = y(b) ? b : a(b), f = e[0].getAscendant("table"), g = d(e, 1), e = d(e), h = c ? g : e, k = CKEDITOR.tools.buildTableMap(f), f = [], g = [], e = [], l = k.length, m = 0; m < l; m++)f.push(k[m][h]), g.push(c ? k[m][h - 1] : k[m][h + 1]); for (m = 0; m < l; m++)f[m] && (1 < f[m].colSpan && g[m] == f[m] ? (k = f[m], k.colSpan += 1) : (h = new CKEDITOR.dom.element(f[m]),
                    k = h.clone(), k.removeAttribute("colSpan"), k.appendBogus(), k[c ? "insertBefore" : "insertAfter"].call(k, h), e.push(k), k = k.$), m += k.rowSpan - 1); return e
            } function k(b) {
                function c(a) {
                    var b, d, e; b = a.getRanges(); if (1 !== b.length) return a; b = b[0]; if (b.collapsed || 0 !== b.endOffset) return a; d = b.endContainer; e = d.getName().toLowerCase(); if ("td" !== e && "th" !== e) return a; for ((e = d.getPrevious()) || (e = d.getParent().getPrevious().getLast()); e.type !== CKEDITOR.NODE_TEXT && "br" !== e.getName().toLowerCase();)if (e = e.getLast(), !e) return a;
                    b.setEndAt(e, CKEDITOR.POSITION_BEFORE_END); return b.select()
                } CKEDITOR.env.webkit && !b.isFake && (b = c(b)); var d = b.getRanges(), e = a(b), f = e[0], g = e[e.length - 1], e = f.getAscendant("table"), h = CKEDITOR.tools.buildTableMap(e), k, l, m = []; b.reset(); var n = 0; for (b = h.length; n < b; n++)for (var r = 0, u = h[n].length; r < u; r++)void 0 === k && h[n][r] == f.$ && (k = r), h[n][r] == g.$ && (l = r); for (n = k; n <= l; n++)for (r = 0; r < h.length; r++)g = h[r], f = new CKEDITOR.dom.element(e.$.rows[r]), g = new CKEDITOR.dom.element(g[n]), g.$ && (1 == g.$.colSpan ? g.remove() : --g.$.colSpan,
                    r += g.$.rowSpan - 1, f.$.cells.length || m.push(f)); k = h[0].length - 1 > l ? new CKEDITOR.dom.element(h[0][l + 1]) : k && -1 !== h[0][k - 1].cellIndex ? new CKEDITOR.dom.element(h[0][k - 1]) : new CKEDITOR.dom.element(e.$.parentNode); m.length == b && (d[0].moveToPosition(e, CKEDITOR.POSITION_AFTER_END), d[0].select(), e.remove()); return k
            } function g(a, b) { var c = a.getStartElement().getAscendant({ td: 1, th: 1 }, !0); if (c) { var d = c.clone(); d.appendBogus(); b ? d.insertBefore(c) : d.insertAfter(c) } } function h(b) {
                if (b instanceof CKEDITOR.dom.selection) {
                    var c =
                        b.getRanges(), d = a(b), e = d[0] && d[0].getAscendant("table"), f; a: { var g = 0; f = d.length - 1; for (var k = {}, l, n; l = d[g++];)CKEDITOR.dom.element.setMarker(k, l, "delete_cell", !0); for (g = 0; l = d[g++];)if ((n = l.getPrevious()) && !n.getCustomData("delete_cell") || (n = l.getNext()) && !n.getCustomData("delete_cell")) { CKEDITOR.dom.element.clearAllMarkers(k); f = n; break a } CKEDITOR.dom.element.clearAllMarkers(k); g = d[0].getParent(); (g = g.getPrevious()) ? f = g.getLast() : (g = d[f].getParent(), f = (g = g.getNext()) ? g.getChild(0) : null) } b.reset(); for (b =
                            d.length - 1; 0 <= b; b--)h(d[b]); f ? m(f, !0) : e && (c[0].moveToPosition(e, CKEDITOR.POSITION_BEFORE_START), c[0].select(), e.remove())
                } else b instanceof CKEDITOR.dom.element && (c = b.getParent(), 1 == c.getChildCount() ? c.remove() : b.remove())
            } function m(a, b) { var c = a.getDocument(), d = CKEDITOR.document; CKEDITOR.env.ie && 10 == CKEDITOR.env.version && (d.focus(), c.focus()); c = new CKEDITOR.dom.range(c); c["moveToElementEdit" + (b ? "End" : "Start")](a) || (c.selectNodeContents(a), c.collapse(b ? !1 : !0)); c.select(!0) } function f(a, b, c) {
                a = a[b];
                if ("undefined" == typeof c) return a; for (b = 0; a && b < a.length; b++) { if (c.is && a[b] == c.$) return b; if (b == c) return new CKEDITOR.dom.element(a[b]) } return c.is ? -1 : null
            } function n(b, c, d) {
                var e = a(b), g; if ((c ? 1 != e.length : 2 > e.length) || (g = b.getCommonAncestor()) && g.type == CKEDITOR.NODE_ELEMENT && g.is("table")) return !1; var h; b = e[0]; g = b.getAscendant("table"); var k = CKEDITOR.tools.buildTableMap(g), l = k.length, m = k[0].length, n = b.getParent().$.rowIndex, r = f(k, n, b); if (c) {
                    var u; try {
                        var v = parseInt(b.getAttribute("rowspan"), 10) || 1;
                        h = parseInt(b.getAttribute("colspan"), 10) || 1; u = k["up" == c ? n - v : "down" == c ? n + v : n]["left" == c ? r - h : "right" == c ? r + h : r]
                    } catch (y) { return !1 } if (!u || b.$ == u) return !1; e["up" == c || "left" == c ? "unshift" : "push"](new CKEDITOR.dom.element(u))
                } c = b.getDocument(); var K = n, v = u = 0, J = !d && new CKEDITOR.dom.documentFragment(c), D = 0; for (c = 0; c < e.length; c++) {
                    h = e[c]; var R = h.getParent(), N = h.getFirst(), S = h.$.colSpan, L = h.$.rowSpan, R = R.$.rowIndex, V = f(k, R, h), D = D + S * L, v = Math.max(v, V - r + S); u = Math.max(u, R - n + L); d || (S = h, (L = S.getBogus()) && L.remove(),
                        S.trim(), h.getChildren().count() && (R == K || !N || N.isBlockBoundary && N.isBlockBoundary({ br: 1 }) || (K = J.getLast(CKEDITOR.dom.walker.whitespaces(!0)), !K || K.is && K.is("br") || J.append("br")), h.moveChildren(J)), c ? h.remove() : h.setHtml("")); K = R
                } if (d) return u * v == D; J.moveChildren(b); b.appendBogus(); v >= m ? b.removeAttribute("rowSpan") : b.$.rowSpan = u; u >= l ? b.removeAttribute("colSpan") : b.$.colSpan = v; d = new CKEDITOR.dom.nodeList(g.$.rows); e = d.count(); for (c = e - 1; 0 <= c; c--)g = d.getItem(c), g.$.cells.length || (g.remove(), e++); return b
            }
            function r(b, c) {
                var d = a(b); if (1 < d.length) return !1; if (c) return !0; var d = d[0], e = d.getParent(), g = e.getAscendant("table"), h = CKEDITOR.tools.buildTableMap(g), k = e.$.rowIndex, l = f(h, k, d), m = d.$.rowSpan, n; if (1 < m) { n = Math.ceil(m / 2); for (var m = Math.floor(m / 2), e = k + n, g = new CKEDITOR.dom.element(g.$.rows[e]), h = f(h, e), r, e = d.clone(), k = 0; k < h.length; k++)if (r = h[k], r.parentNode == g.$ && k > l) { e.insertBefore(new CKEDITOR.dom.element(r)); break } else r = null; r || g.append(e) } else for (m = n = 1, g = e.clone(), g.insertAfter(e), g.append(e = d.clone()),
                    r = f(h, k), l = 0; l < r.length; l++)r[l].rowSpan++; e.appendBogus(); d.$.rowSpan = n; e.$.rowSpan = m; 1 == n && d.removeAttribute("rowSpan"); 1 == m && e.removeAttribute("rowSpan"); return e
            } function u(b, c) {
                var d = a(b); if (1 < d.length) return !1; if (c) return !0; var d = d[0], e = d.getParent(), g = e.getAscendant("table"), g = CKEDITOR.tools.buildTableMap(g), h = f(g, e.$.rowIndex, d), k = d.$.colSpan; if (1 < k) e = Math.ceil(k / 2), k = Math.floor(k / 2); else {
                    for (var k = e = 1, l = [], m = 0; m < g.length; m++) { var n = g[m]; l.push(n[h]); 1 < n[h].rowSpan && (m += n[h].rowSpan - 1) } for (g =
                        0; g < l.length; g++)l[g].colSpan++
                } g = d.clone(); g.insertAfter(d); g.appendBogus(); d.$.colSpan = e; g.$.colSpan = k; 1 == e && d.removeAttribute("colSpan"); 1 == k && g.removeAttribute("colSpan"); return g
            } var v = /^(?:td|th)$/, y = CKEDITOR.tools.isArray; CKEDITOR.plugins.tabletools = {
                requires: "table,dialog,contextmenu", init: function (c) {
                    function d(a) { return CKEDITOR.tools.extend(a || {}, { contextSensitive: 1, refresh: function (a, b) { this.setState(b.contains({ td: 1, th: 1 }, 1) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) } }) } function f(a,
                        b) { var d = c.addCommand(a, b); c.addFeature(d) } var v = c.lang.table, t = CKEDITOR.tools.style.parse; f("cellProperties", new CKEDITOR.dialogCommand("cellProperties", d({
                            allowedContent: "td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]", requiredContent: "table", contentTransformations: [[{ element: "td", left: function (a) { return a.styles.background && t.background(a.styles.background).color }, right: function (a) { a.styles["background-color"] = t.background(a.styles.background).color } },
                            { element: "td", check: "td{vertical-align}", left: function (a) { return a.attributes && a.attributes.valign }, right: function (a) { a.styles["vertical-align"] = a.attributes.valign; delete a.attributes.valign } }], [{ element: "tr", check: "td{height}", left: function (a) { return a.styles && a.styles.height }, right: function (a) { CKEDITOR.tools.array.forEach(a.children, function (b) { b.name in { td: 1, th: 1 } && (b.attributes["cke-row-height"] = a.styles.height) }); delete a.styles.height } }], [{
                                element: "td", check: "td{height}", left: function (a) {
                                    return (a =
                                        a.attributes) && a["cke-row-height"]
                                }, right: function (a) { a.styles.height = a.attributes["cke-row-height"]; delete a.attributes["cke-row-height"] }
                            }]]
                        }))); CKEDITOR.dialog.add("cellProperties", this.path + "dialogs/tableCell.js"); f("rowDelete", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); (a = b(a)) && m(a) } })); f("rowInsertBefore", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); e(b, !0) } })); f("rowInsertAfter", d({
                            requiredContent: "table", exec: function (b) {
                                b = b.getSelection(); b = a(b);
                                e(b)
                            }
                        })); f("columnDelete", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); (a = k(a)) && m(a, !0) } })); f("columnInsertBefore", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); l(b, !0) } })); f("columnInsertAfter", d({ requiredContent: "table", exec: function (b) { b = b.getSelection(); b = a(b); l(b) } })); f("cellDelete", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); h(a) } })); f("cellMerge", d({
                            allowedContent: "td[colspan,rowspan]", requiredContent: "td[colspan,rowspan]", exec: function (a,
                                b) { b.cell = n(a.getSelection()); m(b.cell, !0) }
                        })); f("cellMergeRight", d({ allowedContent: "td[colspan]", requiredContent: "td[colspan]", exec: function (a, b) { b.cell = n(a.getSelection(), "right"); m(b.cell, !0) } })); f("cellMergeDown", d({ allowedContent: "td[rowspan]", requiredContent: "td[rowspan]", exec: function (a, b) { b.cell = n(a.getSelection(), "down"); m(b.cell, !0) } })); f("cellVerticalSplit", d({ allowedContent: "td[rowspan]", requiredContent: "td[rowspan]", exec: function (a) { m(u(a.getSelection())) } })); f("cellHorizontalSplit",
                            d({ allowedContent: "td[colspan]", requiredContent: "td[colspan]", exec: function (a) { m(r(a.getSelection())) } })); f("cellInsertBefore", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); g(a, !0) } })); f("cellInsertAfter", d({ requiredContent: "table", exec: function (a) { a = a.getSelection(); g(a) } })); c.addMenuItems && c.addMenuItems({
                                tablecell: {
                                    label: v.cell.menu, group: "tablecell", order: 1, getItems: function () {
                                        var b = c.getSelection(), d = a(b); return {
                                            tablecell_insertBefore: CKEDITOR.TRISTATE_OFF, tablecell_insertAfter: CKEDITOR.TRISTATE_OFF,
                                            tablecell_delete: CKEDITOR.TRISTATE_OFF, tablecell_merge: n(b, null, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_right: n(b, "right", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_merge_down: n(b, "down", !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_vertical: u(b, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_split_horizontal: r(b, !0) ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED, tablecell_properties: 0 < d.length ? CKEDITOR.TRISTATE_OFF :
                                                CKEDITOR.TRISTATE_DISABLED
                                        }
                                    }
                                }, tablecell_insertBefore: { label: v.cell.insertBefore, group: "tablecell", command: "cellInsertBefore", order: 5 }, tablecell_insertAfter: { label: v.cell.insertAfter, group: "tablecell", command: "cellInsertAfter", order: 10 }, tablecell_delete: { label: v.cell.deleteCell, group: "tablecell", command: "cellDelete", order: 15 }, tablecell_merge: { label: v.cell.merge, group: "tablecell", command: "cellMerge", order: 16 }, tablecell_merge_right: {
                                    label: v.cell.mergeRight, group: "tablecell", command: "cellMergeRight",
                                    order: 17
                                }, tablecell_merge_down: { label: v.cell.mergeDown, group: "tablecell", command: "cellMergeDown", order: 18 }, tablecell_split_horizontal: { label: v.cell.splitHorizontal, group: "tablecell", command: "cellHorizontalSplit", order: 19 }, tablecell_split_vertical: { label: v.cell.splitVertical, group: "tablecell", command: "cellVerticalSplit", order: 20 }, tablecell_properties: { label: v.cell.title, group: "tablecellproperties", command: "cellProperties", order: 21 }, tablerow: {
                                    label: v.row.menu, group: "tablerow", order: 1, getItems: function () {
                                        return {
                                            tablerow_insertBefore: CKEDITOR.TRISTATE_OFF,
                                            tablerow_insertAfter: CKEDITOR.TRISTATE_OFF, tablerow_delete: CKEDITOR.TRISTATE_OFF
                                        }
                                    }
                                }, tablerow_insertBefore: { label: v.row.insertBefore, group: "tablerow", command: "rowInsertBefore", order: 5 }, tablerow_insertAfter: { label: v.row.insertAfter, group: "tablerow", command: "rowInsertAfter", order: 10 }, tablerow_delete: { label: v.row.deleteRow, group: "tablerow", command: "rowDelete", order: 15 }, tablecolumn: {
                                    label: v.column.menu, group: "tablecolumn", order: 1, getItems: function () {
                                        return {
                                            tablecolumn_insertBefore: CKEDITOR.TRISTATE_OFF,
                                            tablecolumn_insertAfter: CKEDITOR.TRISTATE_OFF, tablecolumn_delete: CKEDITOR.TRISTATE_OFF
                                        }
                                    }
                                }, tablecolumn_insertBefore: { label: v.column.insertBefore, group: "tablecolumn", command: "columnInsertBefore", order: 5 }, tablecolumn_insertAfter: { label: v.column.insertAfter, group: "tablecolumn", command: "columnInsertAfter", order: 10 }, tablecolumn_delete: { label: v.column.deleteColumn, group: "tablecolumn", command: "columnDelete", order: 15 }
                            }); c.contextMenu && c.contextMenu.addListener(function (a, b, c) {
                                return (a = c.contains({ td: 1, th: 1 },
                                    1)) && !a.isReadOnly() ? { tablecell: CKEDITOR.TRISTATE_OFF, tablerow: CKEDITOR.TRISTATE_OFF, tablecolumn: CKEDITOR.TRISTATE_OFF } : null
                            })
                }, getCellColIndex: c, insertRow: e, insertColumn: l, getSelectedCells: a
            }; CKEDITOR.plugins.add("tabletools", CKEDITOR.plugins.tabletools)
        }(), CKEDITOR.tools.buildTableMap = function (a, e, b, c, d) {
            a = a.$.rows; b = b || 0; c = "number" === typeof c ? c : a.length - 1; d = "number" === typeof d ? d : -1; var l = -1, k = []; for (e = e || 0; e <= c; e++) {
                l++; !k[l] && (k[l] = []); for (var g = -1, h = b; h <= (-1 === d ? a[e].cells.length - 1 : d); h++) {
                    var m =
                        a[e].cells[h]; if (!m) break; for (g++; k[l][g];)g++; for (var f = isNaN(m.colSpan) ? 1 : m.colSpan, m = isNaN(m.rowSpan) ? 1 : m.rowSpan, n = 0; n < m && !(e + n > c); n++) { k[l + n] || (k[l + n] = []); for (var r = 0; r < f; r++)k[l + n][g + r] = a[e].cells[h] } g += f - 1; if (-1 !== d && g >= d) break
                }
            } return k
        }, function () {
            function a(a) { return CKEDITOR.plugins.widget && CKEDITOR.plugins.widget.isDomWidget(a) } function e(a, b) {
                var c = a.getAscendant("table"), d = b.getAscendant("table"), e = CKEDITOR.tools.buildTableMap(c), f = m(a), g = m(b), h = [], k = {}, l, n; c.contains(d) && (b = b.getAscendant({
                    td: 1,
                    th: 1
                }), g = m(b)); f > g && (c = f, f = g, g = c, c = a, a = b, b = c); for (c = 0; c < e[f].length; c++)if (a.$ === e[f][c]) { l = c; break } for (c = 0; c < e[g].length; c++)if (b.$ === e[g][c]) { n = c; break } l > n && (c = l, l = n, n = c); for (c = f; c <= g; c++)for (f = l; f <= n; f++)d = new CKEDITOR.dom.element(e[c][f]), d.$ && !d.getCustomData("selected_cell") && (h.push(d), CKEDITOR.dom.element.setMarker(k, d, "selected_cell", !0)); CKEDITOR.dom.element.clearAllMarkers(k); return h
            } function b(a) {
                if (a) return a = a.clone(), a.enlarge(CKEDITOR.ENLARGE_ELEMENT), (a = a.getEnclosedNode()) && a.is &&
                    a.is(CKEDITOR.dtd.$tableContent)
            } function c(a) { return (a = a.editable().findOne(".cke_table-faked-selection")) && a.getAscendant("table") } function d(a, b) {
                var c = a.editable().find(".cke_table-faked-selection"), d; a.fire("lockSnapshot"); a.editable().removeClass("cke_table-faked-selection-editor"); for (d = 0; d < c.count(); d++)c.getItem(d).removeClass("cke_table-faked-selection"); 0 < c.count() && c.getItem(0).getAscendant("table").data("cke-table-faked-selection-table", !1); a.fire("unlockSnapshot"); b && (p = { active: !1 },
                    a.getSelection().isInTable() && a.getSelection().reset())
            } function l(a, b) { var c = [], d, e; for (e = 0; e < b.length; e++)d = a.createRange(), d.setStartBefore(b[e]), d.setEndAfter(b[e]), c.push(d); a.getSelection().selectRanges(c) } function k(a) { var b = a.editable().find(".cke_table-faked-selection"); 1 > b.count() || (b = e(b.getItem(0), b.getItem(b.count() - 1)), l(a, b)) } function g(b, c, f) {
                var g = q(b.getSelection(!0)); c = c.is("table") ? null : c; var h; (h = p.active && !p.first) && !(h = c) && (h = b.getSelection().getRanges(), h = 1 < g.length || h[0] &&
                    !h[0].collapsed ? !0 : !1); if (h) p.first = c || g[0], p.dirty = c ? !1 : 1 !== g.length; else if (p.active && c && p.first.getAscendant("table").equals(c.getAscendant("table"))) { g = e(p.first, c); if (!p.dirty && 1 === g.length && !a(f.data.getTarget())) return d(b, "mouseup" === f.name); p.dirty = !0; p.last = c; l(b, g) }
            } function h(a) {
                var b = (a = a.editor || a.sender.editor) && a.getSelection(), c = b && b.getRanges() || [], e; if (b && (d(a), b.isInTable() && b.isFake)) {
                    1 === c.length && c[0]._getTableElement() && c[0]._getTableElement().is("table") && (e = c[0]._getTableElement());
                    e = q(b, e); a.fire("lockSnapshot"); for (b = 0; b < e.length; b++)e[b].addClass("cke_table-faked-selection"); 0 < e.length && (a.editable().addClass("cke_table-faked-selection-editor"), e[0].getAscendant("table").data("cke-table-faked-selection-table", "")); a.fire("unlockSnapshot")
                }
            } function m(a) { return a.getAscendant("tr", !0).$.rowIndex } function f(b) {
                function e(a, b) { return a && b ? a.equals(b) || a.contains(b) || b.contains(a) || a.getCommonAncestor(b).is(q) : !1 } function h(a) { return !a.getAscendant("table", !0) && a.getDocument().equals(m.document) }
                function l(a, b, c, d) { return ("mousedown" !== a.name || CKEDITOR.tools.getMouseButton(a) !== CKEDITOR.MOUSE_BUTTON_LEFT && d) && ("mouseup" !== a.name || h(a.data.getTarget()) || e(c, d)) ? !1 : !0 } if (b.data.getTarget().getName && ("mouseup" === b.name || !a(b.data.getTarget()))) {
                    var m = b.editor || b.listenerData.editor, n = m.getSelection(1), r = c(m), v = b.data.getTarget(), u = v && v.getAscendant({ td: 1, th: 1 }, !0), v = v && v.getAscendant("table", !0), q = { table: 1, thead: 1, tbody: 1, tfoot: 1, tr: 1, td: 1, th: 1 }; l(b, n, r, v) && d(m, !0); !p.active && "mousedown" ===
                        b.name && CKEDITOR.tools.getMouseButton(b) === CKEDITOR.MOUSE_BUTTON_LEFT && v && (p = { active: !0 }, CKEDITOR.document.on("mouseup", f, null, { editor: m })); (u || v) && g(m, u || v, b); "mouseup" === b.name && (CKEDITOR.tools.getMouseButton(b) === CKEDITOR.MOUSE_BUTTON_LEFT && (h(b.data.getTarget()) || e(r, v)) && k(m), p = { active: !1 }, CKEDITOR.document.removeListener("mouseup", f))
                }
            } function n(a) { var b = a.data.getTarget().getAscendant({ td: 1, th: 1 }, !0); b && !b.hasClass("cke_table-faked-selection") && (a.cancel(), a.data.preventDefault()) } function r(a,
                b) {
                    function c(a) { a.cancel() } var d = a.getSelection(), e = d.createBookmarks(), f = a.document, g = a.createRange(), h = f.getDocumentElement().$, k = CKEDITOR.env.ie && 9 > CKEDITOR.env.version, l = a.blockless || CKEDITOR.env.ie ? "span" : "div", m, n, r, v; f.getById("cke_table_copybin") || (m = f.createElement(l), n = f.createElement(l), n.setAttributes({ id: "cke_table_copybin", "data-cke-temp": "1" }), m.setStyles({ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }), m.setStyle("ltr" == a.config.contentsLangDirection ? "left" : "right",
                        "-5000px"), m.setHtml(a.getSelectedHtml(!0)), a.fire("lockSnapshot"), n.append(m), a.editable().append(n), v = a.on("selectionChange", c, null, null, 0), k && (r = h.scrollTop), g.selectNodeContents(m), g.select(), k && (h.scrollTop = r), setTimeout(function () { n.remove(); d.selectBookmarks(e); v.removeListener(); a.fire("unlockSnapshot"); b && (a.extractSelectedHtml(), a.fire("saveSnapshot")) }, 100))
            } function u(a) { var b = a.editor || a.sender.editor; b.getSelection().isInTable() && r(b, "cut" === a.name) } function v(a) { this._reset(); a && this.setSelectedCells(a) }
            function y(a, b, c) { a.on("beforeCommandExec", function (c) { -1 !== CKEDITOR.tools.array.indexOf(b, c.data.name) && (c.data.selectedCells = q(a.getSelection())) }); a.on("afterCommandExec", function (d) { -1 !== CKEDITOR.tools.array.indexOf(b, d.data.name) && c(a, d.data) }) } var p = { active: !1 }, w, q, B, t, x; v.prototype = {}; v.prototype._reset = function () { this.cells = { first: null, last: null, all: [] }; this.rows = { first: null, last: null } }; v.prototype.setSelectedCells = function (a) {
                this._reset(); a = a.slice(0); this._arraySortByDOMOrder(a); this.cells.all =
                    a; this.cells.first = a[0]; this.cells.last = a[a.length - 1]; this.rows.first = a[0].getAscendant("tr"); this.rows.last = this.cells.last.getAscendant("tr")
            }; v.prototype.getTableMap = function () { var a = B(this.cells.first), b; a: { b = this.cells.last; var c = b.getAscendant("table"), d = m(b), c = CKEDITOR.tools.buildTableMap(c), e; for (e = 0; e < c[d].length; e++)if ((new CKEDITOR.dom.element(c[d][e])).equals(b)) { b = e; break a } b = void 0 } return CKEDITOR.tools.buildTableMap(this._getTable(), m(this.rows.first), a, m(this.rows.last), b) }; v.prototype._getTable =
                function () { return this.rows.first.getAscendant("table") }; v.prototype.insertRow = function (a, b, c) { if ("undefined" === typeof a) a = 1; else if (0 >= a) return; for (var d = this.cells.first.$.cellIndex, e = this.cells.last.$.cellIndex, f = c ? [] : this.cells.all, g, h = 0; h < a; h++)g = t(c ? this.cells.all : f, b), g = CKEDITOR.tools.array.filter(g.find("td, th").toArray(), function (a) { return c ? !0 : a.$.cellIndex >= d && a.$.cellIndex <= e }), f = b ? g.concat(f) : f.concat(g); this.setSelectedCells(f) }; v.prototype.insertColumn = function (a) {
                    function b(a) {
                        a =
                        m(a); return a >= e && a <= f
                    } if ("undefined" === typeof a) a = 1; else if (0 >= a) return; for (var c = this.cells, d = c.all, e = m(c.first), f = m(c.last), c = 0; c < a; c++)d = d.concat(CKEDITOR.tools.array.filter(x(d), b)); this.setSelectedCells(d)
                }; v.prototype.emptyCells = function (a) { a = a || this.cells.all; for (var b = 0; b < a.length; b++)a[b].setHtml("") }; v.prototype._arraySortByDOMOrder = function (a) { a.sort(function (a, b) { return a.getPosition(b) & CKEDITOR.POSITION_PRECEDING ? -1 : 1 }) }; var C = {
                    onPaste: function (a) {
                        function c(a) {
                            return Math.max.apply(null,
                                CKEDITOR.tools.array.map(a, function (a) { return a.length }, 0))
                        } function d(a) { var b = f.createRange(); b.selectNodeContents(a); b.select() } var f = a.editor, g = f.getSelection(), h = q(g), k = this.findTableInPastedContent(f, a.data.dataValue), m = g.isInTable(!0) && this.isBoundarySelection(g), n, r; !h.length || 1 === h.length && !b(g.getRanges()[0]) && !m || m && !k || (h = h[0].getAscendant("table"), n = new v(q(g, h)), f.once("afterPaste", function () {
                            var a; if (r) {
                                a = new CKEDITOR.dom.element(r[0][0]); var b = r[r.length - 1]; a = e(a, new CKEDITOR.dom.element(b[b.length -
                                    1]))
                            } else a = n.cells.all; l(f, a)
                        }), k ? (a.stop(), m ? (n.insertRow(1, 1 === m, !0), g.selectElement(n.rows.first)) : (n.emptyCells(), l(f, n.cells.all)), a = n.getTableMap(), r = CKEDITOR.tools.buildTableMap(k), n.insertRow(r.length - a.length), n.insertColumn(c(r) - c(a)), a = n.getTableMap(), this.pasteTable(n, a, r), f.fire("saveSnapshot"), setTimeout(function () { f.fire("afterPaste") }, 0)) : (d(n.cells.first), f.once("afterPaste", function () { f.fire("lockSnapshot"); n.emptyCells(n.cells.all.slice(1)); l(f, n.cells.all); f.fire("unlockSnapshot") })))
                    },
                    isBoundarySelection: function (a) { a = a.getRanges()[0]; var b = a.endContainer.getAscendant("tr", !0); if (b && a.collapsed) { if (a.checkBoundaryOfElement(b, CKEDITOR.START)) return 1; if (a.checkBoundaryOfElement(b, CKEDITOR.END)) return 2 } return 0 }, findTableInPastedContent: function (a, b) { var c = a.dataProcessor, d = new CKEDITOR.dom.element("body"); c || (c = new CKEDITOR.htmlDataProcessor(a)); d.setHtml(c.toHtml(b), { fixForBody: !1 }); return 1 < d.getChildCount() ? null : d.findOne("table") }, pasteTable: function (a, b, c) {
                        var d, e = B(a.cells.first),
                        f = a._getTable(), g = {}, h, k, l, m; for (l = 0; l < c.length; l++)for (h = new CKEDITOR.dom.element(f.$.rows[a.rows.first.$.rowIndex + l]), m = 0; m < c[l].length; m++)if (k = new CKEDITOR.dom.element(c[l][m]), d = b[l] && b[l][m] ? new CKEDITOR.dom.element(b[l][m]) : null, k && !k.getCustomData("processed")) {
                            if (d && d.getParent()) k.replace(d); else if (0 === m || c[l][m - 1]) (d = 0 !== m ? new CKEDITOR.dom.element(c[l][m - 1]) : null) && h.equals(d.getParent()) ? k.insertAfter(d) : 0 < e ? h.$.cells[e] ? k.insertAfter(new CKEDITOR.dom.element(h.$.cells[e])) : h.append(k) :
                                h.append(k, !0); CKEDITOR.dom.element.setMarker(g, k, "processed", !0)
                        } else k.getCustomData("processed") && d && d.remove(); CKEDITOR.dom.element.clearAllMarkers(g)
                    }
                }; CKEDITOR.plugins.tableselection = {
                    getCellsBetween: e, keyboardIntegration: function (a) {
                        function b(a) { var c = a.getEnclosedNode(); c && "function" === typeof c.is && c.is({ td: 1, th: 1 }) ? c.setText("") : a.deleteContents(); CKEDITOR.tools.array.forEach(a._find("td"), function (a) { a.appendBogus() }) } var c = a.editable(); c.attachListener(c, "keydown", function (a) {
                            function c(b,
                                d) {
                                    if (!d.length) return null; var f = a.createRange(), g = CKEDITOR.dom.range.mergeRanges(d); CKEDITOR.tools.array.forEach(g, function (a) { a.enlarge(CKEDITOR.ENLARGE_ELEMENT) }); var h = g[0].getBoundaryNodes(), k = h.startNode, h = h.endNode; if (k && k.is && k.is(e)) {
                                        for (var l = k.getAscendant("table", !0), m = k.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT, l), n = !1, r = function (a) { return !k.contains(a) && a.is && a.is("td", "th") }; m && !r(m);)m = m.getPreviousSourceNode(!1, CKEDITOR.NODE_ELEMENT, l); !m && h && h.is && !h.is("table") && h.getNext() &&
                                            (m = h.getNext().findOne("td, th"), n = !0); if (m) f["moveToElementEdit" + (n ? "Start" : "End")](m); else f.setStartBefore(k.getAscendant("table", !0)), f.collapse(!0); g[0].deleteContents(); return [f]
                                    } if (k) return f.moveToElementEditablePosition(k), [f]
                            } var d = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1, 13: 1 }, e = CKEDITOR.tools.extend({ table: 1 }, CKEDITOR.dtd.$tableContent); delete e.td; delete e.th; return function (e) {
                                var f = e.data.getKey(), g = e.data.getKeystroke(), h, k = 37 === f || 38 == f, l, m, n; if (d[f] && (h = a.getSelection()) && h.isInTable() && h.isFake) {
                                    l =
                                    h.getRanges(); m = l[0]._getTableElement(); n = l[l.length - 1]._getTableElement(); if (13 !== f || a.plugins.enterkey) e.data.preventDefault(), e.cancel(); if (36 < f && 41 > f) l[0].moveToElementEditablePosition(k ? m : n, !k), h.selectRanges([l[0]]); else if (13 !== f || 13 === g || g === CKEDITOR.SHIFT + 13) {
                                        for (e = 0; e < l.length; e++)b(l[e]); (e = c(m, l)) ? l = e : l[0].moveToElementEditablePosition(m); h.selectRanges(l); 13 === f && a.plugins.enterkey ? (a.fire("lockSnapshot"), 13 === g ? a.execCommand("enter") : a.execCommand("shiftEnter"), a.fire("unlockSnapshot"),
                                            a.fire("saveSnapshot")) : 13 !== f && a.fire("saveSnapshot")
                                    }
                                }
                            }
                        }(a), null, null, -1); c.attachListener(c, "keypress", function (c) { var d = a.getSelection(), e = c.data.$.charCode || 13 === c.data.getKey(), f; if (d && d.isInTable() && d.isFake && e && !(c.data.getKeystroke() & CKEDITOR.CTRL)) { c = d.getRanges(); e = c[0].getEnclosedNode().getAscendant({ td: 1, th: 1 }, !0); for (f = 0; f < c.length; f++)b(c[f]); e && (c[0].moveToElementEditablePosition(e), d.selectRanges([c[0]])) } }, null, null, -1)
                    }, isSupportedEnvironment: !(CKEDITOR.env.ie && 11 > CKEDITOR.env.version)
                };
            CKEDITOR.plugins.add("tableselection", {
                requires: "clipboard,tabletools", onLoad: function () { w = CKEDITOR.plugins.tabletools; q = w.getSelectedCells; B = w.getCellColIndex; t = w.insertRow; x = w.insertColumn; CKEDITOR.document.appendStyleSheet(this.path + "styles/tableselection.css") }, init: function (a) {
                    CKEDITOR.plugins.tableselection.isSupportedEnvironment && (a.addContentsCss && a.addContentsCss(this.path + "styles/tableselection.css"), a.on("contentDom", function () {
                        var b = a.editable(), c = b.isInline() ? b : a.document, d = { editor: a };
                        b.attachListener(c, "mousedown", f, null, d); b.attachListener(c, "mousemove", f, null, d); b.attachListener(c, "mouseup", f, null, d); b.attachListener(b, "dragstart", n); b.attachListener(a, "selectionCheck", h); CKEDITOR.plugins.tableselection.keyboardIntegration(a); CKEDITOR.plugins.clipboard && !CKEDITOR.plugins.clipboard.isCustomCopyCutSupported && (b.attachListener(b, "cut", u), b.attachListener(b, "copy", u))
                    }), a.on("paste", C.onPaste, C), y(a, "rowInsertBefore rowInsertAfter columnInsertBefore columnInsertAfter cellInsertBefore cellInsertAfter".split(" "),
                        function (a, b) { l(a, b.selectedCells) }), y(a, ["cellMerge", "cellMergeRight", "cellMergeDown"], function (a, b) { l(a, [b.commandData.cell]) }), y(a, ["cellDelete"], function (a) { d(a, !0) }))
                }
            })
        }(), "use strict", function () {
            var a = [CKEDITOR.CTRL + 90, CKEDITOR.CTRL + 89, CKEDITOR.CTRL + CKEDITOR.SHIFT + 90], e = { 8: 1, 46: 1 }; CKEDITOR.plugins.add("undo", {
                init: function (c) {
                    function d(a) { f.enabled && !1 !== a.data.command.canUndo && f.save() } function e() { f.enabled = c.readOnly ? !1 : "wysiwyg" == c.mode; f.onChange() } var f = c.undoManager = new b(c), k = f.editingHandler =
                        new l(f), r = c.addCommand("undo", { exec: function () { f.undo() && (c.selectionChange(), this.fire("afterUndo")) }, startDisabled: !0, canUndo: !1 }), u = c.addCommand("redo", { exec: function () { f.redo() && (c.selectionChange(), this.fire("afterRedo")) }, startDisabled: !0, canUndo: !1 }); c.setKeystroke([[a[0], "undo"], [a[1], "redo"], [a[2], "redo"]]); f.onChange = function () { r.setState(f.undoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED); u.setState(f.redoable() ? CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED) }; c.on("beforeCommandExec",
                            d); c.on("afterCommandExec", d); c.on("saveSnapshot", function (a) { f.save(a.data && a.data.contentOnly) }); c.on("contentDom", k.attachListeners, k); c.on("instanceReady", function () { c.fire("saveSnapshot") }); c.on("beforeModeUnload", function () { "wysiwyg" == c.mode && f.save(!0) }); c.on("mode", e); c.on("readOnly", e); c.ui.addButton && (c.ui.addButton("Undo", { label: c.lang.undo.undo, command: "undo", toolbar: "undo,10" }), c.ui.addButton("Redo", { label: c.lang.undo.redo, command: "redo", toolbar: "undo,20" })); c.resetUndo = function () {
                                f.reset();
                                c.fire("saveSnapshot")
                            }; c.on("updateSnapshot", function () { f.currentImage && f.update() }); c.on("lockSnapshot", function (a) { a = a.data; f.lock(a && a.dontUpdate, a && a.forceUpdate) }); c.on("unlockSnapshot", f.unlock, f)
                }
            }); CKEDITOR.plugins.undo = {}; var b = CKEDITOR.plugins.undo.UndoManager = function (a) { this.strokesRecorded = [0, 0]; this.locked = null; this.previousKeyGroup = -1; this.limit = a.config.undoStackSize || 20; this.strokesLimit = 25; this.editor = a; this.reset() }; b.prototype = {
                type: function (a, c) {
                    var d = b.getKeyGroup(a), e = this.strokesRecorded[d] +
                        1; c = c || e >= this.strokesLimit; this.typing || (this.hasUndo = this.typing = !0, this.hasRedo = !1, this.onChange()); c ? (e = 0, this.editor.fire("saveSnapshot")) : this.editor.fire("change"); this.strokesRecorded[d] = e; this.previousKeyGroup = d
                }, keyGroupChanged: function (a) { return b.getKeyGroup(a) != this.previousKeyGroup }, reset: function () { this.snapshots = []; this.index = -1; this.currentImage = null; this.hasRedo = this.hasUndo = !1; this.locked = null; this.resetType() }, resetType: function () {
                    this.strokesRecorded = [0, 0]; this.typing = !1; this.previousKeyGroup =
                        -1
                }, refreshState: function () { this.hasUndo = !!this.getNextImage(!0); this.hasRedo = !!this.getNextImage(!1); this.resetType(); this.onChange() }, save: function (a, b, d) {
                    var e = this.editor; if (this.locked || "ready" != e.status || "wysiwyg" != e.mode) return !1; var k = e.editable(); if (!k || "ready" != k.status) return !1; k = this.snapshots; b || (b = new c(e)); if (!1 === b.contents) return !1; if (this.currentImage) if (b.equalsContent(this.currentImage)) { if (a || b.equalsSelection(this.currentImage)) return !1 } else !1 !== d && e.fire("change"); k.splice(this.index +
                        1, k.length - this.index - 1); k.length == this.limit && k.shift(); this.index = k.push(b) - 1; this.currentImage = b; !1 !== d && this.refreshState(); return !0
                }, restoreImage: function (a) {
                    var b = this.editor, c; a.bookmarks && (b.focus(), c = b.getSelection()); this.locked = { level: 999 }; this.editor.loadSnapshot(a.contents); a.bookmarks ? c.selectBookmarks(a.bookmarks) : CKEDITOR.env.ie && (c = this.editor.document.getBody().$.createTextRange(), c.collapse(!0), c.select()); this.locked = null; this.index = a.index; this.currentImage = this.snapshots[this.index];
                    this.update(); this.refreshState(); b.fire("change")
                }, getNextImage: function (a) { var b = this.snapshots, c = this.currentImage, d; if (c) if (a) for (d = this.index - 1; 0 <= d; d--) { if (a = b[d], !c.equalsContent(a)) return a.index = d, a } else for (d = this.index + 1; d < b.length; d++)if (a = b[d], !c.equalsContent(a)) return a.index = d, a; return null }, redoable: function () { return this.enabled && this.hasRedo }, undoable: function () { return this.enabled && this.hasUndo }, undo: function () {
                    if (this.undoable()) {
                        this.save(!0); var a = this.getNextImage(!0); if (a) return this.restoreImage(a),
                            !0
                    } return !1
                }, redo: function () { if (this.redoable() && (this.save(!0), this.redoable())) { var a = this.getNextImage(!1); if (a) return this.restoreImage(a), !0 } return !1 }, update: function (a) { if (!this.locked) { a || (a = new c(this.editor)); for (var b = this.index, d = this.snapshots; 0 < b && this.currentImage.equalsContent(d[b - 1]);)--b; d.splice(b, this.index - b + 1, a); this.index = b; this.currentImage = a } }, updateSelection: function (a) {
                    if (!this.snapshots.length) return !1; var b = this.snapshots, c = b[b.length - 1]; return c.equalsContent(a) && !c.equalsSelection(a) ?
                        (this.currentImage = b[b.length - 1] = a, !0) : !1
                }, lock: function (a, b) { if (this.locked) this.locked.level++; else if (a) this.locked = { level: 1 }; else { var d = null; if (b) d = !0; else { var e = new c(this.editor, !0); this.currentImage && this.currentImage.equalsContent(e) && (d = e) } this.locked = { update: d, level: 1 } } }, unlock: function () { if (this.locked && !--this.locked.level) { var a = this.locked.update; this.locked = null; if (!0 === a) this.update(); else if (a) { var b = new c(this.editor, !0); a.equalsContent(b) || this.update() } } }
            }; b.navigationKeyCodes =
                { 37: 1, 38: 1, 39: 1, 40: 1, 36: 1, 35: 1, 33: 1, 34: 1 }; b.keyGroups = { PRINTABLE: 0, FUNCTIONAL: 1 }; b.isNavigationKey = function (a) { return !!b.navigationKeyCodes[a] }; b.getKeyGroup = function (a) { var c = b.keyGroups; return e[a] ? c.FUNCTIONAL : c.PRINTABLE }; b.getOppositeKeyGroup = function (a) { var c = b.keyGroups; return a == c.FUNCTIONAL ? c.PRINTABLE : c.FUNCTIONAL }; b.ieFunctionalKeysBug = function (a) { return CKEDITOR.env.ie && b.getKeyGroup(a) == b.keyGroups.FUNCTIONAL }; var c = CKEDITOR.plugins.undo.Image = function (a, b) {
                    this.editor = a; a.fire("beforeUndoImage");
                    var c = a.getSnapshot(); CKEDITOR.env.ie && c && (c = c.replace(/\s+data-cke-expando=".*?"/g, "")); this.contents = c; b || (this.bookmarks = (c = c && a.getSelection()) && c.createBookmarks2(!0)); a.fire("afterUndoImage")
                }, d = /\b(?:href|src|name)="[^"]*?"/gi; c.prototype = {
                    equalsContent: function (a) { var b = this.contents; a = a.contents; CKEDITOR.env.ie && (CKEDITOR.env.ie7Compat || CKEDITOR.env.quirks) && (b = b.replace(d, ""), a = a.replace(d, "")); return b != a ? !1 : !0 }, equalsSelection: function (a) {
                        var b = this.bookmarks; a = a.bookmarks; if (b || a) {
                            if (!b ||
                                !a || b.length != a.length) return !1; for (var c = 0; c < b.length; c++) { var d = b[c], e = a[c]; if (d.startOffset != e.startOffset || d.endOffset != e.endOffset || !CKEDITOR.tools.arrayCompare(d.start, e.start) || !CKEDITOR.tools.arrayCompare(d.end, e.end)) return !1 }
                        } return !0
                    }
                }; var l = CKEDITOR.plugins.undo.NativeEditingHandler = function (a) { this.undoManager = a; this.ignoreInputEvent = !1; this.keyEventsStack = new k; this.lastKeydownImage = null }; l.prototype = {
                    onKeydown: function (d) {
                        var e = d.data.getKey(); if (229 !== e) if (-1 < CKEDITOR.tools.indexOf(a,
                            d.data.getKeystroke())) d.data.preventDefault(); else if (this.keyEventsStack.cleanUp(d), d = this.undoManager, this.keyEventsStack.getLast(e) || this.keyEventsStack.push(e), this.lastKeydownImage = new c(d.editor), b.isNavigationKey(e) || this.undoManager.keyGroupChanged(e)) if (d.strokesRecorded[0] || d.strokesRecorded[1]) d.save(!1, this.lastKeydownImage, !1), d.resetType()
                    }, onInput: function () {
                        if (this.ignoreInputEvent) this.ignoreInputEvent = !1; else {
                            var a = this.keyEventsStack.getLast(); a || (a = this.keyEventsStack.push(0));
                            this.keyEventsStack.increment(a.keyCode); this.keyEventsStack.getTotalInputs() >= this.undoManager.strokesLimit && (this.undoManager.type(a.keyCode, !0), this.keyEventsStack.resetInputs())
                        }
                    }, onKeyup: function (a) { var d = this.undoManager; a = a.data.getKey(); var e = this.keyEventsStack.getTotalInputs(); this.keyEventsStack.remove(a); if (!(b.ieFunctionalKeysBug(a) && this.lastKeydownImage && this.lastKeydownImage.equalsContent(new c(d.editor, !0)))) if (0 < e) d.type(a); else if (b.isNavigationKey(a)) this.onNavigationKey(!0) },
                    onNavigationKey: function (a) { var b = this.undoManager; !a && b.save(!0, null, !1) || b.updateSelection(new c(b.editor)); b.resetType() }, ignoreInputEventListener: function () { this.ignoreInputEvent = !0 }, activateInputEventListener: function () { this.ignoreInputEvent = !1 }, attachListeners: function () {
                        var a = this.undoManager.editor, c = a.editable(), d = this; c.attachListener(c, "keydown", function (a) { d.onKeydown(a); if (b.ieFunctionalKeysBug(a.data.getKey())) d.onInput() }, null, null, 999); c.attachListener(c, CKEDITOR.env.ie ? "keypress" :
                            "input", d.onInput, d, null, 999); c.attachListener(c, "keyup", d.onKeyup, d, null, 999); c.attachListener(c, "paste", d.ignoreInputEventListener, d, null, 999); c.attachListener(c, "drop", d.ignoreInputEventListener, d, null, 999); a.on("afterPaste", d.activateInputEventListener, d, null, 999); c.attachListener(c.isInline() ? c : a.document.getDocumentElement(), "click", function () { d.onNavigationKey() }, null, null, 999); c.attachListener(this.undoManager.editor, "blur", function () { d.keyEventsStack.remove(9) }, null, null, 999)
                    }
                }; var k = CKEDITOR.plugins.undo.KeyEventsStack =
                    function () { this.stack = [] }; k.prototype = {
                        push: function (a) { a = this.stack.push({ keyCode: a, inputs: 0 }); return this.stack[a - 1] }, getLastIndex: function (a) { if ("number" != typeof a) return this.stack.length - 1; for (var b = this.stack.length; b--;)if (this.stack[b].keyCode == a) return b; return -1 }, getLast: function (a) { a = this.getLastIndex(a); return -1 != a ? this.stack[a] : null }, increment: function (a) { this.getLast(a).inputs++ }, remove: function (a) { a = this.getLastIndex(a); -1 != a && this.stack.splice(a, 1) }, resetInputs: function (a) {
                            if ("number" ==
                                typeof a) this.getLast(a).inputs = 0; else for (a = this.stack.length; a--;)this.stack[a].inputs = 0
                        }, getTotalInputs: function () { for (var a = this.stack.length, b = 0; a--;)b += this.stack[a].inputs; return b }, cleanUp: function (a) { a = a.data.$; a.ctrlKey || a.metaKey || this.remove(17); a.shiftKey || this.remove(16); a.altKey || this.remove(18) }
                    }
        }(), "use strict", function () {
            function a(a, b) {
                CKEDITOR.tools.extend(this, { editor: a, editable: a.editable(), doc: a.document, win: a.window }, b, !0); this.inline = this.editable.isInline(); this.inline ||
                    (this.frame = this.win.getFrame()); this.target = this[this.inline ? "editable" : "doc"]
            } function e(a, b) { CKEDITOR.tools.extend(this, b, { editor: a }, !0) } function b(a, b) {
                var c = a.editable(); CKEDITOR.tools.extend(this, { editor: a, editable: c, inline: c.isInline(), doc: a.document, win: a.window, container: CKEDITOR.document.getBody(), winTop: CKEDITOR.document.getWindow() }, b, !0); this.hidden = {}; this.visible = {}; this.inline || (this.frame = this.win.getFrame()); this.queryViewport(); var e = CKEDITOR.tools.bind(this.queryViewport, this),
                    g = CKEDITOR.tools.bind(this.hideVisible, this), k = CKEDITOR.tools.bind(this.removeAll, this); c.attachListener(this.winTop, "resize", e); c.attachListener(this.winTop, "scroll", e); c.attachListener(this.winTop, "resize", g); c.attachListener(this.win, "scroll", g); c.attachListener(this.inline ? c : this.frame, "mouseout", function (a) {
                        var b = a.data.$.clientX; a = a.data.$.clientY; this.queryViewport(); (b <= this.rect.left || b >= this.rect.right || a <= this.rect.top || a >= this.rect.bottom) && this.hideVisible(); (0 >= b || b >= this.winTopPane.width ||
                            0 >= a || a >= this.winTopPane.height) && this.hideVisible()
                    }, this); c.attachListener(a, "resize", e); c.attachListener(a, "mode", k); a.on("destroy", k); this.lineTpl = (new CKEDITOR.template('\x3cdiv data-cke-lineutils-line\x3d"1" class\x3d"cke_reset_all" style\x3d"{lineStyle}"\x3e\x3cspan style\x3d"{tipLeftStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3cspan style\x3d"{tipRightStyle}"\x3e\x26nbsp;\x3c/span\x3e\x3c/div\x3e')).output({
                        lineStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({}, l, this.lineStyle, !0)), tipLeftStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({},
                            d, { left: "0px", "border-left-color": "red", "border-width": "6px 0 6px 6px" }, this.tipCss, this.tipLeftStyle, !0)), tipRightStyle: CKEDITOR.tools.writeCssText(CKEDITOR.tools.extend({}, d, { right: "0px", "border-right-color": "red", "border-width": "6px 6px 6px 0" }, this.tipCss, this.tipRightStyle, !0))
                    })
            } function c(a) { var b; if (b = a && a.type == CKEDITOR.NODE_ELEMENT) b = !(k[a.getComputedStyle("float")] || k[a.getAttribute("align")]); return b && !g[a.getComputedStyle("position")] } CKEDITOR.plugins.add("lineutils"); CKEDITOR.LINEUTILS_BEFORE =
                1; CKEDITOR.LINEUTILS_AFTER = 2; CKEDITOR.LINEUTILS_INSIDE = 4; a.prototype = {
                    start: function (a) {
                        var b = this, c = this.editor, d = this.doc, e, g, k, l, p = CKEDITOR.tools.eventsBuffer(50, function () { c.readOnly || "wysiwyg" != c.mode || (b.relations = {}, (g = d.$.elementFromPoint(k, l)) && g.nodeType && (e = new CKEDITOR.dom.element(g), b.traverseSearch(e), isNaN(k + l) || b.pixelSearch(e, k, l), a && a(b.relations, k, l))) }); this.listener = this.editable.attachListener(this.target, "mousemove", function (a) { k = a.data.$.clientX; l = a.data.$.clientY; p.input() });
                        this.editable.attachListener(this.inline ? this.editable : this.frame, "mouseout", function () { p.reset() })
                    }, stop: function () { this.listener && this.listener.removeListener() }, getRange: function () { var a = {}; a[CKEDITOR.LINEUTILS_BEFORE] = CKEDITOR.POSITION_BEFORE_START; a[CKEDITOR.LINEUTILS_AFTER] = CKEDITOR.POSITION_AFTER_END; a[CKEDITOR.LINEUTILS_INSIDE] = CKEDITOR.POSITION_AFTER_START; return function (b) { var c = this.editor.createRange(); c.moveToPosition(this.relations[b.uid].element, a[b.type]); return c } }(), store: function () {
                        function a(b,
                            c, d) { var e = b.getUniqueId(); e in d ? d[e].type |= c : d[e] = { element: b, type: c } } return function (b, d) { var e; d & CKEDITOR.LINEUTILS_AFTER && c(e = b.getNext()) && e.isVisible() && (a(e, CKEDITOR.LINEUTILS_BEFORE, this.relations), d ^= CKEDITOR.LINEUTILS_AFTER); d & CKEDITOR.LINEUTILS_INSIDE && c(e = b.getFirst()) && e.isVisible() && (a(e, CKEDITOR.LINEUTILS_BEFORE, this.relations), d ^= CKEDITOR.LINEUTILS_INSIDE); a(b, d, this.relations) }
                    }(), traverseSearch: function (a) {
                        var b, d, e; do if (e = a.$["data-cke-expando"], !(e && e in this.relations)) {
                            if (a.equals(this.editable)) break;
                            if (c(a)) for (b in this.lookups) (d = this.lookups[b](a)) && this.store(a, d)
                        } while ((!a || a.type != CKEDITOR.NODE_ELEMENT || "true" != a.getAttribute("contenteditable")) && (a = a.getParent()))
                    }, pixelSearch: function () {
                        function a(d, e, g, h, k) { for (var l = 0, p; k(g);) { g += h; if (25 == ++l) break; if (p = this.doc.$.elementFromPoint(e, g)) if (p == d) l = 0; else if (b(d, p) && (l = 0, c(p = new CKEDITOR.dom.element(p)))) return p } } var b = CKEDITOR.env.ie || CKEDITOR.env.webkit ? function (a, b) { return a.contains(b) } : function (a, b) {
                            return !!(a.compareDocumentPosition(b) &
                                16)
                        }; return function (b, d, e) { var g = this.win.getViewPaneSize().height, k = a.call(this, b.$, d, e, -1, function (a) { return 0 < a }); d = a.call(this, b.$, d, e, 1, function (a) { return a < g }); if (k) for (this.traverseSearch(k); !k.getParent().equals(b);)k = k.getParent(); if (d) for (this.traverseSearch(d); !d.getParent().equals(b);)d = d.getParent(); for (; k || d;) { k && (k = k.getNext(c)); if (!k || k.equals(d)) break; this.traverseSearch(k); d && (d = d.getPrevious(c)); if (!d || d.equals(k)) break; this.traverseSearch(d) } }
                    }(), greedySearch: function () {
                        this.relations =
                        {}; for (var a = this.editable.getElementsByTag("*"), b = 0, d, e, g; d = a.getItem(b++);)if (!d.equals(this.editable) && d.type == CKEDITOR.NODE_ELEMENT && (d.hasAttribute("contenteditable") || !d.isReadOnly()) && c(d) && d.isVisible()) for (g in this.lookups) (e = this.lookups[g](d)) && this.store(d, e); return this.relations
                    }
                }; e.prototype = {
                    locate: function () {
                        function a(b, d) {
                            var e = b.element[d === CKEDITOR.LINEUTILS_BEFORE ? "getPrevious" : "getNext"](); return e && c(e) ? (b.siblingRect = e.getClientRect(), d == CKEDITOR.LINEUTILS_BEFORE ? (b.siblingRect.bottom +
                                b.elementRect.top) / 2 : (b.elementRect.bottom + b.siblingRect.top) / 2) : d == CKEDITOR.LINEUTILS_BEFORE ? b.elementRect.top : b.elementRect.bottom
                        } return function (b) {
                            var c; this.locations = {}; for (var d in b) c = b[d], c.elementRect = c.element.getClientRect(), c.type & CKEDITOR.LINEUTILS_BEFORE && this.store(d, CKEDITOR.LINEUTILS_BEFORE, a(c, CKEDITOR.LINEUTILS_BEFORE)), c.type & CKEDITOR.LINEUTILS_AFTER && this.store(d, CKEDITOR.LINEUTILS_AFTER, a(c, CKEDITOR.LINEUTILS_AFTER)), c.type & CKEDITOR.LINEUTILS_INSIDE && this.store(d, CKEDITOR.LINEUTILS_INSIDE,
                                (c.elementRect.top + c.elementRect.bottom) / 2); return this.locations
                        }
                    }(), sort: function () { var a, b, c, d; return function (e, g) { a = this.locations; b = []; for (var k in a) for (var l in a[k]) if (c = Math.abs(e - a[k][l]), b.length) { for (d = 0; d < b.length; d++)if (c < b[d].dist) { b.splice(d, 0, { uid: +k, type: l, dist: c }); break } d == b.length && b.push({ uid: +k, type: l, dist: c }) } else b.push({ uid: +k, type: l, dist: c }); return "undefined" != typeof g ? b.slice(0, g) : b } }(), store: function (a, b, c) {
                        this.locations[a] || (this.locations[a] = {}); this.locations[a][b] =
                            c
                    }
                }; var d = { display: "block", width: "0px", height: "0px", "border-color": "transparent", "border-style": "solid", position: "absolute", top: "-6px" }, l = { height: "0px", "border-top": "1px dashed red", position: "absolute", "z-index": 9999 }; b.prototype = {
                    removeAll: function () { for (var a in this.hidden) this.hidden[a].remove(), delete this.hidden[a]; for (a in this.visible) this.visible[a].remove(), delete this.visible[a] }, hideLine: function (a) { var b = a.getUniqueId(); a.hide(); this.hidden[b] = a; delete this.visible[b] }, showLine: function (a) {
                        var b =
                            a.getUniqueId(); a.show(); this.visible[b] = a; delete this.hidden[b]
                    }, hideVisible: function () { for (var a in this.visible) this.hideLine(this.visible[a]) }, placeLine: function (a, b) {
                        var c, d, e; if (c = this.getStyle(a.uid, a.type)) {
                            for (e in this.visible) if (this.visible[e].getCustomData("hash") !== this.hash) { d = this.visible[e]; break } if (!d) for (e in this.hidden) if (this.hidden[e].getCustomData("hash") !== this.hash) { this.showLine(d = this.hidden[e]); break } d || this.showLine(d = this.addLine()); d.setCustomData("hash", this.hash);
                            this.visible[d.getUniqueId()] = d; d.setStyles(c); b && b(d)
                        }
                    }, getStyle: function (a, b) {
                        var c = this.relations[a], d = this.locations[a][b], e = {}; e.width = c.siblingRect ? Math.max(c.siblingRect.width, c.elementRect.width) : c.elementRect.width; e.top = this.inline ? d + this.winTopScroll.y - this.rect.relativeY : this.rect.top + this.winTopScroll.y + d; if (e.top - this.winTopScroll.y < this.rect.top || e.top - this.winTopScroll.y > this.rect.bottom) return !1; this.inline ? e.left = c.elementRect.left - this.rect.relativeX : (0 < c.elementRect.left ? e.left =
                            this.rect.left + c.elementRect.left : (e.width += c.elementRect.left, e.left = this.rect.left), 0 < (c = e.left + e.width - (this.rect.left + this.winPane.width)) && (e.width -= c)); e.left += this.winTopScroll.x; for (var g in e) e[g] = CKEDITOR.tools.cssLength(e[g]); return e
                    }, addLine: function () { var a = CKEDITOR.dom.element.createFromHtml(this.lineTpl); a.appendTo(this.container); return a }, prepare: function (a, b) { this.relations = a; this.locations = b; this.hash = Math.random() }, cleanup: function () {
                        var a, b; for (b in this.visible) a = this.visible[b],
                            a.getCustomData("hash") !== this.hash && this.hideLine(a)
                    }, queryViewport: function () { this.winPane = this.win.getViewPaneSize(); this.winTopScroll = this.winTop.getScrollPosition(); this.winTopPane = this.winTop.getViewPaneSize(); this.rect = this.getClientRect(this.inline ? this.editable : this.frame) }, getClientRect: function (a) {
                        a = a.getClientRect(); var b = this.container.getDocumentPosition(), c = this.container.getComputedStyle("position"); a.relativeX = a.relativeY = 0; "static" != c && (a.relativeY = b.y, a.relativeX = b.x, a.top -= a.relativeY,
                            a.bottom -= a.relativeY, a.left -= a.relativeX, a.right -= a.relativeX); return a
                    }
                }; var k = { left: 1, right: 1, center: 1 }, g = { absolute: 1, fixed: 1 }; CKEDITOR.plugins.lineutils = { finder: a, locator: e, liner: b }
        }(), function () {
            function a(a) { return a.getName && !a.hasAttribute("data-cke-temp") } CKEDITOR.plugins.add("widgetselection", {
                init: function (a) {
                    if (CKEDITOR.env.webkit) {
                        var b = CKEDITOR.plugins.widgetselection; a.on("contentDom", function (a) {
                            a = a.editor; var d = a.editable(); d.attachListener(d, "keydown", function (a) {
                                a.data.getKeystroke() ==
                                CKEDITOR.CTRL + 65 && CKEDITOR.tools.setTimeout(function () { b.addFillers(d) || b.removeFillers(d) }, 0)
                            }, null, null, -1); a.on("selectionCheck", function (a) { b.removeFillers(a.editor.editable()) }); a.on("paste", function (a) { a.data.dataValue = b.cleanPasteData(a.data.dataValue) }); "selectall" in a.plugins && b.addSelectAllIntegration(a)
                        })
                    }
                }
            }); CKEDITOR.plugins.widgetselection = {
                startFiller: null, endFiller: null, fillerAttribute: "data-cke-filler-webkit", fillerContent: "\x26nbsp;", fillerTagName: "div", addFillers: function (e) {
                    var b =
                        e.editor; if (!this.isWholeContentSelected(e) && 0 < e.getChildCount()) { var c = e.getFirst(a), d = e.getLast(a); c && c.type == CKEDITOR.NODE_ELEMENT && !c.isEditable() && (this.startFiller = this.createFiller(), e.append(this.startFiller, 1)); d && d.type == CKEDITOR.NODE_ELEMENT && !d.isEditable() && (this.endFiller = this.createFiller(!0), e.append(this.endFiller, 0)); if (this.hasFiller(e)) return b = b.createRange(), b.selectNodeContents(e), b.select(), !0 } return !1
                }, removeFillers: function (a) {
                    if (this.hasFiller(a) && !this.isWholeContentSelected(a)) {
                        var b =
                            a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dstart]"), c = a.findOne(this.fillerTagName + "[" + this.fillerAttribute + "\x3dend]"); this.startFiller && b && this.startFiller.equals(b) ? this.removeFiller(this.startFiller, a) : this.startFiller = b; this.endFiller && c && this.endFiller.equals(c) ? this.removeFiller(this.endFiller, a) : this.endFiller = c
                    }
                }, cleanPasteData: function (a) { a && a.length && (a = a.replace(this.createFillerRegex(), "").replace(this.createFillerRegex(!0), "")); return a }, isWholeContentSelected: function (a) {
                    var b =
                        a.editor.getSelection().getRanges()[0]; return !b || b && b.collapsed ? !1 : (b = b.clone(), b.enlarge(CKEDITOR.ENLARGE_ELEMENT), !!(b && a && b.startContainer && b.endContainer && 0 === b.startOffset && b.endOffset === a.getChildCount() && b.startContainer.equals(a) && b.endContainer.equals(a)))
                }, hasFiller: function (a) { return 0 < a.find(this.fillerTagName + "[" + this.fillerAttribute + "]").count() }, createFiller: function (a) {
                    var b = new CKEDITOR.dom.element(this.fillerTagName); b.setHtml(this.fillerContent); b.setAttribute(this.fillerAttribute,
                        a ? "end" : "start"); b.setAttribute("data-cke-temp", 1); b.setStyles({ display: "block", width: 0, height: 0, padding: 0, border: 0, margin: 0, position: "absolute", top: 0, left: "-9999px", opacity: 0, overflow: "hidden" }); return b
                }, removeFiller: function (a, b) {
                    if (a) {
                        var c = b.editor, d = b.editor.getSelection().getRanges()[0].startPath(), l = c.createRange(), k, g; d.contains(a) && (k = a.getHtml(), g = !0); d = "start" == a.getAttribute(this.fillerAttribute); a.remove(); k && 0 < k.length && k != this.fillerContent ? (b.insertHtmlIntoRange(k, c.getSelection().getRanges()[0]),
                            l.setStartAt(b.getChild(b.getChildCount() - 1), CKEDITOR.POSITION_BEFORE_END), c.getSelection().selectRanges([l])) : g && (d ? l.setStartAt(b.getFirst().getNext(), CKEDITOR.POSITION_AFTER_START) : l.setEndAt(b.getLast().getPrevious(), CKEDITOR.POSITION_BEFORE_END), b.editor.getSelection().selectRanges([l]))
                    }
                }, createFillerRegex: function (a) { var b = this.createFiller(a).getOuterHtml().replace(/style="[^"]*"/gi, 'style\x3d"[^"]*"').replace(/>[^<]*</gi, "\x3e[^\x3c]*\x3c"); return new RegExp((a ? "" : "^") + b + (a ? "$" : "")) }, addSelectAllIntegration: function (a) {
                    var b =
                        this; a.editable().attachListener(a, "beforeCommandExec", function (c) { var d = a.editable(); "selectAll" == c.data.name && d && b.addFillers(d) }, null, null, 9999)
                }
            }
        }(), "use strict", function () {
            function a(a) {
                this.editor = a; this.registered = {}; this.instances = {}; this.selected = []; this.widgetHoldingFocusedEditable = this.focused = null; this._ = { nextId: 0, upcasts: [], upcastCallbacks: [], filters: {} }; G(this); A(this); this.on("checkWidgets", k); this.editor.on("contentDomInvalidated", this.checkWidgets, this); z(this); t(this); x(this); B(this);
                C(this)
            } function e(a, b, c, d, f) {
                var g = a.editor; CKEDITOR.tools.extend(this, d, { editor: g, id: b, inline: "span" == c.getParent().getName(), element: c, data: CKEDITOR.tools.extend({}, "function" == typeof d.defaults ? d.defaults() : d.defaults), dataReady: !1, inited: !1, ready: !1, edit: e.prototype.edit, focusedEditable: null, definition: d, repository: a, draggable: !1 !== d.draggable, _: { downcastFn: d.downcast && "string" == typeof d.downcast ? d.downcasts[d.downcast] : d.downcast } }, !0); a.fire("instanceCreated", this); da(this, d); this.init && this.init();
                this.inited = !0; (a = this.element.data("cke-widget-data")) && this.setData(JSON.parse(decodeURIComponent(a))); f && this.setData(f); this.data.classes || this.setData("classes", this.getClasses()); this.dataReady = !0; Q(this); this.fire("data", this.data); this.isInited() && g.editable().contains(this.wrapper) && (this.ready = !0, this.fire("ready"))
            } function b(a, b, c) {
                CKEDITOR.dom.element.call(this, b.$); this.editor = a; this._ = {}; b = this.filter = c.filter; CKEDITOR.dtd[this.getName()].p ? (this.enterMode = b ? b.getAllowedEnterMode(a.enterMode) :
                    a.enterMode, this.shiftEnterMode = b ? b.getAllowedEnterMode(a.shiftEnterMode, !0) : a.shiftEnterMode) : this.enterMode = this.shiftEnterMode = CKEDITOR.ENTER_BR
            } function c(a, b) {
                a.addCommand(b.name, {
                    exec: function (a, c) {
                        function d() { a.widgets.finalizeCreation(h) } var e = a.widgets.focused; if (e && e.name == b.name) e.edit(); else if (b.insert) b.insert(); else if (b.template) {
                            var e = "function" == typeof b.defaults ? b.defaults() : b.defaults, e = CKEDITOR.dom.element.createFromHtml(b.template.output(e)), f, g = a.widgets.wrapElement(e, b.name),
                            h = new CKEDITOR.dom.documentFragment(g.getDocument()); h.append(g); (f = a.widgets.initOn(e, b, c && c.startupData)) ? (e = f.once("edit", function (b) { if (b.data.dialog) f.once("dialog", function (b) { b = b.data; var c, e; c = b.once("ok", d, null, null, 20); e = b.once("cancel", function (b) { b.data && !1 === b.data.hide || a.widgets.destroy(f, !0) }); b.once("hide", function () { c.removeListener(); e.removeListener() }) }); else d() }, null, null, 999), f.edit(), e.removeListener()) : d()
                        }
                    }, allowedContent: b.allowedContent, requiredContent: b.requiredContent,
                    contentForms: b.contentForms, contentTransformations: b.contentTransformations
                })
            } function d(a, b) { function c(a, d) { var e = b.upcast.split(","), f, g; for (g = 0; g < e.length; g++)if (f = e[g], f === a.name) return b.upcasts[f].call(this, a, d); return !1 } function d(b, c, e) { var f = CKEDITOR.tools.getIndex(a._.upcasts, function (a) { return a[2] > e }); 0 > f && (f = a._.upcasts.length); a._.upcasts.splice(f, 0, [CKEDITOR.tools.bind(b, c), c.name, e]) } var e = b.upcast, f = b.upcastPriority || 10; e && ("string" == typeof e ? d(c, b, f) : d(e, b, f)) } function l(a, b) {
                a.focused =
                null; if (b.isInited()) { var c = b.editor.checkDirty(); a.fire("widgetBlurred", { widget: b }); b.setFocused(!1); !c && b.editor.resetDirty() }
            } function k(a) {
                a = a.data; if ("wysiwyg" == this.editor.mode) {
                    var b = this.editor.editable(), c = this.instances, d, f, g, h; if (b) {
                        for (d in c) c[d].isReady() && !b.contains(c[d].wrapper) && this.destroy(c[d], !0); if (a && a.initOnlyNew) c = this.initOnAll(); else {
                            var k = b.find(".cke_widget_wrapper"), c = []; d = 0; for (f = k.count(); d < f; d++) {
                                g = k.getItem(d); if (h = !this.getByElement(g, !0)) {
                                    a: {
                                        h = y; for (var l = g; l =
                                            l.getParent();)if (h(l)) { h = !0; break a } h = !1
                                    } h = !h
                                } h && b.contains(g) && (g.addClass("cke_widget_new"), c.push(this.initOn(g.getFirst(e.isDomWidgetElement))))
                            }
                        } a && a.focusInited && 1 == c.length && c[0].focus()
                    }
                }
            } function g(a) {
                if ("undefined" != typeof a.attributes && a.attributes["data-widget"]) {
                    var b = h(a), c = m(a), d = !1; b && b.value && b.value.match(/^\s/g) && (b.parent.attributes["data-cke-white-space-first"] = 1, b.value = b.value.replace(/^\s/g, "\x26nbsp;"), d = !0); c && c.value && c.value.match(/\s$/g) && (c.parent.attributes["data-cke-white-space-last"] =
                        1, c.value = c.value.replace(/\s$/g, "\x26nbsp;"), d = !0); d && (a.attributes["data-cke-widget-white-space"] = 1)
                }
            } function h(a) { return a.find(function (a) { return 3 === a.type }, !0).shift() } function m(a) { return a.find(function (a) { return 3 === a.type }, !0).pop() } function f(a, b, c) {
                if (!c.allowedContent && !c.disallowedContent) return null; var d = this._.filters[a]; d || (this._.filters[a] = d = {}); a = d[b]; a || (a = c.allowedContent ? new CKEDITOR.filter(c.allowedContent) : this.editor.filter.clone(), d[b] = a, c.disallowedContent && a.disallow(c.disallowedContent));
                return a
            } function n(a) {
                var b = [], c = a._.upcasts, d = a._.upcastCallbacks; return {
                    toBeWrapped: b, iterator: function (a) {
                        var f, g, h, k, l; if ("data-cke-widget-wrapper" in a.attributes) return (a = a.getFirst(e.isParserWidgetElement)) && b.push([a]), !1; if ("data-widget" in a.attributes) return b.push([a]), !1; if (l = c.length) {
                            if (a.attributes["data-cke-widget-upcasted"]) return !1; k = 0; for (f = d.length; k < f; ++k)if (!1 === d[k](a)) return; for (k = 0; k < l; ++k)if (f = c[k], h = {}, g = f[0](a, h)) return g instanceof CKEDITOR.htmlParser.element && (a = g), a.attributes["data-cke-widget-data"] =
                                encodeURIComponent(JSON.stringify(h)), a.attributes["data-cke-widget-upcasted"] = 1, b.push([a, f[1]]), !1
                        }
                    }
                }
            } function r(a, b) { return { tabindex: -1, contenteditable: "false", "data-cke-widget-wrapper": 1, "data-cke-filter": "off", "class": "cke_widget_wrapper cke_widget_new cke_widget_" + (a ? "inline" : "block") + (b ? " cke_widget_" + b : "") } } function u(a, b, c) {
                if (a.type == CKEDITOR.NODE_ELEMENT) {
                    var d = CKEDITOR.dtd[a.name]; if (d && !d[c.name]) {
                        var d = a.split(b), e = a.parent; b = d.getIndex(); a.children.length || (--b, a.remove()); d.children.length ||
                            d.remove(); return u(e, b, c)
                    }
                } a.add(c, b)
            } function v(a, b) { return "boolean" == typeof a.inline ? a.inline : !!CKEDITOR.dtd.$inline[b] } function y(a) { return a.hasAttribute("data-cke-temp") } function p(a, b, c, d) {
                var e = a.editor; e.fire("lockSnapshot"); c ? (d = c.data("cke-widget-editable"), d = b.editables[d], a.widgetHoldingFocusedEditable = b, b.focusedEditable = d, c.addClass("cke_widget_editable_focused"), d.filter && e.setActiveFilter(d.filter), e.setActiveEnterMode(d.enterMode, d.shiftEnterMode)) : (d || b.focusedEditable.removeClass("cke_widget_editable_focused"),
                    b.focusedEditable = null, a.widgetHoldingFocusedEditable = null, e.setActiveFilter(null), e.setActiveEnterMode(null, null)); e.fire("unlockSnapshot")
            } function w(a) { a.contextMenu && a.contextMenu.addListener(function (b) { if (b = a.widgets.getByElement(b, !0)) return b.fire("contextMenu", {}) }) } function q(a, b) { return CKEDITOR.tools.trim(b) } function B(a) {
                var b = a.editor, c = CKEDITOR.plugins.lineutils; b.on("dragstart", function (c) {
                    var d = c.data.target; e.isDomDragHandler(d) && (d = a.getByElement(d), c.data.dataTransfer.setData("cke/widget-id",
                        d.id), b.focus(), d.focus())
                }); b.on("drop", function (c) {
                    var d = c.data.dataTransfer, e = d.getData("cke/widget-id"), f = d.getTransferType(b), d = b.createRange(); "" !== e && f === CKEDITOR.DATA_TRANSFER_CROSS_EDITORS ? c.cancel() : "" !== e && f == CKEDITOR.DATA_TRANSFER_INTERNAL && (e = a.instances[e]) && (d.setStartBefore(e.wrapper), d.setEndAfter(e.wrapper), c.data.dragRange = d, delete CKEDITOR.plugins.clipboard.dragStartContainerChildCount, delete CKEDITOR.plugins.clipboard.dragEndContainerChildCount, c.data.dataTransfer.setData("text/html",
                        b.editable().getHtmlFromRange(d).getHtml()), b.widgets.destroy(e, !0))
                }); b.on("contentDom", function () {
                    var d = b.editable(); CKEDITOR.tools.extend(a, {
                        finder: new c.finder(b, {
                            lookups: {
                                "default": function (b) {
                                    if (!b.is(CKEDITOR.dtd.$listItem) && b.is(CKEDITOR.dtd.$block) && !e.isDomNestedEditable(b) && !a._.draggedWidget.wrapper.contains(b)) {
                                        var c = e.getNestedEditable(d, b); if (c) { b = a._.draggedWidget; if (a.getByElement(c) == b) return; c = CKEDITOR.filter.instances[c.data("cke-filter")]; b = b.requiredContent; if (c && b && !c.check(b)) return } return CKEDITOR.LINEUTILS_BEFORE |
                                            CKEDITOR.LINEUTILS_AFTER
                                    }
                                }
                            }
                        }), locator: new c.locator(b), liner: new c.liner(b, { lineStyle: { cursor: "move !important", "border-top-color": "#666" }, tipLeftStyle: { "border-left-color": "#666" }, tipRightStyle: { "border-right-color": "#666" } })
                    }, !0)
                })
            } function t(a) {
                var b = a.editor; b.on("contentDom", function () {
                    var c = b.editable(), d = c.isInline() ? c : b.document, f, g; c.attachListener(d, "mousedown", function (c) {
                        var d = c.data.getTarget(); f = d instanceof CKEDITOR.dom.element ? a.getByElement(d) : null; g = 0; f && (f.inline && d.type == CKEDITOR.NODE_ELEMENT &&
                            d.hasAttribute("data-cke-widget-drag-handler") ? (g = 1, a.focused != f && b.getSelection().removeAllRanges()) : e.getNestedEditable(f.wrapper, d) ? f = null : (c.data.preventDefault(), CKEDITOR.env.ie || f.focus()))
                    }); c.attachListener(d, "mouseup", function () { g && f && f.wrapper && (g = 0, f.focus()) }); CKEDITOR.env.ie && c.attachListener(d, "mouseup", function () { setTimeout(function () { f && f.wrapper && c.contains(f.wrapper) && (f.focus(), f = null) }) })
                }); b.on("doubleclick", function (b) {
                    var c = a.getByElement(b.data.element); if (c && !e.getNestedEditable(c.wrapper,
                        b.data.element)) return c.fire("doubleclick", { element: b.data.element })
                }, null, null, 1)
            } function x(a) {
                a.editor.on("key", function (b) {
                    var c = a.focused, d = a.widgetHoldingFocusedEditable, e; c ? e = c.fire("key", { keyCode: b.data.keyCode }) : d && (c = b.data.keyCode, b = d.focusedEditable, c == CKEDITOR.CTRL + 65 ? (c = b.getBogus(), d = d.editor.createRange(), d.selectNodeContents(b), c && d.setEndAt(c, CKEDITOR.POSITION_BEFORE_START), d.select(), e = !1) : 8 == c || 46 == c ? (e = d.editor.getSelection().getRanges(), d = e[0], e = !(1 == e.length && d.collapsed &&
                        d.checkBoundaryOfElement(b, CKEDITOR[8 == c ? "START" : "END"]))) : e = void 0); return e
                }, null, null, 1)
            } function C(a) { function b(c) { a.focused && H(a.focused, "cut" == c.name) } var c = a.editor; c.on("contentDom", function () { var a = c.editable(); a.attachListener(a, "copy", b); a.attachListener(a, "cut", b) }) } function z(a) {
                var b = a.editor; b.on("selectionCheck", function () { a.fire("checkSelection") }); a.on("checkSelection", a.checkSelection, a); b.on("selectionChange", function (c) {
                    var d = (c = e.getNestedEditable(b.editable(), c.data.selection.getStartElement())) &&
                        a.getByElement(c), f = a.widgetHoldingFocusedEditable; f ? f === d && f.focusedEditable.equals(c) || (p(a, f, null), d && c && p(a, d, c)) : d && c && p(a, d, c)
                }); b.on("dataReady", function () { F(a).commit() }); b.on("blur", function () { var b; (b = a.focused) && l(a, b); (b = a.widgetHoldingFocusedEditable) && p(a, b, null) })
            } function A(a) {
                var b = a.editor, c = {}; b.on("toDataFormat", function (b) {
                    var d = CKEDITOR.tools.getNextNumber(), f = []; b.data.downcastingSessionId = d; c[d] = f; b.data.dataValue.forEach(function (b) {
                        var c = b.attributes, d; if ("data-cke-widget-white-space" in
                            c) { d = h(b); var g = m(b); d.parent.attributes["data-cke-white-space-first"] && (d.value = d.value.replace(/^&nbsp;/g, " ")); g.parent.attributes["data-cke-white-space-last"] && (g.value = g.value.replace(/&nbsp;$/g, " ")) } if ("data-cke-widget-id" in c) { if (c = a.instances[c["data-cke-widget-id"]]) d = b.getFirst(e.isParserWidgetElement), f.push({ wrapper: b, element: d, widget: c, editables: {} }), "1" != d.attributes["data-cke-widget-keep-attr"] && delete d.attributes["data-widget"] } else if ("data-cke-widget-editable" in c) return f[f.length -
                                1].editables[c["data-cke-widget-editable"]] = b, !1
                    }, CKEDITOR.NODE_ELEMENT, !0)
                }, null, null, 8); b.on("toDataFormat", function (a) { if (a.data.downcastingSessionId) { a = c[a.data.downcastingSessionId]; for (var b, d, e, f, g, h; b = a.shift();) { d = b.widget; e = b.element; f = d._.downcastFn && d._.downcastFn.call(d, e); for (h in b.editables) g = b.editables[h], delete g.attributes.contenteditable, g.setHtml(d.editables[h].getData()); f || (f = e); b.wrapper.replaceWith(f) } } }, null, null, 13); b.on("contentDomUnload", function () { a.destroyAll(!0) })
            }
            function G(a) {
                var b = a.editor, c, d; b.on("toHtml", function (b) { var d = n(a), f; for (b.data.dataValue.forEach(d.iterator, CKEDITOR.NODE_ELEMENT, !0); f = d.toBeWrapped.pop();) { var g = f[0], h = g.parent; h.type == CKEDITOR.NODE_ELEMENT && h.attributes["data-cke-widget-wrapper"] && h.replaceWith(g); a.wrapElement(f[0], f[1]) } c = b.data.protectedWhitespaces ? 3 == b.data.dataValue.children.length && e.isParserWidgetWrapper(b.data.dataValue.children[1]) : 1 == b.data.dataValue.children.length && e.isParserWidgetWrapper(b.data.dataValue.children[0]) },
                    null, null, 8); b.on("dataReady", function () { if (d) for (var c = b.editable().find(".cke_widget_wrapper"), f, g, h = 0, k = c.count(); h < k; ++h)f = c.getItem(h), g = f.getFirst(e.isDomWidgetElement), g.type == CKEDITOR.NODE_ELEMENT && g.data("widget") ? (g.replace(f), a.wrapElement(g)) : f.remove(); d = 0; a.destroyAll(!0); a.initOnAll() }); b.on("loadSnapshot", function (b) { /data-cke-widget/.test(b.data) && (d = 1); a.destroyAll(!0) }, null, null, 9); b.on("paste", function (a) {
                        a = a.data; a.dataValue = a.dataValue.replace(U, q); a.range && (a = e.getNestedEditable(b.editable(),
                            a.range.startContainer)) && (a = CKEDITOR.filter.instances[a.data("cke-filter")]) && b.setActiveFilter(a)
                    }); b.on("afterInsertHtml", function (d) { d.data.intoRange ? a.checkWidgets({ initOnlyNew: !0 }) : (b.fire("lockSnapshot"), a.checkWidgets({ initOnlyNew: !0, focusInited: c }), b.fire("unlockSnapshot")) })
            } function F(a) {
                var b = a.selected, c = [], d = b.slice(0), e = null; return {
                    select: function (a) { 0 > CKEDITOR.tools.indexOf(b, a) && c.push(a); a = CKEDITOR.tools.indexOf(d, a); 0 <= a && d.splice(a, 1); return this }, focus: function (a) { e = a; return this },
                    commit: function () { var f = a.focused !== e, g, h; a.editor.fire("lockSnapshot"); for (f && (g = a.focused) && l(a, g); g = d.pop();)b.splice(CKEDITOR.tools.indexOf(b, g), 1), g.isInited() && (h = g.editor.checkDirty(), g.setSelected(!1), !h && g.editor.resetDirty()); f && e && (h = a.editor.checkDirty(), a.focused = e, a.fire("widgetFocused", { widget: e }), e.setFocused(!0), !h && a.editor.resetDirty()); for (; g = c.pop();)b.push(g), g.setSelected(!0); a.editor.fire("unlockSnapshot") }
                }
            } function E(a, b, c) {
                var d = 0; b = K(b); var e = a.data.classes || {}, f; if (b) {
                    for (e =
                        CKEDITOR.tools.clone(e); f = b.pop();)c ? e[f] || (d = e[f] = 1) : e[f] && (delete e[f], d = 1); d && a.setData("classes", e)
                }
            } function I(a) { a.cancel() } function H(a, b) {
                var c = a.editor, d = c.document, e = CKEDITOR.env.edge && 16 <= CKEDITOR.env.version; if (!d.getById("cke_copybin")) {
                    var f = !c.blockless && !CKEDITOR.env.ie || e ? "div" : "span", e = d.createElement(f), g = d.createElement(f), f = CKEDITOR.env.ie && 9 > CKEDITOR.env.version; g.setAttributes({ id: "cke_copybin", "data-cke-temp": "1" }); e.setStyles({
                        position: "absolute", width: "1px", height: "1px",
                        overflow: "hidden"
                    }); e.setStyle("ltr" == c.config.contentsLangDirection ? "left" : "right", "-5000px"); var h = c.createRange(); h.setStartBefore(a.wrapper); h.setEndAfter(a.wrapper); e.setHtml('\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e' + c.editable().getHtmlFromRange(h).getHtml() + '\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e'); c.fire("saveSnapshot"); c.fire("lockSnapshot"); g.append(e); c.editable().append(g); var k = c.on("selectionChange", I, null, null, 0), l = a.repository.on("checkSelection", I,
                        null, null, 0); if (f) var m = d.getDocumentElement().$, n = m.scrollTop; h = c.createRange(); h.selectNodeContents(e); h.select(); f && (m.scrollTop = n); setTimeout(function () { b || a.focus(); g.remove(); k.removeListener(); l.removeListener(); c.fire("unlockSnapshot"); b && !c.readOnly && (a.repository.del(a), c.fire("saveSnapshot")) }, 100)
                }
            } function K(a) { return (a = (a = a.getDefinition().attributes) && a["class"]) ? a.split(/\s+/) : null } function J() {
                var a = CKEDITOR.document.getActive(), b = this.editor, c = b.editable(); (c.isInline() ? c : b.document.getWindow().getFrame()).equals(a) &&
                    b.focusManager.focus(c)
            } function D() { CKEDITOR.env.gecko && this.editor.unlockSelection(); CKEDITOR.env.webkit || (this.editor.forceNextSelectionCheck(), this.editor.selectionChange(1)) } function R(a) { var b = null; a.on("data", function () { var a = this.data.classes, c; if (b != a) { for (c in b) a && a[c] || this.removeClass(c); for (c in a) this.addClass(c); b = a } }) } function N(a) {
                a.on("data", function () {
                    if (a.wrapper) {
                        var b = this.getLabel ? this.getLabel() : this.editor.lang.widget.label.replace(/%1/, this.pathName || this.element.getName());
                        a.wrapper.setAttribute("role", "region"); a.wrapper.setAttribute("aria-label", b)
                    }
                }, null, null, 9999)
            } function S(a) {
                if (a.draggable) {
                    var b = a.editor, c = a.wrapper.getLast(e.isDomDragHandlerContainer), d; c ? d = c.findOne("img") : (c = new CKEDITOR.dom.element("span", b.document), c.setAttributes({ "class": "cke_reset cke_widget_drag_handler_container", style: "background:rgba(220,220,220,0.5);background-image:url(" + b.plugins.widget.path + "images/handle.png)" }), d = new CKEDITOR.dom.element("img", b.document), d.setAttributes({
                        "class": "cke_reset cke_widget_drag_handler",
                        "data-cke-widget-drag-handler": "1", src: CKEDITOR.tools.transparentImageData, width: 15, title: b.lang.widget.move, height: 15, role: "presentation"
                    }), a.inline && d.setAttribute("draggable", "true"), c.append(d), a.wrapper.append(c)); a.wrapper.on("dragover", function (a) { a.data.preventDefault() }); a.wrapper.on("mouseenter", a.updateDragHandlerPosition, a); setTimeout(function () { a.on("data", a.updateDragHandlerPosition, a) }, 50); if (!a.inline && (d.on("mousedown", L, a), CKEDITOR.env.ie && 9 > CKEDITOR.env.version)) d.on("dragstart",
                        function (a) { a.data.preventDefault(!0) }); a.dragHandlerContainer = c
                }
            } function L(a) {
                function b() { var c; for (p.reset(); c = h.pop();)c.removeListener(); var d = k; c = a.sender; var e = this.repository.finder, f = this.repository.liner, g = this.editor, l = this.editor.editable(); CKEDITOR.tools.isEmpty(f.visible) || (d = e.getRange(d[0]), this.focus(), g.fire("drop", { dropRange: d, target: d.startContainer })); l.removeClass("cke_widget_dragging"); f.hideVisible(); g.fire("dragend", { target: c }) } if (CKEDITOR.tools.getMouseButton(a) === CKEDITOR.MOUSE_BUTTON_LEFT) {
                    var c =
                        this.repository.finder, d = this.repository.locator, e = this.repository.liner, f = this.editor, g = f.editable(), h = [], k = [], l, m; this.repository._.draggedWidget = this; var n = c.greedySearch(), p = CKEDITOR.tools.eventsBuffer(50, function () { l = d.locate(n); k = d.sort(m, 1); k.length && (e.prepare(n, l), e.placeLine(k[0]), e.cleanup()) }); g.addClass("cke_widget_dragging"); h.push(g.on("mousemove", function (a) { m = a.data.$.clientY; p.input() })); f.fire("dragstart", { target: a.sender }); h.push(f.document.once("mouseup", b, this)); g.isInline() ||
                            h.push(CKEDITOR.document.once("mouseup", b, this))
                }
            } function V(a) { var b, c, d = a.editables; a.editables = {}; if (a.editables) for (b in d) c = d[b], a.initEditable(b, "string" == typeof c ? { selector: c } : c) } function Z(a) { if (a.mask) { var b = a.wrapper.findOne(".cke_widget_mask"); b || (b = new CKEDITOR.dom.element("img", a.editor.document), b.setAttributes({ src: CKEDITOR.tools.transparentImageData, "class": "cke_reset cke_widget_mask" }), a.wrapper.append(b)); a.mask = b } } function X(a) {
                if (a.parts) {
                    var b = {}, c, d; for (d in a.parts) c = a.wrapper.findOne(a.parts[d]),
                        b[d] = c; a.parts = b
                }
            } function da(a, b) {
                P(a); X(a); V(a); Z(a); S(a); R(a); N(a); if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version) a.wrapper.on("dragstart", function (b) { var c = b.data.getTarget(); e.getNestedEditable(a, c) || a.inline && e.isDomDragHandler(c) || b.data.preventDefault() }); a.wrapper.removeClass("cke_widget_new"); a.element.addClass("cke_widget_element"); a.on("key", function (b) {
                    b = b.data.keyCode; if (13 == b) a.edit(); else {
                        if (b == CKEDITOR.CTRL + 67 || b == CKEDITOR.CTRL + 88) { H(a, b == CKEDITOR.CTRL + 88); return } if (b in T || CKEDITOR.CTRL &
                            b || CKEDITOR.ALT & b) return
                    } return !1
                }, null, null, 999); a.on("doubleclick", function (b) { a.edit() && b.cancel() }); if (b.data) a.on("data", b.data); if (b.edit) a.on("edit", b.edit)
            } function P(a) { (a.wrapper = a.element.getParent()).setAttribute("data-cke-widget-id", a.id) } function Q(a) { a.element.data("cke-widget-data", encodeURIComponent(JSON.stringify(a.data))) } function M() {
                function a() { } function b(a, c, d) { return d && this.checkElement(a) ? (a = d.widgets.getByElement(a, !0)) && a.checkStyleActive(this) : !1 } var c = {}; CKEDITOR.style.addCustomHandler({
                    type: "widget",
                    setup: function (a) { this.widget = a.widget; if (this.group = "string" == typeof a.group ? [a.group] : a.group) { a = this.widget; var b; c[a] || (c[a] = {}); for (var d = 0, e = this.group.length; d < e; d++)b = this.group[d], c[a][b] || (c[a][b] = []), c[a][b].push(this) } }, apply: function (a) { var b; a instanceof CKEDITOR.editor && this.checkApplicable(a.elementPath(), a) && (b = a.widgets.focused, this.group && this.removeStylesFromSameGroup(a), b.applyStyle(this)) }, remove: function (a) {
                        a instanceof CKEDITOR.editor && this.checkApplicable(a.elementPath(),
                            a) && a.widgets.focused.removeStyle(this)
                    }, removeStylesFromSameGroup: function (a) { var b, d, e = !1; if (!(a instanceof CKEDITOR.editor)) return !1; d = a.elementPath(); if (this.checkApplicable(d, a)) for (var f = 0, g = this.group.length; f < g; f++) { b = c[this.widget][this.group[f]]; for (var h = 0; h < b.length; h++)b[h] !== this && b[h].checkActive(d, a) && (a.widgets.focused.removeStyle(b[h]), e = !0) } return e }, checkActive: function (a, b) { return this.checkElementMatch(a.lastElement, 0, b) }, checkApplicable: function (a, b) {
                        return b instanceof CKEDITOR.editor ?
                            this.checkElement(a.lastElement) : !1
                    }, checkElementMatch: b, checkElementRemovable: b, checkElement: function (a) { return e.isDomWidgetWrapper(a) ? (a = a.getFirst(e.isDomWidgetElement)) && a.data("widget") == this.widget : !1 }, buildPreview: function (a) { return a || this._.definition.name }, toAllowedContentRules: function (a) {
                        if (!a) return null; a = a.widgets.registered[this.widget]; var b, c = {}; if (!a) return null; if (a.styleableElements) {
                            b = this.getClassesArray(); if (!b) return null; c[a.styleableElements] = { classes: b, propertiesOnly: !0 };
                            return c
                        } return a.styleToAllowedContentRules ? a.styleToAllowedContentRules(this) : null
                    }, getClassesArray: function () { var a = this._.definition.attributes && this._.definition.attributes["class"]; return a ? CKEDITOR.tools.trim(a).split(/\s+/) : null }, applyToRange: a, removeFromRange: a, applyToObject: a
                })
            } CKEDITOR.plugins.add("widget", {
                requires: "lineutils,clipboard,widgetselection", onLoad: function () {
                    void 0 !== CKEDITOR.document.$.querySelectorAll && (CKEDITOR.addCss(".cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover\x3e.cke_widget_element{outline:2px solid #ffd25c;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid #ffd25c}.cke_widget_wrapper.cke_widget_focused\x3e.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #47a4f5}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:15px;height:0;display:none;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover\x3e.cke_widget_drag_handler_container{height:15px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}img.cke_widget_drag_handler{cursor:move;width:15px;height:15px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}"),
                        M())
                }, beforeInit: function (b) { void 0 !== CKEDITOR.document.$.querySelectorAll && (b.widgets = new a(b)) }, afterInit: function (a) { if (void 0 !== CKEDITOR.document.$.querySelectorAll) { var b = a.widgets.registered, c, d, e; for (d in b) c = b[d], (e = c.button) && a.ui.addButton && a.ui.addButton(CKEDITOR.tools.capitalize(c.name, !0), { label: e, command: c.name, toolbar: "insert,10" }); w(a) } }
            }); a.prototype = {
                MIN_SELECTION_CHECK_INTERVAL: 500, add: function (a, b) {
                    b = CKEDITOR.tools.prototypedCopy(b); b.name = a; b._ = b._ || {}; this.editor.fire("widgetDefinition",
                        b); b.template && (b.template = new CKEDITOR.template(b.template)); c(this.editor, b); d(this, b); return this.registered[a] = b
                }, addUpcastCallback: function (a) { this._.upcastCallbacks.push(a) }, checkSelection: function () {
                    var a = this.editor.getSelection(), b = a.getSelectedElement(), c = F(this), d; if (b && (d = this.getByElement(b, !0))) return c.focus(d).select(d).commit(); a = a.getRanges()[0]; if (!a || a.collapsed) return c.commit(); a = new CKEDITOR.dom.walker(a); for (a.evaluator = e.isDomWidgetWrapper; b = a.next();)c.select(this.getByElement(b));
                    c.commit()
                }, checkWidgets: function (a) { this.fire("checkWidgets", CKEDITOR.tools.copy(a || {})) }, del: function (a) { if (this.focused === a) { var b = a.editor, c = b.createRange(), d; (d = c.moveToClosestEditablePosition(a.wrapper, !0)) || (d = c.moveToClosestEditablePosition(a.wrapper, !1)); d && b.getSelection().selectRanges([c]) } a.wrapper.remove(); this.destroy(a, !0) }, destroy: function (a, b) { this.widgetHoldingFocusedEditable === a && p(this, a, null, b); a.destroy(b); delete this.instances[a.id]; this.fire("instanceDestroyed", a) }, destroyAll: function (a,
                    b) { var c, d, e = this.instances; if (b && !a) { d = b.find(".cke_widget_wrapper"); for (var e = d.count(), f = 0; f < e; ++f)(c = this.getByElement(d.getItem(f), !0)) && this.destroy(c) } else for (d in e) c = e[d], this.destroy(c, a) }, finalizeCreation: function (a) { (a = a.getFirst()) && e.isDomWidgetWrapper(a) && (this.editor.insertElement(a), a = this.getByElement(a), a.ready = !0, a.fire("ready"), a.focus()) }, getByElement: function () {
                        function a(c) { return c.is(b) && c.data("cke-widget-id") } var b = { div: 1, span: 1 }; return function (b, c) {
                            if (!b) return null;
                            var d = a(b); if (!c && !d) { var e = this.editor.editable(); do b = b.getParent(); while (b && !b.equals(e) && !(d = a(b))) } return this.instances[d] || null
                        }
                    }(), initOn: function (a, b, c) { b ? "string" == typeof b && (b = this.registered[b]) : b = this.registered[a.data("widget")]; if (!b) return null; var d = this.wrapElement(a, b.name); return d ? d.hasClass("cke_widget_new") ? (a = new e(this, this._.nextId++, a, b, c), a.isInited() ? this.instances[a.id] = a : null) : this.getByElement(a) : null }, initOnAll: function (a) {
                        a = (a || this.editor.editable()).find(".cke_widget_new");
                        for (var b = [], c, d = a.count(); d--;)(c = this.initOn(a.getItem(d).getFirst(e.isDomWidgetElement))) && b.push(c); return b
                    }, onWidget: function (a) { var b = Array.prototype.slice.call(arguments); b.shift(); for (var c in this.instances) { var d = this.instances[c]; d.name == a && d.on.apply(d, b) } this.on("instanceCreated", function (c) { c = c.data; c.name == a && c.on.apply(c, b) }) }, parseElementClasses: function (a) {
                        if (!a) return null; a = CKEDITOR.tools.trim(a).split(/\s+/); for (var b, c = {}, d = 0; b = a.pop();)-1 == b.indexOf("cke_") && (c[b] = d = 1); return d ?
                            c : null
                    }, wrapElement: function (a, b) {
                        var c = null, d, e; if (a instanceof CKEDITOR.dom.element) {
                            b = b || a.data("widget"); d = this.registered[b]; if (!d) return null; if ((c = a.getParent()) && c.type == CKEDITOR.NODE_ELEMENT && c.data("cke-widget-wrapper")) return c; a.hasAttribute("data-cke-widget-keep-attr") || a.data("cke-widget-keep-attr", a.data("widget") ? 1 : 0); a.data("widget", b); (e = v(d, a.getName())) && g(a); c = new CKEDITOR.dom.element(e ? "span" : "div"); c.setAttributes(r(e, b)); c.data("cke-display-name", d.pathName ? d.pathName : a.getName());
                            a.getParent(!0) && c.replace(a); a.appendTo(c)
                        } else if (a instanceof CKEDITOR.htmlParser.element) {
                            b = b || a.attributes["data-widget"]; d = this.registered[b]; if (!d) return null; if ((c = a.parent) && c.type == CKEDITOR.NODE_ELEMENT && c.attributes["data-cke-widget-wrapper"]) return c; "data-cke-widget-keep-attr" in a.attributes || (a.attributes["data-cke-widget-keep-attr"] = a.attributes["data-widget"] ? 1 : 0); b && (a.attributes["data-widget"] = b); (e = v(d, a.name)) && g(a); c = new CKEDITOR.htmlParser.element(e ? "span" : "div", r(e, b)); c.attributes["data-cke-display-name"] =
                                d.pathName ? d.pathName : a.name; d = a.parent; var f; d && (f = a.getIndex(), a.remove()); c.add(a); d && u(d, f, c)
                        } return c
                    }, _tests_createEditableFilter: f
            }; CKEDITOR.event.implementOn(a.prototype); e.prototype = {
                addClass: function (a) { this.element.addClass(a); this.wrapper.addClass(e.WRAPPER_CLASS_PREFIX + a) }, applyStyle: function (a) { E(this, a, 1) }, checkStyleActive: function (a) { a = K(a); var b; if (!a) return !1; for (; b = a.pop();)if (!this.hasClass(b)) return !1; return !0 }, destroy: function (a) {
                    this.fire("destroy"); if (this.editables) for (var b in this.editables) this.destroyEditable(b,
                        a); a || ("0" == this.element.data("cke-widget-keep-attr") && this.element.removeAttribute("data-widget"), this.element.removeAttributes(["data-cke-widget-data", "data-cke-widget-keep-attr"]), this.element.removeClass("cke_widget_element"), this.element.replace(this.wrapper)); this.wrapper = null
                }, destroyEditable: function (a, b) {
                    var c = this.editables[a]; c.removeListener("focus", D); c.removeListener("blur", J); this.editor.focusManager.remove(c); b || (this.repository.destroyAll(!1, c), c.removeClass("cke_widget_editable"),
                        c.removeClass("cke_widget_editable_focused"), c.removeAttributes(["contenteditable", "data-cke-widget-editable", "data-cke-enter-mode"])); delete this.editables[a]
                }, edit: function () {
                    var a = { dialog: this.dialog }, b = this; if (!1 === this.fire("edit", a) || !a.dialog) return !1; this.editor.openDialog(a.dialog, function (a) {
                        var c, d; !1 !== b.fire("dialog", a) && (c = a.on("show", function () { a.setupContent(b) }), d = a.on("ok", function () {
                            var c, d = b.on("data", function (a) { c = 1; a.cancel() }, null, null, 0); b.editor.fire("saveSnapshot"); a.commitContent(b);
                            d.removeListener(); c && (b.fire("data", b.data), b.editor.fire("saveSnapshot"))
                        }), a.once("hide", function () { c.removeListener(); d.removeListener() }))
                    }); return !0
                }, getClasses: function () { return this.repository.parseElementClasses(this.element.getAttribute("class")) }, hasClass: function (a) { return this.element.hasClass(a) }, initEditable: function (a, c) {
                    var d = this._findOneNotNested(c.selector); return d && d.is(CKEDITOR.dtd.$editable) ? (d = new b(this.editor, d, { filter: f.call(this.repository, this.name, a, c) }), this.editables[a] =
                        d, d.setAttributes({ contenteditable: "true", "data-cke-widget-editable": a, "data-cke-enter-mode": d.enterMode }), d.filter && d.data("cke-filter", d.filter.id), d.addClass("cke_widget_editable"), d.removeClass("cke_widget_editable_focused"), c.pathName && d.data("cke-display-name", c.pathName), this.editor.focusManager.add(d), d.on("focus", D, this), CKEDITOR.env.ie && d.on("blur", J, this), d._.initialSetData = !0, d.setData(d.getHtml()), !0) : !1
                }, _findOneNotNested: function (a) {
                    a = this.wrapper.find(a); for (var b, c, d = 0; d < a.count(); d++)if (b =
                        a.getItem(d), c = b.getAscendant(e.isDomWidgetWrapper), this.wrapper.equals(c)) return b; return null
                }, isInited: function () { return !(!this.wrapper || !this.inited) }, isReady: function () { return this.isInited() && this.ready }, focus: function () { var a = this.editor.getSelection(); if (a) { var b = this.editor.checkDirty(); a.fake(this.wrapper); !b && this.editor.resetDirty() } this.editor.focus() }, removeClass: function (a) { this.element.removeClass(a); this.wrapper.removeClass(e.WRAPPER_CLASS_PREFIX + a) }, removeStyle: function (a) {
                    E(this,
                        a, 0)
                }, setData: function (a, b) { var c = this.data, d = 0; if ("string" == typeof a) c[a] !== b && (c[a] = b, d = 1); else { var e = a; for (a in e) c[a] !== e[a] && (d = 1, c[a] = e[a]) } d && this.dataReady && (Q(this), this.fire("data", c)); return this }, setFocused: function (a) { this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_focused"); this.fire(a ? "focus" : "blur"); return this }, setSelected: function (a) { this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_selected"); this.fire(a ? "select" : "deselect"); return this }, updateDragHandlerPosition: function () {
                    var a =
                        this.editor, b = this.element.$, c = this._.dragHandlerOffset, b = { x: b.offsetLeft, y: b.offsetTop - 15 }; c && b.x == c.x && b.y == c.y || (c = a.checkDirty(), a.fire("lockSnapshot"), this.dragHandlerContainer.setStyles({ top: b.y + "px", left: b.x + "px", display: "block" }), a.fire("unlockSnapshot"), !c && a.resetDirty(), this._.dragHandlerOffset = b)
                }
            }; CKEDITOR.event.implementOn(e.prototype); e.getNestedEditable = function (a, b) { return !b || b.equals(a) ? null : e.isDomNestedEditable(b) ? b : e.getNestedEditable(a, b.getParent()) }; e.isDomDragHandler = function (a) {
                return a.type ==
                    CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-drag-handler")
            }; e.isDomDragHandlerContainer = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasClass("cke_widget_drag_handler_container") }; e.isDomNestedEditable = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-editable") }; e.isDomWidgetElement = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-widget") }; e.isDomWidgetWrapper = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-cke-widget-wrapper") };
            e.isDomWidget = function (a) { return a ? this.isDomWidgetWrapper(a) || this.isDomWidgetElement(a) : !1 }; e.isParserWidgetElement = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-widget"] }; e.isParserWidgetWrapper = function (a) { return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-cke-widget-wrapper"] }; e.WRAPPER_CLASS_PREFIX = "cke_widget_wrapper_"; b.prototype = CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype), {
                setData: function (a) {
                    this._.initialSetData ||
                    this.editor.widgets.destroyAll(!1, this); this._.initialSetData = !1; a = this.editor.dataProcessor.toHtml(a, { context: this.getName(), filter: this.filter, enterMode: this.enterMode }); this.setHtml(a); this.editor.widgets.initOnAll(this)
                }, getData: function () { return this.editor.dataProcessor.toDataFormat(this.getHtml(), { context: this.getName(), filter: this.filter, enterMode: this.enterMode }) }
            }); var U = /^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,
                T = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1 }; CKEDITOR.plugins.widget = e; e.repository = a; e.nestedEditable = b
        }(), function () {
            function a(a, c, d) { this.editor = a; this.notification = null; this._message = new CKEDITOR.template(c); this._singularMessage = d ? new CKEDITOR.template(d) : null; this._tasks = []; this._doneTasks = this._doneWeights = this._totalWeights = 0 } function e(a) { this._weight = a || 1; this._doneWeight = 0; this._isCanceled = !1 } CKEDITOR.plugins.add("notificationaggregator", { requires: "notification" }); a.prototype = {
                createTask: function (a) {
                    a =
                    a || {}; var c = !this.notification, d; c && (this.notification = this._createNotification()); d = this._addTask(a); d.on("updated", this._onTaskUpdate, this); d.on("done", this._onTaskDone, this); d.on("canceled", function () { this._removeTask(d) }, this); this.update(); c && this.notification.show(); return d
                }, update: function () { this._updateNotification(); this.isFinished() && this.fire("finished") }, getPercentage: function () { return 0 === this.getTaskCount() ? 1 : this._doneWeights / this._totalWeights }, isFinished: function () {
                    return this.getDoneTaskCount() ===
                        this.getTaskCount()
                }, getTaskCount: function () { return this._tasks.length }, getDoneTaskCount: function () { return this._doneTasks }, _updateNotification: function () { this.notification.update({ message: this._getNotificationMessage(), progress: this.getPercentage() }) }, _getNotificationMessage: function () { var a = this.getTaskCount(), c = { current: this.getDoneTaskCount(), max: a, percentage: Math.round(100 * this.getPercentage()) }; return (1 == a && this._singularMessage ? this._singularMessage : this._message).output(c) }, _createNotification: function () {
                    return new CKEDITOR.plugins.notification(this.editor,
                        { type: "progress" })
                }, _addTask: function (a) { a = new e(a.weight); this._tasks.push(a); this._totalWeights += a._weight; return a }, _removeTask: function (a) { var c = CKEDITOR.tools.indexOf(this._tasks, a); -1 !== c && (a._doneWeight && (this._doneWeights -= a._doneWeight), this._totalWeights -= a._weight, this._tasks.splice(c, 1), this.update()) }, _onTaskUpdate: function (a) { this._doneWeights += a.data; this.update() }, _onTaskDone: function () { this._doneTasks += 1; this.update() }
            }; CKEDITOR.event.implementOn(a.prototype); e.prototype = {
                done: function () { this.update(this._weight) },
                update: function (a) { if (!this.isDone() && !this.isCanceled()) { a = Math.min(this._weight, a); var c = a - this._doneWeight; this._doneWeight = a; this.fire("updated", c); this.isDone() && this.fire("done") } }, cancel: function () { this.isDone() || this.isCanceled() || (this._isCanceled = !0, this.fire("canceled")) }, isDone: function () { return this._weight === this._doneWeight }, isCanceled: function () { return this._isCanceled }
            }; CKEDITOR.event.implementOn(e.prototype); CKEDITOR.plugins.notificationAggregator = a; CKEDITOR.plugins.notificationAggregator.task =
                e
        }(), "use strict", function () {
            CKEDITOR.plugins.add("uploadwidget", { requires: "widget,clipboard,filetools,notificationaggregator", init: function (a) { a.filter.allow("*[!data-widget,!data-cke-upload-id]") } }); CKEDITOR.fileTools || (CKEDITOR.fileTools = {}); CKEDITOR.tools.extend(CKEDITOR.fileTools, {
                addUploadWidget: function (a, e, b) {
                    var c = CKEDITOR.fileTools, d = a.uploadRepository, l = b.supportedTypes ? 10 : 20; if (b.fileToElement) a.on("paste", function (b) {
                        b = b.data; var g = a.widgets.registered[e], h = b.dataTransfer, l = h.getFilesCount(),
                            f = g.loadMethod || "loadAndUpload", n, r; if (!b.dataValue && l) for (r = 0; r < l; r++)if (n = h.getFile(r), !g.supportedTypes || c.isTypeSupported(n, g.supportedTypes)) { var u = g.fileToElement(n); n = d.create(n, void 0, g.loaderType); u && (n[f](g.uploadUrl, g.additionalRequestParameters), CKEDITOR.fileTools.markElement(u, e, n.id), "loadAndUpload" != f && "upload" != f || g.skipNotifications || CKEDITOR.fileTools.bindNotifications(a, n), b.dataValue += u.getOuterHtml()) }
                    }, null, null, l); CKEDITOR.tools.extend(b, {
                        downcast: function () { return new CKEDITOR.htmlParser.text("") },
                        init: function () {
                            var b = this, c = this.wrapper.findOne("[data-cke-upload-id]").data("cke-upload-id"), e = d.loaders[c], l = CKEDITOR.tools.capitalize, f, n; e.on("update", function (d) {
                                if (b.wrapper && b.wrapper.getParent()) { a.fire("lockSnapshot"); d = "on" + l(e.status); if ("function" !== typeof b[d] || !1 !== b[d](e)) n = "cke_upload_" + e.status, b.wrapper && n != f && (f && b.wrapper.removeClass(f), b.wrapper.addClass(n), f = n), "error" != e.status && "abort" != e.status || a.widgets.del(b); a.fire("unlockSnapshot") } else CKEDITOR.instances[a.name] &&
                                    a.editable().find('[data-cke-upload-id\x3d"' + c + '"]').count() || e.abort(), d.removeListener()
                            }); e.update()
                        }, replaceWith: function (b, c) { if ("" === b.trim()) a.widgets.del(this); else { var d = this == a.widgets.focused, e = a.editable(), f = a.createRange(), l, r; d || (r = a.getSelection().createBookmarks()); f.setStartBefore(this.wrapper); f.setEndAfter(this.wrapper); d && (l = f.createBookmark()); e.insertHtmlIntoRange(b, f, c); a.widgets.checkWidgets({ initOnlyNew: !0 }); a.widgets.destroy(this, !0); d ? (f.moveToBookmark(l), f.select()) : a.getSelection().selectBookmarks(r) } },
                        _getLoader: function () { var a = this.wrapper.findOne("[data-cke-upload-id]"); return a ? this.editor.uploadRepository.loaders[a.data("cke-upload-id")] : null }
                    }); a.widgets.add(e, b)
                }, markElement: function (a, e, b) { a.setAttributes({ "data-cke-upload-id": b, "data-widget": e }) }, bindNotifications: function (a, e) {
                    function b() {
                        c = a._.uploadWidgetNotificaionAggregator; if (!c || c.isFinished()) c = a._.uploadWidgetNotificaionAggregator = new CKEDITOR.plugins.notificationAggregator(a, a.lang.uploadwidget.uploadMany, a.lang.uploadwidget.uploadOne),
                            c.once("finished", function () { var b = c.getTaskCount(); 0 === b ? c.notification.hide() : c.notification.update({ message: 1 == b ? a.lang.uploadwidget.doneOne : a.lang.uploadwidget.doneMany.replace("%1", b), type: "success", important: 1 }) })
                    } var c, d = null; e.on("update", function () { !d && e.uploadTotal && (b(), d = c.createTask({ weight: e.uploadTotal })); d && "uploading" == e.status && d.update(e.uploaded) }); e.on("uploaded", function () { d && d.done() }); e.on("error", function () { d && d.cancel(); a.showNotification(e.message, "warning") }); e.on("abort",
                        function () { d && d.cancel(); CKEDITOR.instances[a.name] && a.showNotification(a.lang.uploadwidget.abort, "info") })
                }
            })
        }(), "use strict", function () {
            function a(a) { 9 >= a && (a = "0" + a); return String(a) } function e(c) { var d = new Date, d = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()]; b += 1; return "image-" + CKEDITOR.tools.array.map(d, a).join("") + "-" + b + "." + c } var b = 0; CKEDITOR.plugins.add("uploadimage", {
                requires: "uploadwidget", onLoad: function () { CKEDITOR.addCss(".cke_upload_uploading img{opacity: 0.3}") },
                init: function (a) {
                    if (CKEDITOR.plugins.clipboard.isFileApiSupported) {
                        var b = CKEDITOR.fileTools, l = b.getUploadUrl(a.config, "image"); l && (b.addUploadWidget(a, "uploadimage", {
                            supportedTypes: /image\/(jpeg|png|gif|bmp)/, uploadUrl: l, fileToElement: function () { var a = new CKEDITOR.dom.element("img"); a.setAttribute("src", "data:image/gif;base64,R0lGODlhDgAOAIAAAAAAAP///yH5BAAAAAAALAAAAAAOAA4AAAIMhI+py+0Po5y02qsKADs\x3d"); return a }, parts: { img: "img" }, onUploading: function (a) { this.parts.img.setAttribute("src", a.data) },
                            onUploaded: function (a) { var b = this.parts.img.$; this.replaceWith('\x3cimg src\x3d"' + a.url + '" width\x3d"' + (a.responseData.width || b.naturalWidth) + '" height\x3d"' + (a.responseData.height || b.naturalHeight) + '"\x3e') }
                        }), a.on("paste", function (k) {
                            if (k.data.dataValue.match(/<img[\s\S]+data:/i)) {
                                k = k.data; var g = document.implementation.createHTMLDocument(""), g = new CKEDITOR.dom.element(g.body), h, m, f; g.data("cke-editable", 1); g.appendHtml(k.dataValue); h = g.find("img"); for (f = 0; f < h.count(); f++) {
                                    m = h.getItem(f); var n = m.getAttribute("src"),
                                        r = n && "data:" == n.substring(0, 5), u = null === m.data("cke-realelement"); r && u && !m.data("cke-upload-id") && !m.isReadOnly(1) && (r = (r = n.match(/image\/([a-z]+?);/i)) && r[1] || "jpg", n = a.uploadRepository.create(n, e(r)), n.upload(l), b.markElement(m, "uploadimage", n.id), b.bindNotifications(a, n))
                                } k.dataValue = g.getHtml()
                            }
                        }))
                    }
                }
            })
        }(), CKEDITOR.plugins.add("wsc", {
            requires: "dialog", parseApi: function (a) {
                a.config.wsc_onFinish = "function" === typeof a.config.wsc_onFinish ? a.config.wsc_onFinish : function () { }; a.config.wsc_onClose = "function" ===
                    typeof a.config.wsc_onClose ? a.config.wsc_onClose : function () { }
            }, parseConfig: function (a) {
                a.config.wsc_customerId = a.config.wsc_customerId || CKEDITOR.config.wsc_customerId || "1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk"; a.config.wsc_customDictionaryIds = a.config.wsc_customDictionaryIds || CKEDITOR.config.wsc_customDictionaryIds || ""; a.config.wsc_userDictionaryName = a.config.wsc_userDictionaryName || CKEDITOR.config.wsc_userDictionaryName || ""; a.config.wsc_customLoaderScript = a.config.wsc_customLoaderScript ||
                    CKEDITOR.config.wsc_customLoaderScript; a.config.wsc_interfaceLang = a.config.wsc_interfaceLang; CKEDITOR.config.wsc_cmd = a.config.wsc_cmd || CKEDITOR.config.wsc_cmd || "spell"; CKEDITOR.config.wsc_version = "v4.3.0-master-d769233"; CKEDITOR.config.wsc_removeGlobalVariable = !0
            }, onLoad: function (a) { "moono-lisa" == (CKEDITOR.skinName || a.config.skin) && CKEDITOR.document.appendStyleSheet(this.path + "skins/" + CKEDITOR.skin.name + "/wsc.css") }, init: function (a) {
                var e = CKEDITOR.env; this.parseConfig(a); this.parseApi(a); a.addCommand("checkspell",
                    new CKEDITOR.dialogCommand("checkspell")).modes = { wysiwyg: !CKEDITOR.env.opera && !CKEDITOR.env.air && document.domain == window.location.hostname && !(e.ie && (8 > e.version || e.quirks)) }; "undefined" == typeof a.plugins.scayt && a.ui.addButton && a.ui.addButton("SpellChecker", { label: a.lang.wsc.toolbar, click: function (a) { var c = a.elementMode == CKEDITOR.ELEMENT_MODE_INLINE ? a.container.getText() : a.document.getBody().getText(); (c = c.replace(/\s/g, "")) ? a.execCommand("checkspell") : alert("Nothing to check!") }, toolbar: "spellchecker,10" });
                CKEDITOR.dialog.add("checkspell", this.path + (CKEDITOR.env.ie && 7 >= CKEDITOR.env.version ? "dialogs/wsc_ie.js" : window.postMessage ? "dialogs/wsc.js" : "dialogs/wsc_ie.js"))
            }
        }), function () {
            function a(a) {
                function b(a) {
                    var c = !1; f.attachListener(f, "keydown", function () { var b = g.getBody().getElementsByTag(a); if (!c) { for (var d = 0; d < b.count(); d++)b.getItem(d).setCustomData("retain", !0); c = !0 } }, null, null, 1); f.attachListener(f, "keyup", function () {
                        var b = g.getElementsByTag(a); c && (1 == b.count() && !b.getItem(0).getCustomData("retain") &&
                            CKEDITOR.tools.isEmpty(b.getItem(0).getAttributes()) && b.getItem(0).remove(1), c = !1)
                    })
                } var c = this.editor, g = a.document, h = g.body, m = g.getElementById("cke_actscrpt"); m && m.parentNode.removeChild(m); (m = g.getElementById("cke_shimscrpt")) && m.parentNode.removeChild(m); (m = g.getElementById("cke_basetagscrpt")) && m.parentNode.removeChild(m); h.contentEditable = !0; CKEDITOR.env.ie && (h.hideFocus = !0, h.disabled = !0, h.removeAttribute("disabled")); delete this._.isLoadingData; this.$ = h; g = new CKEDITOR.dom.document(g); this.setup();
                this.fixInitialSelection(); var f = this; CKEDITOR.env.ie && !CKEDITOR.env.edge && g.getDocumentElement().addClass(g.$.compatMode); CKEDITOR.env.ie && !CKEDITOR.env.edge && c.enterMode != CKEDITOR.ENTER_P ? b("p") : CKEDITOR.env.edge && 15 > CKEDITOR.env.version && c.enterMode != CKEDITOR.ENTER_DIV && b("div"); if (CKEDITOR.env.webkit || CKEDITOR.env.ie && 10 < CKEDITOR.env.version) g.getDocumentElement().on("mousedown", function (a) { a.data.getTarget().is("html") && setTimeout(function () { c.editable().focus() }) }); e(c); try {
                    c.document.$.execCommand("2D-position",
                        !1, !0)
                } catch (n) { } (CKEDITOR.env.gecko || CKEDITOR.env.ie && "CSS1Compat" == c.document.$.compatMode) && this.attachListener(this, "keydown", function (a) { var b = a.data.getKeystroke(); if (33 == b || 34 == b) if (CKEDITOR.env.ie) setTimeout(function () { c.getSelection().scrollIntoView() }, 0); else if (c.window.$.innerHeight > this.$.offsetHeight) { var d = c.createRange(); d[33 == b ? "moveToElementEditStart" : "moveToElementEditEnd"](this); d.select(); a.data.preventDefault() } }); CKEDITOR.env.ie && this.attachListener(g, "blur", function () { try { g.$.selection.empty() } catch (a) { } });
                CKEDITOR.env.iOS && this.attachListener(g, "touchend", function () { a.focus() }); h = c.document.getElementsByTag("title").getItem(0); h.data("cke-title", h.getText()); CKEDITOR.env.ie && (c.document.$.title = this._.docTitle); CKEDITOR.tools.setTimeout(function () { "unloaded" == this.status && (this.status = "ready"); c.fire("contentDom"); this._.isPendingFocus && (c.focus(), this._.isPendingFocus = !1); setTimeout(function () { c.fire("dataReady") }, 0) }, 0, this)
            } function e(a) {
                function b() {
                    var e; a.editable().attachListener(a, "selectionChange",
                        function () { var b = a.getSelection().getSelectedElement(); b && (e && (e.detachEvent("onresizestart", c), e = null), b.$.attachEvent("onresizestart", c), e = b.$) })
                } function c(a) { a.returnValue = !1 } if (CKEDITOR.env.gecko) try { var e = a.document.$; e.execCommand("enableObjectResizing", !1, !a.config.disableObjectResizing); e.execCommand("enableInlineTableEditing", !1, !a.config.disableNativeTableHandles) } catch (h) { } else CKEDITOR.env.ie && 11 > CKEDITOR.env.version && a.config.disableObjectResizing && b(a)
            } function b() {
                var a = []; if (8 <= CKEDITOR.document.$.documentMode) {
                    a.push("html.CSS1Compat [contenteditable\x3dfalse]{min-height:0 !important}");
                    var b = [], c; for (c in CKEDITOR.dtd.$removeEmpty) b.push("html.CSS1Compat " + c + "[contenteditable\x3dfalse]"); a.push(b.join(",") + "{display:inline-block}")
                } else CKEDITOR.env.gecko && (a.push("html{height:100% !important}"), a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")); a.push("html{cursor:text;*cursor:auto}"); a.push("img,input,textarea{cursor:default}"); return a.join("\n")
            } var c; CKEDITOR.plugins.add("wysiwygarea", {
                init: function (a) {
                    a.config.fullPage && a.addFeature({
                        allowedContent: "html head title; style [media,type]; body (*)[id]; meta link [*]",
                        requiredContent: "body"
                    }); a.addMode("wysiwyg", function (b) {
                        function e(f) { f && f.removeListener(); a.editable(new c(a, h.$.contentWindow.document.body)); a.setData(a.getData(1), b) } var g = "document.open();" + (CKEDITOR.env.ie ? "(" + CKEDITOR.tools.fixDomain + ")();" : "") + "document.close();", g = CKEDITOR.env.air ? "javascript:void(0)" : CKEDITOR.env.ie && !CKEDITOR.env.edge ? "javascript:void(function(){" + encodeURIComponent(g) + "}())" : "", h = CKEDITOR.dom.element.createFromHtml('\x3ciframe src\x3d"' + g + '" frameBorder\x3d"0"\x3e\x3c/iframe\x3e');
                        h.setStyles({ width: "100%", height: "100%" }); h.addClass("cke_wysiwyg_frame").addClass("cke_reset"); g = a.ui.space("contents"); g.append(h); var m = CKEDITOR.env.ie && !CKEDITOR.env.edge || CKEDITOR.env.gecko; if (m) h.on("load", e); var f = a.title, n = a.fire("ariaEditorHelpLabel", {}).label; f && (CKEDITOR.env.ie && n && (f += ", " + n), h.setAttribute("title", f)); if (n) {
                            var f = CKEDITOR.tools.getNextId(), r = CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + f + '" class\x3d"cke_voice_label"\x3e' + n + "\x3c/span\x3e"); g.append(r, 1); h.setAttribute("aria-describedby",
                                f)
                        } a.on("beforeModeUnload", function (a) { a.removeListener(); r && r.remove() }); h.setAttributes({ tabIndex: a.tabIndex, allowTransparency: "true" }); !m && e(); a.fire("ariaWidget", h)
                    })
                }
            }); CKEDITOR.editor.prototype.addContentsCss = function (a) { var b = this.config, c = b.contentsCss; CKEDITOR.tools.isArray(c) || (b.contentsCss = c ? [c] : []); b.contentsCss.push(a) }; c = CKEDITOR.tools.createClass({
                $: function () {
                    this.base.apply(this, arguments); this._.frameLoadedHandler = CKEDITOR.tools.addFunction(function (b) {
                        CKEDITOR.tools.setTimeout(a,
                            0, this, b)
                    }, this); this._.docTitle = this.getWindow().getFrame().getAttribute("title")
                }, base: CKEDITOR.editable, proto: {
                    setData: function (a, c) {
                        var e = this.editor; if (c) this.setHtml(a), this.fixInitialSelection(), e.fire("dataReady"); else {
                            this._.isLoadingData = !0; e._.dataStore = { id: 1 }; var g = e.config, h = g.fullPage, m = g.docType, f = CKEDITOR.tools.buildStyleHtml(b()).replace(/<style>/, '\x3cstyle data-cke-temp\x3d"1"\x3e'); h || (f += CKEDITOR.tools.buildStyleHtml(e.config.contentsCss)); var n = g.baseHref ? '\x3cbase href\x3d"' +
                                g.baseHref + '" data-cke-temp\x3d"1" /\x3e' : ""; h && (a = a.replace(/<!DOCTYPE[^>]*>/i, function (a) { e.docType = m = a; return "" }).replace(/<\?xml\s[^\?]*\?>/i, function (a) { e.xmlDeclaration = a; return "" })); a = e.dataProcessor.toHtml(a); h ? (/<body[\s|>]/.test(a) || (a = "\x3cbody\x3e" + a), /<html[\s|>]/.test(a) || (a = "\x3chtml\x3e" + a + "\x3c/html\x3e"), /<head[\s|>]/.test(a) ? /<title[\s|>]/.test(a) || (a = a.replace(/<head[^>]*>/, "$\x26\x3ctitle\x3e\x3c/title\x3e")) : a = a.replace(/<html[^>]*>/, "$\x26\x3chead\x3e\x3ctitle\x3e\x3c/title\x3e\x3c/head\x3e"),
                                    n && (a = a.replace(/<head[^>]*?>/, "$\x26" + n)), a = a.replace(/<\/head\s*>/, f + "$\x26"), a = m + a) : a = g.docType + '\x3chtml dir\x3d"' + g.contentsLangDirection + '" lang\x3d"' + (g.contentsLanguage || e.langCode) + '"\x3e\x3chead\x3e\x3ctitle\x3e' + this._.docTitle + "\x3c/title\x3e" + n + f + "\x3c/head\x3e\x3cbody" + (g.bodyId ? ' id\x3d"' + g.bodyId + '"' : "") + (g.bodyClass ? ' class\x3d"' + g.bodyClass + '"' : "") + "\x3e" + a + "\x3c/body\x3e\x3c/html\x3e"; CKEDITOR.env.gecko && (a = a.replace(/<body/, '\x3cbody contenteditable\x3d"true" '), 2E4 > CKEDITOR.env.version &&
                                        (a = a.replace(/<body[^>]*>/, "$\x26\x3c!-- cke-content-start --\x3e"))); g = '\x3cscript id\x3d"cke_actscrpt" type\x3d"text/javascript"' + (CKEDITOR.env.ie ? ' defer\x3d"defer" ' : "") + "\x3evar wasLoaded\x3d0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction(" + this._.frameLoadedHandler + ",window);wasLoaded\x3d1;}" + (CKEDITOR.env.ie ? "onload();" : 'document.addEventListener("DOMContentLoaded", onload, false );') + "\x3c/script\x3e"; CKEDITOR.env.ie && 9 > CKEDITOR.env.version && (g += '\x3cscript id\x3d"cke_shimscrpt"\x3ewindow.parent.CKEDITOR.tools.enableHtml5Elements(document)\x3c/script\x3e');
                            n && CKEDITOR.env.ie && 10 > CKEDITOR.env.version && (g += '\x3cscript id\x3d"cke_basetagscrpt"\x3evar baseTag \x3d document.querySelector( "base" );baseTag.href \x3d baseTag.href;\x3c/script\x3e'); a = a.replace(/(?=\s*<\/(:?head)>)/, g); this.clearCustomData(); this.clearListeners(); e.fire("contentDomUnload"); var r = this.getDocument(); try { r.write(a) } catch (u) { setTimeout(function () { r.write(a) }, 0) }
                        }
                    }, getData: function (a) {
                        if (a) return this.getHtml(); a = this.editor; var b = a.config, c = b.fullPage, e = c && a.docType, h = c && a.xmlDeclaration,
                            m = this.getDocument(), c = c ? m.getDocumentElement().getOuterHtml() : m.getBody().getHtml(); CKEDITOR.env.gecko && b.enterMode != CKEDITOR.ENTER_BR && (c = c.replace(/<br>(?=\s*(:?$|<\/body>))/, "")); c = a.dataProcessor.toDataFormat(c); h && (c = h + "\n" + c); e && (c = e + "\n" + c); return c
                    }, focus: function () { this._.isLoadingData ? this._.isPendingFocus = !0 : c.baseProto.focus.call(this) }, detach: function () {
                        var a = this.editor, b = a.document, e; try { e = a.window.getFrame() } catch (g) { } c.baseProto.detach.call(this); this.clearCustomData(); b.getDocumentElement().clearCustomData();
                        CKEDITOR.tools.removeFunction(this._.frameLoadedHandler); e && e.getParent() ? (e.clearCustomData(), (a = e.removeCustomData("onResize")) && a.removeListener(), e.remove()) : CKEDITOR.warn("editor-destroy-iframe")
                    }
                }
            })
        }(), CKEDITOR.config.disableObjectResizing = !1, CKEDITOR.config.disableNativeTableHandles = !0, CKEDITOR.config.disableNativeSpellChecker = !0, CKEDITOR.config.plugins = "dialogui,dialog,a11yhelp,about,basicstyles,blockquote,notification,button,toolbar,clipboard,panel,floatpanel,menu,contextmenu,elementspath,indent,indentlist,list,enterkey,entities,popup,filetools,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,image,fakeobjects,link,magicline,maximize,pastefromword,pastetext,removeformat,resize,menubutton,scayt,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc,wysiwygarea",
        CKEDITOR.config.skin = "moono-lisa", function () {
            var a = function (a, b) { var c = CKEDITOR.getUrl("plugins/" + b); a = a.split(","); for (var d = 0; d < a.length; d++)CKEDITOR.skin.icons[a[d]] = { path: c, offset: -a[++d], bgsize: a[++d] } }; CKEDITOR.env.hidpi ? a("about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,codesnippet,384,,bgcolor,408,,textcolor,432,,copyformatting,456,,creatediv,480,,docprops-rtl,504,,docprops,528,,easyimagealigncenter,552,,easyimagealignleft,576,,easyimagealignright,600,,easyimagealt,624,,easyimagefull,648,,easyimageside,672,,easyimageupload,696,,embed,720,,embedsemantic,744,,find-rtl,768,,find,792,,replace,816,,flash,840,,button,864,,checkbox,888,,form,912,,hiddenfield,936,,imagebutton,960,,radio,984,,select-rtl,1008,,select,1032,,textarea-rtl,1056,,textarea,1080,,textfield-rtl,1104,,textfield,1128,,horizontalrule,1152,,iframe,1176,,image,1200,,indent-rtl,1224,,indent,1248,,outdent-rtl,1272,,outdent,1296,,justifyblock,1320,,justifycenter,1344,,justifyleft,1368,,justifyright,1392,,language,1416,,anchor-rtl,1440,,anchor,1464,,link,1488,,unlink,1512,,bulletedlist-rtl,1536,,bulletedlist,1560,,numberedlist-rtl,1584,,numberedlist,1608,,mathjax,1632,,maximize,1656,,newpage-rtl,1680,,newpage,1704,,pagebreak-rtl,1728,,pagebreak,1752,,pastefromword-rtl,1776,,pastefromword,1800,,pastetext-rtl,1824,,pastetext,1848,,placeholder,1872,,preview-rtl,1896,,preview,1920,,print,1944,,removeformat,1968,,save,1992,,scayt,2016,,selectall,2040,,showblocks-rtl,2064,,showblocks,2088,,smiley,2112,,source-rtl,2136,,source,2160,,sourcedialog-rtl,2184,,sourcedialog,2208,,specialchar,2232,,table,2256,,templates-rtl,2280,,templates,2304,,uicolor,2328,,redo-rtl,2352,,redo,2376,,undo-rtl,2400,,undo,2424,,simplebox,4896,auto,spellchecker,2472,",
                "icons_hidpi.png") : a("about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,codesnippet,384,auto,bgcolor,408,auto,textcolor,432,auto,copyformatting,456,auto,creatediv,480,auto,docprops-rtl,504,auto,docprops,528,auto,easyimagealigncenter,552,auto,easyimagealignleft,576,auto,easyimagealignright,600,auto,easyimagealt,624,auto,easyimagefull,648,auto,easyimageside,672,auto,easyimageupload,696,auto,embed,720,auto,embedsemantic,744,auto,find-rtl,768,auto,find,792,auto,replace,816,auto,flash,840,auto,button,864,auto,checkbox,888,auto,form,912,auto,hiddenfield,936,auto,imagebutton,960,auto,radio,984,auto,select-rtl,1008,auto,select,1032,auto,textarea-rtl,1056,auto,textarea,1080,auto,textfield-rtl,1104,auto,textfield,1128,auto,horizontalrule,1152,auto,iframe,1176,auto,image,1200,auto,indent-rtl,1224,auto,indent,1248,auto,outdent-rtl,1272,auto,outdent,1296,auto,justifyblock,1320,auto,justifycenter,1344,auto,justifyleft,1368,auto,justifyright,1392,auto,language,1416,auto,anchor-rtl,1440,auto,anchor,1464,auto,link,1488,auto,unlink,1512,auto,bulletedlist-rtl,1536,auto,bulletedlist,1560,auto,numberedlist-rtl,1584,auto,numberedlist,1608,auto,mathjax,1632,auto,maximize,1656,auto,newpage-rtl,1680,auto,newpage,1704,auto,pagebreak-rtl,1728,auto,pagebreak,1752,auto,pastefromword-rtl,1776,auto,pastefromword,1800,auto,pastetext-rtl,1824,auto,pastetext,1848,auto,placeholder,1872,auto,preview-rtl,1896,auto,preview,1920,auto,print,1944,auto,removeformat,1968,auto,save,1992,auto,scayt,2016,auto,selectall,2040,auto,showblocks-rtl,2064,auto,showblocks,2088,auto,smiley,2112,auto,source-rtl,2136,auto,source,2160,auto,sourcedialog-rtl,2184,auto,sourcedialog,2208,auto,specialchar,2232,auto,table,2256,auto,templates-rtl,2280,auto,templates,2304,auto,uicolor,2328,auto,redo-rtl,2352,auto,redo,2376,auto,undo-rtl,2400,auto,undo,2424,auto,simplebox,2448,auto,spellchecker,2472,auto",
                    "icons.png")
        }())
})();