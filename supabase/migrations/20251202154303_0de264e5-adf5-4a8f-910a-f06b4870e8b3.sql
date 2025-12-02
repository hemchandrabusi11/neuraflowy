-- Fix: Change view to SECURITY INVOKER (safer, uses caller's permissions)
ALTER VIEW public.reviews_public SET (security_invoker = true);