var bgSVG = `
            <svg id="bg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="640" viewBox="0 0 360 640.00001" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect id="rect5189-8" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="640" width="360" y="0" x="0" fill="#d7eef4" />
                <g fill="#333333">
                    <path id="path10590-3-7-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m153.94 443.28c-1.6123 0-2.9194 1.2047-2.9194 2.6916v10.868c0 5.5017-2.7017 5.5166-4.9971 5.5166v-11.866c0-2.5165-1.8644-4.5558-4.1642-4.5558-2.2999 0-4.1643 2.0393-4.1643 4.5558v20.342c-2.2954 0-4.9971-0.015-4.9971-5.5165v-9.4802c0-1.4869-1.3071-2.6916-2.9193-2.6916-1.6123 0-2.9193 1.2047-2.9193 2.6916v12.354c0 5.6939 4.6336 9.0964 10.836 9.0964v15.213h8.3285v-23.689c6.2021 0 10.836-3.4012 10.836-9.0952v-13.743c0-1.4869-1.3071-2.6916-2.9193-2.6916z" />
                    <path id="path10590-3-5-8-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m225.91 447.5c2.2227 0 4.0245 1.9708 4.0245 4.4028v14.293c2.2182 0 4.8292-0.0145 4.8292-5.3313v-5.9423c0-1.4369 1.2632-2.6012 2.8213-2.6012s2.8213 1.1642 2.8213 2.6012v8.7195c0 5.5027-4.4781 8.7908-10.472 8.7908v20.068h-8.0489v-40.597c0-2.432 1.8018-4.4028 4.0244-4.4028z" />
                    <path id="path10590-3-4-6-4" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m46.842 445.94c-2.2999 0-4.1643 2.0403-4.1643 4.5568v20.342c-2.2954 0-4.9971-0.0161-4.9971-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927s-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7017 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1642-4.5568z" />
                    <path id="path10590-3-4-6-4-6" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                        d="m320.43 445.94c-2.2998 0-4.1642 2.0403-4.1642 4.5568v20.342c-2.2954 0-4.9972-0.0161-4.9972-5.5176v-7.2581c0-1.4869-1.307-2.6927-2.9193-2.6927-1.6122 0-2.9193 1.2058-2.9193 2.6927v10.133c0 5.6939 4.6337 9.0952 10.836 9.0952v15.214h8.3285v-17.648c6.2021 0 10.836-3.4013 10.836-9.0952v-5.9699c0-1.4869-1.307-2.6916-2.9193-2.6916s-2.9193 1.2047-2.9193 2.6916v3.095c0 5.5016-2.7018 5.5165-4.9971 5.5165v-17.906c0-2.5165-1.8644-4.5568-4.1643-4.5568z" />
                </g>
            </svg>
        `;

var fgSVG = `
            <svg id="fg-svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="150" viewBox="0 0 360 150" width="360" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/">
                <rect style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    height="147.5" width="360" y="2.5" x="0" fill="#016b0c" />
                <path stroke="#333333" stroke-width="5" fill="none" d="m-0.000001625 2.5h360" />
                <circle id="a" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    cx="-9.75" cy="11" r="2.5" fill="#ff0000" />
                <use xlink:href="#a" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 9.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 18.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(15 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 24.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 33.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(30 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 39.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 48.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(45 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 54.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 63.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(60 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 69.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 78.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(75 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 84.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 93.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(90 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 99.025 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 108.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(105 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 114.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 123.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(120 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 129.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 138.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(135 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 144.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 153.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(150 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 159.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 168.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(165 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 174.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 183.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(180 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 189.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 198.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(195 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 204.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 213.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(210 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 219.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 228.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(225 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 234.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 243.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(240 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 249.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 258.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(255 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 264.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 273.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(270 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 279.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 288.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(285 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 294.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 303.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(300 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 309.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 318.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(315 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 324.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 333.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(330 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 339.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 348.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(345 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 354.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 363.05 17.2)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="translate(360 -3.7151e-8)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.9 0 0 .9 369.03 8.6)" height="100%" width="100%" y="0" x="0" />
                <use xlink:href="#a" transform="matrix(.8 0 0 .8 378.05 17.2)" height="100%" width="100%" y="0" x="0" />
            </svg>
        `;

var boneOpen = `
            <svg id="bone" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                height="400" viewBox="0 0 79.999993 400.00001" width="80" version="1.1" xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/">
        `;
