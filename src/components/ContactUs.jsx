import React from 'react'

export default function ContactUs() {
  return (
    <div>
        <div class="container-fliud" id="contact" style={{marginTop:"130px",marginBottom:"30px",height:"100%"}} >
        <div class="bg-danger text-dark" style={{fontFamily: "cursive", padding: "25px"}}>
            <br/><br/>  
            <p class="h3 text-center">Contact Us</p>
            <div style={{display: "flex", padding:"25px"}}>

                <div style={{flex: "50%"}} class="h5">
                    <b>Head Office Address:</b><br/>
                    MakeMyTrip India Pvt. Ltd.,<br/>
                    DLF Building No. 5 Tower B <br/>
                    DLF Cyber City, DLF Phase 2 <br/>
                    Sector 25, Gurugram, Haryana 122002, India <br/>
                </div>
                <div class="h5" style={{flex: "50%", borderLeft: "solid 2px black", padding: "25px"}}>
                    <b>Fixed line: </b><br/>
                    (0124) 4628747 <br/>
                    (0124) 5045105 <br/>
                    (0124) 2898000 <br/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
