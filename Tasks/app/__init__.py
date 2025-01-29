from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    from app.routes import tasks_bp
    app.register_blueprint(tasks_bp, url_prefix="/tasks")

    # Create tables if they do not exist
    with app.app_context():
        db.create_all()

    return app
