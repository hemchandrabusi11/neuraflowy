CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  email TEXT,
  product TEXT NOT NULL,
  rating INTEGER NOT NULL,
  comment TEXT NOT NULL,
  image_url TEXT,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT rating_check CHECK (rating >= 1 AND rating <= 5)
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;