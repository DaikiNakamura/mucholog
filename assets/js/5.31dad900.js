(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("チュートリアルに沿って、本ブログをGitHub Pagesに\nデプロイするまでの流れをメモしておきます。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("以下のディレクトリ構成を用いて、作業を進めます。(チュートリアル通り)")]),t._v(" "),t._m(8),s("p",[t._v("肝心のConfigFile")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),s("p",[t._v("おそらく、"),s("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/"),s("OutboundLink")],1),t._v("で表示確認ができるはずです。"),s("br"),t._v("\nちなみに、ホットリロードに対応しているため変更内容が都度ページに反映されます。"),s("br"),t._v("\nこの記事を書いてるときも、隣のブラウザにどんどん反映されてってます！")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("ビルドしてみます。")]),t._v(" "),t._m(14),s("p",[t._v(".vuepressフォルダの中にdistが出力されます。")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("distの内容をgithubのリポジトリにPushします。"),s("br"),t._v("\nその際、Pagesの設定を変えておきます。"),s("br"),t._v(" "),s("a",{attrs:{href:"https://daikinakamura.github.io/mucholog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://{ユーザ名}.github.io/{リポジトリ名}/"),s("OutboundLink")],1),t._v("にアクセスします。")]),t._v(" "),s("p",[t._v("見れましたか！？（反映には少し時間がかかります。）")]),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"try-using-the-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#try-using-the-vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" Try using the VuePress!!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-install-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-vuepress","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. install VuePress")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("VuePressをグローバルにインストールします。"),e("br"),this._v(" "),e("code",[this._v("-D")]),this._v("を使ってprojectごとにインストールしてもOK!!")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install -g vuepress\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-create-package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-package-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. create Package.json")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("無くてもいいかな？とは思いますが、package.jsonをプロジェクト直下に作成します。"),e("br"),this._v("\n内容は以下のとおりです。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-create-config-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-config-file","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. create Config File")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".\n├─ docs\n│  ├─ README.md\n│  ├─ vue\n│     └─ 20180806_tryVuePress.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("module.exports = {\n\tbase: '/mucholog/', // Base URLの変更（これ書かないとGitHubPagesで正常に動きません）\n\ttitle: 'Mucho Log...',\n\tdescription: 'mucho\\'s blog',\n\thead: [　// 各ページのhead設定\n        ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]\n\t],\n    themeConfig: { // テーマ設定\n\t    sidebar: [ // サイドバーの設定\n            {\n                title: 'MyBlog',\n                collapsable: false,\n                children: [\n                    '/'\n                ]\n            },\n            {\n                title: 'Vue',\n                collapsable: true,\n                children: [\n                    'vue/20180806_tryVuePress'\n                ]\n            }\n        ],\n        lastUpdated: 'Last Updated'\n    }\n};\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[this._v("#")]),this._v(" run")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("ローカルでの動作確認をしてみます。"),e("br"),this._v("\n2で設定したscriptを叩いてみます。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm run docs:dev\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[this._v("#")]),this._v(" build")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm run docs:build\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy","aria-hidden":"true"}},[this._v("#")]),this._v(" deploy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"memo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memo","aria-hidden":"true"}},[this._v("#")]),this._v(" memo...")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("sidebarを作るのが面倒（自動化したい）")]),this._v(" "),e("li",[this._v("blogサポートを待ったほうが良かったかも感")]),this._v(" "),e("li",[this._v("頑張って続けてみる")])])}],!1,null,null,null);e.default=r.exports}}]);