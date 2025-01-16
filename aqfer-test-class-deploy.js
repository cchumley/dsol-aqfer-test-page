<script title="pxsnpt">
    var lijitData = {
        cdmn: 'pxdrop.lijit.com',
        lm: 'e',
        tt: 'tcs.dhj'
    };

    (function(a) {
        a.cls = 'test';
        a.aqet = 'pv';
        a.pubid = 'test-page';
    })(lijitData);

    function _pxTagInject(p, d, w, l) {
        var o, k = [],
            t = p.tt.slice(-1),
            x = {
                cdmn: 1,
                lm: 1,
                tt: 1
            },
            y = {
                cid: 1,
                cls: 1,
                dmn: 1,
                pubid: 1,
                evid: 1,
                aq_m: 1
            };
        try {
            p.dmn = (p.dmn || (w.top[l] === w[l] ? '' + w[l] : d.referrer).split('/')[2] || '').split(':')[0];
        } catch (err) {
            console.error("Domain calculation failed:", err);
            p.dmn = 'unknown';
        }

        for (o in p) {
            if (y[o] || ((t != 'j' || p.aq_m) && !x[o])) {
                k.push(o + "=" + encodeURIComponent(p[o]));
            }
        }
        var s = d.createElement(t == 'f' ? 'img' : 'script');
        s.id = s.title = 'pxscrpt';
        s.async = true;
        s.defer = true;
        s.src = '//' + p.cdmn + '/1/' + p.lm + '/' + p.tt + '?' + k.join("&");
        d.body.appendChild(s);
    }

    _pxTagInject(lijitData, document, window, 'location');
</script>
