
function start()
{


    // The Inner Divs, inside the Main Div
    //
    // Warning: Using these effects, DO NOT USE "Position : relative",
    //
    function define_and_internal_div( ID, Animate )
    {
        let arr = [              "ID : " + ID,
                           "ParentID : Main_Div",
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


    // The Main Central Div
    //
    function define_and_show_main_central_div()
    {
        cv = dDiv(     [                "ID : Main_Div",
                                      "Type : Size",
                                  "Position : relative",
                                  "Overflow : none",
                                   "H_and_V : Center",
                                    "Margin : 0px",
                                   "Padding : 0px",
                              "Border_Width : 2px",
                                     "Width : 90vmax",
                                    "Height : 90vmin"
                       ]
                 );
    }
    


    let cv;

    // Define and show a central div
    //
    define_and_show_main_central_div();
    

    // The Inner Divs, inside the Main Div
    //
    define_and_internal_div( "Top_Left_Div",     "SnackTopLeft"   );
    define_and_internal_div( "Top_Right_Div",    "SnackTopRight" );
    define_and_internal_div( "Bottom_Right_Div", "SnackBottomRight" );
}


