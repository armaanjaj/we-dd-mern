import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function SecurityInformation({
    onPasswordChange,
    onAccountDeletion,
}) {
    const [changePasswordDialogOpen, setChangePasswordDialogOpen] =
        useState(false);
    const [deleteAccountDialogOpen, setDeleteAccountDialogOpen] =
        useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleCurrentPasswordChange = (event) => {
        setCurrentPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handlePasswordChangeSubmit = () => {
        onPasswordChange(currentPassword, newPassword);
        setCurrentPassword("");
        setNewPassword("");
        setChangePasswordDialogOpen(false);
    };

    const handleAccountDeletionSubmit = () => {
        onAccountDeletion();
        setDeleteAccountDialogOpen(false);
    };

    return (
        <div className="px-10 py-8 rounded flex flex-col justify-start items-start gap-8 w-full">
            <div
                after=""
                className="text-4xl font-extrabold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
            >
                Security
            </div>
            <div className="flex flex-col justify-start items-start gap-5 w-full">
                <div
                    after=""
                    className="text-xl font-bold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
                >
                    Change password
                </div>
                <Button
                    variant="contained"
                    onClick={() => setChangePasswordDialogOpen(true)}
                    style={{ backgroundColor: "#002d72" }}
                >
                    Change Password
                </Button>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 w-full">
                <div
                    after=""
                    className="text-xl text-red-600 font-bold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
                >
                    Delete account
                </div>
                <div>
                    Once you delete your account, there is no going back. Please
                    be certain.
                </div>
                <Button
                    variant="contained"
                    onClick={() => setDeleteAccountDialogOpen(true)}
                    style={{ backgroundColor: "#dc2626" }}
                >
                    Delete your account
                </Button>
            </div>

            <Dialog
                open={changePasswordDialogOpen}
                onClose={() => setChangePasswordDialogOpen(false)}
            >
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Current Password"
                        type="password"
                        value={currentPassword}
                        onChange={handleCurrentPasswordChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="New Password"
                        type="password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setChangePasswordDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handlePasswordChangeSubmit}>Save</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={deleteAccountDialogOpen}
                onClose={() => setDeleteAccountDialogOpen(false)}
            >
                <DialogTitle>Delete account</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete your account?</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteAccountDialogOpen(false)}>
                        <div className="text-[#002D72]">Cancel</div>
                    </Button>
                    <Button onClick={handleAccountDeletionSubmit}>
                        <div className="text-red-600">Delete</div>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
