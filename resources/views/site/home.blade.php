@extends('layouts.appPortal')
@section('content')

<!-- Carousel Start -->
<div class="container-fluid px-0 mb-5">
    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="{{ asset('public/portal/img/s4banner.jpg')}}" alt="Image">
                <div class="carousel-caption">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 text-center">
                                <p class="fs-4 text-white animated slideInRight">اهلا بك في
                                    <strong>شركة الأنظمة الشاملة</strong>
                                </p>
                                <h1 class="display-5 text-white mb-4 animated slideInRight">شركة الأنظمة الشاملة إحدى الشركات الرائدة سريعة النمو .
                                </h1>
                                <a href="{{ URL :: to ('/')}}" class="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">المزيد
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="{{ asset('public/portal/img/s4banner.jpg')}}" alt="Image">
                <div class="carousel-caption">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 text-center">
                                <p class="fs-4 text-white animated slideInLeft"> اهلا بك في <strong> شركة الأنظمة الشاملة </strong>
                                </p>
                                <h1 class="display-5 text-white mb-4 animated slideInLeft">مع شركة الأنظمة الشاملة اوجدنا للاعمال حلول</h1>
                                <a href="{{ URL :: to ('/')}}" class="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">
                                    المزيد</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
<!-- Carousel End -->


<!-- Features Start -->
<div class="container-xxl py-5" id="about">
    <div class="container">
        <div class="row g-0 feature-row">


            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="feature-item border h-100 p-5">
                    <div class="btn-square bg-light rounded-circle mb-4" style="width: 64px; height: 64px;">
                        <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-1.png')}}" alt="Icon">
                    </div>
                    <h5 class="mb-3"> رسالتنا</h5>
                    <p class="mb-0"> أننا لسنا مجرد شركة بالشكل التقليدي لكننا شركاء عمل نتبادل مع عملائنا الأفكار والخبرات، نكرس جهودنا وإمكانياتنا لتحقيق أهدافنا، نسعى دائماً إلى التطوير والتحديث في طريقة أداء عملنا، نجتهد ونتفانى ونؤمن أن العمل الجاد المخلص هو السبيل لتحقيق النجاح.
                    </p>
                </div>
            </div>



            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="feature-item border h-100 p-5">
                    <div class="btn-square bg-light rounded-circle mb-4" style="width: 64px; height: 64px;">
                        <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-5.png')}}" alt="Icon">
                    </div>
                    <h5 class="mb-3"> رؤيةالشركة</h5>
                    <p class="mb-0"> نسعى في شركة الأنظمة الشاملة أن تكون الشركة رائدة في مجال تطوير وتنفيذ حلول الأعمال من خلال تقديم أعلى مستويات الخدمة والأداء والأمن، وأن نضاهي كبرى الشركات العالمية.
                    </p>


                </div>
            </div>




            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="feature-item border h-100 p-5">
                    <div class="btn-square bg-light rounded-circle mb-4" style="width: 64px; height: 64px;">
                        <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-4.png')}}" alt="Icon">
                    </div>
                    <h5 class="mb-3"> أهدافنا</h5>
                    <p class="mb-0">أن نكون من مصاف الشركات الرائدة في إدارة وتطوير حلول الأعمال للشركات عن طريق استغلال وتنظيم وإدارة الثروة البشرية الهائلة التي تتمتع بها الدول العربية من الخريجين والكوادر البشرية المتميزة في جميع الأصعدة والمجالات، .
                    </p>


                </div>
            </div>




        </div>
    </div>
</div>
<!-- Features End -->


