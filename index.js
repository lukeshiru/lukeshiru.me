"use strict";
exports.__esModule = true;
var compression = require("compression");
var express = require("express");
var helmet = require("helmet");
var settings_1 = require("./settings");
/**
 * Express App
 */
var app = express();
app
    .disable("x-powered-by")
    .use(helmet())
    .use(compression({ level: 9 }))
    .use(express.static("static"))
    .get("*", function (request, response) {
    response.sendFile("static/index.html", { root: "." });
})
    .set("Content-Security-Policy", settings_1.cors)
    .set("X-Content-Security-Policy", settings_1.cors)
    .set("Cache-Control", "max-age=31536000, private")
    .set("Pragma", "public")
    .set("Vary", "Accept-Encoding")
    .listen(settings_1.port, settings_1.host, function () {
    console.log("Listening to port " + settings_1.host + ":" + settings_1.port);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUMzQyxpQ0FBbUM7QUFDbkMsK0JBQWlDO0FBQ2pDLHVDQUE4QztBQUU5Qzs7R0FFRztBQUNILElBQU0sR0FBRyxHQUFvQixPQUFPLEVBQUUsQ0FBQztBQUV2QyxHQUFHO0tBRUQsT0FBTyxDQUFDLGNBQWMsQ0FBQztLQUd2QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7S0FHYixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FHOUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzNCLFFBQVEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7S0FHRCxHQUFHLENBQUMseUJBQXlCLEVBQUUsZUFBSSxDQUFDO0tBQ3BDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxlQUFJLENBQUM7S0FHdEMsR0FBRyxDQUFDLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQztLQUdqRCxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztLQUd2QixHQUFHLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDO0tBRzlCLE1BQU0sQ0FBQyxlQUFJLEVBQUUsZUFBSSxFQUFFO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLGVBQUksU0FBSSxlQUFNLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUMsQ0FBQyJ9