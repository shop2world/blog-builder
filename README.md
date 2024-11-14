# Django React Blog Builder

Django와 React를 활용한 현대적인 블로그 빌더 프로젝트입니다.

## 기술 스택

### 백엔드
- Django 5.0
- Django REST Framework
- SQLite3
- Django CORS Headers

### 프론트엔드
- React 18
- React Router DOM
- Material-UI
- Axios

## 설치 방법

### 1. 저장소 클론
```bash
git clone https://github.com/shop2world/blog-builder.git
cd blog-builder
```

### 2. 백엔드 설정
```bash
# 가상환경 생성 및 활성화
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# 필요한 패키지 설치
cd backend
pip install -r requirements.txt

# 데이터베이스 마이그레이션
python manage.py makemigrations
python manage.py migrate

# 관리자 계정 생성
python manage.py createsuperuser

# 개발 서버 실행
python manage.py runserver
```

### 3. 프론트엔드 설정
```bash
# 프론트엔드 디렉토리로 이동
cd frontend

# 필요한 패키지 설치
npm install

# 개발 서버 실행
npm start
```

## 접속 주소
- 프론트엔드: http://localhost:3000
- 백엔드 API: http://localhost:8000/api/
- 관리자 페이지: http://localhost:8000/admin/

## API 엔드포인트
- GET /api/posts/ - 포스트 목록 조회
- GET /api/posts/{id}/ - 특정 포스트 조회
- POST /api/posts/ - 새 포스트 생성
- PUT /api/posts/{id}/ - 포스트 수정
- DELETE /api/posts/{id}/ - 포스트 삭제

## 개발 환경 요구사항
- Python 3.10 이상
- Node.js 16 이상
- npm 8 이상

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.