import { getNode, insertLast } from "kind-tiger";
import "@/style/style.css";
import { btn } from "@/style/style.module.css";
import santa from "@/assets/santa.png";

const app = getNode("#app");

console.log(app);

const template = /* HTML */ `
  <figure class="container">
    <img style="width:30vw" src=${santa} alt="" />
    <figcaption>산타 모자를 쓴 호랑이</figcaption>
  </figure>
  <button type="button" class=${btn}>BUTTON</button>
`;

insertLast(app, template);