var boneMid = `
            <path id="path4855-9" stroke-linejoin="round" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                d="m12.343 397.5-0.274-343.44c-0.066-8.49-9.569-14.59-9.569-27.05 0-12.457 7.957-24.615 21.609-24.551 7.448 0.0614 12.539 3.9094 15.891 8.055 3.352-4.1456 8.443-7.9937 15.891-8.055 13.652-0.0637 21.609 12.094 21.609 24.551s-9.5033 18.557-9.5692 27.044l-0.27382 343.41z"
                stroke="#333333" stroke-linecap="round" stroke-width="5" fill="#b00000" />
            <g stroke-linejoin="round" stroke="#333333" stroke-linecap="round" stroke-width="5" fill="none">
                <path id="path4855-2-0" style="color-rendering:auto;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;image-rendering:auto"
                    d="m13.781 26.92a11.746 12.772 0 0 1 11.746 -12.78" />
                <path id="path5025" d="m56.472 115.85v78.183" />
                <path id="path5025-3-6" d="m56.472 92.06v10.609" />
                <path id="path5025-0" d="m56.472 253.62v126.19" />
                <path id="path5025-3-6-6" d="m56.472 212.25v24.515" />
            </g>
        `;
var boneClose = "</svg>";

var botBoneSVG = boneOpen + boneMid + boneClose;
var topBoneSVG =
  boneOpen +
  '<g transform="rotate(180) translate(-80, -400)">' +
  boneMid +
  "</g>" +
  boneClose;

