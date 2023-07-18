// This line was intro from GitHub
// This line was added to test pull command in local Git
function start_snacks_on_page()
{


    // The Inner Divs, inside the Main Div
    //
    // Warning: Using these effects, DO NOT USE "Position : relative",
    //
    function define_and_internal_div( ID, Animate )
    {
        let arr = [              "ID : " + ID,
                               "Type : Size",
                           "Overflow : none",  // clip no hace nada por el momento
                             "Height : none",
                              "Width : none",
                              "Color : Blue",
                             "Margin : 0px",
                            "Padding : 10px",
                       "Border_Width : 2px",
                            "Animate : " + Animate
                  ];
    
        let cv = dDiv( arr );

        cv.add_innerHTML( ID + "  -  " + Animate );
    }


    let cv;


    // The Inner Divs, inside the Main PAge
    //
    define_and_internal_div( "Page_Top_Left_Div",     "SnackTopLeft"   );
}


