import React from "react";
import styles from "./filter.module.css";

function Filter()
{
        return (
           <div className={styles.filter_outer}>
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


        )
}


export default Filter;