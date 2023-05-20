import React, { useState } from "react";
import ButtonLocal from "../../layouts/button/Button";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";

export default function Index({
    onShiftStart
}) {

    const [startShiftDialogOpen, setStartShiftDialogOpen] = useState(false);
    const [driver1Id, setDriver1Id] = useState("");
    const [driver2Id, setDriver2Id] = useState("");
    const [carId, setCarId] = useState("");

    const handleStartShiftSubmit = () => {
        onShiftStart(driver1Id, driver2Id, carId);
        setDriver1Id("");
        setDriver2Id("");
        setStartShiftDialogOpen(false);
    };

    return (
        <div className="w-full h-full flex flex-row justify-center items-start px-10">
            <div className="my-10 flex flex-col justify-center items-center gap-5">
                <div>
                    After clicking 'Start shift' button you will be asked for your, your co-worker's user ID and car's ID. Please keep them handy.
                </div>
                <div className="w-fit hover:cursor-pointer" onClick={() => setStartShiftDialogOpen(true)}>
                    <ButtonLocal
                        background={"#E64C1B"}
                        color={"#ffffff"}
                        text={"Start shift"}
                        name={"driver_startshift"}
                    />
                </div>
            </div>

            <Dialog
                open={startShiftDialogOpen}
                onClose={() => setStartShiftDialogOpen(false)}
            >
                <DialogTitle>Start shift</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Driver ID 1"
                        type="text"
                        value={driver1Id}
                        onChange={(e)=>setDriver1Id(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Driver ID 2"
                        type="text"
                        value={driver2Id}
                        onChange={(e)=>setDriver2Id(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Car ID"
                        type="text"
                        value={carId}
                        onChange={(e)=>setCarId(e.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setStartShiftDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleStartShiftSubmit}>Continue</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
