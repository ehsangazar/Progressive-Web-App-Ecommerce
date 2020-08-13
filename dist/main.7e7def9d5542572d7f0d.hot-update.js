/*! For license information please see main.7e7def9d5542572d7f0d.hot-update.js.LICENSE.txt */
webpackHotUpdate("main",{"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/index.css":function(module,exports,__webpack_require__){eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html {\\n  font-size: 62.5%; /* 16px * 62.5 = 10px = 1rem */\\n  box-sizing: border-box;\\n}\\nbody {\\n  font: 1.6rem Helvetica;\\n  height: 100vh;\\n  margin: 0;\\n}\\nbutton {\\n  font-size: 1.6rem;\\n}\\n.full-width {\\n  width: 100%;\\n}\\n#root {\\n  height: 100%;\\n}\\n.grid-container {\\n  display: grid;\\n  grid-template-areas:\\n    'header'\\n    'main'\\n    'footer';\\n  grid-template-columns: 1fr;\\n  grid-template-rows: 5rem 1fr 5rem;\\n  height: 100%;\\n}\\n.header {\\n  grid-area: header;\\n  background-color: #203040;\\n  color: #ffffff;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0.5rem;\\n}\\n.brand a {\\n  color: #ffffff;\\n  font-size: 3rem;\\n  font-weight: bold;\\n  text-decoration: none;\\n}\\n.header-links a {\\n  color: #ffffff;\\n  text-decoration: none;\\n  padding: 1rem;\\n}\\n.header-links a:hover {\\n  color: #ff8000;\\n}\\n.main {\\n  grid-area: main;\\n}\\n.footer {\\n  grid-area: footer;\\n  background-color: #203040;\\n  color: #ffffff;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\na {\\n  text-decoration: none;\\n  transition: 1s;\\n}\\na:hover {\\n  color: #ff8000;\\n}\\n/* Home Screen */\\n.products {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n}\\n.products li {\\n  list-style-type: none;\\n  padding: 0;\\n  flex: 0 1 34rem;\\n  margin: 1rem;\\n  height: 50rem;\\n  border-bottom: 0.1rem #c0c0c0 solid;\\n}\\n.product {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  height: 100%;\\n}\\n.product-name {\\n  font-size: 2rem;\\n  font-weight: bold;\\n}\\n.product-brand {\\n  font-size: 1.2rem;\\n  color: #808080;\\n}\\n.product-price {\\n  font-size: 2rem;\\n  font-weight: bold;\\n}\\n.product-image {\\n  max-width: 34rem;\\n  max-height: 34rem;\\n}\\n.product-rating {\\n  margin-bottom: 1rem;\\n}\\n/* Reviews */\\nul.review {\\n  list-style-type: none;\\n  padding: 0;\\n}\\n.review li {\\n  margin: 1rem;\\n  margin-bottom: 2rem;\\n}\\n.review li > div {\\n  margin: 0.5rem;\\n}\\n\\n/* Rating */\\n.rating span {\\n  color: #ffb901;\\n  font-size: 1.8rem;\\n  margin: 0.1rem;\\n}\\n.rating span:last-child {\\n  color: #444444;\\n  font-size: 1.4rem;\\n}\\na > .rating > span:last-child {\\n  color: #0000ff;\\n}\\n\\n/* Sidebar */\\n\\n.brand button {\\n  font-size: 3rem;\\n  padding: 0.5rem;\\n  background: none;\\n  border: none;\\n  color: #ffffff;\\n  cursor: pointer;\\n}\\n.sidebar {\\n  position: fixed;\\n  transition: all 0.5s;\\n  transform: translateX(-30rem);\\n  width: 30rem;\\n  background-color: #f0f0f0;\\n  height: 100%;\\n}\\n.sidebar.open {\\n  transform: translateX(0);\\n}\\n\\n.sidebar-close-button {\\n  border-radius: 50%;\\n  border: 0.1rem #000000 solid;\\n  width: 3rem;\\n  height: 3rem;\\n  padding: 0.5rem;\\n  font-size: 2rem;\\n  padding-top: 0;\\n  cursor: pointer;\\n  position: absolute;\\n  right: 0.5rem;\\n  top: 1.5rem;\\n}\\n\\n/* Product Details */\\n.details {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  flex-wrap: wrap;\\n  padding: 1rem;\\n}\\n.details-image {\\n  flex: 2 1 60rem;\\n}\\n.details-image img {\\n  max-width: 60rem;\\n  width: 100%;\\n}\\n.details-info {\\n  flex: 1 1 30rem;\\n}\\n.details-action {\\n  flex: 1 1 30rem;\\n}\\n\\n.details-info ul,\\n.details-action ul {\\n  list-style-type: none;\\n  padding: 0;\\n}\\n.details-info li,\\n.details-action li {\\n  margin-bottom: 1rem;\\n}\\n.back-to-result {\\n  padding: 1rem;\\n}\\n.details-action {\\n  border: 0.1rem #808080 solid;\\n  border-radius: 0.5rem;\\n  background-color: #f8f8f8;\\n  padding: 1rem;\\n}\\n.details-action ul li:last-child {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.button {\\n  padding: 1rem;\\n  border: 0.1rem #808080 solid;\\n  border-radius: 0.5rem;\\n  cursor: pointer;\\n}\\n.button:hover {\\n  border: 0.1rem #404040 solid;\\n}\\n.button.primary {\\n  background-color: #f0c040;\\n}\\n.button.secondary {\\n  background-color: #f0f0f0;\\n}\\n.text-center {\\n  text-align: center;\\n}\\n/* Cart */\\n\\n.cart {\\n  display: flex;\\n  flex-wrap: wrap;\\n  margin: 1rem;\\n  align-items: flex-start;\\n}\\n.cart-list {\\n  flex: 3 1 60rem;\\n}\\n.cart-action {\\n  flex: 1 1 20rem;\\n  background-color: #f0f0f0;\\n  border-radius: 0.5rem;\\n  padding: 1rem;\\n}\\n.cart-list-container {\\n  padding: 0;\\n  list-style-type: none;\\n  padding: 1rem;\\n}\\n.cart-list-container li {\\n  display: flex;\\n  justify-content: space-between;\\n\\n  padding-bottom: 1rem;\\n  margin-bottom: 1rem;\\n  border-bottom: 0.1rem #c0c0c0 solid;\\n}\\n.cart-list-container li img {\\n  max-width: 10rem;\\n  max-height: 10rem;\\n}\\n.cart-list-container li:first-child {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n}\\n.cart-image {\\n  flex: 1 1;\\n}\\n.cart-name {\\n  flex: 8 1;\\n}\\n.cart-price {\\n  flex: 1 1;\\n  font-size: 2.5rem;\\n  text-align: right;\\n}\\n\\n/* forms */\\n\\n.form {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n}\\n.form-container {\\n  display: flex;\\n  flex-direction: column;\\n  width: 32rem;\\n  padding: 2rem;\\n  border: 0.1rem #c0c0c0 solid;\\n  border-radius: 0.5rem;\\n  list-style-type: none;\\n}\\n.form-container li {\\n  display: flex;\\n  flex-direction: column;\\n  margin-bottom: 1rem;\\n  margin-top: 1rem;\\n}\\ninput {\\n  padding: 1rem;\\n  border: 0.1rem #c0c0c0 solid;\\n  border-radius: 0.5rem;\\n}\\n\\n/* Products */\\n\\n.product-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n}\\n\\n.content-margined {\\n  margin: 1rem;\\n}\\n\\n.table {\\n  width: 100%;\\n}\\nth {\\n  text-align: left;\\n}\\ntbody > tr:nth-child(odd) {\\n  background-color: #f0f0f0;\\n}\\n\\n/* Checkout Steps */\\n\\n.checkout-steps {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 40rem;\\n  margin: 1rem auto;\\n}\\n.checkout-steps > div {\\n  border-top: 0.3rem #c0c0c0 solid;\\n  color: #c0c0c0;\\n  flex: 1 1;\\n  padding-top: 1rem;\\n}\\n.checkout-steps > div.active {\\n  border-top: 0.3rem #f08000 solid;\\n  color: #f08000;\\n}\\n\\n/* Place Order */\\n\\n.placeorder {\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 1rem;\\n  justify-content: space-between;\\n}\\n.placeorder-info {\\n  flex: 3 1 60rem;\\n}\\n.placeorder-action {\\n  flex: 1 1 20rem;\\n  border: 0.1rem #c0c0c0 solid;\\n  border-radius: 0.5rem;\\n  background-color: #fcfcfc;\\n  padding: 1rem;\\n}\\n.placeorder-info > div {\\n  border: 0.1rem #c0c0c0 solid;\\n  border-radius: 0.5rem;\\n  background-color: #fcfcfc;\\n  padding: 1rem;\\n  margin: 1rem;\\n}\\n.placeorder-info > div:first-child {\\n  margin-top: 0;\\n}\\n.placeorder-action > ul {\\n  padding: 0;\\n  list-style-type: none;\\n}\\n.placeorder-action > ul > li {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-bottom: 1rem;\\n}\\n.placeorder-action > ul > li:last-child {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  color: #c04000;\\n}\\n.placeorder-actions-payment > div {\\n  width: 100%;\\n}\\n\\n/* Profile */\\n\\n.profile {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.profile-info {\\n  flex: 1 1 30rem;\\n}\\n.profile-orders {\\n  flex: 3 1 60rem;\\n}\\n\\n/* admin */\\n.dropdown {\\n  display: inline-block;\\n  position: relative;\\n}\\n.dropdown-content {\\n  position: absolute;\\n  display: none;\\n  right: 0;\\n  padding: 1rem;\\n  list-style-type: none;\\n  z-index: 1;\\n  background-color: #203040;\\n  margin: 0;\\n  margin-top: 0.4rem;\\n}\\n.dropdown:hover .dropdown-content {\\n  display: block;\\n}\\n\\n/* filter */\\n\\n.filter {\\n  display: flex;\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 1rem auto;\\n  max-width: 45rem;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.filter input,\\n.filter button,\\n.filter select {\\n  padding: 1rem;\\n  border-radius: 0.5rem;\\n  border: 0.1rem #c0c0c0 solid;\\n  font-size: 1.6rem;\\n}\\n.categories {\\n  padding: 0;\\n  list-style-type: none;\\n}\\n.categories a {\\n  display: flex;\\n  padding: 1rem;\\n}\\n\\n.categories a:hover {\\n  background-color: #c0c0c0;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src")}});