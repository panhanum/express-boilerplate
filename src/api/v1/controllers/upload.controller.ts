const upload = async (req: any, res: any) => {
  console.log('MASUK');
  try {
    const file = req.file.path;
    console.log(file);
    if (!file) {
      res.status(400).send({
        status: false,
        data: 'No File is selected.',
      });
    }
    res.send(file);
  } catch (err: any) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

export default {
  upload,
};
