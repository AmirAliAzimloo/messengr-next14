"use client"

interface ConfirmModalProps{
    isOpen ?: boolean;
    onClose:()=>void;
}

const ConfirmModal : React.FC<ConfirmModalProps> = () => {
    return ( 
        <div>
        ConfirmModal
        </div>
     );
}
 
export default ConfirmModal;