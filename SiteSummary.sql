select * from groups, sites, sectors where groups."Active"::INTEGER = 1 AND groups."SiteID"::INTEGER = sites."SiteID"::INTEGER AND sites."SectorID"::INTEGER = sectors."SectorID"::INTEGER;