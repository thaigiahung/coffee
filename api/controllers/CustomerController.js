/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var mixpanel = sails.config.mixpanel;
var dump_user = [
		   {
		      "name":"Thuy An",
		      "phone":"84983326253",
		      "email":"hellokirty.ftu@gmail.com",
		      "dob":"1992-03-21",
		      "gender":false,
		      "fb_id":"100000405631112",
		      "fb":{
		         "birthday":"03\/21\/1992",
		         "email":"hellokirty.ftu@gmail.com",
		         "gender":"female",
		         "id":"100000405631112",
		         "name":"Thuy An",
		         "name_format":"{first} {last}",
		         "first_name":"An",
		         "last_name":"Thuy",
		         "work":[
		            {
		               "employer":{
		                  "id":"490202397661398",
		                  "name":"Sea & Air Freight International (SAFI)"
		               },
		               "location":{
		                  "id":"106388046062960",
		                  "name":"Hanoi, Vietnam"
		               },
		               "position":{
		                  "id":"138276726211977",
		                  "name":"Logistics Officer"
		               },
		               "start_date":"2013-01-01"
		            }
		         ],
		         "picture":{
		            "data":{
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t1.0-1\/c0.0.100.100\/p100x100\/1463599_663728846983964_1891508079_a.jpg",
		               "width":100,
		               "height":100,
		               "is_silhouette":false
		            }
		         }
		      }
		   },
		   {
		      "name":"Hoainam Nguyen",
		      "phone":"84939904474",
		      "email":"hoainam5041@gmail.com",
		      "dob":"1990-08-15",
		      "gender":true,
		      "fb_id":"100008069886343",
		      "fb":{
		         "birthday":"08\/15\/1990",
		         "email":"hoainam5041@gmail.com",
		         "gender":"male",
		         "id":"100008069886343",
		         "name":"Hoainam Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Hoainam",
		         "last_name":"Nguyen",
		         "picture":{
		            "data":{
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/p100x100\/969263_1379533002325683_852189523_a.jpg",
		               "width":100,
		               "height":100,
		               "is_silhouette":false
		            }
		         }
		      }
		   },
		   {
		      "name":"V\u00e2n Nguy\u1ec5n",
		      "phone":"841666330190",
		      "email":"hoalytvy@yahoo.com",
		      "dob":"1992-04-22",
		      "gender":false,
		      "fb_id":"100000606013421",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/p100x100\/1891100_780681555295371_1088541108_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"04\/22\/1992",
		         "email":"hoalytvy@yahoo.com",
		         "gender":"female",
		         "id":"100000606013421",
		         "name":"V\u00e2n Nguy\u1ec5n",
		         "name_format":"{first} {last}",
		         "first_name":"V\u00e2n",
		         "last_name":"Nguy\u1ec5n",
		         "work":[
		            {
		               "employer":{
		                  "id":"482265531892856",
		                  "name":"Spa D\u00e1ng Ng\u1ecdc"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Nguy\u1ec5n Vi\u1ec7t Ho\u00e0ng H\u00e0",
		      "phone":"84914003333",
		      "email":"hoanghacack@yahoo.com",
		      "dob":"1983-04-20",
		      "gender":true,
		      "fb_id":"1639595383",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc1\/t1.0-1\/p100x100\/1891031_10202298869466679_332704273_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"04\/20\/1983",
		         "email":"hoanghacack@yahoo.com",
		         "gender":"male",
		         "id":"1639595383",
		         "name":"Nguy\u1ec5n Vi\u1ec7t Ho\u00e0ng H\u00e0",
		         "name_format":"{first} {last}",
		         "first_name":"H\u00e0",
		         "last_name":"Nguy\u1ec5n Vi\u1ec7t Ho\u00e0ng",
		         "work":[
		            {
		               "employer":{
		                  "id":"578985882142905",
		                  "name":"\u0110\u1ed3n C\u00f4ng An C\u1eeda Kh\u1ea9u S\u00e2n Bay T\u00e2n S\u01a1n Nh\u1ea5t"
		               },
		               "position":{
		                  "id":"109396455744864",
		                  "name":"Police Officer"
		               },
		               "start_date":"2003-01-01"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"110201695697526",
		                  "name":"Tan Son Nhat International Airport"
		               },
		               "start_date":"2003-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"\u0110\u1ea1i Tr\u1ea7n",
		      "phone":"84905098928",
		      "email":"kamykanze_bmt@yahoo.com",
		      "dob":"1988-06-01",
		      "gender":true,
		      "fb_id":"100000237637964",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/p100x100\/1798792_741455902538991_903692007_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"06\/01\/1988",
		         "email":"kamykanze_bmt@yahoo.com",
		         "gender":"male",
		         "id":"100000237637964",
		         "name":"\u0110\u1ea1i Tr\u1ea7n",
		         "name_format":"{first} {last}",
		         "first_name":"\u0110\u1ea1i",
		         "last_name":"Tr\u1ea7n",
		         "work":[
		            {
		               "employer":{
		                  "id":"98935024630",
		                  "name":"AdMicro"
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Zuhi Sky",
		      "phone":"84935304114",
		      "email":"hand.9sky@gmail.com",
		      "dob":"1994-04-04",
		      "gender":false,
		      "fb_id":"100001467620690",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/c25.0.100.100\/p100x100\/10255800_704468132945434_431959155229077374_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"04\/04\/1994",
		         "email":"hand.9sky@gmail.com",
		         "gender":"female",
		         "id":"100001467620690",
		         "name":"Zuhi Sky",
		         "name_format":"{first} {last}",
		         "first_name":"Zuhi",
		         "last_name":"Sky",
		         "work":[
		            {
		               "employer":{
		                  "id":"277499882554",
		                  "name":"CYM Group"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"153164784704106",
		                  "name":"Ban \u0111\u1ed1i ngo\u1ea1i"
		               },
		               "start_date":"2012-12-31"
		            },
		            {
		               "employer":{
		                  "id":"246011435421041",
		                  "name":"Ti\u1ebfp L\u1eeda T\u00e0i N\u0103ng"
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"le van",
		      "phone":"84916425979",
		      "email":"lethanhvan274@gmail.com",
		      "dob":"1989-04-27",
		      "gender":false,
		      "fb_id":"100003046974931",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/p100x100\/10320544_750899864928583_2885877701728300379_a.jpg?oh=5b042e29c566c8f2e1d6ae7f12b7278b&oe=540D9974&__gda__=1412280009_91dd43e37b7ebd9463f7b7a82e11460e",
		               "width":100
		            }
		         },
		         "birthday":"05\/09\/1990",
		         "email":"tranhoanghuy0905@gmail.com",
		         "gender":"male",
		         "id":"100000257302707",
		         "name":"Tran Hoang Huy",
		         "name_format":"{first} {last}",
		         "first_name":"Tran Hoang Huy",
		         "last_name":"Huy",
		         "work":[
		            {
		               "employer":{
		                  "id":"114159085260961",
		                  "name":"Ninh H\u00f2a, Kh\u00e1nh H\u00f2a, Vietnam"
		               }
		            },
		            {
		               "employer":{
		                  "id":"224067755331",
		                  "name":"Information Technology - HCMUS"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Khoi Nguyen",
		      "phone":"84989226954",
		      "email":"anhhungxadieuuit@gmail.com",
		      "dob":"1990-01-29",
		      "gender":true,
		      "fb_id":"100000860056645",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/p100x100\/1536451_648520221853307_663014_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"01\/29\/1990",
		         "email":"anhhungxadieuuit@gmail.com",
		         "gender":"male",
		         "id":"100000860056645",
		         "name":"Khoi Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Khoi",
		         "last_name":"Nguyen",
		         "work":[
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"154808901278325",
		                  "name":"\u0110\u1ea1i h\u1ecdc C\u00f4ng Ngh\u1ec7 Th\u00f4ng Tin"
		               },
		               "position":{
		                  "id":"369818816425223",
		                  "name":"H\u1ed3 Ch\u00ed Minh"
		               },
		               "start_date":"2008-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Trung L\u00ea Ch\u00ed",
		      "phone":"84125372227",
		      "email":"chitrung_it@yahoo.com",
		      "dob":"1988-10-09",
		      "gender":true,
		      "fb_id":"100001775672452",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t1.0-1\/c16.0.100.100\/p100x100\/63719_557396877662830_704577622_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"10\/09\/1988",
		         "email":"chitrung_it@yahoo.com",
		         "gender":"male",
		         "id":"100001775672452",
		         "name":"Trung L\u00ea Ch\u00ed",
		         "name_format":"{first} {last}",
		         "first_name":"Trung",
		         "last_name":"L\u00ea Ch\u00ed",
		         "work":[
		            {
		               "employer":{
		                  "id":"399112033469157",
		                  "name":"POPS Worldwide"
		               }
		            },
		            {
		               "description":"App",
		               "end_date":"2013-01-01",
		               "employer":{
		                  "id":"322094401252290",
		                  "name":"FoodMob VietNam"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"146883511988628",
		                  "name":"Mobile Developer"
		               },
		               "projects":[
		                  {
		                     "id":"589792077739640",
		                     "description":"MXH Food",
		                     "end_date":"2013-01-01",
		                     "name":"MXH Food",
		                     "start_date":"2013-01-01"
		                  }
		               ],
		               "start_date":"2013-01-01"
		            },
		            {
		               "description":"XXX",
		               "end_date":"2013-01-01",
		               "employer":{
		                  "id":"399112033469157",
		                  "name":"POPS Worldwide"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"146883511988628",
		                  "name":"Mobile Developer"
		               },
		               "projects":[
		                  {
		                     "id":"145479705463773",
		                     "description":"Game",
		                     "name":"Flying Monkey"
		                  }
		               ],
		               "start_date":"2012-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Ha Minh Thao",
		      "phone":"84907919060",
		      "email":"haminhthao2108@gmail.com",
		      "dob":"1989-08-21",
		      "gender":true,
		      "fb_id":"100000543408992",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":true,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc1\/t1.0-1\/c34.0.113.113\/s100x100\/252231_1002029915278_1941483569_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"08\/21\/1989",
		         "email":"haminhthao2108@gmail.com",
		         "gender":"male",
		         "id":"100000543408992",
		         "name":"Ha Minh Thao",
		         "name_format":"{first} {last}",
		         "first_name":"Ha",
		         "last_name":"Thao",
		         "work":[
		            {
		               "employer":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Hi\u1ec7p L\u00ea",
		      "phone":"84988757048",
		      "email":"maxtin_steven90@yahoo.com.vn",
		      "dob":"1990-05-25",
		      "gender":true,
		      "fb_id":"100001217061766",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/c0.21.179.179\/s100x100\/10308243_741491865901375_7147638373996746271_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"05\/25\/1990",
		         "email":"maxtin_steven90@yahoo.com.vn",
		         "gender":"male",
		         "id":"100001217061766",
		         "name":"Hi\u1ec7p L\u00ea",
		         "name_format":"{first} {last}",
		         "first_name":"Hi\u1ec7p",
		         "last_name":"L\u00ea",
		         "work":[
		            {
		               "employer":{
		                  "id":"172134942808868",
		                  "name":"VHT"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "start_date":"2014-04-30"
		            },
		            {
		               "end_date":"2014-04-30",
		               "employer":{
		                  "id":"175914138936",
		                  "name":"Fibo | Simple - Effective"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "start_date":"2013-04-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Bo Bup Be",
		      "phone":"84936284663",
		      "email":"boxinh.doll@yahoo.com",
		      "dob":"1993-10-15",
		      "gender":false,
		      "fb_id":"100001657616687",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t1.0-1\/p100x100\/10264975_656832074382040_1336605681830277995_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"10\/15\/1993",
		         "email":"boxinh.doll@yahoo.com",
		         "gender":"female",
		         "id":"100001657616687",
		         "name":"Bo Bup Be",
		         "name_format":"{first} {last}",
		         "first_name":"Bo Bup Be",
		         "last_name":"Be",
		         "work":[
		            {
		               "employer":{
		                  "id":"165031656891083",
		                  "name":"H\u1ecdc vi\u1ec7n H\u00e0ng Kh\u00f4ng Vi\u1ec7t Nam (\u0102n H\u00e0ng - \u1ede Kh\u00f4ng)."
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Phoenix Tran",
		      "phone":"84916245008",
		      "email":"pp.phoenix06@yahoo.com",
		      "dob":"1978-06-20",
		      "gender":false,
		      "fb_id":"100000530178569",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn1\/t1.0-1\/p100x100\/10269494_829047473789584_4624301006748954391_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"06\/20\/1978",
		         "email":"pp.phoenix06@yahoo.com",
		         "gender":"female",
		         "id":"100000530178569",
		         "name":"Phoenix Tran",
		         "name_format":"{first} {last}",
		         "first_name":"Phoenix",
		         "last_name":"Tran"
		      }
		   },
		   {
		      "name":"Nhat Quoc",
		      "phone":"841244946888",
		      "email":"quocnhat2501@gmail.com",
		      "dob":"1980-01-25",
		      "gender":true,
		      "fb_id":"100005826583673",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t1.0-1\/p100x100\/10334287_241076172763267_83225034344458560_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"01\/25\/1980",
		         "email":"quocnhat2501@gmail.com",
		         "gender":"male",
		         "id":"100005826583673",
		         "name":"Nhat Quoc",
		         "name_format":"{first} {last}",
		         "first_name":"Nhat",
		         "last_name":"Quoc",
		         "work":[
		            {
		               "description":"Binh th\u01b0\u01a1ng",
		               "employer":{
		                  "id":"557974624256301",
		                  "name":"nhan vien lai xe"
		               },
		               "location":{
		                  "id":"107751605926185",
		                  "name":"Hue, Vietnam"
		               },
		               "position":{
		                  "id":"117764451700552",
		                  "name":"haha"
		               },
		               "start_date":"2010-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Huynh Canh Thinh",
		      "phone":"84934708777",
		      "email":"thatkiemanhhung2603@gmail.com",
		      "dob":"1987-03-16",
		      "gender":true,
		      "fb_id":"100004494279978",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t1.0-1\/c0.0.100.100\/p100x100\/10173767_281076975385443_8643704127040224895_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"03\/16\/1987",
		         "email":"thatkiemanhhung2603@gmail.com",
		         "gender":"male",
		         "id":"100004494279978",
		         "name":"Huynh Canh Thinh",
		         "name_format":"{first} {last}",
		         "first_name":"Huynh",
		         "last_name":"Thinh"
		      }
		   },
		   {
		      "name":"Pham Hoan Luan",
		      "phone":"84919430891",
		      "email":"phamhoanluan@yahoo.com.vn",
		      "dob":"1991-08-30",
		      "gender":true,
		      "fb_id":"1804498455",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/t1.0-1\/c0.0.100.100\/p100x100\/10300321_10200900080423323_1944407627764881872_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"08\/30\/1991",
		         "email":"phamhoanluan@yahoo.com.vn",
		         "gender":"male",
		         "id":"1804498455",
		         "name":"Pham Hoan Luan",
		         "name_format":"{first} {last}",
		         "first_name":"Pham",
		         "last_name":"Luan",
		         "work":[
		            {
		               "employer":{
		                  "id":"775717292440559",
		                  "name":"ORI Sport"
		               },
		               "location":{
		                  "id":"109205905763791",
		                  "name":"Nha Trang"
		               },
		               "position":{
		                  "id":"141213635903150",
		                  "name":"B\u00e1n h\u00e0ng"
		               },
		               "start_date":"2014-04-09"
		            },
		            {
		               "employer":{
		                  "id":"109205905763791",
		                  "name":"Nha Trang"
		               },
		               "position":{
		                  "id":"230534396992798",
		                  "name":"Business"
		               },
		               "start_date":"2012-10-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Chu\u1ed9t Nguy\u1ec5n XN",
		      "phone":"841207376000",
		      "email":"hanguyen2594@gmail.com",
		      "dob":"1994-08-25",
		      "gender":false,
		      "fb_id":"100007544078689",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/t1.0-1\/c0.0.100.100\/p100x100\/10390160_1426371524290970_6291887079038271251_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"08\/25\/1994",
		         "email":"hanguyen2594@gmail.com",
		         "gender":"female",
		         "id":"100007544078689",
		         "name":"Chu\u1ed9t Nguy\u1ec5n XN",
		         "name_format":"{first} {last}",
		         "first_name":"Chu\u1ed9t",
		         "last_name":"Nguy\u1ec5n XN",
		         "work":[
		            {
		               "employer":{
		                  "id":"165031656891083",
		                  "name":"H\u1ecdc vi\u1ec7n H\u00e0ng Kh\u00f4ng Vi\u1ec7t Nam (\u0102n H\u00e0ng - \u1ede Kh\u00f4ng)."
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Tran Bao Duy",
		      "phone":"84908964954",
		      "email":"manduy2002@yahoo.com",
		      "dob":"1982-12-22",
		      "gender":true,
		      "fb_id":"779101667",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/t1.0-1\/c12.12.155.155\/s100x100\/994508_10151688279236668_33854858_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"12\/22\/1982",
		         "email":"manduy2002@yahoo.com",
		         "gender":"male",
		         "id":"779101667",
		         "name":"Tran Bao Duy",
		         "name_format":"{first} {last}",
		         "first_name":"Tran",
		         "last_name":"Duy"
		      }
		   },
		   {
		      "name":"Tr\u1ea7n \u0110\u1ee9c Anh",
		      "phone":"84938160438",
		      "email":"anh_duc526@yahoo.com",
		      "dob":"1990-10-02",
		      "gender":true,
		      "fb_id":"100000262881146",
		      "fb":{
		         "id":"100000262881146",
		         "name":"Tr\u1ea7n \u0110\u1ee9c Anh",
		         "last_name":"Anh",
		         "first_name":"Tr\u1ea7n",
		         "middle_name":"\u0110\u1ee9c",
		         "gender":"male",
		         "birthday":"10\/02\/1990",
		         "link":"https:\/\/www.facebook.com\/Mantiliny",
		         "email":"anh_duc526@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/s100x100\/10625066_834397013245720_4129928948292968887_n.jpg?oh=5f22332e7e0041d0271ad3f9f4c6381b&oe=54CEF1C9&__gda__=1418300364_da869bdc12ac37de62635927f4013661"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"en_US",
		         "timezone":7
		      }
		   },
		   {
		      "name":"Tuan Tran",
		      "phone":"84906269270",
		      "email":"tuyetlanhsetan@gmail.com",
		      "dob":"1983-11-14",
		      "gender":true,
		      "fb_id":"1015241490",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/p100x100\/1512375_10202093152663076_1386956084_a.jpg?oh=d7a1756d822aff04c2612ea7a822a007&oe=53E442F5&__gda__=1408771682_0398234c0b848de6e3e9a84a2f09b0a9",
		               "width":100
		            }
		         },
		         "birthday":"11\/14\/1983",
		         "email":"tuyetlanhsetan@gmail.com",
		         "gender":"male",
		         "id":"1015241490",
		         "name":"Tuan Tran",
		         "name_format":"{first} {last}",
		         "first_name":"Tuan",
		         "last_name":"Tran",
		         "work":[
		            {
		               "employer":{
		                  "id":"119888608092091",
		                  "name":"VIETSOVPETRO"
		               },
		               "location":{
		                  "id":"104070972963758",
		                  "name":"Vung Tau"
		               },
		               "position":{
		                  "id":"148893168525788",
		                  "name":"XN Van Tai Bien & Cong Tac Lan"
		               },
		               "start_date":"2011-03-01"
		            },
		            {
		               "end_date":"2011-03-01",
		               "employer":{
		                  "id":"650576364967460",
		                  "name":"Aulac Joint Stock Company"
		               },
		               "position":{
		                  "id":"106066409432409",
		                  "name":"Surveyor"
		               },
		               "start_date":"2007-12-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"H\u00e0o \u0110\u1ea1i Gia",
		      "phone":"84909566476",
		      "email":"quycokieukingongao@yahoo.com",
		      "dob":"1989-11-05",
		      "gender":false,
		      "fb_id":"100004175233657",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xaf1\/t1.0-1\/c182.47.595.595\/s100x100\/533114_111900745625766_1726909392_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"11\/05\/1989",
		         "email":"quycokieukingongao@yahoo.com",
		         "gender":"female",
		         "id":"100004175233657",
		         "name":"H\u00e0o \u0110\u1ea1i Gia",
		         "name_format":"{first} {last}",
		         "first_name":"H\u00e0o",
		         "last_name":"Gia",
		         "work":[
		            {
		               "employer":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Teny Little",
		      "phone":"84949243468",
		      "email":"ngoc_quyen_21_08@yahoo.ca",
		      "dob":"1993-08-20",
		      "gender":false,
		      "fb_id":"100000208836333",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/t1.0-1\/p100x100\/10153688_840946999255587_191782212_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"08\/20\/1993",
		         "email":"ngoc_quyen_21_08@yahoo.ca",
		         "gender":"female",
		         "id":"100000208836333",
		         "name":"Teny Little",
		         "name_format":"{first} {last}",
		         "first_name":"Teny",
		         "last_name":"Little"
		      }
		   },
		   {
		      "name":"Tuan Bui",
		      "phone":"84939016860",
		      "email":"tuanbui.sosmart@gmail.com",
		      "dob":"1980-01-01",
		      "gender":true,
		      "fb_id":"100005531193101",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":true,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/c29.0.100.100\/p100x100\/954801_10150002137498316_604636659114323291_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"01\/01\/1980",
		         "email":"tuanbui.sosmart@gmail.com",
		         "gender":"male",
		         "id":"100005531193101",
		         "name":"Tuan Bui",
		         "name_format":"{first} {last}",
		         "first_name":"Tuan",
		         "last_name":"Bui"
		      }
		   },
		   {
		      "name":"Quan Nguyen",
		      "phone":"84919745922",
		      "email":"nguyenquan@sosmart.vn",
		      "dob":"1980-06-05",
		      "gender":true,
		      "fb_id":"100007792922740",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfa1\/t1.0-1\/p100x100\/1779871_1379794322290319_1776384544_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"06\/05\/1982",
		         "email":"nguyenquan@sosmart.vn",
		         "gender":"male",
		         "id":"100007792922740",
		         "name":"Quan Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Quan",
		         "last_name":"Nguyen"
		      }
		   },
		   {
		      "name":"Tony Tien",
		      "phone":"84909259157",
		      "email":"giangvantien86@yahoo.com.vn",
		      "dob":"1986-06-18",
		      "gender":true,
		      "fb_id":"100001570462801",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/p100x100\/1800376_722251667837175_7245421124013032727_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"06\/18\/1986",
		         "email":"giangvantien86@yahoo.com.vn",
		         "gender":"male",
		         "id":"100001570462801",
		         "name":"Tony Tien",
		         "name_format":"{first} {last}",
		         "first_name":"Tony",
		         "last_name":"Tien",
		         "work":[
		            {
		               "employer":{
		                  "id":"226769387477630",
		                  "name":"The Central Vocation of Transport N03"
		               },
		               "location":{
		                  "id":"112395202109485",
		                  "name":"Ho Chi Minh City"
		               },
		               "position":{
		                  "id":"137624209609429",
		                  "name":"Gi\u1ea3ng vi\u00ean"
		               },
		               "start_date":"2011-05-15"
		            },
		            {
		               "end_date":"2011-05-01",
		               "employer":{
		                  "id":"172650616272455",
		                  "name":"Part Staff"
		               },
		               "start_date":"2010-03-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Hien Pham",
		      "phone":"84906783993",
		      "email":"phamngochien257@gmail.com",
		      "dob":"1986-07-25",
		      "gender":false,
		      "fb_id":"100005711916146",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/t1.0-1\/p100x100\/10414628_248564798677249_1614720020029581125_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"07\/25\/1986",
		         "email":"phamngochien257@gmail.com",
		         "gender":"female",
		         "id":"100005711916146",
		         "name":"Hien Pham",
		         "name_format":"{first} {last}",
		         "first_name":"Hien",
		         "last_name":"Pham"
		      }
		   },
		   {
		      "name":"G\u1ea5u V\u0169",
		      "phone":"84933028188",
		      "email":"kakabond119@yahoo.com",
		      "dob":"1988-09-11",
		      "gender":true,
		      "fb_id":"725394527",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/t1.0-1\/p100x100\/10431454_10152486457419528_5696992282080223845_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"09\/11\/1988",
		         "email":"kakabond119@yahoo.com",
		         "gender":"male",
		         "id":"725394527",
		         "name":"G\u1ea5u V\u0169",
		         "name_format":"{first} {last}",
		         "first_name":"G\u1ea5u",
		         "last_name":"V\u0169",
		         "work":[
		            {
		               "employer":{
		                  "id":"184457501763797",
		                  "name":"Th\u1ea3o My Gifts"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"112237825459822",
		                  "name":"Assistant Manager"
		               },
		               "start_date":"2013-12-31"
		            },
		            {
		               "end_date":"2012-12-31",
		               "employer":{
		                  "id":"137952892978533",
		                  "name":"Ng\u00e2n h\u00e0ng \u00c1 Ch\u00e2u ACB"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"112821758735982",
		                  "name":"Staff"
		               },
		               "start_date":"2010-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Phong Tran Tuan",
		      "phone":"84948860094",
		      "email":"kedichinhphuc_89@yahoo.com",
		      "dob":"1989-08-15",
		      "gender":true,
		      "fb_id":"100000054088377",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/t1.0-1\/p100x100\/10409575_800810109930784_7685754995744113623_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"08\/15\/1989",
		         "email":"kedichinhphuc_89@yahoo.com",
		         "gender":"male",
		         "id":"100000054088377",
		         "name":"Phong Tran Tuan",
		         "name_format":"{first} {last}",
		         "first_name":"Phong",
		         "last_name":"Tran Tuan",
		         "work":[
		            {
		               "employer":{
		                  "id":"103141746392428",
		                  "name":"Amway"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Khang Tr\u1ea7n",
		      "phone":"84908091296",
		      "email":"khangtv94@gmail.com",
		      "dob":"1994-03-11",
		      "gender":true,
		      "fb_id":"100002289363043",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/t1.0-1\/c1.43.178.178\/s100x100\/10387344_637279153025058_6715209565910446590_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"03\/11\/1994",
		         "email":"khangtv94@gmail.com",
		         "gender":"male",
		         "id":"100002289363043",
		         "name":"Khang Tr\u1ea7n",
		         "name_format":"{first} {last}",
		         "first_name":"Khang",
		         "last_name":"Tr\u1ea7n",
		         "work":[
		            {
		               "employer":{
		                  "id":"111926488822704",
		                  "name":"Freelancer"
		               },
		               "start_date":"0000-00"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"136738280213",
		                  "name":"Hoa Hoc Tro Magazine"
		               },
		               "projects":[
		                  {
		                     "id":"605525599515874",
		                     "name":"Yan VPop 20 Live Show",
		                     "start_date":"2012-01-01"
		                  },
		                  {
		                     "id":"195404090651338",
		                     "name":"Cool X'Mas Party 22.12.2012",
		                     "start_date":"2012-01-01"
		                  },
		                  {
		                     "id":"495716613875693",
		                     "name":"2Green Tour Show",
		                     "start_date":"2012-01-01"
		                  }
		               ],
		               "start_date":"2012-12-01"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"280305848752726",
		                  "name":"2!Green Tour"
		               },
		               "start_date":"2012-01-01"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"428268667204543",
		                  "name":"Yan VPop 20"
		               },
		               "start_date":"2012-01-01"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"251920618237845",
		                  "name":"Ngoc Nam Phuong Communications"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"141608839196221",
		                  "name":"CTV"
		               },
		               "projects":[
		                  {
		                     "id":"569091389846536",
		                     "name":"Charity Show \"Cu\u1ed9c S\u1ed1ng T\u01b0\u01a1i \u0110\u1eb9p\"",
		                     "start_date":"2012-01-01"
		                  },
		                  {
		                     "id":"1401844536726506",
		                     "name":"Couple Party \"Just Us Two Dinner\"",
		                     "start_date":"2012-01-01"
		                  },
		                  {
		                     "id":"382558018556720",
		                     "name":"H\u1ed9i Th\u1ea3o YBA",
		                     "start_date":"2012-01-01"
		                  }
		               ],
		               "start_date":"2012-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Tho Manh",
		      "phone":"84916464956",
		      "email":"thokct@gmail.com",
		      "dob":"1987-01-25",
		      "gender":true,
		      "fb_id":"100003492908627",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/t1.0-1\/p100x100\/936054_521409437985482_6950563993352612531_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"01\/25\/1987",
		         "email":"thokct@gmail.com",
		         "gender":"male",
		         "id":"100003492908627",
		         "name":"Tho Manh",
		         "name_format":"{first} {last}",
		         "first_name":"Tho",
		         "last_name":"Manh",
		         "work":[
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"438821229538091",
		                  "name":"JUPO.com"
		               },
		               "start_date":"0000-00"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"251683024869298",
		                  "name":"5works"
		               },
		               "start_date":"0000-00"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"183113748233",
		                  "name":"Pentalog"
		               },
		               "location":{
		                  "id":"106388046062960",
		                  "name":"Hanoi, Vietnam"
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"HUY TRAN",
		      "phone":"84938481038",
		      "email":"chitrung_it@yahoo.com",
		      "dob":"3432-12-07",
		      "gender":true,
		      "fb_id":"100001775672452",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/t1.0-1\/c16.0.100.100\/p100x100\/63719_557396877662830_704577622_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"10\/09\/1988",
		         "email":"chitrung_it@yahoo.com",
		         "gender":"male",
		         "id":"100001775672452",
		         "name":"Trung L\u00ea Ch\u00ed",
		         "name_format":"{first} {last}",
		         "first_name":"Trung",
		         "last_name":"L\u00ea Ch\u00ed",
		         "work":[
		            {
		               "employer":{
		                  "id":"399112033469157",
		                  "name":"POPS Worldwide"
		               }
		            },
		            {
		               "description":"App",
		               "end_date":"2013-01-01",
		               "employer":{
		                  "id":"322094401252290",
		                  "name":"FoodMob VietNam"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"146883511988628",
		                  "name":"Mobile Developer"
		               },
		               "projects":[
		                  {
		                     "id":"589792077739640",
		                     "description":"MXH Food",
		                     "end_date":"2013-01-01",
		                     "name":"MXH Food",
		                     "start_date":"2013-01-01"
		                  }
		               ],
		               "start_date":"2013-01-01"
		            },
		            {
		               "description":"XXX",
		               "end_date":"2013-01-01",
		               "employer":{
		                  "id":"399112033469157",
		                  "name":"POPS Worldwide"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"146883511988628",
		                  "name":"Mobile Developer"
		               },
		               "projects":[
		                  {
		                     "id":"145479705463773",
		                     "description":"Game",
		                     "name":"Flying Monkey"
		                  }
		               ],
		               "start_date":"2012-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"K\u00ednh C\u1eadn",
		      "phone":"841689981050",
		      "email":"huaminhquang@gmail.com",
		      "dob":"1990-11-23",
		      "gender":true,
		      "fb_id":"100000082345469",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfa1\/t1.0-1\/c66.66.828.828\/s100x100\/1044772_643867335626005_1558183352_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"11\/23\/1990",
		         "email":"huaminhquang@gmail.com",
		         "gender":"male",
		         "id":"100000082345469",
		         "name":"K\u00ednh C\u1eadn",
		         "name_format":"{first} {last}",
		         "first_name":"K\u00ednh",
		         "last_name":"C\u1eadn",
		         "work":[
		            {
		               "employer":{
		                  "id":"469448983076956",
		                  "name":"appable"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"146883511988628",
		                  "name":"Mobile Developer"
		               },
		               "projects":[
		                  {
		                     "id":"550527961641201",
		                     "name":"Schconnect",
		                     "with":[
		                        {
		                           "id":"1416012785",
		                           "name":"Nha Hoang"
		                        },
		                        {
		                           "id":"100001528280173",
		                           "name":"Anh Kunz"
		                        },
		                        {
		                           "id":"100002138056586",
		                           "name":"GC Kitty Ken"
		                        },
		                        {
		                           "id":"669667936",
		                           "name":"Hai Le"
		                        },
		                        {
		                           "id":"1138275327",
		                           "name":"Joe Nguyen"
		                        }
		                     ]
		                  }
		               ],
		               "start_date":"2012-09-10"
		            },
		            {
		               "end_date":"2012-01-01",
		               "employer":{
		                  "id":"224067755331",
		                  "name":"Information Technology - HCMUS"
		               },
		               "position":{
		                  "id":"102172886490488",
		                  "name":"Student"
		               },
		               "start_date":"2008-08-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Ta L\u00e0 Duy",
		      "phone":"84939482424",
		      "email":"sennacy1709@gmail.com",
		      "dob":"1993-09-17",
		      "gender":true,
		      "fb_id":"100002886723089",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xaf1\/t1.0-1\/c0.0.100.100\/p100x100\/10294240_528202427285977_5682774855307831730_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"09\/17\/1993",
		         "email":"sennacy1709@gmail.com",
		         "gender":"male",
		         "id":"100002886723089",
		         "name":"Ta L\u00e0 Duy",
		         "name_format":"{first} {last}",
		         "first_name":"Ta",
		         "last_name":"Duy",
		         "work":[
		            {
		               "employer":{
		                  "id":"335583293198134",
		                  "name":"We Are vOzer"
		               },
		               "position":{
		                  "id":"105845386115732",
		                  "name":"N\u1eb1m V\u00f9ng"
		               },
		               "start_date":"0000-00"
		            },
		            {
		               "employer":{
		                  "id":"111403155545903",
		                  "name":"Can Tho"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Ti\u1ebfn L\u01b0\u01a1ng",
		      "phone":"84908011022",
		      "email":"tien.sawaco@gmail.com",
		      "dob":"1956-05-14",
		      "gender":true,
		      "fb_id":"551729338",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfa1\/t1.0-1\/p100x100\/1743439_10152167530239339_688105635_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"05\/14\/1956",
		         "email":"tien.sawaco@gmail.com",
		         "gender":"male",
		         "id":"551729338",
		         "name":"Ti\u1ebfn L\u01b0\u01a1ng",
		         "name_format":"{first} {last}",
		         "first_name":"Ti\u1ebfn",
		         "last_name":"L\u01b0\u01a1ng",
		         "work":[
		            {
		               "employer":{
		                  "id":"209060189109284",
		                  "name":"SAWACO"
		               },
		               "start_date":"1991-01-01"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"621061341248388",
		                  "name":"SAIGON WATER CORPORATION"
		               },
		               "start_date":"1991-01-01"
		            },
		            {
		               "employer":{
		                  "id":"446450275439105",
		                  "name":"C\u00f4ng Ty Du Lich Hoa Sen Ch\u00e2u \u00c1 - Asia Lotus Travel"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"zach Hoang",
		      "phone":"841224422096",
		      "email":"zacharial.arc@gmail.com",
		      "dob":"1990-02-22",
		      "gender":true,
		      "fb_id":"1835235380",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/c47.196.546.546\/s100x100\/549911_3839329801818_2036136371_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"02\/22\/1990",
		         "email":"koxi90@gmail.com",
		         "gender":"male",
		         "id":"1835235380",
		         "name":"Nh\u1ea1t To\u1eb9t",
		         "name_format":"{first} {last}",
		         "first_name":"Nh\u1ea1t",
		         "last_name":"To\u1eb9t"
		      }
		   },
		   {
		      "name":"ZachArial Hoang",
		      "phone":"84934934701",
		      "email":"zacharial.arc@gmail.com",
		      "dob":"1990-02-22",
		      "gender":true,
		      "fb_id":"100004217708357",
		      "fb":{
		         "picture":{
		            "data":{
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/t1.0-1\/c36.36.445.445\/s50x50\/485723_114387262045197_809317233_n.jpg",
		               "is_silhouette":false
		            }
		         },
		         "work":[
		            {
		               "position":{
		                  "id":"205491152914169",
		                  "name":"Design-Diver"
		               },
		               "employer":{
		                  "id":"368262509918325",
		                  "name":"Z22 Architecture"
		               },
		               "start_date":"2012-02-22"
		            }
		         ],
		         "id":"100004217708357",
		         "first_name":"ZachArial",
		         "birthday":"02\/22\/1990",
		         "email":"zacharial.arc@gmail.com",
		         "name":"ZachArial Hoang",
		         "last_name":"Hoang",
		         "gender":"male"
		      }
		   },
		   {
		      "name":"Nguyen Ngoc Hung",
		      "phone":"841267082519",
		      "email":"ngoc_hung1991@yahoo.com",
		      "dob":"1991-10-12",
		      "gender":true,
		      "fb_id":"100000146224083",
		      "fb":{
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5.0-1\/1115893_100000146224083_675383650_q.jpg"
		            }
		         },
		         "id":"100000146224083",
		         "first_name":"Nguyen Ngoc",
		         "birthday":"10\/12\/1991",
		         "email":"ngoc_hung1991@yahoo.com",
		         "name":"Nguyen Ngoc Hung",
		         "last_name":"Hung",
		         "gender":"male"
		      }
		   },
		   {
		      "name":"Trinh \u0110\u1ed7",
		      "phone":"84949793908",
		      "email":"manhtrinh.do@gmail.com",
		      "dob":"1983-11-28",
		      "gender":false,
		      "fb_id":"1792844349",
		      "fb":{
		         "id":"1792844349",
		         "name":"Trinh \u0110\u1ed7",
		         "last_name":"\u0110\u1ed7",
		         "first_name":"Trinh",
		         "gender":"female",
		         "birthday":"11\/28\/1983",
		         "link":"https:\/\/www.facebook.com\/manhtrinh.do",
		         "email":"manhtrinh.do@gmail.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/p100x100\/10632699_10201583960719515_2165557143599527909_n.jpg?oh=5b0c7532745dd12a6768041217990d33&oe=54890405&__gda__=1419117972_b361a436a1a0f277a7014d6c1783ee81"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"en_US",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Bo Nguy\u1ec5n",
		      "phone":"84908291667",
		      "email":"kuboz.nhuntai@yahoo.com.vn",
		      "dob":"1996-11-18",
		      "gender":true,
		      "fb_id":"100004973951599",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/t1.0-1\/p100x100\/10250230_285333691642427_1980120634031963248_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"11\/18\/1996",
		         "email":"kuboz.nhuntai@yahoo.com.vn",
		         "gender":"male",
		         "id":"100004973951599",
		         "name":"Bo Nguy\u1ec5n",
		         "name_format":"{first} {last}",
		         "first_name":"Bo",
		         "last_name":"Nguy\u1ec5n"
		      }
		   },
		   {
		      "name":"Dat Nguyen",
		      "phone":"84982139371",
		      "email":"sleepwalker.waking@yahoo.com",
		      "dob":"1993-07-17",
		      "gender":true,
		      "fb_id":"100002631154520",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/p100x100\/10511078_608875402543493_1846275506946638887_n.jpg?oh=94ba953b8d587e5e18de2b551eec3f25&oe=543294DA&__gda__=1412119612_c3d8784c7c3ec16139477ebbb540d0e0",
		               "width":100
		            }
		         },
		         "birthday":"07\/17\/1993",
		         "email":"sleepwalker.waking@yahoo.com",
		         "gender":"male",
		         "id":"100002631154520",
		         "name":"Dat Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Dat",
		         "last_name":"Nguyen"
		      }
		   },
		   {
		      "name":"B\u00e0 M\u1eadp",
		      "phone":"84907020293",
		      "email":"baobinh_02021993@yahoo.com",
		      "dob":"1993-02-02",
		      "gender":false,
		      "fb_id":"100000204641065",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/t1.0-1\/p100x100\/10407543_887529847930495_8007455222828628809_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"02\/02\/1993",
		         "email":"baobinh_02021993@yahoo.com",
		         "gender":"female",
		         "id":"100000204641065",
		         "name":"B\u00e0 M\u1eadp",
		         "name_format":"{first} {last}",
		         "first_name":"B\u00e0",
		         "last_name":"M\u1eadp",
		         "work":[
		            {
		               "employer":{
		                  "id":"115875948437338",
		                  "name":"TIAGS"
		               },
		               "start_date":"2013-01-01"
		            },
		            {
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"103757616330004",
		                  "name":"Vietnam Airlines"
		               },
		               "start_date":"2011-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Hu\u1ef3nh Qu\u00e2n",
		      "phone":"84909432149",
		      "email":"adzfrank.nguyen@yahoo.com",
		      "dob":"1990-12-27",
		      "gender":true,
		      "fb_id":"100005496092257",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/p100x100\/10252172_233615816831620_912321538787686400_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"12\/27\/1990",
		         "email":"adzfrank.nguyen@yahoo.com",
		         "gender":"male",
		         "id":"100005496092257",
		         "name":"Hu\u1ef3nh Qu\u00e2n",
		         "name_format":"{first} {last}",
		         "first_name":"Qu\u00e2n",
		         "last_name":"Hu\u1ef3nh"
		      }
		   },
		   {
		      "name":"Tran Thi Thanh Hang",
		      "phone":"84903600838",
		      "email":"hanghncorp@gmail.com",
		      "dob":"1977-11-03",
		      "gender":false,
		      "fb_id":"100000026406161",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/t1.0-1\/p100x100\/1798789_761536343857239_474150945_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"11\/03\/1977",
		         "email":"hanghncorp@gmail.com",
		         "gender":"female",
		         "id":"100000026406161",
		         "name":"Tran Thi Thanh Hang",
		         "name_format":"{first} {last}",
		         "first_name":"Tran",
		         "last_name":"Hang",
		         "work":[
		            {
		               "description":"Investor Training & People Training",
		               "employer":{
		                  "id":"128194271845",
		                  "name":"Doanh Chu Corporation"
		               },
		               "position":{
		                  "id":"107883465898480",
		                  "name":"General Manager"
		               },
		               "start_date":"2010-01-01"
		            },
		            {
		               "description":"stock & gold trading agency",
		               "end_date":"0000-00",
		               "employer":{
		                  "id":"605072486203286",
		                  "name":"HongNgancorp."
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"173033866042871",
		                  "name":"Vice Chairwoman"
		               },
		               "start_date":"2004-01-01"
		            },
		            {
		               "description":"T\u1ed5 b\u1ed9 m\u00f4n Th\u01b0\u01a1ng v\u1ee5",
		               "end_date":"2007-01-01",
		               "employer":{
		                  "id":"197716183607492",
		                  "name":"\u0110\u1ea1i h\u1ecdc Giao th\u00f4ng v\u1eadn t\u1ea3i TpHCM"
		               },
		               "position":{
		                  "id":"266874550041702",
		                  "name":"Gi\u1ea3ng vi\u00ean khoa Kinh t\u1ebf v\u1eadn t\u1ea3i bi\u1ec3n"
		               },
		               "start_date":"2000-01-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"P\u00e9 P\u1ee3m",
		      "phone":"84937338188",
		      "email":"toliveislove@yahoo.com",
		      "dob":"1987-12-14",
		      "gender":false,
		      "fb_id":"100001417830457",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/p100x100\/1002684_703048116419110_3677176133438706937_a.jpg",
		               "width":100
		            }
		         },
		         "birthday":"12\/14\/1987",
		         "email":"toliveislove@yahoo.com",
		         "gender":"female",
		         "id":"100001417830457",
		         "name":"P\u00e9 P\u1ee3m",
		         "name_format":"{first} {last}",
		         "first_name":"P\u00e9",
		         "last_name":"P\u1ee3m",
		         "work":[
		            {
		               "employer":{
		                  "id":"172134942808868",
		                  "name":"VHT"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Poupee Vu",
		      "phone":"84983861207",
		      "email":"vnmphuong@gmail.com",
		      "dob":"1986-07-12",
		      "gender":false,
		      "fb_id":"736354396",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/m.ak.fbcdn.net\/profile.ak\/hprofile-ak-xfp1\/t1.0-1\/c0.0.100.100\/p100x100\/10308293_10152108028369397_5011527143123800106_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"07\/12\/1986",
		         "email":"vnmphuong@gmail.com",
		         "gender":"female",
		         "id":"736354396",
		         "name":"Poupee Vu",
		         "name_format":"{first} {last}",
		         "first_name":"Poupee",
		         "last_name":"Vu",
		         "work":[
		            {
		               "description":"www.hpt.vn",
		               "employer":{
		                  "id":"489534497808561",
		                  "name":"HPT Vietnam Corporation"
		               },
		               "position":{
		                  "id":"139887269374958",
		                  "name":"PR Specialist"
		               },
		               "start_date":"2009-04-01"
		            },
		            {
		               "employer":{
		                  "id":"146054535455092",
		                  "name":"HPT"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Ho\u00e0ng T\u00e2m",
		      "phone":"84936333300",
		      "email":"viethungthaicty@gmail.com",
		      "dob":"1987-03-19",
		      "gender":true,
		      "fb_id":"100000633351314",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/c4.0.100.100\/p100x100\/1486827_669623909735381_1580277154_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"03\/19\/1987",
		         "email":"viethungthaicty@gmail.com",
		         "gender":"male",
		         "id":"100000633351314",
		         "name":"Ho\u00e0ng T\u00e2m",
		         "name_format":"{first} {last}",
		         "first_name":"Ho\u00e0ng",
		         "last_name":"T\u00e2m",
		         "work":[
		            {
		               "description":"Passionate Mobile Marketing Sharing Center",
		               "end_date":"2013-12-31",
		               "employer":{
		                  "id":"172045239476625",
		                  "name":"VHT Education"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"392384400805744",
		                  "name":"Principal"
		               },
		               "start_date":"2010-08-01"
		            },
		            {
		               "end_date":"2013-12-31",
		               "employer":{
		                  "id":"172134942808868",
		                  "name":"VHT"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "start_date":"2009-08-01"
		            },
		            {
		               "end_date":"2008-12-01",
		               "employer":{
		                  "id":"313281262113256",
		                  "name":"Th\u00e0nh C\u00f4ng Mobile"
		               },
		               "position":{
		                  "id":"143219872360728",
		                  "name":"PR and Marketing Manager"
		               },
		               "start_date":"2007-03-01"
		            },
		            {
		               "end_date":"2010-02-28",
		               "employer":{
		                  "id":"549403435127187",
		                  "name":"Echip mobile"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"112530878796720",
		                  "name":"Part-time reporter"
		               },
		               "start_date":"2007-02-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Hanie Tran",
		      "phone":"84932438539",
		      "email":"popittet_khoaitay@yahoo.com.vn",
		      "dob":"1991-10-01",
		      "gender":false,
		      "fb_id":"100001312444864",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/t1.0-1\/p100x100\/10563002_714357291951346_112973191425720542_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"10\/01\/1991",
		         "email":"popittet_khoaitay@yahoo.com.vn",
		         "gender":"female",
		         "id":"100001312444864",
		         "name":"Hanie Tran",
		         "name_format":"{first} {last}",
		         "first_name":"Hanie",
		         "last_name":"Tran"
		      }
		   },
		   {
		      "name":"Ngay Dep Troi",
		      "phone":"84912913191",
		      "email":"chelsea.pn85@gmail.com",
		      "dob":"1985-04-12",
		      "gender":true,
		      "fb_id":"100003667421234",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/c13.0.100.100\/p100x100\/10559957_499647026834207_70837905039257354_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"04\/12\/1985",
		         "email":"chelsea.pn85@gmail.com",
		         "gender":"male",
		         "id":"100003667421234",
		         "name":"Ngay Dep Troi",
		         "name_format":"{first} {last}",
		         "first_name":"Ngay",
		         "last_name":"Dep Troi",
		         "work":[
		            {
		               "employer":{
		                  "id":"654538437927704",
		                  "name":"Cty TNHH An Qu\u00fd H\u01b0ng"
		               },
		               "start_date":"0000-00"
		            },
		            {
		               "employer":{
		                  "id":"166915310169256",
		                  "name":"CONG TY TNHH AN QUY HUNG"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"\u0110\u00e0o Anh",
		      "phone":"84903850650",
		      "email":"kam.accessory2@yahoo.com",
		      "dob":"1971-06-20",
		      "gender":false,
		      "fb_id":"100007489214999",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/p100x100\/10517974_1447848868808073_2145017832718884846_n.jpg?oh=71400807f39661dc62c85596d39a5ea6&oe=5457851E&__gda__=1414407964_b8e69a3746ad3cf26821da5370d429e6",
		               "width":100
		            }
		         },
		         "birthday":"06\/20\/1971",
		         "email":"kam.accessory2@yahoo.com",
		         "gender":"female",
		         "id":"100007489214999",
		         "name":"\u0110\u00e0o Anh",
		         "name_format":"{first} {last}",
		         "first_name":"\u0110\u00e0o",
		         "last_name":"Anh"
		      }
		   },
		   {
		      "name":"V\u0169 Ki",
		      "phone":"841686695991",
		      "email":"handsomeboy10098@yahoo.com",
		      "dob":"1995-03-07",
		      "gender":true,
		      "fb_id":"100002495707517",
		      "fb":{
		         "id":"100002495707517",
		         "name":"V\u0169 Ki",
		         "last_name":"Ki",
		         "first_name":"V\u0169",
		         "gender":"male",
		         "birthday":"03\/07\/1995",
		         "link":"https:\/\/www.facebook.com\/BaVuTimelessCharm",
		         "email":"handsomeboy10098@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/p100x100\/10659146_708108395949011_7928942378447053804_n.jpg?oh=ea4a451f591a7ea043493641d182f410&oe=54955773&__gda__=1418489206_3b6c02eb12bcb5fa619271e12fe2f628"
		            }
		         },
		         "age_range":{
		            "max":20,
		            "min":18
		         },
		         "locale":"en_US",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Nguy\u1ec5n Thanh V\u0169",
		      "phone":"84909720069",
		      "email":"thanhvuph0702@yahoo.com",
		      "dob":"1983-02-07",
		      "gender":true,
		      "fb_id":"100001506812825",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/c170.50.621.621\/s100x100\/302229_223442351049324_787175444_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"02\/07\/1983",
		         "email":"thanhvuph0702@yahoo.com",
		         "gender":"male",
		         "id":"100001506812825",
		         "name":"Nguy\u1ec5n Thanh V\u0169",
		         "name_format":"{first} {last}",
		         "first_name":"V\u0169",
		         "last_name":"Nguy\u1ec5n Thanh"
		      }
		   },
		   {
		      "name":"Ngoc Nguyen",
		      "phone":"84949667788",
		      "email":"phu.nguyenhong147@gmail.com",
		      "dob":"1986-08-04",
		      "gender":false,
		      "fb_id":"550716285",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/t1.0-1\/p100x100\/156023_10152177543761286_3976156540488919414_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"08\/04\/1986",
		         "email":"phu.nguyenhong147@gmail.com",
		         "gender":"female",
		         "id":"550716285",
		         "name":"Ngoc Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Ngoc",
		         "last_name":"Nguyen"
		      }
		   },
		   {
		      "name":"zach Hoang",
		      "phone":"841225372227",
		      "email":"zacharial.arc@gmail.com",
		      "dob":"1990-02-22",
		      "gender":true,
		      "fb_id":"1835235380",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfa1\/v\/t1.0-1\/c47.196.546.546\/s100x100\/549911_3839329801818_2036136371_n.jpg?oh=54a8d33fcbb4746073f3a9d2978d0a3a&oe=5456A98D&__gda__=1413512012_dbf70f060c2281649df1b63c27f689ad",
		               "width":100
		            }
		         },
		         "birthday":"02\/22\/1990",
		         "email":"koxi90@gmail.com",
		         "gender":"male",
		         "id":"1835235380",
		         "name":"Nh\u1ea1t To\u1eb9t",
		         "name_format":"{first} {last}",
		         "first_name":"Nh\u1ea1t",
		         "last_name":"To\u1eb9t"
		      }
		   },
		   {
		      "name":"Le Thanh Trung",
		      "phone":"84918032667",
		      "email":"thanhtrungyh@gmail.com",
		      "dob":"1974-02-14",
		      "gender":true,
		      "fb_id":"1254212437",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/p100x100\/1937446_10202244697499568_879010589948548679_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"02\/14\/1974",
		         "email":"thanhtrungyh@gmail.com",
		         "gender":"male",
		         "id":"1254212437",
		         "name":"Le Thanh Trung",
		         "name_format":"{first} {last}",
		         "first_name":"Le",
		         "last_name":"Trung",
		         "work":[
		            {
		               "employer":{
		                  "id":"552204461512664",
		                  "name":"PV DRILLING"
		               },
		               "location":{
		                  "id":"110041405685472",
		                  "name":"V\u0169ng T\u00e0u"
		               },
		               "position":{
		                  "id":"107629839267064",
		                  "name":"Engineer"
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Quy\u00ean L\u00ea",
		      "phone":"841885578847",
		      "email":"quyen.lekim2013@gmail.com",
		      "dob":"1994-10-09",
		      "gender":false,
		      "fb_id":"100006470103752",
		      "fb":{
		         "id":"100006470103752",
		         "name":"Quy\u00ean L\u00ea",
		         "last_name":"L\u00ea",
		         "first_name":"Quy\u00ean",
		         "gender":"female",
		         "birthday":"10\/09\/1994",
		         "link":"https:\/\/www.facebook.com\/profile.php?id=100006470103752",
		         "email":"quyen.lekim2013@gmail.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/p100x100\/10629688_1663660783859576_8736878822258040637_n.jpg?oh=d7486ece69bc17dccfcc63908eb01059&oe=548E82EC&__gda__=1419558784_4515eb8408df44a5609a5c34c50f5fb8"
		            }
		         },
		         "age_range":{
		            "max":20,
		            "min":18
		         },
		         "locale":"vi_VN",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Vani Tran",
		      "phone":"84905500703",
		      "email":"ngoctrangstar@gmail.com",
		      "dob":"1990-11-28",
		      "gender":false,
		      "fb_id":"100000131085654",
		      "fb":{
		         "id":"100000131085654",
		         "name":"Vani Tran",
		         "last_name":"Tran",
		         "first_name":"Vani",
		         "gender":"female",
		         "birthday":"11\/28\/1990",
		         "link":"https:\/\/www.facebook.com\/vanitran9x",
		         "email":"ngoctrangstar@gmail.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/v\/t1.0-1\/p100x100\/10592791_908663012481393_2206090955799801763_n.jpg?oh=78669fb58574e0af9c615c2a21bcb932&oe=54A2A789&__gda__=1422924002_6ce4e05c9c46839027579f07ffb7f541"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"vi_VN",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"H\u01b0\u01a1ng Miu",
		      "phone":"84945652188",
		      "email":"chongemdivang2003@yahoo.com",
		      "dob":"1987-02-10",
		      "gender":false,
		      "fb_id":"100003961058701",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/p100x100\/10477938_429139023894796_5385996506477122571_n.jpg?oh=58f48b477b08971d54c7aa8b347c27b8&oe=5435FE34&__gda__=1415018545_9a2a5c957940c56e79ba7d9e5fd148c8",
		               "width":100
		            }
		         },
		         "birthday":"02\/10\/1987",
		         "email":"chongemdivang2003@yahoo.com",
		         "gender":"female",
		         "id":"100003961058701",
		         "name":"H\u01b0\u01a1ng Miu",
		         "name_format":"{first} {last}",
		         "first_name":"H\u01b0\u01a1ng",
		         "last_name":"Miu",
		         "work":[
		            {
		               "employer":{
		                  "id":"115310551929596",
		                  "name":"Candle hotel"
		               },
		               "start_date":"0000-00"
		            },
		            {
		               "employer":{
		                  "id":"331565683601735",
		                  "name":"Chalcedony Hotel"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Penny \u0110\u1ed7",
		      "phone":"84976988145",
		      "email":"yen_nhi2511@yahoo.com",
		      "dob":"1994-11-25",
		      "gender":false,
		      "fb_id":"100000371574680",
		      "fb":{
		         "id":"100000371574680",
		         "name":"Penny \u0110\u1ed7",
		         "last_name":"\u0110\u1ed7",
		         "first_name":"Penny",
		         "gender":"female",
		         "birthday":"11\/25\/1994",
		         "link":"https:\/\/www.facebook.com\/penny2511",
		         "email":"yen_nhi2511@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/v\/t1.0-1\/p100x100\/10153659_796642893691422_6919217377529794467_n.jpg?oh=8a8266bf11a5a748d22042ba242d1787&oe=54A15040&__gda__=1418688555_ff9166a9f704cc534110f023f4af9ff4"
		            }
		         },
		         "age_range":{
		            "max":20,
		            "min":18
		         },
		         "locale":"vi_VN",
		         "timezone":7
		      }
		   },
		   {
		      "name":"Grace Dang",
		      "phone":"841658587999",
		      "email":"nguoimauq3@yahoo.com",
		      "dob":"1994-01-30",
		      "gender":false,
		      "fb_id":"100004119660958",
		      "fb":{
		         "id":"100004119660958",
		         "name":"Grace Dang",
		         "last_name":"Dang",
		         "first_name":"Grace",
		         "gender":"female",
		         "birthday":"01\/30\/1994",
		         "link":"https:\/\/www.facebook.com\/xuanthao.tran.904",
		         "email":"nguoimauq3@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/p100x100\/10505493_352454044901915_4036180615684643596_n.jpg?oh=1461f92848f86c03ba4b64bc08b179af&oe=549F6225&__gda__=1418171168_08e1056d97a79a83decb6968cf0dcee8"
		            }
		         },
		         "age_range":{
		            "max":20,
		            "min":18
		         },
		         "locale":"en_US",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Para Find",
		      "phone":"841203424441",
		      "email":"betam3006@yahoo.com.vn",
		      "dob":"1994-06-30",
		      "gender":false,
		      "fb_id":"100001021915680",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/p100x100\/10511065_786194338091289_8809709087499830761_n.jpg?oh=3f0cab3e316860f523dd56e0bb684b9c&oe=5445C215&__gda__=1414486440_95e518fe0de278d6c883c7460c0bcc19",
		               "width":100
		            }
		         },
		         "birthday":"06\/30\/1994",
		         "email":"betam3006@yahoo.com.vn",
		         "gender":"female",
		         "id":"100001021915680",
		         "name":"Para Find",
		         "name_format":"{first} {last}",
		         "first_name":"Para",
		         "last_name":"Find",
		         "work":[
		            {
		               "employer":{
		                  "id":"143884685632131",
		                  "name":"YG-Family"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"L\u01b0\u01a1ng Minh G\u1eafn",
		      "phone":"84909177799",
		      "email":"luongminhgan@yahoo.com",
		      "dob":"1989-09-09",
		      "gender":true,
		      "fb_id":"100002188291621",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/t1.0-1\/p100x100\/1013839_595001020582836_22483303_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"09\/09\/1989",
		         "email":"luongminhgan@yahoo.com",
		         "gender":"male",
		         "id":"100002188291621",
		         "name":"L\u01b0\u01a1ng Minh G\u1eafn",
		         "name_format":"{first} {last}",
		         "first_name":"G\u1eafn",
		         "last_name":"L\u01b0\u01a1ng Minh",
		         "work":[
		            {
		               "employer":{
		                  "id":"603233103076764",
		                  "name":"Minder"
		               },
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "position":{
		                  "id":"135252636595110",
		                  "name":"Founder"
		               },
		               "start_date":"0000-00"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Nguyen Hong VI",
		      "phone":"84909771596",
		      "email":"nguyenhongvi12@gmail.com",
		      "dob":"1985-12-12",
		      "gender":false,
		      "fb_id":"100000246840148",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/c66.66.828.828\/s100x100\/599278_637247492960140_695048870_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"12\/12\/1985",
		         "email":"nguyenhongvi12@gmail.com",
		         "gender":"female",
		         "id":"100000246840148",
		         "name":"Nguyen Hong VI",
		         "name_format":"{first} {last}",
		         "first_name":"Nguyen",
		         "last_name":"Hong VI",
		         "work":[
		            {
		               "description":"LOTTE XYLITOL, LOTTE ACUO, KOALA'S MARCH...",
		               "employer":{
		                  "id":"474242375924864",
		                  "name":"Lotte"
		               },
		               "start_date":"2009-11-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Thanh Tom Nguyen",
		      "phone":"84913917724",
		      "email":"tomnuen@gmail.com",
		      "dob":"1980-02-28",
		      "gender":true,
		      "fb_id":"555900358",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xaf1\/t1.0-1\/p100x100\/1743702_10152213790490359_2063468153_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"02\/28\/1980",
		         "email":"tomnuen@gmail.com",
		         "gender":"male",
		         "id":"555900358",
		         "name":"Thanh Tom Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Thanh Tom",
		         "last_name":"Nguyen",
		         "work":[
		            {
		               "description":"business platform technologies",
		               "employer":{
		                  "id":"570410256341608",
		                  "name":"Agiper Systems"
		               },
		               "location":{
		                  "id":"110884905606108",
		                  "name":"Sydney, Australia"
		               },
		               "position":{
		                  "id":"107957955904825",
		                  "name":"Founder"
		               },
		               "start_date":"2013-11-30"
		            },
		            {
		               "end_date":"2013-11-06",
		               "employer":{
		                  "id":"27283158653",
		                  "name":"OzForex"
		               },
		               "location":{
		                  "id":"110884905606108",
		                  "name":"Sydney, Australia"
		               },
		               "position":{
		                  "id":"115318738482963",
		                  "name":"Technical Lead"
		               },
		               "start_date":"2009-05-01"
		            },
		            {
		               "end_date":"2008-11-01",
		               "employer":{
		                  "id":"165088530168587",
		                  "name":"ING Australia"
		               },
		               "location":{
		                  "id":"110372768987552",
		                  "name":"Sydney, New South Wales, Australia"
		               },
		               "start_date":"2007-05-01"
		            },
		            {
		               "end_date":"2007-01-01",
		               "employer":{
		                  "id":"152787498262612",
		                  "name":"SMB Fleet Management Group"
		               },
		               "location":{
		                  "id":"110372768987552",
		                  "name":"Sydney, New South Wales, Australia"
		               },
		               "position":{
		                  "id":"108480125843293",
		                  "name":"Web Developer"
		               },
		               "start_date":"2003-07-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Kim Nguyen",
		      "phone":"84939386514",
		      "email":"knguyenthi53@yahoo.com.vn",
		      "dob":"1980-06-25",
		      "gender":false,
		      "fb_id":"100005640671515",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xaf1\/v\/t1.0-1\/p100x100\/10245395_235773869953967_8955064026086678054_n.jpg?oh=4559c1cd7199a115a7136a4e345f6a9c&oe=5434EBBD&__gda__=1414629377_1862d6c1fbf7202f37d2e7e7966187fc",
		               "width":100
		            }
		         },
		         "birthday":"06\/25\/1980",
		         "email":"knguyenthi53@yahoo.com.vn",
		         "gender":"female",
		         "id":"100005640671515",
		         "name":"Kim Nguyen",
		         "name_format":"{first} {last}",
		         "first_name":"Kim",
		         "last_name":"Nguyen"
		      }
		   },
		   {
		      "name":"Paul An",
		      "phone":"84903366164",
		      "email":"weburnittv@gmail.com",
		      "dob":"1986-02-16",
		      "gender":false,
		      "fb_id":"100000057418467",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/c11.1.184.184\/s100x100\/10440195_858338504178055_3842709898678111760_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"02\/16\/1986",
		         "email":"weburnittv@gmail.com",
		         "gender":"female",
		         "id":"100000057418467",
		         "name":"Paul An",
		         "name_format":"{first} {last}",
		         "first_name":"Paul",
		         "last_name":"An",
		         "work":[
		            {
		               "description":"Design and analyze system",
		               "employer":{
		                  "id":"249272255222994",
		                  "name":"Up5s.com"
		               },
		               "position":{
		                  "id":"106515372716881",
		                  "name":"Chief Software Architect"
		               },
		               "start_date":"2012-01-01"
		            },
		            {
		               "description":"Symfony, Zend, Magento",
		               "end_date":"2012-01-01",
		               "employer":{
		                  "id":"1412201328996186",
		                  "name":"Arvenom Ptd."
		               },
		               "location":{
		                  "id":"121698564552155",
		                  "name":"Saigon"
		               },
		               "position":{
		                  "id":"108480125843293",
		                  "name":"Web Developer"
		               },
		               "start_date":"2011-09-01"
		            },
		            {
		               "description":"As a consultant for SEM and SEO.",
		               "end_date":"2010-01-01",
		               "employer":{
		                  "id":"649390221781351",
		                  "name":"Multivalue Singapore"
		               },
		               "position":{
		                  "id":"134097316632673",
		                  "name":"SEO Consultant"
		               },
		               "start_date":"2011-06-01"
		            },
		            {
		               "description":"New social network for business man.",
		               "end_date":"2010-01-01",
		               "employer":{
		                  "id":"106134736085305",
		                  "name":"Software Developer"
		               },
		               "position":{
		                  "id":"109542932398298",
		                  "name":"Software Engineer"
		               },
		               "start_date":"1988-06-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Duong Truong",
		      "phone":"8416642704809",
		      "email":"tdduong.khtn@gmail.com",
		      "dob":"1991-05-27",
		      "gender":true,
		      "fb_id":"100000146224083",
		      "fb":{
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5.0-1\/1115893_100000146224083_675383650_q.jpg"
		            }
		         },
		         "id":"100000146224083",
		         "first_name":"Nguyen Ngoc",
		         "birthday":"10\/12\/1991",
		         "email":"ngoc_hung1991@yahoo.com",
		         "name":"Nguyen Ngoc Hung",
		         "last_name":"Hung",
		         "gender":"male"
		      }
		   },
		   {
		      "name":"Ngoc Loan Truong",
		      "phone":"84909415029",
		      "email":"my_love1984vn@yahoo.com",
		      "dob":"1984-09-26",
		      "gender":false,
		      "fb_id":"100000259466576",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/t1.0-1\/c17.0.100.100\/p100x100\/1513190_825345900817384_5388977801294435677_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"09\/26\/1984",
		         "email":"my_love1984vn@yahoo.com",
		         "gender":"female",
		         "id":"100000259466576",
		         "name":"Ngoc Loan Truong",
		         "name_format":"{first} {last}",
		         "first_name":"Ngoc Loan",
		         "last_name":"Truong"
		      }
		   },
		   {
		      "name":"Thanh Huy\u1ec1n Tr\u1ea7n",
		      "phone":"84915925879",
		      "email":"huyenthanh1505@gmail.com",
		      "dob":"1986-05-15",
		      "gender":false,
		      "fb_id":"100003350011330",
		      "fb":{
		         "id":"100003350011330",
		         "name":"Thanh Huy\u1ec1n Tr\u1ea7n",
		         "last_name":"Tr\u1ea7n",
		         "first_name":"Thanh Huy\u1ec1n",
		         "gender":"female",
		         "birthday":"05\/15\/1986",
		         "link":"https:\/\/www.facebook.com\/thanhhuyen.tran.507",
		         "email":"huyenthanh1505@gmail.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/p100x100\/1898268_513271268794536_1420687240_n.jpg?oh=57e82a81cc9b3b7fecb35bc8edf19e1d&oe=5496D435&__gda__=1419740055_35983bfeb52e64a433ad710ec41f7cfc"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"vi_VN",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Nhocly Deghet",
		      "phone":"84945215058",
		      "email":"nguyenyenly1986@gmail.com",
		      "dob":"1986-11-17",
		      "gender":false,
		      "fb_id":"1786690463",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/p100x100\/10402824_10201260675437380_7400004027144397324_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"11\/17\/1986",
		         "email":"nguyenyenly1986@gmail.com",
		         "gender":"female",
		         "id":"1786690463",
		         "name":"Nhocly Deghet",
		         "name_format":"{first} {last}",
		         "first_name":"Nhocly",
		         "last_name":"Deghet"
		      }
		   },
		   {
		      "name":"Nh\u00e3 \u0110o\u00e0n",
		      "phone":"84933063406",
		      "email":"doanduynha85.tgtt@gmail.com",
		      "dob":"1985-11-22",
		      "gender":true,
		      "fb_id":"100000161582730",
		      "fb":{
		         "id":"100000161582730",
		         "name":"Nh\u00e3 \u0110o\u00e0n",
		         "last_name":"\u0110o\u00e0n",
		         "first_name":"Nh\u00e3",
		         "gender":"male",
		         "birthday":"11\/22\/1985",
		         "link":"https:\/\/www.facebook.com\/doan.d.nha",
		         "email":"doanduynha85.tgtt@gmail.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/s100x100\/10443993_941310202551024_2442900461484590990_n.jpg?oh=24ca4d022e571f52da634efb866b4830&oe=54935E04&__gda__=1418608569_1f6672568b2eb0637368150834bda92e"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"vi_VN",
		         "timezone":7
		      }
		   },
		   {
		      "name":"Quynh Van Pham",
		      "phone":"841263536968",
		      "email":"qvan.pham@gmail.com",
		      "dob":"1980-04-21",
		      "gender":false,
		      "fb_id":"100004501931844",
		      "fb":{
		         "id":"100004501931844",
		         "name":"Quynh Van Pham",
		         "last_name":"Pham",
		         "first_name":"Quynh Van",
		         "gender":"female",
		         "birthday":"04\/21\/1980",
		         "link":"https:\/\/www.facebook.com\/profile.php?id=100004501931844",
		         "email":"qvan.pham@gmail.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/p100x100\/10647137_344260612400667_6808529237390526190_n.jpg?oh=8fafe6a5960c89704082667a6136c15d&oe=5483E457&__gda__=1419838954_2baf98b1405d25600f19066b29a94903"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"en_US",
		         "timezone":7
		      }
		   },
		   {
		      "name":"Di\u1ec5m Qu\u1ef3nh",
		      "phone":"841889816994",
		      "email":"lun.hehe97@yahoo.com",
		      "dob":"1997-12-20",
		      "gender":false,
		      "fb_id":"100004193346647",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/t1.0-1\/p100x100\/10382843_319556678194108_1267657321757446370_n.jpg",
		               "width":100
		            }
		         },
		         "birthday":"12\/20\/1997",
		         "email":"lun.hehe97@yahoo.com",
		         "gender":"female",
		         "id":"100004193346647",
		         "name":"Di\u1ec5m Qu\u1ef3nh",
		         "name_format":"{first} {last}",
		         "first_name":"Di\u1ec5m",
		         "last_name":"Qu\u1ef3nh",
		         "work":[
		            {
		               "employer":{
		                  "id":"124540770961265",
		                  "name":"THPT Nguy\u1ec5n Th\u00e1i B\u00ecnh - TpHCM"
		               }
		            }
		         ]
		      }
		   },
		   {
		      "name":"Th\u1ee7 Khoa Ngh\u0129a",
		      "phone":"84968897676",
		      "email":"thukhoanghia90_93@yahoo.com",
		      "dob":"1976-08-23",
		      "gender":true,
		      "fb_id":"100005273923246",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-prn2\/v\/t1.0-1\/c21.19.240.240\/s100x100\/551359_107792582739872_123076702_n.jpg?oh=530dfa39b73a30379a6ac61871c47e3d&oe=545F400D&__gda__=1416040728_0f7c06813961e4164076bb011c11d920",
		               "width":100
		            }
		         },
		         "birthday":"08\/23\/1976",
		         "email":"thukhoanghia90_93@yahoo.com",
		         "gender":"male",
		         "id":"100005273923246",
		         "name":"Th\u1ee7 Khoa Ngh\u0129a",
		         "name_format":"{first} {last}",
		         "first_name":"Th\u1ee7",
		         "last_name":"Khoa Ngh\u0129a",
		         "work":[
		            {
		               "employer":{
		                  "id":"239276352888865",
		                  "name":"Phan Th\u00e1i"
		               },
		               "location":{
		                  "id":"108663825829925",
		                  "name":"Chaudok, An Giang, Vietnam"
		               },
		               "position":{
		                  "id":"109148945804142",
		                  "name":"Ph\u00f3 Gi\u00e1m \u0110\u1ed1c"
		               },
		               "start_date":"2006-09-01"
		            },
		            {
		               "end_date":"2013-12-31",
		               "employer":{
		                  "id":"202558959926204",
		                  "name":"Head Honda Thanh Y\u1ebfn Than"
		               },
		               "location":{
		                  "id":"104690386236592",
		                  "name":"Go Vap, H\u1ed3 Ch\u00ed Minh, Vietnam"
		               },
		               "position":{
		                  "id":"155559107833636",
		                  "name":"C\u1eecA H\u00c0NG PH\u00d3"
		               },
		               "start_date":"2013-10-01"
		            }
		         ]
		      }
		   },
		   {
		      "name":"Duong Truong",
		      "phone":"841664270480987",
		      "email":"tdduong.khtn@gmail.com",
		      "dob":"1991-06-27",
		      "gender":true,
		      "fb_id":"100000937713389",
		      "fb":{
		         "picture":{
		            "data":{
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-frc3\/t1.0-1\/c0.0.50.50\/p50x50\/644523_445523898822197_540349659_n.jpg",
		               "is_silhouette":false
		            }
		         },
		         "work":[
		            {
		               "position":{
		                  "id":"102167983158778",
		                  "name":"Internship"
		               },
		               "employer":{
		                  "id":"108159075873142",
		                  "name":"Pohang University of Science and Technology"
		               },
		               "end_date":"2012-10-01",
		               "start_date":"2012-07-06",
		               "location":{
		                  "id":"109621805730733",
		                  "name":"Pohang"
		               }
		            },
		            {
		               "employer":{
		                  "id":"270123619779354",
		                  "name":"AmCham Scholar"
		               },
		               "start_date":"0000-00",
		               "location":{
		                  "id":"108458769184495",
		                  "name":"Ho Chi Minh City, Vietnam"
		               },
		               "end_date":"2012-01-01"
		            }
		         ],
		         "id":"100000937713389",
		         "first_name":"Duong",
		         "birthday":"06\/27\/1991",
		         "email":"tdduong.khtn@gmail.com",
		         "name":"Duong Truong",
		         "last_name":"Truong",
		         "gender":"male"
		      }
		   },
		   {
		      "name":"Ngoc Duyen Phan",
		      "phone":"84918138503",
		      "email":"duyencomet_0126@yahoo.com.vn",
		      "dob":"1990-11-19",
		      "gender":false,
		      "fb_id":"100001638609770",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/c17.0.100.100\/p100x100\/10593017_749845138413433_2892986412092229000_n.jpg?oh=3ea215ca78c02c6b21d6536d1732c673&oe=54CEC415&__gda__=1422769925_a89112d4ab173f97f2c146e8c34a2794",
		               "width":100
		            }
		         },
		         "birthday":"11\/19\/1990",
		         "email":"duyencomet_0126@yahoo.com.vn",
		         "gender":"female",
		         "id":"100001638609770",
		         "name":"Ngoc Duyen Phan",
		         "name_format":"{first} {last}",
		         "first_name":"Phan",
		         "last_name":"Ngoc Duyen"
		      }
		   },
		   {
		      "name":"\u0110\u1ed7 Kh\u00e1nh Linh",
		      "phone":"84966909027",
		      "email":"bebi_babe@yahoo.com",
		      "dob":"1994-05-08",
		      "gender":false,
		      "fb_id":"100005378674159",
		      "fb":{
		         "id":"100005378674159",
		         "name":"Emi Emi",
		         "last_name":"Emi",
		         "first_name":"Emi",
		         "gender":"female",
		         "birthday":"05\/08\/1990",
		         "link":"https:\/\/www.facebook.com\/linh.emi.5",
		         "email":"bebi_babe@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xap1\/v\/t1.0-1\/p100x100\/10690235_292199060969381_4602794222139064966_n.jpg?oh=9684cb7a42ed8d4529763a18a03b206c&oe=549344BD&__gda__=1419531704_e39baf033972a10ddaa3050b5b3a4023"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"vi_VN",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Minion Tr\u1ea7n",
		      "phone":"849068608811",
		      "email":"mannghi@giahung.net",
		      "dob":"1995-08-31",
		      "gender":false,
		      "fb_id":"100006349513447",
		      "fb":{
		         "id":"100006349513447",
		         "name":"Minion Tr\u1ea7n",
		         "last_name":"Minion",
		         "first_name":"Tr\u1ea7n",
		         "gender":"female",
		         "birthday":"08\/31\/1995",
		         "link":"https:\/\/www.facebook.com\/tran.mannghi",
		         "email":"mannghi@giahung.net",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/s100x100\/16079_1542004716021164_7145549575779565783_n.jpg?oh=95805d3ff2f514a02c15438e5294e261&oe=5483517D&__gda__=1419271126_cdacc083b4fee633889b1905aef6c06b"
		            }
		         },
		         "age_range":{
		            "max":20,
		            "min":18
		         },
		         "locale":"en_US",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Le Ngoc Thao",
		      "phone":"841682658656",
		      "email":"lengocthao91@yahoo.com",
		      "dob":"1991-06-28",
		      "gender":false,
		      "fb_id":"100000644318880",
		      "fb":{
		         "id":"100000644318880",
		         "name":"Le Ngoc Thao",
		         "last_name":"Thao",
		         "first_name":"Le Ngoc",
		         "gender":"female",
		         "birthday":"06\/28\/1991",
		         "link":"https:\/\/www.facebook.com\/lengocthao91",
		         "email":"lengocthao91@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpf1\/v\/t1.0-1\/p100x100\/10014589_738030139561790_1206940669_n.jpg?oh=f6710d2a039de5f5ec06a44d3f568c92&oe=5488FF93&__gda__=1418510853_b98bc08bfcbf8b4001869222f058fb12"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"en_US",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Ho\u00e0ng H\u00e0",
		      "phone":"84907667294",
		      "email":"hippopotame84@yahoo.com",
		      "dob":"1984-11-03",
		      "gender":false,
		      "fb_id":"729392692",
		      "fb":{
		         "id":"729392692",
		         "name":"Ho\u00e0ng H\u00e0",
		         "last_name":"H\u00e0",
		         "first_name":"Ho\u00e0ng",
		         "gender":"female",
		         "birthday":"11\/03\/1984",
		         "link":"https:\/\/www.facebook.com\/profile.php?id=729392692",
		         "email":"hippopotame84@yahoo.com",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/s100x100\/10645151_10152193833197693_2364556639702946731_n.jpg?oh=156b6d212359284426d71607c0107c88&oe=5494480E&__gda__=1419937183_9976182402458a1b68b1ae82c3674451"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"en_US",
		         "timezone":-5
		      }
		   },
		   {
		      "name":"h\u01b0ng",
		      "phone":"84906860881",
		      "email":"mylove_tgh89@yahoo.com.vn",
		      "dob":"2014-10-28",
		      "gender":true,
		      "fb_id":"100001404947659",
		      "fb":{
		         "id":"100001404947659",
		         "name":"Th\u00e1i Gia H\u01b0ng",
		         "last_name":"H\u01b0ng",
		         "first_name":"Th\u00e1i",
		         "middle_name":"Gia",
		         "gender":"male",
		         "birthday":"09\/17\/1989",
		         "link":"https:\/\/www.facebook.com\/thai.giahung",
		         "email":"mylove_tgh89@yahoo.com.vn",
		         "picture":{
		            "data":{
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xfp1\/v\/t1.0-1\/p100x100\/10306641_736785866378238_2824268447268031673_n.jpg?oh=d9a1da28b34ff68cff60f15c7a71c5c4&oe=54CCD9AE&__gda__=1418516421_5536dc08df944b46b15e468fec3ff861"
		            }
		         },
		         "age_range":{
		            "min":21
		         },
		         "locale":"en_US",
		         "location":{
		            "id":"108458769184495",
		            "name":"Ho Chi Minh City, Vietnam"
		         },
		         "timezone":7
		      }
		   },
		   {
		      "name":"Tran Hoang Huy",
		      "phone":"841692090616",
		      "email":"tranhoanghuy0905@gmail.com",
		      "dob":"1994-01-09",
		      "gender":true,
		      "fb_id":"100000257302707",
		      "fb":{
		         "picture":{
		            "data":{
		               "height":100,
		               "is_silhouette":false,
		               "url":"https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-xpa1\/v\/t1.0-1\/p100x100\/10320544_750899864928583_2885877701728300379_a.jpg?oh=5b042e29c566c8f2e1d6ae7f12b7278b&oe=540D9974&__gda__=1412280009_91dd43e37b7ebd9463f7b7a82e11460e",
		               "width":100
		            }
		         },
		         "birthday":"05\/09\/1990",
		         "email":"tranhoanghuy0905@gmail.com",
		         "gender":"male",
		         "id":"100000257302707",
		         "name":"Tran Hoang Huy",
		         "name_format":"{first} {last}",
		         "first_name":"Tran Hoang Huy",
		         "last_name":"Huy",
		         "work":[
		            {
		               "employer":{
		                  "id":"114159085260961",
		                  "name":"Ninh H\u00f2a, Kh\u00e1nh H\u00f2a, Vietnam"
		               }
		            },
		            {
		               "employer":{
		                  "id":"224067755331",
		                  "name":"Information Technology - HCMUS"
		               }
		            }
		         ]
		      }
		   }
		];

module.exports = {
	createDump: function (req, res) {
		
		for (var i=0; i<dump_user.length; i++) {
			var u = {
					"name": dump_user[i].name,
					"phone": dump_user[i].phone,
					"email": dump_user[i].email,
					"gender": dump_user[i].gender,
					"fbId": dump_user[i].fb_id,
					"birthday": dump_user[i].dob,
					"avatar": dump_user[i].fb.picture.data.url,
					"password": "testingwithn"
				};	
			
			mixpanel.track("User", {
				name: u.name,
			    created: new Date().toISOString(),
			    email: u.email,
				phone: u.phone,
			    gender: u.gender,
			    discount: u.discount,
			    birthday: u.birthday,
			    address: u.address,
			    fbId: u.fbId,
			    gId: u.gId
			});		

			// Customer.create(u).exec(function(err, e){
			// 	if(err) {
			// 		res.send('tao khach hang bi loi');
			// 		console.log(err);
			// 	} else {
					
			// 		mixpanel.people.set(e.id, {
			// 			$name: e.name,
			// 		    $created: new Date().toISOString(),
			// 		    $email: e.email,
			// 			$phone: e.phone,
			// 		    gender: e.gender,
			// 		    discount: e.discount,
			// 		    birthday: e.birthday,
			// 		    address: e.address,
			// 		    fbId: e.fbId,
			// 		    gId: e.gId
			// 		});		

			// 	}
			// });
		}
		res.send("DONE");
	},

	create: function (req, res) {
		Customer.create(req.body).exec(function(err, newCustomer){
			if(err) {
				res.send('tao khach hang bi loi');
				console.log(err);
			} else {
				
				mixpanel.people.set(newCustomer.id, {
					$name: newCustomer.name,
				    $created: new Date().toISOString(),
				    $email: newCustomer.email,
					$phone: newCustomer.phone,
				    gender: newCustomer.gender,
				    discount: newCustomer.discount,
				    birthday: newCustomer.birthday,
				    address: newCustomer.address,
				    fbId: newCustomer.fbId,
				    gId: newCustomer.gId
				});		

				res.status(201);
				res.ok(newCustomer.toJSON());
			}
		});

	}
};

