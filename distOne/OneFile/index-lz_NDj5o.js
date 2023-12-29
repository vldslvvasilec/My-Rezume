(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        o(n);
    new MutationObserver((n) => {
        for (const a of n)
            if (a.type === "childList")
                for (const c of a.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(n) {
        const a = {};
        return (
            n.integrity && (a.integrity = n.integrity),
            n.referrerPolicy && (a.referrerPolicy = n.referrerPolicy),
            n.crossOrigin === "use-credentials"
                ? (a.credentials = "include")
                : n.crossOrigin === "anonymous"
                ? (a.credentials = "omit")
                : (a.credentials = "same-origin"),
            a
        );
    }
    function o(n) {
        if (n.ep) return;
        n.ep = !0;
        const a = s(n);
        fetch(n.href, a);
    }
})();
const x = ["en", "ru", "cz", "ua"];
var p = document.getElementsByClassName("language-item"),
    u = document.getElementById("btn-img"),
    P = document.getElementById("btn-title");
const E = window.location.href.split("#")[1];
let i;
E && (i = E.toUpperCase());
i
    ? ((u.src = `./src/assets/icons/language/${i}.png`), (P.innerHTML = i))
    : (u.src = "./src/assets/icons/language/EN.png");
for (var d = 0; d < p.length; d++) {
    var H = p[d];
    H.onclick = R;
}
function R(e) {
    (u.src = "./src/assets/icons/language/" + this.dataset.lang + ".png"),
        (P.innerText = this.dataset.lang),
        (location.href = window.location.pathname + "#" + this.dataset.lang),
        location.reload();
}
function $() {
    let e = window.location.hash;
    (e = e.substring(1)),
        x.includes(e) ||
            ((location.href = window.location.pathname + "#en"),
            location.reload()),
        (document.querySelector("title").innerHTML = Title.title[e]);
    for (let t in langArr)
        document.querySelector(`.${t}`).innerHTML = langArr[t][e];
}
document.addEventListener("DOMContentLoaded", $());
const q = document.querySelector("body"),
    W = document.querySelector(".contact_email"),
    r = document.querySelector(".SendEmail"),
    D = document.querySelector(".SendEmailForm"),
    F = document.querySelector(".name"),
    Z = document.querySelector(".email"),
    z = document.querySelector(".message");
document.querySelector(".emailButtonsSubmit");
document.querySelector(".emailButtonsCencel");
const J = () => {
        (document.querySelector("#Name").value = ""),
            (document.querySelector("#email").value = ""),
            (document.querySelector("#message").value = "");
    },
    K = () => {
        q.classList.remove("translucentBg"),
            r.classList.remove("SendEmailShow"),
            r.classList.add("SendEmailClose");
    };
D.addEventListener("submit", function (e) {
    !F.value || !Z.value || !z.value || (J(), K()), e.preventDefault();
});
W.addEventListener("click", function () {
    q.classList.add("translucentBg"),
        r.classList.remove("SendEmailClose"),
        r.classList.add("SendEmailShow");
});
const l = document.querySelector(".LoadPdfWindow"),
    Y = document.querySelector(".LoadPdfWindow_lang"),
    j = document.querySelectorAll("li.PdfElem"),
    G = document.querySelector(".LoadPdfButtonsOK"),
    X = document.querySelector(".LoadPdfButtonsCancel");
let f;
const B = () => {
    l.classList.remove("PdfShowModal"),
        l.classList.add("PdfCloseModal"),
        Body.classList.remove("translucentBg");
};
j.forEach((e) => {
    e.addEventListener("click", function () {
        const t = e.getAttribute("value");
        (Y.innerText = t),
            (f = t),
            Body.classList.add("translucentBg"),
            l.classList.remove("PdfCloseModal"),
            l.classList.add("PdfShowModal");
    });
});
X.addEventListener("click", function () {
    B();
});
G.addEventListener("click", function () {
    let e = document.createElement("a");
    (e.href = `../../src/assets/pdf/Rezume${f}.pdf`),
        (e.download = `Rezume${f}.pdf`),
        document.body.appendChild(e),
        e.click(),
        document.body.removeChild(e),
        B();
});
const I = document.getElementById("btn"),
    g = document.getElementById("dropdown"),
    C = document.getElementById("arrow");
function Q(e) {
    g.classList.toggle("Show"),
        C.classList.toggle("arrow-up"),
        e.stopPropagation();
}
I.addEventListener("click", Q);
document.addEventListener("click", function (e) {
    const t = e.target,
        s = g.contains(t),
        o = I.contains(t);
    !s && !o && (g.classList.remove("Show"), C.classList.remove("arrow-up"));
});
let L;
const V = document.querySelector(".contactTelefonButton"),
    k = document.querySelector(".contact_telegram"),
    b = document.querySelector(".contact_whatsapp"),
    A = document.querySelector(".contact_email"),
    T = document.querySelector(".contact_linkedln"),
    S = document.querySelectorAll(".contactsElem");
V.addEventListener("mouseenter", () => {
    (k.style.animation = "contacktItemstelegram 1s forwards 0.9s"),
        (b.style.animation = "contacktItemswhatsapp 1s forwards 0.6s"),
        (A.style.animation = "contacktItemsemail 1s forwards 0.3s"),
        (T.style.animation = "contacktItemslinkedln 1s forwards"),
        clearTimeout(L);
});
S.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        S.forEach((t) => {
            t.classList.add(".contactsShow"), clearTimeout(L);
        });
    }),
        e.addEventListener("mouseleave", () => {
            L = setTimeout(() => {
                (k.style.animation = "contacktItemstelegramClose 1s forwards"),
                    (b.style.animation =
                        "contacktItemswhatsappClose 1s forwards"),
                    (A.style.animation = "contacktItemsemailClose 1s forwards"),
                    (T.style.animation =
                        "contacktItemslinkedlnClose 1s forwards");
            }, 1500);
        });
});
let y;
const ee = document.querySelector(".PdfLoadButton"),
    _ = document.querySelector(".PdfListLangEN"),
    M = document.querySelector(".PdfListLangCZ"),
    O = document.querySelector(".PdfListLangUA"),
    N = document.querySelector(".PdfListLangRU"),
    v = document.querySelectorAll(".PdfElem");
