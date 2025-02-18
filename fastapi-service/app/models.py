from pydantic import BaseModel

class JobDescription(BaseModel):
    text: str