var sprite1 = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="59.968" height="100.03" viewBox="0 0 1204.000000 1280.000000"
preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2195 12768 c-93 -88 -85 -364 25 -797 21 -86 42 -165 45 -176 12
-39 -59 102 -103 205 -49 115 -117 309 -128 365 -7 42 -16 44 -43 9 -78 -99
-33 -434 124 -914 24 -74 43 -135 41 -137 -2 -2 -67 154 -146 347 -79 192
-146 350 -150 350 -15 0 -21 -136 -11 -220 28 -223 150 -595 305 -934 20 -44
35 -80 33 -82 -3 -3 -189 337 -281 516 -34 66 -65 117 -69 113 -13 -12 -7
-209 8 -299 30 -174 117 -438 196 -596 16 -32 27 -58 25 -58 -12 0 -279 166
-431 268 -445 299 -731 555 -853 765 -37 64 -40 66 -46 41 -15 -57 -7 -238 14
-319 24 -95 82 -220 146 -316 97 -144 288 -324 478 -450 52 -35 94 -65 92 -67
-5 -5 -252 87 -376 140 -215 92 -382 191 -470 279 l-49 49 -7 -47 c-24 -163
78 -378 250 -525 142 -123 386 -258 611 -338 123 -44 119 -47 -34 -24 -318 46
-583 136 -719 243 -46 37 -52 39 -52 20 0 -37 51 -172 88 -233 113 -188 352
-336 675 -420 82 -21 137 -30 362 -62 l50 -7 -80 -13 c-212 -35 -564 -36 -714
-3 -24 5 -46 8 -48 5 -2 -2 5 -22 16 -43 73 -143 423 -244 986 -283 88 -7 161
-13 163 -14 4 -5 -233 -73 -328 -95 -125 -29 -234 -43 -332 -44 l-87 -1 17
-29 c35 -59 143 -110 300 -139 130 -25 698 -12 807 19 13 3 17 2 10 -4 -10
-10 -535 -219 -608 -243 -47 -15 -39 -26 34 -46 112 -29 277 -39 461 -26 161
12 414 43 462 58 54 17 -14 -17 -308 -150 -175 -79 -320 -146 -323 -149 -3 -3
9 -13 26 -21 137 -71 489 -66 895 14 83 16 151 28 153 27 4 -5 -227 -172 -373
-269 -72 -49 -170 -108 -218 -132 l-87 -45 48 -8 c71 -12 277 -9 363 6 41 7
120 24 174 37 54 13 101 24 104 24 2 0 -11 -17 -30 -37 -51 -57 -76 -103 -94
-173 -21 -83 -8 -167 41 -267 106 -215 430 -367 880 -413 168 -18 151 -6 158
-111 10 -139 8 -318 -4 -384 -17 -93 -39 -125 -121 -179 -388 -257 -594 -565
-626 -935 l-7 -83 -83 -24 c-376 -109 -736 -416 -1126 -964 l-97 -135 -132
-12 c-369 -32 -593 -130 -1017 -442 -183 -135 -230 -164 -310 -194 -94 -35
-143 -40 -240 -22 -248 43 -402 0 -466 -132 -42 -86 -40 -199 6 -393 29 -125
34 -163 35 -275 0 -77 -8 -186 -19 -266 -17 -121 -18 -152 -8 -270 10 -115 16
-143 42 -197 22 -45 35 -62 45 -58 9 3 15 -1 15 -10 0 -24 48 -66 68 -60 14 5
23 -7 44 -54 40 -91 101 -105 152 -37 18 24 20 40 18 103 -3 68 2 91 52 242
30 92 62 208 71 257 22 124 56 187 186 350 62 77 127 163 146 192 37 58 47 63
193 88 268 46 732 79 1072 77 331 -2 339 0 603 105 481 192 835 392 1402 795
l71 51 249 -179 c548 -394 1033 -757 1033 -773 0 -4 -44 -20 -97 -35 -235 -70
-448 -167 -593 -271 -42 -31 -162 -142 -266 -248 -206 -209 -297 -281 -481
-379 -108 -57 -184 -87 -323 -128 -103 -31 -142 -52 -173 -97 -90 -131 -75
-256 64 -520 38 -73 81 -167 95 -210 26 -75 26 -84 23 -268 -8 -400 -6 -453
20 -535 12 -41 40 -102 60 -135 26 -41 40 -77 44 -112 10 -89 47 -133 111
-133 27 0 61 35 70 73 4 17 13 27 25 27 24 0 47 28 55 66 5 23 14 32 39 40 24
7 37 20 52 51 12 24 28 48 37 55 21 17 28 58 36 213 5 95 12 139 25 162 13 24
17 56 17 131 0 79 6 119 26 188 39 132 54 196 72 324 l17 115 830 332 c456
182 854 346 885 364 218 129 377 293 504 517 108 190 153 364 143 552 -13 235
-65 420 -180 643 -105 205 -198 349 -573 885 -183 262 -333 479 -333 482 0 3
19 16 42 30 23 14 98 81 167 150 200 199 348 440 440 716 70 212 98 459 70
632 -10 57 -9 67 9 96 48 77 99 280 117 467 l7 67 61 6 c33 3 128 11 210 17
l149 12 340 111 c317 104 345 111 392 104 27 -4 124 -10 214 -14 154 -7 165
-9 193 -32 l29 -25 -6 25 c-6 25 -6 26 72 32 190 17 354 73 848 289 387 169
400 172 551 141 65 -14 115 -16 274 -11 107 4 212 11 233 16 38 9 39 8 73 -37
77 -106 171 -332 221 -537 21 -86 23 -312 4 -400 -77 -360 -259 -669 -685
-1160 -197 -228 -294 -365 -426 -602 l-57 -102 -23 49 c-30 65 -36 58 -9 -9
21 -50 21 -54 6 -87 -45 -94 4 -174 106 -174 83 0 132 65 103 135 -19 44 -32
44 -50 0 -19 -44 -60 -49 -77 -11 -10 20 -6 34 21 88 103 205 300 451 599 748
130 130 270 278 312 330 353 438 479 882 389 1376 -37 209 -87 350 -154 438
-36 46 -37 50 -23 77 19 39 10 88 -18 101 l-22 10 29 28 c44 45 34 110 -20
131 -23 9 -24 12 -11 19 26 15 42 65 35 106 -6 27 -14 38 -38 48 l-30 13 28 6
c290 60 1221 247 1229 247 7 0 9 -14 7 -35 -5 -39 9 -62 46 -76 33 -13 54 0
152 96 47 45 102 94 123 107 l37 25 -58 5 c-32 3 -87 18 -123 33 -113 47 -143
55 -170 41 -36 -17 -46 -58 -26 -100 15 -33 15 -35 -1 -40 -9 -3 -280 -66
-602 -140 -322 -74 -598 -137 -614 -142 -29 -7 -29 -7 -13 17 10 13 17 35 17
49 0 62 -63 96 -162 87 l-59 -5 7 56 c4 32 19 98 35 148 45 148 52 203 46 337
-13 284 -85 516 -211 684 -117 155 -290 284 -636 474 -263 144 -380 217 -493
307 -222 176 -480 450 -475 502 4 38 34 37 72 -4 18 -20 35 -36 39 -36 4 0 7
18 7 40 0 79 -45 125 -122 125 -33 0 -46 -7 -74 -38 -50 -54 -46 -114 11 -177
l23 -25 -114 -595 c-63 -327 -173 -903 -244 -1280 -72 -377 -134 -694 -139
-705 -5 -12 -34 -29 -72 -44 -35 -13 -96 -40 -136 -61 l-72 -37 -58 28 c-109
51 -366 101 -743 143 -198 23 -223 28 -316 65 -191 75 -341 162 -390 227 -24
31 -29 48 -32 111 -5 88 7 143 55 244 l35 77 132 11 c72 6 159 14 192 16 90 8
148 31 198 80 48 46 76 115 76 187 0 52 19 94 69 151 22 27 41 54 41 60 -1 28
-40 95 -68 118 l-31 24 52 -3 c42 -3 58 1 81 19 24 19 27 27 22 58 -15 91 -18
133 -12 166 7 34 13 39 90 74 160 74 177 143 57 235 -96 74 -131 172 -131 367
0 79 3 92 32 145 32 58 33 60 32 189 -2 147 -27 265 -90 410 -18 45 -34 84
-34 87 0 4 24 40 53 80 158 221 201 496 111 703 l-18 40 -7 -65 c-13 -118 -56
-199 -147 -281 -53 -48 -117 -86 -201 -119 -49 -19 -53 -19 -46 -3 32 75 36
99 26 135 -15 48 -54 94 -110 130 -54 34 -61 35 -61 5 0 -38 -28 -122 -51
-151 -34 -44 -61 -35 -219 70 -197 130 -256 157 -345 161 -38 1 -93 8 -121 14
-53 13 -87 6 -201 -41 -30 -13 -33 -12 -82 32 -64 58 -121 78 -239 85 -137 8
-197 -11 -341 -108 -129 -87 -200 -114 -227 -87 -9 8 -21 51 -28 99 -7 46 -16
77 -19 69 -23 -55 -38 -112 -43 -170 l-7 -68 -65 -16 c-114 -28 -213 -101
-284 -210 -21 -33 -37 -61 -35 -63 2 -1 52 15 110 37 59 22 122 43 140 47 l32
6 -30 -34 c-16 -19 -76 -81 -131 -139 -115 -118 -120 -130 -131 -279 -4 -70
-12 -105 -30 -138 -12 -24 -23 -52 -23 -63 0 -20 17 -76 74 -238 41 -116 44
-166 20 -269 -9 -37 -16 -96 -17 -130 -1 -55 3 -67 36 -115 44 -64 47 -101 13
-173 -40 -86 -121 -145 -198 -145 l-33 0 30 -25 c68 -56 130 -64 287 -39 l37
6 -4 -33 c-15 -123 -30 -201 -46 -245 -27 -71 -88 -138 -146 -160 l-48 -18 40
-12 c57 -18 159 -17 203 1 48 21 105 77 128 126 l17 39 23 -21 c42 -40 58 -99
51 -197 -4 -48 -9 -102 -13 -119 -9 -45 7 -42 60 10 53 53 76 117 76 211 1 62
2 69 14 53 8 -10 24 -49 36 -88 31 -95 24 -166 -24 -265 -42 -85 -156 -212
-251 -279 -122 -87 -274 -145 -347 -131 -114 21 -238 181 -322 415 -48 133
-50 153 -22 245 68 222 85 356 62 486 -22 122 -70 214 -159 302 -67 66 -138
121 -533 413 -251 186 -358 284 -432 399 -113 175 -278 586 -458 1143 -38 117
-72 212 -77 213 -4 0 -23 -15 -42 -32z m6430 -1746 c196 -193 303 -279 560
-451 325 -217 479 -341 603 -483 194 -223 271 -423 272 -710 0 -112 -16 -205
-59 -339 l-31 -96 -78 -35 c-42 -19 -108 -43 -147 -52 -82 -20 -110 -36 -208
-119 -39 -33 -91 -69 -114 -79 -47 -21 -58 -20 -433 17 -315 32 -669 18 -889
-35 -46 -11 -86 -18 -89 -16 -4 5 21 149 212 1221 149 832 236 1320 236 1328
0 4 1 7 3 7 1 0 74 -71 162 -158z"/>
<path d="M8215 7505 c10 -33 918 -1975 922 -1972 1 2 -42 113 -98 248 -348
844 -616 1417 -775 1659 -31 47 -53 76 -49 65z"/>
</g>
</svg>
        `;

var sprite2 = `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="59.968" height="100.03" viewBox="0 0 1204.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#ff0000" stroke="none">
<path d="M2195 12768 c-93 -88 -85 -364 25 -797 21 -86 42 -165 45 -176 12
-39 -59 102 -103 205 -49 115 -117 309 -128 365 -7 42 -16 44 -43 9 -78 -99
-33 -434 124 -914 24 -74 43 -135 41 -137 -2 -2 -67 154 -146 347 -79 192
-146 350 -150 350 -15 0 -21 -136 -11 -220 28 -223 150 -595 305 -934 20 -44
35 -80 33 -82 -3 -3 -189 337 -281 516 -34 66 -65 117 -69 113 -13 -12 -7
-209 8 -299 30 -174 117 -438 196 -596 16 -32 27 -58 25 -58 -12 0 -279 166
-431 268 -445 299 -731 555 -853 765 -37 64 -40 66 -46 41 -15 -57 -7 -238 14
-319 24 -95 82 -220 146 -316 97 -144 288 -324 478 -450 52 -35 94 -65 92 -67
-5 -5 -252 87 -376 140 -215 92 -382 191 -470 279 l-49 49 -7 -47 c-24 -163
78 -378 250 -525 142 -123 386 -258 611 -338 123 -44 119 -47 -34 -24 -318 46
-583 136 -719 243 -46 37 -52 39 -52 20 0 -37 51 -172 88 -233 113 -188 352
-336 675 -420 82 -21 137 -30 362 -62 l50 -7 -80 -13 c-212 -35 -564 -36 -714
-3 -24 5 -46 8 -48 5 -2 -2 5 -22 16 -43 73 -143 423 -244 986 -283 88 -7 161
-13 163 -14 4 -5 -233 -73 -328 -95 -125 -29 -234 -43 -332 -44 l-87 -1 17
-29 c35 -59 143 -110 300 -139 130 -25 698 -12 807 19 13 3 17 2 10 -4 -10
-10 -535 -219 -608 -243 -47 -15 -39 -26 34 -46 112 -29 277 -39 461 -26 161
12 414 43 462 58 54 17 -14 -17 -308 -150 -175 -79 -320 -146 -323 -149 -3 -3
9 -13 26 -21 137 -71 489 -66 895 14 83 16 151 28 153 27 4 -5 -227 -172 -373
-269 -72 -49 -170 -108 -218 -132 l-87 -45 48 -8 c71 -12 277 -9 363 6 41 7
120 24 174 37 54 13 101 24 104 24 2 0 -11 -17 -30 -37 -51 -57 -76 -103 -94
-173 -21 -83 -8 -167 41 -267 106 -215 430 -367 880 -413 168 -18 151 -6 158
-111 10 -139 8 -318 -4 -384 -17 -93 -39 -125 -121 -179 -388 -257 -594 -565
-626 -935 l-7 -83 -83 -24 c-376 -109 -736 -416 -1126 -964 l-97 -135 -132
-12 c-369 -32 -593 -130 -1017 -442 -183 -135 -230 -164 -310 -194 -94 -35
-143 -40 -240 -22 -248 43 -402 0 -466 -132 -42 -86 -40 -199 6 -393 29 -125
34 -163 35 -275 0 -77 -8 -186 -19 -266 -17 -121 -18 -152 -8 -270 10 -115 16
-143 42 -197 22 -45 35 -62 45 -58 9 3 15 -1 15 -10 0 -24 48 -66 68 -60 14 5
23 -7 44 -54 40 -91 101 -105 152 -37 18 24 20 40 18 103 -3 68 2 91 52 242
30 92 62 208 71 257 22 124 56 187 186 350 62 77 127 163 146 192 37 58 47 63
193 88 268 46 732 79 1072 77 331 -2 339 0 603 105 481 192 835 392 1402 795
l71 51 249 -179 c548 -394 1033 -757 1033 -773 0 -4 -44 -20 -97 -35 -235 -70
-448 -167 -593 -271 -42 -31 -162 -142 -266 -248 -206 -209 -297 -281 -481
-379 -108 -57 -184 -87 -323 -128 -103 -31 -142 -52 -173 -97 -90 -131 -75
-256 64 -520 38 -73 81 -167 95 -210 26 -75 26 -84 23 -268 -8 -400 -6 -453
20 -535 12 -41 40 -102 60 -135 26 -41 40 -77 44 -112 10 -89 47 -133 111
-133 27 0 61 35 70 73 4 17 13 27 25 27 24 0 47 28 55 66 5 23 14 32 39 40 24
7 37 20 52 51 12 24 28 48 37 55 21 17 28 58 36 213 5 95 12 139 25 162 13 24
17 56 17 131 0 79 6 119 26 188 39 132 54 196 72 324 l17 115 830 332 c456
182 854 346 885 364 218 129 377 293 504 517 108 190 153 364 143 552 -13 235
-65 420 -180 643 -105 205 -198 349 -573 885 -183 262 -333 479 -333 482 0 3
19 16 42 30 23 14 98 81 167 150 200 199 348 440 440 716 70 212 98 459 70
632 -10 57 -9 67 9 96 48 77 99 280 117 467 l7 67 61 6 c33 3 128 11 210 17
l149 12 340 111 c317 104 345 111 392 104 27 -4 124 -10 214 -14 154 -7 165
-9 193 -32 l29 -25 -6 25 c-6 25 -6 26 72 32 190 17 354 73 848 289 387 169
400 172 551 141 65 -14 115 -16 274 -11 107 4 212 11 233 16 38 9 39 8 73 -37
77 -106 171 -332 221 -537 21 -86 23 -312 4 -400 -77 -360 -259 -669 -685
-1160 -197 -228 -294 -365 -426 -602 l-57 -102 -23 49 c-30 65 -36 58 -9 -9
21 -50 21 -54 6 -87 -45 -94 4 -174 106 -174 83 0 132 65 103 135 -19 44 -32
44 -50 0 -19 -44 -60 -49 -77 -11 -10 20 -6 34 21 88 103 205 300 451 599 748
130 130 270 278 312 330 353 438 479 882 389 1376 -37 209 -87 350 -154 438
-36 46 -37 50 -23 77 19 39 10 88 -18 101 l-22 10 29 28 c44 45 34 110 -20
131 -23 9 -24 12 -11 19 26 15 42 65 35 106 -6 27 -14 38 -38 48 l-30 13 28 6
c290 60 1221 247 1229 247 7 0 9 -14 7 -35 -5 -39 9 -62 46 -76 33 -13 54 0
152 96 47 45 102 94 123 107 l37 25 -58 5 c-32 3 -87 18 -123 33 -113 47 -143
55 -170 41 -36 -17 -46 -58 -26 -100 15 -33 15 -35 -1 -40 -9 -3 -280 -66
-602 -140 -322 -74 -598 -137 -614 -142 -29 -7 -29 -7 -13 17 10 13 17 35 17
49 0 62 -63 96 -162 87 l-59 -5 7 56 c4 32 19 98 35 148 45 148 52 203 46 337
-13 284 -85 516 -211 684 -117 155 -290 284 -636 474 -263 144 -380 217 -493
307 -222 176 -480 450 -475 502 4 38 34 37 72 -4 18 -20 35 -36 39 -36 4 0 7
18 7 40 0 79 -45 125 -122 125 -33 0 -46 -7 -74 -38 -50 -54 -46 -114 11 -177
l23 -25 -114 -595 c-63 -327 -173 -903 -244 -1280 -72 -377 -134 -694 -139
-705 -5 -12 -34 -29 -72 -44 -35 -13 -96 -40 -136 -61 l-72 -37 -58 28 c-109
51 -366 101 -743 143 -198 23 -223 28 -316 65 -191 75 -341 162 -390 227 -24
31 -29 48 -32 111 -5 88 7 143 55 244 l35 77 132 11 c72 6 159 14 192 16 90 8
148 31 198 80 48 46 76 115 76 187 0 52 19 94 69 151 22 27 41 54 41 60 -1 28
-40 95 -68 118 l-31 24 52 -3 c42 -3 58 1 81 19 24 19 27 27 22 58 -15 91 -18
133 -12 166 7 34 13 39 90 74 160 74 177 143 57 235 -96 74 -131 172 -131 367
0 79 3 92 32 145 32 58 33 60 32 189 -2 147 -27 265 -90 410 -18 45 -34 84
-34 87 0 4 24 40 53 80 158 221 201 496 111 703 l-18 40 -7 -65 c-13 -118 -56
-199 -147 -281 -53 -48 -117 -86 -201 -119 -49 -19 -53 -19 -46 -3 32 75 36
99 26 135 -15 48 -54 94 -110 130 -54 34 -61 35 -61 5 0 -38 -28 -122 -51
-151 -34 -44 -61 -35 -219 70 -197 130 -256 157 -345 161 -38 1 -93 8 -121 14
-53 13 -87 6 -201 -41 -30 -13 -33 -12 -82 32 -64 58 -121 78 -239 85 -137 8
-197 -11 -341 -108 -129 -87 -200 -114 -227 -87 -9 8 -21 51 -28 99 -7 46 -16
77 -19 69 -23 -55 -38 -112 -43 -170 l-7 -68 -65 -16 c-114 -28 -213 -101
-284 -210 -21 -33 -37 -61 -35 -63 2 -1 52 15 110 37 59 22 122 43 140 47 l32
6 -30 -34 c-16 -19 -76 -81 -131 -139 -115 -118 -120 -130 -131 -279 -4 -70
-12 -105 -30 -138 -12 -24 -23 -52 -23 -63 0 -20 17 -76 74 -238 41 -116 44
-166 20 -269 -9 -37 -16 -96 -17 -130 -1 -55 3 -67 36 -115 44 -64 47 -101 13
-173 -40 -86 -121 -145 -198 -145 l-33 0 30 -25 c68 -56 130 -64 287 -39 l37
6 -4 -33 c-15 -123 -30 -201 -46 -245 -27 -71 -88 -138 -146 -160 l-48 -18 40
-12 c57 -18 159 -17 203 1 48 21 105 77 128 126 l17 39 23 -21 c42 -40 58 -99
51 -197 -4 -48 -9 -102 -13 -119 -9 -45 7 -42 60 10 53 53 76 117 76 211 1 62
2 69 14 53 8 -10 24 -49 36 -88 31 -95 24 -166 -24 -265 -42 -85 -156 -212
-251 -279 -122 -87 -274 -145 -347 -131 -114 21 -238 181 -322 415 -48 133
-50 153 -22 245 68 222 85 356 62 486 -22 122 -70 214 -159 302 -67 66 -138
121 -533 413 -251 186 -358 284 -432 399 -113 175 -278 586 -458 1143 -38 117
-72 212 -77 213 -4 0 -23 -15 -42 -32z m6430 -1746 c196 -193 303 -279 560
-451 325 -217 479 -341 603 -483 194 -223 271 -423 272 -710 0 -112 -16 -205
-59 -339 l-31 -96 -78 -35 c-42 -19 -108 -43 -147 -52 -82 -20 -110 -36 -208
-119 -39 -33 -91 -69 -114 -79 -47 -21 -58 -20 -433 17 -315 32 -669 18 -889
-35 -46 -11 -86 -18 -89 -16 -4 5 21 149 212 1221 149 832 236 1320 236 1328
0 4 1 7 3 7 1 0 74 -71 162 -158z"/>
<path d="M8215 7505 c10 -33 918 -1975 922 -1972 1 2 -42 113 -98 248 -348
844 -616 1417 -775 1659 -31 47 -53 76 -49 65z"/>
</g>
</svg>


        `;

var bg = new Image();
bg.src = "data:image/svg+xml," + encodeURIComponent(bgSVG);

var fg = new Image();
fg.src = "data:image/svg+xml," + encodeURIComponent(fgSVG);

var dinoGlide = new Image();
dinoGlide.src = "data:image/svg+xml," + encodeURIComponent(sprite1);

var dinoFlap = new Image();
dinoFlap.src = "data:image/svg+xml," + encodeURIComponent(sprite2);

var topBone = new Image();
topBone.src = "data:image/svg+xml," + encodeURIComponent(topBoneSVG);

var botBone = new Image();
botBone.src = "data:image/svg+xml," + encodeURIComponent(botBoneSVG);

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var hitboxWidth = 60;
var hitboxHeight = 15;

var spriteOffset_X = -10;
var spriteOffset_Y = -25;

var fgPos_X = 0;

var dinoPos_X = 100;
var dinoPos_Y = 250;
var dinoAngle = 0;
var dinoState = dinoGlide;

var minBoneHeight = -330;
var maxBoneHeight = -160;

var scrollSpeed = -3;
var gravity = 0.3;
var lift = -8;
var velocity = 0;

var start = false;
var gameOver = false;
var score = 0;

var bonePtr = 0;
var boneStart = 400;
var flyGap = 180;
var boneGap = 280;
var bones = [
  { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  { x: boneStart + boneGap, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  {
    x: boneStart + 2 * boneGap,
    y: getRandomHeight(minBoneHeight, maxBoneHeight)
  }
];

function getRandomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function playerInput() {
  if (!start) {
    start = true;
    velocity = lift;
    dinoAngle = -20;
    document.getElementById("ctrl-ctn").style.opacity = 0;
  } else {
    if (!gameOver) {
      velocity = lift;
      dinoAngle = -20;
    }
  }
}

function checkCollision() {
  // set upper bound
  if (dinoPos_Y <= -hitboxHeight) {
    velocity = 0;
  }

  // dino hit the ground
  if (dinoPos_Y + hitboxHeight >= canvas.height - fg.height) {
    velocity = 0;
    dinoPos_Y = canvas.height - fg.height - hitboxHeight;
    setGameOver();
  }

  // dino hit bone
  if (
    dinoPos_X + hitboxWidth >= bones[bonePtr].x &&
    dinoPos_X < bones[bonePtr].x + topBone.width &&
    (dinoPos_Y <= bones[bonePtr].y + topBone.height ||
      dinoPos_Y + hitboxHeight >= bones[bonePtr].y + topBone.height + flyGap)
  ) {
    setGameOver();
  }
}

function replay() {
  start = false;
  gameOver = false;

  score = 0;
  velocity = 0;

  dinoPos_X = 100;
  dinoPos_Y = 250;
  dinoAngle = 0;
  dinoState = dinoGlide;

  bonePtr = 0;
  bones = [
    { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
    {
      x: boneStart + boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight)
    },
    {
      x: boneStart + 2 * boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight)
    }
  ];

  document.getElementById("ctrl-ctn").style.opacity = 1;

  document.getElementById("gameover-screen").style.visibility = "hidden";
  document.getElementById("gameover-screen").style.opacity = 0;
}

function setGameOver() {
  gameOver = true;
  document.getElementById("gameover-screen").style.visibility = "visible";
  document.getElementById("gameover-screen").style.opacity = 1;
}

function update() {
  // foreground scroll
  if (!gameOver) {
    fgPos_X += scrollSpeed;

    if (fgPos_X <= -canvas.width) {
      fgPos_X = 0;
    }
  }

  // game started
  if (start) {
    velocity += gravity;
    dinoPos_Y += velocity;

    // if velocity is negative show dino flap sprite else show dino falling
    if (velocity < 0) {
      dinoState = dinoFlap;
    } else {
      dinoState = dinoGlide;
      dinoAngle = Math.min(dinoAngle + 2, 90);
    }

    checkCollision();

    if (!gameOver) {
      for (var i = 0; i < bones.length; i++) {
        // scroll bones across screen
        bones[i].x += scrollSpeed;

        // reassign bone object XY after it leaves screen
        if (bones[i].x <= -topBone.width) {
          if (i == 0) {
            bones[0].x = bones[bones.length - 1].x + boneGap;
          } else {
            bones[i].x = bones[i - 1].x + boneGap;
          }

          bones[i].y = getRandomHeight(minBoneHeight, maxBoneHeight);
        }
      }

      // if dino passed through the bone increase score
      if (dinoPos_X >= bones[bonePtr].x + topBone.width) {
        score++;

        if (bonePtr == 2) {
          bonePtr = 0;
        } else {
          bonePtr++;
        }
      }
    }
  }
  render();
}

function render() {
  document.getElementById("scoreboard").innerHTML = score;

  ctx.drawImage(bg, 10, 0);

  for (var i = 0; i < bones.length; i++) {
    ctx.drawImage(topBone, bones[i].x, bones[i].y);
    ctx.drawImage(botBone, bones[i].x, bones[i].y + topBone.height + flyGap);
  }

  ctx.save();
  ctx.translate(
    dinoPos_X + hitboxWidth / 2 + spriteOffset_X,
    dinoPos_Y + hitboxHeight / 2
  );
  ctx.rotate(dinoAngle * Math.PI / 180);
  ctx.drawImage(
    dinoState,
    -hitboxWidth / 2,
    -hitboxHeight / 2 + spriteOffset_Y
  );
  ctx.restore();

  // Show hitbox
  // ctx.fillStyle = "#ff00ff";
  // ctx.fillRect(dinoPos_X, dinoPos_Y, hitboxWidth, hitboxHeight);

  ctx.drawImage(fg, fgPos_X, canvas.height - fg.height);
  ctx.drawImage(fg, fgPos_X + fg.width, canvas.height - fg.height);

  window.requestAnimationFrame(update);

  if(score==17){
    alert("Ganaste, FELICITACIONES");
    window.location.href = "ticket.html";
  }
}

document.addEventListener("keydown", function(e) {
  var char = e.which || e.keyCode;
  if (char == 32 || char == 38) {
    e.preventDefault();
    playerInput();
  }
});

document.addEventListener("touchstart", function() {
  playerInput();
});

document.getElementById("replay").addEventListener("click", function() {
  replay();
});

update();