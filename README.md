
# 🎓 Certificate Generator

A Python-based automation tool to generate personalized certificates from a template and participant data. Built using the `Pillow` library, this tool helps efficiently create customized certificates for events, workshops, or online courses.

## 🚀 Features

- Generate certificates for multiple participants from an Excel/CSV file
- Auto-inserts names onto a certificate template image
- Supports font customization (style, size, and position)
- Easy-to-use and fully customizable
- Outputs high-resolution certificate images (PNG format)

## 🛠️ Tech Stack

- **Language**: Python 3
- **Libraries Used**:
  - [`Pillow`](https://pillow.readthedocs.io/) – for image processing
  - [`openpyxl`](https://openpyxl.readthedocs.io/) – for reading Excel files

## 📁 Folder Structure

```

Certificate-Generator/
│
├── Certificates/          # Output folder for generated certificates
├── Names.xlsx             # Excel file containing participant names
├── certificate\_template.png  # Background/template for certificates
├── generate.py            # Main Python script
└── README.md              # This file

````

## 🧑‍💻 How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/Riiyansh/Certificate-Generator.git
cd Certificate-Generator
````

### 2. Install Dependencies

```bash
pip install pillow openpyxl
```

### 3. Prepare Your Files

* Replace `certificate_template.png` with your own certificate background.
* Add participant names to `Names.xlsx` under a column titled `Name`.

### 4. Run the Script

```bash
python generate.py
```

All certificates will be saved in the `Certificates/` folder.

## ✍️ Customization

You can modify the following parameters in `generate.py`:

* **Font**: Change the font file path
* **Font Size**: Adjust the size of the name text
* **Coordinates**: Set X and Y position where the name will appear
* **Text Color**: Change the RGB color of the text

Example:

```python
font = ImageFont.truetype("arial.ttf", 60)
draw.text((x, y), name, fill=(0, 0, 0), font=font)
```

## 📸 Sample Output

Here’s what the generated certificates look like:
![Uploading Screenshot 2025-07-17 at 9.25.36 AM.png…]()


## 🧠 Use Cases

* College or school event certificates
* Workshop participation certificates
* Online course completion certificates
* Hackathon or competition certificates

## 👨‍💼 Author

Made with ❤️ by [Riyansh Chouhan](https://github.com/Riiyansh)
Feel free to open issues or suggest improvements!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```

---

Let me know if you want to convert it into a fancy badge-style README or add deployment (e.g., Streamlit web version) in the future!
```