<!-- About Start -->
<div class="container-xxl about my-5">
    <div class="container">
        <div class="row g-0">
            <div class="col-lg-6">
                <div class="h-100 d-flex align-items-center justify-content-center" style="min-height: 300px;">
                    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            <div class="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                <div class="bg-white rounded-top p-5 mt-lg-5">
                    <p class="fs-5 fw-medium text-primary">من نحن</p>
                    <h1 class="display-6 mb-4"> إحدى الشركات الرائدة سريعة النمو </h1>
                    <p class="mb-4"> في ظل الثورة التكنولوجية التي يشهدها العالم حالياً وما تواجهه الدول والمجتمعات من تحديات وكذلك ما فرضته المستجدات على الساحة العالمية من تغيير في أنماط المجتمع في عدة جوانب ومن أهمها الحياة الوظيفية والعملية للفرد.
                        وكذلك نوعية وطبيعة الوظائف التي أصبحت متاحة في العديد من الشركات والهيئات واستغلال الثورة التكنولوجية وتطويعها لخدمة الموظف والشركة من خلال تغيير النمط والأسلوب الوظيفي بشكل عام، وآلية ممارسة العمل والمهام والوظيفية للموظفين في الشركات والمؤسسات.
                        وكذلك أن من أهم تجليات العولمة والثورة التكنولوجية الحالية أن ما كان يعد من قبيل السياسات والإجراءات الداخلية أصبحت له أثاره وأبعاده الخارجية ، وأن ما كان يعد من قبيل السياسات والإجراءات الخارجية أصبحت له أثاره وأبعاده الداخلية.

                    </p>
                    <!--div class="row g-5 pt-2 mb-5">
                            <div class="col-sm-6">
                                <img class="img-fluid mb-4" src="{{ asset('public/portal/img/icon/icon-5.png')}}" alt="">
                                <h5 class="mb-3">ادارة خدمات</h5>
                                <span>نقود التغيير للفرد، للمجتمع، للاقتصاد.
                                    نبتكر الحلول بمحاكاة التحديات التي يواجهها الفرد والمجتمع والشركـات</span>
                            </div>
                            <div class="col-sm-6">
                                <img class="img-fluid mb-4" src="{{ asset('public/portal/img/icon/icon-2.png')}}" alt="">
                                <h5 class="mb-3">خبراء متخصصون</h5>
                                <span>نقود التغيير للفرد، للمجتمع، للاقتصاد.
                                    نبتكر الحلول بمحاكاة التحديات التي يواجهها الفرد والمجتمع والشركـات</span>
                            </div>
                        </div-->
                    <a class="btn btn-primary rounded-pill py-3 px-5" href="{{ URL :: to ('/')}}">المزيد</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- About End -->


<!-- Video Modal Start -->
<div class="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content rounded-0">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Youtube Video</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- 16:9 aspect ratio -->
                <div class="ratio ratio-16x9">
                    <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Video Modal End -->


