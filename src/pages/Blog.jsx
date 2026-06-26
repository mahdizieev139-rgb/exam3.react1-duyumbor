import axios from "axios";
import { useEffect, useId, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export default function Blog() {
  const { t } = useTranslation();
  let api = "https://to-dos-api.softclub.tj/api/to-dos";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getUser = useCallback(async () => {
    try {
      const { data } = await axios.get(`${api}?query=${search}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }, [search, api]);

  async function deleteUser(id) {
    try {
      await axios.delete(`${api}?id=${id}`);
      handleClose();
      getUser();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUser();
  }, [getUser]);

  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleSubmitAddDialog = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      handleCloseAddDialog();
      getUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex items-center w-[90%] m-auto! justify-between">
        <h1 className="text-6xl">{t('blog.title')}</h1>

        <div className="flex items-center gap-5">
          <Button
            sx={{ paddingX: "30px", paddingY: "20px" }}
            size="large"
            variant="outlined"
            onClick={handleOpenAddDialog}
          >
            {t('blog.add_user')}
          </Button>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border border-gray-400 px-10 py-5 w-[500px]"
            type="text"
            placeholder={t('blog.search')}
          />
        </div>
      </div>

      <div className="flex flex-wrap m-auto! w-[70%] mt-10! gap-10">
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={`https://to-dos-api.softclub.tj/images/${item.images?.[0]?.imageName}`}
              className="w-[250px] h-[250px] object-cover"
              alt=""
            />

            <div className="border border-yellow-400 w-[250px] p-5">
              <p className="text-[18px] font-medium">{item.name}</p>

              <p className="text-gray-400">
                {item.description}
              </p>

              <Button
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={(e) => handleClick(e, item.id)}
              >
                {t('blog.actions')}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => deleteUser(selectedId)}
          sx={{ color: "red" }}
        >
          {t('blog.delete')}
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ color: "blue" }}>
          {t('blog.edit')}
        </MenuItem>

        <MenuItem
          component={NavLink}
          to={`/info/${selectedId}`}
          onClick={handleClose}
        >
          {t('blog.info')}
        </MenuItem>
      </Menu>

      <Dialog
        open={openAddDialog}
        onClose={handleCloseAddDialog}
      >
        <DialogTitle>{t('blog.add_user')}</DialogTitle>

        <DialogContent>
          <form
            onSubmit={handleSubmitAddDialog}
            id="subscription-form"
            className="flex flex-col gap-4 pt-2"
          >
            <div className="mt-4">
              <label className="block text-sm text-gray-500 mb-1">
                {t('blog.upload_image')}
              </label>

              <input
                type="file"
                name="Images"
                accept="image/*"
                required
              />
            </div>

            <TextField
              id="name"
              name="Name"
              label={t('blog.name')}
              type="text"
              fullWidth
              variant="standard"
            />

            <TextField
              id="description"
              name="Description"
              label={t('blog.description')}
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseAddDialog}>
            {t('blog.cancel')}
          </Button>

          <Button
            type="submit"
            form="subscription-form"
          >
            {t('blog.save')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}