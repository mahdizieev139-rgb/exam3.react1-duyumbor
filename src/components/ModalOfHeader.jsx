import { useState } from 'react';
import { Dialog, DialogContent, TextField, Button, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalOfHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Button
                variant="contained"
                onClick={handleOpenModal}
                sx={{
                    backgroundColor: 'yellow',
                    color: 'black',
                    fontWeight: 'bold',
                    padding: '12px 30px',
                    borderRadius: '0px',
                    textTransform: 'none',
                }}
            >
                Book a consultation
            </Button>
            <Dialog
                open={isModalOpen}
                onClose={handleCloseModal}
                maxWidth="sm"
                fullWidth
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#ffffff',
                        color: '#242424',
                        padding: { xs: '30px 20px', md: '60px 50px' },
                        position: 'relative',
                        overflow: 'visible',
                        borderRadius: '0px'
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)'
                    }
                }}
            >
                <IconButton
                    onClick={handleCloseModal}
                    sx={{ position: 'absolute',top: '-45px', right: { xs: '10px', md: '-45px' }, color: 'yellow'}}
                >
                    <CloseIcon sx={{ fontSize: '32px' }} />
                </IconButton>

                <DialogContent sx={{ p: 0 }}>
                    <Box sx={{textAlign:'center'}} mb={5}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: 'bold', color: '#242424', marginBottom:'10px', fontSize: { xs: '24px', md: '32px' } }}
                        >
                            Leave your contacts
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                            we will contact you within three hours
                        </Typography><br />
                    </Box>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: '400px', mx: 'auto' }}
                    >
                        <TextField
                            label="Name"
                            variant="standard"
                            fullWidth
                            slotProps={{ inputLabel: { shrink: true } }}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#242424' },
                                '& .MuiInputLabel-root': { color: '#9ca3af' }
                            }}
                        />
                        <TextField
                            label="Phone"
                            variant="standard"
                            fullWidth
                            slotProps={{ inputLabel: { shrink: true } }}
                            sx={{
                                '& .MuiInput-underline:before': { borderBottomColor: '#e5e7eb' },
                                '& .MuiInput-underline:after': { borderBottomColor: '#242424' },
                                '& .MuiInputLabel-root': { color: '#9ca3af' }
                            }}
                        />
                        <Box display="flex" justifyContent="center" mt={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#fcd34d',
                                    color: '#242424',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    borderRadius: '0px',
                                    padding: '10px 60px',
                                    '&:hover': { backgroundColor: '#f59e0b' }
                                }}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>

        </Box>
    );
}