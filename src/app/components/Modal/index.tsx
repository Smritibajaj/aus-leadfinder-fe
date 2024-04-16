import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LeadForm from "../LeadForm";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LeadModal({ open, handleClose }: any) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <LeadForm />
                </Box>
            </Modal>
        </div>
    );
}
