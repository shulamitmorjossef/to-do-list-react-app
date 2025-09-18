// import React, { useState, useEffect } from "react";
// import "./EditModal.css";

// function EditModal({ isOpen, onClose, currentText, onSave }) {
//   const [text, setText] = useState(currentText);

//   // מתעדכן כל פעם שה-Modal נפתח עם משימה אחרת
//   useEffect(() => {
//     setText(currentText);
//   }, [currentText]);

//   if (!isOpen) return null;

//   const handleSave = () => {
//     if (text.trim() !== "") {
//       onSave(text);
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h3>Edit Task</h3>
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="modal-input"
//         />
//         <div className="modal-buttons">
//           <button
//             onClick={() => { handleSave(); onClose(); }}
//             className="modal-save"
//           >
//             Save
//           </button>
//           <button onClick={onClose} className="modal-cancel">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditModal;