ee.addEventListener("mouseenter", () => {
    (_.style.animation = "PdfListLangENAnim 1s forwards 0.9s"),
        (M.style.animation = "PdfListLangCZAnim 1s forwards 0.6s"),
        (O.style.animation = "PdfListLangUAAnim 1s forwards 0.3s"),
        (N.style.animation = "PdfListLangRUAnim 1s forwards"),
        clearTimeout(y);
});
v.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        v.forEach((t) => {
            t.classList.add(".PdfShow"), clearTimeout(y);
        });
    }),
        e.addEventListener("mouseleave", () => {
            y = setTimeout(() => {
                (_.style.animation = "PdfListLangENAnimClose 1s forwards"),
                    (M.style.animation = "PdfListLangCZAnimClose 1s forwards"),
                    (O.style.animation = "PdfListLangUAAnimClose 1s forwards"),
                    (N.style.animation = "PdfListLangRUAnimClose 1s forwards");
            }, 1500);
        });
});
document
    .querySelector(".SendEmailForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const t = document.querySelector("#Name").value,
            s = document.querySelector("#email").value,
            o = document.querySelector("#message").value,
            n = { from_name: t, from_email: s, message: o };
        emailjs.init("hpawoRdGpKEsGXPrT");
        const a = "service_297hmym",
            c = "template_i4oqoc4";
        emailjs.send(a, c, n);
    });
let w = [];
const U = function (e) {
    w.forEach((t) => {
        if (t !== e && t.classList.contains("Show")) {
            t.classList.remove("Show");
            const s = w.indexOf(t) + 1,
                o = document.getElementById(`JobsButton${s}`);
            o.classList.contains("arrow") && o.classList.remove("arrow");
        }
    });
};
document.documentElement.addEventListener("click", function () {
    U();
});
for (let e = 1; e <= 5; e++) {
    let t = document.getElementById(`JobsButton${e}`),
        s = document.getElementById(`JobsWindow${e}`);
    w.push(s);
    const o = function () {
        U(s), s.classList.toggle("Show"), t.classList.toggle("arrow");
    };
    t.addEventListener("click", function (n) {
        n.stopPropagation(), o();
    }),
        document.documentElement.addEventListener("click", function () {
            s.classList.contains("Show") && o();
        });
}
const m = document.querySelectorAll("._animItems");
if (m.length > 0) {
    let e = function () {
            for (let s = 0; s < m.length; s++) {
                const o = m[s],
                    n = o.offsetHeight,
                    a = t(o).top,
                    c = 4;
                let h = window.innerHeight - n / c;
                n > window.innerHeight && (h = window.innerHeight / c),
                    pageYOffset > a - h && pageYOffset < a + n
                        ? o.classList.add("_active")
                        : o.classList.contains("_anim-no-hide") ||
                          o.classList.remove("_active");
            }
        },
        t = function (s) {
            const o = s.getBoundingClientRect(),
                n = window.pageXOffset || document.documentElement.scrollLeft,
                a = window.pageYOffset || document.documentElement.scrollTop;
            return { top: o.top + a, left: o.left + n };
        };
    var te = e,
        ne = t;
    window.addEventListener("scroll", e);
}
setTimeout(() => {
    te();
});
