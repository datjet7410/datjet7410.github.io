import lume from "lume/mod.ts";
//import svgo from "lume/plugins/svgo.ts";

const site = lume({
    src: "src",
});

//site.use(svgo())

site.copy("assets");

export default site;
