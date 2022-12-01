import test from "node:test";

test("should parse the html results into a specific object", () => {});

const testHtmlStringWithMakkaraQuery = `<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title>Just a moment...</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="robots" content="noindex,nofollow">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link href="/cdn-cgi/styles/challenges.css" rel="stylesheet">
    </head>
    <body class="no-js">
        <div class="main-wrapper" role="main">
            <div class="main-content">
                <h1 class="zone-name-title h1">
                <img class="heading-favicon" src="/favicon.ico"
                onerror="this.onerror=null;this.parentNode.removeChild(this)">
                www.k-ruoka.fi
                </h1>
                <h2 class="h2" id="challenge-running">
                Checking if the site connection is secure
                </h2>
                <noscript>
                <div id="challenge-error-title">
                    <div class="h2">
                        <span class="icon-wrapper">
                            <div class="heading-icon warning-icon"></div>
                        </span>
                        <span id="challenge-error-text">
                            Enable JavaScript and cookies to continue
                        </span>
                    </div>
                </div>
                </noscript>
                <div id="trk_jschal_js" style="display:none;background-image:url('/cdn-cgi/images/trace/managed/nojs/transparent.gif?ray=77224446c989fe38')"></div>
                <div id="challenge-body-text" class="core-msg spacer">
                    www.k-ruoka.fi needs to review the security of your connection before proceeding.
                </div>
                <form id="challenge-form" action="/haku?q=makkara&amp;__cf_chl_f_tk=sjHRJqBBtfhlvDPakYGE8UNiYY7K81pI5rfTC1VOp3M-1669797505-0-gaNycGzNB1E" method="POST" enctype="application/x-www-form-urlencoded">
                    <input type="hidden" name="md" value="YUfZTdg65wL1En7Cr4f7ibmjeuxAmx2Ead4F5Y5uhZE-1669797505-0-AbgxoCwQrUz4TIl_jbUhlWsUhuTpueGpfTNFuXdeDXqTVPuPFz4qP52jYRcIz25gJg9Us4eICRLsu85fjL_a-xGkfn3o8dbiSPxEnL7hD8rWO7SqdWXY9kTh-70kjUYqmVy44B0dTm1f53RAMOUyLdEJfqLSXKMrY7fWBWv5hIb3gSy5GocUAnDiJo7rWkBS07ro03o5YLhw83avnyk2DgFCwKisG3mQfEg47J5ZZukQOUSXQ4LqCcF4hVGE0sEteMG4jjOhWEQLcXrU7gBE8Dnt8OygwVJVzAcdaheuIk1EN0dxXFVFwK0J26JfDS31jRTodlXFFWPNOjv3ncMs1JvekloBd8RA0j0RiWmkhpctVdm_p2nkhOVR-4uOj0dGHgWao7mNikPVNGJ8KMmhSYEB2EaBclriWRWqIG3sl657jbNX7NTliz8sk3i0fSgeQB6FNLji4OqZNH36zweEXcikNMOU0AoAqYmxP6Tw6Ftwvx-ZiaqyLggwMrkyU-mEuHP3kUn7PPmS0dr8Lrw7fSQ4KR8LZtN8x-88V-aphUxFM0SN83s3Jg_XHFdqfu348leoWheVuvpL0ysYsONGusf4ooUmMWmWvT1W172zjr82OfMC7YN5zvwdazslh2JvZ5qn3KuzUlDP-G1PUgmHuO-TYayBBaLGFrBa5GP90jbY">
                    <input type="hidden" name="r" value="9benchhMxvTy7LvXNSL7VDVV3dlhwn_eIO5MuZqT3aE-1669797505-0-AUllaJOyVfAAlQlmq7B9GeIRisgrUl8KTDXQrQFzQ6mlpZPmBVutLNpU3LvxUozlgwrGadzXu70x4O8p8bnAsAYj7sePUzlzSfCs40qz5dLPZoVLpuSXtfr1xJiPHO6D1kn+SwIy19/FUkWGr6cfqjRnrPBfGCZ7WaILFqB1KpHjIosoDRmtJPEHHqVVcqEBzzmuYhoYWiAXc1TXa201e3dHsEDqt/M+UHjYXO2SuDUgBz4quw+8GcJU+RSnfPBxVi8+GDUf10I46N8tvvsr3pT117toFgr+MgI8v1YQxDdC1H/l/3AyKkEhdb8LST/1Yl6iJyJzG/bkma9qPnymtMmRZrYy2VLQLiZH1vVi9w4ofXh63acTf5AHjNxwEG3qVGGMNngUd9evuw9yFKFWJMFVSN88uk2LCST8hQX3bBKcYIIHdeSMqO3v7WzRTqsYjD3UYUSTIi+kE9nUuBjeMnxVdGFsMK1PtTV00rLefX3dNtoJ6yBjyF/xlJHS54Wt+1ZpdaPrc87twr5qGkmMPSqG6CLc0/D68xlP7TK3RUgnufVB/S8zfj9D07jMQWx4f6Opb8FOCxDjfAD7pOVaneUOvH7V9D9JzxzVj6Sp9tlJ+2wbXCl+pB0Aceorsr0dLVkU+/sJHc4A65ezauqOmVdp6YUk6caBaBJJ8AuXT2JvfNj7zcl2DIOnZwUAKlexFMtfquCs71SYyAW+wNPiTv0ZmHWeuRgyQUcKgF325qdQNvufdT24CHXGcgxzpc5eNhg6SpQ7rVpARJ7XjhUSAiPgWb+PpJlpFcDCqKNpFbDTgBM5kplWvFLSadPky9E4I+ldI6dm1UOwiGQHqt5ow+M7YB9oeLW8oG/FnpRJ2qycRS5434MeOt4Qk3IJZr1qg1S0q7Vbpjp/r72yo3Q7SUlTC3VybmFx714qvSXN6201mTwm5w2xfRRXY0XzzCXuj1r5L4m2TSKbxMZt5JTqRo57rqM39SZ3P1LCRNq4cGL0ejQCxcA3FqXMcPnYtaGr8TMZNVKU6j3j9A9Tn6zkk9IKLFWOt4UQbivdQ/Ge1E9zVWSlT0aVUdtOv2VjEEyBVJcFlhGvSn/ae18I9c8fnaZbeIz8Bl//f26k4HVs5/R0YuZ2Iw1GFi7YTrnjUinpPv2wv0IQP7i0Q0O0hJWsry3RoFf935yTacOnHU3WIVf1J7fWfk0akveM0LvNilRl/7nYNuDvC9FIEEkZeeHcFXLZ1Eup+wj3XZGaagaJaJScNoQJTgSpSLYSOlYeJ4oT9IaAKL3K7fZZ4sSODuXxUhXi0we4sKA/oYcWRa/ZiaWDszf8uvyB2sKJ3icMcvuZD5FHy1QYlP17Vm2NEOaS7cebLNqBdZdua8Qzub4Ip7ZStuKsT0x0e2wrj16FU1Pm0eB8M+lZY5jFSDQ9MtBxk8Df+6hZ9khVaSgzhSnapRfKyMHVWbrMYF/HAilnmIMECRw58QuXLW/nS7S1QPeV/g3+VIKwOlXl90RlOxt6msP5PDMvrRS4OGoqTLXmbs4cJal3alExsbDxmy0QyTV9njWl+y9coax/0RPFo0VR31mRFSpfGAyeTvFf4HMj4lh+OI76nFdLjFh8AVUyzCDFEestdY/Etqwt7IdI4g5+OkveeeiTq2p0xSD/nY4qGyVuodeL6LLljoAgy3aK9FW0DgN4V6e5sjSJ4go2wbRj5BOyHfFoxuIqiubE16IavXQppJIHg+4xMJhSCvNpigJY/9hJWE/3Woc106upReCSswdoE1V2rglXL9BE+1GvwNUu1Ix57WLJYNeRvn0H4iXgSC4=">
                </form>
            </div>
        </div>
        <script>
        (function(){
        window._cf_chl_opt={
        cvId: '2',
        cType: 'managed',
        cNounce: '24570',
        cRay: '77224446c989fe38',
        cHash: '8847d3f92029797',
        cUPMDTk: "\/haku?q=makkara&__cf_chl_tk=sjHRJqBBtfhlvDPakYGE8UNiYY7K81pI5rfTC1VOp3M-1669797505-0-gaNycGzNB1E",
        cFPWv: 'b',
        cTTimeMs: '1000',
        cTplV: 4,
        cTplB: 'cf',
        cRq: {
        ru: 'aHR0cHM6Ly93d3cuay1ydW9rYS5maS9oYWt1P3E9bWFra2FyYQ==',
        ra: 'bm9kZS1mZXRjaC8xLjAgKCtodHRwczovL2dpdGh1Yi5jb20vYml0aW5uL25vZGUtZmV0Y2gp',
        rm: 'R0VU',
        d: 'qVBodBoqYI/4ZmW0e6X8OSeStIN8eQyYZtD7ERCf4rUCdjvPBHiZPdaTVQuN9BLP3GhXo/lk2v5XVQdUikQaINj/3uGj85j2HTG5cV5eojfDUNwNTSM7x5jzSb9t41wWde7mx3CqLYSK3+pBYC2j/l2954j9qGfzx9st/6ZmkmNWfKXwSwncKfoR47mWX3OAhHzk7J6LCqIjzBLEwe1s6E2TlV9uX+L7FtKAazt8T1Aml76VFAIc7foc6bGQQq0UX3X3HXiGgvNzoi96Uk6zipaccviGJC287PPXkMBYKrA85bhs4hQnWamUP7q5+RwMZZa14847DOUCLmvj99f1pI6CpfLMc9K8vUoIFOB6QBVmuFZNxySs1AecMCZupqs6LxE6RCvhURRDtbS/jkdpEsfuD1TUKsGvQkE7QjkisnHHSZkr9orwdyToZ323zGhTlaqrysb4Kqb7mo4V97C6zUTSlAcoawRU+lz/O5hjvtq6LPWO/75IXmeBzAY9ZInC76T1tzLni6xnwJ/6gh22egQpmMUomFisaT8jr25tynQKOkw7IJTDTaBJ6Vdqy2vbkGTViDYqO/0EO1pmn8rr6m0TqAym4x3VtlRzMZZmD+9MymI1V7TcCfiG4bgr4Uv1Ga2qIchYdL41RF6xrI+jQw==',
        t: 'MTY2OTc5NzUwNS4xMjcwMDA=',
        m: 'y/HTljRpSk3FGuZYVtmds3iUTVt6Vl3AU01FL+ejeuI=',
        i1: 'nJPJ65qQyMZASXWLmBLJZg==',
        i2: 'i286DOUpjHSbmHlfamCjrw==',
        zh: 'DDzUXdD3Vwvv3LTQTYUEZszaaZeM6FFDVqK3CrGMh1o=',
        uh: 'o3n6xEt35XQSPgkMHltSudNiWY3D18ZEWvIVxqHkP+4=',
        hh: 'BZ5An6RlUs2D3o7lIskSKNDdH4WtqHqCETwyqew7RbU=',
        }
        };
        var trkjs = document.createElement('img');
        trkjs.setAttribute('src', '/cdn-cgi/images/trace/managed/js/transparent.gif?ray=77224446c989fe38');
        trkjs.setAttribute('style', 'display: none');
        document.body.appendChild(trkjs);
        var cpo = document.createElement('script');
        cpo.src = '/cdn-cgi/challenge-platform/h/b/orchestrate/managed/v1?ray=77224446c989fe38';
        window._cf_chl_opt.cOgUHash = location.hash === '' && location.href.indexOf('#') !== -1 ? '#' : location.hash;
        window._cf_chl_opt.cOgUQuery = location.search === '' && location.href.slice(0, -window._cf_chl_opt.cOgUHash.length).indexOf('?') !== -1 ? '?' : location.search;
        if (window.history && window.history.replaceState) {
        var ogU = location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;
        history.replaceState(null, null, "\/haku?q=makkara&__cf_chl_rt_tk=sjHRJqBBtfhlvDPakYGE8UNiYY7K81pI5rfTC1VOp3M-1669797505-0-gaNycGzNB1E" + window._cf_chl_opt.cOgUHash);
        cpo.onload = function() {
        history.replaceState(null, null, ogU);
        };
        }
        document.getElementsByTagName('head')[0].appendChild(cpo);
        }());
        </script>
        <div class="footer" role="contentinfo">
            <div class="footer-inner">
                <div class="clearfix diagnostic-wrapper">
                    <div class="ray-id">Ray ID: <code>77224446c989fe38</code></div>
                </div>
                <div class="text-center">Performance &amp; security by <a rel="noopener noreferrer" href="https://www.cloudflare.com?utm_source=challenge&utm_campaign=m" target="_blank">Cloudflare</a></div>
            </div>
        </div>
    </body>
</html>`;
