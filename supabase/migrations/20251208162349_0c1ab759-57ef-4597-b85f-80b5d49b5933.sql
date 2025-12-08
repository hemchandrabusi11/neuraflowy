-- Drop the public view first (depends on the table)
DROP VIEW IF EXISTS public.reviews_public CASCADE;

-- Drop the orphaned reviews table
DROP TABLE IF EXISTS public.reviews CASCADE;