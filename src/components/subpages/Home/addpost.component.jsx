import React from 'react';
import NavBar from '../../Navbar/NavBar.component';
import './addpost.styles.css'
const AddnewPost =() =>(
    <>
    <NavBar/>
    <div className='container'>
        <form>
            
            <label className='label'>
            Title:
            <br />
            <input type="text" name="name" className='input-box'/>
            </label>
            <br />
            <label className='label'>
            Price:
            <br />
            <input type="number" name="price" className='input-box'/>
            </label>
            <br />
            <label className='label'>
            Description:
            <br />
            <textarea name="description" id="" cols="85" rows="6" ></textarea>
            {/* <input type="text" name="description" className='input-box'/> */}
            </label>
            <br />
            <label className='label'>
            ImageUrl:
            <br />
            <input type="text" name="image" className='input-box'/>
            </label>
            <br />
            <label className='label'>
            Category:
            <br />
            <input type="text" name="category" className='input-box' />
            </label>
            <br />
            <input type="submit" value="Submit" className='btn btn-primary sub-btn-addps'/>
            </form>
        </div>
    </>
)

export default AddnewPost;