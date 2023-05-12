import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import defaultProfileImage from "../../../../images/profile-picture-placeholder.png";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";

export default function ProfilePicture({ imageUrl = null, onImageChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [deleteAccountDialogOpen, setDeleteAccountDialogOpen] =
        useState(false);
    const [changePictureDialogOpen, setChangePictureDialogOpen] =
        useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            onImageChange(reader.result);
        };
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handlePictureChange = (e) => {
        // update the profile picture
    };

    const handlePictureChangeSubmit = () => {
        // save the new profile picture
        setChangePictureDialogOpen(false);
    };

    return (
        <>
            <div className="relative smallMobile:w-10 mobile:w-16 tablet:w-52 laptop:w-52 desktop:w-52 smallMobile:h-10 mobile:h-16 tablet:h-52 laptop:h-52 desktop:h-52 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                    className="w-full h-full object-cover"
                    src={imageUrl ? imageUrl : defaultProfileImage}
                    alt="User profile picture"
                    onContextMenu={handleContextMenu}
                />
            </div>
            <div className="flex flex-col justify-end items-center h-full">
                <Button
                    variant="contained"
                    className="hover:bg-[#e64c1b] hover:text-white transition-[3s] focus:outline-none"
                    style={{color:"black", backgroundColor:"white", borderRadius:"9999px", padding: "0.5rem"}}
                    onClick={() => setChangePictureDialogOpen(true)}
                >
                    <EditIcon/>
                </Button>

                <Dialog
                    open={changePictureDialogOpen}
                    onClose={() => setChangePictureDialogOpen(false)}
                >
                    <DialogTitle>Change Profile Picture</DialogTitle>
                    <DialogContent className="overflow-x-hidden">
                        <input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePictureChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => setChangePictureDialogOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handlePictureChangeSubmit}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
