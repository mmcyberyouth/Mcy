# Myanmar Cyber Youth Front-end Core Codes

# Demo
https://mcy-frontend-preview.netlify.app/

# Clone Repo

```
git clone https://github.com/https-github-com-amm834/Mcy.git

```

# Who can access to write?
Members of `Myanmar Cyber Youth Org`


# Stable File
- index.html

# File Structure
```
.
├── LICENSE
├── README.md
├── css
│   └── app.css
├── img
├── index.html
└── test
└── test.html
```

# Using New OOCSS Classes

```css
/* Background Colors */

.bg-bgrey {
  background: #292850;
}
.bg-lightgreen {
  background: #20d131;
}

/*  Text Colors */

.text-bgray {
  color: #5b7fb1;
}
.text-sgray {
  color: #4b5b8d;
}

/* Text Shadow */
.text-shadow-sm {
  text-shadow: 1px 3px 1px rgba(0,0,0,0.1),
  1px 3px 1px rgba(0,0,0,0.1)
  ,
  1px 3px 1px rgba(0,0,0,0.1);
}

/* Reduce Width */
.rwidth {
  width: 50px;
  height: auto;
}

/* Svg Icon Width */
.svg {
  width: 20px;
}
```
```diff

/*  Fix Card Image */
+ .fix-img{
+ width: 150px;
+ height: 150px;
}

```