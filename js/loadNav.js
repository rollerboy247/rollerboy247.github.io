document.getElementById("navigation").innerHTML = '<nav class="navbar navbar-default navbar-fixed-top" style="border: 0px; z-index: 2000"><div class="container-fluid" style="display: inline;"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand text-primary" href="index.html">Detours</a></div><div class="collapse navbar-collapse" id="myNavbar"><ul class="nav navbar-nav"><li><a href="index.html">Home</a></li><li class="dropdown"><a class="dropdown-toggle" href="#" style="color: #007bff;">Our Tours</a><ul class="dropdown-menu"><li><a href="#">San Francisco</a></li><li><a href="#">Washington D.C.</a></li><li><a href="#">Cambridge</a></li><li><a href="#">Vancouver</a></li><li><a href="#">Kyoto</a></li><li><a href="#">Hong Kong</a></li><li><a href="#">Uganda</a></li></ul></li><li class="dropdown"><a class="dropdown-toggle" href="#" style="color: #007bff;">Meet Our Agents</a><ul class="dropdown-menu"><li><a href="#">Todd Brotze</a></li><li><a href="#">Thomas Zumberge</a></li><li><a href="#">Karen Ha</a></li><li><a href="#">John Li</a></li><li><a href="#">Jason Wu</a></li><li><a href="#">Anthony Trau</a></li><li><a href="#">John Hosmillo</a></li></ul></li><li><a href="#">Help</a></li></ul><ul class="nav navbar-nav navbar-right"><li class="nav-li"><a href="" class="btn" data-toggle="modal" data-target="#modalRegisterForm"><span class="glyphicon glyphicon-user"></span>Sign Up</a></li><li class="nav-li"><a href="" class="btn" data-toggle="modal" data-target="#modalLoginForm"><span class="glyphicon glyphicon-log-in"></span>Log in</a></li></ul></div></div></nav><!--Modal:Login--><div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index:3000;"><div class="modal-dialog cascading-modal" role="document"><!--Content--><div class="modal-content"><!--Modal cascading tabs--><div class="modal-c-tabs"><!-- Nav tabs --><ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i class="glyphicon glyphicon-log-in mr-1"></i>Login</a></li></ul><!-- Tab panels --><div class="tab-content"><!--Panel 7--><div class="tab-pane fade in show active" id="panel7" role="tabpanel"><!--Body--><div class="modal-body mb-1"><div class="md-form form-sm mb-5"><i class="fas fa-envelope prefix"></i><input type="email" id="modalLRInput10" class="form-control form-control-sm validate"/><label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label></div><div class="md-form form-sm mb-4"><i class="fas fa-lock prefix"></i><input type="password" id="modalLRInput11" class="form-control form-control-sm validate"/><label data-error="wrong" data-success="right" for="modalLRInput11">Your password</label></div><div class="text-center mt-2"><button class="btn btn-info bg-primary">Log in<i class="fas fa-sign-in ml-1"></i></button></div></div><!--Footer--><div class="modal-footer"><div class="options text-center text-md-right mt-1"><p>Not a member?<a href="#" class="text-primary">Sign Up</a></p><p>Forgot<a href="#" class="text-primary">Password?</a></p></div><button type="button" class="btn btn-outline-info ml-auto" data-dismiss="modal">Close</button></div></div><!--/.Panel 7--></div></div></div><!--/.Content--></div></div><!--Modal:Login/Register Form--><!--Modal:Register Form--><div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="z-index: 3000;"><div class="modal-dialog cascading-modal" role="document"><!--Content--><div class="modal-content"><!--Modal cascading tabs--><div class="modal-c-tabs"><!-- Nav tabs --><ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist"><li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>Register</a></li></ul><!-- Tab panels --><div class="tab-content"><!--Panel 8--><div class="tab-pane fade in show active" id="panel8" role="tabpanel"><!--Body--><div class="modal-body"><div class="md-form form-sm mb-5"><i class="fas fa-envelope prefix"></i><input type="email" id="modalLRInput12" class="form-control form-control-sm validate"/><label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label></div><div class="md-form form-sm mb-5"><i class="fas fa-lock prefix"></i><input type="password" id="modalLRInput13" class="form-control form-control-sm validate"><label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label></div><div class="md-form form-sm mb-4"><i class="fas fa-lock prefix"></i><input type="password" id="modalLRInput14" class="form-control form-control-sm validate"><label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password</label></div><div class="text-center form-sm mt-2"><button class="btn btn-info bg-primary">Sign up<i class="fas fa-sign-in ml-1"></i></button></div></div><!--Footer--><div class="modal-footer"><div class="options text-right"><p class="pt-1">Already have an account?<a href="#" class="text-primary">Log In</a></p></div><button type="button" class="btn btn-outline-info ml-auto" data-dismiss="modal">Close</button></div></div><!--/.Panel 8--></div></div></div><!--/.Content--></div></div><!--Modal:Login/Register Form-->'