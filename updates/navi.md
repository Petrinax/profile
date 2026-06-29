# Experience – [Navi](https://navi.com?utm_source=chatgpt.com) | Software Engineer

## Airflow Migration | DataPlatform Reliability

- Led end-to-end migration of DataPlatform’s orchestration stack from Airflow v2 to v3 across 7 repositories and 92+ PRs, covering major pipeline systems including CDC, Hudi Snapshot, DeltaStream, and Yapper.
- Reduced daily workflow failure rate from ~10% to <1% by resolving orchestration reliability issues and implementing production-safe migration tooling, cutover plans, and rollback strategies.
- Implemented backend API changes in DIS and introduced team-scoped RBAC controls for DAG access, improving platform scalability and security posture.

## Data Ingestion Service

- Identified and resolved a critical scheduling-engine bug causing lag across ~2,000 active Hudi ingestion pipelines in a multi-cloud setup spanning multiple downstream services.
- Owned the fix end-to-end across DIS (backend API + DB changes) and airflow-dags (scheduler + trigger logic), fully replicating and validating the issue in non-production before rollout.
- Executed production deployment with <30 minutes downtime and zero pipeline failures, including authoring rollback plans, monitoring checklists, and deployment runbooks.

## AWS -> OCI Migration – AWS Data Lake Cleanup System

- Designed and built a semi-automated workflow for retiring AWS data lake resources during OCI migration, replacing a fully manual cross-team operational process.
- Developed an end-to-end approval and validation system covering SSL usage checks, DQ validation, automated notifications, owner approvals, and org-wide migration dashboards.
- Reduced operational overhead for the DataPlatform team by converting repeated manual coordination into a scalable self-service workflow.

## Production Reliability & Platform Operations

- Completed 3 independent on-call rotations within 4 months of joining, resolving production incidents across Trino, Spark, Debezium/CDC, Kubernetes, and orchestration systems.
- Prevented a production-wide Airflow 3 retry regression by identifying a `try_number` semantic change before rollout, avoiding silent workflow retry failures.
- Diagnosed and fixed a production transaction timeout issue in Phoenix Service caused by long-held DB locks during Trino query execution.

