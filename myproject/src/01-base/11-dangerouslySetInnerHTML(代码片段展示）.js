import React,{Component} from "react"

 export default class Navtop extends Component{
    state={
        myhtml:`<head>
        <meta charset="utf-8" />
        <!-- Required CDN's -->
        <link rel="stylesheet"
              href=
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src=
    "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
      </script>
        <script src=
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">
      </script>
    </head>
    <style>
        .container-fluid {
            background-color: #ffffff;
            border-radius: 8px;
            border: 1px solid lightgrey;
            padding: 16px;
            -webkit-box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.75);
        }
          
        .input-group {
            width: 80%;
            height: auto;
            padding: 4px;
        }
          
        .progress {
            height: 4px;
        }
          
        .progress-bar {
            background-color: green;
        }
    </style>
      
    <body>
        <br>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">   </div>
                <div class="col-sm-6">
                    <div class="container-fluid">
                        <center>
                            <h2 class="text-success">
                              Enter Password:
                          </h2>
                            <br>
                            <br>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                      <i class="glyphicon glyphicon-user">
                                      </i>
                                  </span>
                                    <input id="email" 
                                           type="text" 
                                           class="form-control" 
                                           name="email" 
                                           placeholder="User-Email">
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon">
                                      <i class="glyphicon glyphicon-lock">
                                      </i>
                                  </span>
                                    <input id="password" 
                                           type="password" 
                                           class="form-control" 
                                           name="password" 
                                           placeholder="Enter Password">
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="progress">
                                    <div class="progress-bar" 
                                         role="progressbar" 
                                         aria-valuenow="0" 
                                         aria-valuemin="0" 
                                         aria-valuemax="100" 
                                         style="width:0%">
                                    </div>
                                </div>
                            </div>
                            <br>
                            <br>
                            <div class="input-group">
                                <button class="btn btn-success btn-block">
                                  Register Now!
                              </button>
                            </div>
                        </center>
                        <br>
                    </div>
                </div>
                <div class="col-sm-3">   </div>
            </div>
        </div>
      `
            
        
    }
        render()
        {
        return <div>
               <div dangerouslySetInnerHTML={{
                __html:this.state.myhtml
               }}>
               </div>
                 </div>
        }
}