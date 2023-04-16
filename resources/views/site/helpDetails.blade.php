<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Jehat</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="Description" lang="en" content="open source x/html and css templates">
  <meta name="author" content="mlp design">
  <meta name="robots" content="index, follow">
  
  <link rel="stylesheet" href="{{ asset('public\help\styles1.css')}}">
</head>

<body dir="rtl">
  <!--start wrapper-->
  <div id="wrapper">

    <!--start body-->
    <div id="body">

      <!--start header-->
      <div id="banner">

        <ul id="topnav">
        <li><a href="{{ URL :: to ('/')}}">الرئيسيه</a></li>
          <li><a href="{{ URL :: to ('/aboutUs')}}">من نحن </a></li>
          <li><a href="{{ URL :: to ('/contactUs')}}">تواصل معانا</a></li>
          <li><a href="{{ URL :: to ('/question')}}"> الاسئله الشائعه</a></li>
          <li><a href="{{ URL :: to ('/helpcenter')}}">مركز المساعده</a></li>

          <li>
          <form method="POST" action="{{ URL :: to ('/search')}}"">
          {{ csrf_field() }}                               
            <div class="input-group mb-3">
              <input type="text" class="form-control" name="search"
              placeholder="بحث" aria-label="بحث" required
              aria-describedby="basic-addon1">
            </div>
          </form>

          </li>
        </ul>
        <!-- end menu -->
      </div>
      <!--end of header-->
      <!--start sidebar-->
      <div id="sidebar">

      @foreach($allCat as $data)
        <h2>{{ $data->name_ar}}</h2>
        <ul>
          @foreach($data->child as $child)
          <li>
            <a href="#" target="_self"> {{ $child->name_ar }}</a>
            <ul>
              @foreach ($child->subSub as $ss)
              <li>
                <a href="{{ URL :: to ('/helpcenter' , $ss->id )}}" target="_self"> {{ $ss->name_ar }}</a>
              </li>
              @endforeach
            </ul>
        </li>
          @endforeach

        </ul>
        @endforeach
      </div>
      <!--end of sidebar-->
      <div class="clear"></div>
      <!--start containter-->
      <div id="container">

        <!--start content-->
        <div id="content">




          @foreach($pageData as $data)
          <!--another post item-->
          <div class="item">
            <h1>{{ $data->name_ar}}</h1>

            <h3>{{ $data->title_ar}}</h3>

            <p> <?php echo strip_tags($data->description_ar); ?> </p>
          </div>

          @endforeach



          <!--end of another post item-->
        </div>
        <!--end of content-->

      </div>
      <!--end of container-->




    </div>
    <!--end of body-->


    <div class="clear"></div>

    <!--start footer-->
    <div id="footer" style="text-align: center;">
      <span class="center">2022 &copy;  <a href="#">جهات</a>. جميع الحقوق محفوظه لدى .</span>

      <p class="show-footer">2022 &copy; <a href="#">جهات</a>. جميع الحقوق محفوظه لدى.<br />
    </div>
    <!--end of footer-->

  </div>
  <!--end of wrapper-->




</body>

</html>