<!-- Service Start -->
<div class="container-xxl py-5" id="services">
    <div class="container">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <p class="fs-5 fw-medium text-primary">خدماتنا</p>
            <h3 class="display-5 mb-5"> خدمات الشركه</h3>
        </div>
        <div class="row g-4">




            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item position-relative h-100">
                    <div class="service-text rounded p-5">
                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 64px; height: 64px;">
                            <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-2.png')}}" alt="Icon">
                        </div>
                        <h5 class="mb-3"> خدمات التوظيف عن بعد </h5>
                        <p class="mb-0">
                            من أكبر التحديات التي تواجه الشركات في حال طلب موظفين بنظام العمل عن بُعد هو عملية الاختيار والتعيين
                        </p>
                    </div>
                    <div class="service-btn rounded-0 rounded-bottom">
                        <a class="text-primary fw-medium" href="#">تصفح المزيد<i class="bi bi-chevron-double-right ms-2"></i></a>
                    </div>
                </div>
            </div>



            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item position-relative h-100">
                    <div class="service-text rounded p-5">
                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 64px; height: 64px;">
                            <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-5.png')}}" alt="Icon">
                        </div>
                        <h5 class="mb-3"> الخدمات المالية والإدارية </h5>
                        <p class="mb-0">
                            تقدم شركة الأنظمة الشاملة باقة مميزة من الخدمات المالية ( تسجيل القيود والمعاملات اليومية – الحسابات العامة - المراجعة المالية – إعداد القوائم المالية السنوية
                        </p>
                    </div>
                    <div class="service-btn rounded-0 rounded-bottom">
                        <a class="text-primary fw-medium" href="#">تصفح المزيد<i class="bi bi-chevron-double-right ms-2"></i></a>
                    </div>
                </div>
            </div>



            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item position-relative h-100">
                    <div class="service-text rounded p-5">
                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 64px; height: 64px;">
                            <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-6.png')}}" alt="Icon">
                        </div>
                        <h5 class="mb-3"> خدمات الاستشارات المالية والإدارية </h4>
                            <p class="mb-0">
                                مهما كانت المشكلة معقدة فمن خلال نخبة من مستشارين الأعمال لدينا تستطيع شركة الأنظمة الشاملة الوقوف على المشكلة
                            </p>
                    </div>
                    <div class="service-btn rounded-0 rounded-bottom">
                        <a class="text-primary fw-medium" href="#">تصفح المزيد<i class="bi bi-chevron-double-right ms-2"></i></a>
                    </div>
                </div>
            </div>




            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item position-relative h-100">
                    <div class="service-text rounded p-5">
                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 64px; height: 64px;">
                            <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-7.png')}}" alt="Icon">
                        </div>
                        <h5 class="mb-3"> خدمات التسويق الإلكتروني </h4>
                            <p class="mb-0">
                                تقدم شركة الأنظمة الشاملة خدمة مميزة من خلال باقات التسويق الإلكتروني على جميع برامج التواصل الاجتماعي
                            </p>
                    </div>
                    <div class="service-btn rounded-0 rounded-bottom">
                        <a class="text-primary fw-medium" href="#">تصفح المزيد<i class="bi bi-chevron-double-right ms-2"></i></a>
                    </div>
                </div>
            </div>



            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item position-relative h-100">
                    <div class="service-text rounded p-5">
                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 64px; height: 64px;">
                            <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-8.png')}}" alt="Icon">
                        </div>
                        <h5 class="mb-3"> خدمات التسويق الهاتفي </h4>
                            <p class="mb-0">
                                تقدم شركة الأنظمة الشاملة خدمات التسويق الهاتفي وبلغات متعددة وفقاً لمتطلبات العميل
                            </p>
                    </div>
                    <div class="service-btn rounded-0 rounded-bottom">
                        <a class="text-primary fw-medium" href="#">تصفح المزيد<i class="bi bi-chevron-double-right ms-2"></i></a>
                    </div>
                </div>
            </div>




            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="service-item position-relative h-100">
                    <div class="service-text rounded p-5">
                        <div class="btn-square bg-light rounded-circle mx-auto mb-4" style="width: 64px; height: 64px;">
                            <img class="img-fluid" src="{{ asset('public/portal/img/icon/icon-9.png')}}" alt="Icon">
                        </div>
                        <h5 class="mb-3"> خدمات مركز الاتصالات </h4>
                            <p class="mb-0">
                                تقدم شركة الأنظمة الشاملة أفضل التقنيات لخدمات مركز الاتصال call center
                            </p>
                    </div>
                    <div class="service-btn rounded-0 rounded-bottom">
                        <a class="text-primary fw-medium" href="#">تصفح المزيد<i class="bi bi-chevron-double-right ms-2"></i></a>
                    </div>
                </div>
            </div>



        </div>
    </div>
</div>
<!-- Service End -->


<!-- Project Start -->
<div class="container-xxl pt-5" id="projects">
    <div class="container">

        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <p class="fs-5 fw-medium text-primary">مشاريعنا</p>
            <h3 class="display-5 mb-5">مشاريعنا المميزه</h3>
        </div>
        <div class="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">

            <div class="project-item mb-5">
                <div class="position-relative">
                    <img class="img-fluid" src="{{ asset('public/portal/img/s1.png')}}" alt="">
                    <div class="project-overlay">
                        <a class="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-1.jpg" data-lightbox="project"><i class="fa fa-eye"></i></a>
                        <a class="btn btn-lg-square btn-light rounded-circle m-1" href=""><i class="fa fa-link"></i></a>
                    </div>
                </div>
                <div class="p-4">
                    <a class="d-block h5" href="#">  مشروع1</a>
                    <span>تفاصيل المشروع</span>
                </div>
            </div>


        </div>
    </div>
</div>
<!-- Project End -->
<!-- Quote Start -->
<div class="container-xxl py-5" id="contact">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p class="fs-5 fw-medium text-primary">المساعدة</p>
                <h5 class="display-5 mb-4">هل تحتاج الى الاستفسار عن منتجاتنا ؟ </h5>

                <p>نمتلك فريق تسويقي مبدع، ونستخدم أنسب الاستراتيجيات التسويقية لكل حدث، بجانب أحدث الوسائل والتقنيات العالمية للاتصال بالشرائح المستهدفة؛ وذلك بتطبيق حزمة من الإجراءات التسويقية المترابطة التي تحقق الوصول الكامل للمستهدفات، ومزيداً من الزخم الإعلامي لفعاليات أعمالنا.</p>
                <p class="mb-4">نمتلك فريق تسويقي مبدع، ونستخدم أنسب الاستراتيجيات التسويقية لكل حدث، بجانب أحدث الوسائل والتقنيات العالمية للاتصال بالشرائح المستهدفة؛ وذلك بتطبيق حزمة من الإجراءات التسويقية المترابطة التي تحقق الوصول الكامل للمستهدفات، ومزيداً من الزخم الإعلامي لفعاليات أعمالنا.</p>
                <a class="d-inline-flex align-items-center rounded overflow-hidden border border-primary" href="">
                    <span class="btn-lg-square bg-primary" style="width: 55px; height: 55px;">
                        <i class="fa fa-phone-alt text-white"></i>
                    </span>
                    <span class="fs-5 fw-medium mx-4">00000</span>
                </a>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <h2 class="mb-4">بيانات المساعدة</h2>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                            <label for="name">الاسم</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="mail" placeholder="Your Email">
                            <label for="mail">البريد الالكتروني</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="mobile" placeholder="Your Mobile">
                            <label for="mobile">رقم الجوال</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-floating">
                            <select class="form-select" id="service">
                                <option selected>التسويق الرقمي</option>
                                <option value="">التسويق الإجتماعي</option>
                                <option value="">تسويق المحتوى</option>
                                <option value="">التسويق عبر البريد الإلكتروني</option>
                            </select>
                            <label for="service">اختر الخدمة</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 130px"></textarea>
                            <label for="message">ادخل الرسالة</label>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <button class="btn btn-primary w-100 py-3" type="submit">ارسال</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Quote Start -->


<!-- Team Start -->
<!--div class="container-xxl py-5">
    <div class="container">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <p class="fs-5 fw-medium text-primary">فريق العمل</p>
            <h1 class="display-5 mb-5">الخبراء لدينا على استعداد لمساعدتك</h1>
        </div>
        <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="team-item rounded overflow-hidden pb-4">
                    <img class="img-fluid mb-4" src="img/team-1.jpg" alt="">
                    <h5>Alex Robin</h5>
                    <span class="text-primary">Founder & CEO</span>
                    <ul class="team-social">
                        <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="team-item rounded overflow-hidden pb-4">
                    <img class="img-fluid mb-4" src="img/team-2.jpg" alt="">
                    <h5>Adam Crew</h5>
                    <span class="text-primary">Co Founder</span>
                    <ul class="team-social">
                        <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="team-item rounded overflow-hidden pb-4">
                    <img class="img-fluid mb-4" src="img/team-3.jpg" alt="">
                    <h5>Boris Johnson</h5>
                    <span class="text-primary">Executive Manager</span>
                    <ul class="team-social">
                        <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div class="team-item rounded overflow-hidden pb-4">
                    <img class="img-fluid mb-4" src="img/team-4.jpg" alt="">
                    <h5>Robert Jordan</h5>
                    <span class="text-primary">Digital Marketer</span>
                    <ul class="team-social">
                        <li><a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a class="btn btn-square" href=""><i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div-->
<!-- Team End -->


<!-- Testimonial Start -->
<!--div class="container-xxl pt-5">
    <div class="container">
        <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
            <p class="fs-5 fw-medium text-primary">اراء العملاء</p>
            <h1 class="display-5 mb-5">ماذا يقول العملاء عن خدماتنا</h1>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                <img class="mb-4" src="img/testimonial-3.jpg" alt="">
                <p class="mb-4">
                    أتقدم بالشكر الجزيل الى مجموعة حلول الاعمال على التميز في 2030. أرجو لكم التوفيق والسداد ونلتقي بكم في مزيد من النجاحات<br></br></p>
                <h5>اسم العميل</h5>
                <span class="text-primary">ساره</span>
            </div>
            <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                <img class="mb-4" src="img/testimonial-2.jpg" alt="">
                <p class="mb-4"> أتقدم بالشكر الجزيل الى مجموعة حلول الاعمال على التميز في 2030. أرجو لكم التوفيق والسداد ونلتقي بكم في مزيد من النجاحات<br></br></p>
                <h5>اسم العميل</h5>
                <span class="text-primary">سعيد</span>
            </div>
            <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                <img class="mb-4" src="img/testimonial-3.jpg" alt="">
                <p class="mb-4"> أتقدم بالشكر الجزيل الى مجموعة حلول الاعمال على التميز في 2030. أرجو لكم التوفيق والسداد ونلتقي بكم في مزيد من النجاحات<br></br></p>
                <h5>اسم العميل</h5>
                <span class="text-primary">عبد العزيز</span>
            </div>
            <div class="testimonial-item rounded p-4 p-lg-5 mb-5">
                <img class="mb-4" src="img/testimonial-2.jpg" alt="">
                <p class="mb-4"> أتقدم بالشكر الجزيل الى مجموعة حلول الاعمال على التميز في 2030. أرجو لكم التوفيق والسداد ونلتقي بكم في مزيد من النجاحات<br></br></p>
                <h5>اسم العميل</h5>
                <span class="text-primary">فاطمة</span>
            </div>
        </div>
    </div>
</div-->
<!-- Testimonial End -->





@endsection