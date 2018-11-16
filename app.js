var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/22_8', function(req, res) {
    res.sendFile(path.join(__dirname + '/22_8/22_8.html'));
})

app.post('/make-comment', function(req,res) {
	res.json({text: req.body.text, by: req.body.name}).status(200)
})

///page={num}/s={snoozed}/p={pinned}
app.get('/threads', function(req, res) {
    res.json({threads: [
            {
                "_id": 
                            "aaaaaaa" ,
                "email": 
                        {
                            "from" : 
                                    {
                                        "firstName": "Filip",
                                        "lastName": "Szamborski",
                                        "picture": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                                    },
                            "date" : "8:05",
                            "title": "Today's meeting opened",
                            "text": "...", 
                        }
            }           
            //...max of 18 more
        ]})
})


app.get('/email', function(req, res) {
    res.json({email: [
            {
                "title": 
                            "Today meetings opened!" ,
                "tags": [
                            {
                                "_id": "taga",
                                "content": "Meetings"
                            } 
                          ],
                "emails": [
                            {
                                "_id": "emaila",
                                "from":  
                                        {
                                            "firstName": "Robert",
                                            "lastName": "Smith",
                                            "picture": "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
                                    },
                                "date" : "Wednesday 6 Mar 17 21:22",
                                "title": "Rules of cooperation",
                                "to": [{}],
                                "cc": [{}],
                                "attachments" : [{}],
                                "text": "Lorem"
                            }
                         ]
            }
            //...max of 18 more
        ]})
})

app.get('/project_list', function(req, res) {
    res.json({project_list: [
            {
                "success": "False",
                "projects": [{
                    "id": "projecta",
                    "date": "August 5 2018",
                    "name": "Students Satisfaction Reports",
                    "purpose": "Checking up on student satisfaction",
                    "numOfMembers": 42,
                    "tags": [
                        "scholarly"
                    ]
                }]
            }     
        ]})
})

app.post('/project', function(req, res) {
    console.log(req.body);
    console.log("Name is", req.body.name);
    console.log("Purpose is", req.body.purpose);
    res.status(200).send("hello");
    // res.json({project: [
    //         {
                
                            
                         
    //         }
    //         //...max of 18 more
    //     ]})
})

app.listen(3000, function(req, res) {
    console.log("Listening on 3000");
})