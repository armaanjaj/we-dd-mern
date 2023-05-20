import React, { useState } from "react";
import styled from "styled-components";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(209, 213, 219, 1);
    border-radius: 0.25rem;
    // background-color: rgba(0, 0, 0, 0.6);
    color: black;
    padding: 1rem 1.25rem;
    transition: 0.15s;
    cursor: pointer;
    border: 0.1px solid #808080;

    &:hover {
        transform: scale(105%);
        border: 1px solid black;
    }
`;

export default function Index() {
    const [userDialogOpen, setUserDialogOpen] = useState(false);
    const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const driverData = [
        {
            id: "001",
            name: "Driver 1",
            email: "driver1@example.com",
            status: 1,
        },
        {
            id: "002",
            name: "Driver 2",
            email: "driver2@example.com",
            status: 0,
        },
    ];
    const adminData = [
        {
            id: "001",
            name: "Admin 1",
            email: "admin1@example.com",
            status: 1,
        },
        {
            id: "002",
            name: "Admin 2",
            email: "admin2@example.com",
            status: 0,
        },
    ];
    const servicesData = [
        {
            date: "10/05/2023",
            title: "Driver application by James",
            read: false,
        },
        {
            date: "29/04/2023",
            title: "Shuttle Service by Candy",
            read: false,
        },
    ];

    const openDialog = (buttonNumber) => {
        switch (buttonNumber) {
            case 1:
                setUserData(driverData);
                setUserDialogOpen(true);
                break;
            case 2:
                setUserData(adminData);
                setUserDialogOpen(true);
                break;
            case 3:
                setServiceData(servicesData);
                setServiceDialogOpen(true);
                break;
            default:
                {
                    setUserData([]);
                    setServiceData([]);
                }
                break;
        }
    };

    const openEditDialog = (user) => {
        setSelectedUser(user);
        setEditDialogOpen(true);
    };

    const openDeleteDialog = (user) => {
        setSelectedUser(user);
        setDeleteDialogOpen(true);
    };

    const handleEdit = (newName, newEmail) => {
        // Logic to update user details
        // Modify the data array or make an API call to update the data
        // After updating, close the edit dialog
        setEditDialogOpen(false);
    };

    const handleDelete = () => {
        // Logic to update user details
        // Modify the data array or make an API call to update the data
        // After updating, close the edit dialog
        setDeleteDialogOpen(false);
    };

    const DialogUserTable = () => {
        return (
            <TableContainer className="w-full h-full">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userData.map((item) => (
                            <TableRow key={item.email}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>
                                    {item.status ? (
                                        <div className="w-3 h-3 mx-auto bg-green-600 rounded-full"></div>
                                    ) : (
                                        <div className="w-3 h-3 mx-auto bg-red-600 rounded-full"></div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <button
                                        onClick={() => openEditDialog(item)}
                                    >
                                        <EditIcon />
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <button
                                        onClick={() => openDeleteDialog(item)}
                                    >
                                        <DeleteIcon />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    const DialogServiceUpdatesTable = () => {
        return (
            <TableContainer className="w-full h-full">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {serviceData.map((item, key) => (
                            <TableRow key={key}>
                                <TableCell>{item.date}</TableCell>
                                <TableCell>{item.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    };

    const EditDialog = ({ open, onClose, user }) => {
        const [newName, setNewName] = useState(user.name);
        const [newEmail, setNewEmail] = useState(user.email);

        const handleSave = () => {
            // Call handleEdit with the updated name and email
            handleEdit(newName, newEmail);
        };

        return (
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Edit user details</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Name"
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        fullWidth
                    />
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        );
    };

    const DeleteDialog = ({ open, onClose }) => {
        const handleProceed = () => {
            // Call handleDelete to delete the user
            handleDelete();
            onClose();
        };

        return (
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Delete user</DialogTitle>
                <DialogContent>
                    <p>Are you sure you want to delete this user?</p>
                    <DialogActions>
                        <Button onClick={() => onClose(false)}>
                            <div className="text-[#002D72]">Cancel</div>
                        </Button>
                        <Button onClick={handleProceed}>
                            <div className="text-red-600">Delete</div>
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        );
    };

    const user = "John";

    return (
        <div className="flex flex-col justify-start gap-10 items-start py-16 px-10">
            <div className="text-4xl font-extrabold">Welcome {user}</div>
            <div className="w-full h-full flex flex-col justify-start gap-3 items-start transition-[0.5s]">
                <DivButton onClick={() => openDialog(1)}>
                    <span>Manage Drivers</span>
                </DivButton>
                <DivButton onClick={() => openDialog(2)}>
                    <span>Manage Admin</span>
                </DivButton>
                <DivButton onClick={() => openDialog(3)}>
                    <span>Service Requests</span>
                </DivButton>
            </div>

            <Dialog
                open={userDialogOpen}
                onClose={() => setUserDialogOpen(false)}
                TransitionProps={{
                    onExited: () => setUserData([]),
                }}
            >
                <DialogContent>
                    <DialogUserTable />
                </DialogContent>
            </Dialog>

            <Dialog
                open={serviceDialogOpen}
                onClose={() => setServiceDialogOpen(false)}
                TransitionProps={{
                    onExited: () => setServiceData([]),
                }}
            >
                <DialogTitle>2 unread messages</DialogTitle>
                <DialogContent>
                    <DialogServiceUpdatesTable />
                </DialogContent>
            </Dialog>

            <Dialog
                open={editDialogOpen}
                onClose={() => setEditDialogOpen(false)}
            >
                <EditDialog
                    open={editDialogOpen}
                    onClose={() => setEditDialogOpen(false)}
                    user={selectedUser}
                />
            </Dialog>

            <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
            >
                <DeleteDialog
                    open={deleteDialogOpen}
                    onClose={() => setDeleteDialogOpen(false)}
                />
            </Dialog>
        </div>
    );
}
