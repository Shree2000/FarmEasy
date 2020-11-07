import React from "react";
import styles from "./top_section.module.css";

function TopSection()
{
        return (
           <div className={styles.top_section_outer}>
               <div className={styles.filterbuttondiv}>
                    <button type="button" className={"btn btn-info " + styles.filterbutton} data-toggle="modal" data-target="#exampleModal"><span className={styles.filtertext}>Filter</span></button>
               </div>
               <div className={styles.searchbardiv}>
               <div class="input-group">
                <input type="text" class="form-control" placeholder="Search crops" />
                <div className={styles.input_group_append} >
                <button class="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                </button>
                </div>
            </div>
           </div>
           <div className={styles.sortbydiv}>
                <div class="dropdown mr-1">
                    <button type="button" className={"btn btn-success dropdown-toggle " + styles.sortbybutton } id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                    <span className={styles.sortbytext} >Sort By</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <a class="dropdown-item" href="#">Cost</a>
                    <a class="dropdown-item" href="#">Proximity</a>
                    <a class="dropdown-item" href="#">Date</a>
                    </div>
                </div>
           </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Apply Filters</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <h1 className={styles.filter_title}>Price Range : </h1>
                {/* <h1 className={styles.filter_option}>100-200</h1>
                <h1 className={styles.filter_option}>200-300</h1>
                <h1 className={styles.filter_option}>300-400</h1> */}
                <input className={styles.filter_option} type="radio" id="male" name="gender" value="male" />
                <label className={styles.filter_optiontext} for="male">10-100</label><br />
                <input className={styles.filter_option} type="radio" id="female" name="gender" value="female" />
                <label className={styles.filter_optiontext} for="female">100-1000</label><br />
                <input className={styles.filter_option} type="radio" id="other" name="gender" value="other" />
                <label className={styles.filter_optiontext} for="other">1000-10,000</label>
                <br />
                <hr />
                <h1 className={styles.filter_title}>Category : </h1>
                <input className={styles.filter_option} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label className={styles.filter_optiontext} for="vehicle1"> Wheat</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label className={styles.filter_optiontext} className={styles.filter_option} for="vehicle2">Rice</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                <label className={styles.filter_optiontext} for="vehicle3"> Barley</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle4" value="Boat" />
                <label className={styles.filter_optiontext} for="vehicle3"> Corn</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle5" value="Boat" />
                <label className={styles.filter_optiontext} for="vehicle3"> Maze</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle6" value="Boat" />
                <label className={styles.filter_optiontext} for="vehicle3"> Barley</label><br />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Apply</button>
                </div>
                </div>
            </div>
            </div>
           </div>
           


        )
}


export default TopSection;