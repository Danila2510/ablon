import { Router } from "express";
const siteRouters = Router();
siteRouters.get("/", (req, res) => {
    res.render("home", {title: "My favorite thing to do is play games. I really like playing casual games because they help me relax and feel morbid."})
});
siteRouters.get ("/games", (req, res) => {
    res.render("contacts", { title: "I like play Dark Souls and Grand The Auto"  })
});
siteRouters.get ("/reason", (req, res) => {
    res.render("reason", {title: "It's a wonderful time spent in peace and quiet."})
});
export default siteRouters