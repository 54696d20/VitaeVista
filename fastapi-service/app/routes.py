from fastapi import APIRouter
from app.models import JobDescription
from app.services import extract_skills

router = APIRouter()

@router.post("/extract-skills/")
async def extract_skills_api(job: JobDescription):
    skills = extract_skills(job.text)
    return {"skills": skills}
