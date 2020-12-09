import React,{useState} from "react";
import styles from "./top_section.module.css";

function TopSection(props)
{


        const [pricerange,setpricerange] = useState(3);
        const [cropsarr,setcropsarr] = useState(["wheat","rice","barley","corn","maize"]);
        const [categories,setcategories] = useState([true,true,true,true,true,true]);
        const [searchterm,setsearchterm] = useState("");

        function categoryhandler(value,num){
            if(categories[num]){
                var newarr = cropsarr.filter( (singlename) => {
                    return singlename != value;
                })
                setcropsarr(newarr);
            }else{
                setcropsarr([...cropsarr,value])
            }

            var anotherarr = categories;
            anotherarr[num] = !categories[num];
            setcategories(anotherarr);
        }

        function allcats(val){
            if(categories[5]){
                var newarr2 = [false,false,false,false,false,false];
                setcropsarr([]);
            }else{
                var newarr2 = [true,true,true,true,true,true];
                setcropsarr(["wheat","rice","barley","corn","maize"]);
            }
            
            setcategories(newarr2);
        }

        function applyhandler(){
            console.log("hey bro");
            console.log(pricerange);
            console.log(cropsarr);
            props.filterfunc(pricerange,cropsarr);
        }

        function searchhandler(searchthing){
            setsearchterm(searchthing);
            props.searchfunction(searchthing);
            // console.log(searchthing);
        }

        return (
           <div className={styles.top_section_outer}>
               <div className={styles.filterbuttondiv}>
                    <button type="button" className={"btn btn-info " + styles.filterbutton} data-toggle="modal" data-target="#exampleModal"><span className={styles.filtertext}>Filter</span></button>
               </div>
               <div className={styles.searchbardiv}>
               <div class="input-group">
                <input type="text" class="form-control" placeholder="Search crops" value={searchterm} onChange={(e) => searchhandler(e.target.value)} />
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
                    {/* <a class="dropdown-item" href="#" onClick={() => props.sorter(0)}>Proximity</a> */}
                    <a class="dropdown-item" href="#" onClick={() => props.sorter(1)}>Price Increasing</a>
                    <a class="dropdown-item" href="#" onClick={() => props.sorter(2)}>Price Decreasing</a>
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
                <input className={styles.filter_option} type="radio" id="male" name="gender" onClick={() => setpricerange(0)} />
                <label className={styles.filter_optiontext} for="male"> 0-100</label><br />
                <input className={styles.filter_option} type="radio" id="female" name="gender" onClick={() => setpricerange(1)} />
                <label className={styles.filter_optiontext} for="female">100-500</label><br />
                <input className={styles.filter_option} type="radio" id="other" name="gender" onClick={() => setpricerange(2)} />
                <label className={styles.filter_optiontext} for="other"> greater than 500</label><br />
                <input className={styles.filter_option} type="radio" id="other" name="gender" defaultChecked={true} onClick={() => setpricerange(3)} />
                <label className={styles.filter_optiontext} for="other">None</label>
                <br />
                <hr />
                <h1 className={styles.filter_title}>Category : </h1>
                <input className={styles.filter_option} type="checkbox" id="vehicle1" name="vehicle1" checked={categories[0]} value={"wheat"} onClick={(e) => categoryhandler(e.target.value,0)}/>
                <label className={styles.filter_optiontext} for="vehicle1"> Wheat</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle2" name="vehicle2" checked={categories[1]} value={"rice"} onClick={(e) => categoryhandler(e.target.value,1)}/>
                <label className={styles.filter_optiontext} className={styles.filter_option} for="vehicle2">Rice</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle3" checked={categories[2]} value={"barley"} onClick={(e) => categoryhandler(e.target.value,2)}/>
                <label className={styles.filter_optiontext} for="vehicle3"> Barley</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle4" checked={categories[3]} value={"corn"} onClick={(e) => categoryhandler(e.target.value,3)} />
                <label className={styles.filter_optiontext} for="vehicle3"> Corn</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle5" checked={categories[4]} value={"maize"} onClick={(e) => categoryhandler(e.target.value,4)} />
                <label className={styles.filter_optiontext} for="vehicle3"> Maize</label><br />
                <input className={styles.filter_option} type="checkbox" id="vehicle3" name="vehicle5" checked={categories[5]}  onClick={(e) => allcats(e.target.value)} />
                <label className={styles.filter_optiontext} for="vehicle3"> All Categories</label><br />
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onClick={applyhandler} data-dismiss="modal">Apply</button>
                </div>
                </div>
            </div>
            </div>
           </div>
           


        )
}


export default TopSection;