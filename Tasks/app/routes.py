from flask import Blueprint, request, jsonify
from app import db
from app.models import Task

tasks_bp = Blueprint("tasks", __name__)

# Get all tasks
@tasks_bp.route("/", methods=["GET"])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])

# Add a new task
@tasks_bp.route("/", methods=["POST"])
def add_task():
    data = request.json
    if not data or "title" not in data:
        return jsonify({"error": "Title is required"}), 400

    new_task = Task(title=data["title"], completed=data.get("completed", False))
    db.session.add(new_task)
    db.session.commit()
    return jsonify(new_task.to_dict()), 201

# Update a task
@tasks_bp.route("/<int:id>", methods=["PUT"])
def update_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    data = request.json
    task.title = data.get("title", task.title)
    task.completed = data.get("completed", task.completed)

    db.session.commit()
    return jsonify(task.to_dict())

# Delete a task
@tasks_bp.route("/<int:id>", methods=["DELETE"])
def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": "Task deleted"}), 200
