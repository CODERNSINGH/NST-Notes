import streamlit as st
import pandas as pd
import numpy as np
import time
from datetime import datetime

# ---------------------------------------------------
# PAGE CONFIG
# ---------------------------------------------------
st.set_page_config(
    page_title="Streamlit Feature Showcase",
    page_icon="🚀",
    layout="wide"
)

# ---------------------------------------------------
# TITLE & INTRO
# ---------------------------------------------------
st.title("🚀 Streamlit One-Page Feature Showcase")
st.subheader("A complete demonstration of Streamlit core features")

st.markdown("""
Streamlit is an **open-source Python framework** used to build **data apps, ML dashboards,
and prototypes** quickly — without frontend knowledge.
""")

st.divider()

# ---------------------------------------------------
# TEXT & MARKDOWN
# ---------------------------------------------------
st.header("📝 Text & Markdown")

st.write("This is rendered using `st.write()`")
st.markdown("""
- **Bold text**
- *Italic text*
- `Inline code`
- [Streamlit Docs](https://docs.streamlit.io)
""")
st.code("""
def hello():
    return "Hello Streamlit"
""", language="python")

# ---------------------------------------------------
# INPUT WIDGETS
# ---------------------------------------------------
st.divider()
st.header("🎛 Input Widgets")

col1, col2, col3 = st.columns(3)

with col1:
    name = st.text_input("Enter your name")
    age = st.number_input("Age", min_value=0, max_value=120)

with col2:
    gender = st.selectbox("Gender", ["Male", "Female", "Other"])
    skills = st.multiselect("Skills", ["Python", "ML", "DL", "NLP", "Web"])

with col3:
    agree = st.checkbox("I agree to terms")
    submit = st.button("Submit")

if submit:
    st.success(f"Hello {name}! 🎉")

# ---------------------------------------------------
# SLIDERS & DATE
# ---------------------------------------------------
st.divider()
st.header("📅 Date, Time & Sliders")

date = st.date_input("Select a date")
time_input = st.time_input("Select time")
score = st.slider("Confidence Level", 0, 100, 50)

st.write("Selected:", date, time_input, score)

# ---------------------------------------------------
# DATA DISPLAY
# ---------------------------------------------------
st.divider()
st.header("📊 Data Display")

df = pd.DataFrame(
    np.random.randn(10, 3),
    columns=["Feature A", "Feature B", "Feature C"]
)

st.dataframe(df)
st.table(df.head())

st.metric("Accuracy", "92%", "+2.1%")

# ---------------------------------------------------
# CHARTS
# ---------------------------------------------------
st.divider()
st.header("📈 Charts")

st.line_chart(df)
st.bar_chart(df)
st.area_chart(df)

# ---------------------------------------------------
# MEDIA
# ---------------------------------------------------
st.divider()
st.header("🖼 Media")

st.image(
    "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.png",
    width=300
)

st.video("https://www.youtube.com/watch?v=R2nr1uZ8ffc")

# ---------------------------------------------------
# FILE UPLOAD
# ---------------------------------------------------
st.divider()
st.header("📂 File Upload")

uploaded_file = st.file_uploader("Upload a CSV file", type=["csv"])
if uploaded_file:
    data = pd.read_csv(uploaded_file)
    st.dataframe(data)

# ---------------------------------------------------
# PROGRESS & STATUS
# ---------------------------------------------------
st.divider()
st.header("⏳ Progress & Status")

if st.button("Run Process"):
    progress = st.progress(0)
    status = st.empty()

    for i in range(100):
        time.sleep(0.02)
        progress.progress(i + 1)
        status.text(f"Processing {i+1}%")

    st.success("Completed successfully!")

# ---------------------------------------------------
# SIDEBAR
# ---------------------------------------------------
st.sidebar.header("⚙ Sidebar Controls")
theme = st.sidebar.radio("Theme", ["Light", "Dark"])
debug = st.sidebar.toggle("Debug Mode")

st.sidebar.write("Theme:", theme)
st.sidebar.write("Debug:", debug)

# ---------------------------------------------------
# SESSION STATE
# ---------------------------------------------------
st.divider()
st.header("🧠 Session State")

if "count" not in st.session_state:
    st.session_state.count = 0

if st.button("Increment Counter"):
    st.session_state.count += 1

st.write("Counter value:", st.session_state.count)

# ---------------------------------------------------
# EXPANDER & TABS
# ---------------------------------------------------
st.divider()
st.header("📂 Expanders & Tabs")

with st.expander("Click to expand"):
    st.write("Hidden content revealed!")

tab1, tab2 = st.tabs(["Tab 1", "Tab 2"])
with tab1:
    st.write("Content in Tab 1")
with tab2:
    st.write("Content in Tab 2")

# ---------------------------------------------------
# FOOTER
# ---------------------------------------------------
st.divider()
st.caption(f"Built with ❤️ using Streamlit | {datetime.now().year}")