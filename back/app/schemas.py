from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, List

class LocationBase(BaseModel):
    name: str = Field(..., max_length=100)
    description: Optional[str] = None
    max_capacity: int = Field(..., gt=0)
    location_code: Optional[str] = Field(None, max_length=50)

class LocationCreate(LocationBase):
    pass

class Location(LocationBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class AnalysisSessionBase(BaseModel):
    location_id: int
    session_name: Optional[str] = Field(None, max_length=150)
    start_time: datetime

class AnalysisSessionCreate(AnalysisSessionBase):
    pass

class AnalysisSession(AnalysisSessionBase):
    id: int
    end_time: Optional[datetime] = None
    total_analyses: int = 0
    avg_people_count: Optional[float] = None
    peak_people_count: Optional[int] = None
    created_at: datetime
    
    class Config:
        from_attributes = True

class AnalysisResultCreate(BaseModel):
    session_id: int
    location_id: int
    filename: str
    file_type: str
    people_count: int
    confidence: Optional[float] = None
    processing_time: Optional[float] = None

class AnalysisResult(AnalysisResultCreate):
    id: int
    is_overcrowded: bool = False
    timestamp: datetime
    image_path: Optional[str] = None
    
    class Config:
        from_attributes = True

class AnalysisResponse(BaseModel):
    success: bool
    people_count: int
    is_overcrowded: bool
    processing_time: float
    session_id: int
    result_id: int
    image_url: Optional[str] = None

class LocationStatistics(BaseModel):
    location_id: int
    location_name: str
    total_analyses: int
    avg_people_count: float
    overcrowded_count: int
    last_analysis: Optional[datetime]