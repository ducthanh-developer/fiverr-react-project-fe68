// import React, { Component } from 'react'
// // import "../../UserInformation/UploadImgUser/HinhAnh.scss"
// const ImgUpload = ({
//     onChange,
//     src
// }) =>
//     <label htmlFor="photo-upload" className="custom-file-upload fas">
//         <div className="img-wrap img-upload" >
//             <img for="photo-upload" src={src} alt="..." />
//         </div>
//         <input id="photo-upload" type="file" onChange={onChange} />
//     </label>

// const Profile = ({
//     onSubmit,
//     src,
//     name,
//     status,
// }) =>
//     <div className="card">
//         <form onSubmit={onSubmit}>
//             <label className="custom-file-upload fas">
//                 <div className="img-wrap" >
//                     <img for="photo-upload" src={src}  alt="..."/>
//                 </div>
//             </label>
//             <div className="name">{name}</div>
//             <div className="status">{status}</div>
//         </form>
//     </div>


// const Edit = ({
//     onSubmit,
//     children,
// }) =>
//     <div className="">
//         <form onSubmit={onSubmit}>

//             {children}
//         </form>
//     </div>

// export default class HinhAnh extends Component {
//     state = {
//         file: '',
//         imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
//         name: '',
//         status: '',
//         active: 'edit'
//     }

//     photoUpload = e => {
//         e.preventDefault();
//         const reader = new FileReader();
//         const file = e.target.files[0];
//         reader.onloadend = () => {
//             this.setState({
//                 file: file,
//                 imagePreviewUrl: reader.result
//             });
//         }
//         reader.readAsDataURL(file);
//     }
//     editName = e => {
//         const name = e.target.value;
//         this.setState({
//             name,
//         });
//     }

//     editStatus = e => {
//         const status = e.target.value;
//         this.setState({
//             status,
//         });
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
//         this.setState({
//             active: activeP,
//         })
//     }

//     render() {
//         const { imagePreviewUrl,
//             name,
//             status,
//             active } = this.state;
//         return (
//             <div className="Profile">
//                 <div>
//                     {(active === 'edit') ? (
//                         <Edit onSubmit={this.handleSubmit}>
//                             <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
//                         </Edit>
//                     ) : (
//                         <Profile
//                             onSubmit={this.handleSubmit}
//                             src={imagePreviewUrl}
//                             name={name}
//                             status={status} />)}
//                 </div>
//             </div>
//         )
//     }
// }





















// // const ImgUpload =({
// //     onChange,
// //     src
// //   })=>
// //     <label htmlFor="photo-upload" className="custom-file-upload fas">
// //       <div className="img-wrap img-upload" >
// //         <img for="photo-upload" src={src}/>
// //       </div>
// //       <input id="photo-upload" type="file" onChange={onChange}/> 
// //     </label>


// //   const Name =({
// //     onChange,
// //     value
// //   })=>
// //     <div className="field">
// //       <label htmlFor="name">
// //         name:
// //       </label>
// //       <input 
// //         id="name" 
// //         type="text" 
// //         onChange={onChange} 
// //         maxlength="25" 
// //         value={value} 
// //         placeholder="Alexa" 
// //         required/>
// //     </div>


// //   const Status =({
// //     onChange,
// //     value
// //   })=>
// //     <div className="field">
// //       <label htmlFor="status">
// //         status:
// //       </label>
// //       <input 
// //         id="status" 
// //         type="text" 
// //         onChange={onChange} 
// //         maxLength="35" 
// //         value={value} 
// //         placeholder="It's a nice day!" 
// //         required/>
// //     </div>


// //   const Profile =({
// //     onSubmit,
// //     src,
// //     name,
// //     status,
// //   })=>
// //     <div className="card">
// //       <form onSubmit={onSubmit}>
// //         <h1>Profile Card</h1>
// //         <label className="custom-file-upload fas">
// //           <div className="img-wrap" >
// //             <img for="photo-upload" src={src}/>
// //           </div>
// //         </label>
// //         <div className="name">{name}</div>
// //         <div className="status">{status}</div>
// //         <button type="submit" className="edit">Edit Profile </button>
// //       </form>
// //     </div>


// //   const Edit =({
// //     onSubmit,
// //     children,
// //   })=>
// //     <div className="card">
// //       <form onSubmit={onSubmit}>
// //         <h1>Profile Card</h1>
// //           {children}
// //         <button type="submit" className="save">Save </button>
// //       </form>
// //     </div>

// //   class CardProfile extends React.Component {
// //     state = {
// //       file: '',
// //       imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
// //       name:'',
// //       status:'',
// //       active: 'edit'
// //     }

// //     photoUpload = e =>{
// //       e.preventDefault();
// //       const reader = new FileReader();
// //       const file = e.target.files[0];
// //       reader.onloadend = () => {
// //         this.setState({
// //           file: file,
// //           imagePreviewUrl: reader.result
// //         });
// //       }
// //       reader.readAsDataURL(file);
// //     }
// //     editName = e =>{
// //       const name = e.target.value;
// //       this.setState({
// //         name,
// //       });
// //     }

// //     editStatus = e => {
// //       const status = e.target.value;
// //       this.setState({
// //         status,
// //       });
// //     }

// //     handleSubmit= e =>{
// //       e.preventDefault();
// //       let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
// //       this.setState({
// //         active: activeP,
// //       })
// //     }

// //     render() {
// //       const {imagePreviewUrl, 
// //              name, 
// //              status, 
// //              active} = this.state;
// //       return (
// //         <div>
// //           {(active === 'edit')?(
// //             <Edit onSubmit={this.handleSubmit}>
// //               <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
// //               <Name onChange={this.editName} value={name}/>
// //               <Status onChange={this.editStatus} value={status}/>
// //             </Edit>
// //           ):(
// //             <Profile 
// //               onSubmit={this.handleSubmit} 
// //               src={imagePreviewUrl} 
// //               name={name} 
// //               status={status}/>)}

// //         </div>
// //       )
// //     }
// //   }
import React from 'react'

export default function HinhAnh() {
    return (
        <div>
            
        </div>
    )
}

// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actUploadImg } from '../modules/action';

// export default function HinhAnh() {
//     const dispatch = useDispatch();
//     const [ imageSelect, setImagesSelectes] = useState()
//     const uploadImage = (file) => {
//         const formData = new FormData()
//         formData.append("file",imageSelect)
//         formData.append("upload", "dddd")
//         axios.post(
//             'https://fiverr.cybersoft.edu.vn/api/users/upload-avatar', formData, 
//         ).then((response) => {console.log(response);})
//         .catch((err) => {console.log(err);})
//     }
//     return (
        
//         <div>
//             <input type="file" onChange={(event) => { setImagesSelectes(event.target.files[0]) }} />
//             <button onClick={uploadImage}>Upload</button>
//         </div>
//     )
// }
