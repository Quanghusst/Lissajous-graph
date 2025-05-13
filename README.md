
# Lissajous Curve & Signal Visualizer

Một ứng dụng trực quan hóa tương tác giúp bạn khám phá **đường cong Lissajous** và các tín hiệu sin tương ứng theo trục thời gian.

## 🌀 Tính năng

- Vẽ đường cong Lissajous từ hai tín hiệu hình sin: `x(t) = Ax·sin(a·t)`, `y(t) = Ay·sin(b·t + δ)`
- Trực quan hóa riêng hai tín hiệu `x(t)` và `y(t)` theo thời gian
- Giao diện đẹp, dễ sử dụng, thay đổi thông số động:
  - **Ax, Ay**: Biên độ
  - **a, b**: Tần số
  - **δ (delta)**: Pha (theo độ)

## 📁 Cấu trúc dự án

```plaintext
.
├── index.html        # Giao diện người dùng chính
├── script.js         # Logic vẽ đồ thị và xử lý tương tác
├── style.css         # Thiết kế giao diện người dùng
