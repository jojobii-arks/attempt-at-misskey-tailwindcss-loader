var Au = {}, lu = {};
(function(u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "default", {
    enumerable: !0,
    get: () => t
  });
  function e(r, n) {
    return {
      handler: r,
      config: n
    };
  }
  e.withOptions = function(r, n = () => ({})) {
    const D = function(s) {
      return {
        __options: s,
        handler: r(s),
        config: n(s)
      };
    };
    return D.__isOptionsFunction = !0, D.__pluginFunction = r, D.__configFunction = n, D;
  };
  const t = e;
})(lu);
(function(u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  }), Object.defineProperty(u, "default", {
    enumerable: !0,
    get: () => r
  });
  const e = /* @__PURE__ */ t(lu);
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  const r = e.default;
})(Au);
let Z = Au;
var bu = (Z.__esModule ? Z : { default: Z }).default, vu = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/, mu = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, yu = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/, K = {
  Space_Separator: vu,
  ID_Start: mu,
  ID_Continue: yu
}, B = {
  isSpaceSeparator(u) {
    return typeof u == "string" && K.Space_Separator.test(u);
  },
  isIdStartChar(u) {
    return typeof u == "string" && (u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u === "$" || u === "_" || K.ID_Start.test(u));
  },
  isIdContinueChar(u) {
    return typeof u == "string" && (u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u >= "0" && u <= "9" || u === "$" || u === "_" || u === "‌" || u === "‍" || K.ID_Continue.test(u));
  },
  isDigit(u) {
    return typeof u == "string" && /[0-9]/.test(u);
  },
  isHexDigit(u) {
    return typeof u == "string" && /[0-9A-Fa-f]/.test(u);
  }
};
let Y, x, P, W, T, M, v, ru, z;
var wu = function(e, t) {
  Y = String(e), x = "start", P = [], W = 0, T = 1, M = 0, v = void 0, ru = void 0, z = void 0;
  do
    v = _u(), ku[x]();
  while (v.type !== "eof");
  return typeof t == "function" ? uu({ "": z }, "", t) : z;
};
function uu(u, e, t) {
  const r = u[e];
  if (r != null && typeof r == "object")
    if (Array.isArray(r))
      for (let n = 0; n < r.length; n++) {
        const D = String(n), s = uu(r, D, t);
        s === void 0 ? delete r[D] : Object.defineProperty(r, D, {
          value: s,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
    else
      for (const n in r) {
        const D = uu(r, n, t);
        D === void 0 ? delete r[n] : Object.defineProperty(r, n, {
          value: D,
          writable: !0,
          enumerable: !0,
          configurable: !0
        });
      }
  return t.call(u, e, r);
}
let f, o, j, X, A;
function _u() {
  for (f = "default", o = "", j = !1, X = 1; ; ) {
    A = I();
    const u = Cu[f]();
    if (u)
      return u;
  }
}
function I() {
  if (Y[W])
    return String.fromCodePoint(Y.codePointAt(W));
}
function a() {
  const u = I();
  return u === `
` ? (T++, M = 0) : u ? M += u.length : M++, u && (W += u.length), u;
}
const Cu = {
  default() {
    switch (A) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        a();
        return;
      case "/":
        a(), f = "comment";
        return;
      case void 0:
        return a(), h("eof");
    }
    if (B.isSpaceSeparator(A)) {
      a();
      return;
    }
    return Cu[x]();
  },
  comment() {
    switch (A) {
      case "*":
        a(), f = "multiLineComment";
        return;
      case "/":
        a(), f = "singleLineComment";
        return;
    }
    throw g(a());
  },
  multiLineComment() {
    switch (A) {
      case "*":
        a(), f = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw g(a());
    }
    a();
  },
  multiLineCommentAsterisk() {
    switch (A) {
      case "*":
        a();
        return;
      case "/":
        a(), f = "default";
        return;
      case void 0:
        throw g(a());
    }
    a(), f = "multiLineComment";
  },
  singleLineComment() {
    switch (A) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        a(), f = "default";
        return;
      case void 0:
        return a(), h("eof");
    }
    a();
  },
  value() {
    switch (A) {
      case "{":
      case "[":
        return h("punctuator", a());
      case "n":
        return a(), R("ull"), h("null", null);
      case "t":
        return a(), R("rue"), h("boolean", !0);
      case "f":
        return a(), R("alse"), h("boolean", !1);
      case "-":
      case "+":
        a() === "-" && (X = -1), f = "sign";
        return;
      case ".":
        o = a(), f = "decimalPointLeading";
        return;
      case "0":
        o = a(), f = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        o = a(), f = "decimalInteger";
        return;
      case "I":
        return a(), R("nfinity"), h("numeric", 1 / 0);
      case "N":
        return a(), R("aN"), h("numeric", NaN);
      case '"':
      case "'":
        j = a() === '"', o = "", f = "string";
        return;
    }
    throw g(a());
  },
  identifierNameStartEscape() {
    if (A !== "u")
      throw g(a());
    a();
    const u = eu();
    switch (u) {
      case "$":
      case "_":
        break;
      default:
        if (!B.isIdStartChar(u))
          throw Du();
        break;
    }
    o += u, f = "identifierName";
  },
  identifierName() {
    switch (A) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        o += a();
        return;
      case "\\":
        a(), f = "identifierNameEscape";
        return;
    }
    if (B.isIdContinueChar(A)) {
      o += a();
      return;
    }
    return h("identifier", o);
  },
  identifierNameEscape() {
    if (A !== "u")
      throw g(a());
    a();
    const u = eu();
    switch (u) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!B.isIdContinueChar(u))
          throw Du();
        break;
    }
    o += u, f = "identifierName";
  },
  sign() {
    switch (A) {
      case ".":
        o = a(), f = "decimalPointLeading";
        return;
      case "0":
        o = a(), f = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        o = a(), f = "decimalInteger";
        return;
      case "I":
        return a(), R("nfinity"), h("numeric", X * (1 / 0));
      case "N":
        return a(), R("aN"), h("numeric", NaN);
    }
    throw g(a());
  },
  zero() {
    switch (A) {
      case ".":
        o += a(), f = "decimalPoint";
        return;
      case "e":
      case "E":
        o += a(), f = "decimalExponent";
        return;
      case "x":
      case "X":
        o += a(), f = "hexadecimal";
        return;
    }
    return h("numeric", X * 0);
  },
  decimalInteger() {
    switch (A) {
      case ".":
        o += a(), f = "decimalPoint";
        return;
      case "e":
      case "E":
        o += a(), f = "decimalExponent";
        return;
    }
    if (B.isDigit(A)) {
      o += a();
      return;
    }
    return h("numeric", X * Number(o));
  },
  decimalPointLeading() {
    if (B.isDigit(A)) {
      o += a(), f = "decimalFraction";
      return;
    }
    throw g(a());
  },
  decimalPoint() {
    switch (A) {
      case "e":
      case "E":
        o += a(), f = "decimalExponent";
        return;
    }
    if (B.isDigit(A)) {
      o += a(), f = "decimalFraction";
      return;
    }
    return h("numeric", X * Number(o));
  },
  decimalFraction() {
    switch (A) {
      case "e":
      case "E":
        o += a(), f = "decimalExponent";
        return;
    }
    if (B.isDigit(A)) {
      o += a();
      return;
    }
    return h("numeric", X * Number(o));
  },
  decimalExponent() {
    switch (A) {
      case "+":
      case "-":
        o += a(), f = "decimalExponentSign";
        return;
    }
    if (B.isDigit(A)) {
      o += a(), f = "decimalExponentInteger";
      return;
    }
    throw g(a());
  },
  decimalExponentSign() {
    if (B.isDigit(A)) {
      o += a(), f = "decimalExponentInteger";
      return;
    }
    throw g(a());
  },
  decimalExponentInteger() {
    if (B.isDigit(A)) {
      o += a();
      return;
    }
    return h("numeric", X * Number(o));
  },
  hexadecimal() {
    if (B.isHexDigit(A)) {
      o += a(), f = "hexadecimalInteger";
      return;
    }
    throw g(a());
  },
  hexadecimalInteger() {
    if (B.isHexDigit(A)) {
      o += a();
      return;
    }
    return h("numeric", X * Number(o));
  },
  string() {
    switch (A) {
      case "\\":
        a(), o += xu();
        return;
      case '"':
        if (j)
          return a(), h("string", o);
        o += a();
        return;
      case "'":
        if (!j)
          return a(), h("string", o);
        o += a();
        return;
      case `
`:
      case "\r":
        throw g(a());
      case "\u2028":
      case "\u2029":
        Hu(A);
        break;
      case void 0:
        throw g(a());
    }
    o += a();
  },
  start() {
    switch (A) {
      case "{":
      case "[":
        return h("punctuator", a());
    }
    f = "value";
  },
  beforePropertyName() {
    switch (A) {
      case "$":
      case "_":
        o = a(), f = "identifierName";
        return;
      case "\\":
        a(), f = "identifierNameStartEscape";
        return;
      case "}":
        return h("punctuator", a());
      case '"':
      case "'":
        j = a() === '"', f = "string";
        return;
    }
    if (B.isIdStartChar(A)) {
      o += a(), f = "identifierName";
      return;
    }
    throw g(a());
  },
  afterPropertyName() {
    if (A === ":")
      return h("punctuator", a());
    throw g(a());
  },
  beforePropertyValue() {
    f = "value";
  },
  afterPropertyValue() {
    switch (A) {
      case ",":
      case "}":
        return h("punctuator", a());
    }
    throw g(a());
  },
  beforeArrayValue() {
    if (A === "]")
      return h("punctuator", a());
    f = "value";
  },
  afterArrayValue() {
    switch (A) {
      case ",":
      case "]":
        return h("punctuator", a());
    }
    throw g(a());
  },
  end() {
    throw g(a());
  }
};
function h(u, e) {
  return {
    type: u,
    value: e,
    line: T,
    column: M
  };
}
function R(u) {
  for (const e of u) {
    if (I() !== e)
      throw g(a());
    a();
  }
}
function xu() {
  switch (I()) {
    case "b":
      return a(), "\b";
    case "f":
      return a(), "\f";
    case "n":
      return a(), `
`;
    case "r":
      return a(), "\r";
    case "t":
      return a(), "	";
    case "v":
      return a(), "\v";
    case "0":
      if (a(), B.isDigit(I()))
        throw g(a());
      return "\0";
    case "x":
      return a(), Su();
    case "u":
      return a(), eu();
    case `
`:
    case "\u2028":
    case "\u2029":
      return a(), "";
    case "\r":
      return a(), I() === `
` && a(), "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw g(a());
    case void 0:
      throw g(a());
  }
  return a();
}
function Su() {
  let u = "", e = I();
  if (!B.isHexDigit(e) || (u += a(), e = I(), !B.isHexDigit(e)))
    throw g(a());
  return u += a(), String.fromCodePoint(parseInt(u, 16));
}
function eu() {
  let u = "", e = 4;
  for (; e-- > 0; ) {
    const t = I();
    if (!B.isHexDigit(t))
      throw g(a());
    u += a();
  }
  return String.fromCodePoint(parseInt(u, 16));
}
const ku = {
  start() {
    if (v.type === "eof")
      throw L();
    Q();
  },
  beforePropertyName() {
    switch (v.type) {
      case "identifier":
      case "string":
        ru = v.value, x = "afterPropertyName";
        return;
      case "punctuator":
        G();
        return;
      case "eof":
        throw L();
    }
  },
  afterPropertyName() {
    if (v.type === "eof")
      throw L();
    x = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (v.type === "eof")
      throw L();
    Q();
  },
  beforeArrayValue() {
    if (v.type === "eof")
      throw L();
    if (v.type === "punctuator" && v.value === "]") {
      G();
      return;
    }
    Q();
  },
  afterPropertyValue() {
    if (v.type === "eof")
      throw L();
    switch (v.value) {
      case ",":
        x = "beforePropertyName";
        return;
      case "}":
        G();
    }
  },
  afterArrayValue() {
    if (v.type === "eof")
      throw L();
    switch (v.value) {
      case ",":
        x = "beforeArrayValue";
        return;
      case "]":
        G();
    }
  },
  end() {
  }
};
function Q() {
  let u;
  switch (v.type) {
    case "punctuator":
      switch (v.value) {
        case "{":
          u = {};
          break;
        case "[":
          u = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      u = v.value;
      break;
  }
  if (z === void 0)
    z = u;
  else {
    const e = P[P.length - 1];
    Array.isArray(e) ? e.push(u) : Object.defineProperty(e, ru, {
      value: u,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  }
  if (u !== null && typeof u == "object")
    P.push(u), Array.isArray(u) ? x = "beforeArrayValue" : x = "beforePropertyName";
  else {
    const e = P[P.length - 1];
    e == null ? x = "end" : Array.isArray(e) ? x = "afterArrayValue" : x = "afterPropertyValue";
  }
}
function G() {
  P.pop();
  const u = P[P.length - 1];
  u == null ? x = "end" : Array.isArray(u) ? x = "afterArrayValue" : x = "afterPropertyValue";
}
function g(u) {
  return q(u === void 0 ? `JSON5: invalid end of input at ${T}:${M}` : `JSON5: invalid character '${hu(u)}' at ${T}:${M}`);
}
function L() {
  return q(`JSON5: invalid end of input at ${T}:${M}`);
}
function Du() {
  return M -= 5, q(`JSON5: invalid identifier character at ${T}:${M}`);
}
function Hu(u) {
  console.warn(`JSON5: '${hu(u)}' in strings is not valid ECMAScript; consider escaping`);
}
function hu(u) {
  const e = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (e[u])
    return e[u];
  if (u < " ") {
    const t = u.charCodeAt(0).toString(16);
    return "\\x" + ("00" + t).substring(t.length);
  }
  return u;
}
function q(u) {
  const e = new SyntaxError(u);
  return e.lineNumber = T, e.columnNumber = M, e;
}
var Mu = function(e, t, r) {
  const n = [];
  let D = "", s, F, l = "", _;
  if (t != null && typeof t == "object" && !Array.isArray(t) && (r = t.space, _ = t.quote, t = t.replacer), typeof t == "function")
    F = t;
  else if (Array.isArray(t)) {
    s = [];
    for (const C of t) {
      let d;
      typeof C == "string" ? d = C : (typeof C == "number" || C instanceof String || C instanceof Number) && (d = String(C)), d !== void 0 && s.indexOf(d) < 0 && s.push(d);
    }
  }
  return r instanceof Number ? r = Number(r) : r instanceof String && (r = String(r)), typeof r == "number" ? r > 0 && (r = Math.min(10, Math.floor(r)), l = "          ".substr(0, r)) : typeof r == "string" && (l = r.substr(0, 10)), O("", { "": e });
  function O(C, d) {
    let c = d[C];
    switch (c != null && (typeof c.toJSON5 == "function" ? c = c.toJSON5(C) : typeof c.toJSON == "function" && (c = c.toJSON(C))), F && (c = F.call(d, C, c)), c instanceof Number ? c = Number(c) : c instanceof String ? c = String(c) : c instanceof Boolean && (c = c.valueOf()), c) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof c == "string")
      return m(c);
    if (typeof c == "number")
      return String(c);
    if (typeof c == "object")
      return Array.isArray(c) ? pu(c) : du(c);
  }
  function m(C) {
    const d = {
      "'": 0.1,
      '"': 0.2
    }, c = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let b = "";
    for (let p = 0; p < C.length; p++) {
      const w = C[p];
      switch (w) {
        case "'":
        case '"':
          d[w]++, b += w;
          continue;
        case "\0":
          if (B.isDigit(C[p + 1])) {
            b += "\\x00";
            continue;
          }
      }
      if (c[w]) {
        b += c[w];
        continue;
      }
      if (w < " ") {
        let $ = w.charCodeAt(0).toString(16);
        b += "\\x" + ("00" + $).substring($.length);
        continue;
      }
      b += w;
    }
    const y = _ || Object.keys(d).reduce((p, w) => d[p] < d[w] ? p : w);
    return b = b.replace(new RegExp(y, "g"), c[y]), y + b + y;
  }
  function du(C) {
    if (n.indexOf(C) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    n.push(C);
    let d = D;
    D = D + l;
    let c = s || Object.keys(C), b = [];
    for (const p of c) {
      const w = O(p, C);
      if (w !== void 0) {
        let $ = Bu(p) + ":";
        l !== "" && ($ += " "), $ += w, b.push($);
      }
    }
    let y;
    if (b.length === 0)
      y = "{}";
    else {
      let p;
      if (l === "")
        p = b.join(","), y = "{" + p + "}";
      else {
        let w = `,
` + D;
        p = b.join(w), y = `{
` + D + p + `,
` + d + "}";
      }
    }
    return n.pop(), D = d, y;
  }
  function Bu(C) {
    if (C.length === 0)
      return m(C);
    const d = String.fromCodePoint(C.codePointAt(0));
    if (!B.isIdStartChar(d))
      return m(C);
    for (let c = d.length; c < C.length; c++)
      if (!B.isIdContinueChar(String.fromCodePoint(C.codePointAt(c))))
        return m(C);
    return C;
  }
  function pu(C) {
    if (n.indexOf(C) >= 0)
      throw TypeError("Converting circular structure to JSON5");
    n.push(C);
    let d = D;
    D = D + l;
    let c = [];
    for (let y = 0; y < C.length; y++) {
      const p = O(String(y), C);
      c.push(p !== void 0 ? p : "null");
    }
    let b;
    if (c.length === 0)
      b = "[]";
    else if (l === "")
      b = "[" + c.join(",") + "]";
    else {
      let y = `,
` + D, p = c.join(y);
      b = `[
` + D + p + `,
` + d + "]";
    }
    return n.pop(), D = d, b;
  }
};
const Ou = {
  parse: wu,
  stringify: Mu
};
var au = Ou;
function J(u) {
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, J(u);
}
var Nu = /^\s+/, Xu = /\s+$/;
function i(u, e) {
  if (u = u || "", e = e || {}, u instanceof i)
    return u;
  if (!(this instanceof i))
    return new i(u, e);
  var t = Pu(u);
  this._originalInput = u, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = Math.round(100 * this._a) / 100, this._format = e.format || t.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = t.ok;
}
i.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var e = this.toRgb();
    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
  },
  getLuminance: function() {
    var e = this.toRgb(), t, r, n, D, s, F;
    return t = e.r / 255, r = e.g / 255, n = e.b / 255, t <= 0.03928 ? D = t / 12.92 : D = Math.pow((t + 0.055) / 1.055, 2.4), r <= 0.03928 ? s = r / 12.92 : s = Math.pow((r + 0.055) / 1.055, 2.4), n <= 0.03928 ? F = n / 12.92 : F = Math.pow((n + 0.055) / 1.055, 2.4), 0.2126 * D + 0.7152 * s + 0.0722 * F;
  },
  setAlpha: function(e) {
    return this._a = gu(e), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var e = su(this._r, this._g, this._b);
    return {
      h: e.h * 360,
      s: e.s,
      v: e.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var e = su(this._r, this._g, this._b), t = Math.round(e.h * 360), r = Math.round(e.s * 100), n = Math.round(e.v * 100);
    return this._a == 1 ? "hsv(" + t + ", " + r + "%, " + n + "%)" : "hsva(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var e = iu(this._r, this._g, this._b);
    return {
      h: e.h * 360,
      s: e.s,
      l: e.l,
      a: this._a
    };
  },
  toHslString: function() {
    var e = iu(this._r, this._g, this._b), t = Math.round(e.h * 360), r = Math.round(e.s * 100), n = Math.round(e.l * 100);
    return this._a == 1 ? "hsl(" + t + ", " + r + "%, " + n + "%)" : "hsla(" + t + ", " + r + "%, " + n + "%, " + this._roundA + ")";
  },
  toHex: function(e) {
    return ou(this._r, this._g, this._b, e);
  },
  toHexString: function(e) {
    return "#" + this.toHex(e);
  },
  toHex8: function(e) {
    return Lu(this._r, this._g, this._b, this._a, e);
  },
  toHex8String: function(e) {
    return "#" + this.toHex8(e);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(E(this._r, 255) * 100) + "%",
      g: Math.round(E(this._g, 255) * 100) + "%",
      b: Math.round(E(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(E(this._r, 255) * 100) + "%, " + Math.round(E(this._g, 255) * 100) + "%, " + Math.round(E(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(E(this._r, 255) * 100) + "%, " + Math.round(E(this._g, 255) * 100) + "%, " + Math.round(E(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : Qu[ou(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(e) {
    var t = "#" + cu(this._r, this._g, this._b, this._a), r = t, n = this._gradientType ? "GradientType = 1, " : "";
    if (e) {
      var D = i(e);
      r = "#" + cu(D._r, D._g, D._b, D._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + r + ")";
  },
  toString: function(e) {
    var t = !!e;
    e = e || this._format;
    var r = !1, n = this._a < 1 && this._a >= 0, D = !t && n && (e === "hex" || e === "hex6" || e === "hex3" || e === "hex4" || e === "hex8" || e === "name");
    return D ? e === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (r = this.toRgbString()), e === "prgb" && (r = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (r = this.toHexString()), e === "hex3" && (r = this.toHexString(!0)), e === "hex4" && (r = this.toHex8String(!0)), e === "hex8" && (r = this.toHex8String()), e === "name" && (r = this.toName()), e === "hsl" && (r = this.toHslString()), e === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  },
  clone: function() {
    return i(this.toString());
  },
  _applyModification: function(e, t) {
    var r = e.apply(null, [this].concat([].slice.call(t)));
    return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
  },
  lighten: function() {
    return this._applyModification(zu, arguments);
  },
  brighten: function() {
    return this._applyModification(Gu, arguments);
  },
  darken: function() {
    return this._applyModification(Wu, arguments);
  },
  desaturate: function() {
    return this._applyModification($u, arguments);
  },
  saturate: function() {
    return this._applyModification(ju, arguments);
  },
  greyscale: function() {
    return this._applyModification(Vu, arguments);
  },
  spin: function() {
    return this._applyModification(qu, arguments);
  },
  _applyCombination: function(e, t) {
    return e.apply(null, [this].concat([].slice.call(t)));
  },
  analogous: function() {
    return this._applyCombination(Zu, arguments);
  },
  complement: function() {
    return this._applyCombination(Ju, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(Ku, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(Uu, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(fu, [3]);
  },
  tetrad: function() {
    return this._applyCombination(fu, [4]);
  }
};
i.fromRatio = function(u, e) {
  if (J(u) == "object") {
    var t = {};
    for (var r in u)
      u.hasOwnProperty(r) && (r === "a" ? t[r] = u[r] : t[r] = V(u[r]));
    u = t;
  }
  return i(u, e);
};
function Pu(u) {
  var e = {
    r: 0,
    g: 0,
    b: 0
  }, t = 1, r = null, n = null, D = null, s = !1, F = !1;
  return typeof u == "string" && (u = te(u)), J(u) == "object" && (N(u.r) && N(u.g) && N(u.b) ? (e = Iu(u.r, u.g, u.b), s = !0, F = String(u.r).substr(-1) === "%" ? "prgb" : "rgb") : N(u.h) && N(u.s) && N(u.v) ? (r = V(u.s), n = V(u.v), e = Ru(u.h, r, n), s = !0, F = "hsv") : N(u.h) && N(u.s) && N(u.l) && (r = V(u.s), D = V(u.l), e = Tu(u.h, r, D), s = !0, F = "hsl"), u.hasOwnProperty("a") && (t = u.a)), t = gu(t), {
    ok: s,
    format: u.format || F,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: t
  };
}
function Iu(u, e, t) {
  return {
    r: E(u, 255) * 255,
    g: E(e, 255) * 255,
    b: E(t, 255) * 255
  };
}
function iu(u, e, t) {
  u = E(u, 255), e = E(e, 255), t = E(t, 255);
  var r = Math.max(u, e, t), n = Math.min(u, e, t), D, s, F = (r + n) / 2;
  if (r == n)
    D = s = 0;
  else {
    var l = r - n;
    switch (s = F > 0.5 ? l / (2 - r - n) : l / (r + n), r) {
      case u:
        D = (e - t) / l + (e < t ? 6 : 0);
        break;
      case e:
        D = (t - u) / l + 2;
        break;
      case t:
        D = (u - e) / l + 4;
        break;
    }
    D /= 6;
  }
  return {
    h: D,
    s,
    l: F
  };
}
function Tu(u, e, t) {
  var r, n, D;
  u = E(u, 360), e = E(e, 100), t = E(t, 100);
  function s(_, O, m) {
    return m < 0 && (m += 1), m > 1 && (m -= 1), m < 1 / 6 ? _ + (O - _) * 6 * m : m < 1 / 2 ? O : m < 2 / 3 ? _ + (O - _) * (2 / 3 - m) * 6 : _;
  }
  if (e === 0)
    r = n = D = t;
  else {
    var F = t < 0.5 ? t * (1 + e) : t + e - t * e, l = 2 * t - F;
    r = s(l, F, u + 1 / 3), n = s(l, F, u), D = s(l, F, u - 1 / 3);
  }
  return {
    r: r * 255,
    g: n * 255,
    b: D * 255
  };
}
function su(u, e, t) {
  u = E(u, 255), e = E(e, 255), t = E(t, 255);
  var r = Math.max(u, e, t), n = Math.min(u, e, t), D, s, F = r, l = r - n;
  if (s = r === 0 ? 0 : l / r, r == n)
    D = 0;
  else {
    switch (r) {
      case u:
        D = (e - t) / l + (e < t ? 6 : 0);
        break;
      case e:
        D = (t - u) / l + 2;
        break;
      case t:
        D = (u - e) / l + 4;
        break;
    }
    D /= 6;
  }
  return {
    h: D,
    s,
    v: F
  };
}
function Ru(u, e, t) {
  u = E(u, 360) * 6, e = E(e, 100), t = E(t, 100);
  var r = Math.floor(u), n = u - r, D = t * (1 - e), s = t * (1 - n * e), F = t * (1 - (1 - n) * e), l = r % 6, _ = [t, s, D, D, F, t][l], O = [F, t, t, s, D, D][l], m = [D, D, F, t, t, s][l];
  return {
    r: _ * 255,
    g: O * 255,
    b: m * 255
  };
}
function ou(u, e, t, r) {
  var n = [H(Math.round(u).toString(16)), H(Math.round(e).toString(16)), H(Math.round(t).toString(16))];
  return r && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("");
}
function Lu(u, e, t, r, n) {
  var D = [H(Math.round(u).toString(16)), H(Math.round(e).toString(16)), H(Math.round(t).toString(16)), H(Eu(r))];
  return n && D[0].charAt(0) == D[0].charAt(1) && D[1].charAt(0) == D[1].charAt(1) && D[2].charAt(0) == D[2].charAt(1) && D[3].charAt(0) == D[3].charAt(1) ? D[0].charAt(0) + D[1].charAt(0) + D[2].charAt(0) + D[3].charAt(0) : D.join("");
}
function cu(u, e, t, r) {
  var n = [H(Eu(r)), H(Math.round(u).toString(16)), H(Math.round(e).toString(16)), H(Math.round(t).toString(16))];
  return n.join("");
}
i.equals = function(u, e) {
  return !u || !e ? !1 : i(u).toRgbString() == i(e).toRgbString();
};
i.random = function() {
  return i.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function $u(u, e) {
  e = e === 0 ? 0 : e || 10;
  var t = i(u).toHsl();
  return t.s -= e / 100, t.s = U(t.s), i(t);
}
function ju(u, e) {
  e = e === 0 ? 0 : e || 10;
  var t = i(u).toHsl();
  return t.s += e / 100, t.s = U(t.s), i(t);
}
function Vu(u) {
  return i(u).desaturate(100);
}
function zu(u, e) {
  e = e === 0 ? 0 : e || 10;
  var t = i(u).toHsl();
  return t.l += e / 100, t.l = U(t.l), i(t);
}
function Gu(u, e) {
  e = e === 0 ? 0 : e || 10;
  var t = i(u).toRgb();
  return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(e / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(e / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(e / 100)))), i(t);
}
function Wu(u, e) {
  e = e === 0 ? 0 : e || 10;
  var t = i(u).toHsl();
  return t.l -= e / 100, t.l = U(t.l), i(t);
}
function qu(u, e) {
  var t = i(u).toHsl(), r = (t.h + e) % 360;
  return t.h = r < 0 ? 360 + r : r, i(t);
}
function Ju(u) {
  var e = i(u).toHsl();
  return e.h = (e.h + 180) % 360, i(e);
}
function fu(u, e) {
  if (isNaN(e) || e <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var t = i(u).toHsl(), r = [i(u)], n = 360 / e, D = 1; D < e; D++)
    r.push(i({
      h: (t.h + D * n) % 360,
      s: t.s,
      l: t.l
    }));
  return r;
}
function Uu(u) {
  var e = i(u).toHsl(), t = e.h;
  return [i(u), i({
    h: (t + 72) % 360,
    s: e.s,
    l: e.l
  }), i({
    h: (t + 216) % 360,
    s: e.s,
    l: e.l
  })];
}
function Zu(u, e, t) {
  e = e || 6, t = t || 30;
  var r = i(u).toHsl(), n = 360 / t, D = [i(u)];
  for (r.h = (r.h - (n * e >> 1) + 720) % 360; --e; )
    r.h = (r.h + n) % 360, D.push(i(r));
  return D;
}
function Ku(u, e) {
  e = e || 6;
  for (var t = i(u).toHsv(), r = t.h, n = t.s, D = t.v, s = [], F = 1 / e; e--; )
    s.push(i({
      h: r,
      s: n,
      v: D
    })), D = (D + F) % 1;
  return s;
}
i.mix = function(u, e, t) {
  t = t === 0 ? 0 : t || 50;
  var r = i(u).toRgb(), n = i(e).toRgb(), D = t / 100, s = {
    r: (n.r - r.r) * D + r.r,
    g: (n.g - r.g) * D + r.g,
    b: (n.b - r.b) * D + r.b,
    a: (n.a - r.a) * D + r.a
  };
  return i(s);
};
i.readability = function(u, e) {
  var t = i(u), r = i(e);
  return (Math.max(t.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(t.getLuminance(), r.getLuminance()) + 0.05);
};
i.isReadable = function(u, e, t) {
  var r = i.readability(u, e), n, D;
  switch (D = !1, n = re(t), n.level + n.size) {
    case "AAsmall":
    case "AAAlarge":
      D = r >= 4.5;
      break;
    case "AAlarge":
      D = r >= 3;
      break;
    case "AAAsmall":
      D = r >= 7;
      break;
  }
  return D;
};
i.mostReadable = function(u, e, t) {
  var r = null, n = 0, D, s, F, l;
  t = t || {}, s = t.includeFallbackColors, F = t.level, l = t.size;
  for (var _ = 0; _ < e.length; _++)
    D = i.readability(u, e[_]), D > n && (n = D, r = i(e[_]));
  return i.isReadable(u, r, {
    level: F,
    size: l
  }) || !s ? r : (t.includeFallbackColors = !1, i.mostReadable(u, ["#fff", "#000"], t));
};
var tu = i.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, Qu = i.hexNames = Yu(tu);
function Yu(u) {
  var e = {};
  for (var t in u)
    u.hasOwnProperty(t) && (e[u[t]] = t);
  return e;
}
function gu(u) {
  return u = parseFloat(u), (isNaN(u) || u < 0 || u > 1) && (u = 1), u;
}
function E(u, e) {
  ue(u) && (u = "100%");
  var t = ee(u);
  return u = Math.min(e, Math.max(0, parseFloat(u))), t && (u = parseInt(u * e, 10) / 100), Math.abs(u - e) < 1e-6 ? 1 : u % e / parseFloat(e);
}
function U(u) {
  return Math.min(1, Math.max(0, u));
}
function S(u) {
  return parseInt(u, 16);
}
function ue(u) {
  return typeof u == "string" && u.indexOf(".") != -1 && parseFloat(u) === 1;
}
function ee(u) {
  return typeof u == "string" && u.indexOf("%") != -1;
}
function H(u) {
  return u.length == 1 ? "0" + u : "" + u;
}
function V(u) {
  return u <= 1 && (u = u * 100 + "%"), u;
}
function Eu(u) {
  return Math.round(parseFloat(u) * 255).toString(16);
}
function Fu(u) {
  return S(u) / 255;
}
var k = function() {
  var u = "[-\\+]?\\d+%?", e = "[-\\+]?\\d*\\.\\d+%?", t = "(?:" + e + ")|(?:" + u + ")", r = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?", n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(t),
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + n),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + n),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + n),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function N(u) {
  return !!k.CSS_UNIT.exec(u);
}
function te(u) {
  u = u.replace(Nu, "").replace(Xu, "").toLowerCase();
  var e = !1;
  if (tu[u])
    u = tu[u], e = !0;
  else if (u == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var t;
  return (t = k.rgb.exec(u)) ? {
    r: t[1],
    g: t[2],
    b: t[3]
  } : (t = k.rgba.exec(u)) ? {
    r: t[1],
    g: t[2],
    b: t[3],
    a: t[4]
  } : (t = k.hsl.exec(u)) ? {
    h: t[1],
    s: t[2],
    l: t[3]
  } : (t = k.hsla.exec(u)) ? {
    h: t[1],
    s: t[2],
    l: t[3],
    a: t[4]
  } : (t = k.hsv.exec(u)) ? {
    h: t[1],
    s: t[2],
    v: t[3]
  } : (t = k.hsva.exec(u)) ? {
    h: t[1],
    s: t[2],
    v: t[3],
    a: t[4]
  } : (t = k.hex8.exec(u)) ? {
    r: S(t[1]),
    g: S(t[2]),
    b: S(t[3]),
    a: Fu(t[4]),
    format: e ? "name" : "hex8"
  } : (t = k.hex6.exec(u)) ? {
    r: S(t[1]),
    g: S(t[2]),
    b: S(t[3]),
    format: e ? "name" : "hex"
  } : (t = k.hex4.exec(u)) ? {
    r: S(t[1] + "" + t[1]),
    g: S(t[2] + "" + t[2]),
    b: S(t[3] + "" + t[3]),
    a: Fu(t[4] + "" + t[4]),
    format: e ? "name" : "hex8"
  } : (t = k.hex3.exec(u)) ? {
    r: S(t[1] + "" + t[1]),
    g: S(t[2] + "" + t[2]),
    b: S(t[3] + "" + t[3]),
    format: e ? "name" : "hex"
  } : !1;
}
function re(u) {
  var e, t;
  return u = u || {
    level: "AA",
    size: "small"
  }, e = (u.level || "AA").toUpperCase(), t = (u.size || "small").toLowerCase(), e !== "AA" && e !== "AAA" && (e = "AA"), t !== "small" && t !== "large" && (t = "small"), {
    level: e,
    size: t
  };
}
function nu(u) {
  function e(r) {
    var n;
    if (r[0] === "@")
      return e(u.props[r.substr(1)]);
    if (r[0] === "$")
      return e(u.props[r]);
    if (r[0] === ":") {
      const D = r.split("<"), s = (n = D.shift()) == null ? void 0 : n.substring(1), F = parseFloat(D.shift() ?? ""), l = e(D.join("<"));
      switch (s) {
        case "darken":
          return l.darken(F);
        case "lighten":
          return l.lighten(F);
        case "alpha":
          return l.setAlpha(F);
        case "hue":
          return l.spin(F);
        case "saturate":
          return l.saturate(F);
      }
    }
    return i(r);
  }
  const t = {};
  for (const [r, n] of Object.entries(u.props))
    r.startsWith("$") || r !== "panelBorder" && (t[r] = n.startsWith('"') ? n.replace(/^"\s*/, "") : ae(e(n)));
  return t;
}
function ae(u) {
  return u.toRgbString();
}
const ne = au.parse(
  `// ダークテーマのベーステーマ
  // このテーマが直接使われることは無い
  {
    id: 'dark',
  
    name: 'Dark',
    author: 'syuilo',
    desc: 'Default dark theme',
    kind: 'dark',
  
    props: {
      accent: '#86b300',
      accentDarken: ':darken<10<@accent',
      accentLighten: ':lighten<10<@accent',
      accentedBg: ':alpha<0.15<@accent',
      focus: ':alpha<0.3<@accent',
      bg: '#000',
      acrylicBg: ':alpha<0.5<@bg',
      fg: '#dadada',
      fgTransparentWeak: ':alpha<0.75<@fg',
      fgTransparent: ':alpha<0.5<@fg',
      fgHighlighted: ':lighten<3<@fg',
      fgOnAccent: '#fff',
      divider: 'rgba(255, 255, 255, 0.1)',
      indicator: '@accent',
      panel: ':lighten<3<@bg',
      panelHighlight: ':lighten<3<@panel',
      panelHeaderBg: ':lighten<3<@panel',
      panelHeaderFg: '@fg',
      panelHeaderDivider: 'rgba(0, 0, 0, 0)',
      panelBorder: '" solid 1px var(--divider)',
      acrylicPanel: ':alpha<0.5<@panel',
      windowHeader: ':alpha<0.85<@panel',
      popup: ':lighten<3<@panel',
      shadow: 'rgba(0, 0, 0, 0.3)',
      header: ':alpha<0.7<@panel',
      navBg: '@panel',
      navFg: '@fg',
      navHoverFg: ':lighten<17<@fg',
      navActive: '@accent',
      navIndicator: '@indicator',
      link: '#44a4c1',
      hashtag: '#ff9156',
      mention: '@accent',
      mentionMe: '@mention',
      renote: '#229e82',
      modalBg: 'rgba(0, 0, 0, 0.5)',
      scrollbarHandle: 'rgba(255, 255, 255, 0.2)',
      scrollbarHandleHover: 'rgba(255, 255, 255, 0.4)',
      dateLabelFg: '@fg',
      infoBg: '#253142',
      infoFg: '#fff',
      infoWarnBg: '#42321c',
      infoWarnFg: '#ffbd3e',
      switchBg: 'rgba(255, 255, 255, 0.15)',
      cwBg: '#687390',
      cwFg: '#393f4f',
      cwHoverBg: '#707b97',
      buttonBg: 'rgba(255, 255, 255, 0.05)',
      buttonHoverBg: 'rgba(255, 255, 255, 0.1)',
      buttonGradateA: '@accent',
      buttonGradateB: ':hue<20<@accent',
      switchOffBg: 'rgba(255, 255, 255, 0.1)',
      switchOffFg: ':alpha<0.8<@fg',
      switchOnBg: '@accentedBg',
      switchOnFg: '@accent',
      inputBorder: 'rgba(255, 255, 255, 0.1)',
      inputBorderHover: 'rgba(255, 255, 255, 0.2)',
      listItemHoverBg: 'rgba(255, 255, 255, 0.03)',
      driveFolderBg: ':alpha<0.3<@accent',
      wallpaperOverlay: 'rgba(0, 0, 0, 0.5)',
      badge: '#31b1ce',
      messageBg: '@bg',
      success: '#86b300',
      error: '#ec4137',
      warn: '#ecb637',
      codeString: '#ffb675',
      codeNumber: '#cfff9e',
      codeBoolean: '#c59eff',
      deckDivider: '#000',
      htmlThemeColor: '@bg',
      X2: ':darken<2<@panel',
      X3: 'rgba(255, 255, 255, 0.05)',
      X4: 'rgba(255, 255, 255, 0.1)',
      X5: 'rgba(255, 255, 255, 0.05)',
      X6: 'rgba(255, 255, 255, 0.15)',
      X7: 'rgba(255, 255, 255, 0.05)',
      X8: ':lighten<5<@accent',
      X9: ':darken<5<@accent',
      X10: ':alpha<0.4<@accent',
      X11: 'rgba(0, 0, 0, 0.3)',
      X12: 'rgba(255, 255, 255, 0.1)',
      X13: 'rgba(255, 255, 255, 0.15)',
      X14: ':alpha<0.5<@navBg',
      X15: ':alpha<0<@panel',
      X16: ':alpha<0.7<@panel',
      X17: ':alpha<0.8<@bg',
    },
  }
  `
), De = nu(ne), ie = au.parse(
  `// ライトテーマのベーステーマ
  // このテーマが直接使われることは無い
  {
    id: 'light',
  
    name: 'Light',
    author: 'syuilo',
    desc: 'Default light theme',
    kind: 'light',
  
    props: {
      accent: '#86b300',
      accentDarken: ':darken<10<@accent',
      accentLighten: ':lighten<10<@accent',
      accentedBg: ':alpha<0.15<@accent',
      focus: ':alpha<0.3<@accent',
      bg: '#fff',
      acrylicBg: ':alpha<0.5<@bg',
      fg: '#5f5f5f',
      fgTransparentWeak: ':alpha<0.75<@fg',
      fgTransparent: ':alpha<0.5<@fg',
      fgHighlighted: ':darken<3<@fg',
      fgOnAccent: '#fff',
      divider: 'rgba(0, 0, 0, 0.1)',
      indicator: '@accent',
      panel: ':lighten<3<@bg',
      panelHighlight: ':darken<3<@panel',
      panelHeaderBg: ':lighten<3<@panel',
      panelHeaderFg: '@fg',
      panelHeaderDivider: 'rgba(0, 0, 0, 0)',
      panelBorder: '" solid 1px var(--divider)',
      acrylicPanel: ':alpha<0.5<@panel',
      windowHeader: ':alpha<0.85<@panel',
      popup: ':lighten<3<@panel',
      shadow: 'rgba(0, 0, 0, 0.1)',
      header: ':alpha<0.7<@panel',
      navBg: '@panel',
      navFg: '@fg',
      navHoverFg: ':darken<17<@fg',
      navActive: '@accent',
      navIndicator: '@indicator',
      link: '#44a4c1',
      hashtag: '#ff9156',
      mention: '@accent',
      mentionMe: '@mention',
      renote: '#229e82',
      modalBg: 'rgba(0, 0, 0, 0.3)',
      scrollbarHandle: 'rgba(0, 0, 0, 0.2)',
      scrollbarHandleHover: 'rgba(0, 0, 0, 0.4)',
      dateLabelFg: '@fg',
      infoBg: '#e5f5ff',
      infoFg: '#72818a',
      infoWarnBg: '#fff0db',
      infoWarnFg: '#8f6e31',
      switchBg: 'rgba(0, 0, 0, 0.15)',
      cwBg: '#b1b9c1',
      cwFg: '#fff',
      cwHoverBg: '#bbc4ce',
      buttonBg: 'rgba(0, 0, 0, 0.05)',
      buttonHoverBg: 'rgba(0, 0, 0, 0.1)',
      buttonGradateA: '@accent',
      buttonGradateB: ':hue<20<@accent',
      switchOffBg: 'rgba(0, 0, 0, 0.1)',
      switchOffFg: '@panel',
      switchOnBg: '@accent',
      switchOnFg: '@fgOnAccent',
      inputBorder: 'rgba(0, 0, 0, 0.1)',
      inputBorderHover: 'rgba(0, 0, 0, 0.2)',
      listItemHoverBg: 'rgba(0, 0, 0, 0.03)',
      driveFolderBg: ':alpha<0.3<@accent',
      wallpaperOverlay: 'rgba(255, 255, 255, 0.5)',
      badge: '#31b1ce',
      messageBg: '@bg',
      success: '#86b300',
      error: '#ec4137',
      warn: '#ecb637',
      codeString: '#b98710',
      codeNumber: '#0fbbbb',
      codeBoolean: '#62b70c',
      deckDivider: ':darken<3<@bg',
      htmlThemeColor: '@bg',
      X2: ':darken<2<@panel',
      X3: 'rgba(0, 0, 0, 0.05)',
      X4: 'rgba(0, 0, 0, 0.1)',
      X5: 'rgba(0, 0, 0, 0.05)',
      X6: 'rgba(0, 0, 0, 0.25)',
      X7: 'rgba(0, 0, 0, 0.05)',
      X8: ':lighten<5<@accent',
      X9: ':darken<5<@accent',
      X10: ':alpha<0.4<@accent',
      X11: 'rgba(0, 0, 0, 0.1)',
      X12: 'rgba(0, 0, 0, 0.1)',
      X13: 'rgba(0, 0, 0, 0.15)',
      X14: ':alpha<0.5<@navBg',
      X15: ':alpha<0<@panel',
      X16: ':alpha<0.7<@panel',
      X17: ':alpha<0.8<@bg',
    },
  }
  `
), se = nu(ie);
function oe(u) {
  if (!document)
    throw new Error("document is not defined");
  u.base;
  const e = { ...u };
  if (e.base) {
    const r = [se, De].find(
      (n) => n.id === e.base
    );
    r && (e.props = Object.assign({}, r.props, e.props));
  }
  const t = nu(e);
  for (const [r, n] of Object.entries(t))
    document.documentElement.style.setProperty(`--${r}`, n.toString());
}
function ce(u) {
  if (!document.documentElement)
    throw new Error("This should be called in browser environment");
  const e = au.parse(u);
  oe(e);
}
const Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ce
}, Symbol.toStringTag, { value: "Module" })), fe = () => {
}, Ae = bu(fe, {
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        accentDarken: "var(--accentDarken)",
        accentLighten: "var(--accentLighten)",
        accentedBg: "var(--accentedBg)",
        focus: "var(--focus)",
        bg: "var(--bg)",
        acrylicBg: "var(--acrylicBg)",
        fg: "var(--fg)",
        fgTransparentWeak: "var(--fgTransparentWeak)",
        fgTransparent: "var(--fgTransparent)",
        fgHighlighted: "var(--fgHighlighted)",
        fgOnAccent: "var(--fgOnAccent)",
        divider: "var(--divider)",
        indicator: "var(--indicator)",
        panel: "var(--panel)",
        panelHighlight: "var(--panelHighlight)",
        panelHeaderBg: "var(--panelHeaderBg)",
        panelHeaderFg: "var(--panelHeaderFg)",
        panelHeaderDivider: "var(--panelHeaderDivider)",
        acrylicPanel: "var(--acrylicPanel)",
        windowHeader: "var(--windowHeader)",
        popup: "var(--popup)",
        shadow: "var(--shadow)",
        header: "var(--header)",
        navBg: "var(--navBg)",
        navFg: "var(--navFg)",
        navHoverFg: "var(--navHoverFg)",
        navActive: "var(--navActive)",
        navIndicator: "var(--navIndicator)",
        link: "var(--link)",
        hashtag: "var(--hashtag)",
        mention: "var(--mention)",
        mentionMe: "var(--mentionMe)",
        renote: "var(--renote)",
        modalBg: "var(--modalBg)",
        scrollbarHandle: "var(--scrollbarHandle)",
        scrollbarHandleHover: "var(--scrollbarHandleHover)",
        dateLabelFg: "var(--dateLabelFg)",
        infoBg: "var(--infoBg)",
        infoFg: "var(--infoFg)",
        infoWarnBg: "var(--infoWarnBg)",
        infoWarnFg: "var(--infoWarnFg)",
        switchBg: "var(--switchBg)",
        cwBg: "var(--cwBg)",
        cwFg: "var(--cwFg)",
        cwHoverBg: "var(--cwHoverBg)",
        buttonBg: "var(--buttonBg)",
        buttonHoverBg: "var(--buttonHoverBg)",
        buttonGradateA: "var(--buttonGradateA)",
        buttonGradateB: "var(--buttonGradateB)",
        switchOffBg: "var(--switchOffBg)",
        switchOffFg: "var(--switchOffFg)",
        switchOnBg: "var(--switchOnBg)",
        switchOnFg: "var(--switchOnFg)",
        inputBorder: "var(--inputBorder)",
        inputBorderHover: "var(--inputBorderHover)",
        listItemHoverBg: "var(--listItemHoverBg)",
        driveFolderBg: "var(--driveFolderBg)",
        wallpaperOverlay: "var(--wallpaperOverlay)",
        badge: "var(--badge)",
        messageBg: "var(--messageBg)",
        success: "var(--success)",
        error: "var(--error)",
        warn: "var(--warn)",
        codeString: "var(--codeString)",
        codeNumber: "var(--codeNumber)",
        codeBoolean: "var(--codeBoolean)",
        deckDivider: "var(--deckDivider)",
        htmlThemeColor: "var(--htmlThemeColor)",
        X2: "var(--X2)",
        X3: "var(--X3)",
        X4: "var(--X4)",
        X5: "var(--X5)",
        X6: "var(--X6)",
        X7: "var(--X7)",
        X8: "var(--X8)",
        X9: "var(--X9)",
        X10: "var(--X10)",
        X11: "var(--X11)",
        X12: "var(--X12)",
        X13: "var(--X13)",
        X14: "var(--X14)",
        X15: "var(--X15)",
        X16: "var(--X16)",
        X17: "var(--X17)"
      }
    }
  }
});
export {
  Ae as default,
  Fe as parseAndApplyTheme
};
